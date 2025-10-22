import React from 'react';
import { useTranslation } from 'react-i18next';
import DetailDialog from './DetailDialog';
import { Button } from '@/components/ui/button';

interface TechnicalSkillsSectionProps {
  id: string;
}

const TechnicalSkillsSection: React.FC<TechnicalSkillsSectionProps> = ({ id }) => {
  const { t } = useTranslation();
  const skills = t('technical_skills.skills').split(', ');
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  return (
    <section id={id} className="py-16 md:py-24 bg-background text-foreground border-t border-gray-200 dark:border-gray-800">
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
            <Button onClick={() => setIsDialogOpen(true)} className="mt-4">
              {t('common.learn_more')}
            </Button>
          </div>
          <div className="relative w-full h-72 rounded-lg overflow-hidden group cursor-pointer" onClick={() => setIsDialogOpen(true)}>
            <img
              src="https://picsum.photos/seed/eder-tech/800/600"
              alt="Competências Técnicas"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-xl font-semibold">{t('common.click_for_details')}</span>
            </div>
          </div>
        </div>
      </div>

      <DetailDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        title={t('technical_skills.title')}
        imageSrc="https://picsum.photos/seed/eder-tech/1200/800"
      >
        <ul className="list-disc list-inside ml-4 space-y-2">
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </DetailDialog>
    </section>
  );
};

export default TechnicalSkillsSection;