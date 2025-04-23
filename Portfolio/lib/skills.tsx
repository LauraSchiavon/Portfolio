import React from "react";
import {
  Code,
  Server,
  Database,
  Palette,
  Layers,
  LineChart,
  Wand2,
  CircleEllipsis,
} from "lucide-react";

export const skills = [
  {
    name: "Frontend Development",
    icon: <Code className="h-6 w-6 text-white" />,
    color: "#3b82f6",
    proficiency: 90,
  },
  {
    name: "Backend Development",
    icon: <Server className="h-6 w-6 text-white" />,
    color: "#10b981",
    proficiency: 20,
  },
  {
    name: "Database Design",
    icon: <Database className="h-6 w-6 text-white" />,
    color: "#6366f1",
    proficiency: 40,
  },
  {
    name: "UI/UX Design",
    icon: <Palette className="h-6 w-6 text-white" />,
    color: "#ec4899",
    proficiency: 70,
  },
  {
    name: "DevOps",
    icon: <Layers className="h-6 w-6 text-white" />,
    color: "#f59e0b",
    proficiency: 40,
  },
  {
    name: "Data Analytics",
    icon: <LineChart className="h-6 w-6 text-white" />,
    color: "#8b5cf6",
    proficiency: 40,
  },
  {
    name: "Animation & Motion",
    icon: <Wand2 className="h-6 w-6 text-white" />,
    color: "#ef4444",
    proficiency: 60,
  },
  {
    name: "Problem Solving",
    icon: <CircleEllipsis className="h-6 w-6 text-white" />,
    color: "#14b8a6",
    proficiency: 95,
  },
];
