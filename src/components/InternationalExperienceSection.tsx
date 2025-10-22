import React from 'react';
import { useTranslation } from 'react-i18next';

interface InternationalExperienceSectionProps {
  id: string;
}

const InternationalExperienceSection: React.FC<InternationalExperienceSectionProps> = ({ id }) => {
  const { t } = useTranslation();

  return (
    <section id={id} className="py-16 md:py-24 bg-background text-foreground border-t">
      <div className="container max-w-4xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          {t('international_experience.title')}
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
           <div className="relative w-full h-64 rounded-lg overflow-hidden">
            <img
              src="https://picsum.photos/seed/eder-international/800/600"
              alt={t('international_experience.title')}
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-lg text-muted-foreground">{t('international_experience.content')}</p>
        </div>
      </div>
    </section>
  );
};

export default InternationalExperienceSection;