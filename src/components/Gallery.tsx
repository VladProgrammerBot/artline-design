import React from "react";

interface GalleryProps {
  images: string[];
  title?: string;
  className?: string;
}

const Gallery: React.FC<GalleryProps> = ({
  images,
  title = "Приклади робіт",
  className = "",
}) => {
  // Різна висота для асиметричного ефекту
  const heights = [
    "aspect-auto",
    "aspect-[3/4]",
    "aspect-[4/3]",
    "aspect-[2/3]",
    "aspect-[3/2]",
  ];

  const objectPositions = ["center", "top", "bottom", "left", "right"];

  return (
    <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
      {images.map((image, index) => {
        const randomHeight = heights[index % heights.length];
        const position = objectPositions[index % objectPositions.length];

        return (
          <div
            key={index}
            className={`${randomHeight} relative break-inside-avoid mb-4 bg-zinc-200 rounded-lg overflow-hidden group cursor-pointer`}
          >
            <img
              src={image}
              alt={`Приклад роботи ${index + 1}`}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              style={{
                objectPosition: position,
              }}
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />

            {/* Прихований текст для SEO */}
            <span className="sr-only">
              Зображення прикладу робіт компанії, інтер'єр офісу
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Gallery;
