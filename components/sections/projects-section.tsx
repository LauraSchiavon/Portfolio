"use client";

import { useState } from "react";
import { ProjectCard, Project } from "@/components/project-card";
import { AnimatedSection } from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/projects";

const categories = [
  "All",
  "React",
  "HTML",
  "Strapi",
  "Next.js",
  "Unity",
  "C#",
  "CSS",
  "Vite",
  "JavaScript",
];

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleProjects, setVisibleProjects] = useState<Project[]>(projects);

  const filterProjects = (category: string) => {
    setActiveCategory(category);

    if (category === "All") {
      setVisibleProjects(projects);
    } else {
      const filtered = projects.filter((project) =>
        project.technologies.includes(category)
      );
      setVisibleProjects(filtered);
    }
  };

  return (
    <AnimatedSection id="projects" className="py-20 bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">My Projects</h2>
          <div className="mx-auto h-1 w-20 bg-primary"></div>
          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
            Explore my recent work and projects. Each project represents a
            unique challenge and solution, showcasing my skills and expertise.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => filterProjects(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.length > 0 ? (
            visibleProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))
          ) : (
            <div className="col-span-full py-12 text-center">
              <p className="text-muted-foreground">
                No projects found with the selected technology. Try another
                filter.
              </p>
              <Button
                variant="link"
                className="mt-2"
                onClick={() => filterProjects("All")}
              >
                View all projects
              </Button>
            </div>
          )}
        </div>
      </div>
    </AnimatedSection>
  );
}
