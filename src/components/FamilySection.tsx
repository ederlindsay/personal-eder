import React from 'react';
import { useTranslation } from 'react-i18next';
import FamilyCloseSection from './FamilyCloseSection';
import FamilyExtendedSection from './FamilyExtendedSection';

interface FamilySectionProps {
  id: string;
}

const FamilySection: React.FC<FamilySectionProps> = ({ id }) => {
  const { t } = useTranslation();

  return (
    <section id={id} className="py-16 md:py-24 bg-background text-foreground border-t border-gray-200 dark:border-gray-800">
      <div className="container max-w-4xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          {t('family.title')}
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <FamilyCloseSection />
          <FamilyExtendedSection />
        </div>
      </div>
    </section>
  );
};

export default FamilySection;