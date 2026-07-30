"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="border-t bg-muted/40">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Portfolio</h3>
            <p className="text-muted-foreground">{t.footer.tagline}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#home"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t.nav.projects}
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.footer.connect}</h3>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/LauraSchiavon"
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/laura-lonardoni-paulino-schiavon/"
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="mailto:lauraschiavon00@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-border">
          <p className="text-center text-muted-foreground">
            &copy; {currentYear} Portfolio. {t.footer.developedBy}{" "}
            {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
