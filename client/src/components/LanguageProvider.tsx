import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "sw" | "es" | "fr" | "pt";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    "site.title": "Hu-jambo",
    "site.tagline": "Community of Faith & Fellowship",
    "hero.title": "Walk Together in Faith",
    "hero.description": "God wants to use us to help each other on our faith journey. Ready to testimony along, pray along, sing along, read along, meditate along and game along.",
    "cta.join": "Join our community for capacity building",
    "cta.register": "Register / Sign Up",
    "cta.explore": "Explore Content",
    "testimony.title": "Testimony Along",
    "testimony.description": "Share your uplifting testimonies and be encouraged by others",
    "prayer.title": "Pray Along",
    "prayer.description": "Join our prayer community for support and intercession",
    "worship.title": "Sing Along",
    "worship.description": "Join in worship through song and music",
    "reading.title": "Read Along",
    "reading.description": "Dive deeper into Scripture and spiritual growth",
    "meditation.title": "Meditate Along",
    "meditation.description": "Find peace and reflection in God's creation",
    "games.title": "Game Along",
    "games.description": "Faith-based games for Christian kids and families",
    "support.title": "Support Our Mission",
    "support.description": "Help us continue building this faith community",
    "newsletter.title": "Stay Connected",
    "newsletter.description": "Subscribe to our newsletter for updates, devotionals, and community news",
    "contact.title": "Contact Us",
  },
  es: {
    "site.title": "Hu-jambo",
    "site.tagline": "Comunidad de Fe y Compañerismo",
    "hero.title": "Caminemos Juntos en Fe",
    "hero.description": "Dios quiere usarnos para ayudarnos mutuamente en nuestro viaje de fe. Listos para testificar juntos, orar juntos, cantar juntos, leer juntos, meditar juntos y jugar juntos.",
    "cta.join": "Únete a nuestra comunidad para el desarrollo de capacidades",
    "cta.register": "Registrarse / Inscribirse",
    "cta.explore": "Explorar Contenido",
    "testimony.title": "Testimonio Juntos",
    "testimony.description": "Comparte tus testimonios edificantes y siéntete animado por otros",
    "prayer.title": "Orar Juntos",
    "prayer.description": "Únete a nuestra comunidad de oración para apoyo e intercesión",
    "worship.title": "Cantar Juntos",
    "worship.description": "Únete en adoración a través del canto y la música",
    "reading.title": "Leer Juntos",
    "reading.description": "Profundiza en las Escrituras y el crecimiento espiritual",
    "meditation.title": "Meditar Juntos",
    "meditation.description": "Encuentra paz y reflexión en la creación de Dios",
    "games.title": "Jugar Juntos",
    "games.description": "Juegos basados en la fe para niños y familias cristianas",
    "support.title": "Apoya Nuestra Misión",
    "support.description": "Ayúdanos a continuar construyendo esta comunidad de fe",
    "newsletter.title": "Mantente Conectado",
    "newsletter.description": "Suscríbete a nuestro boletín para actualizaciones, devocionales y noticias de la comunidad",
    "contact.title": "Contáctanos",
  },
  fr: {
    "site.title": "Hu-jambo",
    "site.tagline": "Communauté de Foi et de Fraternité",
    "hero.title": "Marchons Ensemble dans la Foi",
    "hero.description": "Dieu veut nous utiliser pour nous aider mutuellement dans notre parcours de foi. Prêts à témoigner ensemble, prier ensemble, chanter ensemble, lire ensemble, méditer ensemble et jouer ensemble.",
    "cta.join": "Rejoignez notre communauté pour le renforcement des capacités",
    "cta.register": "S'inscrire / S'enregistrer",
    "cta.explore": "Explorer le Contenu",
    "testimony.title": "Témoignage Ensemble",
    "testimony.description": "Partagez vos témoignages édifiants et soyez encouragés par d'autres",
    "prayer.title": "Prier Ensemble",
    "prayer.description": "Rejoignez notre communauté de prière pour le soutien et l'intercession",
    "worship.title": "Chanter Ensemble",
    "worship.description": "Rejoignez l'adoration par le chant et la musique",
    "reading.title": "Lire Ensemble",
    "reading.description": "Approfondissez les Écritures et la croissance spirituelle",
    "meditation.title": "Méditer Ensemble",
    "meditation.description": "Trouvez la paix et la réflexion dans la création de Dieu",
    "games.title": "Jouer Ensemble",
    "games.description": "Jeux basés sur la foi pour les enfants et familles chrétiens",
    "support.title": "Soutenez Notre Mission",
    "support.description": "Aidez-nous à continuer de construire cette communauté de foi",
    "newsletter.title": "Restez Connecté",
    "newsletter.description": "Abonnez-vous à notre newsletter pour les mises à jour, les dévotions et les nouvelles de la communauté",
    "contact.title": "Contactez-nous",
  },
  sw: {
    "site.title": "Hu-jambo",
    "site.tagline": "Jumuiya ya Imani na Urafiki",
    "hero.title": "Tuwende Pamoja kwa Imani",
    "hero.description": "Mungu anataka kutumia sisi kuwasaidia kila mmoja katika safari yetu ya imani. Tayari kushuhudia pamoja, kuomba pamoja, kuimba pamoja, kusoma pamoja, kutafakari pamoja na kucheza pamoja.",
    "cta.join": "Jiunge na jumuiya yetu kwa ujenzi wa uwezo",
    "cta.register": "Jiandikishe / Jisajili",
    "cta.explore": "Chunguza Maudhui",
    "testimony.title": "Ushahidi Pamoja",
    "testimony.description": "Shiriki ushahidi wako wa kujenga na kutiwa moyo na wengine",
    "prayer.title": "Omba Pamoja",
    "prayer.description": "Jiunge na jumuiya yetu ya maombi kwa msaada na kuombea",
    "worship.title": "Imba Pamoja",
    "worship.description": "Jiunge katika ibada kupitia wimbo na muziki",
    "reading.title": "Soma Pamoja",
    "reading.description": "Zama kina katika Maandiko na ukuaji wa kiroho",
    "meditation.title": "Tafakari Pamoja",
    "meditation.description": "Pata amani na utafakari katika uumbaji wa Mungu",
    "games.title": "Cheza Pamoja",
    "games.description": "Michezo ya kiimaani kwa watoto na familia za Kikristo",
    "support.title": "Unga Mkono Dhamira Yetu",
    "support.description": "Tusaidie kuendelea kujenga jumuiya hii ya imani",
    "newsletter.title": "Ungana Nasi",
    "newsletter.description": "Jiandikishe kwa jarida letu kwa masasisho, maombi na habari za jumuiya",
    "contact.title": "Wasiliana Nasi",
  },
  pt: {
    "site.title": "Hu-jambo",
    "site.tagline": "Comunidade de Fé e Companheirismo",
    "hero.title": "Caminhemos Juntos na Fé",
    "hero.description": "Deus quer nos usar para nos ajudarmos mutuamente em nossa jornada de fé. Prontos para testemunhar juntos, orar juntos, cantar juntos, ler juntos, meditar juntos e jogar juntos.",
    "cta.join": "Junte-se à nossa comunidade para o desenvolvimento de capacidades",
    "cta.register": "Registrar / Inscrever-se",
    "cta.explore": "Explorar Conteúdo",
    "testimony.title": "Testemunho Juntos",
    "testimony.description": "Compartilhe seus testemunhos edificantes e seja encorajado por outros",
    "prayer.title": "Orar Juntos",
    "prayer.description": "Junte-se à nossa comunidade de oração para apoio e intercessão",
    "worship.title": "Cantar Juntos",
    "worship.description": "Junte-se na adoração através do canto e música",
    "reading.title": "Ler Juntos",
    "reading.description": "Aprofunde-se nas Escrituras e no crescimento espiritual",
    "meditation.title": "Meditar Juntos",
    "meditation.description": "Encontre paz e reflexão na criação de Deus",
    "games.title": "Jogar Juntos",
    "games.description": "Jogos baseados na fé para crianças e famílias cristãs",
    "support.title": "Apoie Nossa Missão",
    "support.description": "Ajude-nos a continuar construindo esta comunidade de fé",
    "newsletter.title": "Mantenha-se Conectado",
    "newsletter.description": "Inscreva-se em nosso boletim para atualizações, devocionais e notícias da comunidade",
    "contact.title": "Entre em Contato",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
