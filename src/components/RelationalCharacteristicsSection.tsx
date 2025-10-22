import React from 'react';
import { useTranslation } from 'react-i18next';

const RelationalCharacteristicsSection = () => {
  const { t } = useTranslation();
  const characteristics = t('relational_characteristics.characteristics').split(', ');

  return (
    <section className="py-16 md:py-24 bg-background text-foreground border-t border-gray-200 dark:border-gray-800">
      <div className="container max-w-4xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          {t('relational_characteristics.title')}
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Placeholder */}
          <div className="w-full h-72 bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-500 text-lg">
            [Foto de Características Relacionais]
          </div>
          <div className="space-y-4 text-lg text-muted-foreground">
            <ul className="list-disc list-inside ml-4 space-y-2">
              {characteristics.map((char, index) => (
                <li key={index}>{char}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelationalCharacteristicsSection;