import React from 'react';
import { useTranslation } from 'react-i18next';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import AccordionContentItem from './AccordionContentItem';

interface EducationLearningSectionProps {
  id: string;
}

const EducationLearningSection: React.FC<EducationLearningSectionProps> = ({ id }) => {
  const { t } = useTranslation();

  return (
    <section id={id} className="py-16 md:py-24 bg-background text-foreground border-t">
      <div className="container max-w-4xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          {t('education_learning.title')}
        </h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-xl">{t('education_learning.academic.title')}</AccordionTrigger>
            <AccordionContent>
              <AccordionContentItem imageSeed="eder-academic">
                <p>{t('education_learning.academic.content')}</p>
              </AccordionContentItem>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-xl">{t('education_learning.theology.title')}</AccordionTrigger>
            <AccordionContent>
              <AccordionContentItem imageSeed="eder-theology">
                <p>{t('education_learning.theology.content')}</p>
              </AccordionContentItem>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-xl">{t('education_learning.english.title')}</AccordionTrigger>
            <AccordionContent>
              <AccordionContentItem imageSeed="eder-english">
                <p>{t('education_learning.english.content')}</p>
              </AccordionContentItem>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default EducationLearningSection;