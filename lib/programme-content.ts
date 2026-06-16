export const programNavItems = [
  { slug: "semaine-1", label: "Semaine 1", href: "/programme/semaine-1" },
  { slug: "semaine-2", label: "Semaine 2", href: "/programme/semaine-2" },
  { slug: "conclusion", label: "Conclusion", href: "/programme/conclusion" },
];

export const programmePages = [
  {
    slug: "semaine-1",
    eyebrow: "Semaine 1",
    title: "Reprendre le cadre sans écart.",
    intro:
      "Cette première semaine sert à calmer le jeu après un régime, des vacances ou une période d'écarts. Tu suis un rythme très simple : petit-déjeuner ou collation, déjeuner complet, goûter, puis dîner plus léger.",
    videoSrc: "/semaine-1.mp4",
    poster: "/info-sam/97c1c0fb-013b-482f-840a-e80e5f76d4fe.JPG",
    sections: [
      {
        title: "La regle de la semaine",
        text:
          "Le midi, garde une assiette avec proteines, legumes et une petite portion de feculent. Le soir, reviens sur une base proteines et legumes pour stabiliser sans te frustrer.",
      },
      {
        title: "Le rythme a suivre",
        text:
          "Le programme est volontairement simple : matin ou collation, midi structure, gouter, diner leger. L'objectif est de retrouver un cadre que tu peux repeter sans te poser mille questions.",
      },
      {
        title: "Ce que tu dois retenir",
        text:
          "Tu ne cherches pas la perfection. Tu remets les bases en place, tu manges suffisamment, tu evites de sauter les repas et tu gardes une organisation simple.",
      },
    ],
    images: [
      "/info-sam/97c1c0fb-013b-482f-840a-e80e5f76d4fe.JPG",
      "/info-sam/83289916-b848-4696-a2e2-7144e90b0e44.JPG",
      "/info-sam/eddd56be-5ba9-4158-8ce2-a8ceb3bf8831.JPG",
      "/info-sam/42f29851-02be-4912-a6e4-74f7266733ec.JPG",
    ],
    weekOne: {
      rhythm: [
        {
          label: "Matin",
          title: "Petit-déj ou collation",
          text: "Tu démarres simple : tartines avec une source rassasiante, ou skyr + fruit si tu préfères manger plus tard.",
        },
        {
          label: "Midi",
          title: "Le repas complet",
          text: "Protéines + légumes + 2 cuillères à soupe de féculent. C'est le repas qui te cale et évite les envies.",
        },
        {
          label: "Goûter",
          title: "La sécurité anti-craquage",
          text: "Skyr nature 100 g + fruit, ou skyr + concombre/tomate si tu veux une option salée.",
        },
        {
          label: "Dîner",
          title: "Léger mais suffisant",
          text: "Protéines + légumes. Pas besoin de te priver : tu reviens juste à une assiette plus simple le soir.",
        },
      ],
      rules: [
        "Pendant cette semaine, tu suis le rythme sans écarts pour remettre ton corps et ta tête dans un cadre clair.",
        "Au déjeuner, respecte les 2 cuillères à soupe de féculent : riz, quinoa, boulgour, blé ou pomme de terre selon le jour.",
        "Pour chaque assiette, garde l'idée 50% protéines et 50% légumes. Le féculent du midi vient en petite portion en plus.",
      ],
      breakfast: {
        title: "Petit-déjeuner",
        timing: "Le matin, si tu as faim",
        image: "/programme/semaine-1/petit-dejeuner-options.jpg",
        items: [
          "2 tartines de pain épeautre, complet ou noir",
          "1 œuf, fromage frais ou beurre",
          "1 boisson chaude",
        ],
      },
      snacks: [
        {
          title: "Collation 10h-11h",
          timing: "Si tu ne prends pas de vrai petit-déj ou si tu as faim",
          image: "/programme/semaine-1/collation-matin-options.jpg",
          items: ["100 g de skyr nature", "1 fruit : pomme, clémentine, fruits rouges, poire ou brugnon"],
        },
        {
          title: "Goûter",
          timing: "À partir de 16h, jusqu'à 1h avant le dîner",
          image: "/programme/semaine-1/gouter-options.jpg",
          items: ["100 g de skyr + fruit", "ou 100 g de skyr + concombre ou tomate"],
        },
      ],
      days: [
        {
          day: "Jour 1",
          lunch: "Pavé de saumon + ratatouille + riz",
          lunchPortion: "2 cs de féculent : riz",
          lunchImage: "/programme/semaine-1/jour-1-midi.jpg",
          dinner: "Blanc de poulet + brocoli",
          dinnerPortion: "50% protéines / 50% légumes",
          dinnerImage: "/programme/semaine-1/jour-1-diner.jpg",
        },
        {
          day: "Jour 2",
          lunch: "Blanc de poulet + concombre tomate + quinoa",
          lunchPortion: "2 cs de féculent : quinoa",
          lunchImage: "/programme/semaine-1/jour-2-midi.jpg",
          dinner: "Omelette + ratatouille",
          dinnerPortion: "50% protéines / 50% légumes",
          dinnerImage: "/programme/semaine-1/jour-2-diner.jpg",
        },
        {
          day: "Jour 3",
          lunch: "Pavé de saumon + boulgour + chou-fleur",
          lunchPortion: "2 cs de féculent : boulgour",
          lunchImage: "/programme/semaine-1/jour-3-midi.jpg",
          dinner: "Jambon + haricots verts",
          dinnerPortion: "50% protéines / 50% légumes",
          dinnerImage: "/programme/semaine-1/jour-3-diner.jpg",
        },
        {
          day: "Jour 4",
          lunch: "Steak haché + riz + sucrine",
          lunchPortion: "2 cs de féculent : riz",
          lunchImage: "/programme/semaine-1/jour-4-midi.jpg",
          dinner: "Crevettes + concombre",
          dinnerPortion: "50% protéines / 50% légumes",
          dinnerImage: "/programme/semaine-1/jour-4-diner.jpg",
        },
        {
          day: "Jour 5",
          lunch: "Rôti de veau + blé + champignons",
          lunchPortion: "2 cs de féculent : blé",
          lunchImage: "/programme/semaine-1/jour-5-midi.jpg",
          dinner: "Œufs + épinards",
          dinnerPortion: "50% protéines / 50% légumes",
          dinnerImage: "/programme/semaine-1/jour-5-diner.jpg",
        },
        {
          day: "Jour 6",
          lunch: "Blanc de poulet + courgette + 1 pomme de terre",
          lunchPortion: "2 cs de féculent : pomme de terre",
          lunchImage: "/programme/semaine-1/jour-6-midi.jpg",
          dinner: "Poisson blanc + asperges",
          dinnerPortion: "50% protéines / 50% légumes",
          dinnerImage: "/programme/semaine-1/jour-6-diner.jpg",
        },
        {
          day: "Jour 7",
          lunch: "Steak de thon + boulgour + salade composée",
          lunchPortion: "2 cs de féculent : boulgour",
          lunchImage: "/programme/semaine-1/jour-7-midi.jpg",
          dinner: "Blanc de poulet + endives",
          dinnerPortion: "50% protéines / 50% légumes",
          dinnerImage: "/programme/semaine-1/jour-7-diner.jpg",
        },
      ],
      fullBoardImage: "/info-sam/9C5490D4-0424-438D-8BE3-8B89922D00C1.PNG",
    },
  },
  {
    slug: "semaine-2",
    eyebrow: "Semaine 2",
    title: "Programmer les repas plaisir sans perdre le cadre.",
    intro:
      "Cette deuxième semaine t'apprend à revenir à une vie normale : tu peux te faire plaisir, mais tu sais quoi faire avant, après, et au repas suivant.",
    videoSrc: "/semaine-2.mp4",
    poster: "/info-sam/c7b6389c-bf78-4394-a6c6-8950fdecc5ec.JPG",
    sections: [
      {
        title: "Programmer le plaisir",
        text:
          "Un repas plaisir n'est pas un échec. Tu l'intègres dans ta journée, puis tu ajustes les repas autour avec des choix plus simples et plus légers.",
      },
      {
        title: "La journée normale",
        text:
          "Tu gardes le même fil conducteur : matin ou collation, midi avec protéines, légumes et féculent, goûter, puis dîner plus petit que le midi.",
      },
      {
        title: "Le réflexe de stabilisation",
        text:
          "Si un repas est plus copieux, tu ne recommences pas tout à zéro. Tu reprends le cadre au repas suivant ou le lendemain, selon le moment de l'écart.",
      },
    ],
    images: [
      "/info-sam/c7b6389c-bf78-4394-a6c6-8950fdecc5ec.JPG",
      "/info-sam/cfa09612-e462-400f-b1e6-b801821818c8.JPG",
      "/info-sam/7ff92b1a-c586-43ea-a494-12433f329ce9.JPG",
      "/info-sam/846b39d0-e7b4-4efd-8c0d-ef1db134668f.JPG",
    ],
    weekTwo: {
      rules: [
        {
          title: "Plaisir le matin",
          text: "Le reste de la journée reste très simple : protéines + légumes au midi et au dîner.",
        },
        {
          title: "Plaisir le midi ou au goûter",
          text: "Le soir, tu choisis une protéine maigre avec des légumes verts.",
        },
        {
          title: "Plaisir le soir",
          text: "Le lendemain, tu fais une journée protéines + légumes. Le deuxième jour, tu reviens à une journée normale.",
        },
      ],
      normalDefinition: [
        "Matin ou collation",
        "Midi : protéines + légumes + féculent",
        "Goûter",
        "Dîner : protéines + légumes",
      ],
      pleasureExamples: [
        {
          label: "Plaisir le matin",
          title: "Tu gardes midi et soir très simples.",
          image: "/info-sam/83289916-b848-4696-a2e2-7144e90b0e44.JPG",
          meals: [
            "Matin : pain au chocolat, pancake, brioche ou pain beurre confiture",
            "Midi : blanc de poulet + haricots verts",
            "Goûter : skyr + pomme",
            "Dîner : omelette + ratatouille",
          ],
        },
        {
          label: "Plaisir le midi",
          title: "Tu gardes un dîner plus léger.",
          image: "/info-sam/846b39d0-e7b4-4efd-8c0d-ef1db134668f.JPG",
          meals: [
            "Matin : 1 tartine avec du beurre",
            "Midi : pizza, pâtes à la bolognaise, ou poisson + légumes + tarte aux pommes",
            "Goûter : skyr + myrtille",
            "Dîner : poisson blanc + courgette",
          ],
        },
        {
          label: "Plaisir le soir",
          title: "Tu construis une journée propre avant le dîner.",
          image: "/info-sam/5783788b-9dc9-4a43-90a4-e9f62d7a5f5c.JPG",
          meals: [
            "Matin : 2 tartines de pain complet + chèvre frais",
            "Midi : cuisse de poulet + ratatouille + 2 cs de riz",
            "Goûter : skyr + fraise",
            "Dîner : entrecôte frites, pâtes à la crème, ou sushi",
          ],
        },
      ],
      dayTypes: [
        {
          title: "Journée normale",
          image: "/info-sam/97c1c0fb-013b-482f-840a-e80e5f76d4fe.JPG",
          meals: [
            "Matin : tartine épeautre + chèvre frais, ou skyr + fruits rouges",
            "Midi : 2 cs de blé + blanc de poulet épicé + légumes",
            "Boisson chaude + 1 carré de chocolat 70%",
            "Goûter : skyr + pomme",
            "Dîner : omelette + brocoli",
            "Tisane + 1 carré de chocolat 70%",
          ],
        },
        {
          title: "Après un dîner plaisir",
          image: "/info-sam/c7b6389c-bf78-4394-a6c6-8950fdecc5ec.JPG",
          meals: [
            "Matin vers 10h : skyr + myrtille",
            "Midi : filet de bœuf + légumes cuits, en augmentant la protéine",
            "Café + 1 carré de chocolat 70%",
            "Goûter : skyr + framboise",
            "Dîner : poisson blanc + légumes cuits, en favorisant la protéine",
            "Tisane + 1 carré de chocolat 80%",
          ],
        },
      ],
      weekPlanImage: "/info-sam/7ff92b1a-c586-43ea-a494-12433f329ce9.JPG",
      weekPlan: [
        {
          day: "Lundi",
          meals: ["Matin : tartine chèvre", "Midi : saumon + légumes + 2 cs riz", "Goûter : skyr + pomme", "Dîner : pizza"],
        },
        {
          day: "Mardi",
          meals: [
            "10h : skyr + kiwi",
            "Midi : blanc de poulet + legumes cuits",
            "Goûter : skyr + framboise",
            "Dîner : poisson blanc + haricots verts",
          ],
        },
        {
          day: "Mercredi",
          meals: [
            "Matin : pain épeautre + beurre",
            "Midi : crevettes + fenouil + concombre + 1 pomme de terre",
            "Goûter : skyr + pomme",
            "Dîner : omelette + légumes cuits",
          ],
        },
        {
          day: "Jeudi",
          meals: [
            "Matin : 2 tartines avec beurre",
            "Midi : quiche lorraine + salade + mousse chocolat",
            "Goûter : skyr + fraise",
            "Dîner : saint-jacques + légumes verts",
          ],
        },
        {
          day: "Vendredi",
          meals: [
            "Matin : pain épeautre + chèvre frais",
            "Midi : 3 œufs au plat + 1 pomme de terre + salade composée",
            "Goûter : skyr + pêche",
            "Dîner : viande rouge + légumes",
          ],
        },
        {
          day: "Samedi",
          meals: [
            "Matin : brioche chocolat",
            "Midi : rôti de veau + ratatouille",
            "Goûter : skyr + mûre",
            "Dîner : poisson blanc + légumes verts",
          ],
        },
        {
          day: "Dimanche",
          meals: [
            "Matin : tartines complètes + beurre",
            "Midi : blanc de poulet + 2 cs de pâtes + légumes cuits",
            "Goûter : skyr + fraise",
            "Dîner : pavé de saumon + épinards",
          ],
        },
      ],
    },
  },
  {
    slug: "conclusion",
    eyebrow: "Conclusion",
    title: "Ton mémo pour garder le cap seule.",
    intro:
      "La vidéo t'explique la logique complète. Cette page te sert de résumé rapide : quoi surveiller, comment réagir après un repas plus copieux, et les réflexes à garder au quotidien.",
    videoSrc: "/conclusion.mp4",
    poster: "/info-sam/9C5490D4-0424-438D-8BE3-8B89922D00C1.PNG",
    sections: [
      {
        title: "Verifier sans obsession",
        text:
          "Continue a te peser regulierement pour verifier que le poids reste stable. Si tu vois une vraie alerte, tu reprends tout de suite un cadre simple pendant quelques jours.",
      },
      {
        title: "Ne pas oublier les bases",
        text:
          "Garde des legumes midi et soir, ne saute pas le repas du midi, bois suffisamment, evite les diners trop tardifs et ne sors pas de table en ayant faim.",
      },
      {
        title: "Continuer avec plaisir",
        text:
          "La stabilisation n'est pas une punition. Tu continues a manger avec plaisir, en pleine conscience, avec une organisation qui t'evite de te mettre en danger.",
      },
    ],
    conclusion: {
      alert: {
        title: "Le signal à surveiller",
        text:
          "Continue à te peser une fois par semaine pour vérifier que le poids ne bouge pas. Si tu vois le 64, tu reprends le cadre tout de suite au lieu d'attendre.",
        action: "Si le poids remonte franchement : 3 jours protéines + légumes.",
      },
      recoveryRules: [
        {
          title: "Dîner très copieux",
          steps: ["Le lendemain : journée protéines + légumes", "Jour 2 : journée sans écart"],
        },
        {
          title: "Midi très copieux",
          steps: ["Le soir : protéine maigre + légumes", "Le lendemain : journée sans écart"],
        },
        {
          title: "Petit-déjeuner plaisir",
          steps: ["Le reste de la journée : protéines + légumes", "Tu gardes le déjeuner comme repas principal"],
        },
      ],
      noGapDay: {
        title: "Une journée sans écart",
        meals: ["Midi : protéines + légumes + féculent", "Soir : protéines + légumes"],
        note: "Le déjeuner reste le plus gros repas. Le dîner reste plus simple.",
      },
      essentials: [
        "Légumes à midi et le soir.",
        "Jamais uniquement protéines + féculent.",
        "Décaler les fruits des repas d'au moins 2h si possible.",
        "Éviter de dîner tard et garder environ 12h de jeûne nocturne.",
        "Le déjeuner reste le plus gros repas.",
        "Boire 1,5 à 2L d'eau sur la journée.",
        "Boire plutôt en début de repas et éviter de boire pendant le repas.",
        "Terminer par une boisson chaude pour mieux digérer.",
        "Prendre un goûter tard avant un dîner plus copieux.",
        "Ne jamais sortir de table en ayant faim.",
        "Ne pas sauter le repas du midi.",
        "Varier au maximum et garder une marche ou activité régulière.",
        "Rester organisée pour ne pas te mettre en danger.",
      ],
      closing:
        "La stabilisation n'est pas une punition. Tu restes organisée, tu manges avec plaisir et en pleine conscience, et tu reviens au cadre dès que tu sens que ça peut déraper. Bonne continuation.",
    },
    images: [
      "/info-sam/9C5490D4-0424-438D-8BE3-8B89922D00C1.PNG",
      "/info-sam/5783788b-9dc9-4a43-90a4-e9f62d7a5f5c.JPG",
      "/info-sam/7d27674f-b535-495c-90db-388baac23106.JPG",
      "/info-sam/4758ec8b-8312-423c-bb57-28399aa38678.JPG",
    ],
  },
];

export function getProgrammePage(slug: string) {
  return programmePages.find((page) => page.slug === slug);
}
