import React from 'react';

interface AccordionContentItemProps {
  imageSeed: string;
  children: React.ReactNode;
}

const AccordionContentItem: React.FC<AccordionContentItemProps> = ({ imageSeed, children }) => {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center p-4">
      <div className="relative w-full h-64 rounded-lg overflow-hidden">
        <img
          src={`https://picsum.photos/seed/${imageSeed}/800/600`}
          alt={imageSeed}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-base text-muted-foreground space-y-4 text-left"> {/* Adicionado text-left aqui */}
        {children}
      </div>
    </div>
  );
};

export default AccordionContentItem;