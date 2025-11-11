import React from 'react';
import { useTranslation } from 'react-i18next';

interface HeroSectionProps {
  id: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ id }) => {
  const { t } = useTranslation();

  return (
    <section id={id} className="py-20 md:py-32 bg-background text-foreground">
      <div className="container max-w-4xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div className="relative w-full h-96 rounded-lg overflow-hidden">
          <img
            src="images/eder-balbino-hero.png"
            alt="Eder Balbino"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10">
            {t('hero.subtitle')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;