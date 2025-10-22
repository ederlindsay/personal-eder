import React from 'react';
import { useTranslation } from 'react-i18next';
import DetailDialog from './DetailDialog';
import { Button } from '@/components/ui/button';

const CareerEntrepreneurshipSection = () => {
  const { t } = useTranslation();
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  return (
    <section className="py-16 md:py-24 bg-background text-foreground border-t border-gray-200 dark:border-gray-800">
      <div className="container max-w-4xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          {t('career_entrepreneurship.title')}
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative w-full h-72 rounded-lg overflow-hidden group cursor-pointer" onClick={() => setIsDialogOpen(true)}>
            <img
              src="https://picsum.photos/seed/eder-career/800/600"
              alt="Carreira e Empreendedorismo"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-xl font-semibold">{t('common.click_for_details')}</span>
            </div>
          </div>
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>{t('career_entrepreneurship.intro')}</p>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>{t('career_entrepreneurship.companies.loja_rentavel')}</li>
              <li>{t('career_entrepreneurship.companies.i_varejo')}</li>
              <li>{t('career_entrepreneurship.companies.lince')}</li>
              <li>{t('career_entrepreneurship.companies.aionow')}</li>
              <li>
                <a href="https://www.beelong.ai" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  {t('career_entrepreneurship.companies.beelong')}
                </a>
              </li>
              <li>
                <a href="https://www.gaiodataos.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  {t('career_entrepreneurship.companies.gaio_dataos')}
                </a>
              </li>
            </ul>
            <p>{t('career_entrepreneurship.beelong_role')}</p>
            <p>{t('career_entrepreneurship.gaio_role')}</p>
            <p>{t('career_entrepreneurship.gaio_description')}</p>
            {/* Logos Placeholder */}
            <div className="flex flex-wrap gap-4 justify-center mt-6">
              <div className="w-24 h-12 bg-gray-300 dark:bg-gray-700 rounded flex items-center justify-center text-xs text-gray-600 dark:text-gray-400">Logo Beelong</div>
              <div className="w-24 h-12 bg-gray-300 dark:bg-gray-700 rounded flex items-center justify-center text-xs text-gray-600 dark:text-gray-400">Logo Gaio</div>
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
        title={t('career_entrepreneurship.title')}
        imageSrc="https://picsum.photos/seed/eder-career/1200/800"
      >
        <p>{t('career_entrepreneurship.intro')}</p>
        <ul className="list-disc list-inside ml-4 space-y-2">
          <li>{t('career_entrepreneurship.companies.loja_rentavel')}</li>
          <li>{t('career_entrepreneurship.companies.i_varejo')}</li>
          <li>{t('career_entrepreneurship.companies.lince')}</li>
          <li>{t('career_entrepreneurship.companies.aionow')}</li>
          <li>
            <a href="https://www.beelong.ai" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              {t('career_entrepreneurship.companies.beelong')}
            </a>
          </li>
          <li>
            <a href="https://www.gaiodataos.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              {t('career_entrepreneurship.companies.gaio_dataos')}
            </a>
          </li>
        </ul>
        <p>{t('career_entrepreneurship.beelong_role')}</p>
        <p>{t('career_entrepreneurship.gaio_role')}</p>
        <p>{t('career_entrepreneurship.gaio_description')}</p>
      </DetailDialog>
    </section>
  );
};

export default CareerEntrepreneurshipSection;