import React from 'react';
import { useTranslation } from 'react-i18next';
import SegmentedButtons from './SegmentedButtons';
import AccordionContentItem from './AccordionContentItem';

interface OriginsPurposeSectionProps {
  id: string;
}

const OriginsPurposeSection: React.FC<OriginsPurposeSectionProps> = ({ id }) => {
  const { t } = useTranslation();

  const items = [
    {
      value: 'humble_beginnings',
      label: t('origins_purpose.humble_beginnings.title'),
      content: (
        <AccordionContentItem imageSrc="images/origens-humildes.png" imagePosition="left">
          <p>{t('origins_purpose.humble_beginnings.content')}</p>
        </AccordionContentItem>
      ),
    },
    {
      value: 'early_dreams',
      label: t('origins_purpose.early_dreams.title'),
      content: (
        <AccordionContentItem imageSrc="images/sonhos-empreendedores.png" imagePosition="right">
          <p>{t('origins_purpose.early_dreams.content')}</p>
        </AccordionContentItem>
      ),
    },
  ];

  return (
    <section id={id} className="py-16 md:py-24 bg-muted text-foreground border-t">
      <div className="container max-w-4xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          {t('origins_purpose.title')}
        </h2>
        <p className="text-lg text-muted-foreground mb-8 text-left">
          {t('origins_purpose.intro_short')}
        </p>
        <SegmentedButtons items={items} defaultValue="humble_beginnings" />
      </div>
    </section>
  );
};

export default OriginsPurposeSection;