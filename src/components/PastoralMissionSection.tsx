import React from 'react';
import { useTranslation } from 'react-i18next';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import AccordionContentItem from './AccordionContentItem';

interface PastoralMissionSectionProps {
  id: string;
}

const PastoralMissionSection: React.FC<PastoralMissionSectionProps> = ({ id }) => {
  const { t } = useTranslation();

  return (
    <section id={id} className="py-16 md:py-24 bg-background text-foreground border-t">
      <div className="container max-w-4xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          {t('pastoral_mission.title')}
        </h2>
        <p className="text-lg text-muted-foreground mb-8 text-left"> {/* Alinhado à esquerda */}
          {t('pastoral_mission.intro_short')}
        </p>
        <Accordion type="single" collapsible className="w-full space-y-2"> {/* Adicionado space-y-2 para espaçamento */}
          <AccordionItem value="item-1" className="border-none"> {/* Removido border-b */}
            <AccordionTrigger className="text-sm px-3 py-1 border border-primary rounded-md hover:bg-primary hover:text-primary-foreground transition-colors w-fit"> {/* Botão menor e w-fit */}
              {t('pastoral_mission.pastor.title')}
            </AccordionTrigger>
            <AccordionContent>
              <AccordionContentItem imageSeed="eder-pastor">
                <p>{t('pastoral_mission.pastor.content')}</p>
              </AccordionContentItem>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="border-none"> {/* Removido border-b */}
            <AccordionTrigger className="text-sm px-3 py-1 border border-primary rounded-md hover:bg-primary hover:text-primary-foreground transition-colors w-fit"> {/* Botão menor e w-fit */}
              {t('pastoral_mission.book.title')}
            </AccordionTrigger>
            <AccordionContent>
              <AccordionContentItem imageSeed="eder-book">
                <p>{t('pastoral_mission.book.content')}</p>
              </AccordionContentItem>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="border-none"> {/* Removido border-b */}
            <AccordionTrigger className="text-sm px-3 py-1 border border-primary rounded-md hover:bg-primary hover:text-primary-foreground transition-colors w-fit"> {/* Botão menor e w-fit */}
              {t('pastoral_mission.social_projects.title')}
            </AccordionTrigger>
            <AccordionContent>
              <AccordionContentItem imageSeed="eder-social">
                <p>{t('pastoral_mission.social_projects.content')}</p>
              </AccordionContentItem>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default PastoralMissionSection;