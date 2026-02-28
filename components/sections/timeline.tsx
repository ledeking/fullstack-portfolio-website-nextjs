"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

interface TimelineItem {
  year: string;
  title: string;
  company?: string;
  institution?: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border md:left-8" />
      
      <div className="space-y-8">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative pl-12 md:pl-16"
          >
            {/* Timeline dot */}
            <div className="absolute left-0 top-2 h-4 w-4 rounded-full bg-primary border-4 border-background md:left-4" />
            
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>{item.year}</span>
              </div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              {(item.company || item.institution) && (
                <p className="text-lg text-primary font-medium">
                  {item.company || item.institution}
                </p>
              )}
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
