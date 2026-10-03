/* Escultura de partículas em 3D: cada capítulo ganha uma forma figurativa
   (semente brotando, escada, crisálida, livro, borboleta, árvore, coração).
   Todas as partículas formam a figura do capítulo atual e se transformam
   na próxima quando o capítulo muda. */

const TAU = Math.PI * 2;

type Vec = [number, number, number];
type Seeds = { a: number; b: number; c: number; d: number; e: number };
type Particle = Seeds & { s: number; x: number; y: number; z: number; ox: number; oy: number };

function rng(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const add = (a: Vec, b: Vec): Vec => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
const mul = (a: Vec, k: number): Vec => [a[0] * k, a[1] * k, a[2] * k];
const cross = (a: Vec, b: Vec): Vec => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
const norm = (a: Vec): Vec => { const l = Math.hypot(a[0], a[1], a[2]) || 1; return [a[0] / l, a[1] / l, a[2] / l]; };
const lerp3 = (a: Vec, b: Vec, t: number): Vec => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];

// Screen y points down: negative y is "up".

/* I · semente brotando: solo, semente, caule e duas folhas */
function sprout(p: Seeds): Vec {
  const { a, b, c, d } = p;
  if (a < 0.22) { // solo: disco com borda marcada
    const r = (b < 0.35 ? 1 : Math.sqrt(c)) * 1.05, th = d * TAU;
    return [Math.cos(th) * r, 0.78 + (c - 0.5) * 0.02, Math.sin(th) * r * 0.75];
  }
  if (a < 0.38) { // semente: elipsoide meio enterrado
    const th = b * TAU, ph = Math.acos(2 * c - 1);
    return [Math.sin(ph) * Math.cos(th) * 0.24, 0.68 + Math.cos(ph) * 0.15, Math.sin(ph) * Math.sin(th) * 0.17];
  }
  if (a < 0.52) { // caule em leve S
    const t = b, th = c * TAU, r = 0.018;
    return [Math.sin(t * Math.PI) * 0.09 + Math.cos(th) * r, 0.56 - t * 1.0, Math.sin(th) * r];
  }
  // folhas: contorno, nervura e preenchimento
  const side = a < 0.76 ? 1 : -1;
  const u = b, w = 0.24 * Math.sin(Math.PI * Math.pow(u, 0.85));
  const v = d < 0.4 ? (c < 0.5 ? -1 : 1) : d < 0.6 ? 0 : c * 2 - 1;
  const base: Vec = [side * 0.03, -0.42, 0];
  const along: Vec = norm([side, -0.55, side * 0.25]);
  const across: Vec = norm(cross(along, [0, 0, 1]));
  const droop = 0.22 * u * u;
  const pt = add(add(base, mul(along, u * 0.62)), mul(across, v * w));
  return [pt[0], pt[1] + droop, pt[2] + v * w * 0.35];
}

/* II · escada: degraus subindo, com espelhos, pisos e profundidade */
function stairs(p: Seeds): Vec {
  const { a, b, c, d } = p;
  const N = 8, w = 0.26, h = 0.24, x0 = -1.04, yBase = 0.92, D = 0.46;
  const k = Math.floor(b * N);
  const left = x0 + k * w, right = left + w;
  const top = yBase - (k + 1) * h, bottom = top + h;
  const z = d < 0.5 ? D : -D;
  if (a < 0.5) { // perfil (frente e fundo): espelho + piso
    return c < 0.5 ? [left, bottom - (c * 2) * h, z] : [left + (c * 2 - 1) * w, top, z];
  }
  if (a < 0.7) { // arestas em profundidade
    const x = c < 0.5 ? left : right;
    return [x, top, (d * 2 - 1) * D];
  }
  if (a < 0.8) { // chão e parede do fundo
    return c < 0.5 ? [x0 + c * 2 * N * w, yBase, (d * 2 - 1) * D] : [x0 + N * w, yBase - (c * 2 - 1) * N * h, (d * 2 - 1) * D];
  }
  return [left + c * w, top, (d * 2 - 1) * D]; // superfície dos pisos
}

/* III · crisálida pendurada num galho */
function chrysalis(p: Seeds): Vec {
  const { a, b, c, d } = p;
  if (a < 0.12) { // galho
    const th = c * TAU;
    return [-1.0 + b * 2.0, -1.08 + Math.cos(th) * 0.035 + (b - 0.5) * 0.08, Math.sin(th) * 0.035];
  }
  if (a < 0.15) return [0, -1.05 + b * 0.22, 0]; // fio
  const prof = (t: number) => 0.42 * Math.pow(Math.sin(Math.PI * Math.pow(t, 0.75)), 0.9) * (1 - 0.12 * t);
  const t = d < 0.42 ? (Math.floor(b * 11) + 0.5) / 11 : b; // anéis de segmento
  const y = -0.83 + t * 1.75;
  const th = d >= 0.42 && d < 0.6 ? (Math.floor(c * 6) / 6) * TAU : c * TAU; // meridianos
  const r = prof(t);
  return [Math.cos(th) * r, y, Math.sin(th) * r * 0.85];
}

/* IV · livro aberto com páginas virando */
function book(p: Seeds): Vec {
  const { a, b, c, d } = p;
  const H = 0.72;
  const page = (x: number, y: number): Vec => [x, y, -0.32 * (1 - Math.pow(1 - Math.abs(x), 2))];
  if (a < 0.07) return [0, (b * 2 - 1) * H, 0]; // lombada
  if (a < 0.4) { // contorno das duas páginas
    const side = c < 0.5 ? -1 : 1;
    if (d < 0.5) return page(side * b, d < 0.25 ? -H : H);
    return page(side, (b * 2 - 1) * H);
  }
  if (a < 0.78) { // linhas de texto
    const side = c < 0.5 ? -1 : 1;
    const line = Math.floor(d * 14), y = -H + 0.12 + line * ((2 * H - 0.24) / 13);
    const len = line % 5 === 4 ? 0.5 : 0.84;
    return page(side * (0.1 + b * len * 0.86), y);
  }
  // três folhas no ar, virando
  const k = Math.min(2, Math.floor(((a - 0.78) / 0.22) * 3)), ang = [0.55, 1.05, 1.5][k];
  const edge = b < 0.6;
  const x = edge && b >= 0.3 ? 1 : c;
  const y = edge ? (b < 0.3 ? (d < 0.5 ? -H : H) : (d * 2 - 1) * H) : (d * 2 - 1) * H;
  const lift = Math.sin(x * Math.PI * 0.5) * 0.12;
  return [Math.cos(ang) * x, y, -Math.sin(ang) * x - lift];
}

/* V · borboleta: contorno das asas, preenchimento, corpo e antenas */
function butterfly(p: Seeds): Vec {
  const { a, b, c, d } = p;
  if (a < 0.08) return [(c - 0.5) * 0.06, -0.62 + b * 1.3, (d - 0.5) * 0.06]; // corpo
  if (a < 0.13) { // antenas
    const side = c < 0.5 ? -1 : 1, t = b;
    return [side * (0.05 + t * 0.32), -0.64 - t * 0.5 + t * t * 0.12, 0];
  }
  const t = b * 12 * Math.PI;
  const r = Math.exp(Math.cos(t)) - 2 * Math.cos(4 * t) - Math.pow(Math.sin(t / 12), 5);
  const f = a < 0.6 ? 1 : 0.35 + 0.65 * Math.sqrt(c);
  return [Math.sin(t) * r * 0.3 * f, -Math.cos(t) * r * 0.3 * f + 0.12, (d - 0.5) * 0.03];
}
const isWing = (p: Seeds) => p.a >= 0.13;

/* VI · árvore ramificada */
type Seg = { a: Vec; b: Vec; len: number };
const TREE: { segs: Seg[]; tips: Vec[]; total: number } = (() => {
  const segs: Seg[] = [], tips: Vec[] = [];
  const grow = (pos: Vec, dir: Vec, len: number, depth: number, twist: number) => {
    const end = add(pos, mul(dir, len));
    segs.push({ a: pos, b: end, len });
    if (depth === 0) { tips.push(end); return; }
    const u = norm(Math.abs(dir[1]) > 0.9 ? cross(dir, [1, 0, 0]) : cross(dir, [0, 1, 0]));
    const v = cross(dir, u);
    for (let m = 0; m < 3; m++) {
      const phi = twist + (m * TAU) / 3, spread = 0.52;
      const side = add(mul(u, Math.cos(phi)), mul(v, Math.sin(phi)));
      const nd = norm(add(mul(dir, Math.cos(spread)), mul(side, Math.sin(spread))));
      grow(end, nd, len * 0.7, depth - 1, twist + 0.9);
    }
  };
  grow([0, 1.05, 0], [0, -1, 0], 0.62, 5, 0.3);
  return { segs, tips, total: segs.reduce((s, g) => s + g.len, 0) };
})();
function tree(p: Seeds): Vec {
  const { a, b, c, d } = p;
  if (a < 0.3) { // copa: pequenos tufos nas pontas
    const tip = TREE.tips[Math.floor(b * TREE.tips.length)];
    const th = c * TAU, ph = Math.acos(2 * d - 1), r = 0.06 * Math.cbrt(((a * 31) % 1) + 0.1);
    return [tip[0] + Math.sin(ph) * Math.cos(th) * r, tip[1] + Math.cos(ph) * r, tip[2] + Math.sin(ph) * Math.sin(th) * r];
  }
  let target = b * TREE.total, seg = TREE.segs[0];
  for (const s of TREE.segs) { if (target <= s.len) { seg = s; break; } target -= s.len; }
  const pt = lerp3(seg.a, seg.b, Math.min(1, target / seg.len));
  const thick = 0.012 + seg.len * 0.05, th = c * TAU;
  return [pt[0] + Math.cos(th) * thick, pt[1], pt[2] + Math.sin(th) * thick];
}

/* VII · coração em volume */
function heart(p: Seeds): Vec {
  const { a, b, c } = p;
  const t = b * TAU;
  const hx = (16 * Math.pow(Math.sin(t), 3)) / 17;
  const hy = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t)) / 17;
  const s = a < 0.4 ? 1 : Math.sqrt(c);
  const z = a < 0.4 ? 0 : (c < 0.5 ? -1 : 1) * 0.32 * Math.sqrt(Math.max(0, 1 - s * s)) * (0.6 + 0.4 * ((a * 13) % 1));
  return [hx * s * 0.95, hy * s * 0.95 + 0.05, z];
}

const SHAPES = [sprout, stairs, chrysalis, book, butterfly, tree, heart];
export const K = SHAPES.length;
// Camera elevation per figure (the staircase reads best from above).
const TILT = [-0.22, -0.3, -0.1, -0.3, -0.05, -0.18, -0.05];
// Share of each figure's accent parts drawn in orange.
const WARM = [0, 0, 0, 0, 0.75, 0.35, 0.55];
const ACCENT = [
  () => false,
  () => false,
  () => false,
  () => false,
  (p: Seeds) => isWing(p),
  (p: Seeds) => p.a < 0.3, // copa
  () => true,
];

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
  const n = opts.particles;
  const P: Particle[] = [];
  const T: Float32Array[] = SHAPES.map(() => new Float32Array(n * 3));
  const accent: Uint8Array[] = SHAPES.map(() => new Uint8Array(n));
  const wing = new Uint8Array(n);
  for (let i = 0; i < n; i++) {
    const p: Particle = {
      a: rand(), b: rand(), c: rand(), d: rand(), e: rand(), s: rand(),
      x: (rand() - 0.5) * 4, y: (rand() - 0.5) * 4, z: (rand() - 0.5) * 4, ox: 0, oy: 0,
    };
    for (let k = 0; k < K; k++) {
      const v = SHAPES[k](p);
      T[k][i * 3] = v[0]; T[k][i * 3 + 1] = v[1]; T[k][i * 3 + 2] = v[2];
      accent[k][i] = ACCENT[k](p) ? 1 : 0;
    }
    wing[i] = isWing(p) ? 1 : 0;
    P.push(p);
  }
  const reduce = typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  const q = [0, 0, 0, 0];

  const E = {
    focus: 0,
    t: 0,
    yaw: 0,
    mx: 0, my: 0, smx: 0, smy: 0,
    px: -9999, py: -9999,
    cx: opts.focusX(0),
    warm: 0,
    tilt: TILT[0],
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
      // Gentle sway instead of a full spin, so each figure stays readable.
      E.yaw = Math.sin(E.t * 0.25) * 0.65;
      E.smx += (E.mx - E.smx) * ease(0.05);
      E.smy += (E.my - E.smy) * ease(0.05);
      E.cx += (opts.focusX(f0) - E.cx) * ease(0.05);
      E.warm += (WARM[f0] - E.warm) * ease(0.04);
      E.tilt += (TILT[f0] - E.tilt) * ease(0.05);

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const W = canvas.width, H = canvas.height, cx = W * E.cx, cy = H * 0.42;
      const base = Math.min(W, H) * opts.focusScale;
      const ry = E.yaw + E.smx * 0.7, rx = E.tilt + E.smy * 0.35;
      const cY = Math.cos(ry), sY = Math.sin(ry), cX = Math.cos(rx), sX = Math.sin(rx);
      const proj = (x: number, y: number, z: number) => {
        const x1 = x * cY - z * sY, z1 = x * sY + z * cY, y1 = y * cX - z1 * sX, z2 = y * sX + z1 * cX, f = 3.6 / (3.6 + z2);
        q[0] = cx + x1 * base * f; q[1] = cy + y1 * base * f; q[2] = z2; q[3] = f;
      };

      const tgt = T[f0], acc = accent[f0];
      const fa = Math.sin(E.t * 2.6) * 0.8, cF = Math.cos(fa), sF = Math.sin(fa);
      const kp = ease(0.07);
      const px = E.px * dpr, py = E.py * dpr, rad = 90 * dpr, rad2 = rad * rad;
      const jit = 0.0007 * sp;
      for (let j = 0; j < n; j++) {
        const p = P[j];
        let tx = tgt[j * 3], tz = tgt[j * 3 + 2];
        const ty = tgt[j * 3 + 1];
        if (f0 === 4 && wing[j]) { const ax = Math.abs(tx); tx = tx * cF; tz = tz + ax * sF; }
        p.x += (tx - p.x) * kp + Math.sin(E.t * 0.9 + p.s * 40) * jit;
        p.y += (ty - p.y) * kp + Math.cos(E.t * 0.8 + p.e * 40) * jit;
        p.z += (tz - p.z) * kp;
        proj(p.x, p.y, p.z);
        const sx = q[0], sy = q[1];
        if (opts.repel) {
          const dx = sx + p.ox - px, dy = sy + p.oy - py, d2 = dx * dx + dy * dy;
          if (d2 < rad2) { const d = Math.sqrt(d2) + 0.001, kf = (1 - d / rad) * 6 * dpr; p.ox += (dx / d) * kf; p.oy += (dy / d) * kf; }
          p.ox *= 0.88; p.oy *= 0.88;
        }
        const depth = Math.min(1, Math.max(0, (1.4 - q[2]) / 2.8));
        const al = 0.16 + depth * 0.74;
        const size = (0.6 + p.s * 0.9) * q[3] * dpr;
        ctx.fillStyle = acc[j] && p.e < E.warm ? `rgba(217,98,43,${al.toFixed(3)})` : `rgba(22,22,20,${al.toFixed(3)})`;
        ctx.fillRect(sx + p.ox - size / 2, sy + p.oy - size / 2, size, size);
      }
    },
  };
  return E;
}
