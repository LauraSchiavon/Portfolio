"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/animated-section";
import { SkillItem } from "@/components/skill-item";
import { skills } from "@/lib/skills";
import { useLanguage } from "@/lib/language-context";
import { translations, directResponseStack } from "@/lib/translations";

export function AboutSection() {
  const { language } = useLanguage();
  const t = translations[language].about;

  return (
    <AnimatedSection id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">{t.title}</h2>
          <div className="mx-auto h-1 w-20 bg-primary"></div>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          <div className="order-2 flex flex-col justify-center md:order-1">
            <h3 className="mb-4 text-2xl font-bold">{t.subheading}</h3>
            <p className="mb-6 text-muted-foreground">{t.paragraph}</p>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative mx-auto aspect-square max-w-md overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
              <Image
                src="https://github.com/LauraSchiavon.png"
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="mb-8 text-center text-2xl font-bold">
            {t.skillsTitle}
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((skill, index) => (
              <SkillItem
                key={index}
                name={language === "pt" ? skill.namePt : skill.name}
                icon={skill.icon}
                color={skill.color}
                proficiency={skill.proficiency}
              />
            ))}
          </div>
        </div>

        <div className="mt-20">
          <h3 className="mb-4 text-center text-2xl font-bold">
            {t.directResponseTitle}
          </h3>
          <p className="mx-auto mb-6 max-w-2xl text-center text-muted-foreground">
            {t.directResponseParagraph}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {directResponseStack.map((tool) => (
              <Badge key={tool.en} variant="secondary">
                {language === "pt" ? tool.pt : tool.en}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
