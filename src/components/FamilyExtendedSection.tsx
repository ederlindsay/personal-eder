import React from 'react';
import { useTranslation } from 'react-i18next';
import DetailDialog from './DetailDialog';
import { Button } from '@/components/ui/button';

const FamilyExtendedSection = () => {
  const { t } = useTranslation();
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  return (
    <div className="flex flex-col items-center text-center space-y-4">
      <h3 className="text-2xl font-semibold">{t('family.extended_family.title')}</h3>
      <div className="relative w-full h-64 rounded-lg overflow-hidden group cursor-pointer" onClick={() => setIsDialogOpen(true)}>
        <img
          src="https://picsum.photos/seed/eder-extended-family/800/600"
          alt={t('family.extended_family.title')}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-white text-lg font-semibold">{t('common.click_for_details')}</span>
        </div>
      </div>
      <p className="text-lg text-muted-foreground">{t('family.extended_family.paragraph1')}</p>
      <Button onClick={() => setIsDialogOpen(true)} className="mt-4">
        {t('common.learn_more')}
      </Button>

      <DetailDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        title={t('family.extended_family.title')}
        imageSrc="https://picsum.photos/seed/eder-extended-family/1200/800"
      >
        <p>{t('family.extended_family.paragraph1')}</p>
      </DetailDialog>
    </div>
  );
};

export default FamilyExtendedSection;