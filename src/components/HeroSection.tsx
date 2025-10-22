import React from 'react';
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 md:py-32 text-center bg-background text-foreground">
      <div className="container max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          {t('hero.title')}
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-10">
          {t('hero.subtitle')}
        </p>
        {/* Image Placeholder */}
        <div className="w-full h-96 bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-500 text-lg">
          [Foto de Éder Balbino]
        </div>
      </div>
    </section>
  );
};

export default HeroSection;