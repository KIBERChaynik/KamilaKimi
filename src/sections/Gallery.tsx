import { motion } from 'framer-motion';
import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { AnimatedSection } from '@/components/AnimatedSection';

const galleryImages = [
  {
    src: '/images/gallery-1.jpg',
    alt: 'Окрашивание волос',
    category: 'Волосы',
    span: 'row-span-2',
  },
  {
    src: '/images/gallery-2.jpg',
    alt: 'Маникюр',
    category: 'Ногти',
    span: '',
  },
  {
    src: '/images/gallery-3.jpg',
    alt: 'Макияж',
    category: 'Макияж',
    span: 'row-span-2',
  },
  {
    src: '/images/gallery-4.jpg',
    alt: 'Интерьер салона',
    category: 'Интерьер',
    span: '',
  },
  {
    src: '/images/gallery-5.jpg',
    alt: 'SPA процедуры',
    category: 'SPA',
    span: '',
  },
  {
    src: '/images/gallery-6.jpg',
    alt: 'Брови и ресницы',
    category: 'Брови',
    span: '',
  },
];

function GalleryImage({
  image,
  index,
  onClick,
}: {
  image: typeof galleryImages[0];
  index: number;
  onClick: () => void;
}) {
  return (
    <motion.div
      className={`relative overflow-hidden rounded-xl cursor-pointer group ${image.span}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.165, 0.84, 0.44, 1],
      }}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
    >
      <motion.div
        className="relative w-full h-full"
        whileHover={{
          rotateY: 5,
          rotateX: -5,
          transition: { duration: 0.3 },
        }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <img
          src={image.src}
          alt={image.alt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <span className="text-gold text-xs uppercase tracking-wider mb-1 block">
              {image.category}
            </span>
            <h4 className="text-white font-serif text-lg">{image.alt}</h4>
          </div>

          {/* Zoom Icon */}
          <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ZoomIn className="w-5 h-5 text-gold" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  return (
    <section id="gallery" className="section-padding bg-black relative">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[150px] -translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <AnimatedSection>
            <span className="label-text mb-4 block">Портфолио</span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="heading-lg text-white mb-6">
              Наши <span className="text-gold">Работы</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="body-text max-w-2xl mx-auto">
              Результаты, которыми гордимся. Каждая работа — это история 
              преображения и довольного клиента.
            </p>
          </AnimatedSection>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
          {galleryImages.map((image, index) => (
            <GalleryImage
              key={image.src}
              image={image}
              index={index}
              onClick={() => setSelectedImage(image)}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.button
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            onClick={() => setSelectedImage(null)}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <X className="w-6 h-6 text-white" />
          </motion.button>

          <motion.div
            className="relative max-w-4xl max-h-[80vh]"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, ease: [0.165, 0.84, 0.44, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg">
              <span className="text-gold text-sm uppercase tracking-wider">
                {selectedImage.category}
              </span>
              <h4 className="text-white font-serif text-2xl mt-1">
                {selectedImage.alt}
              </h4>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
