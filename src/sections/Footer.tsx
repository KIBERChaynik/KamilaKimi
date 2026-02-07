import { motion } from 'framer-motion';
import { MessageCircle, Phone, Mail } from 'lucide-react';

const footerLinks = {
  services: [
    { label: 'Парикмахерские услуги', href: '#services' },
    { label: 'Маникюр и педикюр', href: '#services' },
    { label: 'Косметология', href: '#services' },
    { label: 'Макияж', href: '#services' },
    { label: 'Брови и ресницы', href: '#services' },
  ],
  company: [
    { label: 'О нас', href: '#about' },
    { label: 'Галерея', href: '#gallery' },
    { label: 'Отзывы', href: '#testimonials' },
    { label: 'Контакты', href: '#contact' },
  ],
};

const socialLinks = [
  { name: 'ВКонтакте', icon: MessageCircle, href: '#' },
  { name: 'WhatsApp', icon: Phone, href: 'https://wa.me/79316020000' },
];

export function Footer() {
  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-[#050505] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <motion.a
              href="#"
              className="inline-block font-serif text-3xl text-gold mb-4"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              whileHover={{ scale: 1.05 }}
            >
              Probor
            </motion.a>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Премиальный салон красоты в Калининграде. 
              Профессиональный уход за волосами, ногтями и кожей.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-gold/20 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.name}
                  >
                    <Icon className="w-4 h-4 text-gold" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-white font-medium mb-6 text-sm uppercase tracking-wider">
              Услуги
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-white/50 hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-medium mb-6 text-sm uppercase tracking-wider">
              О салоне
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-white/50 hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-medium mb-6 text-sm uppercase tracking-wider">
              Контакты
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+79316020000"
                  className="flex items-center gap-3 text-white/50 hover:text-gold transition-colors"
                >
                  <Phone className="w-4 h-4 text-gold" />
                  <span className="text-sm">+7 (931) 602-00-00</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:salonprobor@gmail.com"
                  className="flex items-center gap-3 text-white/50 hover:text-gold transition-colors"
                >
                  <Mail className="w-4 h-4 text-gold" />
                  <span className="text-sm">salonprobor@gmail.com</span>
                </a>
              </li>
              <li className="text-white/50 text-sm">
                <span className="block text-white/30 text-xs uppercase tracking-wider mb-1">
                  Адрес
                </span>
                Улица Аксакова, 102Б-102в<br />
                Калининград, 236043
              </li>
              <li className="text-white/50 text-sm">
                <span className="block text-white/30 text-xs uppercase tracking-wider mb-1">
                  Режим работы
                </span>
                Ежедневно 09:00 — 21:00
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            © 2026 Probor. Все права защищены.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/30 hover:text-gold transition-colors text-sm">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-white/30 hover:text-gold transition-colors text-sm">
              Пользовательское соглашение
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
