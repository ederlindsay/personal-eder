import React from 'react';
import { useTranslation } from 'react-i18next';
import SegmentedButtons from './SegmentedButtons';
import AccordionContentItem from './AccordionContentItem';

interface CareerEntrepreneurshipSectionProps {
  id: string;
}

const CareerEntrepreneurshipSection: React.FC<CareerEntrepreneurshipSectionProps> = ({ id }) => {
  const { t } = useTranslation();

  const items = [
    {
      value: 'companies',
      label: t('career_entrepreneurship.companies.title'),
      content: (
        <AccordionContentItem imageSeed="eder-companies" imagePosition="left">
          <p>{t('career_entrepreneurship.companies.content')}</p>
        </AccordionContentItem>
      ),
    },
    {
      value: 'current_roles',
      label: t('career_entrepreneurship.current_roles.title'),
      content: (
        <AccordionContentItem imageSeed="eder-roles" imagePosition="right">
          <p>{t('career_entrepreneurship.current_roles.content')}</p>
        </AccordionContentItem>
      ),
    },
  ];

  return (
    <section id={id} className="py-16 md:py-24 bg-background text-foreground border-t">
      <div className="container max-w-4xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          {t('career_entrepreneurship.title')}
        </h2>
        <p className="text-lg text-muted-foreground mb-8 text-left">
          {t('career_entrepreneurship.intro_short')}
        </p>
        <SegmentedButtons items={items} defaultValue="companies" />
      </div>
    </section>
  );
};

export default CareerEntrepreneurshipSection;