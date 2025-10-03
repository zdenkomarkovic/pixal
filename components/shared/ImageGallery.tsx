import Image from "next/image";

interface ImageGalleryProps {
  images: string[];
  title: string;
  altPrefix?: string;
}

export default function ImageGallery({
  images,
  title,
  altPrefix = "Slika",
}: ImageGalleryProps) {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-primary">
          {title}
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div key={index} className="relative h-[350px]">
              <Image
                src={image}
                alt={`${altPrefix} ${index + 1}`}
                fill
                className="object-cover rounded-lg"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
