"use client";

import { useState } from "react";
import type { LearningPathBrand } from "@/lib/learning-path-brands";
import { cn } from "@/lib/utils";

export function OfficialBrandIcon({
  brand,
  className,
  imageClassName,
  fallbackClassName,
}: {
  brand: LearningPathBrand;
  className?: string;
  imageClassName?: string;
  fallbackClassName?: string;
}) {
  const [showImage, setShowImage] = useState(Boolean(brand.iconUrl));

  return (
    <span
      className={cn("relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full", className)}
      title={`${brand.name} official icon`}
      aria-label={`${brand.name} official icon`}
    >
      <span className={cn("font-bold leading-none", fallbackClassName)}>{brand.short}</span>
      {showImage ? (
        <img
          src={brand.iconUrl}
          alt=""
          className={cn("absolute inset-0 h-full w-full rounded-full object-contain", imageClassName)}
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={() => setShowImage(false)}
        />
      ) : null}
    </span>
  );
}
