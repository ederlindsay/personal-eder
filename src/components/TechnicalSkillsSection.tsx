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
      <div className="container max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          {t('technical_skills.title')}
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          {t('technical_skills.intro_short')}
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {skills.map((skill, index) => (
            <Badge key={index} variant="secondary" className="text-lg px-4 py-2">
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkillsSection;