import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Calendar, Users, MapPin, Star, ArrowRight, Home, 
  ChevronRight, Phone, Mail, CheckCircle, 
  ExternalLink, Globe, Info, Compass,
  ChevronLeft, RefreshCw, Clock, ShieldCheck, Coffee, MessageCircle,
  LayoutGrid, Maximize2, Wind, Snowflake, Bed, Utensils, Wifi, Tv, 
  Refrigerator, WashingMachine, Car, Key, Briefcase, Shirt, 
  Waves, Zap, ShowerHead, Soup, Thermometer, CloudSnow, ChefHat,
  Navigation, Heart, Map
} from 'lucide-react';

const APARTMENT_KEYS = ['loredana', 'azzurra', 'trinacria'];

const COMMON_AMENITIES = [
  { it: 'Acqua calda', en: 'Hot water', icon: Thermometer },
  { it: 'Aria condizionata', en: 'Air conditioning', icon: Snowflake },
  { it: 'Asciugacapelli', en: 'Hairdryer', icon: Wind },
  { it: 'Biancheria da letto', en: 'Bed linen', icon: Bed },
  { it: 'Cucina', en: 'Kitchen', icon: ChefHat },
  { it: 'Fornello a induzione', en: 'Induction stove', icon: Zap },
  { it: 'Forno a microonde', en: 'Microwave', icon: Waves },
  { it: 'Frigorifero', en: 'Refrigerator', icon: Refrigerator },
  { it: 'Grucce', en: 'Hangers', icon: Shirt },
  { it: 'Ingresso privato', en: 'Private entrance', icon: Key },
  { it: 'Macchina per il caffè', en: 'Coffee machine', icon: Coffee },
  { it: 'Piatti e posate', en: 'Dishes and silverware', icon: Utensils },
  { it: 'Servizi di base (Asciugamani, sapone)', en: 'Basic essentials', icon: ShowerHead },
  { it: 'Servizi di base per cucinare', en: 'Cooking basics', icon: Soup },
  { it: 'TV', en: 'TV', icon: Tv },
  { it: 'Wifi', en: 'Wifi', icon: Wifi }
];

const DEFAULT_APARTMENTS = {
  loredana: {
    id: 'loredana',
    name: 'Casa Loredana',
    address: 'Via Giovanni Bovio, 21, Castellammare del Golfo',
    tagline: { en: 'Spacious comfort for the whole family', it: 'Ampio comfort per tutta la famiglia' },
    description: {
      it: "Casa Loredana è la soluzione più spaziosa del complesso, ideale per famiglie numerose o gruppi di amici. Situata al piano terra, offre ambienti ampi appena ristrutturati a soli 350 metri dalla spiaggia di Marina di Petrolo. La sua posizione centrale permette di godersi la movida senza rinunciare alla comodità di una casa completa di ogni servizio.",
      en: "Casa Loredana is the most spacious solution in our complex, ideal for large families or groups of friends. Located on the ground floor, it offers large, newly renovated rooms just 350 meters from Marina di Petrolo beach. Its central location allows you to enjoy the nightlife without sacrificing the comfort of a fully equipped home."
    },
    price: 80,
    guests: 7,
    beds: 4,
    floor: 'ground',
    hasWashingMachine: true,
    amenities: COMMON_AMENITIES,
    airbnbUrl: 'https://airbnb.it/h/casaloredana',
    icalUrl: 'https://ical.booking.com/v1/export/t/80a80cf7-e3fd-45e4-bdab-d4c96a81ddbd.ics',
    icalAirbnbUrl: 'https://www.airbnb.it/calendar/ical/47075318.ics?t=771805487e804eb9bcf3c47f65311cef',
    images: [
      'https://0nvrzdpg2dlrgopd.public.blob.vercel-storage.com/loredana/soppalco_1.jpg',
      'https://0nvrzdpg2dlrgopd.public.blob.vercel-storage.com/loredana/facciata.jpg',
       'https://0nvrzdpg2dlrgopd.public.blob.vercel-storage.com/loredana/letto_matrimoniale.jpg',
      'https://0nvrzdpg2dlrgopd.public.blob.vercel-storage.com/loredana/cucina_1.jpg',
      'https://0nvrzdpg2dlrgopd.public.blob.vercel-storage.com/loredana/cucina_2.jpg',
       'https://0nvrzdpg2dlrgopd.public.blob.vercel-storage.com/loredana/divano_letto.jpg',
      'https://0nvrzdpg2dlrgopd.public.blob.vercel-storage.com/loredana/soppalco_2.jpg',
      'https://0nvrzdpg2dlrgopd.public.blob.vercel-storage.com/loredana/tv.jpg',
      'https://0nvrzdpg2dlrgopd.public.blob.vercel-storage.com/loredana/panoramica.jpg',
      'https://0nvrzdpg2dlrgopd.public.blob.vercel-storage.com/loredana/panoramica_pianterreno.jpg',
        ]
  },
  azzurra: {
    id: 'azzurra',
    name: 'Casa Azzurra',
    address: 'Via Giovanni Bovio, 23, Castellammare del Golfo',
    tagline: { en: 'Romantic stay with a private balcony', it: 'Soggiorno romantico con balcone privato' },
    description: {
      it: "Situata al primo piano, Casa Azzurra si distingue per il suo grazioso balcone. È un nido accogliente perfetto per coppie o piccole famiglie che cercano un'atmosfera luminosa e moderna. Recentemente rinnovata, combina lo stile mediterraneo con tutti i comfort tecnologici necessari per un soggiorno indimenticabile.",
      en: "Located on the first floor, Casa Azzurra stands out for its charming balcony. It is a cozy nest perfect for couples or small families looking for a bright and modern atmosphere. Recently renovated, it combines Mediterranean style with all the technological comforts necessary for an unforgettable stay."
    },
    price: 45,
    guests: 3,
    beds: 2,
    floor: '1st',
    hasWashingMachine: false,
    amenities: COMMON_AMENITIES,
    airbnbUrl: 'https://www.airbnb.it/h/casevacanzeazzurra',
    icalUrl: 'https://ical.booking.com/v1/export/t/8bd561bc-8c05-46f1-b85e-bde8654625f9.ics',
    icalAirbnbUrl: 'https://www.airbnb.it/calendar/ical/46897090.ics?t=af0f3de371a34c5a84b8a849114eadb7',
    images: [
      'https://0nvrzdpg2dlrgopd.public.blob.vercel-storage.com/azzurra/volta_scala.jpg',
      'https://0nvrzdpg2dlrgopd.public.blob.vercel-storage.com/azzurra/facciata.jpg',
      'https://0nvrzdpg2dlrgopd.public.blob.vercel-storage.com/azzurra/orologio_parete.jpg',
      'https://0nvrzdpg2dlrgopd.public.blob.vercel-storage.com/azzurra/scala.jpg',
      'https://0nvrzdpg2dlrgopd.public.blob.vercel-storage.com/azzurra/camera_da_letto_luce_gialla.jpg',
      'https://0nvrzdpg2dlrgopd.public.blob.vercel-storage.com/azzurra/cucina_bottiglia_vino.jpg',
      'https://0nvrzdpg2dlrgopd.public.blob.vercel-storage.com/azzurra/volta_azzurra.jpg'

      ]
  },
  trinacria: {
    id: 'trinacria',
    name: 'Casa Trinacria',
    address: 'Via Giovanni Bovio, 19, Castellammare del Golfo',
    tagline: { en: 'Authentic soul in the heart of town', it: 'Anima autentica nel cuore del borgo' },
    description: {
      it: "Casa Trinacria cattura l'essenza dell'ospitalità siciliana. Questo alloggio al piano terra è stato progettato per offrire funzionalità e stile in un ambiente compatto e curato. A pochi passi dai migliori ristoranti e dal porto turistico, è la scelta ideale per chi vuole vivere Castellammare come un locale, avendo tutto il necessario a portata di mano.",
      en: "Casa Trinacria captures the essence of Sicilian hospitality. This ground-floor accommodation is designed to offer functionality and style in a compact and well-maintained environment. Just steps from the best restaurants and the marina, it is the ideal choice for those who want to experience Castellammare like a local, with everything you need at your fingertips."
    },
    price: 40,
    guests: 3,
    beds: 2,
    floor: 'ground',
    hasWashingMachine: false,
    amenities: COMMON_AMENITIES,
    airbnbUrl: 'https://www.airbnb.it/h/casatrinacria',
    icalUrl: 'https://ical.booking.com/v1/export/t/ea2d1083-55f7-4174-bbff-bf1d7f34d804.ics',
    icalAirbnbUrl: 'https://www.airbnb.it/calendar/ical/47073941.ics?t=0cff8c403d954ac28182618cc3edf26c',
    images: [
       'https://0nvrzdpg2dlrgopd.public.blob.vercel-storage.com/trinacria/letto_decorazioni_stella.jpg',
      'https://0nvrzdpg2dlrgopd.public.blob.vercel-storage.com/trinacria/facciata.jpg',
      'https://0nvrzdpg2dlrgopd.public.blob.vercel-storage.com/trinacria/facciata 2.jpg',
      'https://0nvrzdpg2dlrgopd.public.blob.vercel-storage.com/trinacria/stanza.jpg',
      'https://0nvrzdpg2dlrgopd.public.blob.vercel-storage.com/trinacria/volta.jpg',
      'https://0nvrzdpg2dlrgopd.public.blob.vercel-storage.com/trinacria/cucina.jpg',
      'https://0nvrzdpg2dlrgopd.public.blob.vercel-storage.com/trinacria/teste_mobile.jpg',
      'https://0nvrzdpg2dlrgopd.public.blob.vercel-storage.com/trinacria/volta_quadri.jpg',
     ]
  }
};

const ATTRACTIONS = [
  { 
    title: { it: "Castello Arabo-Normanno", en: "Arab-Norman Castle" },
    desc: { it: "Il simbolo della città, situato proprio sul porto.", en: "The symbol of the city, located right on the harbor." },
    img: "https://0nvrzdpg2dlrgopd.public.blob.vercel-storage.com/generale/castello.jpg"
  },
  { 
    title: { it: "Riserva dello Zingaro", en: "Zingaro Nature Reserve" },
    desc: { it: "Sentieri mozzafiato e calette incontaminate a pochi km.", en: "Breathtaking trails and pristine coves just a few km away." },
    img: "https://0nvrzdpg2dlrgopd.public.blob.vercel-storage.com/generale/zingaro.jpeg"
  },
  { 
    title: { it: "Marina di Petrolo", en: "Petrolo Beach" },
    desc: { it: "La spiaggia più vicina, a soli 3 minuti a piedi.", en: "The closest beach, just a 3-minute walk away." },
    img: "https://0nvrzdpg2dlrgopd.public.blob.vercel-storage.com/generale/cala_petrolo.jpg"
  }
];

const TRANSLATIONS = {
  en: {
    nav_home: "Home", nav_apartments: "Apartments", nav_castellammare: "Explore", nav_contact: "Book", nav_calendar: "Availability",
    hero_title_1: "Your", hero_title_2: "Sicilian Dream", hero_title_3: "Starts Here",
    hero_sub: "Modern comfort just 350 meters from the sea. Three adjacent houses for up to 13 guests.",
    btn_explore: "Explore Stays", btn_quote: "Get a Quote",
    sect_apartments: "Our Apartments", sect_apartments_sub: "In the historic center, steps from the harbor and nightlife.",
    why_us: "Why Choose Us?", pos_title: "Central Position", pos_desc: "We are at Via Giovanni Bovio, 350m from Marina di Petrolo.",
    hosp_title: "Superhost Quality", hosp_desc: "Host for 8 years with top ratings.",
    comf_title: "Modern Comfort", comf_desc: "AC, Wifi, Smart-TV, Induction stove and more.",
    reviews_title: "What Our Guests Say", guests: "Guests", beds: "Beds", floor: "Floor", price_night: "per night", price_from: "starting from",
    back_home: "Back Home", amenities_title: "Services & Amenities", btn_inquiry: "Send Request", btn_airbnb: "View on Airbnb",
    contact_title: "Contact Us", contact_sub: "Book your Sicilian getaway today.",
    form_apt: "Select Apartment", form_name: "Full Name", form_checkin: "Check-in Date", form_msg: "Message", form_submit: "Send Message",
    explore_title: "Castellammare del Golfo", explore_sub: "Discover the beauty of Sicily",
    what_to_see: "What to see", map_title: "Where we are",
    ground_floor: "Ground Floor", first_floor: "1st Floor", balcony: "Balcony", washing_machine: "Washing Machine",
    availability: "Availability", booked: "Booked", available: "Available",
    rules_title: "House Rules", checkin_rule: "Check-in after 14:00", checkout_rule: "Check-out before 10:00",
    max_guests: "Max 7 guests (Loredana)", address_label: "Address",
    all_photos: "Show all photos",
    explore_intro: "Holiday Home in the Heart of Castellammare del Golfo – Sea, Historic Center and Nature",
    explore_intro_p: "Located in a strategic position in the center of Castellammare del Golfo, this holiday home is the perfect base to explore one of the most beautiful areas of western Sicily. Within walking distance you will find the sea, the marina, restaurants, gelaterias and the main attractions of this charming seaside town.",
    explore_walk_title: "Perfect location to explore on foot",
    explore_walk_1: "350 meters from Cala Petrolo, the closest beach to the historic center",
    explore_walk_2: "1 km from La Playa beach, a long sandy beach ideal for families",
    explore_walk_3: "a short walk from the Castellammare marina, the heart of the town’s nightlife",
    explore_walk_4: "close to popular restaurants and spots such as La Cambusa, Picolit, and Vernaci Gelateria",
    explore_walk_extra: "Strolling through the charming streets of the old town you will find authentic Sicilian atmosphere, sea-view terraces, bars and excellent seafood restaurants.",
    explore_nearby_title: "Must-see places nearby",
    explore_nearby_p: "Castellammare is also the perfect starting point to visit some of Sicily’s most spectacular locations:",
    explore_nearby_1: "Scopello (15 minutes) with its famous Faraglioni rocks and historic tuna fishery",
    explore_nearby_2: "Zingaro Nature Reserve (20 minutes), with 7 km of pristine coastline and turquoise coves",
    explore_nearby_3: "Guidaloca Bay (10 minutes), a beautiful white pebble beach",
    explore_nearby_4: "Segesta Archaeological Park (25 minutes), home to the impressive Greek theatre overlooking the sea",
    explore_nearby_5: "Segesta natural hot springs, perfect for a relaxing thermal bath",
    explore_nearby_6: "From the harbor you can also join boat tours along the coast to Scopello and the Zingaro Reserve, discovering caves and crystal-clear waters.",
    explore_why_title: "Why choose this home",
    explore_why_1: "central but quiet location",
    explore_why_2: "walking distance to the beach",
    explore_why_3: "restaurants and nightlife nearby",
    explore_why_4: "perfect base to explore western Sicily",
    explore_footer: "Whether you want to relax on the beach, explore nature or enjoy Sicilian cuisine, this home is the perfect starting point for your vacation."
  },
  it: {
    nav_home: "Home", nav_apartments: "Appartamenti", nav_castellammare: "Esplora", nav_contact: "Prenota", nav_calendar: "Disponibilità",
    hero_title_1: "Il Tuo", hero_title_2: "Sogno Siciliano", hero_title_3: "Inizia Qui",
    hero_sub: "Comfort moderno a soli 350 metri dal mare. Tre case adiacenti fino a 13 ospiti.",
    btn_explore: "Esplora Alloggi", btn_quote: "Richiedi Preventivo",
    sect_apartments: "I Nostri Appartamenti", sect_apartments_sub: "In pieno centro, a due passi dal porto e dalla movida.",
    why_us: "Perché Scegliere Noi?", pos_title: "Posizione Centrale", pos_desc: "Siamo in Via Giovanni Bovio, a 350m dalla Marina di Petrolo.",
    hosp_title: "Qualità Superhost", hosp_desc: "Host da 8 anni con recensioni eccellenti.",
    comf_title: "Comfort Moderno", comf_desc: "Aria condizionata, Wifi, Smart-TV, cucina a induzione.",
    reviews_title: "Cosa Dicono i Nostri Ospiti", guests: "Ospiti", beds: "Letti", floor: "Piano", price_night: "a notte", price_from: "a partire da",
    back_home: "Torna alla Home", amenities_title: "Servizi e Comfort", btn_inquiry: "Invia Richiesta", btn_airbnb: "Vedi su Airbnb",
    contact_title: "Contattaci", contact_sub: "Prenota oggi la tua vacanza in Sicilia.",
    form_apt: "Seleziona Appartamento", form_name: "Nome Completo", form_checkin: "Data Check-in", form_msg: "Messaggio", form_submit: "Invia Messaggio",
    explore_title: "Castellammare del Golfo", explore_sub: "Scopri la bellezza della Sicilia",
    what_to_see: "Cosa Vedere", map_title: "Dove Siamo",
    ground_floor: "Piano Terra", first_floor: "1° Piano", balcony: "Balcone", washing_machine: "Lavatrice",
    availability: "Disponibilità", booked: "Occupato", available: "Libero",
    rules_title: "Regole della Casa", checkin_rule: "Check-in dopo le ore 14:00", checkout_rule: "Check-out entro le ore 10:00",
    max_guests: "Massimo 7 ospiti (Loredana)", address_label: "Indirizzo",
    all_photos: "Mostra tutte le foto",
    explore_intro: "Casa Vacanze nel cuore di Castellammare del Golfo – Mare, centro storico e natura",
    explore_intro_p: "Situata in una posizione strategica nel centro di Castellammare del Golfo, questa casa vacanze è la base perfetta per scoprire una delle zone più belle della Sicilia occidentale. A pochi passi troverai il mare, il porto turistico, ristoranti tipici, gelaterie e le principali attrazioni del borgo.",
    explore_walk_title: "Posizione perfetta per muoversi a piedi",
    explore_walk_1: "350 metri da Cala Petrolo, la spiaggia più vicina al centro",
    explore_walk_2: "1 km dalla spiaggia La Playa, lunga spiaggia sabbiosa perfetta per famiglie",
    explore_walk_3: "pochi minuti dal Porto di Castellammare, cuore della movida serale",
    explore_walk_4: "vicino a ristoranti e locali famosi come La Cambusa, Picolit, Vernaci Gelateria",
    explore_walk_extra: "Passeggiando tra i vicoli del centro storico potrai goderti l’atmosfera autentica siciliana tra bar, terrazze sul mare e ristoranti di pesce.",
    explore_nearby_title: "Luoghi imperdibili nei dintorni",
    explore_nearby_p: "Castellammare è anche il punto di partenza ideale per visitare alcune delle destinazioni più spettacolari della Sicilia:",
    explore_nearby_1: "Scopello (15 min) con i famosi Faraglioni e l’antica Tonnara",
    explore_nearby_2: "Riserva Naturale dello Zingaro (20 min), con 7 km di costa incontaminata e calette turchesi",
    explore_nearby_3: "Baia di Guidaloca (10 min), una splendida spiaggia di ciottoli bianchi",
    explore_nearby_4: "Area archeologica di Segesta (25 min) con il celebre teatro greco panoramico",
    explore_nearby_5: "Terme libere di Segesta, dove rilassarsi nelle sorgenti naturali calde",
    explore_nearby_6: "Dal porto partono anche escursioni in barca lungo la costa verso Scopello e la Riserva dello Zingaro, tra grotte e acque cristalline.",
    explore_why_title: "Perché scegliere questa casa",
    explore_why_1: "posizione centrale ma tranquilla",
    explore_why_2: "mare raggiungibile a piedi",
    explore_why_3: "ristoranti e locali sotto casa",
    explore_why_4: "perfetta base per esplorare la Sicilia occidentale",
    explore_footer: "Che tu voglia rilassarti in spiaggia, scoprire la natura o gustare la cucina siciliana, questa casa è il punto di partenza ideale per la tua vacanza."
  }
};

const parseICS = (icsData) => {
  if (!icsData) return [];
  const dates = [];
  const lines = icsData.split(/\r?\n/);
  let currentEvent = null;

  lines.forEach(line => {
    if (line.startsWith('BEGIN:VEVENT')) {
      currentEvent = {};
    } else if (line.startsWith('END:VEVENT')) {
      if (currentEvent && currentEvent.start && currentEvent.end) {
        let start = new Date(currentEvent.start);
        const end = new Date(currentEvent.end);
        let safetyCounter = 0;
        while (start < end && safetyCounter < 1000) {
          dates.push(start.toISOString().split('T')[0]);
          start.setDate(start.getDate() + 1);
          safetyCounter++;
        }
      }
      currentEvent = null;
    } else if (currentEvent) {
      if (line.startsWith('DTSTART')) {
        const m = line.match(/\d{8}/);
        if (m) currentEvent.start = `${m[0].slice(0, 4)}-${m[0].slice(4, 6)}-${m[0].slice(6, 8)}`;
      } else if (line.startsWith('DTEND')) {
        const m = line.match(/\d{8}/);
        if (m) currentEvent.end = `${m[0].slice(0, 4)}-${m[0].slice(4, 6)}-${m[0].slice(6, 8)}`;
      }
    }
  });
  return dates;
};

const CustomCalendar = ({ apartmentId, blockedDates, lang, translations }) => {
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
          return (<div key={`day-${day}`} className={`h-10 flex items-center justify-center rounded-xl text-sm font-bold transition-all relative ${blocked ? 'bg-red-50 text-red-500' : 'bg-green-50 text-green-600 hover:scale-105'}`}>{day}</div>);
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
           <div className="h-20 flex items-center justify-between px-8 border-b border-slate-100">
              <button onClick={() => setShowFullGallery(false)} className="p-3 bg-slate-50 rounded-full hover:bg-slate-100 transition-colors"><ChevronLeft className="w-6 h-6" /></button>
              <p className="font-black text-slate-400 uppercase tracking-widest text-xs">{selectedIdx + 1} / {images.length}</p>
              <div className="w-12 h-12" />
           </div>
           <div className="flex-1 relative flex items-center justify-center p-4 md:p-12 overflow-hidden bg-slate-50">
              <img 
                src={images[selectedIdx]} 
                className="max-h-full max-w-full object-contain rounded-3xl shadow-2xl animate-in zoom-in-95 duration-500" 
                alt="Full View" 
              />
              <button 
                onClick={() => setSelectedIdx(prev => prev === 0 ? images.length - 1 : prev - 1)}
                className="absolute left-4 md:left-12 p-5 bg-white/80 backdrop-blur-xl rounded-full shadow-2xl hover:bg-white transition-all"
              ><ChevronLeft className="w-8 h-8" /></button>
              <button 
                onClick={() => setSelectedIdx(prev => prev === images.length - 1 ? 0 : prev + 1)}
                className="absolute right-4 md:right-12 p-5 bg-white/80 backdrop-blur-xl rounded-full shadow-2xl hover:bg-white transition-all"
              ><ChevronRight className="w-8 h-8" /></button>
           </div>
           <div className="h-24 bg-white border-t border-slate-100 flex items-center justify-center gap-3 overflow-x-auto px-4">
              {images.map((img, idx) => (
                <img 
                  key={idx} 
                  src={img} 
                  onClick={() => setSelectedIdx(idx)}
                  className={`h-14 w-20 object-cover rounded-xl cursor-pointer transition-all ${selectedIdx === idx ? 'ring-4 ring-blue-600 scale-110 shadow-lg' : 'opacity-50 hover:opacity-100'}`} 
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
  const [apartments, setApartments] = useState(DEFAULT_APARTMENTS);
  const [selectedApartment, setSelectedApartment] = useState(null);
  const [availability, setAvailability] = useState({ loredana: [], azzurra: [], trinacria: [] });
  const [inquiryStatus, setInquiryStatus] = useState(null);
  const [syncing, setSyncing] = useState(false);

  const t = TRANSLATIONS[lang];

  const navigateTo = (path, viewName, apt = null) => {
    window.history.pushState({}, '', path);
    setView(viewName);
    setSelectedApartment(apt);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname.replace('/', '').toLowerCase();
      if (APARTMENT_KEYS.includes(path)) {
        setSelectedApartment(DEFAULT_APARTMENTS[path]);
        setView('detail');
      } else if (path === 'apartments') {
        setView('apartments');
      } else if (path === 'calendar') {
        setView('calendar');
      } else if (path === 'explore') {
        setView('explore');
      } else if (path === 'contact') {
        setView('contact');
      } else {
        setView('home');
      }
    };

    handleLocationChange();
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  useEffect(() => {
    const syncAll = async () => {
      setSyncing(true);
      const newAvail = { loredana: [], azzurra: [], trinacria: [] };
      for (const key of APARTMENT_KEYS) {
        try {
          const apt = DEFAULT_APARTMENTS[key];
          const urls = [apt.icalUrl, apt.icalAirbnbUrl].filter(Boolean);
          let allBlockedDatesForApt = [];
          await Promise.all(urls.map(async (url) => {
            let ics = "";
            try {
              const resp = await fetch(`https://corsproxy.io/?${encodeURIComponent(url)}`);
              if (resp.ok) { ics = await resp.text(); } else { throw new Error(); }
            } catch (err) {
              try {
                const aoResp = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`);
                if (aoResp.ok) {
                  const data = await aoResp.json();
                  ics = data.contents;
                  if (ics && ics.startsWith('data:')) {
                    const base64Part = ics.split(',')[1];
                    if (base64Part) ics = atob(base64Part);
                  }
                }
              } catch (aoErr) {}
            }
            if (ics) { const dates = parseICS(ics); allBlockedDatesForApt = [...allBlockedDatesForApt, ...dates]; }
          }));
          newAvail[key] = Array.from(new Set(allBlockedDatesForApt));
        } catch (e) {}
      }
      setAvailability(newAvail);
      setSyncing(false);
    };
    syncAll();
  }, []);

  const submitInquiry = (e) => {
    e.preventDefault();
    setInquiryStatus('success');
    e.target.reset();
  };

  return (
    <div className="font-sans text-slate-900 bg-white min-h-screen selection:bg-blue-100">
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 h-20 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer group" onClick={() => navigateTo('/', 'home')}>
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform">S</div>
            <span className="text-xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-500">Case Vacanze</span>
          </div>
          <div className="hidden lg:flex items-center gap-6">
            <button onClick={() => navigateTo('/', 'home')} className={`text-sm font-bold transition-colors ${view === 'home' ? 'text-blue-600' : 'text-slate-500 hover:text-blue-600'}`}>{t.nav_home}</button>
            <button onClick={() => navigateTo('/apartments', 'apartments')} className={`text-sm font-bold transition-colors ${view === 'apartments' ? 'text-blue-600' : 'text-slate-500 hover:text-blue-600'}`}>{t.nav_apartments}</button>
            <div className="h-4 w-px bg-slate-200 mx-2" />
            <button onClick={() => navigateTo('/loredana', 'detail', DEFAULT_APARTMENTS.loredana)} className="text-sm font-bold text-slate-500 hover:text-blue-600">Loredana</button>
            <button onClick={() => navigateTo('/azzurra', 'detail', DEFAULT_APARTMENTS.azzurra)} className="text-sm font-bold text-slate-500 hover:text-blue-600">Azzurra</button>
            <button onClick={() => navigateTo('/trinacria', 'detail', DEFAULT_APARTMENTS.trinacria)} className="text-sm font-bold text-slate-500 hover:text-blue-600">Trinacria</button>
            <div className="h-4 w-px bg-slate-200 mx-2" />
            <button onClick={() => navigateTo('/calendar', 'calendar')} className={`text-sm font-bold transition-colors ${view === 'calendar' ? 'text-blue-600' : 'text-slate-500 hover:text-blue-600'}`}>{t.nav_calendar}</button>
            <button onClick={() => navigateTo('/explore', 'explore')} className={`text-sm font-bold transition-colors ${view === 'explore' ? 'text-blue-600' : 'text-slate-500 hover:text-blue-600'}`}>{t.nav_castellammare}</button>
            <button onClick={() => navigateTo('/contact', 'contact')} className={`text-sm font-bold transition-colors ${view === 'contact' ? 'text-blue-600' : 'text-slate-500 hover:text-blue-600'}`}>{t.nav_contact}</button>
          </div>
          <div className="flex items-center gap-4">
            {syncing && <RefreshCw className="w-4 h-4 text-blue-500 animate-spin" />}
            <button onClick={() => setLang(lang === 'it' ? 'en' : 'it')} className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 hover:bg-slate-100 rounded-full transition-all text-sm font-bold text-slate-700 border border-slate-200"><Globe className="w-4 h-4 text-blue-600" /> {lang === 'it' ? '🇮🇹 IT' : '🇬🇧 EN'}</button>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        {view === 'home' && (
          <div className="animate-in fade-in duration-700">
            <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 z-0 scale-105">
                <img src="https://0nvrzdpg2dlrgopd.public.blob.vercel-storage.com/generale/porto.jpg" className="w-full h-full object-cover brightness-[0.6] blur-[1px]" alt="Sicily" />
              </div>
              <div className="relative z-10 text-center px-4 max-w-4xl">
                <h1 className="text-6xl md:text-8xl font-black text-white mb-8 leading-[0.9] drop-shadow-2xl">{t.hero_title_1} <span className="text-blue-400">{t.hero_title_2}</span> {t.hero_title_3}</h1>
                <p className="text-xl text-slate-100 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-lg font-medium">{t.hero_sub}</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button onClick={() => navigateTo('/apartments', 'apartments')} className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-black text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/40">{t.btn_explore}</button>
                  <button onClick={() => navigateTo('/contact', 'contact')} className="px-10 py-5 bg-white/10 backdrop-blur-md border-2 border-white text-white rounded-2xl font-black text-lg hover:bg-white hover:text-blue-900 transition-all">{t.btn_quote}</button>
                </div>
              </div>
            </section>
            <section className="py-24 max-w-7xl mx-auto px-4 text-center">
              <h2 className="text-5xl font-black mb-16 tracking-tight">{t.sect_apartments}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {APARTMENT_KEYS.map(key => {
                  const apt = apartments[key] || DEFAULT_APARTMENTS[key];
                  return (
                    <div key={key} className="group cursor-pointer" onClick={() => navigateTo(`/${key}`, 'detail', apt)}>
                      <div className="relative h-[450px] rounded-[3rem] overflow-hidden shadow-2xl transition-transform duration-500 group-hover:-translate-y-4">
                        <img src={apt.images[0]} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={apt.name} />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                        <div className="absolute bottom-10 left-10 text-white text-left">
                          <h3 className="text-3xl font-black mb-2">{apt.name}</h3>
                          <p className="text-blue-300 font-bold uppercase text-[10px] tracking-widest">{t.price_from} {apt.price}€/{t.price_night}</p>
                          <p className="text-white/60 font-bold uppercase text-[10px] tracking-widest">{apt.guests} {t.guests}</p>
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
                  <iframe title="home-map-centered" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3144.1784917637856!2d12.880993!3d38.016335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13196238b93933c1%3A0x2f8b809a7b74400a!2sVia%20Giovanni%20Bovio%2C%2021%2C%2091014%20Castellammare%20del%20Golfo%20TP!5e0!3m2!1sit!2sit!4v1700000000000!5m2!1sit!2sit" width="100%" height="100%" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
                </div>
              </div>
            </section>
          </div>
        )}

        {view === 'apartments' && (
          <div className="py-24 max-w-7xl mx-auto px-4 space-y-32">
            {APARTMENT_KEYS.map((key, idx) => {
              const apt = apartments[key] || DEFAULT_APARTMENTS[key];
              return (
                <div key={key} className={`flex flex-col lg:flex-row gap-16 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className="lg:w-1/2 h-[550px] rounded-[4rem] overflow-hidden shadow-2xl relative">
                    <img src={apt.images[0]} className="w-full h-full object-cover" alt={key} />
                  </div>
                  <div className="lg:w-1/2 space-y-6">
                    <div className="space-y-2"><h2 className="text-5xl font-black text-slate-900 tracking-tight">{apt.name}</h2><p className="text-xl text-blue-600 font-bold">{apt.tagline?.[lang]}</p></div>
                    <p className="text-slate-600 leading-relaxed text-lg font-medium">{apt.description?.[lang]}</p>
                    <div className="flex gap-4 items-center">
                      <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-full text-sm font-bold text-slate-600"><Users className="w-4 h-4" /> {apt.guests} {t.guests}</div>
                      <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-full text-sm font-bold text-slate-600"><Compass className="w-4 h-4" /> {apt.floor === 'ground' ? t.ground_floor : t.first_floor}</div>
                    </div>
                    <button onClick={() => navigateTo(`/${key}`, 'detail', apt)} className="px-10 py-5 bg-slate-900 text-white rounded-2xl font-black flex items-center gap-3 hover:bg-slate-800 transition-all hover:translate-x-2">{lang === 'it' ? 'Vedi Dettagli e Disponibilità' : 'View Details & Availability'} <ArrowRight className="w-5 h-5" /></button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {view === 'detail' && selectedApartment && (
          <div className="py-24 max-w-7xl mx-auto px-4 animate-in slide-in-from-bottom-10 duration-500">
            <button onClick={() => navigateTo('/apartments', 'apartments')} className="flex items-center gap-2 text-slate-400 font-bold mb-10 hover:text-blue-600 transition-colors"><ChevronLeft className="w-5 h-5" /> {t.nav_apartments}</button>
            <div className="mb-12"><BoxGallery images={selectedApartment.images} t={t} /></div>
            
            <div className="space-y-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                <div className="space-y-8">
                  <div className="bg-slate-50 p-10 rounded-[4rem] border border-slate-100 shadow-sm">
                    <h3 className="text-2xl font-black mb-8 flex items-center gap-3"><ShieldCheck className="text-blue-600 w-8 h-8" /> {t.rules_title}</h3>
                    <ul className="space-y-6 font-bold text-slate-600 text-lg">
                      <li className="flex items-center gap-4"><Clock className="w-6 h-6 text-slate-400" /> {t.checkin_rule}</li>
                      <li className="flex items-center gap-4"><Clock className="w-6 h-6 text-slate-400" /> {t.checkout_rule}</li>
                      <li className="flex items-center gap-4"><Users className="w-6 h-6 text-slate-400" /> {selectedApartment.id === 'loredana' ? t.max_guests : (lang === 'it' ? 'Massimo 3 ospiti' : 'Max 3 guests')}</li>
                    </ul>
                    <div className="mt-10 pt-10 border-t border-slate-200">
                      <p className="text-xs font-black uppercase text-slate-400 tracking-widest mb-3">{t.address_label}</p>
                      <p className="font-black text-xl flex items-center gap-3 text-slate-800"><MapPin className="w-6 h-6 text-red-500" /> {selectedApartment.address}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-10">
                  <div className="space-y-4">
                    <h1 className="text-6xl font-black tracking-tight text-slate-900 leading-tight">{selectedApartment.name}</h1>
                    <p className="text-2xl text-blue-600 font-bold">{selectedApartment.tagline?.[lang]}</p>
                    <p className="text-slate-600 leading-relaxed text-lg font-medium">{selectedApartment.description?.[lang]}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="p-8 bg-blue-50 rounded-[2.5rem] border border-blue-100 flex flex-col justify-center">
                      <p className="text-sm font-bold uppercase text-blue-400 tracking-widest mb-1">{t.price_from}</p>
                      <p className="text-4xl font-black text-blue-700">€{selectedApartment.price}</p>
                      <p className="text-sm font-bold uppercase text-blue-400 tracking-widest mt-1">{t.price_night}</p>
                    </div>
                    <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 flex flex-col justify-center">
                      <p className="text-4xl font-black text-slate-700">{selectedApartment.guests}</p>
                      <p className="text-sm font-bold uppercase text-slate-400 tracking-widest">{t.guests}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                     <div className="flex items-center gap-2 px-6 py-3 bg-slate-100 rounded-full text-sm font-black text-slate-600"><Compass className="w-5 h-5" /> {selectedApartment.floor === 'ground' ? t.ground_floor : t.first_floor}</div>
                     <div className="flex items-center gap-2 px-6 py-3 bg-slate-100 rounded-full text-sm font-black text-slate-600"><Bed className="w-5 h-5" /> {selectedApartment.beds} {lang === 'it' ? 'Letti' : 'Beds'}</div>
                  </div>
                </div>
              </div>

              <div className="pt-16 border-t border-slate-100 space-y-12">
                <div className="flex items-center justify-between">
                  <h3 className="text-4xl font-black text-slate-900 tracking-tight">{t.amenities_title}</h3>
                  <div className="h-1 flex-1 bg-slate-100 mx-10 rounded-full hidden md:block" />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {selectedApartment.hasWashingMachine && (
                    <div className="flex items-center gap-5 p-6 bg-blue-50/50 rounded-3xl border border-blue-100 hover:shadow-lg transition-all">
                      <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-sm">
                        <WashingMachine className="w-6 h-6" />
                      </div>
                      <span className="font-bold text-slate-700">{t.washing_machine}</span>
                    </div>
                  )}
                  {selectedApartment.floor === '1st' && (
                    <div className="flex items-center gap-5 p-6 bg-amber-50/50 rounded-3xl border border-amber-100 hover:shadow-lg transition-all">
                      <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-amber-600 shadow-sm">
                        <CheckCircle className="w-6 h-6" />
                      </div>
                      <span className="font-bold text-slate-700">{t.balcony}</span>
                    </div>
                  )}

                  {(selectedApartment.amenities || []).map((am, i) => {
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
                  <CustomCalendar apartmentId={selectedApartment.id} blockedDates={availability[selectedApartment.id] || []} lang={lang} translations={t} />
                </div>
                <div className="flex flex-col justify-center gap-6">
                   <div className="p-10 bg-slate-900 rounded-[4rem] text-white space-y-8 shadow-2xl">
                      <h4 className="text-3xl font-black">{lang === 'it' ? 'Pronto a partire?' : 'Ready to go?'}</h4>
                      <p className="text-slate-400 font-bold text-lg leading-relaxed">{lang === 'it' ? 'Inviaci una richiesta diretta per ricevere il miglior preventivo garantito senza commissioni.' : 'Send us a direct request to receive the best guaranteed quote without commissions.'}</p>
                      <button onClick={() => navigateTo('/contact', 'contact')} className="w-full py-8 bg-blue-600 text-white rounded-[2rem] font-black text-2xl shadow-xl hover:bg-blue-700 transition-all hover:-translate-y-1">{t.btn_inquiry}</button>
                      <a href={selectedApartment.airbnbUrl} target="_blank" rel="noreferrer" className="w-full py-8 bg-white/10 backdrop-blur-md border-4 border-white/20 text-center rounded-[2rem] font-black text-2xl flex items-center justify-center gap-3 hover:bg-white/20 transition-all">{t.btn_airbnb} <ExternalLink className="w-6 h-6" /></a>
                   </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {view === 'calendar' && (
          <div className="py-24 max-w-7xl mx-auto px-4 animate-in fade-in">
            <div className="text-center mb-20"><h1 className="text-6xl font-black mb-6 tracking-tight">{t.availability}</h1><p className="text-slate-500 text-xl font-medium">Controlla la disponibilità delle nostre tre case vacanze</p></div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
               {APARTMENT_KEYS.map(key => (
                 <div key={key} className="space-y-6">
                    <h3 className="text-3xl font-black text-center text-slate-800">{apartments[key]?.name || DEFAULT_APARTMENTS[key].name}</h3>
                    <CustomCalendar apartmentId={key} blockedDates={availability[key] || []} lang={lang} translations={t} />
                    <div className="p-6 bg-slate-50 rounded-[2rem] border border-slate-100 text-center">
                      <button onClick={() => navigateTo(`/${key}`, 'detail', apartments[key] || DEFAULT_APARTMENTS[key])} className="text-blue-600 font-black hover:underline">Scopri questo alloggio <ArrowRight className="w-4 h-4 inline ml-1" /></button>
                    </div>
                 </div>
               ))}
            </div>
          </div>
        )}

        {view === 'explore' && (
          <div className="py-24 max-w-7xl mx-auto px-4 animate-in fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
              <div className="space-y-10">
                <div className="space-y-4">
                  <h2 className="text-4xl font-black text-slate-900 flex items-center gap-4"><Navigation className="text-blue-600" /> {t.explore_walk_title}</h2>
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
                <img src="https://0nvrzdpg2dlrgopd.public.blob.vercel-storage.com/generale/porto.jpg" className="w-full h-full object-cover" alt="Spiaggia" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>

            <div className="mb-32">
              <div className="text-center mb-16 space-y-4">
                <h2 className="text-5xl font-black text-slate-900 tracking-tight">{t.explore_nearby_title}</h2>
                <p className="text-xl text-slate-500 font-medium">{t.explore_nearby_p}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {[
                  { title: "Scopello", text: t.explore_nearby_1, img: "https://0nvrzdpg2dlrgopd.public.blob.vercel-storage.com/generale/tonnara.jpg" },
                  { title: "Zingaro", text: t.explore_nearby_2, img: "https://0nvrzdpg2dlrgopd.public.blob.vercel-storage.com/generale/zingaro.jpg" },
                  { title: "Guidaloca", text: t.explore_nearby_3, img: "https://0nvrzdpg2dlrgopd.public.blob.vercel-storage.com/generale/guidaloca.jpg"},
                  { title: "Segesta", text: t.explore_nearby_4, img: "https://0nvrzdpg2dlrgopd.public.blob.vercel-storage.com/generale/arch_segesta.jpg" },
                  { title: "Terme", text: t.explore_nearby_5, img: "https://0nvrzdpg2dlrgopd.public.blob.vercel-storage.com/generale/terme_libere.jpg" },
                  { title: "Barca", text: t.explore_nearby_6, img: "https://0nvrzdpg2dlrgopd.public.blob.vercel-storage.com/generale/porto.jpg" }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white rounded-[4rem] overflow-hidden shadow-xl border border-slate-50 group hover:-translate-y-2 transition-all">
                    <div className="h-64 overflow-hidden"><img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={item.title} /></div>
                    <div className="p-10"><p className="text-slate-700 font-bold leading-relaxed">{item.text}</p></div>
                  </div>
                ))}
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
               <iframe title="explore-map-final" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3144.1784917637856!2d12.880993!3d38.016335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13196238b93933c1%3A0x2f8b809a7b74400a!2sVia%20Giovanni%20Bovio%2C%2021%2C%2091014%20Castellammare%20del%20Golfo%20TP!5e0!3m2!1sit!2sit!4v1700000000000!5m2!1sit!2sit" width="100%" height="100%" style={{border:0}} loading="lazy"></iframe>
               <div className="absolute top-10 left-10 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-slate-100 hidden md:block group-hover:translate-x-2 transition-transform">
                  <h4 className="font-black text-slate-900 text-lg mb-1 flex items-center gap-2"><MapPin className="text-red-500" /> {t.map_title}</h4>
                  <p className="text-slate-500 font-bold">Via Giovanni Bovio, 21</p>
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
                <div className="flex justify-between items-start mb-8"><h3 className="text-3xl font-black text-slate-800">Vincenzo</h3><div className="text-3xl">🇮🇹 🇬🇧 🇵🇹</div></div>
                <div className="space-y-4">
                  <a href="tel:+393899196861" className="flex items-center gap-3 font-black text-2xl text-slate-900"><Phone className="text-blue-600 w-8 h-8" /> +393899196861</a>
                  <a href="https://wa.me/393899196861" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 font-bold text-green-600"><MessageCircle className="w-7 h-7" /> WhatsApp</a>
                </div>
              </div>
              <div className="bg-white p-12 rounded-[4rem] shadow-xl border border-slate-50 group hover:border-blue-200 transition-all">
                <div className="flex justify-between items-start mb-8"><h3 className="text-3xl font-black text-slate-800">Loredana</h3><div className="text-3xl">🇮🇹</div></div>
                <div className="space-y-4">
                  <a href="tel:+393381605034" className="flex items-center gap-3 font-black text-2xl text-slate-900"><Phone className="text-blue-600 w-8 h-8" /> +393381605034</a>
                  <a href="https://wa.me/3381605034" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 font-bold text-green-600"><MessageCircle className="w-7 h-7" /> WhatsApp</a>
                  <a href="mailto:loredans73a@gmail.com" className="flex items-center gap-3 font-bold text-slate-700"><Mail className="w-6 h-6" /> loredans73a@gmail.com</a>
                </div>
              </div>
            </div>
            <div className="bg-white p-16 rounded-[5rem] shadow-2xl border border-slate-50 text-left">
               <form onSubmit={submitInquiry} className="space-y-10">
                  {inquiryStatus === 'success' ? (<div className="p-12 bg-green-50 text-green-700 rounded-[3rem] font-black text-center text-3xl animate-bounce">{lang === 'it' ? 'Richiesta Inviata con Successo!' : 'Request Sent Successfully!'}</div>) : (
                    <>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="space-y-3"><label className="text-xs font-black uppercase text-slate-400 tracking-[0.2em] ml-2">{t.form_name}</label><input required name="name" className="w-full p-6 bg-slate-50 rounded-3xl outline-none focus:ring-4 focus:ring-blue-100 transition-all font-bold text-lg" placeholder="Mario Rossi" /></div>
                        <div className="space-y-3"><label className="text-xs font-black uppercase text-slate-400 tracking-[0.2em] ml-2">{t.form_apt}</label><select name="apartment" className="w-full p-6 bg-slate-50 rounded-3xl outline-none focus:ring-4 focus:ring-blue-100 transition-all font-bold text-lg appearance-none">{APARTMENT_KEYS.map(k => <option key={k} value={k}>{apartments[k]?.name || DEFAULT_APARTMENTS[k].name}</option>)}</select></div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="space-y-3"><label className="text-xs font-black uppercase text-slate-400 tracking-[0.2em] ml-2">{t.form_checkin}</label><input required name="dates" type="date" className="w-full p-6 bg-slate-50 rounded-3xl outline-none focus:ring-4 focus:ring-blue-100 transition-all font-bold text-lg" /></div>
                        <div className="space-y-3"><label className="text-xs font-black uppercase text-slate-400 tracking-[0.2em] ml-2">{t.guests}</label><input required name="guests" type="number" min="1" max="13" className="w-full p-6 bg-slate-50 rounded-3xl outline-none focus:ring-4 focus:ring-blue-100 transition-all font-bold text-lg" placeholder="2" /></div>
                      </div>
                      <div className="space-y-3"><label className="text-xs font-black uppercase text-slate-400 tracking-[0.2em] ml-2">{t.form_msg}</label><textarea name="message" rows="5" className="w-full p-6 bg-slate-50 rounded-3xl outline-none focus:ring-4 focus:ring-blue-100 transition-all font-bold text-lg" placeholder="Hai domande o richieste particolari?"></textarea></div>
                      <button type="submit" className="w-full py-7 bg-blue-600 text-white rounded-[2.5rem] font-black text-2xl shadow-2xl shadow-blue-500/30 hover:bg-blue-700 transition-all active:scale-95">{t.form_submit}</button>
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
              <div className="flex items-center gap-3"><div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-black">S</div><span className="text-3xl font-black tracking-tighter">Case Vacanze</span></div>
              <p className="text-slate-400 font-medium text-lg leading-relaxed">Tre case vacanza adiacenti nel cuore di Castellammare del Golfo. Comfort moderno e ospitalità siciliana per un massimo di 13 ospiti.</p>
            </div>
            <div className="space-y-8">
               <h4 className="text-2xl font-black text-slate-900 tracking-tight">{t.contact_title}</h4>
               <div className="space-y-6">
                  <div className="flex flex-col"><span className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Vincenzo 🇮🇹 🇬🇧 🇵🇹</span><a href="tel:+393899196861" className="flex items-center gap-2 text-xl font-bold text-slate-700 hover:text-blue-600 transition"><Phone className="w-5 h-5" /> +393899196861</a><a href="https://wa.me/393899196861" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-lg font-bold text-green-600"><MessageCircle className="w-5 h-5" /> WhatsApp</a></div>
                  <div className="flex flex-col"><span className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Loredana 🇮🇹</span><a href="tel:+393381605034" className="flex items-center gap-2 text-xl font-bold text-slate-700 hover:text-blue-600 transition"><Phone className="w-5 h-5" /> +393381605034</a><a href="https://wa.me/3381605034" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-lg font-bold text-green-600"><MessageCircle className="w-5 h-5" /> WhatsApp</a></div>
                  <div className="flex flex-col"><span className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Email</span><a href="mailto:loredans73a@gmail.com" className="flex items-center gap-2 text-xl font-bold text-slate-700 hover:text-blue-600 transition"><Mail className="w-5 h-5" /> loredans73a@gmail.com</a></div>
               </div>
            </div>
            <div className="flex flex-col gap-6 text-slate-400 font-black text-xl items-start md:items-end">
               <span className="cursor-pointer hover:text-blue-600 transition-colors" onClick={() => navigateTo('/apartments', 'apartments')}>{t.nav_apartments}</span>
               <span className="cursor-pointer hover:text-blue-600 transition-colors" onClick={() => navigateTo('/contact', 'contact')}>{t.nav_contact}</span>
               <span className="cursor-pointer hover:text-blue-600 transition-colors" onClick={() => navigateTo('/calendar', 'calendar')}>{t.nav_calendar}</span>
               <span className="cursor-pointer hover:text-blue-600 transition-colors" onClick={() => navigateTo('/explore', 'explore')}>{t.nav_castellammare}</span>
            </div>
          </div>
          <div className="pt-12 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center text-slate-400 font-bold text-sm gap-6">
            <div class="flex flex-col items-center md:items-start gap-2">
              <p class="text-sm text-slate-500">
                © 2026 Case Vacanze Castellammare del Golfo. All rights reserved.
              </p>
              
              <div class="flex items-center gap-2 text-xs text-slate-400 font-medium">
                <span>Powered by</span>
                <a 
                  href="https://vfwebsolutions.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  class="flex items-center gap-1.5 hover:text-blue-600 transition-all duration-300 group"
                >
                  <span class="hover:underline underline-offset-4">vfwebsolutions</span>
                   <span class="text-base group-hover:scale-110 transition-transform">👨‍💻</span>
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