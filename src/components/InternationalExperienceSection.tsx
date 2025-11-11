import React from 'react';
import { useTranslation } from 'react-i18next';

interface InternationalExperienceSectionProps {
  id: string;
}

const InternationalExperienceSection: React.FC<InternationalExperienceSectionProps> = ({ id }) => {
  const { t } = useTranslation();

  const internationalExperiences = [
    { city: 'Paris', country: 'France', flag: '🇫🇷', imageSrc: 'images/international-experience/ei-paris.png' },
    { city: 'Lyon', country: 'France', flag: '🇫🇷', imageSrc: 'images/international-experience/ei-lyon.png' },
    { city: 'London', country: 'United Kingdom', flag: '🇬🇧', imageSrc: 'images/international-experience/ei-london.png' },
    { city: 'Frankfurt', country: 'Germany', flag: '🇩🇪', imageSrc: 'images/international-experience/ei-frankfurt.png' },
    { city: 'Dortmund', country: 'Germany', flag: '🇩🇪', imageSrc: 'images/international-experience/ei-dortmund.png' },
    { city: 'Milan', country: 'Italy', flag: '🇮🇹', imageSrc: 'images/international-experience/ei-milan.png' },
    { city: 'Geneva', country: 'Switzerland', flag: '🇨🇭', imageSrc: 'images/international-experience/ei-geneva.png' },
    { city: 'Buenos Aires', country: 'Argentina', flag: '🇦🇷', imageSrc: 'images/international-experience/ei-buenos-aires.png' },
    { city: 'New York', country: 'United States', flag: '🇺🇸', imageSrc: 'images/international-experience/ei-new-york.png' },
    { city: 'Boston', country: 'United States', flag: '🇺🇸', imageSrc: 'images/international-experience/ei-boston.png' },
    { city: 'Miami', country: 'United States', flag: '🇺🇸', imageSrc: 'images/international-experience/ei-miami.png' },
    { city: 'Orlando', country: 'United States', flag: '🇺🇸', imageSrc: 'images/international-experience/ei-orlando.png' },
    { city: 'Houston', country: 'United States', flag: '🇺🇸', imageSrc: 'images/international-experience/ei-houston.png' },
    { city: 'San Antonio', country: 'United States', flag: '🇺🇸', imageSrc: 'images/international-experience/ei-san-antonio.png' },
    { city: 'Austin', country: 'United States', flag: '🇺🇸', imageSrc: 'images/international-experience/ei-austin.png' },
    { city: 'Dallas', country: 'United States', flag: '🇺🇸', imageSrc: 'images/international-experience/ei-dallas.png' },
    { city: 'San Francisco', country: 'United States', flag: '🇺🇸', imageSrc: 'images/international-experience/ei-san-francisco.png' },
    { city: 'Mexico City', country: 'Mexico', flag: '🇲🇽', imageSrc: 'images/international-experience/ei-mexico-city.png' },
    { city: 'Dubai', country: 'United Arab Emirates', flag: '🇦🇪', imageSrc: 'images/international-experience/ei-dubai.png' },
    { city: 'Abu Dhabi', country: 'United Arab Emirates', flag: '🇦🇪', imageSrc: 'images/international-experience/ei-abu-dhabi.png' },
  ];

  return (
    <section id={id} className="py-16 md:py-24 bg-muted text-foreground border-t">
      <div className="container max-w-4xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          {t('international_experience.title')}
        </h2>
        <p className="text-lg text-muted-foreground mb-8 text-left">
          {t('international_experience.intro_short')}
        </p>

        <div className="relative">
          <div className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 space-x-4">
            {internationalExperiences.map((experience, index) => (
              <div
                key={index}
                className="flex-none w-64 md:w-80 snap-center bg-card rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={experience.imageSrc}
                  alt={`${experience.city}, ${experience.country}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-1">{experience.city}</h3>
                  <p className="text-muted-foreground">
                    {experience.country} {experience.flag}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternationalExperienceSection;