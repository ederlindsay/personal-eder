import React from 'react';
import { useTranslation } from 'react-i18next';

interface PersonalPhilosophySectionProps {
  id: string;
}

const PersonalPhilosophySection: React.FC<PersonalPhilosophySectionProps> = ({ id }) => {
  const { t } = useTranslation();

  return (
    <section id={id} className="py-16 md:py-24 bg-background text-foreground border-t">
      <div className="container max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          {t('personal_philosophy.title')}
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          {t('personal_philosophy.intro_short')}
        </p>
        <blockquote className="border-l-4 border-primary pl-6 italic text-2xl md:text-3xl font-serif text-left max-w-3xl mx-auto">
          <p className="mb-4">&ldquo;{t('personal_philosophy.quote')}&rdquo;</p>
          <footer className="text-lg not-italic text-muted-foreground">
            &mdash; {t('personal_philosophy.explanation')}
          </footer>
        </blockquote>
      </div>
    </section>
  );
};

export default PersonalPhilosophySection;