"use client";

import Image from "next/image";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/animated-section";
import { SkillItem } from "@/components/skill-item";
import { skills } from "@/lib/skills";

export function AboutSection() {
  return (
    <AnimatedSection id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">About Me</h2>
          <div className="mx-auto h-1 w-20 bg-primary"></div>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          <div className="order-2 flex flex-col justify-center md:order-1">
            <h3 className="mb-4 text-2xl font-bold">
              I design & build digital products
            </h3>
            <p className="mb-6 text-muted-foreground">
              I have a degree in Computer Science from Unisagrado and currently
              work as a front-end developer at SENNO. I have practical
              experience in technologies such as React, JavaScript, Tailwind,
              and have also worked with platforms such as Webflow and Strapi.
              During my academic career, I have participated in several projects
              that have given me experience in HTML, CSS, JavaScript, React and
              game development. I am currently specializing in front-end and
              seeking to update myself with the best practices and technologies
              on the market.
            </p>
            {/* <Button
              className="flex w-fit items-center gap-2"
              onClick={() => {
                // In a real implementation, this would download the resume
                alert("Resume download functionality would go here");
              }}
            >
              <Download className="h-4 w-4" /> Download Resume
            </Button> */}
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
            Technical Skills
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((skill, index) => (
              <SkillItem
                key={index}
                name={skill.name}
                icon={skill.icon}
                color={skill.color}
                proficiency={skill.proficiency}
              />
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
