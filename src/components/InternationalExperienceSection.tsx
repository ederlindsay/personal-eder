import React from 'react';
import { useTranslation } from 'react-i18next';
import DetailDialog from './DetailDialog';
import { Button } from '@/components/ui/button';

const InternationalExperienceSection = () => {
  const { t } = useTranslation();
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

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
          <Button onClick={() => setIsDialogOpen(true)} className="mt-4">
            {t('common.learn_more')}
          </Button>
        </div>
        {/* Interactive Map Placeholder */}
        <div className="relative w-full h-96 bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-500 text-lg overflow-hidden group cursor-pointer" onClick={() => setIsDialogOpen(true)}>
          <img
            src="https://picsum.photos/seed/eder-map/1200/800"
            alt="Mapa Interativo"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-xl font-semibold">{t('common.click_for_details')}</span>
          </div>
        </div>
      </div>

      <DetailDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        title={t('international_experience.title')}
        imageSrc="https://picsum.photos/seed/eder-map/1200/800"
      >
        <p>{t('international_experience.intro')}</p>
        <ul className="list-disc list-inside ml-4 space-y-2">
          <li><strong>{t('international_experience.usa').split(':')[0]}:</strong> {t('international_experience.usa').split(':')[1]}</li>
          <li><strong>{t('international_experience.europe').split(':')[0]}:</strong> {t('international_experience.europe').split(':')[1]}</li>
          <li><strong>{t('international_experience.latin_america').split(':')[0]}:</strong> {t('international_experience.latin_america').split(':')[1]}</li>
          <li><strong>{t('international_experience.middle_east').split(':')[0]}:</strong> {t('international_experience.middle_east').split(':')[1]}</li>
          <li><strong>{t('international_experience.brazil').split(':')[0]}:</strong> {t('international_experience.brazil').split(':')[1]}</li>
        </ul>
        <p className="mt-4 text-sm text-gray-500">
          {t('common.map_note')}
        </p>
      </DetailDialog>
    </section>
  );
};

export default InternationalExperienceSection;