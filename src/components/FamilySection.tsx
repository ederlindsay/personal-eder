import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Accordion,
  AccordionContent as ShadcnAccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AccordionContent from './AccordionContent';

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
          <AccordionItem value="close-family">
            <AccordionTrigger className="text-xl font-semibold">{t('family.close_family.title')}</AccordionTrigger>
            <ShadcnAccordionContent>
              <AccordionContent imageSrc="https://picsum.photos/seed/eder-close-family/800/600" imageAlt={t('family.close_family.title')}>
                <p>{t('family.close_family.paragraph1')}</p>
              </AccordionContent>
            </ShadcnAccordionContent>
          </AccordionItem>
          <AccordionItem value="extended-family">
            <AccordionTrigger className="text-xl font-semibold">{t('family.extended_family.title')}</AccordionTrigger>
            <ShadcnAccordionContent>
              <AccordionContent imageSrc="https://picsum.photos/seed/eder-extended-family/800/600" imageAlt={t('family.extended_family.title')}>
                <p>{t('family.extended_family.paragraph1')}</p>
              </AccordionContent>
            </ShadcnAccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default FamilySection;