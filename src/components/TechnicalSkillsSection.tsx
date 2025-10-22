import React from 'react';
import { useTranslation } from 'react-i18next';

const TechnicalSkillsSection = () => {
  const { t } = useTranslation();
  const skills = t('technical_skills.skills').split(', ');

  return (
    <section className="py-16 md:py-24 bg-background text-foreground border-t border-gray-200 dark:border-gray-800">
      <div className="container max-w-4xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          {t('technical_skills.title')}
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4 text-lg text-muted-foreground">
            <ul className="list-disc list-inside ml-4 space-y-2">
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
          {/* Image Placeholder */}
          <div className="w-full h-72 bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-500 text-lg">
            [Foto de Competências Técnicas]
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkillsSection;