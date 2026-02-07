import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Award, Users, Calendar, Star } from 'lucide-react';
import { AnimatedSection } from '@/components/AnimatedSection';
import { CountUp } from '@/components/CountUp';

const stats = [
  { icon: Calendar, value: 10, suffix: '+', label: 'Лет опыта' },
  { icon: Users, value: 15, suffix: '+', label: 'Мастеров' },
  { icon: Award, value: 5000, suffix: '+', label: 'Довольных клиентов' },
  { icon: Star, value: 4, suffix: '.9', label: 'Рейтинг' },
];

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);
  const imageRotate = useTransform(scrollYProgress, [0, 1], [-3, 3]);

  return (
    <section
      id="about"
      ref={containerRef}
      className="section-padding bg-gradient-to-b from-black to-black-light relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[200px] -translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <AnimatedSection direction="left">
              <span className="label-text mb-4 block">О нас</span>
            </AnimatedSection>

            <AnimatedSection direction="left" delay={0.1}>
              <h2 className="heading-lg text-white mb-6">
                О Салоне <span className="text-gold">Probor</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection direction="left" delay={0.2}>
              <p className="body-text mb-6">
                Probor — это пространство, где красота становится искусством. 
                Наши мастера — профессионалы с многолетним опытом, которые 
                вкладывают душу в каждую процедуру.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="left" delay={0.3}>
              <p className="body-text mb-8">
                Мы используем только премиальные материалы и следуем мировым 
                трендам beauty-индустрии. Каждый клиент для нас особенный, 
                поэтому мы подбираем индивидуальный подход к каждому визиту.
              </p>
            </AnimatedSection>

            {/* Stats */}
            <AnimatedSection direction="left" delay={0.4}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={stat.label}
                      className="text-center"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.6,
                        delay: 0.5 + index * 0.1,
                        ease: [0.165, 0.84, 0.44, 1],
                      }}
                    >
                      <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gold/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-gold" />
                      </div>
                      <div className="text-2xl md:text-3xl font-serif text-gold mb-1">
                        <CountUp
                          end={stat.value}
                          suffix={stat.suffix}
                          duration={2000}
                        />
                      </div>
                      <div className="text-xs text-white/50 uppercase tracking-wider">
                        {stat.label}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </AnimatedSection>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative" ref={imageRef}>
            <AnimatedSection direction="right" delay={0.2}>
              <div className="relative perspective-1000">
                {/* Main Image */}
                <motion.div
                  className="relative z-10 rounded-2xl overflow-hidden shadow-2xl"
                  style={{ y: imageY, rotateY: imageRotate }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                >
                  <img
                    src="/images/about-team.jpg"
                    alt="Команда Probor"
                    className="w-full h-auto object-cover"
                  />
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </motion.div>

                {/* Decorative Frame */}
                <div className="absolute -inset-4 border border-gold/20 rounded-3xl -z-10" />
                <div className="absolute -inset-8 border border-gold/10 rounded-3xl -z-20" />

                {/* Floating Badge */}
                <motion.div
                  className="absolute -bottom-6 -left-6 z-20 glass-card px-6 py-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center">
                      <Award className="w-5 h-5 text-black" />
                    </div>
                    <div>
                      <div className="text-gold font-serif text-lg">Лучший салон</div>
                      <div className="text-white/50 text-xs">Калининград 2024</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
