"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

export interface Project {
  id: string;
  title: string;
  titlePt?: string;
  description: string;
  descriptionPt?: string;
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
  year?: number;
  technologies: string[];
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { language } = useLanguage();
  const t = translations[language].projects;
  const title = language === "pt" && project.titlePt ? project.titlePt : project.title;
  const description =
    language === "pt" && project.descriptionPt
      ? project.descriptionPt
      : project.description;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col overflow-hidden rounded-lg border border-border bg-card shadow-md transition-all duration-300 hover:shadow-xl min-h-[500px]"
    >
      {/* Imagem do projeto */}
      <div className="aspect-video w-full overflow-hidden bg-muted">
        <div className="relative h-full w-full">
          <Image
            src={project.imageUrl}
            alt={title}
            fill
            className={cn(
              "object-contain p-6 transition-transform duration-500",
              isHovered ? "scale-110" : "scale-100"
            )}
          />
          <div
            className={cn(
              "absolute inset-0 bg-black/50 transition-opacity duration-300",
              isHovered ? "opacity-60" : "opacity-0"
            )}
          ></div>
          {project.year && (
            <span className="absolute bottom-2 right-2 rounded-md bg-black/70 px-2 py-0.5 text-xs font-medium text-white">
              {project.year}
            </span>
          )}
        </div>
      </div>

      {/* Conteúdo do card */}
      <div className="p-5 flex flex-col h-full">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-2 text-muted-foreground">{description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>

        {/* Botões fixos no final */}
        <div className="mt-auto flex items-center gap-4">
          {project.demoUrl && (
            <Button asChild>
              <Link
                href={project.demoUrl}
                target="_blank"
                className="flex items-center gap-1"
              >
                {t.viewDemo} <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          )}

          {project.githubUrl && (
            <Button variant="outline" asChild>
              <Link
                href={project.githubUrl}
                target="_blank"
                className="flex items-center gap-1"
              >
                <Github className="h-4 w-4" /> {t.code}
              </Link>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
