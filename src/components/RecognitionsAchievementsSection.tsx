import React from 'react';
import { useTranslation } from 'react-i18next';
import AchievementCard from './AchievementCard';

interface RecognitionsAchievementsSectionProps {
  id: string;
}

const RecognitionsAchievementsSection: React.FC<RecognitionsAchievementsSectionProps> = ({ id }) => {
  const { t } = useTranslation();
  const achievements = t('recognitions_achievements.achievements', { returnObjects: true }) as any[];

  return (
    <section id={id} className="py-16 md:py-24 bg-muted text-foreground border-t">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('recognitions_achievements.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('recognitions_achievements.intro_short')}
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {Array.isArray(achievements) && achievements.map((achievement, index) => (
            <AchievementCard
              key={index}
              icon={achievement.icon}
              title={achievement.title}
              description={achievement.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecognitionsAchievementsSection;