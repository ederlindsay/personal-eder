import React from 'react';
import { useTranslation } from 'react-i18next';

const PersonalPhilosophySection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 md:py-24 bg-background text-foreground border-t border-gray-200 dark:border-gray-800">
      <div className="container max-w-4xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          {t('personal_philosophy.title')}
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-lg text-muted-foreground">
            <p className="italic text-xl md:text-2xl text-center font-semibold mb-4">
              &ldquo;{t('personal_philosophy.quote')}&rdquo;
            </p>
            <p className="text-center">{t('personal_philosophy.explanation')}</p>
          </div>
          {/* Image Placeholder */}
          <div className="w-full h-72 bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-500 text-lg">
            [Foto de Filosofia Pessoal]
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalPhilosophySection;