"use client";

import { motion } from "framer-motion";
import type { Skill } from "@prisma/client";

interface SkillsBadgeProps {
  skill: Skill;
}

export function SkillsBadge({ skill }: SkillsBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.1 }}
      className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
    >
      {skill.name}
    </motion.div>
  );
}
