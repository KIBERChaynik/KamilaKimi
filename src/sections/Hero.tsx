import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Star, MapPin, Clock, ChevronRight } from 'lucide-react';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: backgroundY }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
          style={{ backgroundImage: 'url(/images/hero-salon.jpg)' }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-10 w-px h-32 bg-gradient-to-b from-transparent via-gold/50 to-transparent"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
        />
        <motion.div
          className="absolute bottom-1/4 right-10 w-px h-32 bg-gradient-to-b from-transparent via-gold/50 to-transparent"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.5, delay: 1.2 }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        style={{ y: textY, opacity }}
      >
        {/* Rating Badge */}
        <motion.div
          className="inline-flex items-center gap-2 mb-8"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.165, 0.84, 0.44, 1] }}
        >
          <div className="flex items-center gap-1 px-4 py-2 glass-card">
            <Star className="w-4 h-4 text-gold fill-gold" />
            <span className="text-gold font-medium">4.9</span>
            <span className="text-white/60 text-sm ml-1">(293 отзыва)</span>
          </div>
          <div className="flex items-center gap-1 px-4 py-2 glass-card">
            <MapPin className="w-4 h-4 text-gold" />
            <span className="text-white/80 text-sm">Калининград</span>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          className="heading-xl text-white mb-6"
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.165, 0.84, 0.44, 1] }}
        >
          <span className="block">Probor</span>
          <span className="block text-gold mt-2">Салон Красоты</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-8 font-light"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.165, 0.84, 0.44, 1] }}
        >
          Премиальный уход за собой в Калининграде. 
          Профессиональные мастера, атмосфера роскоши и безупречный результат.
        </motion.p>

        {/* Promo Code */}
        <motion.div
          className="inline-flex items-center gap-3 px-6 py-3 bg-gold/10 border border-gold/30 rounded-full mb-10"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.7, ease: [0.165, 0.84, 0.44, 1] }}
        >
          <span className="text-gold text-sm">Первое посещение — скидка 10% по коду</span>
          <span className="px-3 py-1 bg-gold text-black text-sm font-medium rounded-full">
            2GIS
          </span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.165, 0.84, 0.44, 1] }}
        >
          <button
            onClick={() => scrollToSection('#contact')}
            className="btn-secondary flex items-center gap-2 group"
          >
            Записаться
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
          <button
            onClick={() => scrollToSection('#services')}
            className="btn-primary"
          >
            Наши услуги
          </button>
        </motion.div>

        {/* Info Bar */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-6 md:gap-10"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1, ease: [0.165, 0.84, 0.44, 1] }}
        >
          <div className="flex items-center gap-2 text-white/60">
            <Clock className="w-4 h-4 text-gold" />
            <span className="text-sm">Ежедневно 09:00 — 21:00</span>
          </div>
          <div className="flex items-center gap-2 text-white/60">
            <MapPin className="w-4 h-4 text-gold" />
            <span className="text-sm">ул. Аксакова, 102Б</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="w-1 h-2 bg-gold rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
