import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Accordion,
  AccordionContent as ShadcnAccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AccordionContent from './AccordionContent';

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
          <AccordionItem value="humble-beginnings">
            <AccordionTrigger className="text-xl font-semibold">{t('origins_purpose.paragraph1_short_title')}</AccordionTrigger>
            <ShadcnAccordionContent>
              <AccordionContent imageSrc="https://picsum.photos/seed/eder-origins-p1/800/600" imageAlt={t('origins_purpose.paragraph1_short_title')}>
                <p>{t('origins_purpose.paragraph1')}</p>
              </AccordionContent>
            </ShadcnAccordionContent>
          </AccordionItem>
          <AccordionItem value="early-dreams">
            <AccordionTrigger className="text-xl font-semibold">{t('origins_purpose.paragraph2_short_title')}</AccordionTrigger>
            <ShadcnAccordionContent>
              <AccordionContent imageSrc="https://picsum.photos/seed/eder-origins-p2/800/600" imageAlt={t('origins_purpose.paragraph2_short_title')}>
                <p>{t('origins_purpose.paragraph2')}</p>
              </AccordionContent>
            </ShadcnAccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default OriginsPurposeSection;