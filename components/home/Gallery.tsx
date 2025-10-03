"use client";
import Image from "next/image";
import { useState, useRef } from "react";

export default function Gallery() {
  const images = [
    "/optimized/balkon.webp",
    "/optimized/balkon1.webp",
    "/optimized/izlog.webp",
    "/optimized/izlog1.webp",
    "/optimized/komarnik.webp",
    "/optimized/komarnik1.webp",
    "/optimized/komarnik2.webp",
    "/optimized/komarnik3.webp",
    "/optimized/komarnik4.webp",
    "/optimized/komarnik5.webp",
    "/optimized/komarnik6.webp",
    "/optimized/komarnik7.webp",
    "/optimized/komarnik8.webp",
    "/optimized/prozor.webp",
    "/optimized/prozor1.webp",
    "/optimized/prozor2.webp",
    "/optimized/prozor3.webp",
    "/optimized/prozor4.webp",
    "/optimized/prozor5.webp",
    "/optimized/prozor6.webp",
    "/optimized/prozor7.webp",
    "/optimized/prozor8.webp",
    "/optimized/prozor9.webp",
    "/optimized/prozor10.webp",
    "/optimized/prozor11.webp",
    "/optimized/prozor12.webp",
    "/optimized/roletna.webp",
    "/optimized/roletna1.webp",
    "/optimized/roletna2.webp",
    "/optimized/roletna3.webp",
    "/optimized/roletna4.webp",
    "/optimized/roletna5.webp",
    "/optimized/roletna6.webp",
    "/optimized/roletna7.webp",
    "/optimized/roletna8.webp",
    "/optimized/roletna9.webp",
    "/optimized/roletna10.webp",
    "/optimized/roletna11.webp",
    "/optimized/spoj.webp",
    "/optimized/spoj2.webp",
    "/optimized/vrata.webp",
    "/optimized/vrata1.webp",
    "/optimized/vrata2.webp",
    "/optimized/vrata3.webp",
    "/optimized/vrata4.webp",
    "/optimized/vrata5.webp",
    "/optimized/vrata6.webp",
    "/optimized/vrata7.webp",
    "/optimized/vrata8.webp",
    "/optimized/vrata9.webp",
    "/optimized/vrata10.webp",
    "/optimized/vrata11.webp",
    "/optimized/vrata12.webp",
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const imagesPerPage = 12;
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);
  const totalPages = Math.ceil(images.length / imagesPerPage);

  const nextImage = () => {
    if (selectedImage !== null && selectedImage < images.length - 1) {
      setSelectedImage(selectedImage + 1);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null && selectedImage > 0) {
      setSelectedImage(selectedImage - 1);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      // Swipe left - next image
      nextImage();
    }

    if (touchStartX.current - touchEndX.current < -50) {
      // Swipe right - previous image
      prevImage();
    }
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-primary">
          Naši Radovi
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {currentImages.map((image, index) => {
            const actualIndex = indexOfFirstImage + index;
            return (
              <div
                key={actualIndex}
                className="relative aspect-square cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => setSelectedImage(actualIndex)}
              >
                <Image
                  src={image}
                  alt={`Rad ${actualIndex + 1}`}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            );
          })}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-lg bg-primary text-white disabled:opacity-50 disabled:cursor-not-allowed hover:brightness-75 transition-colors"
            >
              Prethodna
            </button>
            <span className="text-gray-700">
              Strana {currentPage} od {totalPages}
            </span>
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-lg bg-primary text-white disabled:opacity-50 disabled:cursor-not-allowed hover:brightness-75 transition-colors"
            >
              Sledeća
            </button>
          </div>
        )}

        {/* Lightbox */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 z-10"
            >
              &times;
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              disabled={selectedImage === 0}
              className="absolute left-4 text-white text-4xl hover:text-gray-300 disabled:opacity-30 disabled:cursor-not-allowed z-10 md:block hidden"
            >
              &#8249;
            </button>
            <div className="relative max-w-5xl max-h-[90vh] w-full h-full">
              <Image
                src={images[selectedImage]}
                alt={`Rad ${selectedImage + 1}`}
                fill
                className="object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              disabled={selectedImage === images.length - 1}
              className="absolute right-4 text-white text-4xl hover:text-gray-300 disabled:opacity-30 disabled:cursor-not-allowed z-10 md:block hidden"
            >
              &#8250;
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
