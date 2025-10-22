import React from 'react';
import { useTranslation } from 'react-i18next';
import DetailDialog from './DetailDialog';
import { Button } from '@/components/ui/button';

interface EducationLearningSectionProps {
  id: string;
}

const EducationLearningSection: React.FC<EducationLearningSectionProps> = ({ id }) => {
  const { t } = useTranslation();
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  return (
    <section id={id} className="py-16 md:py-24 bg-background text-foreground border-t border-gray-200 dark:border-gray-800">
      <div className="container max-w-4xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          {t('education_learning.title')}
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative w-full h-72 rounded-lg overflow-hidden group cursor-pointer" onClick={() => setIsDialogOpen(true)}>
            <img
              src="https://picsum.photos/seed/eder-education/800/600"
              alt="Formação e Aprendizado"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-xl font-semibold">{t('common.click_for_details')}</span>
            </div>
          </div>
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>{t('education_learning.paragraph1')}</p>
            <p>{t('education_learning.paragraph2')}</p>
            <p>{t('education_learning.paragraph3')}</p>
            <Button onClick={() => setIsDialogOpen(true)} className="mt-4">
              {t('common.learn_more')}
            </Button>
          </div>
        </div>
      </div>

      <DetailDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        title={t('education_learning.title')}
        imageSrc="https://picsum.photos/seed/eder-education/1200/800"
      >
        <p>{t('education_learning.paragraph1')}</p>
        <p>{t('education_learning.paragraph2')}</p>
        <p>{t('education_learning.paragraph3')}</p>
      </DetailDialog>
    </section>
  );
};

export default EducationLearningSection;