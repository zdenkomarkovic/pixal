"use client";
import Image from "next/image";
import { useState, useRef } from "react";
import AnimatedSection from "../AnimatedSection";

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
    "/optimized/IMG-01a356aa68d9805c526e8c2953db9a51-V.webp",
    "/optimized/IMG-1ac082aa4c4d084603cbeeb3d4b25d65-V.webp",
    "/optimized/IMG-1dabac2a8276afc2d871995489cbd297-V.webp",
    "/optimized/IMG-2a314b093f21d4f985df1281a3b5f599-V.webp",
    "/optimized/IMG-2aae84437ff0474f7f9682fdf0317d6d-V.webp",
    "/optimized/IMG-2c8e185d174ceff44dc9200eccf46692-V.webp",
    "/optimized/IMG-2ecbfbca884f9f6cb3f2a319f653d1a8-V.webp",
    "/optimized/IMG-3c1c5bfd9abd366e93aabe9685b48f87-V.webp",
    "/optimized/IMG-004a9382d16ca1fb7df1819bae52923d-V.webp",
    "/optimized/IMG-4a26647e1ecdad1f5446ae218ff0c107-V.webp",
    "/optimized/IMG-5a62ff01856647faf695a417593040cf-V.webp",
    "/optimized/IMG-5a927f6282fbadbc09aae46fbe96f695-V.webp",
    "/optimized/IMG-7fb8344ee5831a8edd7dc1eeddd27dfa-V.webp",
    "/optimized/IMG-08afa084dba72d532b6447db1bfa54b0-V.webp",
    "/optimized/IMG-8bf4b5ece289932489345bfac7037d77-V.webp",
    "/optimized/IMG-8c529b1ca0bba4faea1b0a26004cd60e-V.webp",
    "/optimized/IMG-8c2273301509b9d0ece3a0589a793f16-V.webp",
    "/optimized/IMG-9b578cfe47421be4c6ec14ad2eab9ccc-V.webp",
    "/optimized/IMG-9be83f4dcf5950132af3479eb26e29c5-V.webp",
    "/optimized/IMG-12e4a52cdbe4a10949f304d59603fd7d-V.webp",
    "/optimized/IMG-14c3ac2e9968f380eb879db863968cb0-V.webp",
    "/optimized/IMG-15d7956da117dbe18a855f0514bf2744-V.webp",
    "/optimized/IMG-17d0d82e2945a8912d8d4c5730f49073-V.webp",
    "/optimized/IMG-35feae2d18a324fef94d8cac887e47eb-V.webp",
    "/optimized/IMG-036eeac8766e5c413485254f0849b6a4-V.webp",
    "/optimized/IMG-48be09cfe98b5fcb497f36aa1f85a206-V.webp",
    "/optimized/IMG-75c3e9d0ad9046ee431a376b303b8779-V.webp",
    "/optimized/IMG-84a43462946b4a713fbfa5dccef9be7f-V.webp",
    "/optimized/IMG-92b5da5cd647c7a1df508bace985cc80-V.webp",
    "/optimized/IMG-94d55cdab85d173afbdda64c4160c2ab-V.webp",
    "/optimized/IMG-126d87dbe59986a979a2f77f99a67043-V.webp",
    "/optimized/IMG-383d2cd6a2660aba7cdf3be2d03c3f23-V.webp",
    "/optimized/IMG-502e140bdde50063a136ecf7f6f49c2a-V.webp",
    "/optimized/IMG-803f32924019f3aaaa21579229c8cb36-V.webp",
    "/optimized/IMG-890b98186cccbaf1aa95450104ff2c34-V.webp",
    "/optimized/IMG-5434c1d34b3af963e0a8e70b3f6a67ff-V.webp",
    "/optimized/IMG-59639a36123e987094cbdb61c6bf8274-V.webp",
    "/optimized/IMG-78885fea82c72275c6c0a4aaea5d8fbf-V.webp",
    "/optimized/IMG-103576e20787774315241a4b0891cf77-V.webp",
    "/optimized/IMG-7828099af4b81c3f361c260bb6a05865-V.webp",
    "/optimized/IMG-050563132340f2b7b4519b16f87b774f-V.webp",
    "/optimized/IMG-a6ed107d3eca82ff32644d533562d748-V.webp",
    "/optimized/IMG-aae0bcad54f795fbcfbabd24f0ee6e21-V.webp",
    "/optimized/IMG-b17cc753ac3268478b5dbb3c7737f68e-V.webp",
    "/optimized/IMG-bb8a7eae50a50a3a0827f0b6f2dce32a-V.webp",
    "/optimized/IMG-bf391647863fd88ee6c46a16073ecae1-V.webp",
    "/optimized/IMG-c1d74928c30a549f2ce44c8eaa0f0bfc-V.webp",
    "/optimized/IMG-c4740ff7abafcfa1a2acf4aab9535c7d-V.webp",
    "/optimized/IMG-c6611da2e266207947d6ac05aa22efa2-V.webp",
    "/optimized/IMG-c81320ab27e8007e1a41e6d191c9efe0-V.webp",
    "/optimized/IMG-c81320ab27e8007e1a41e6d191c9efe0-V.webp",
    "/optimized/IMG-c7144633cc4847f7f36d634718ed0089-V.webp",
    "/optimized/IMG-d8d5f8aec59011d8cbff6beafaad63cd-V.webp",
    "/optimized/IMG-e8e43be6a31868cda770feb2673628e5-V.webp",
    "/optimized/IMG-e17958a52cc8124ba1543e8a12b71ce4-V.webp",
    "/optimized/IMG-ee0dd450b3fb1368aa40a0fc80095f0f-V.webp",
    "/optimized/IMG-f54ab56f166a9622e61701e0dc1326bc-V.webp",
    "/optimized/IMG-fb25bd94beaa7088738de0035a0ee717-V.webp",
    "/optimized/IMG-fb291853f12ea5cd963a5cad216a2a78-V.webp",
    "/optimized/IMG-ff24be4e0b4bd71c465dca81beec3cc3-V.webp",
    "/optimized/IMG-ff0401783fce59f25e5f83fbe8b1a4b0-V.webp",
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
        <AnimatedSection>
          {" "}
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-primary">
            Naši Radovi
          </h2>
        </AnimatedSection>
        <AnimatedSection>
          {" "}
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
        </AnimatedSection>
        {/* Pagination */}
        <AnimatedSection>
          {" "}
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
        </AnimatedSection>
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
