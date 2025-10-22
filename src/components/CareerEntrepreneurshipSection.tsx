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
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          {t('career_entrepreneurship.title')}
        </h2>
        <p className="text-lg text-muted-foreground mb-8 text-left"> {/* Alinhado à esquerda */}
          {t('career_entrepreneurship.intro_short')}
        </p>
        <Accordion type="single" collapsible className="w-full space-y-2"> {/* Adicionado space-y-2 para espaçamento */}
          <AccordionItem value="item-1" className="border-none"> {/* Removido border-b */}
            <AccordionTrigger className="text-sm px-3 py-1 border border-primary rounded-md hover:bg-primary hover:text-primary-foreground transition-colors w-fit"> {/* Botão menor e w-fit */}
              {t('career_entrepreneurship.companies.title')}
            </AccordionTrigger>
            <AccordionContent>
              <AccordionContentItem imageSeed="eder-companies">
                <p>{t('career_entrepreneurship.companies.content')}</p>
              </AccordionContentItem>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="border-none"> {/* Removido border-b */}
            <AccordionTrigger className="text-sm px-3 py-1 border border-primary rounded-md hover:bg-primary hover:text-primary-foreground transition-colors w-fit"> {/* Botão menor e w-fit */}
              {t('career_entrepreneurship.current_roles.title')}
            </AccordionTrigger>
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