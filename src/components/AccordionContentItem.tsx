import React from 'react';

interface AccordionContentItemProps {
  imageSeed?: string; // Tornando opcional
  imageSrc?: string; // Adicionando nova prop para caminho de imagem direto
  children: React.ReactNode;
}

const AccordionContentItem: React.FC<AccordionContentItemProps> = ({ imageSeed, imageSrc, children }) => {
  // Prioriza imageSrc, depois imageSeed para picsum, e um fallback genérico
  const imageUrl = imageSrc || (imageSeed ? `https://picsum.photos/seed/${imageSeed}/800/600` : 'https://picsum.photos/800/600');

  return (
    <div className="grid md:grid-cols-2 gap-8 items-center p-4">
      <div className="relative w-full h-64 rounded-lg overflow-hidden">
        <img
          src={imageUrl}
          alt={imageSeed || 'Content image'}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-base text-muted-foreground space-y-4 text-left">
        {children}
      </div>
    </div>
  );
};

export default AccordionContentItem;