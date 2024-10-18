"use client";

import Main from "../page";
import Image, { StaticImageData } from "next/image";
import homeImage from "@/assets/images/DIV08314.jpg";
import homeImage1 from "@/assets/images/DIV08435.jpg";
import homeImage2 from "@/assets/images/DIV08440.jpg";
import homeImage3 from "@/assets/images/DIV08545.jpg";
import homeImage4 from "@/assets/images/DIV08687.jpg";
import homeImage5 from "@/assets/images/DIV08781.jpg";
import homeImage6 from "@/assets/images/DIV08792.jpg";
import homeImage7 from "@/assets/images/DIV09078.jpg";
import homeImage8 from "@/assets/images/DIV09119.jpg";
import homeImage9 from "@/assets/images/DIV09125.jpg";
import homeImage10 from "@/assets/images/DIV09221.jpg";
import homeImage11 from "@/assets/images/DIV09320.jpg";
import homeImage12 from "@/assets/images/DIV09339.jpg";
import homeImage13 from "@/assets/images/DIV09467.jpg";
import { useEffect, useState } from "react";

interface ImageData {
  src: StaticImageData;
}

const images: ImageData[] = [
  {
    src: homeImage,
  },
  {
    src: homeImage1,
  },
  {
    src: homeImage2,
  },
  {
    src: homeImage3,
  },
  {
    src: homeImage4,
  },
  {
    src: homeImage5,
  },
  {
    src: homeImage6,
  },
  {
    src: homeImage7,
  },
  {
    src: homeImage8,
  },
  {
    src: homeImage9,
  },
  {
    src: homeImage10,
  },
  {
    src: homeImage11,
  },
  {
    src: homeImage12,
  },
  {
    src: homeImage13,
  },
];

function HomePage() {
  // State to keep track of the current image index
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // State to determine if the image is being hovered over
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // Function to show the next slide
  const nextSlide = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // useEffect hook to handle automatic slide transition
  useEffect(() => {
    // Start interval for automatic slide change if not hovered
    if (!isHovered) {
      const interval = setInterval(() => {
        nextSlide();
      }, 3000);

      // Cleanup the interval on component unmount
      return () => {
        clearInterval(interval);
      };
    }
  }, [isHovered]);

  // Handle mouse over event
  const handleMouseOver = (): void => {
    setIsHovered(true);
  };

  // Handle mouse leave event
  const handleMouseLeave = (): void => {
    setIsHovered(false);
  };
  return (
    <Main>
      <div className="relative w-full mx-auto mt-4">
        <div
          className="relative h-screen group hover:-translate-y-2"
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
        >
          <Image
            src={images[currentIndex].src}
            alt={`Slider Image ${currentIndex + 1}`}
            layout="fill"
            objectFit="cover"
            className="rounded-xl transition-all duration-500 ease-in-out cursor-pointer w-screen"
          />
        </div>
        <div className="flex justify-center mt-4">
          {images.map((_, index) => (
            <div
              key={index}
              className={`h-1 w-10 mx-1 ${
                index === currentIndex ? "bg-slate-700 rounded-xl" : "bg-gray-300 rounded-xl"
              } transition-all duration-500 ease-in-out`}
            ></div>
          ))}
        </div>
      </div>
    </Main>
  );
}

export default HomePage;
