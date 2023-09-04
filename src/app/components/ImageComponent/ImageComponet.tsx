import Image from "next/image";
import React from "react";

interface IProps {
  src: string;
  width?: number;
  height?: number;
  alt?: string;
}

export default function ImageComponent({
  src,
  width = 500,
  height = 500,
  alt = "product-item",
}: IProps) {
  return (
    <div className="max-h-96  rounded-2xl overflow-hidden">
      <Image
        className="object-cover object-center w-full h-full"
        src={src}
        height={height}
        width={width}
        alt={alt}
        unoptimized
      />
    </div>
  );
}
