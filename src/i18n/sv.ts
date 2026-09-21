export type Lang = 'sv' | 'en'

export const sv = {
  code: 'sv' as Lang,
  htmlLang: 'sv',
  common: {
    bookCall: 'Boka ett samtal',
    bookCallShort: 'Boka samtal',
    viewDemo: 'Se vår live-demo',
    openDemo: 'Öppna live-demon',
    readPaper: 'Läs artikeln (PDF)',
    skipToContent: 'Hoppa till innehåll',
    readMore: 'Läs mer',
  },
  nav: {
    home: 'Hem',
    services: 'Tjänster',
    tools: 'Verktyg',
    research: 'Forskning',
    about: 'Om oss',
    openMenu: 'Öppna meny',
    closeMenu: 'Stäng meny',
    languageLabel: 'Språk',
  },
  notFound: {
    title: 'Sidan hittades inte.',
    body: 'Länken kan vara felstavad eller sidan borttagen.',
    button: 'Till startsidan',
  },
  illustrations: {
    heroPhoto: 'Stålkonstruktion i ett atriumtak, sedd underifrån',
    portalFrame: 'Portalram i genomskärning',
    lSlab: 'L-formad platta',
  },
  proof: [
    'Peer-reviewed forskning (EC3 2026)',
    'Egenutvecklade beräkningsverktyg',
    'Eurokod-verifierade leveranser',
  ],
  footer: {
    tagline: 'Konstruktionskonsult med egna beräkningsverktyg.',
    location: 'Göteborg, Sverige',
    contactLabel: 'Kontakt',
    demoLabel: 'Live-demo',
    linkedinLabel: 'LinkedIn',
    navLabel: 'Sidor',
    rights: '© 2026 Dynzatec AB',
    peerReviewed: 'Peer-reviewed vid EC3 2026, Korfu.',
  },
  meta: {
    home: {
      title: 'Dynzatec AB | Konstruktionskonsult inom stål och betong',
      description:
        'Dynzatec projekterar stålhallar, portalramar och industribyggnader. Eurokod-säkrade beräkningar från ett konstruktionskonsultbolag med egna beräkningsverktyg och publicerad forskning.',
    },
    services: {
      title: 'Tjänster | Konstruktionsuppdrag och hållfasthetsberäkningar | Dynzatec',
      description:
        'Portalramar och stålhallar, industribyggnader, hållfasthetsberäkningar enligt EC2 och EC3, underkonsult-kapacitet och klimatdeklaration. Fast offert och senior kvalitetsgranskning.',
    },
    tools: {
      title: 'Verktyg | Fria ingenjörsverktyg | Dynzatec',
      description:
        'Fria ingenjörsverktyg från Dynzatec. Parametrisk portalram i realtid, snö- och vindlast enligt EN 1991 och EKS samt klimatdeklaration. Verifierade mot etablerad FEM.',
    },
    research: {
      title: 'Forskning | Parametrisk VPINN för tunna plattor | Dynzatec',
      description:
        'Dynzatecs VPINN-forskning presenterades vid EC3 2026 i Korfu. Inferens på 0,015 sekunder per design, 7,25 procent L2-avvikelse mot FEM och 60 155 valideringspunkter.',
    },
    about: {
      title: 'Om oss | Teamet bakom Dynzatec',
      description:
        'Dynzatec grundades i Göteborg av två ingenjörer och en forskare. Möt teamet bakom VPINN-ramverket, EC3-artikeln och konstruktionsuppdragen.',
    },
  },
  home: {
    kicker: 'KONSTRUKTIONSKONSULT · GÖTEBORG',
    // The soft hyphen lets long Swedish compounds break with a visible hyphen
    // on narrow screens. It is invisible when the word is not broken.
    h1: 'Nästa generations konstruktions­konsult.',
    sub: 'Vi förenar klassisk konstruktionskompetens med egen AI-forskning och egna beräkningsverktyg. Publicerat vid EC3 2026. Byggt i Göteborg.',
    whyWeExist: {
      kicker: 'VARFÖR VI FINNS',
      paragraphs: [
        'Konstruktionsbranschen räknar som den gjorde för trettio år sedan. Modellera, mesha, lös, vänta. En parameter ändras och cykeln börjar om.',
        'Vi bygger konsultbolaget där analysen är omedelbar. Där ingenjören testar hundra alternativ i stället för fem, och där varje leverans fortfarande är Eurokod-säkrad av en senior konstruktör.',
        'Forskningen är publicerad. Demon är live. Verktygen är på väg. Det här är inte en vision om tio år. Det är hur vi arbetar nu.',
      ],
    },
    whatWeDo: {
      kicker: 'VAD VI GÖR',
      title: 'Vad vi gör',
      cards: [
        {
          title: 'Konstruktionsuppdrag',
          body: 'Projektering och hållfasthetsberäkningar för stålhallar och industribyggnader.',
          linkLabel: 'Till tjänsterna',
          page: 'services' as const,
        },
        {
          title: 'Fria verktyg',
          body: 'Ingenjörsverktyg vi bygger och delar fritt. Först ut: en parametrisk portalram i realtid.',
          linkLabel: 'Till verktygen',
          page: 'tools' as const,
        },
        {
          title: 'Forskning',
          body: 'Vår VPINN-forskning gör strukturanalys i realtid möjlig. Publicerad vid EC3 2026.',
          linkLabel: 'Till forskningen',
          page: 'research' as const,
        },
      ],
    },
    why: {
      kicker: 'VARFÖR DYNZATEC',
      title: 'Varför Dynzatec',
      items: [
        {
          title: 'Liten, senior och snabb.',
          body: 'Ni pratar direkt med den som räknar.',
        },
        {
          title: 'Eurokodsäkrat.',
          body: 'Varje leverans kontrolleras mot EC2/EC3 och EKS.',
        },
        {
          title: 'Teknikförsprång.',
          body: 'Vi bygger verktygen andra väntar på.',
        },
      ],
    },
    cta: {
      title: 'Har ni ett projekt eller behöver ni extra beräkningskapacitet?',
      body: 'Skicka en kort beskrivning så återkommer vi med en fast offert.',
      button: 'Boka ett samtal',
    },
  },
  services: {
    kicker: 'TJÄNSTER',
    h1: 'Konstruktions­uppdrag inom industriellt stål och betong.',
    intro:
      'Vi arbetar fokuserat inom industriellt stål- och betongbyggande. Det gör oss snabba, och det gör oss bra.',
    cards: [
      {
        title: 'Portalramar & stålhallar',
        body: 'Dimensionering av ramar, åsar, stabilisering och grundplattor enligt EC3. Vårt kärnområde.',
      },
      {
        title: 'Industribyggnader',
        body: 'Konstruktionsritningar och beräkningar för verkstäder, lager och lantbruksbyggnader.',
      },
      {
        title: 'Hållfasthetsberäkningar',
        body: 'EC2 betong och EC3 stål, inklusive andra ordningens analys och stabilitet.',
      },
      {
        title: 'Underkonsult-kapacitet',
        body: 'Överbelastade konsultbolag hyr in oss per projekt eller per timme. Snabb start, tydlig omfattning.',
      },
      {
        title: 'Klimatdeklaration',
        body: 'Vi tar fram klimatdeklarationen ur samma mängder vi ändå räknar fram.',
        badge: 'TILLÄGGSTJÄNST',
      },
    ],
    howWeWork: {
      kicker: 'ARBETSSÄTT',
      title: 'Så arbetar vi',
      steps: [
        'Kort avstämning och fast offert.',
        'Beräkning och ritning med senior kvalitetsgranskning.',
        'Leverans med spårbara Eurokod-referenser.',
      ],
    },
    whoWeWorkWith: {
      kicker: 'UPPDRAGSGIVARE',
      title: 'Vilka vi arbetar med',
      items: [
        'Stålhallsbyggare och tillverkare med eget konstruktionsbehov.',
        'Konsultbolag som behöver kapacitet.',
        'Byggherrar inom industri och lantbruk.',
      ],
    },
    cta: {
      title: 'Har ni ett projekt eller behöver ni extra beräkningskapacitet?',
      body: 'Skicka en kort beskrivning så återkommer vi med en fast offert.',
      button: 'Boka ett samtal',
    },
  },
  tools: {
    kicker: 'VERKTYG',
    h1: 'Ingenjörs­verktyg, fria att använda.',
    intro:
      'Vi bygger ingenjörsverktyg som borde ha funnits redan, och släpper dem fritt. Alltid gratis. Alltid verifierade mot etablerad FEM innan lansering.',
    liveNow: {
      badge: 'LIVE NU',
      title: 'VPINN live-demo',
      body: 'Strukturanalys av en L-formad platta i realtid, jämförd mot FEM.',
      button: 'Öppna live-demon',
    },
    listTitle: 'På gång',
    items: [
      {
        badge: 'LANSERAS SNART',
        title: 'Parametrisk portalram i realtid',
        body: 'Dra i reglagen och se momentdiagram, nedböjning och stålvikt uppdateras live. Optimera fram den lättaste ramen som klarar alla Eurokod-kontroller.',
      },
      {
        badge: 'PLANERAD',
        title: 'Snö- & vindlast (EN 1991 + EKS)',
        body: 'Välj kommun, beskriv byggnaden, få karakteristiska laster direkt med paragrafhänvisningar.',
      },
      {
        badge: 'PLANERAD',
        title: 'Klimatdeklaration (Boverket)',
        body: 'Från mängder till färdig deklaration på minuter.',
      },
    ],
    principle:
      'Verktygen är gratis för att branschen behöver dem. Vår affär är konsultuppdrag och licensiering av vår forskningsplattform.',
  },
  research: {
    kicker: 'FORSKNING',
    h1: 'Från modellera, mesha, lösa till inferens i realtid.',
    intro:
      'Dynzatec grundades ur en forskningsidé: att fysikinformerade neurala nätverk kan ersätta cykeln modellera-mesha-lösa med inferens i realtid.',
    paper: {
      kicker: 'PUBLIKATION',
      title: 'Parametric VPINN Framework for Rapid Design Exploration of Thin Slabs',
      venue: 'Publicerad. Presenteras vid EC3 2026, Korfu, juli 2026.',
      conference: 'European Conference on Computing in Construction.',
      authors: 'Dynzatec AB i samarbete med Chalmers tekniska högskola.',
    },
    stats: {
      kicker: 'RESULTAT',
      items: [
        { value: '0.015 s', label: 'inferens per design (GPU)' },
        { value: '7.25 %', label: 'L2-avvikelse mot FEM' },
        { value: '60 155', label: 'valideringspunkter' },
      ],
    },
    meaning: {
      kicker: 'BETYDELSE',
      title: 'Vad det betyder',
      body: 'En tränad modell förutsäger nedböjning över en hel parametrisk designrymd utan meshning. Det öppnar för optimering där ingenjören testar hundratals konfigurationer i stället för en handfull.',
    },
    roadmap: {
      kicker: 'ROADMAP',
      title: 'Vägen framåt',
      steps: [
        'Publicerad forskning och live-demo (klart).',
        'Full parametrisk modell.',
        'Parametrisk portalram: vårt första kommersiella verktyg.',
      ],
    },
    cta: {
      title: 'Vill ni följa forskningen eller diskutera pilotsamarbete? Hör av er.',
      body: 'Live-demon visar var forskningen står i dag.',
      button: 'Hör av er',
    },
  },
  about: {
    kicker: 'OM OSS',
    h1: 'Två ingenjörer och en forskare.',
    intro:
      'Dynzatec grundades i Göteborg av två ingenjörer och en forskare som tröttnade på att vänta på framtiden.',
    teamTitle: 'Teamet',
    teamKicker: 'TEAM',
    team: [
      {
        name: 'Omar Alzokani',
        role: 'Medgrundare & VD',
        photo: '/team/omar.jpg',
        bio: 'Serieentreprenör med MSc från Chalmers. Har byggt och driver flera bolag inom B2B och tech. Ansvarar för affär, leverans och partnerskap.',
      },
      {
        name: 'Ahmad Arafat',
        role: 'Medgrundare & CTO',
        photo: '/team/ahmad.jpg',
        bio: 'Konstruktör och forskare. Huvudutvecklare av Dynzatecs VPINN-ramverk och medförfattare till EC3-artikeln. Ansvarar för beräkningsmodeller och kvalitetsgranskning.',
      },
      {
        // TODO: Omar must confirm the title wording and the photo with Dimos
        // before launch.
        name: 'Dimosthenis Kifokeris',
        role: 'Forskningspartner, Chalmers',
        photo: '/team/dimos.jpg',
        bio: 'Forskare vid Chalmers tekniska högskola och medförfattare till EC3-artikeln. Bidrar med forskningsledning och branschkoppling.',
      },
    ],
    cta: {
      title: 'Vill ni arbeta med oss eller veta mer om forskningen?',
      body: 'Ni pratar direkt med den som räknar.',
      button: 'Boka ett samtal',
    },
  },
}

export type Dict = typeof sv
