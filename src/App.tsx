/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  MessageCircle, 
  MapPin, 
  Phone, 
  Mail, 
  Instagram, 
  ChevronRight, 
  Droplets, 
  Sparkles, 
  ShieldCheck,
  ExternalLink
} from "lucide-react";

const services = [
  { name: "Lavagem Manutenção", price: "20€", emoji: "🧽" },
  { name: "Lavagem Premium", price: "40€", emoji: "💎" },
  { name: "Detalhe Interior", price: "90€", emoji: "🛋️" },
  { name: "Descontaminação", price: "130€", emoji: "🛡️" },
  { name: "Polimento (1 Fase)", price: "200€", emoji: "✨" },
  { name: "Polimento (Full)", price: "450€", emoji: "🏎️" },
  { name: "Restauro Ópticas", price: "45€", emoji: "👁️" },
];

const processSteps = [
  {
    icon: <Droplets className="w-8 h-8 text-gold-brushed" />,
    title: "Lavagem Técnica (2 Baldes)",
    description: "Garantimos zero riscos durante o processo, utilizando microfibras de alta gramagem e shampoos pH neutro de elite."
  },
  {
    icon: <Sparkles className="w-8 h-8 text-gold-brushed" />,
    title: "Correção de Pintura de Alta Precisão",
    description: "Removemos 'swirls' e riscos superficiais para devolver o efeito 'espelho' ao seu carro."
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-gold-brushed" />,
    title: "Proteção Cerâmica Avançada",
    description: "Aplicação profissional de selantes ou ceras de Carnaúba para proteção de longa duração (3-6 meses)."
  }
];

const galleryImages = [
  "https://images.unsplash.com/photo-1520050206274-a1ae44613e6d?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1603584173870-7f3ca993476d?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&q=80&w=800"
];

export default function App() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen selection:bg-gold-brushed selection:text-matte-black">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Background Video/Image Placeholder */}
        <div className="absolute inset-0 z-0">
          <motion.div 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-full h-full"
          >
            <img 
              src="https://images.unsplash.com/photo-1493238555826-397b0d3f679e?auto=format&fit=crop&q=80&w=1920" 
              alt="Luxury Car Detail" 
              className="w-full h-full object-cover opacity-30"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(10,10,10,0.2)_0%,rgba(10,10,10,0.8)_70%,rgba(10,10,10,1)_100%)]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-matte-black/90 via-matte-black/40 to-matte-black"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-8 flex justify-center relative"
          >
            {/* Subtle glow behind logo to make it pop */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gold-brushed/20 blur-[60px] rounded-full"></div>
            
            <div className="w-56 md:w-80 relative z-10">
              <img 
                src="image_0.png" 
                alt="PF Detail Studio Logo" 
                className="w-full h-auto mix-blend-screen"
                style={{ filter: 'contrast(1.15) brightness(1.1)' }}
              />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tighter text-gold-gradient"
          >
            Se não brilha, não é nosso.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-lg md:text-xl text-silver-polished max-w-2xl mx-auto mb-10 font-light"
          >
            Estética Automóvel de Elite em S. Mamede Coronado. Proteção e Brilho Incomparáveis para o Seu Veículo.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <a 
              href="https://wa.me/351914166956" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gold-gradient text-matte-black px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_20px_rgba(212,175,55,0.4)]"
            >
              <MessageCircle className="w-6 h-6" />
              Agendar Transformação
            </a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gold-brushed opacity-50"
        >
          <div className="w-6 h-10 border-2 border-gold-brushed rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-gold-brushed rounded-full"></div>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-matte-black relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">Os Nossos Serviços de Assinatura</h2>
            <div className="w-24 h-1 bg-gold-gradient mx-auto rounded-full"></div>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col gap-4">
              {services.map((service, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="group flex flex-col sm:flex-row sm:items-center justify-between p-6 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-gold-brushed/30 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-center gap-6 mb-4 sm:mb-0">
                    <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center text-2xl shadow-inner group-hover:scale-110 transition-transform duration-300">
                      {service.emoji}
                    </div>
                    <span className="text-xl md:text-2xl font-medium text-silver-polished group-hover:text-white transition-colors">{service.name}</span>
                  </div>
                  
                  <div className="hidden sm:block flex-grow border-b-2 border-dotted border-white/10 mx-8 group-hover:border-gold-brushed/40 transition-colors"></div>
                  
                  <div className="flex items-center gap-2 self-end sm:self-auto">
                    <span className="text-sm text-silver-polished/50 uppercase tracking-widest">Desde</span>
                    <span className="text-3xl font-bold text-gold-brushed">{service.price}</span>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-12 text-center text-sm text-silver-polished/50 italic"
            >
              *Preços indicativos. Sujeitos a avaliação detalhada do estado do veículo.
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-gradient-to-b from-matte-black via-[#0a0a0a] to-[#111]">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">Porquê a PF Detail Studio?</h2>
            <div className="w-24 h-1 bg-gold-gradient mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true, margin: "-50px" }}
                className="relative p-10 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-gold-brushed/40 transition-all duration-500 group overflow-hidden"
              >
                {/* Large Background Number */}
                <div className="absolute -right-6 -top-10 text-[12rem] font-black text-white/[0.02] group-hover:text-gold-brushed/[0.05] transition-colors duration-500 pointer-events-none select-none font-display">
                  0{index + 1}
                </div>
                
                <div className="relative z-10">
                  <div className="mb-8 p-5 rounded-2xl bg-gradient-to-br from-gold-brushed/20 to-transparent w-fit group-hover:scale-110 transition-transform duration-500 border border-gold-brushed/20">
                    {step.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-gold-light transition-colors">{step.title}</h3>
                  <p className="text-silver-polished leading-relaxed font-light text-lg">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-32 bg-[#111]">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">A Arte do Detalhe</h2>
            <div className="w-24 h-1 bg-gold-gradient mx-auto rounded-full"></div>
          </motion.div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
            {galleryImages.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                viewport={{ once: true, margin: "-50px" }}
                className={`relative rounded-3xl overflow-hidden group cursor-pointer shadow-2xl ${
                  index === 0 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
              >
                <img 
                  src={img} 
                  alt={`Detail Work ${index + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-matte-black/80 via-matte-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-start p-8">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="p-3 rounded-full bg-white/10 backdrop-blur-md text-gold-brushed border border-white/20 inline-block mb-3">
                      <Sparkles className="w-6 h-6" />
                    </div>
                    <p className="text-white font-medium text-lg">Acabamento Premium</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 bg-matte-black relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-brushed/30 to-transparent"></div>
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">Visite-nos ou Agende o Seu Detalhe</h2>
            <div className="w-24 h-1 bg-gold-gradient mx-auto rounded-full"></div>
          </motion.div>

          <div className="relative max-w-6xl mx-auto">
            {/* Map Background (Desktop) / Top (Mobile) */}
            <div className="rounded-[2rem] overflow-hidden h-[500px] lg:h-[600px] border border-white/10 shadow-2xl relative z-0">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000.412456789!2d-8.5834567!3d41.2834567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd246543210fedcba%3A0x1234567890abcdef!2sRua%20Her%C3%B3is%20do%20Ultramar%2087%2C%204745-436%20S.%20Mamede%20Coronado!5e0!3m2!1spt!2spt!4v1712940000000!5m2!1spt!2spt" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: "grayscale(100%) contrast(120%) opacity(0.8)" }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização PF Detail Studio"
              ></iframe>
            </div>

            {/* Floating Info Card */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:right-12 mt-8 lg:mt-0 lg:w-[450px] flex flex-col justify-center space-y-8 p-10 bg-matte-black/80 backdrop-blur-xl rounded-[2rem] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-10"
            >
              <div className="space-y-8">
                <div className="flex items-start gap-5 group">
                  <div className="p-4 rounded-2xl bg-white/5 text-gold-brushed border border-white/5 group-hover:border-gold-brushed/30 transition-colors">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1 text-lg">Morada</h4>
                    <p className="text-silver-polished leading-relaxed">Rua Heróis do Ultramar 87<br/>4745-436 S. Mamede Coronado</p>
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="p-4 rounded-2xl bg-white/5 text-gold-brushed border border-white/5 group-hover:border-gold-brushed/30 transition-colors">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1 text-lg">Telefones</h4>
                    <p className="text-silver-polished text-lg">914 166 956 <span className="text-white/20 mx-2">|</span> 967 368 737</p>
                    <p className="text-xs text-silver-polished/40 mt-1">(Custo de chamada para rede móvel nacional)</p>
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="p-4 rounded-2xl bg-white/5 text-gold-brushed border border-white/5 group-hover:border-gold-brushed/30 transition-colors">
                    <Instagram className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1 text-lg">Redes Sociais</h4>
                    <a href="https://instagram.com/pfDetailStudio" target="_blank" rel="noopener noreferrer" className="text-silver-polished hover:text-gold-brushed transition-colors flex items-center gap-2 text-lg">
                      @pfDetailStudio <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-white/10 flex flex-col gap-4">
                <a 
                  href="https://wa.me/351914166956" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-3 bg-gold-gradient text-matte-black px-6 py-4 rounded-xl font-bold hover:scale-[1.02] transition-transform shadow-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  Agendar Agora
                </a>
                <a 
                  href="https://www.google.com/maps/dir/?api=1&destination=Rua+Heróis+do+Ultramar+87,+4745-436+S.+Mamede+Coronado" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-3 border border-white/20 text-white px-6 py-4 rounded-xl font-bold hover:bg-white hover:text-matte-black transition-all"
                >
                  <MapPin className="w-5 h-5" />
                  Obter Direções
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#050505] border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="w-40 opacity-70 mix-blend-screen">
              <img src="image_0.png" alt="PF Detail Studio Logo Small" className="w-full h-auto" style={{ filter: 'contrast(1.2)' }} />
            </div>
            
            <p className="text-silver-polished/60 text-sm max-w-md font-light">
              Meticulosamente cuidado por José Pires & João P. Fangueiro.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-xs text-silver-polished/40 uppercase tracking-widest">
              <a href="#" className="hover:text-gold-brushed transition-colors">Política de Privacidade</a>
              <span className="opacity-20">|</span>
              <a href="#" className="hover:text-gold-brushed transition-colors">Livro de Reclamações Eletrónico</a>
            </div>

            <p className="text-silver-polished/30 text-[10px] uppercase tracking-[0.2em]">
              © {currentYear} PF Detail Studio – Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button (Mobile Only) */}
      <motion.a
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://wa.me/351914166956"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 md:hidden bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center"
      >
        <MessageCircle className="w-7 h-7" />
      </motion.a>
    </div>
  );
}
