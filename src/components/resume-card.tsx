"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: string;
}
export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <Link
      href={href || "#"}
      className="block group"
      onClick={(e) => {
        if (description) {
          e.preventDefault();
          setIsExpanded(!isExpanded);
        }
      }}
    >
      <div className="flex items-start gap-4 py-4">
        <img
          src={logoUrl}
          alt={altText}
          className="w-16 h-16 object-cover flex-shrink-0"
        />
        <div className="flex-grow">
          <div className="flex items-start justify-between gap-x-2">
            <h3 className="text-[15px] font-medium group-hover:text-gray-900 transition-colors">
              {title}
              {badges && (
                <span className="inline-flex gap-x-1 ml-2">
                  {badges.map((badge, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="text-[13px]"
                    >
                      {badge}
                    </Badge>
                  ))}
                </span>
              )}
            </h3>
            <div className="text-[13px] text-gray-600">
              {period}
            </div>
          </div>
          
          {subtitle && (
            <p className="text-[13px] text-gray-600 mt-1">{subtitle}</p>
          )}
          
          {description && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: isExpanded ? 1 : 0,
                height: isExpanded ? "auto" : 0,
              }}
              transition={{
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-2 text-[13px] text-gray-600"
            >
              {description}
            </motion.div>
          )}
        </div>
      </div>
    </Link>
  );
};
