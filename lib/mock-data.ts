import {
  Apple,
  BadgeCheck,
  BookOpenCheck,
  Brain,
  Dumbbell,
  Flame,
  HeartHandshake,
  NotebookTabs,
  PlayCircle,
  Scale,
  Sparkles,
  Utensils,
} from "lucide-react";

export const brand = {
  name: "SamBooste",
  handle: "funky_samy",
  tagline: "On quitte le mode régime, on passe en mode vie.",
  offerName: "Stabilisation Funky Body",
  priceLabel: "57 €",
  audience: "Programme vidéo de stabilisation",
};

export const navLinks = [
  { href: "/#programme", label: "Programme" },
  { href: "/#offre", label: "Offre" },
  { href: "/connexion", label: "Connexion" },
];

export const modules = [
  {
    id: "mindset",
    icon: Brain,
    title: "Comprendre ton corps",
    duration: "4 vidéos",
    progress: 100,
    description:
      "On remet les bases à plat : habitudes, faim, frustration, rythme de vie et croyances qui bloquent.",
    lessons: ["Pourquoi tu bloques", "Faim ou envie", "Objectif réaliste", "Journal simple"],
  },
  {
    id: "nutrition",
    icon: Utensils,
    title: "Manger simple",
    duration: "6 vidéos",
    progress: 58,
    description:
      "Des repas qui calent, des assiettes faciles à refaire et une méthode qui ne demande pas d'être parfaite.",
    lessons: ["Assiette repère", "Protéines faciles", "Batch express", "Menus flexibles"],
  },
  {
    id: "cravings",
    icon: Flame,
    title: "Gérer les envies",
    duration: "5 vidéos",
    progress: 25,
    description:
      "Transformer les craquages en informations utiles, sans honte ni restart permanent le lundi.",
    lessons: ["Envies du soir", "Stress et sucre", "Plan SOS", "Rebondir vite"],
  },
  {
    id: "movement",
    icon: Dumbbell,
    title: "Bouger sans pression",
    duration: "4 vidéos",
    progress: 0,
    description:
      "Retrouver du mouvement sans se dégoûter du sport, avec des actions courtes et progressives.",
    lessons: ["Routine 12 min", "Marche active", "Renfo débutant", "Suivi énergie"],
  },
  {
    id: "tracking",
    icon: Scale,
    title: "Suivre les progrès",
    duration: "3 vidéos",
    progress: 0,
    description:
      "Mesurer ce qui compte vraiment : énergie, mensurations, confiance et constance.",
    lessons: ["Photos utiles", "Balance sans obsession", "Bilan semaine"],
  },
  {
    id: "maintenance",
    icon: HeartHandshake,
    title: "Tenir dans la durée",
    duration: "5 vidéos",
    progress: 0,
    description:
      "Installer des habitudes compatibles avec les restos, les vacances, la famille et les vrais imprévus.",
    lessons: ["Vie sociale", "Routine anti abandon", "Plateaux", "Plan 90 jours"],
  },
];

export const benefits = [
  {
    icon: Apple,
    title: "Nutrition claire",
    text: "Des repères concrets pour composer tes repas sans peser chaque gramme.",
  },
  {
    icon: Sparkles,
    title: "Motivation réaliste",
    text: "Un ton direct, positif et sans culpabilité pour rester en mouvement.",
  },
  {
    icon: NotebookTabs,
    title: "Supports pratiques",
    text: "Guides, check-lists et templates pour appliquer après chaque vidéo.",
  },
  {
    icon: BookOpenCheck,
    title: "Progression visible",
    text: "Un espace membre qui montre où tu en es et quoi regarder ensuite.",
  },
];

export const testimonials = [
  {
    name: "Sarah",
    meta: "8 semaines de programme",
    quote:
      "J'ai enfin compris comment manger sans me frustrer. Les vidéos sont courtes, claires et motivantes.",
  },
  {
    name: "Nadia",
    meta: "Reprise en main",
    quote:
      "Le programme m'a aidée à reprendre confiance sans culpabiliser quand je faisais un écart.",
  },
  {
    name: "Camille",
    meta: "Routine simple",
    quote:
      "J'avais besoin d'un cadre humain. La méthode donne envie de continuer, même les semaines chargées.",
  },
];

export const faqs = [
  {
    question: "Est-ce un régime strict ?",
    answer:
      "Non. Le programme repose sur une méthode structurée mais flexible, centrée sur des habitudes durables.",
  },
  {
    question: "Les vidéos sont-elles accessibles tout de suite ?",
    answer:
      "Oui. Après inscription, les vidéos et les ressources sont accessibles depuis ton espace membre.",
  },
  {
    question: "Faut-il aimer le sport ?",
    answer:
      "Non. Le mouvement est présenté comme un levier progressif, sans injonction ni programme impossible à tenir.",
  },
  {
    question: "Les témoignages sont-ils réels ?",
    answer:
      "Les retours clients servent à montrer les résultats, les ressentis et les changements concrets obtenus avec la méthode.",
  },
];

export const resources = [
  { title: "Guide de démarrage", type: "PDF", detail: "Les 7 premiers jours sans se perdre." },
  { title: "Planning repas 7 jours", type: "Template", detail: "Une semaine simple à adapter." },
  { title: "Liste de courses", type: "Checklist", detail: "Les bases pour remplir le frigo." },
  { title: "Suivi mensuel", type: "Tracker", detail: "Poids, mesures, énergie, humeur." },
  { title: "Plan SOS envies", type: "Fiche", detail: "Que faire quand la motivation descend." },
  { title: "Routine express", type: "Vidéo bonus", detail: "12 minutes pour relancer l'énergie." },
];

export const currentLesson = {
  module: "Manger simple",
  title: "Composer une assiette qui cale vraiment",
  duration: "11 min",
  description:
    "Une leçon simple pour apprendre à construire une assiette rassasiante, facile à refaire et compatible avec ton quotidien.",
  next: "Protéines faciles sans prise de tête",
  icon: PlayCircle,
};

export const stats = [
  { value: "49,8k", label: "abonnés Instagram" },
  { value: "6", label: "modules progressifs" },
  { value: "27", label: "vidéos courtes" },
];

export const checkpoints = [
  "Je veux perdre du poids sans repartir dans un régime extrême.",
  "J'ai besoin d'un cadre simple, vidéo par vidéo.",
  "Je veux comprendre quoi faire quand je craque.",
  "Je cherche une coach directe, humaine et motivante.",
];

export const notFor = [
  "Je veux une promesse miracle en 5 jours.",
  "Je cherche une méthode punitive ou ultra restrictive.",
  "Je ne veux rien changer à mes habitudes actuelles.",
];

export function getModuleById(id: string) {
  return modules.find((module) => module.id === id) ?? modules[1];
}
