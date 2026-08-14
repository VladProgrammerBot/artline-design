import React from "react";
import Link from "next/link";

// Типи для пропсів
interface GridItem {
  id: string | number;
  img: string;
  title: string;
  href?: string; // Опціонально, якщо не вказано - використовується дефолтний
  services?: string[]; // Опціонально, список послуг
}

type GridColumns = 3 | 4; // Дозволені значення для колонок

interface UniversalGridProps {
  items: GridItem[];
  columns?: GridColumns; // Новий проп для вибору кількості колонок
  gridClassName?: string; // Для кастомізації сітки (перевизначає columns)
  itemClassName?: string; // Для кастомізації елементів
  defaultHref?: string; // Дефолтний шлях, якщо не вказано в item
  imageAltPrefix?: string; // Префікс для alt тексту
}

const UniversalGrid: React.FC<UniversalGridProps> = ({
  items,
  columns = 3, // За замовчуванням 3 колонки
  gridClassName,
  itemClassName = "group relative flex items-end h-72 bg-zinc-900/50 overflow-hidden hover:shadow-xl hover:shadow-lime-400/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-lime-400/10 border border-white hover:border-lime-400/30",
  defaultHref = "/projects/branding-office",
  imageAltPrefix = "Project",
}) => {
  // Генерація класів для сітки в залежності від кількості колонок
  const getGridClasses = () => {
    if (gridClassName) return gridClassName; // Якщо передано кастомний клас - використовуємо його

    if (columns === 4) {
      return "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2";
    }

    // За замовчуванням 3 колонки
    return "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4";
  };

  return (
    <div className={getGridClasses()}>
      {items.map((item) => (
        <Link
          key={item.id}
          href={item.href || defaultHref}
          className={itemClassName}
        >
          <div className="absolute inset-0">
            <img
              src={item.img}
              alt={`${imageAltPrefix} ${item.title}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
            />
          </div>

          {/* Градієнтний оверлей - залишається видимим завжди */}
          <div className="absolute inset-0 duration-500 opacity-70 group-hover:opacity-100 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

          {/* Додатковий темний оверлей для кращої читабельності тексту */}
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-500"></div>

          <div className="relative z-10 p-5 w-full">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 bg-lime-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
              <span className="text-lg text-white uppercase group-hover:text-lime-400 transition-colors leading-tight">
                {item.title}
              </span>
              {/* <ul>
                {item.services?.map((service, index) => (
                  <li key={index} className="text-sm text-white/70 group-hover:text-lime-400 transition-colors">
                    {service}
                  </li>
                ))}
              </ul> */}
            </div>
            <div className="h-px w-0 group-hover:w-full bg-lime-400/30 transition-all duration-500"></div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default UniversalGrid;
