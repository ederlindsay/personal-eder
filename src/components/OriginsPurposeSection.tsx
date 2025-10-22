import React from 'react';
import { useTranslation } from 'react-i18next';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import AccordionContentItem from './AccordionContentItem';

interface OriginsPurposeSectionProps {
  id: string;
}

const OriginsPurposeSection: React.FC<OriginsPurposeSectionProps> = ({ id }) => {
  const { t } = useTranslation();

  return (
    <section id={id} className="py-16 md:py-24 bg-background text-foreground border-t">
      <div className="container max-w-4xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          {t('origins_purpose.title')}
        </h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-xl">{t('origins_purpose.humble_beginnings.title')}</AccordionTrigger>
            <AccordionContent>
              <AccordionContentItem imageSeed="eder-origins-1">
                <p>{t('origins_purpose.humble_beginnings.content')}</p>
              </AccordionContentItem>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-xl">{t('origins_purpose.early_dreams.title')}</AccordionTrigger>
            <AccordionContent>
              <AccordionContentItem imageSeed="eder-dreams-1">
                <p>{t('origins_purpose.early_dreams.content')}</p>
              </AccordionContentItem>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default OriginsPurposeSection;