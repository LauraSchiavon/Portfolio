"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
  technologies: string[];
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative overflow-hidden rounded-lg border border-border bg-card shadow-md transition-all duration-300 hover:shadow-xl"
    >
      <div className="aspect-video w-full overflow-hidden">
        <div className="relative h-full w-full">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className={cn(
              "object-cover transition-transform duration-500",
              isHovered ? "scale-110" : "scale-100"
            )}
          />
          <div
            className={cn(
              "absolute inset-0 bg-black/50 transition-opacity duration-300",
              isHovered ? "opacity-60" : "opacity-0"
            )}
          ></div>
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-xl font-bold">{project.title}</h3>
        <p className="mt-2 text-muted-foreground">{project.description}</p>
        
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
        
        <div className="mt-6 flex items-center justify-between">
          {project.demoUrl && (
            <Button asChild>
              <Link 
                href={project.demoUrl} 
                target="_blank"
                className="flex items-center gap-1"
              >
                View Demo <ArrowUpRight className="h-4 w-4" />
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
                <Github className="h-4 w-4" /> Code
              </Link>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
}