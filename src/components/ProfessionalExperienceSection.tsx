import React from 'react';
import { useTranslation } from 'react-i18next';

const ProfessionalExperienceSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 md:py-24 bg-background text-foreground border-t border-gray-200 dark:border-gray-800">
      <div className="container max-w-4xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          {t('professional_experience.title')}
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Placeholder */}
          <div className="w-full h-72 bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-500 text-lg">
            [Foto de Experiência Profissional]
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
              <div className="w-20 h-10 bg-gray-300 dark:bg-gray-700 rounded flex items-center justify-center text-xs text-gray-600 dark:text-gray-400">Logo A</div>
              <div className="w-20 h-10 bg-gray-300 dark:bg-gray-700 rounded flex items-center justify-center text-xs text-gray-600 dark:text-gray-400">Logo B</div>
              {/* Add more logo placeholders as needed */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalExperienceSection;