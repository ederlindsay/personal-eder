import React from 'react';
import { useTranslation } from 'react-i18next';
import SegmentedButtons from './SegmentedButtons';
import AccordionContentItem from './AccordionContentItem';

interface LeadershipValuesSectionProps {
  id: string;
}

const LeadershipValuesSection: React.FC<LeadershipValuesSectionProps> = ({ id }) => { // Added props interface
  const { t } = useTranslation();

  const items = [
    {
      value: 'leadership',
      label: t('leadership_values.leadership.title'),
      content: (
        <AccordionContentItem imageSrc="images/lideranca.jpeg" imagePosition="left">
          <p>{t('leadership_values.leadership.content')}</p>
        </AccordionContentItem>
      ),
    },
    {
      value: 'values',
      label: t('leadership_values.values.title'),
      content: (
        <AccordionContentItem imageSrc="images/valores.jpeg" imagePosition="right">
          <p>{t('leadership_values.values.content')}</p>
        </AccordionContentItem>
      ),
    },
  ];

  return (
    <section id={id} className="py-16 md:py-24 bg-background text-foreground border-t">
      <div className="container max-w-4xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          {t('leadership_values.title')}
        </h2>
        <p className="text-lg text-muted-foreground mb-8 text-left">
          {t('leadership_values.intro_short')}
        </p>
        <SegmentedButtons items={items} defaultValue="leadership" />
      </div>
    </section>
  );
};

export default LeadershipValuesSection;