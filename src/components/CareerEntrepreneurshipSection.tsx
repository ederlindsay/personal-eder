import React from 'react';
import { useTranslation } from 'react-i18next';

const CareerEntrepreneurshipSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 md:py-24 bg-background text-foreground border-t border-gray-200 dark:border-gray-800">
      <div className="container max-w-4xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          {t('career_entrepreneurship.title')}
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Placeholder */}
          <div className="w-full h-72 bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-500 text-lg">
            [Foto de Carreira e Empreendedorismo]
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
              <div className="w-24 h-12 bg-gray-300 dark:bg-gray-700 rounded flex items-center justify-center text-xs text-gray-600 dark:text-gray-400">Logo 1</div>
              <div className="w-24 h-12 bg-gray-300 dark:bg-gray-700 rounded flex items-center justify-center text-xs text-gray-600 dark:text-gray-400">Logo 2</div>
              {/* Add more logo placeholders as needed */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerEntrepreneurshipSection;