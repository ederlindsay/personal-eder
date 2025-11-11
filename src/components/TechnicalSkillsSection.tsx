import React from 'react';
import { useTranslation } from 'react-i18next';
import SkillIcon from './SkillIcon';

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
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          {t('technical_skills.intro_short')}
        </p>
        <div className="flex flex-wrap justify-center items-center gap-4">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg bg-muted w-32 h-32 transition-transform hover:scale-105" 
              title={skill}
            >
              <div className="h-12 w-12 flex items-center justify-center">
                <SkillIcon name={skill} className="w-10 h-10 text-foreground" />
              </div>
              <span className="text-sm text-center text-muted-foreground truncate w-full px-1">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkillsSection;