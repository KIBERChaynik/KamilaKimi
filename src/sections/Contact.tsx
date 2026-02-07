import { motion } from 'framer-motion';
import { 
  MapPin, 
  Clock, 
  Phone, 
  Mail, 
  MessageCircle,
  ExternalLink,
  Navigation
} from 'lucide-react';
import { AnimatedSection } from '@/components/AnimatedSection';

const contactInfo = [
  {
    icon: MapPin,
    label: 'Адрес',
    value: 'Улица Аксакова, 102Б-102в, 1 этаж',
    subValue: 'Ленинградский район, Калининград, 236043',
  },
  {
    icon: Clock,
    label: 'Часы работы',
    value: 'Ежедневно с 09:00 до 21:00',
    subValue: 'Открыто сейчас',
    highlight: true,
  },
  {
    icon: Phone,
    label: 'Телефон',
    value: '+7 (931) 602-00-00',
    href: 'tel:+79316020000',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'salonprobor@gmail.com',
    href: 'mailto:salonprobor@gmail.com',
  },
];

const socialLinks = [
  { name: 'ВКонтакте', icon: MessageCircle, href: '#' },
  { name: 'WhatsApp', icon: MessageCircle, href: 'https://wa.me/79316020000' },
  { name: 'Viber', icon: MessageCircle, href: 'viber://chat?number=+79316020000' },
];

export function Contact() {
  return (
    <section id="contact" className="section-padding bg-black relative">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[200px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <AnimatedSection>
            <span className="label-text mb-4 block">Контакты</span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="heading-lg text-white mb-6">
              Приходите в <span className="text-gold">Гости</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="body-text max-w-2xl mx-auto">
              Или свяжитесь с нами удобным способом. 
              Мы всегда рады новым клиентам и готовы ответить на все вопросы.
            </p>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <AnimatedSection direction="left">
              <div className="grid gap-6">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  const content = (
                    <motion.div
                      className="glass-card p-6 flex items-start gap-4 group"
                      initial={{ opacity: 0, x: -40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.1,
                        ease: [0.165, 0.84, 0.44, 1],
                      }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                        <Icon className="w-5 h-5 text-gold" />
                      </div>
                      <div>
                        <span className="text-white/40 text-xs uppercase tracking-wider block mb-1">
                          {item.label}
                        </span>
                        <span className={`text-white font-medium ${item.highlight ? 'text-gold' : ''}`}>
                          {item.value}
                        </span>
                        {item.subValue && (
                          <span className="text-white/50 text-sm block mt-1">
                            {item.subValue}
                          </span>
                        )}
                      </div>
                      {item.href && (
                        <ExternalLink className="w-4 h-4 text-white/20 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </motion.div>
                  );

                  return item.href ? (
                    <a key={item.label} href={item.href} className="block">
                      {content}
                    </a>
                  ) : (
                    <div key={item.label}>{content}</div>
                  );
                })}
              </div>
            </AnimatedSection>

            {/* Social Links */}
            <AnimatedSection direction="left" delay={0.4}>
              <div className="mt-8">
                <span className="text-white/40 text-xs uppercase tracking-wider block mb-4">
                  Мы в соцсетях
                </span>
                <div className="flex gap-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gold/20 hover:border-gold/30 transition-colors"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label={social.name}
                      >
                        <Icon className="w-5 h-5 text-gold" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </AnimatedSection>

            {/* CTA Buttons */}
            <AnimatedSection direction="left" delay={0.5}>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="tel:+79316020000"
                  className="btn-secondary flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  Позвонить
                </a>
                <a
                  href="https://wa.me/79316020000"
                  className="btn-primary flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  Написать в WhatsApp
                </a>
              </div>
            </AnimatedSection>
          </div>

          {/* Map */}
          <AnimatedSection direction="right" delay={0.2}>
            <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden glass-card">
              {/* Map Placeholder - In production, use Yandex Maps or Google Maps */}
              <div className="absolute inset-0 bg-gradient-to-br from-grey to-black flex flex-col items-center justify-center p-8">
                <motion.div
                  className="w-20 h-20 rounded-full bg-gold/20 flex items-center justify-center mb-6"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <MapPin className="w-10 h-10 text-gold" />
                </motion.div>
                <h3 className="text-white font-serif text-2xl mb-2 text-center">
                  Probor на карте
                </h3>
                <p className="text-white/60 text-center mb-6">
                  Улица Аксакова, 102Б-102в<br />
                  Ленинградский район, Калининград
                </p>
                <a
                  href="https://yandex.ru/maps/-/CHQ1Z0Mp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center gap-2"
                >
                  <Navigation className="w-4 h-4" />
                  Построить маршрут
                </a>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-4 right-4 w-20 h-20 border-t-2 border-r-2 border-gold/20 rounded-tr-xl" />
              <div className="absolute bottom-4 left-4 w-20 h-20 border-b-2 border-l-2 border-gold/20 rounded-bl-xl" />
            </div>
          </AnimatedSection>
        </div>

        {/* Promo Banner */}
        <AnimatedSection delay={0.6} className="mt-16">
          <div className="glass-card p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-transparent to-gold/5" />
            <div className="relative z-10">
              <span className="label-text mb-4 block">Специальное предложение</span>
              <h3 className="heading-md text-white mb-4">
                Скидка 10% на первое посещение
              </h3>
              <p className="body-text max-w-xl mx-auto mb-6">
                Сообщите код <span className="text-gold font-medium">2GIS</span> при записи 
                и получите скидку 10% на любую услугу
              </p>
              <a
                href="tel:+79316020000"
                className="btn-secondary inline-flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Записаться по телефону
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
