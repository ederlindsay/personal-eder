import React from 'react';
import { useTranslation } from 'react-i18next';

interface RecognitionsAchievementsSectionProps {
  id: string;
}

const RecognitionsAchievementsSection: React.FC<RecognitionsAchievementsSectionProps> = ({ id }) => {
  const { t } = useTranslation();

  return (
    <section id={id} className="py-16 md:py-24 bg-background text-foreground border-t">
      <div className="container max-w-4xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          {t('recognitions_achievements.title')}
        </h2>
        <p className="text-lg text-muted-foreground mb-8 text-center">
          {t('recognitions_achievements.intro_short')}
        </p>
        <div className="grid md:grid-cols-2 gap-8 items-center">
           <div className="relative w-full h-64 rounded-lg overflow-hidden">
            <img
              src="https://picsum.photos/seed/eder-achievements/800/600"
              alt={t('recognitions_achievements.title')}
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-lg text-muted-foreground">{t('recognitions_achievements.content')}</p>
        </div>
      </div>
    </section>
  );
};

export default RecognitionsAchievementsSection;