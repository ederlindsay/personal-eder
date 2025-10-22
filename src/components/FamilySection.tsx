import React from 'react';
import { useTranslation } from 'react-i18next';
import SegmentedButtons from './SegmentedButtons';
import AccordionContentItem from './AccordionContentItem';

interface FamilySectionProps {
  id: string;
}

const FamilySection: React.FC<FamilySectionProps> = ({ id }) => {
  const { t } = useTranslation();

  const items = [
    {
      value: 'close_family',
      label: t('family.close_family.title'),
      content: (
        <AccordionContentItem imageSeed="familia-proxima" imagePosition="left">
          <p>{t('family.close_family.content')}</p>
        </AccordionContentItem>
      ),
    },
    {
      value: 'extended_family',
      label: t('family.extended_family.title'),
      content: (
        <AccordionContentItem imageSrc="/images/familia-extendida.jpeg" imagePosition="right">
          <p>{t('family.extended_family.content')}</p>
        </AccordionContentItem>
      ),
    },
  ];

  return (
    <section id={id} className="py-16 md:py-24 bg-background text-foreground border-t">
      <div className="container max-w-4xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          {t('family.title')}
        </h2>
        <p className="text-lg text-muted-foreground mb-8 text-left">
          {t('family.intro_short')}
        </p>
        <SegmentedButtons items={items} defaultValue="close_family" />
      </div>
    </section>
  );
};

export default FamilySection;