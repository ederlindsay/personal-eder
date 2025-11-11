import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface InternationalExperienceSectionProps {
  id: string;
}

const locations = [
    { src: 'images/international-abu-dhabi.png', city: 'Abu Dhabi', country: 'United Arab Emirates', flag: '🇦🇪' },
    { src: 'images/international-dubai.png', city: 'Dubai', country: 'United Arab Emirates', flag: '🇦🇪' },
    { src: 'images/international-mexico-city.png', city: 'Mexico City', country: 'Mexico', flag: '🇲🇽' },
    { src: 'images/international-san-francisco.png', city: 'San Francisco', country: 'USA', flag: '🇺🇸' },
    { src: 'images/international-dallas.png', city: 'Dallas', country: 'USA', flag: '🇺🇸' },
    { src: 'images/international-austin.png', city: 'Austin', country: 'USA', flag: '🇺🇸' },
    { src: 'images/international-san-antonio.png', city: 'San Antonio', country: 'USA', flag: '🇺🇸' },
    { src: 'images/international-houston.png', city: 'Houston', country: 'USA', flag: '🇺🇸' },
    { src: 'images/international-orlando.png', city: 'Orlando', country: 'USA', flag: '🇺🇸' },
    { src: 'images/international-miami.png', city: 'Miami', country: 'USA', flag: '🇺🇸' },
    { src: 'images/international-boston.png', city: 'Boston', country: 'USA', flag: '🇺🇸' },
    { src: 'images/international-new-york.png', city: 'New York', country: 'USA', flag: '🇺🇸' },
    { src: 'images/international-buenos-aires.png', city: 'Buenos Aires', country: 'Argentina', flag: '🇦🇷' },
    { src: 'images/international-dortmund.png', city: 'Dortmund', country: 'Germany', flag: '🇩🇪' },
    { src: 'images/international-geneva.png', city: 'Geneva', country: 'Switzerland', flag: '🇨🇭' },
    { src: 'images/international-milan.png', city: 'Milan', country: 'Italy', flag: '🇮🇹' },
    { src: 'images/international-frankfurt.png', city: 'Frankfurt', country: 'Germany', flag: '🇩🇪' },
    { src: 'images/international-lyon.png', city: 'Lyon', country: 'France', flag: '🇫🇷' },
    { src: 'images/international-london.png', city: 'London', country: 'United Kingdom', flag: '🇬🇧' },
    { src: 'images/international-paris.png', city: 'Paris', country: 'France', flag: '🇫🇷' },
];

const InternationalExperienceSection: React.FC<InternationalExperienceSectionProps> = ({ id }) => {
  const { t } = useTranslation();

  return (
    <section id={id} className="py-16 md:py-24 bg-muted text-foreground border-t">
      <div className="container max-w-4xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          {t('international_experience.title')}
        </h2>
        <p className="text-lg text-muted-foreground mb-8 text-center max-w-2xl mx-auto">
          {t('international_experience.intro_short')}
        </p>
        <Carousel className="w-full" opts={{ loop: true }}>
          <CarouselContent>
            {locations.map((location, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex flex-col aspect-video items-center justify-center p-0 relative rounded-lg overflow-hidden">
                      <img
                        src={location.src}
                        alt={`${location.city}, ${location.country}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 w-full bg-black/50 p-4 text-white">
                        <h3 className="text-xl font-bold">{location.city}</h3>
                        <p className="text-sm">{location.flag} {location.country}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default InternationalExperienceSection;