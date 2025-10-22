import React from 'react';
import { useTranslation } from 'react-i18next';
import DetailDialog from './DetailDialog';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  id: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ id }) => {
  const { t } = useTranslation();
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  return (
    <section id={id} className="py-20 md:py-32 text-center bg-background text-foreground">
      <div className="container max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          {t('hero.title')}
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-10">
          {t('hero.subtitle')}
        </p>
        <div className="relative w-full h-96 rounded-lg overflow-hidden group cursor-pointer" onClick={() => setIsDialogOpen(true)}>
          <img
            src="https://picsum.photos/seed/eder-hero/1200/800"
            alt="Eder Balbino"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-xl font-semibold">{t('common.click_for_details')}</span>
          </div>
        </div>
        <Button onClick={() => setIsDialogOpen(true)} className="mt-8 text-lg px-8 py-4">
          {t('common.learn_more')}
        </Button>
      </div>

      <DetailDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        title={t('hero.title')}
        imageSrc="https://picsum.photos/seed/eder-hero/1200/800"
      >
        <p>{t('hero.subtitle')}</p>
        {/* Add more detailed text here if available in translations, or expand existing */}
      </DetailDialog>
    </section>
  );
};

export default HeroSection;