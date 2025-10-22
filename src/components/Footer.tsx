import React from 'react';
import { useTranslation } from 'react-i18next';
import { MadeWithDyad } from './made-with-dyad';
import { Linkedin, Whatsapp } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="border-t bg-background py-6 text-center text-muted-foreground">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex space-x-4">
          <a
            href="https://www.linkedin.com/in/ederbalbino/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="https://wa.me/5534992942427"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary"
            aria-label="WhatsApp"
          >
            <Whatsapp className="h-6 w-6" />
          </a>
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} {t('header.title')}. All rights reserved.
        </p>
        <MadeWithDyad />
      </div>
    </footer>
  );
};

export default Footer;