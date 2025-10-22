import React from 'react';
import { useTranslation } from 'react-i18next';
import SegmentedButtons from './SegmentedButtons';
import AccordionContentItem from './AccordionContentItem';

interface EducationLearningSectionProps {
  id: string;
}

const EducationLearningSection: React.FC<EducationLearningSectionProps> = ({ id }) => {
  const { t } = useTranslation();

  const items = [
    {
      value: 'academic',
      label: t('education_learning.academic.title'),
      content: (
        <AccordionContentItem imageSeed="eder-academic">
          <p>{t('education_learning.academic.content')}</p>
        </AccordionContentItem>
      ),
    },
    {
      value: 'theology',
      label: t('education_learning.theology.title'),
      content: (
        <AccordionContentItem imageSeed="eder-theology">
          <p>{t('education_learning.theology.content')}</p>
        </AccordionContentItem>
      ),
    },
    {
      value: 'english',
      label: t('education_learning.english.title'),
      content: (
        <AccordionContentItem imageSeed="eder-english">
          <p>{t('education_learning.english.content')}</p>
        </AccordionContentItem>
      ),
    },
  ];

  return (
    <section id={id} className="py-16 md:py-24 bg-background text-foreground border-t">
      <div className="container max-w-4xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          {t('education_learning.title')}
        </h2>
        <p className="text-lg text-muted-foreground mb-8 text-left">
          {t('education_learning.intro_short')}
        </p>
        <SegmentedButtons items={items} defaultValue="academic" />
      </div>
    </section>
  );
};

export default EducationLearningSection;