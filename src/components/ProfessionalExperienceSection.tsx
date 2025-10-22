import React from 'react';
import { useTranslation } from 'react-i18next';
import SegmentedButtons from './SegmentedButtons';
import AccordionContentItem from './AccordionContentItem';

interface ProfessionalExperienceSectionProps {
  id: string;
}

const ProfessionalExperienceSection: React.FC<ProfessionalExperienceSectionProps> = ({ id }) => {
  const { t } = useTranslation();

  const items = [
    {
      value: 'consulting',
      label: t('professional_experience.consulting.title'),
      content: (
        <AccordionContentItem imageSeed="eder-consulting">
          <p>{t('professional_experience.consulting.content')}</p>
        </AccordionContentItem>
      ),
    },
    {
      value: 'teaching',
      label: t('professional_experience.teaching.title'),
      content: (
        <AccordionContentItem imageSeed="eder-teaching">
          <p>{t('professional_experience.teaching.content')}</p>
        </AccordionContentItem>
      ),
    },
  ];

  return (
    <section id={id} className="py-16 md:py-24 bg-background text-foreground border-t">
      <div className="container max-w-4xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          {t('professional_experience.title')}
        </h2>
        <p className="text-lg text-muted-foreground mb-8 text-left">
          {t('professional_experience.intro_short')}
        </p>
        <SegmentedButtons items={items} defaultValue="consulting" />
      </div>
    </section>
  );
};

export default ProfessionalExperienceSection;