import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button'; // Keep Button if used for other purposes, otherwise remove.

interface HeroSectionProps {
  id: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ id }) => {
  const { t } = useTranslation();

  return (
    <section id={id} className="py-20 md:py-32 text-center bg-background text-foreground">
      <div className="container max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          {t('hero.title')}
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-10">
          {t('hero.subtitle')}
        </p>
        <div className="relative w-full h-96 rounded-lg overflow-hidden group">
          <img
            src="https://picsum.photos/seed/eder-hero/1200/800"
            alt="Eder Balbino"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {/* Removed the click overlay as there's no dialog */}
        </div>
        <Button className="mt-8 text-lg px-8 py-4">
          {t('common.learn_more')}
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;