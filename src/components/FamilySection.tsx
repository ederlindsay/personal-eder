import React from 'react';
import { useTranslation } from 'react-i18next';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import AccordionContentItem from './AccordionContentItem';

interface FamilySectionProps {
  id: string;
}

const FamilySection: React.FC<FamilySectionProps> = ({ id }) => {
  const { t } = useTranslation();

  return (
    <section id={id} className="py-16 md:py-24 bg-background text-foreground border-t">
      <div className="container max-w-4xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          {t('family.title')}
        </h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-xl">{t('family.close_family.title')}</AccordionTrigger>
            <AccordionContent>
              <AccordionContentItem imageSeed="eder-close-family">
                <p>{t('family.close_family.content')}</p>
              </AccordionContentItem>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-xl">{t('family.extended_family.title')}</AccordionTrigger>
            <AccordionContent>
              <AccordionContentItem imageSeed="eder-extended-family">
                <p>{t('family.extended_family.content')}</p>
              </AccordionContentItem>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default FamilySection;