import React from 'react';
import { useTranslation } from 'react-i18next';
// Removed DetailDialog import
// Removed Button import as it's no longer used for a dialog trigger

interface PersonalPhilosophySectionProps {
  id: string;
}

const PersonalPhilosophySection: React.FC<PersonalPhilosophySectionProps> = ({ id }) => {
  const { t } = useTranslation();

  return (
    <section id={id} className="py-16 md:py-24 bg-background text-foreground border-t">
      <div className="container max-w-4xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          {t('personal_philosophy.title')}
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
           <div className="relative w-full h-64 rounded-lg overflow-hidden">
            <img
              src="https://picsum.photos/seed/eder-philosophy/800/600"
              alt={t('personal_philosophy.title')}
              className="w-full h-full object-cover"
            />
            {/* Removed the click overlay as there's no dialog */}
          </div>
          <div className="text-center">
            <p className="italic text-xl md:text-2xl font-semibold mb-4">
                &ldquo;{t('personal_philosophy.quote')}&rdquo;
            </p>
            <p className="text-lg text-muted-foreground">{t('personal_philosophy.explanation')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalPhilosophySection;