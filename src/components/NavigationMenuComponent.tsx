import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

interface ListItemProps extends React.ComponentPropsWithoutRef<'a'> {
  title: string;
}

const ListItem = React.forwardRef<React.ElementRef<'a'>, ListItemProps>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = 'ListItem';

const NavigationMenuComponent = () => {
  const { t } = useTranslation();

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink href="#hero" className={navigationMenuTriggerStyle()}>
            {t('header.home')}
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>{t('origins_purpose.title')}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="#origins-purpose"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      {t('origins_purpose.title')}
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      {t('origins_purpose.intro_short')}
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="#origins-purpose-p1" title={t('origins_purpose.paragraph1_short_title')}>
                {t('origins_purpose.paragraph1_summary')}
              </ListItem>
              <ListItem href="#origins-purpose-p2" title={t('origins_purpose.paragraph2_short_title')}>
                {t('origins_purpose.paragraph2_summary')}
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>{t('family.title')}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <ListItem href="#family-close" title={t('family.close_family.title')}>
                {t('family.close_family.summary')}
              </ListItem>
              <ListItem href="#family-extended" title={t('family.extended_family.title')}>
                {t('family.extended_family.summary')}
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink href="#education-learning" className={navigationMenuTriggerStyle()}>
            {t('education_learning.title')}
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink href="#faith-resilience" className={navigationMenuTriggerStyle()}>
            {t('faith_resilience.title')}
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink href="#pastoral-mission" className={navigationMenuTriggerStyle()}>
            {t('pastoral_mission.title')}
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink href="#career-entrepreneurship" className={navigationMenuTriggerStyle()}>
            {t('career_entrepreneurship.title')}
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink href="#recognitions-achievements" className={navigationMenuTriggerStyle()}>
            {t('recognitions_achievements.title')}
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink href="#professional-experience" className={navigationMenuTriggerStyle()}>
            {t('professional_experience.title')}
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink href="#speaker-mentor" className={navigationMenuTriggerStyle()}>
            {t('speaker_mentor.title')}
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink href="#leadership-values" className={navigationMenuTriggerStyle()}>
            {t('leadership_values.title')}
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink href="#international-experience" className={navigationMenuTriggerStyle()}>
            {t('international_experience.title')}
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink href="#technical-skills" className={navigationMenuTriggerStyle()}>
            {t('technical_skills.title')}
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink href="#relational-characteristics" className={navigationMenuTriggerStyle()}>
            {t('relational_characteristics.title')}
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink href="#personal-philosophy" className={navigationMenuTriggerStyle()}>
            {t('personal_philosophy.title')}
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavigationMenuComponent;