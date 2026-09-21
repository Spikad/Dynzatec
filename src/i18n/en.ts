import type { Dict } from './sv'

export const en: Dict = {
  code: 'en',
  htmlLang: 'en',
  common: {
    bookCall: 'Book a call',
    bookCallShort: 'Book a call',
    viewDemo: 'See our live demo',
    openDemo: 'Open the live demo',
    readPaper: 'Read the paper (PDF)',
    skipToContent: 'Skip to content',
    readMore: 'Read more',
  },
  nav: {
    home: 'Home',
    services: 'Services',
    tools: 'Tools',
    research: 'Research',
    about: 'About',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    languageLabel: 'Language',
  },
  notFound: {
    title: 'Page not found.',
    body: 'The link may be misspelled, or the page has been removed.',
    button: 'Go to the home page',
  },
  illustrations: {
    heroPhoto: 'Steel roof structure of an atrium, seen from below',
    portalFrame: 'Portal frame section',
    lSlab: 'L-shaped slab',
  },
  proof: [
    'Peer-reviewed research (EC3 2026)',
    'In-house computational tools',
    'Eurocode-verified deliverables',
  ],
  footer: {
    tagline: 'Structural design consultancy with its own computational tools.',
    location: 'Gothenburg, Sweden',
    contactLabel: 'Contact',
    demoLabel: 'Live demo',
    linkedinLabel: 'LinkedIn',
    navLabel: 'Pages',
    rights: '© 2026 Dynzatec AB',
    peerReviewed: 'Peer-reviewed at EC3 2026, Corfu.',
  },
  meta: {
    home: {
      title: 'Dynzatec AB | Structural design consultancy in steel and concrete',
      description:
        'Dynzatec designs steel halls, portal frames and industrial buildings. Eurocode-verified calculations from a structural consultancy with its own computational tools and published research.',
    },
    services: {
      title: 'Services | Structural design and strength calculations | Dynzatec',
      description:
        'Portal frames and steel halls, industrial buildings, strength calculations to EC2 and EC3, subconsultant capacity and climate declarations. Fixed quotes and senior quality review.',
    },
    tools: {
      title: 'Tools | Free engineering tools | Dynzatec',
      description:
        'Free engineering tools from Dynzatec. Real-time parametric portal frame, snow and wind loads to EN 1991 and EKS, and climate declarations. Verified against established FEM.',
    },
    research: {
      title: 'Research | Parametric VPINN for thin slabs | Dynzatec',
      description:
        'Dynzatec research presented at EC3 2026 in Corfu. Inference in 0.015 seconds per design, 7.25 percent L2 deviation against FEM and 60,155 validation points.',
    },
    about: {
      title: 'About | The team behind Dynzatec',
      description:
        'Dynzatec was founded in Gothenburg by two engineers and a researcher. Meet the team behind the VPINN framework, the EC3 paper and the design commissions.',
    },
  },
  home: {
    kicker: 'STRUCTURAL DESIGN CONSULTANCY · GOTHENBURG',
    h1: 'The next generation of structural consultancy.',
    sub: 'We combine classical structural engineering with our own AI research and computational tools. Published at EC3 2026. Built in Gothenburg.',
    whyWeExist: {
      kicker: 'WHY WE EXIST',
      paragraphs: [
        'The structural engineering industry calculates the way it did thirty years ago. Model, mesh, solve, wait. One parameter changes and the cycle starts over.',
        'We are building the consultancy where the analysis is immediate. Where the engineer tests a hundred alternatives instead of five, and where every deliverable is still Eurocode-verified by a senior structural engineer.',
        'The research is published. The demo is live. The tools are on their way. This is not a vision for ten years from now. It is how we work today.',
      ],
    },
    whatWeDo: {
      kicker: 'WHAT WE DO',
      title: 'What we do',
      cards: [
        {
          title: 'Design commissions',
          body: 'Structural design and strength calculations for steel halls and industrial buildings.',
          linkLabel: 'Go to services',
          page: 'services',
        },
        {
          title: 'Free tools',
          body: 'Engineering tools we build and share for free. First out: a real-time parametric portal frame.',
          linkLabel: 'Go to tools',
          page: 'tools',
        },
        {
          title: 'Research',
          body: 'Our VPINN research makes real-time structural analysis possible. Published at EC3 2026.',
          linkLabel: 'Go to research',
          page: 'research',
        },
      ],
    },
    why: {
      kicker: 'WHY DYNZATEC',
      title: 'Why Dynzatec',
      items: [
        {
          title: 'Small, senior and fast.',
          body: 'You speak directly with the engineer doing the calculations.',
        },
        {
          title: 'Eurocode-verified.',
          body: 'Every deliverable is checked against EC2/EC3 and EKS.',
        },
        {
          title: 'A technical head start.',
          body: 'We build the tools others are waiting for.',
        },
      ],
    },
    cta: {
      title: 'Do you have a project, or do you need extra calculation capacity?',
      body: 'Send a short description and you get a fixed quote back.',
      button: 'Book a call',
    },
  },
  services: {
    kicker: 'SERVICES',
    h1: 'Design commissions in industrial steel and concrete.',
    intro:
      'We work in a focused way within industrial steel and concrete construction. That makes us fast, and it makes us good.',
    cards: [
      {
        title: 'Portal frames & steel halls',
        body: 'Design of frames, purlins, bracing and footings to EC3. Our core area.',
      },
      {
        title: 'Industrial buildings',
        body: 'Structural drawings and calculations for workshops, warehouses and agricultural buildings.',
      },
      {
        title: 'Strength calculations',
        body: 'EC2 concrete and EC3 steel, including second order analysis and stability.',
      },
      {
        title: 'Subconsultant capacity',
        body: 'Overloaded consultancies hire us per project or per hour. Fast start, clear scope.',
      },
      {
        title: 'Climate declaration',
        body: 'We produce the climate declaration from the same quantities we calculate anyway.',
        badge: 'ADD-ON SERVICE',
      },
    ],
    howWeWork: {
      kicker: 'HOW WE WORK',
      title: 'How we work',
      steps: [
        'A short alignment call and a fixed quote.',
        'Calculation and drawings with senior quality review.',
        'Delivery with traceable Eurocode references.',
      ],
    },
    whoWeWorkWith: {
      kicker: 'CLIENTS',
      title: 'Who we work with',
      items: [
        'Steel hall builders and manufacturers with in-house design needs.',
        'Consultancies that need capacity.',
        'Developers in industry and agriculture.',
      ],
    },
    cta: {
      title: 'Do you have a project, or do you need extra calculation capacity?',
      body: 'Send a short description and you get a fixed quote back.',
      button: 'Book a call',
    },
  },
  tools: {
    kicker: 'TOOLS',
    h1: 'Engineering tools, free to use.',
    intro:
      'We build engineering tools that should already have existed, and release them for free. Always free. Always verified against established FEM before launch.',
    liveNow: {
      badge: 'LIVE NOW',
      title: 'VPINN live demo',
      body: 'Real-time structural analysis of an L-shaped slab, compared against FEM.',
      button: 'Open the live demo',
    },
    listTitle: 'In the works',
    items: [
      {
        badge: 'LAUNCHING SOON',
        title: 'Real-time parametric portal frame',
        body: 'Move the sliders and watch bending moment diagrams, deflection and steel weight update live. Optimise your way to the lightest frame that passes every Eurocode check.',
      },
      {
        badge: 'PLANNED',
        title: 'Snow & wind load (EN 1991 + EKS)',
        body: 'Pick a municipality, describe the building, get characteristic loads straight away with clause references.',
      },
      {
        badge: 'PLANNED',
        title: 'Climate declaration (Boverket)',
        body: 'From quantities to a finished declaration in minutes.',
      },
    ],
    principle:
      'The tools are free because the industry needs them. Our business is consulting work and licensing of our research platform.',
  },
  research: {
    kicker: 'RESEARCH',
    h1: 'From model, mesh, solve to real-time inference.',
    intro:
      'Dynzatec was founded on a research idea: that physics-informed neural networks can replace the model-mesh-solve cycle with real-time inference.',
    paper: {
      kicker: 'PUBLICATION',
      title: 'Parametric VPINN Framework for Rapid Design Exploration of Thin Slabs',
      venue: 'Published. Presented at EC3 2026, Corfu, July 2026.',
      conference: 'European Conference on Computing in Construction.',
      authors: 'Dynzatec AB in collaboration with Chalmers University of Technology.',
    },
    stats: {
      kicker: 'RESULTS',
      items: [
        { value: '0.015 s', label: 'inference per design (GPU)' },
        { value: '7.25 %', label: 'L2 deviation against FEM' },
        { value: '60 155', label: 'validation points' },
      ],
    },
    meaning: {
      kicker: 'WHAT IT MEANS',
      title: 'What it means',
      body: 'A trained model predicts deflection across an entire parametric design space without meshing. That opens up optimisation where the engineer tests hundreds of configurations instead of a handful.',
    },
    roadmap: {
      kicker: 'ROADMAP',
      title: 'The road ahead',
      steps: [
        'Published research and live demo (done).',
        'Full parametric model.',
        'Parametric portal frame: our first commercial tool.',
      ],
    },
    cta: {
      title: 'Want to follow the research or discuss a pilot collaboration? Get in touch.',
      body: 'The live demo shows where the research stands today.',
      button: 'Get in touch',
    },
  },
  about: {
    kicker: 'ABOUT',
    h1: 'Two engineers and a researcher.',
    intro:
      'Dynzatec was founded in Gothenburg by two engineers and a researcher who grew tired of waiting for the future.',
    teamTitle: 'The team',
    linkedinLabel: 'LinkedIn',
    teamKicker: 'TEAM',
    team: [
      {
        name: 'Omar Alzokani',
        role: 'Co-founder & CEO',
        photo: '/team/omar.jpg',
        linkedin: 'https://www.linkedin.com/in/omar-alzokani-3bb5271b8',
        bio: 'Serial entrepreneur with an MSc from Chalmers. Has built and runs several companies in B2B and tech. Responsible for business, delivery and partnerships.',
      },
      {
        name: 'Ahmad Arafat',
        role: 'Co-founder & CTO',
        photo: '/team/ahmad.jpg',
        linkedin: 'https://www.linkedin.com/in/ahmad-arafat-90/',
        bio: 'Structural engineer and researcher. Lead developer of the Dynzatec VPINN framework and co-author of the EC3 paper. Responsible for computational models and quality review.',
      },
      {
        name: 'Dimosthenis Kifokeris',
        role: 'Board member',
        photo: '/team/dimos.jpg',
        linkedin: 'https://www.linkedin.com/in/dimoskifokeris/',
        bio: 'Associate Professor in Construction Management and Production at Chalmers University of Technology, Director of PhD Studies and Secretary of the Board at the European Council for Computing in Construction (EC3). Co-author of the EC3 paper.',
      },
    ],
    cta: {
      title: 'Want to work with us, or hear more about the research?',
      body: 'You speak directly with the engineer doing the calculations.',
      button: 'Book a call',
    },
  },
}
