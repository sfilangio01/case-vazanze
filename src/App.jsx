import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Calendar, MapPin, ArrowRight, 
  ChevronRight, Phone, Mail, CheckCircle, 
  Globe, ChevronLeft, RefreshCw, Clock, ShieldCheck, MessageCircle,
  LayoutGrid, Wind, Car, Droplets, Sparkles, Settings,
  Navigation, Heart, Instagram, Info, Timer
} from 'lucide-react';

const SERVICE_KEYS = ['esterno', 'interno', 'completo'];

const COMMON_FEATURES = [
  { it: 'Prelavaggio accurato', en: 'Thorough pre-wash', icon: Droplets },
  { it: 'Asciugatura a mano', en: 'Hand drying', icon: Wind },
  { it: 'Nero gomme', en: 'Tire dressing', icon: Car },
  { it: 'Pulizia vetri', en: 'Window cleaning', icon: Sparkles },
  { it: 'Rifinitura dettagli', en: 'Detailing', icon: Settings }
];

const DEFAULT_SERVICES = {
  esterno: {
    id: 'esterno',
    name: 'Lavaggio Esterno',
    tagline: { en: 'Impeccable shine for your car', it: 'Lucentezza impeccabile per la tua auto' },
    description: {
      it: "Il nostro servizio di lavaggio esterno viene effettuato a mano o con impianti automatizzati di ultima generazione per garantire la massima cura della carrozzeria. Include prelavaggio, lavaggio con shampoo specifico, ceratura e asciugatura meticolosa.",
      en: "Our exterior wash service is done by hand or with latest-generation automated systems to ensure maximum care for the bodywork. It includes pre-wash, wash with specific shampoo, waxing, and meticulous drying."
    },
    price: 15,
    duration: '30 min',
    vehicleType: 'Auto/SUV',
    isPremium: false,
    features: COMMON_FEATURES,
    images: [
      '/images/casevacanza-copy-real-01.jpg',
      '/images/casevacanza-copy-real-01.jpg',
      '/images/casevacanza-copy-real-01.jpg',
      '/images/casevacanza-copy-real-01.jpg',
      '/images/casevacanza-copy-real-01.jpg'
    ]
  },
  interno: {
    id: 'interno',
    name: 'Pulizia Interna',
    tagline: { en: 'Deep cleaning for your cabin', it: 'Pulizia profonda per il tuo abitacolo' },
    description: {
      it: "Ridiamo vita agli interni della tua auto. Aspirazione completa di sedili, tappetini e bagagliaio. Pulizia accurata del cruscotto, delle plastiche e di tutte le superfici interne con prodotti igienizzanti e protettivi.",
      en: "We bring your car's interior back to life. Complete vacuuming of seats, floor mats, and trunk. Careful cleaning of the dashboard, plastics, and all interior surfaces with sanitizing and protective products."
    },
    price: 20,
    duration: '45 min',
    vehicleType: 'Auto/SUV',
    isPremium: false,
    features: [
      { it: 'Aspirazione profonda', en: 'Deep vacuuming', icon: Wind },
      { it: 'Pulizia plastiche', en: 'Plastics cleaning', icon: Sparkles },
      { it: 'Igienizzazione', en: 'Sanitization', icon: ShieldCheck },
      { it: 'Profumazione', en: 'Deodorizing', icon: Droplets }
    ],
    images: [
      '/images/casevacanza-copy-real-01.jpg',
      '/images/casevacanza-copy-real-01.jpg',
      '/images/casevacanza-copy-real-01.jpg',
      '/images/casevacanza-copy-real-01.jpg',
      '/images/casevacanza-copy-real-01.jpg'
    ]
  },
  completo: {
    id: 'completo',
    name: 'Lavaggio Completo',
    tagline: { en: 'Total care and ozone sanitization', it: 'Cura totale e sanificazione ad ozono' },
    description: {
      it: "Il trattamento definitivo per la tua auto. Combina il lavaggio esterno meticoloso con una pulizia interna profonda, aggiungendo la sanificazione dell'abitacolo con ozono per eliminare batteri, virus e cattivi odori in modo permanente.",
      en: "The ultimate treatment for your car. It combines meticulous exterior washing with deep interior cleaning, adding ozone cabin sanitization to permanently eliminate bacteria, viruses, and bad odors."
    },
    price: 45,
    duration: '1h 30m',
    vehicleType: 'Auto/SUV',
    isPremium: true,
    features: [
      ...COMMON_FEATURES,
      { it: 'Sanificazione Ozono', en: 'Ozone Sanitization', icon: Wind },
      { it: 'Trattamento sedili', en: 'Seats treatment', icon: Sparkles }
    ],
    images: [
      '/images/casevacanza-copy-real-01.jpg',
      '/images/casevacanza-copy-real-01.jpg',
      '/images/casevacanza-copy-real-01.jpg',
      '/images/casevacanza-copy-real-01.jpg',
      '/images/casevacanza-copy-real-01.jpg'
    ]
  }
};

const TRANSLATIONS = {
  en: {
    nav_home: "Home", nav_apartments: "Services", nav_castellammare: "Info & Hours", nav_contact: "Book", nav_calendar: "Availability",
    hero_title_1: "Total Care", hero_title_2: "For Your Car", hero_title_3: "Starts Here",
    hero_sub: "Professional car wash in Turin. Hand wash, deep interior cleaning, and sanitization.",
    btn_explore: "Explore Services", btn_quote: "Book Now",
    sect_apartments: "Our Services", sect_apartments_sub: "Choose the best treatment for your vehicle.",
    why_us: "Why Choose Us?", pos_title: "Central Location", pos_desc: "We are located at Via Canelli 51, Turin.",
    hosp_title: "Professional Quality", hosp_desc: "Years of experience and top-quality products.",
    comf_title: "Advanced Technology", comf_desc: "Ozone sanitization and specific treatments.",
    reviews_title: "What Our Customers Say", duration: "Duration", vehicle: "Vehicle", price_from: "starting from",
    back_home: "Back Home", amenities_title: "Included in the service", btn_inquiry: "Send Request", btn_airbnb: "Follow on Instagram",
    contact_title: "Contact & Booking", contact_sub: "Book your appointment at Autolavaggio Lingotto.",
    form_apt: "Select Service", form_name: "Full Name", form_phone: "Phone Number", form_checkin: "Preferred Date", form_msg: "Message / Vehicle Info", form_submit: "Send Request",
    form_sending: "Sending...", form_error: "An error occurred. Please try again.",
    explore_title: "Autolavaggio Lingotto", explore_sub: "Professionalism at your service",
    what_to_see: "Our Details", map_title: "Where to find us",
    ground_floor: "Standard", first_floor: "Premium", premium_badge: "Premium Treatment",
    availability: "Availability", booked: "Fully Booked", available: "Available Spots",
    rules_title: "Opening Hours",
    all_photos: "Show all photos",
    explore_walk_title: "Our working process",
    explore_walk_1: "Careful pre-wash to remove coarse dirt",
    explore_walk_2: "Hand or automated wash using anti-scratch materials",
    explore_walk_3: "Deep interior vacuuming and dashboard care",
    explore_walk_4: "Sanitization and detailing for a perfect finish",
    explore_walk_extra: "We use only professional and certified products to guarantee a perfect result without risking damage to your vehicle's paint or interiors.",
    explore_nearby_title: "Why rely on us",
    explore_nearby_p: "Autolavaggio Lingotto is your point of reference in Turin for car care:",
    explore_nearby_1: "Speed: efficient services without long waiting times",
    explore_nearby_2: "Precision: maniacal attention to detail",
    explore_nearby_3: "Sanitization: elimination of odors and bacteria",
    explore_nearby_4: "Quality products: specific waxes and safe detergents",
    explore_why_title: "Why choose Autolavaggio Lingotto",
    explore_why_1: "Expert and careful staff",
    explore_why_2: "Easy to reach location",
    explore_why_3: "Competitive prices",
    explore_why_4: "Premium services available",
    explore_footer: "Whether you need a quick wash or a complete detailing, we are here to make your car shine like new."
  },
  it: {
    nav_home: "Home", nav_apartments: "Servizi", nav_castellammare: "Info & Orari", nav_contact: "Prenota", nav_calendar: "Disponibilità",
    hero_title_1: "La Cura Perfetta", hero_title_2: "Per La Tua Auto", hero_title_3: "Inizia Qui",
    hero_sub: "Autolavaggio professionale a Torino. Lavaggio a mano, pulizia interna profonda e sanificazione.",
    btn_explore: "Esplora i Servizi", btn_quote: "Prenota Ora",
    sect_apartments: "I Nostri Servizi", sect_apartments_sub: "Scegli il trattamento migliore per il tuo veicolo.",
    why_us: "Perché Scegliere Noi?", pos_title: "Posizione Comoda", pos_desc: "Siamo in Via Canelli 51, Torino.",
    hosp_title: "Qualità Professionale", hosp_desc: "Anni di esperienza e prodotti al top.",
    comf_title: "Tecnologia Avanzata", comf_desc: "Sanificazione ad ozono e trattamenti specifici.",
    reviews_title: "Cosa Dicono i Clienti", duration: "Durata", vehicle: "Veicolo", price_from: "a partire da",
    back_home: "Torna alla Home", amenities_title: "Incluso nel servizio", btn_inquiry: "Invia Richiesta", btn_airbnb: "Seguici su Instagram",
    contact_title: "Contatti e Prenotazioni", contact_sub: "Prenota il tuo lavaggio all'Autolavaggio Lingotto.",
    form_apt: "Seleziona Servizio", form_name: "Nome Completo", form_phone: "Numero di Telefono", form_checkin: "Data Preferita", form_msg: "Messaggio / Modello Auto", form_submit: "Invia Richiesta",
    form_sending: "Invio in corso...", form_error: "Si è verificato un errore. Riprova.",
    explore_title: "Autolavaggio Lingotto", explore_sub: "La professionalità al tuo servizio",
    what_to_see: "Dettagli", map_title: "Dove Siamo",
    ground_floor: "Standard", first_floor: "Premium", premium_badge: "Trattamento Premium",
    availability: "Disponibilità", booked: "Al Completo", available: "Posti Liberi",
    rules_title: "Orari di Apertura",
    all_photos: "Mostra tutte le foto",
    explore_walk_title: "Il nostro processo di lavoro",
    explore_walk_1: "Prelavaggio accurato per rimuovere lo sporco grossolano",
    explore_walk_2: "Lavaggio a mano o automatizzato con materiali antigraffio",
    explore_walk_3: "Aspirazione profonda degli interni e cura delle plastiche",
    explore_walk_4: "Sanificazione e rifinitura dettagli per un risultato perfetto",
    explore_walk_extra: "Utilizziamo solo prodotti professionali e certificati per garantire un risultato impeccabile senza rischiare di rovinare la vernice o gli interni del tuo veicolo.",
    explore_nearby_title: "Perché affidarsi a noi",
    explore_nearby_p: "Autolavaggio Lingotto è il tuo punto di riferimento a Torino per la cura dell'auto:",
    explore_nearby_1: "Rapidità: servizi efficienti senza lunghe attese",
    explore_nearby_2: "Precisione: cura maniacale dei dettagli",
    explore_nearby_3: "Igienizzazione: eliminazione di odori e batteri",
    explore_nearby_4: "Prodotti di qualità: cere specifiche e detergenti sicuri",
    explore_why_title: "Perché scegliere Autolavaggio Lingotto",
    explore_why_1: "Personale esperto e attento",
    explore_why_2: "Posizione facile da raggiungere",
    explore_why_3: "Prezzi competitivi e trasparenti",
    explore_why_4: "Servizi premium disponibili",
    explore_footer: "Che tu abbia bisogno di un lavaggio veloce o di un detailing completo, siamo qui per far brillare la tua auto come nuova."
  }
};

const CustomCalendar = ({ blockedDates, lang, translations }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const monthNames = {
    it: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"],
    en: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  };
  const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  const startDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
  const handlePrev = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  const handleNext = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  
  const isBlocked = (day) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const checkDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return checkDate < today || (blockedDates || []).includes(dateStr);
  };

  return (
    <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-xl overflow-hidden">
      <div className="flex justify-between items-center mb-6">
        <button onClick={handlePrev} className="p-2 hover:bg-slate-50 rounded-full transition-colors"><ChevronLeft className="w-5 h-5" /></button>
        <h4 className="font-black text-slate-800 text-lg">{monthNames[lang][currentDate.getMonth()]} {currentDate.getFullYear()}</h4>
        <button onClick={handleNext} className="p-2 hover:bg-slate-50 rounded-full transition-colors"><ChevronRight className="w-5 h-5" /></button>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center mb-2">
        {['D', 'L', 'M', 'M', 'G', 'V', 'S'].map((d, i) => (<div key={`header-${i}`} className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{d}</div>))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {[...Array(startDay)].map((_, i) => <div key={`empty-${i}`} className="h-10" />)}
        {[...Array(daysInMonth(currentDate.getFullYear(), currentDate.getMonth()))].map((_, i) => {
          const day = i + 1;
          const blocked = isBlocked(day);
          return (<div key={`day-${day}`} className={`h-10 flex items-center justify-center rounded-xl text-sm font-bold transition-all relative cursor-pointer ${blocked ? 'bg-red-50 text-red-500' : 'bg-green-50 text-green-600 hover:scale-105'}`}>{day}</div>);
        })}
      </div>
      <div className="mt-6 flex justify-center gap-6 text-[10px] font-bold uppercase tracking-widest text-slate-400">
        <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-full bg-green-500" /> {translations.available}</div>
        <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-full bg-red-500" /> {translations.booked}</div>
      </div>
    </div>
  );
};

const BoxGallery = ({ images, t }) => {
  const [showFullGallery, setShowFullGallery] = useState(false);
  const [selectedIdx, setSelectedIdx] = useState(0);
  const gridImages = images.slice(0, 5);

  return (
    <div className="w-full relative group">
      <div className="grid grid-cols-4 grid-rows-2 gap-3 h-[400px] md:h-[500px] overflow-hidden rounded-[3rem] shadow-2xl">
        <div 
          className="col-span-4 md:col-span-2 row-span-2 cursor-pointer relative overflow-hidden"
          onClick={() => { setSelectedIdx(0); setShowFullGallery(true); }}
        >
          <img src={images[0]} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" alt="Main" />
          <div className="absolute inset-0 bg-black/5 hover:bg-black/0 transition-colors" />
        </div>
        {gridImages.slice(1).map((img, i) => (
          <div 
            key={i} 
            className="hidden md:block col-span-1 row-span-1 cursor-pointer relative overflow-hidden"
            onClick={() => { setSelectedIdx(i + 1); setShowFullGallery(true); }}
          >
            <img src={img} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" alt={`Sub ${i}`} />
            <div className="absolute inset-0 bg-black/5 hover:bg-black/0 transition-colors" />
            {i === 3 && images.length > 5 && (
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center backdrop-blur-[2px]">
                <span className="text-white font-black text-xl">+{images.length - 5}</span>
              </div>
            )}
          </div>
        ))}
      </div>
      <button 
        onClick={() => setShowFullGallery(true)}
        className="absolute bottom-6 right-6 px-6 py-3 bg-white hover:bg-slate-50 text-slate-900 rounded-2xl font-black text-sm shadow-xl flex items-center gap-2 border border-slate-100 transition-all active:scale-95"
      >
        <LayoutGrid className="w-4 h-4" /> {t.all_photos}
      </button>

      {showFullGallery && (
        <div className="fixed inset-0 z-[100] bg-white flex flex-col animate-in fade-in duration-300">
           <div className="h-20 flex items-center justify-between px-8 border-b border-slate-100 bg-white">
              <button onClick={() => setShowFullGallery(false)} className="p-3 bg-slate-50 rounded-full hover:bg-slate-100 transition-colors">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <p className="font-black text-slate-400 uppercase tracking-widest text-xs">{selectedIdx + 1} / {images.length}</p>
              <div className="w-12 h-12" />
           </div>
           
           <div className="flex-1 relative flex items-center justify-center p-4 md:p-12 overflow-hidden bg-slate-50">
              <img 
                key={selectedIdx}
                src={images[selectedIdx]} 
                className="max-h-full max-w-full object-contain rounded-3xl shadow-2xl animate-in zoom-in-95 duration-500" 
                alt="Full View" 
              />
              
              <button 
                onClick={() => setSelectedIdx(prev => prev === 0 ? images.length - 1 : prev - 1)}
                className="absolute left-4 md:left-12 p-5 bg-white/90 backdrop-blur-xl rounded-full shadow-2xl hover:bg-white transition-all z-10"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              
              <button 
                onClick={() => setSelectedIdx(prev => prev === images.length - 1 ? 0 : prev + 1)}
                className="absolute right-4 md:right-12 p-5 bg-white/90 backdrop-blur-xl rounded-full shadow-2xl hover:bg-white transition-all z-10"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
           </div>
           
           <div className="h-24 bg-white border-t border-slate-100 flex items-center justify-start md:justify-center gap-3 overflow-x-auto px-4 scrollbar-hide">
              {images.map((img, idx) => (
                <img 
                  key={idx} 
                  src={img} 
                  onClick={() => setSelectedIdx(idx)}
                  className={`h-14 w-20 flex-shrink-0 object-cover rounded-xl cursor-pointer transition-all ${selectedIdx === idx ? 'ring-4 ring-blue-600 scale-110 shadow-lg' : 'opacity-50 hover:opacity-100'}`} 
                  alt="Thumb" 
                />
              ))}
           </div>
        </div>
      )}
    </div>
  );
};

export default function App() {
  const [view, setView] = useState('home');
  const [lang, setLang] = useState('it');
  const [services, setServices] = useState(DEFAULT_SERVICES);
  const [selectedService, setSelectedService] = useState(null);
  const [inquiryStatus, setInquiryStatus] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = TRANSLATIONS[lang];

  const navigateTo = (path, viewName, srv = null) => {
    setView(viewName);
    setSelectedService(srv);
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const submitInquiry = async (e) => {
    e.preventDefault();
    setInquiryStatus('sending');

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      // Sostituire con il proprio endpoint formspree se desiderato
      const response = await fetch("https://formspree.io/f/xqeyypnq", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        setInquiryStatus('success');
        e.target.reset();
      } else {
        setInquiryStatus('error');
      }
    } catch (error) {
      setInquiryStatus('error');
    }
  };

  return (
    <div className="font-sans text-slate-900 bg-white min-h-screen selection:bg-blue-100">
      <nav className="fixed w-full z-[60] bg-white/80 backdrop-blur-xl border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 h-20 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer group" onClick={() => navigateTo('/', 'home')}>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl overflow-hidden bg-blue-600 flex items-center justify-center text-white">
                <Car className="w-7 h-7" />
              </div>
            </div>
            <span className="text-xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-500 hidden sm:block">Autolavaggio Lingotto</span>
          </div>
          <div className="hidden lg:flex items-center gap-6">
            <button onClick={() => navigateTo('/', 'home')} className={`text-sm font-bold transition-colors ${view === 'home' ? 'text-blue-600' : 'text-slate-500 hover:text-blue-600'}`}>{t.nav_home}</button>
            <button onClick={() => navigateTo('/services', 'services')} className={`text-sm font-bold transition-colors ${view === 'services' ? 'text-blue-600' : 'text-slate-500 hover:text-blue-600'}`}>{t.nav_apartments}</button>
            <div className="h-4 w-px bg-slate-200 mx-2" />
            <button onClick={() => navigateTo('/esterno', 'detail', DEFAULT_SERVICES.esterno)} className="text-sm font-bold text-slate-500 hover:text-blue-600">Esterno</button>
            <button onClick={() => navigateTo('/interno', 'detail', DEFAULT_SERVICES.interno)} className="text-sm font-bold text-slate-500 hover:text-blue-600">Interno</button>
            <button onClick={() => navigateTo('/completo', 'detail', DEFAULT_SERVICES.completo)} className="text-sm font-bold text-slate-500 hover:text-blue-600">Completo</button>
            <div className="h-4 w-px bg-slate-200 mx-2" />
            <button onClick={() => navigateTo('/explore', 'explore')} className={`text-sm font-bold transition-colors ${view === 'explore' ? 'text-blue-600' : 'text-slate-500 hover:text-blue-600'}`}>{t.nav_castellammare}</button>
            <button onClick={() => navigateTo('/contact', 'contact')} className={`text-sm font-bold transition-colors ${view === 'contact' ? 'text-blue-600' : 'text-slate-500 hover:text-blue-600'}`}>{t.nav_contact}</button>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => setLang(lang === 'it' ? 'en' : 'it')} className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 hover:bg-slate-100 rounded-full transition-all text-sm font-bold text-slate-700 border border-slate-200"><Globe className="w-4 h-4 text-blue-600" /> {lang === 'it' ? '🇮🇹 IT' : '🇬🇧 EN'}</button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 bg-slate-50 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[55] bg-white pt-24 animate-in slide-in-from-right duration-300 lg:hidden overflow-y-auto">
          <div className="flex flex-col p-6 gap-2">
            <button onClick={() => navigateTo('/', 'home')} className="flex items-center justify-between p-6 bg-slate-50 rounded-[2rem] font-black text-2xl text-slate-800">{t.nav_home} <ChevronRight /></button>
            <button onClick={() => navigateTo('/services', 'services')} className="flex items-center justify-between p-6 bg-slate-50 rounded-[2rem] font-black text-2xl text-slate-800">{t.nav_apartments} <ChevronRight /></button>
            <div className="grid grid-cols-1 gap-2 mt-4">
              <button onClick={() => navigateTo('/esterno', 'detail', DEFAULT_SERVICES.esterno)} className="p-5 bg-blue-50/50 rounded-2xl font-bold text-slate-700 text-left">Lavaggio Esterno</button>
              <button onClick={() => navigateTo('/interno', 'detail', DEFAULT_SERVICES.interno)} className="p-5 bg-blue-50/50 rounded-2xl font-bold text-slate-700 text-left">Pulizia Interna</button>
              <button onClick={() => navigateTo('/completo', 'detail', DEFAULT_SERVICES.completo)} className="p-5 bg-blue-50/50 rounded-2xl font-bold text-slate-700 text-left">Trattamento Completo</button>
            </div>
            <button onClick={() => navigateTo('/explore', 'explore')} className="flex items-center justify-between p-6 bg-slate-50 rounded-[2rem] font-black text-2xl text-slate-800 mt-4">{t.nav_castellammare} <ChevronRight /></button>
            <button onClick={() => navigateTo('/contact', 'contact')} className="flex items-center justify-between p-6 bg-blue-600 rounded-[2rem] font-black text-2xl text-white mt-4">{t.nav_contact} <ArrowRight /></button>
          </div>
        </div>
      )}

      <main className="pt-20">
        {view === 'home' && (
          <div className="animate-in fade-in duration-700">
            <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 z-0 scale-105">
                <img src="/images/casevacanza-copy-real-01.jpg" className="w-full h-full object-cover brightness-[0.4]" alt="Car Wash Hero" />
              </div>
              <div className="relative z-10 text-center px-4 max-w-4xl">
                <h1 className="text-6xl md:text-8xl font-black text-white mb-8 leading-[0.9] drop-shadow-2xl">{t.hero_title_1} <br/><span className="text-blue-400">{t.hero_title_2}</span> <br/>{t.hero_title_3}</h1>
                <p className="text-xl text-slate-100 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-lg font-medium">{t.hero_sub}</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button onClick={() => navigateTo('/services', 'services')} className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-black text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/40">{t.btn_explore}</button>
                  <button onClick={() => navigateTo('/contact', 'contact')} className="px-10 py-5 bg-white/10 backdrop-blur-md border-2 border-white text-white rounded-2xl font-black text-lg hover:bg-white hover:text-blue-900 transition-all">{t.btn_quote}</button>
                </div>
              </div>
            </section>
            <section className="py-24 max-w-7xl mx-auto px-4 text-center">
              <h2 className="text-5xl font-black mb-16 tracking-tight">{t.sect_apartments}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {SERVICE_KEYS.map(key => {
                  const srv = services[key] || DEFAULT_SERVICES[key];
                  return (
                    <div key={key} className="group cursor-pointer" onClick={() => navigateTo(`/${key}`, 'detail', srv)}>
                      <div className="relative h-[450px] rounded-[3rem] overflow-hidden shadow-2xl transition-transform duration-500 group-hover:-translate-y-4">
                        <img src={srv.images[0]} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={srv.name} />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                        <div className="absolute bottom-10 left-10 text-white text-left pr-4">
                          <h3 className="text-3xl font-black mb-2">{srv.name}</h3>
                          <p className="text-blue-300 font-bold uppercase text-[10px] tracking-widest">{t.price_from} {srv.price}€</p>
                          <p className="text-white/80 font-bold text-sm mt-2">{srv.tagline[lang]}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
            <section className="py-24 bg-slate-50">
              <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-5xl font-black mb-12 tracking-tight">{t.map_title}</h2>
                <div className="h-[500px] rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white bg-white">
                  <iframe title="home-map-centered" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2818.575294334367!2d7.6329402!3d45.0274154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47881cd420556ecb%3A0xc49d5622d1b54c86!2sVia%20Canelli%2C%2051%2C%2010127%20Torino%20TO!5e0!3m2!1sit!2sit!4v1700000000000!5m2!1sit!2sit" width="100%" height="100%" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
                </div>
              </div>
            </section>
          </div>
        )}

        {view === 'services' && (
          <div className="py-24 max-w-7xl mx-auto px-4 space-y-32">
            {SERVICE_KEYS.map((key, idx) => {
              const srv = services[key] || DEFAULT_SERVICES[key];
              return (
                <div key={key} className={`flex flex-col lg:flex-row gap-16 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className="lg:w-1/2 h-[550px] rounded-[4rem] overflow-hidden shadow-2xl relative">
                    <img src={srv.images[0]} className="w-full h-full object-cover" alt={key} />
                    {srv.isPremium && (
                      <div className="absolute top-6 right-6 bg-blue-600 text-white px-4 py-2 rounded-full font-bold text-sm flex items-center gap-2">
                        <Sparkles className="w-4 h-4" /> {t.premium_badge}
                      </div>
                    )}
                  </div>
                  <div className="lg:w-1/2 space-y-6">
                    <div className="space-y-2"><h2 className="text-5xl font-black text-slate-900 tracking-tight">{srv.name}</h2><p className="text-xl text-blue-600 font-bold">{srv.tagline?.[lang]}</p></div>
                    <p className="text-slate-600 leading-relaxed text-lg font-medium">{srv.description?.[lang]}</p>
                    <div className="flex gap-4 items-center">
                      <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-full text-sm font-bold text-slate-600"><Timer className="w-4 h-4" /> {srv.duration}</div>
                      <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-full text-sm font-bold text-slate-600"><Car className="w-4 h-4" /> {srv.vehicleType}</div>
                    </div>
                    <button onClick={() => navigateTo(`/${key}`, 'detail', srv)} className="px-10 py-5 bg-slate-900 text-white rounded-2xl font-black flex items-center gap-3 hover:bg-slate-800 transition-all hover:translate-x-2">{lang === 'it' ? 'Vedi Dettagli e Prenota' : 'View Details & Book'} <ArrowRight className="w-5 h-5" /></button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {view === 'detail' && selectedService && (
          <div className="py-24 max-w-7xl mx-auto px-4 animate-in slide-in-from-bottom-10 duration-500">
            <button onClick={() => navigateTo('/services', 'services')} className="flex items-center gap-2 text-slate-400 font-bold mb-10 hover:text-blue-600 transition-colors"><ChevronLeft className="w-5 h-5" /> {t.nav_apartments}</button>
            <div className="mb-12"><BoxGallery images={selectedService.images} t={t} /></div>
            
            <div className="space-y-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                <div className="space-y-8">
                  <div className="bg-slate-50 p-10 rounded-[4rem] border border-slate-100 shadow-sm">
                    <h3 className="text-2xl font-black mb-8 flex items-center gap-3"><Clock className="text-blue-600 w-8 h-8" /> {t.rules_title}</h3>
                    <ul className="space-y-6 font-bold text-slate-600 text-lg">
                      <li className="flex items-center justify-between"><span>Lunedì - Venerdì</span> <span>09:00 – 18:30</span></li>
                      <li className="flex items-center justify-between"><span>Sabato</span> <span>09:00 – 17:30</span></li>
                      <li className="flex items-center justify-between text-red-500"><span>Domenica</span> <span>Chiuso</span></li>
                    </ul>
                    <div className="mt-10 pt-10 border-t border-slate-200">
                      <p className="text-xs font-black uppercase text-slate-400 tracking-widest mb-3">Indirizzo</p>
                      <p className="font-black text-xl flex items-center gap-3 text-slate-800"><MapPin className="w-6 h-6 text-red-500" /> Via Canelli 51, 10090, Torino</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-10">
                  <div className="space-y-4">
                    <h1 className="text-6xl font-black tracking-tight text-slate-900 leading-tight">{selectedService.name}</h1>
                    <p className="text-2xl text-blue-600 font-bold">{selectedService.tagline?.[lang]}</p>
                    <p className="text-slate-600 leading-relaxed text-lg font-medium">{selectedService.description?.[lang]}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="p-8 bg-blue-50 rounded-[2.5rem] border border-blue-100 flex flex-col justify-center">
                      <p className="text-sm font-bold uppercase text-blue-400 tracking-widest mb-1">{t.price_from}</p>
                      <p className="text-4xl font-black text-blue-700">€{selectedService.price}</p>
                    </div>
                    <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 flex flex-col justify-center">
                      <p className="text-3xl font-black text-slate-700">{selectedService.duration}</p>
                      <p className="text-sm font-bold uppercase text-slate-400 tracking-widest mt-1">{t.duration}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                     <div className="flex items-center gap-2 px-6 py-3 bg-slate-100 rounded-full text-sm font-black text-slate-600"><Car className="w-5 h-5" /> {selectedService.vehicleType}</div>
                     {selectedService.isPremium && (
                        <div className="flex items-center gap-2 px-6 py-3 bg-blue-100 text-blue-700 rounded-full text-sm font-black"><ShieldCheck className="w-5 h-5" /> Premium</div>
                     )}
                  </div>
                </div>
              </div>

              <div className="pt-16 border-t border-slate-100 space-y-12">
                <div className="flex items-center justify-between">
                  <h3 className="text-4xl font-black text-slate-900 tracking-tight">{t.amenities_title}</h3>
                  <div className="h-1 flex-1 bg-slate-100 mx-10 rounded-full hidden md:block" />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {(selectedService.features || []).map((am, i) => {
                    const IconComp = am.icon || CheckCircle;
                    return (
                      <div key={i} className="flex items-center gap-5 p-6 bg-slate-50/50 rounded-3xl border border-slate-100 hover:bg-white hover:shadow-xl transition-all group">
                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-slate-400 group-hover:text-blue-600 group-hover:scale-110 transition-all shadow-sm">
                          <IconComp className="w-6 h-6" />
                        </div>
                        <span className="font-bold text-slate-600 group-hover:text-slate-900 transition-colors">{am[lang]}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 pt-16 border-t border-slate-100">
                <div className="space-y-6">
                  <h3 className="text-3xl font-black text-slate-900">{t.nav_calendar}</h3>
                  <CustomCalendar blockedDates={[]} lang={lang} translations={t} />
                </div>
                <div className="flex flex-col justify-center gap-6">
                   <div className="p-10 bg-slate-900 rounded-[4rem] text-white space-y-8 shadow-2xl">
                      <h4 className="text-3xl font-black">{lang === 'it' ? 'Vuoi fissare un appuntamento?' : 'Want to book an appointment?'}</h4>
                      <p className="text-slate-400 font-bold text-lg leading-relaxed">{lang === 'it' ? 'Inviaci una richiesta o contattaci direttamente su WhatsApp per saltare la fila.' : 'Send us a request or contact us directly on WhatsApp to skip the line.'}</p>
                      <button onClick={() => navigateTo('/contact', 'contact')} className="w-full py-8 bg-blue-600 text-white rounded-[2rem] font-black text-2xl shadow-xl hover:bg-blue-700 transition-all hover:-translate-y-1">{t.btn_inquiry}</button>
                      <a href="https://wa.me/393203050490" target="_blank" rel="noreferrer" className="w-full py-8 bg-[#25D366] text-white text-center rounded-[2rem] font-black text-2xl flex items-center justify-center gap-3 hover:bg-[#20bd5a] transition-all"><MessageCircle className="w-6 h-6" /> WhatsApp</a>
                   </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {view === 'explore' && (
          <div className="py-24 max-w-7xl mx-auto px-4 animate-in fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
              <div className="space-y-10">
                <div className="space-y-4">
                  <h2 className="text-4xl font-black text-slate-900 flex items-center gap-4"><Info className="text-blue-600" /> {t.explore_walk_title}</h2>
                  <p className="text-lg text-slate-600 font-medium">{t.explore_walk_extra}</p>
                </div>
                <ul className="space-y-6">
                  {[t.explore_walk_1, t.explore_walk_2, t.explore_walk_3, t.explore_walk_4].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4 p-5 bg-slate-50 rounded-3xl border border-slate-100 hover:shadow-md transition-shadow">
                      <CheckCircle className="w-6 h-6 text-blue-500 mt-1 shrink-0" />
                      <span className="font-bold text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="h-[600px] rounded-[5rem] overflow-hidden shadow-2xl relative">
                <img src="/images/casevacanza-copy-real-01.jpg" className="w-full h-full object-cover" alt="Car wash action" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>

            <div className="mb-32">
              <div className="text-center mb-16 space-y-4">
                <h2 className="text-5xl font-black text-slate-900 tracking-tight">{t.explore_nearby_title}</h2>
                <p className="text-xl text-slate-500 font-medium">{t.explore_nearby_p}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                {[
                  { title: "Velocità", text: t.explore_nearby_1, icon: Timer },
                  { title: "Precisione", text: t.explore_nearby_2, icon: Settings },
                  { title: "Sanificazione", text: t.explore_nearby_3, icon: ShieldCheck },
                  { title: "Qualità", text: t.explore_nearby_4, icon: Sparkles }
                ].map((item, idx) => {
                  const IconComp = item.icon;
                  return(
                  <div key={idx} className="bg-white rounded-[4rem] p-10 shadow-xl border border-slate-50 group hover:-translate-y-2 transition-all flex flex-col items-center text-center">
                    <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"><IconComp className="w-10 h-10" /></div>
                    <p className="text-slate-700 font-bold leading-relaxed">{item.text}</p>
                  </div>
                )})}
              </div>
            </div>

            <div className="bg-blue-600 rounded-[5rem] p-16 md:p-24 text-white">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div className="space-y-12">
                  <h2 className="text-5xl font-black tracking-tight">{t.explore_why_title}</h2>
                  <div className="grid grid-cols-1 gap-6">
                    {[t.explore_why_1, t.explore_why_2, t.explore_why_3, t.explore_why_4].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-6 p-6 bg-white/10 backdrop-blur-md rounded-[2.5rem] border border-white/20">
                        <Heart className="w-8 h-8 text-blue-300 fill-current" />
                        <span className="text-2xl font-black capitalize">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-8">
                  <p className="text-3xl font-bold leading-tight opacity-90">{t.explore_footer}</p>
                  <button onClick={() => navigateTo('/contact', 'contact')} className="px-12 py-7 bg-white text-blue-600 rounded-[2.5rem] font-black text-2xl hover:scale-105 transition-all shadow-2xl">
                    {t.btn_quote}
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-32 h-[600px] rounded-[5rem] overflow-hidden shadow-2xl border-8 border-white bg-slate-50 relative group">
                <iframe title="explore-map-final" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2818.575294334367!2d7.6329402!3d45.0274154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47881cd420556ecb%3A0xc49d5622d1b54c86!2sVia%20Canelli%2C%2051%2C%2010127%20Torino%20TO!5e0!3m2!1sit!2sit!4v1700000000000!5m2!1sit!2sit" width="100%" height="100%" style={{border:0}} loading="lazy"></iframe>
                <div className="absolute top-10 left-10 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-slate-100 hidden md:block group-hover:translate-x-2 transition-transform">
                   <h4 className="font-black text-slate-900 text-lg mb-1 flex items-center gap-2"><MapPin className="text-red-500" /> {t.map_title}</h4>
                   <p className="text-slate-500 font-bold">Via Canelli 51, Torino</p>
                </div>
            </div>
          </div>
        )}

        {view === 'contact' && (
          <div className="py-12 max-w-5xl mx-auto px-4 text-center animate-in zoom-in-95 duration-500">
            <h1 className="text-7xl font-black mb-6 tracking-tighter">{t.contact_title}</h1>
            <p className="text-slate-500 mb-8 text-2xl font-small">{t.contact_sub}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 text-left">
              <div className="bg-white p-12 rounded-[4rem] shadow-xl border border-slate-50 group hover:border-blue-200 transition-all">
                <div className="flex justify-between items-start mb-8"><h3 className="text-3xl font-black text-slate-800">Contattaci</h3><div className="text-3xl">📞</div></div>
                <div className="space-y-4">
                  <a href="tel:+393203050490" className="flex items-center gap-3 font-black text-2xl text-slate-900"><Phone className="text-blue-600 w-8 h-8" /> 320 305 0490</a>
                  <a href="https://wa.me/393203050490" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 font-bold text-green-600"><MessageCircle className="w-7 h-7" /> WhatsApp</a>
                </div>
              </div>
              <div className="bg-white p-12 rounded-[4rem] shadow-xl border border-slate-50 group hover:border-blue-200 transition-all">
                <div className="flex justify-between items-start mb-8"><h3 className="text-3xl font-black text-slate-800">Social & Info</h3><div className="text-3xl">📱</div></div>
                <div className="space-y-4">
                  <a href="https://instagram.com/autolavaggiolingotto" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 font-bold text-slate-700 hover:text-pink-600 transition-colors"><Instagram className="w-7 h-7" /> @autolavaggiolingotto</a>
                  <p className="flex items-center gap-3 font-bold text-slate-500 text-sm">63 Follower • 5 Seguiti</p>
                  <p className="flex items-center gap-3 font-bold text-slate-700 mt-4"><MapPin className="w-6 h-6 text-red-500" /> Via Canelli 51, 10090, Torino</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-16 rounded-[5rem] shadow-2xl border border-slate-50 text-left">
               <form onSubmit={submitInquiry} className="space-y-10">
                  {inquiryStatus === 'success' ? (
                    <div className="p-12 bg-green-50 text-green-700 rounded-[3rem] font-black text-center text-3xl animate-bounce">
                      {lang === 'it' ? 'Richiesta Inviata con Successo!' : 'Request Sent Successfully!'}
                    </div>
                  ) : (
                    <>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="space-y-3">
                          <label className="text-xs font-black uppercase text-slate-400 tracking-[0.2em] ml-2">{t.form_name}</label>
                          <input required name="name" className="w-full p-6 bg-slate-50 rounded-3xl outline-none focus:ring-4 focus:ring-blue-100 transition-all font-bold text-lg" placeholder="Mario Rossi" />
                        </div>
                        <div className="space-y-3">
                          <label className="text-xs font-black uppercase text-slate-400 tracking-[0.2em] ml-2">Email</label>
                          <input name="email" type="email" className="w-full p-6 bg-slate-50 rounded-3xl outline-none focus:ring-4 focus:ring-blue-100 transition-all font-bold text-lg" placeholder="email@esempio.com" />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="space-y-3">
                          <label className="text-xs font-black uppercase text-slate-400 tracking-[0.2em] ml-2">{t.form_apt}</label>
                          <select name="service" className="w-full p-6 bg-slate-50 rounded-3xl outline-none focus:ring-4 focus:ring-blue-100 transition-all font-bold text-lg appearance-none">
                            {SERVICE_KEYS.map(k => <option key={k} value={k}>{services[k]?.name || DEFAULT_SERVICES[k].name}</option>)}
                          </select>
                        </div>
                        <div className="space-y-3">
                          <label className="text-xs font-black uppercase text-slate-400 tracking-[0.2em] ml-2">{t.form_checkin}</label>
                          <input required name="date" type="date" className="w-full p-6 bg-slate-50 rounded-3xl outline-none focus:ring-4 focus:ring-blue-100 transition-all font-bold text-lg" />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="space-y-3">
                          <label className="text-xs font-black uppercase text-slate-400 tracking-[0.2em] ml-2">{t.vehicle}</label>
                          <select name="vehicleType" className="w-full p-6 bg-slate-50 rounded-3xl outline-none focus:ring-4 focus:ring-blue-100 transition-all font-bold text-lg appearance-none">
                            <option value="Utilitaria">Utilitaria</option>
                            <option value="Berlina/Station Wagon">Berlina / Station Wagon</option>
                            <option value="SUV/Fuoristrada">SUV / Fuoristrada</option>
                            <option value="Furgone">Furgone</option>
                          </select>
                        </div>
                        <div className="space-y-3">
                          <label className="text-xs font-black uppercase text-slate-400 tracking-[0.2em] ml-2">{t.form_phone}</label>
                          <input required name="phone" type="tel" className="w-full p-6 bg-slate-50 rounded-3xl outline-none focus:ring-4 focus:ring-blue-100 transition-all font-bold text-lg" placeholder="+39 3XX XXXXXXX" />
                        </div>
                      </div>
                      <div className="space-y-3">
                        <label className="text-xs font-black uppercase text-slate-400 tracking-[0.2em] ml-2">{t.form_msg}</label>
                        <textarea name="message" rows="5" className="w-full p-6 bg-slate-50 rounded-3xl outline-none focus:ring-4 focus:ring-blue-100 transition-all font-bold text-lg" placeholder="Inserisci il modello dell'auto o eventuali richieste particolari..."></textarea>
                      </div>
                      <div className="h-4">
                         {inquiryStatus === 'error' && <p className="text-red-500 font-bold ml-2">{t.form_error}</p>}
                      </div>
                      <button 
                        type="submit" 
                        disabled={inquiryStatus === 'sending'}
                        className={`w-full py-7 bg-blue-600 text-white rounded-[2.5rem] font-black text-2xl shadow-2xl shadow-blue-500/30 hover:bg-blue-700 transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed`}
                      >
                        {inquiryStatus === 'sending' ? t.form_sending : t.form_submit}
                      </button>
                    </>
                  )}
               </form>
            </div>
          </div>
        )}
      </main>

      <footer className="bg-white pt-32 pb-16 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20 mb-20">
            <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white">
                <Car className="w-6 h-6" />
              </div>
              <span className="text-2xl font-black tracking-tighter">Autolavaggio Lingotto</span>
            </div>  
            <p className="text-slate-400 font-medium text-lg leading-relaxed">Il tuo punto di riferimento a Torino per la pulizia e la cura della tua auto. Servizi professionali e sanificazione.</p>
            <div className="pt-4 space-y-1">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Social</p>
              <a href="https://instagram.com/autolavaggiolingotto" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-slate-500 flex items-center gap-2 hover:text-pink-600 transition"><Instagram className="w-4 h-4"/> @autolavaggiolingotto</a>
            </div>
            </div>
            <div className="space-y-8">
               <h4 className="text-2xl font-black text-slate-900 tracking-tight">{t.contact_title}</h4>
               <div className="space-y-6">
                  <div className="flex flex-col"><span className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Info e Prenotazioni</span><a href="tel:+393203050490" className="flex items-center gap-2 text-xl font-bold text-slate-700 hover:text-blue-600 transition"><Phone className="w-5 f-5" /> 320 305 0490</a><a href="https://wa.me/393203050490" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-lg font-bold text-green-600"><MessageCircle className="w-5 h-5" /> WhatsApp</a></div>
                  <div className="flex flex-col"><span className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Indirizzo</span><p className="flex items-center gap-2 text-lg font-bold text-slate-700"><MapPin className="w-5 h-5 text-red-500" /> Via Canelli 51, 10090 Torino</p></div>
               </div>
            </div>
            <div className="flex flex-col gap-6 text-slate-400 font-black text-xl items-start md:items-end">
               <span className="cursor-pointer hover:text-blue-600 transition-colors" onClick={() => navigateTo('/services', 'services')}>{t.nav_apartments}</span>
               <span className="cursor-pointer hover:text-blue-600 transition-colors" onClick={() => navigateTo('/contact', 'contact')}>{t.nav_contact}</span>
               <span className="cursor-pointer hover:text-blue-600 transition-colors" onClick={() => navigateTo('/explore', 'explore')}>{t.nav_castellammare}</span>
            </div>
          </div>
          <div className="pt-12 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center text-slate-400 font-bold text-sm gap-6">
            <div className="flex flex-col items-center md:items-start gap-2">
              <p className="text-sm text-slate-500">
                © {new Date().getFullYear()} Autolavaggio Lingotto. All rights reserved.
              </p>
              
              <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
                <span>Powered by</span>
                <a 
                  href="https://vfwebsolutions.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-1.5 hover:text-blue-600 transition-all duration-300 group"
                >
                  <span className="hover:underline underline-offset-4">vfwebsolutions</span>
                   <span className="text-base group-hover:scale-110 transition-transform">👨‍💻</span>
                </a>
              </div>
            </div>
              
            <div className="flex gap-10">
              <span className="hover:text-slate-600 cursor-pointer">Privacy Policy</span>
              <span className="hover:text-slate-600 cursor-pointer">Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}