import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  ChevronRight,
  Clock,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Star,
  Utensils,
  Zap,
} from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { assetPath } from "@/lib/asset-path";
import { brand } from "@/lib/mock-data";

const painPoints = [
  "Tu rentres de vacances ou d'une période d'excès et tu sens que ça peut vite déraper.",
  "Tu as déjà fait des efforts, mais tu as peur de reprendre parce que tu n'as pas de cadre clair.",
  "Tu veux retrouver une routine simple sans repartir dans un régime strict qui te frustre.",
];

const methodCards = [
  {
    icon: CalendarDays,
    title: "15 jours cadrés",
    text: "Un format court pour te remettre dans le bon rythme sans te perdre dans un programme interminable.",
  },
  {
    icon: Utensils,
    title: "Des repères simples",
    text: "Tu sais quoi faire au quotidien, avec des consignes claires et des supports écrits pour ne pas revoir la vidéo en boucle.",
  },
  {
    icon: HeartHandshake,
    title: "Retour au mode vie",
    text: "L'objectif n'est pas de te punir. C'est de stabiliser, kiffer, rattraper et continuer normalement.",
  },
];

const reviews = [
  {
    name: "Pascale",
    meta: "Stabilisation après coaching",
    quote:
      "J'avais besoin de savoir quoi faire après mes écarts. Le cadre est simple, clair, et je me sens beaucoup plus sereine.",
  },
  {
    name: "Sarah",
    meta: "Retour de vacances",
    quote:
      "Je suis rentrée sans vouloir repartir dans un régime strict. Ça m'a aidée à retrouver une routine sans culpabiliser.",
  },
  {
    name: "Nadia",
    meta: "Après une perte de poids",
    quote:
      "Ce qui change, c'est que je ne panique plus dès que je fais un repas plaisir. Je sais comment reprendre le rythme.",
  },
];

const offerItems = [
  "Un plan de stabilisation sur 15 jours pour reprendre le contrôle avant que les écarts s'installent",
  "2 vidéos de coaching simples pour savoir quoi faire, semaine après semaine",
  "Des supports écrits pour appliquer au quotidien sans revoir la vidéo à chaque repas",
  "Des repères clairs pour gérer l'après-vacances, l'après-régime et les repas plaisir",
  "Une conclusion pour garder les bons réflexes une fois les 15 jours terminés",
  "1 mois d'accès pour avancer à ton rythme dans l'espace membre",
];

const faqs = [
  {
    question: "Est-ce que c'est un programme pour perdre du poids ?",
    answer:
      "Non. La promesse principale, c'est la stabilisation : retrouver un cadre après une perte de poids, des vacances ou une période avec plus d'écarts, pour éviter de repartir en arrière.",
  },
  {
    question: "Est-ce qu'il y a beaucoup de vidéos à suivre ?",
    answer:
      "Non. Le programme est volontairement simple : deux vidéos principales, des supports écrits et une conclusion pour appliquer sans surcharge.",
  },
  {
    question: "Je peux commencer quand je veux ?",
    answer:
      "Oui. Tu avances en autonomie dans ton espace membre, avec 1 mois d'accès pour suivre les 15 jours à ton rythme.",
  },
  {
    question: "Est-ce un régime strict ?",
    answer:
      "Non. C'est un cadre de stabilisation. L'idée est de quitter le mode régime et d'apprendre à revenir à l'équilibre sans culpabiliser.",
  },
];

export default function Home() {
  return (
    <div className="page-shell">
      <SiteHeader />
      <main>
        <section className="vsl-hero container">
          <div className="hero-copy">
            <p className="eyebrow">
              <Zap size={16} /> Stabilisation 15 jours
            </p>
            <h1 className="display-title">
              Après un régime ou des vacances, stabilise sans repartir dans les écarts.
            </h1>
            <p className="lead">
              Un accompagnement simple pour passer du mode restriction au mode vie normale : retrouver un cadre,
              garder le plaisir et savoir quoi faire quand tu veux éviter de reprendre.
            </p>
          </div>

          <div id="vsl" className="vsl-card panel">
            <div className="vsl-frame">
              <video
                controls
                preload="metadata"
                poster={assetPath("/instagram-funky-samy.png")}
                aria-label="Vidéo de présentation du programme"
              >
                <source src={assetPath("/vsl.mp4")} type="video/mp4" />
              </video>
            </div>
          </div>

          <div className="hero-stats hero-stats-compact" aria-label="Informations clés du programme">
            <div>
              <strong>15 jours</strong>
              <span>pour te recentrer</span>
            </div>
            <div>
              <strong>+100</strong>
              <span>clientes accompagnées</span>
            </div>
            <div>
              <strong>1 mois</strong>
              <span>d'accès inclus</span>
            </div>
          </div>
        </section>

        <section className="section contrast-band">
          <div className="container problem-grid">
            <div>
              <p className="eyebrow">Le vrai moment fragile</p>
              <h2 className="section-title">Ce n'est pas toujours le régime qui lâche. C'est l'après.</h2>
            </div>
            <div className="problem-cards">
              {painPoints.map((item) => (
                <article key={item}>
                  <ChevronRight size={22} />
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section container sales-section">
          <div className="sales-letter panel">
            <p className="eyebrow">
              <Sparkles size={16} /> Message de Samy
            </p>
            <h2 className="section-title">On quitte le mode régime. On passe en mode vie.</h2>
            <div className="letter-copy">
              <p>
                Après les excès, après une perte de poids, après les vacances, c'est souvent là que tout se joue.
                Tu n'as pas forcément besoin d'un nouveau départ spectaculaire. Tu as besoin d'un cadre clair pour
                ne pas laisser deux ou trois écarts devenir une spirale.
              </p>
              <p>
                La stabilisation, c'est l'étape que beaucoup de personnes sautent. Pourtant, c'est celle qui permet
                de garder le cap sans vivre dans la restriction permanente.
              </p>
              <p>
                Ce programme a été pensé pour te remettre dans l'équilibre en autonomie, avec une méthode rapide,
                concrète et facile à suivre. Pas pour te faire culpabiliser. Pas pour te vendre un régime de plus.
                Pour t'aider à reprendre la main avant que les anciennes habitudes reviennent trop fort.
              </p>
            </div>
            <Link href="/#offre" className="btn btn-primary sales-cta">
              Rejoindre le programme <ArrowRight size={18} />
            </Link>
          </div>
        </section>

        <section id="programme" className="section modules-section">
          <div className="container">
            <div className="stacked-heading module-heading">
              <div>
                <p className="eyebrow">Le programme</p>
                <h2 className="section-title">Simple, court, guidé : tout est fait pour appliquer.</h2>
              </div>
              <p className="lead">
                Deux semaines pour revenir à un rythme stable, avec les explications en vidéo et les supports écrits
                pour garder les règles sous les yeux au quotidien.
              </p>
            </div>
            <div className="benefit-grid">
              {methodCards.map((card) => {
                const Icon = card.icon;
                return (
                  <article key={card.title} className="benefit-card">
                    <Icon size={24} />
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section social-proof reviews-section">
          <div className="container">
            <div className="split-heading">
              <div>
                <p className="eyebrow">Avis clientes</p>
                <h2 className="section-title">Elles ont retrouvé un cadre avant que les écarts s'installent.</h2>
              </div>
              <p className="lead">
                La méthode est pensée pour t'aider à revenir à l'équilibre sans repartir dans un régime strict.
              </p>
            </div>
            <div className="reviews-grid">
              {reviews.map((review) => (
                <article key={review.name} className="review-card">
                  <div className="stars" aria-label="5 étoiles">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={17} fill="currentColor" />
                    ))}
                  </div>
                  <p>"{review.quote}"</p>
                  <strong>{review.name}</strong>
                  <span>{review.meta}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="offre" className="section container offer-section">
          <div className="offer-card">
            <div>
              <p className="eyebrow">
                <BadgeCheck size={16} /> Offre
              </p>
              <h2 className="section-title">{brand.offerName}</h2>
              <p className="lead">
                Le cadre simple pour revenir à l'équilibre avant que quelques écarts deviennent une reprise complète.
                En 15 jours, tu sais quoi manger, comment te recadrer et comment retrouver une routine sans repartir
                dans un régime strict.
              </p>
              <div className="offer-reassurance">
                <span>
                  <ShieldCheck size={18} /> Accès immédiat
                </span>
                <span>
                  <Clock size={18} /> 1 mois d'accès
                </span>
              </div>
            </div>
            <div className="price-card">
              <span>{brand.priceLabel}</span>
              <strong>Le reset stabilisation</strong>
              <p>
                Pour arrêter de te dire "je reprends lundi" et retrouver un cadre clair dès maintenant.
              </p>
              <ul>
                {offerItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link href="/#offre" className="btn btn-primary">
                Rejoindre le programme <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        <section className="section container faq-section">
          <div className="split-heading">
            <div>
              <p className="eyebrow">FAQ</p>
              <h2 className="section-title">Les questions avant de commencer.</h2>
            </div>
          </div>
          <div className="faq-list">
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="section container final-cta-section">
          <div className="final-cta panel">
            <div>
              <p className="eyebrow">
                <Star size={16} /> Stabiliser sans repartir en arrière
              </p>
              <h2 className="section-title">Tu sais déjà faire des efforts. Maintenant, apprends à garder le cap.</h2>
            </div>
            <Link href="/#offre" className="btn btn-primary">
              Rejoindre le programme <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
