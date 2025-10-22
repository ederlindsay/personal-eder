import React from 'react';
import { useTranslation } from 'react-i18next';
import SegmentedButtons from './SegmentedButtons';
import AccordionContentItem from './AccordionContentItem';

interface FaithResilienceSectionProps {
  id: string;
}

const FaithResilienceSection: React.FC<FaithResilienceSectionProps> = ({ id }) => {
  const { t } = useTranslation();

  const items = [
    {
      value: 'mission',
      label: t('faith_resilience.mission.title'),
      content: (
        <AccordionContentItem imageSeed="eder-mission" imagePosition="left">
          <p>{t('faith_resilience.mission.content')}</p>
        </AccordionContentItem>
      ),
    },
    {
      value: 'chaos',
      label: t('faith_resilience.chaos.title'),
      content: (
        <AccordionContentItem imageSeed="eder-chaos" imagePosition="right">
          <p>{t('faith_resilience.chaos.content_p1')}</p>
          <p>{t('faith_resilience.chaos.content_p2')}</p>
          <p>{t('faith_resilience.chaos.content_p3')}</p>
        </AccordionContentItem>
      ),
    },
  ];

  return (
    <section id={id} className="py-16 md:py-24 bg-muted text-foreground border-t">
      <div className="container max-w-4xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          {t('faith_resilience.title')}
        </h2>
        <p className="text-lg text-muted-foreground mb-8 text-left">
          {t('faith_resilience.intro_short')}
        </p>
        <SegmentedButtons items={items} defaultValue="mission" />
      </div>
    </section>
  );
};

export default FaithResilienceSection;