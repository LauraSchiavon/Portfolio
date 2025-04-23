"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SkillItemProps {
  name: string;
  icon: React.ReactNode;
  color: string;
  proficiency: number;
}

export function SkillItem({ name, icon, color, proficiency }: SkillItemProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "group relative rounded-lg border border-border bg-card p-4 shadow-sm transition-all duration-300",
        isHovered && "shadow-md"
      )}
    >
      <div className="flex items-center gap-3">
        <div
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-full transition-transform duration-300",
            isHovered && "scale-110"
          )}
          style={{ backgroundColor: color }}
        >
          {icon}
        </div>
        <div>
          <h3 className="font-medium">{name}</h3>
          <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-muted">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${proficiency}%` }}
              transition={{ duration: 1, delay: 0.2 }}
              className="h-full rounded-full"
              style={{ backgroundColor: color }}
            ></motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}