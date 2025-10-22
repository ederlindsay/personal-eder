import React from 'react';
import { useTranslation } from 'react-i18next';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import AccordionContentItem from './AccordionContentItem';

interface CareerEntrepreneurshipSectionProps {
  id: string;
}

const CareerEntrepreneurshipSection: React.FC<CareerEntrepreneurshipSectionProps> = ({ id }) => {
  const { t } = useTranslation();

  return (
    <section id={id} className="py-16 md:py-24 bg-background text-foreground border-t">
      <div className="container max-w-4xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          {t('career_entrepreneurship.title')}
        </h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-xl">{t('career_entrepreneurship.companies.title')}</AccordionTrigger>
            <AccordionContent>
              <AccordionContentItem imageSeed="eder-companies">
                <p>{t('career_entrepreneurship.companies.content')}</p>
              </AccordionContentItem>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-xl">{t('career_entrepreneurship.current_roles.title')}</AccordionTrigger>
            <AccordionContent>
              <AccordionContentItem imageSeed="eder-roles">
                <p>{t('career_entrepreneurship.current_roles.content')}</p>
              </AccordionContentItem>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default CareerEntrepreneurshipSection;