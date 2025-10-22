import React from 'react';
import { useTranslation } from 'react-i18next';

const InternationalExperienceSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 md:py-24 bg-background text-foreground border-t border-gray-200 dark:border-gray-800">
      <div className="container max-w-4xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          {t('international_experience.title')}
        </h2>
        <div className="space-y-6 text-lg text-muted-foreground mb-12">
          <p>{t('international_experience.intro')}</p>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li><strong>{t('international_experience.usa').split(':')[0]}:</strong> {t('international_experience.usa').split(':')[1]}</li>
            <li><strong>{t('international_experience.europe').split(':')[0]}:</strong> {t('international_experience.europe').split(':')[1]}</li>
            <li><strong>{t('international_experience.latin_america').split(':')[0]}:</strong> {t('international_experience.latin_america').split(':')[1]}</li>
            <li><strong>{t('international_experience.middle_east').split(':')[0]}:</strong> {t('international_experience.middle_east').split(':')[1]}</li>
            <li><strong>{t('international_experience.brazil').split(':')[0]}:</strong> {t('international_experience.brazil').split(':')[1]}</li>
          </ul>
        </div>
        {/* Interactive Map Placeholder */}
        <div className="w-full h-96 bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-500 text-lg">
          [Mapa Interativo com Fotos ao Clicar]
        </div>
      </div>
    </section>
  );
};

export default InternationalExperienceSection;