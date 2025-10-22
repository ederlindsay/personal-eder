import React from 'react';
import { useTranslation } from 'react-i18next';
import DetailDialog from './DetailDialog';
import { Button } from '@/components/ui/button';

const ProfessionalExperienceSection = () => {
  const { t } = useTranslation();
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  return (
    <section className="py-16 md:py-24 bg-background text-foreground border-t border-gray-200 dark:border-gray-800">
      <div className="container max-w-4xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          {t('professional_experience.title')}
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative w-full h-72 rounded-lg overflow-hidden group cursor-pointer" onClick={() => setIsDialogOpen(true)}>
            <img
              src="https://picsum.photos/seed/eder-experience/800/600"
              alt="Experiência Profissional"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-xl font-semibold">{t('common.click_for_details')}</span>
            </div>
          </div>
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>{t('professional_experience.intro')}</p>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>{t('professional_experience.institutions.tcu')}</li>
              <li>{t('professional_experience.institutions.tce_ce')}</li>
              <li>{t('professional_experience.institutions.secretarias_fazenda')}</li>
              <li>{t('professional_experience.institutions.ministerio_planejamento')}</li>
              <li>{t('professional_experience.institutions.procuradoria_es')}</li>
              <li>{t('professional_experience.institutions.bnb')}</li>
              <li>{t('professional_experience.institutions.banpara')}</li>
              <li>{t('professional_experience.institutions.embraer')}</li>
              <li>{t('professional_experience.institutions.oi')}</li>
              <li>{t('professional_experience.institutions.algar_telecom')}</li>
              <li>{t('professional_experience.institutions.martins_atacadista')}</li>
              <li>{t('professional_experience.institutions.vox_populi')}</li>
            </ul>
            <p className="mt-4">{t('professional_experience.professor_role')}</p>
            {/* Logos Placeholder */}
            <div className="flex flex-wrap gap-4 justify-center mt-6">
              <div className="w-20 h-10 bg-gray-300 dark:bg-gray-700 rounded flex items-center justify-center text-xs text-gray-600 dark:text-gray-400">Logo TCU</div>
              <div className="w-20 h-10 bg-gray-300 dark:bg-gray-700 rounded flex items-center justify-center text-xs text-gray-600 dark:text-gray-400">Logo Embraer</div>
            </div>
            <Button onClick={() => setIsDialogOpen(true)} className="mt-4">
              {t('common.learn_more')}
            </Button>
          </div>
        </div>
      </div>

      <DetailDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        title={t('professional_experience.title')}
        imageSrc="https://picsum.photos/seed/eder-experience/1200/800"
      >
        <p>{t('professional_experience.intro')}</p>
        <ul className="list-disc list-inside ml-4 space-y-2">
          <li>{t('professional_experience.institutions.tcu')}</li>
          <li>{t('professional_experience.institutions.tce_ce')}</li>
          <li>{t('professional_experience.institutions.secretarias_fazenda')}</li>
          <li>{t('professional_experience.institutions.ministerio_planejamento')}</li>
          <li>{t('professional_experience.institutions.procuradoria_es')}</li>
          <li>{t('professional_experience.institutions.bnb')}</li>
          <li>{t('professional_experience.institutions.banpara')}</li>
          <li>{t('professional_experience.institutions.embraer')}</li>
          <li>{t('professional_experience.institutions.oi')}</li>
          <li>{t('professional_experience.institutions.algar_telecom')}</li>
          <li>{t('professional_experience.institutions.martins_atacadista')}</li>
          <li>{t('professional_experience.institutions.vox_populi')}</li>
        </ul>
        <p className="mt-4">{t('professional_experience.professor_role')}</p>
      </DetailDialog>
    </section>
  );
};

export default ProfessionalExperienceSection;