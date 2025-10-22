import React from 'react';
import { useTranslation } from 'react-i18next';

const FaithResilienceSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 md:py-24 bg-background text-foreground border-t border-gray-200 dark:border-gray-800">
      <div className="container max-w-4xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          {t('faith_resilience.title')}
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>{t('faith_resilience.paragraph1')}</p>
            <p>{t('faith_resilience.paragraph2')}</p>
            <p>{t('faith_resilience.paragraph3')}</p>
            <p>{t('faith_resilience.paragraph4')}</p>
          </div>
          {/* Image Placeholder */}
          <div className="w-full h-72 bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-500 text-lg">
            [Foto de Fé e Resiliência]
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaithResilienceSection;