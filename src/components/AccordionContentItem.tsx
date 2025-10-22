import React from 'react';

interface AccordionContentItemProps {
  imageSeed?: string;
  imageSrc?: string;
  children: React.ReactNode;
  imagePosition?: 'left' | 'right';
}

const AccordionContentItem: React.FC<AccordionContentItemProps> = ({ imageSeed, imageSrc, children, imagePosition = 'left' }) => {
  const imageUrl = imageSrc || (imageSeed ? `https://picsum.photos/seed/${imageSeed}/800/600` : 'https://picsum.photos/800/600');

  const imageEl = (
    <div className="relative w-full h-64 rounded-lg overflow-hidden">
      <img
        src={imageUrl}
        alt={imageSeed || 'Content image'}
        className="w-full h-full object-cover"
      />
    </div>
  );

  const contentEl = (
    <div className="text-base text-muted-foreground space-y-4 text-left">
      {children}
    </div>
  );

  return (
    <div className="grid md:grid-cols-2 gap-8 items-center p-4">
      {imagePosition === 'left' ? (
        <>
          {imageEl}
          {contentEl}
        </>
      ) : (
        <>
          {contentEl}
          {imageEl}
        </>
      )}
    </div>
  );
};

export default AccordionContentItem;