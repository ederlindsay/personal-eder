import React from 'react';

interface AccordionContentProps {
  imageSrc: string;
  imageAlt: string;
  children: React.ReactNode;
}

const AccordionContent: React.FC<AccordionContentProps> = ({ imageSrc, imageAlt, children }) => {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-start pt-4">
      <div className="relative w-full h-72 rounded-lg overflow-hidden group">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="space-y-4 text-base text-muted-foreground">
        {children}
      </div>
    </div>
  );
};

export default AccordionContent;