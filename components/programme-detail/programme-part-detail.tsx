import { notFound } from "next/navigation";
import {
  Apple,
  AlertTriangle,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Coffee,
  Droplets,
  Heart,
  PlayCircle,
  RotateCcw,
  Salad,
  Scale,
  Sparkles,
} from "lucide-react";
import { ProgramHeader } from "@/components/program-header";
import { assetPath } from "@/lib/asset-path";
import { getProgrammePage } from "@/lib/programme-content";

export function ProgrammePartDetail({ slug }: { slug: string }) {
  const page = getProgrammePage(slug);

  if (!page) {
    notFound();
  }

  const weekOne = page.weekOne;
  const weekTwo = page.weekTwo;
  const conclusion = page.conclusion;

  return (
    <div className="page-shell programme-shell">
      <ProgramHeader currentSlug={page.slug} />
      <main className="container programme-detail">
        <section className="programme-intro">
          <p className="eyebrow">
            <PlayCircle size={16} /> {page.eyebrow}
          </p>
          <h1 className="section-title">{page.title}</h1>
          <p className="lead">{page.intro}</p>
        </section>

        <section className="programme-video-card panel">
          <video controls preload="metadata" poster={assetPath(page.poster)} aria-label={`Video ${page.eyebrow}`}>
            <source src={assetPath(page.videoSrc)} type="video/mp4" />
          </video>
        </section>

        {weekOne ? (
          <>
            <nav className="week-anchor-nav" aria-label="Navigation semaine 1">
              <a href="#regles">Règles</a>
              <a href="#menus">7 jours</a>
              <a href="#petit-dejeuner">Petit-déj</a>
              <a href="#collations">Collations</a>
            </nav>

            <section id="regles" className="week-rule-board">
              <article className="week-rule-main panel">
                <p className="eyebrow">
                  <CheckCircle2 size={16} /> À faire cette semaine
                </p>
                <h2>Tu suis le cadre, sans improviser.</h2>
                <div className="week-rule-list">
                  {weekOne.rules.map((rule) => (
                    <p key={rule}>
                      <CheckCircle2 size={18} /> {rule}
                    </p>
                  ))}
                </div>
              </article>

              <div className="week-rhythm-grid">
                {weekOne.rhythm.map((item) => (
                  <article key={item.label} className="week-rhythm-card">
                    <span>{item.label}</span>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </article>
                ))}
              </div>
            </section>

            <section id="menus" className="week-section">
              <div className="week-section-heading">
                <p className="eyebrow">
                  <Salad size={16} /> Menus de la semaine
                </p>
                <h2 className="section-title">Tes 7 journées types.</h2>
                <p>
                  Reprends la journée dans l'ordre. Le midi te cale avec une petite portion de féculent, le dîner reste
                  plus simple pour stabiliser.
                </p>
              </div>

              <div className="week-days-grid">
                {weekOne.days.map((day) => (
                  <article key={day.day} className="week-day-card panel">
                    <div className="week-day-header">
                      <span>{day.day}</span>
                      <strong>Midi + dîner</strong>
                    </div>

                    <div className="week-meal-card">
                      <img
                        src={assetPath(day.lunchImage)}
                        alt={`${day.day} midi : ${day.lunch}`}
                        width={520}
                        height={620}
                      />
                      <div>
                        <span>Midi</span>
                        <h3>{day.lunch}</h3>
                        <p>{day.lunchPortion}</p>
                      </div>
                    </div>

                    <div className="week-meal-card">
                      <img
                        src={assetPath(day.dinnerImage)}
                        alt={`${day.day} dîner : ${day.dinner}`}
                        width={520}
                        height={620}
                      />
                      <div>
                        <span>Dîner</span>
                        <h3>{day.dinner}</h3>
                        <p>{day.dinnerPortion}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section id="petit-dejeuner" className="week-section">
              <div className="week-section-heading">
                <p className="eyebrow">
                  <Coffee size={16} /> Matin
                </p>
                <h2 className="section-title">Si tu prends un petit-déjeuner.</h2>
              </div>

              <article className="week-food-card panel featured">
                <img
                  src={assetPath(weekOne.breakfast.image)}
                  alt="Idées de petit-déjeuner pour la semaine 1"
                  width={1200}
                  height={800}
                />
                <div>
                  <span>
                    <Clock3 size={16} /> {weekOne.breakfast.timing}
                  </span>
                  <h3>{weekOne.breakfast.title}</h3>
                  <ul>
                    {weekOne.breakfast.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </article>
            </section>

            <section id="collations" className="week-section">
              <div className="week-section-heading">
                <p className="eyebrow">
                  <Apple size={16} /> Collations
                </p>
                <h2 className="section-title">Ce que tu peux prendre entre les repas.</h2>
              </div>

              <div className="week-food-grid">
                {weekOne.snacks.map((snack) => (
                  <article key={snack.title} className="week-food-card panel">
                    <img src={assetPath(snack.image)} alt={snack.title} width={1100} height={850} />
                    <div>
                      <span>
                        <Clock3 size={16} /> {snack.timing}
                      </span>
                      <h3>{snack.title}</h3>
                      <ul>
                        {snack.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="week-remember panel">
              <p className="eyebrow">
                <Sparkles size={16} /> À retenir
              </p>
              <h2>Si tu es perdue, reviens au rythme : matin, midi, goûter, dîner.</h2>
              <p>
                Tu ne cherches pas la perfection. Tu remets les bases en place, tu manges suffisamment, tu évites de
                sauter les repas et tu gardes une organisation simple pendant 7 jours.
              </p>
            </section>
          </>
        ) : weekTwo ? (
          <>
            <nav className="week-anchor-nav" aria-label="Navigation semaine 2">
              <a href="#regles">Règles</a>
              <a href="#plaisirs">Repas plaisir</a>
              <a href="#journees-types">Journées types</a>
              <a href="#semaine-type">Semaine type</a>
            </nav>

            <section id="regles" className="week-rule-board week-two-rules">
              <article className="week-rule-main panel">
                <p className="eyebrow">
                  <RotateCcw size={16} /> La logique semaine 2
                </p>
                <h2>Tu ne compenses pas au hasard, tu ajustes au bon moment.</h2>
                <div className="week-rule-list">
                  {weekTwo.rules.map((rule) => (
                    <p key={rule.title}>
                      <CheckCircle2 size={18} /> <span><strong>{rule.title}.</strong> {rule.text}</span>
                    </p>
                  ))}
                </div>
              </article>

              <aside className="week-two-definition panel">
                <p className="eyebrow">
                  <Salad size={16} /> Journée normale
                </p>
                <h3>Le cadre de base</h3>
                <ul>
                  {weekTwo.normalDefinition.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p>Le dîner reste toujours plus petit que le midi.</p>
              </aside>
            </section>

            <section id="plaisirs" className="week-section">
              <div className="week-section-heading">
                <p className="eyebrow">
                  <Sparkles size={16} /> Repas plaisir
                </p>
                <h2 className="section-title">Tu choisis le plaisir, puis tu cadres le reste.</h2>
                <p>
                  Le repas plaisir n'est pas un écart à réparer. Il est prévu dans la journée, avec un dîner plus léger
                  ou une journée plus simple le lendemain.
                </p>
              </div>

              <div className="week-two-example-grid">
                {weekTwo.pleasureExamples.map((example, index) => (
                  <article key={example.label} className="week-two-example panel">
                    <div className="week-two-card-top">
                      <span>{example.label}</span>
                      <strong>{String(index + 1).padStart(2, "0")}</strong>
                    </div>
                    <h3>{example.title}</h3>
                    <ul>
                      {example.meals.map((meal) => (
                        <li key={meal}>{meal}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>

            <section id="journees-types" className="week-section">
              <div className="week-section-heading">
                <p className="eyebrow">
                  <Coffee size={16} /> Repères pratiques
                </p>
                <h2 className="section-title">Deux journées à garder sous la main.</h2>
              </div>

              <div className="week-two-daytype-grid">
                {weekTwo.dayTypes.map((dayType) => (
                  <article key={dayType.title} className="week-two-text-card panel">
                    <span>
                      <Clock3 size={16} /> {dayType.title}
                    </span>
                    <h3>{dayType.title}</h3>
                    <ul>
                      {dayType.meals.map((meal) => (
                        <li key={meal}>{meal}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>

            <section id="semaine-type" className="week-section">
              <div className="week-section-heading">
                <p className="eyebrow">
                  <CalendarDays size={16} /> Semaine type
                </p>
                <h2 className="section-title">Une semaine de vie normale.</h2>
                <p>
                  Midi et soir, tu peux garder la boisson chaude avec un carré de chocolat. Le point clé reste le même :
                  le dîner est plus petit que le midi.
                </p>
              </div>

              <div className="week-two-plan-grid">
                {weekTwo.weekPlan.map((day) => (
                  <article key={day.day} className="week-two-plan-card panel">
                    <h3>{day.day}</h3>
                    <ul>
                      {day.meals.map((meal) => (
                        <li key={meal}>{meal}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>

            <section className="week-remember panel">
              <p className="eyebrow">
                <Sparkles size={16} /> À retenir
              </p>
              <h2>Le plaisir est prévu. Le cadre revient au repas suivant.</h2>
              <p>
                Si le plaisir est le soir, le lendemain sert à retrouver l'équilibre avec protéines et légumes. Le jour
                d'après, tu reprends simplement une journée normale.
              </p>
            </section>
          </>
        ) : conclusion ? (
          <>
            <nav className="week-anchor-nav" aria-label="Navigation conclusion">
              <a href="#surveiller">Surveiller</a>
              <a href="#rattraper">Rattraper</a>
              <a href="#journee-sans-ecart">Journée type</a>
              <a href="#reflexes">Réflexes</a>
            </nav>

            <section id="surveiller" className="conclusion-hero panel">
              <p className="eyebrow">
                <Scale size={16} /> À vérifier chaque semaine
              </p>
              <h2>{conclusion.alert.title}</h2>
              <p>{conclusion.alert.text}</p>
              <strong>
                <AlertTriangle size={20} /> {conclusion.alert.action}
              </strong>
            </section>

            <section id="rattraper" className="week-section">
              <div className="week-section-heading">
                <p className="eyebrow">
                  <RotateCcw size={16} /> Après un repas plus copieux
                </p>
                <h2 className="section-title">Tu ne paniques pas. Tu appliques la règle.</h2>
              </div>

              <div className="conclusion-recovery-grid">
                {conclusion.recoveryRules.map((rule, index) => (
                  <article key={rule.title} className="conclusion-recovery-card panel">
                    <div className="week-two-card-top">
                      <span>{rule.title}</span>
                      <strong>{String(index + 1).padStart(2, "0")}</strong>
                    </div>
                    <ul>
                      {rule.steps.map((step) => (
                        <li key={step}>{step}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>

            <section id="journee-sans-ecart" className="conclusion-day panel">
              <div>
                <p className="eyebrow">
                  <Salad size={16} /> Cadre de base
                </p>
                <h2>{conclusion.noGapDay.title}</h2>
                <p>{conclusion.noGapDay.note}</p>
              </div>
              <ul>
                {conclusion.noGapDay.meals.map((meal) => (
                  <li key={meal}>{meal}</li>
                ))}
              </ul>
            </section>

            <section id="reflexes" className="week-section">
              <div className="week-section-heading">
                <p className="eyebrow">
                  <CheckCircle2 size={16} /> Ne jamais oublier
                </p>
                <h2 className="section-title">Les réflexes qui évitent de te mettre en danger.</h2>
              </div>

              <div className="conclusion-essentials-grid">
                {conclusion.essentials.map((item, index) => (
                  <article key={item} className="conclusion-essential">
                    <span>{index + 1}</span>
                    <p>{item}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="week-remember panel conclusion-closing">
              <p className="eyebrow">
                <Heart size={16} /> À retenir
              </p>
              <h2>Manger avec plaisir, en pleine conscience.</h2>
              <p>{conclusion.closing}</p>
              <span>
                <Droplets size={18} /> Organisation, plaisir, régularité.
              </span>
            </section>
          </>
        ) : null}
      </main>
    </div>
  );
}
