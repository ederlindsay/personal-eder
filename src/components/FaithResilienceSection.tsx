import React from 'react';
import { useTranslation } from 'react-i18next';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import AccordionContentItem from './AccordionContentItem';

interface FaithResilienceSectionProps {
  id: string;
}

const FaithResilienceSection: React.FC<FaithResilienceSectionProps> = ({ id }) => {
  const { t } = useTranslation();

  return (
    <section id={id} className="py-16 md:py-24 bg-background text-foreground border-t">
      <div className="container max-w-4xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          {t('faith_resilience.title')}
        </h2>
        <p className="text-lg text-muted-foreground mb-8 text-left"> {/* Alinhado à esquerda */}
          {t('faith_resilience.intro_short')}
        </p>
        <Accordion type="single" collapsible className="w-full space-y-2"> {/* Adicionado space-y-2 para espaçamento */}
          <AccordionItem value="item-1" className="border-none"> {/* Removido border-b */}
            <AccordionTrigger className="text-sm px-3 py-1 border border-primary rounded-md hover:bg-primary hover:text-primary-foreground transition-colors w-fit"> {/* Botão menor e w-fit */}
              {t('faith_resilience.mission.title')}
            </AccordionTrigger>
            <AccordionContent>
              <AccordionContentItem imageSeed="eder-mission">
                <p>{t('faith_resilience.mission.content')}</p>
              </AccordionContentItem>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="border-none"> {/* Removido border-b */}
            <AccordionTrigger className="text-sm px-3 py-1 border border-primary rounded-md hover:bg-primary hover:text-primary-foreground transition-colors w-fit"> {/* Botão menor e w-fit */}
              {t('faith_resilience.chaos.title')}
            </AccordionTrigger>
            <AccordionContent>
              <AccordionContentItem imageSeed="eder-chaos">
                <p>{t('faith_resilience.chaos.content_p1')}</p>
                <p>{t('faith_resilience.chaos.content_p2')}</p>
                <p>{t('faith_resilience.chaos.content_p3')}</p>
              </AccordionContentItem>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default FaithResilienceSection;