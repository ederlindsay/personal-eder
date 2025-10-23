import React from 'react';
import { useTranslation } from 'react-i18next';
import { Badge } from '@/components/ui/badge';

interface RelationalCharacteristicsSectionProps {
  id: string;
}

const RelationalCharacteristicsSection: React.FC<RelationalCharacteristicsSectionProps> = ({ id }) => {
  const { t } = useTranslation();
  const characteristics = t('relational_characteristics.characteristics').split(', ');

  return (
    <section id={id} className="py-16 md:py-24 bg-muted text-foreground border-t">
      <div className="container max-w-4xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          {t('relational_characteristics.title')}
        </h2>
        <p className="text-lg text-muted-foreground mb-8 text-left">
          {t('relational_characteristics.intro_short')}
        </p>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-wrap gap-2 justify-start">
            {characteristics.map((char, index) => (
              <Badge key={index} variant="default" className="text-base px-3 py-1 bg-primary text-primary-foreground">
                {char}
              </Badge>
            ))}
          </div>
          <div className="relative w-full h-64 rounded-lg overflow-hidden">
            <img
              src="https://picsum.photos/seed/eder-relational/800/600"
              alt={t('relational_characteristics.title')}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelationalCharacteristicsSection;