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
      <div className="container max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          {t('relational_characteristics.title')}
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          {t('relational_characteristics.intro_short')}
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {characteristics.map((char, index) => (
            <Badge key={index} variant="default" className="text-lg px-4 py-2">
              {char}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelationalCharacteristicsSection;