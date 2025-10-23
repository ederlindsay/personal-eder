import React from 'react';
import { useTranslation } from 'react-i18next';
import { CheckCircle } from 'lucide-react';

interface RecognitionsAchievementsSectionProps {
  id: string;
}

const RecognitionsAchievementsSection: React.FC<RecognitionsAchievementsSectionProps> = ({ id }) => {
  const { t } = useTranslation();
  const achievements = t('recognitions_achievements.achievements', { returnObjects: true }) as string[];

  return (
    <section id={id} className="py-16 md:py-24 bg-muted text-foreground border-t">
      <div className="container max-w-4xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          {t('recognitions_achievements.title')}
        </h2>
        <p className="text-lg text-muted-foreground mb-8 text-left">
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
          <ul className="space-y-4 text-left">
            {Array.isArray(achievements) && achievements.map((achievement, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                <span className="text-lg text-muted-foreground">{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default RecognitionsAchievementsSection;