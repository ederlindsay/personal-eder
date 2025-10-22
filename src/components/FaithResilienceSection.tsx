import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Accordion,
  AccordionContent as ShadcnAccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AccordionContent from './AccordionContent';

interface FaithResilienceSectionProps {
  id: string;
}

const FaithResilienceSection: React.FC<FaithResilienceSectionProps> = ({ id }) => {
  const { t } = useTranslation();

  return (
    <section id={id} className="py-16 md:py-24 bg-background text-foreground border-t">
      <div className="container max-w-4xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          {t('faith_resilience.title')}
        </h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="mission">
            <AccordionTrigger className="text-xl font-semibold">{t('faith_resilience.mission.title')}</AccordionTrigger>
            <ShadcnAccordionContent>
              <AccordionContent imageSrc="https://picsum.photos/seed/eder-mission/800/600" imageAlt={t('faith_resilience.mission.title')}>
                <p>{t('faith_resilience.mission.paragraph1')}</p>
              </AccordionContent>
            </ShadcnAccordionContent>
          </AccordionItem>
          <AccordionItem value="chaos">
            <AccordionTrigger className="text-xl font-semibold">{t('faith_resilience.chaos.title')}</AccordionTrigger>
            <ShadcnAccordionContent>
              <AccordionContent imageSrc="https://picsum.photos/seed/eder-chaos/800/600" imageAlt={t('faith_resilience.chaos.title')}>
                <p>{t('faith_resilience.chaos.paragraph1')}</p>
                <p>{t('faith_resilience.chaos.paragraph2')}</p>
                <p>{t('faith_resilience.chaos.paragraph3')}</p>
              </AccordionContent>
            </ShadcnAccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default FaithResilienceSection;