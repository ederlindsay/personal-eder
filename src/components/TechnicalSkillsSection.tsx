import React from 'react';
import { useTranslation } from 'react-i18next';
import { Badge } from '@/components/ui/badge';

interface TechnicalSkillsSectionProps {
  id: string;
}

const TechnicalSkillsSection: React.FC<TechnicalSkillsSectionProps> = ({ id }) => {
  const { t } = useTranslation();
  const skills = t('technical_skills.skills').split(', ');

  return (
    <section id={id} className="py-16 md:py-24 bg-background text-foreground border-t">
      <div className="container max-w-4xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          {t('technical_skills.title')}
        </h2>
        <p className="text-lg text-muted-foreground mb-8 text-left">
          {t('technical_skills.intro_short')}
        </p>
        <div className="grid md:grid-cols-2 gap-8 items-center">
           <div className="relative w-full h-64 rounded-lg overflow-hidden">
            <img
              src="https://picsum.photos/seed/eder-tech/800/600"
              alt={t('technical_skills.title')}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-wrap gap-2 justify-start">
            {skills.map((skill, index) => (
              <Badge key={index} variant="secondary" className="text-base px-3 py-1">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkillsSection;