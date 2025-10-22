import React from 'react';
import { useTranslation } from 'react-i18next';
import OriginsPurposeParagraph1Section from './OriginsPurposeParagraph1Section';
import OriginsPurposeParagraph2Section from './OriginsPurposeParagraph2Section';

interface OriginsPurposeSectionProps {
  id: string;
}

const OriginsPurposeSection: React.FC<OriginsPurposeSectionProps> = ({ id }) => {
  const { t } = useTranslation();

  return (
    <section id={id} className="py-16 md:py-24 bg-background text-foreground border-t border-gray-200 dark:border-gray-800">
      <div className="container max-w-4xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          {t('origins_purpose.title')}
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <OriginsPurposeParagraph1Section />
          <OriginsPurposeParagraph2Section />
        </div>
      </div>
    </section>
  );
};

export default OriginsPurposeSection;