/* Escultura de partículas em 3D: cada capítulo tem uma forma (semente, escada, casulo…). */

const TAU = Math.PI * 2;

type Seeds = { a: number; b: number; c: number; d: number };
type Particle = Seeds & {
  k: number; e: number; s: number;
  x: number; y: number; z: number;
  lx: number; ly: number; lz: number;
  ox: number; oy: number;
};

function rng(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function fib(i: number, n: number): [number, number, number] {
  const y = 1 - (2 * (i + 0.5)) / n;
  const r = Math.sqrt(Math.max(0, 1 - y * y));
  const th = i * 2.399963;
  return [Math.cos(th) * r, y, Math.sin(th) * r];
}

type Shape = (i: number, n: number, p: Seeds) => [number, number, number];

const SHAPES: Shape[] = [
  // I · semente sobre o solo
  (i, n, p) => {
    if (p.a < 0.5) {
      const v = fib(i, n), R = 0.3 * Math.cbrt(p.b + 0.05);
      return [v[0] * R, v[1] * R * 1.3 - 0.15, v[2] * R];
    }
    return [(p.b - 0.5) * 2.2, 0.5 + Math.pow(p.c, 3) * 0.35, (p.d - 0.5) * 0.9];
  },
  // II · escada em espiral
  (i, n, p) => {
    const t = p.b, ang = t * TAU * 3, y = 1.1 - t * 2.2, R = 0.55;
    if (p.a < 0.36) return [Math.cos(ang) * R, y, Math.sin(ang) * R];
    if (p.a < 0.72) return [Math.cos(ang + Math.PI) * R, y, Math.sin(ang + Math.PI) * R];
    const k = Math.round(t * 24) / 24, a2 = k * TAU * 3, y2 = 1.1 - k * 2.2, u = p.c * 2 - 1;
    return [Math.cos(a2) * R * u, y2, Math.sin(a2) * R * u];
  },
  // III · casulo
  (i, n, p) => {
    if (p.a < 0.05) return [(p.b - 0.5) * 0.015, -1.02 - p.c * 0.6, 0];
    const v = fib(i, n), bulge = 1 + 0.2 * Math.cos(v[1] * 2.6), R = 1 + (p.b - 0.5) * 0.04;
    return [v[0] * 0.46 * bulge * R, v[1] * R, v[2] * 0.46 * bulge * R];
  },
  // IV · a espiral se solta
  (i, n, p) => {
    const arm = Math.floor(p.a * 3), r = Math.pow(p.b, 0.7) * 1.3, th = r * 2.8 + (arm * TAU) / 3 + (p.c - 0.5) * 0.55;
    return [Math.cos(th) * r, (p.d - 0.5) * 0.12 * (1.5 - r), Math.sin(th) * r];
  },
  // V · borboleta
  (i, n, p) => {
    if (p.a < 0.06) return [(p.b - 0.5) * 0.03, (p.c - 0.55) * 0.95, 0];
    const t = p.b * 12 * Math.PI;
    const r = Math.exp(Math.cos(t)) - 2 * Math.cos(4 * t) - Math.pow(Math.sin(t / 12), 5);
    const f = 0.55 + 0.45 * Math.sqrt(p.c);
    return [Math.sin(t) * r * 0.24 * f, -Math.cos(t) * r * 0.24 * f, (p.d - 0.5) * 0.04];
  },
  // VI · multiplicação
  (i, n, p) => {
    const k = Math.floor(p.a * 7), ang = ((k - 1) / 6) * TAU;
    const cx = k ? Math.cos(ang) * 0.95 : 0, cz = k ? Math.sin(ang) * 0.95 : 0, cy = k ? (k % 2 ? -0.2 : 0.2) : 0;
    const v = fib(i, n), R = (k ? 0.16 : 0.3) * Math.cbrt(p.b + 0.05);
    return [cx + v[0] * R, cy + v[1] * R, cz + v[2] * R];
  },
  // VII · nova criatura, com órbita
  (i, n, p) => {
    if (p.a < 0.62) {
      const v = fib(i, n), R = 0.62;
      return [v[0] * R, v[1] * R, v[2] * R];
    }
    const r = 0.95 + p.b * 0.4, th = p.c * TAU;
    return [Math.cos(th) * r, (p.d - 0.5) * 0.03, Math.sin(th) * r];
  },
];

export const K = 7;
const CENTERS: [number, number, number][] = Array.from({ length: K }, (_, k) => {
  const a = (k / K) * TAU - Math.PI / 2;
  return [Math.cos(a) * 1.75, k % 2 ? -0.28 : 0.28, Math.sin(a) * 1.75];
});
const WARM = [0, 0, 0, 0.05, 0.7, 0.4, 0.25];

export type EngineOptions = {
  particles: number;
  /** horizontal center of the sculpture for chapter k, 0–1 */
  focusX: (k: number) => number;
  /** sculpture scale relative to min(width, height) */
  focusScale: number;
  repel: boolean;
};

export type Engine = ReturnType<typeof makeEngine>;

export function makeEngine(canvas: HTMLCanvasElement, opts: EngineOptions) {
  const ctx = canvas.getContext("2d");
  const rand = rng(11);
  const per = Math.floor(opts.particles / K);
  const n = per * K;
  const P: Particle[] = [];
  for (let i = 0; i < n; i++) {
    const k = Math.floor(i / per);
    const p: Particle = {
      k, a: rand(), b: rand(), c: rand(), d: rand(), e: rand(), s: rand(),
      x: (rand() - 0.5) * 6, y: (rand() - 0.5) * 6, z: (rand() - 0.5) * 6,
      lx: 0, ly: 0, lz: 0, ox: 0, oy: 0,
    };
    const v = SHAPES[k](i - k * per, per, p);
    p.lx = v[0]; p.ly = v[1]; p.lz = v[2];
    P.push(p);
  }
  const reduce = typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  const warmNow = new Array(K).fill(0);
  const q = [0, 0, 0, 0];

  const E = {
    focus: 0,
    t: 0,
    yaw: 0.3,
    drag: false,
    mx: 0, my: 0, smx: 0, smy: 0,
    px: -9999, py: -9999,
    cx: opts.focusX(0),
    speed: 1,
    W: 0, H: 0, dpr: 1,
    last: 0,
    frame() {
      if (!ctx) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2), cw = canvas.clientWidth, ch = canvas.clientHeight;
      if (!cw || !ch) return;
      if (cw !== E.W || ch !== E.H || dpr !== E.dpr) {
        E.W = cw; E.H = ch; E.dpr = dpr;
        canvas.width = cw * dpr; canvas.height = ch * dpr;
      }
      const now = performance.now();
      // Frame-rate independent: `step` is 1 at 60fps.
      const step = E.last ? Math.min(6, Math.max(0.25, (now - E.last) / 16.67)) : 1;
      E.last = now;
      const ease = (r: number) => 1 - Math.pow(1 - r, step);
      const sp = reduce ? 0 : E.speed, f0 = E.focus;
      E.t += 0.016 * sp * step;
      if (!E.drag) E.yaw += 0.0035 * sp * step;
      E.smx += (E.mx - E.smx) * ease(0.05);
      E.smy += (E.my - E.smy) * ease(0.05);
      E.cx += (opts.focusX(f0) - E.cx) * ease(0.05);
      for (let k = 0; k < K; k++) {
        const wt = f0 === k ? WARM[k] : k === 4 ? 0.7 : 0;
        warmNow[k] += (wt - warmNow[k]) * ease(0.05);
      }
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const W = canvas.width, H = canvas.height, cx = W * E.cx, cy = H * 0.5;
      const base = Math.min(W, H) * opts.focusScale;
      const ry = E.yaw + E.smx * 0.35, rx = -0.16 + E.smy * 0.25;
      const cY = Math.cos(ry), sY = Math.sin(ry), cX = Math.cos(rx), sX = Math.sin(rx);
      const proj = (x: number, y: number, z: number) => {
        const x1 = x * cY - z * sY, z1 = x * sY + z * cY, y1 = y * cX - z1 * sX, z2 = y * sX + z1 * cX, f = 3.6 / (3.6 + z2);
        q[0] = cx + x1 * base * f; q[1] = cy + y1 * base * f; q[2] = z2; q[3] = f;
      };

      ctx.lineWidth = dpr;
      {
        ctx.strokeStyle = "rgba(22,22,20,0.07)";
        for (let o = 0; o < 2; o++) {
          const R = base * (1.7 + o * 0.3), sq = Math.abs(Math.sin(rx + 0.42)) * 0.9 + 0.08;
          ctx.beginPath(); ctx.ellipse(cx, cy, R, R * sq, 0, 0, TAU); ctx.stroke();
          const oa = E.t * (0.35 - o * 0.12) + o * 2;
          ctx.fillStyle = o ? "rgba(217,98,43,0.85)" : "rgba(22,22,20,0.55)";
          ctx.beginPath(); ctx.arc(cx + Math.cos(oa) * R, cy + Math.sin(oa) * R * sq, 2.2 * dpr, 0, TAU); ctx.fill();
        }
      }

      const fa = Math.sin(E.t * 2.8) * 0.75, cF = Math.cos(fa), sF = Math.sin(fa);
      const kp = ease(0.06);
      const px = E.px * dpr, py = E.py * dpr, rad = 100 * dpr, rad2 = rad * rad;
      for (let j = 0; j < n; j++) {
        const p = P[j], k2 = p.k;
        let lx = p.lx, lz = p.lz;
        const ly = p.ly;
        if (k2 === 4 && p.a >= 0.06) { const ax = Math.abs(lx); lx = lx * cF; lz = lz + ax * sF; }
        const C2 = CENTERS[k2];
        let tx: number, ty: number, tz: number;
        if (f0 === k2) { tx = lx; ty = ly; tz = lz; }
        else { tx = C2[0] * 2.7 + lx * 0.12; ty = C2[1] * 2 + ly * 0.12; tz = C2[2] * 2.7 + lz * 0.12; }
        const jit = 0.0016 * sp;
        p.x += (tx - p.x) * kp + Math.sin(E.t * 0.9 + p.s * 40) * jit;
        p.y += (ty - p.y) * kp + Math.cos(E.t * 0.8 + p.e * 40) * jit;
        p.z += (tz - p.z) * kp;
        proj(p.x, p.y, p.z);
        const sx = q[0], sy = q[1];
        if (opts.repel) {
          const dx = sx + p.ox - px, dy = sy + p.oy - py, d2 = dx * dx + dy * dy;
          if (d2 < rad2) { const d = Math.sqrt(d2) + 0.001, kf = (1 - d / rad) * 8 * dpr; p.ox += (dx / d) * kf; p.oy += (dy / d) * kf; }
          p.ox *= 0.9; p.oy *= 0.9;
        }
        const depth = Math.min(1, Math.max(0, (2 - q[2]) / 4));
        let al = 0.1 + depth * 0.72;
        if (f0 !== k2) al *= 0.35;
        const size = (0.55 + p.s * 1.2) * q[3] * dpr * (f0 === k2 ? 1.15 : 1);
        ctx.fillStyle = p.e < warmNow[k2] ? `rgba(217,98,43,${(al * 0.95).toFixed(3)})` : `rgba(22,22,20,${al.toFixed(3)})`;
        ctx.fillRect(sx + p.ox - size / 2, sy + p.oy - size / 2, size, size);
      }
    },
  };
  return E;
}
