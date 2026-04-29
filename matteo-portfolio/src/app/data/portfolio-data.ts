export type Language = 'it' | 'en';

export interface Profile {
  name: string;
  role: string;
  headline: string;
  intro: string;
  location: string;
  availability: string;
  resumeUrl: string;
}

export interface JourneyMilestone {
  period: string;
  title: string;
  place: string;
  location: string;
  description: string;
  highlights: string[];
  technologies?: string[];
}

export interface SkillGroup {
  title: string;
  summary: string;
  skills: string[];
}

export interface Project {
  name: string;
  description: string;
  stack: string[];
  status: string;
  siteUrl?: string;
  siteLabel?: string;
}

export interface Contact {
  label: string;
  value: string;
  href: string;
}

export interface PortfolioUi {
  skipLink: string;
  languageLabel: string;
  languages: Record<Language, string>;
  hero: {
    actionsLabel: string;
    primaryCta: string;
    projectsCta: string;
    noteLabel: string;
    scrollLabel: string;
  };
  sections: {
    about: { eyebrow: string; description: string; traitsLabel: string };
    road: { eyebrow: string; title: string; description: string; mapLabel: string; svgTitle: string; svgDescription: string };
    education: { eyebrow: string; title: string; description: string; technologiesLabel: string };
    work: { eyebrow: string; title: string; description: string; technologiesLabel: string };
    skills: { eyebrow: string; title: string; description: string };
    projects: { eyebrow: string; title: string; description: string; stackLabel: string };
    contact: { eyebrow: string; title: string };
  };
  footer: {
    text: string;
    backToTop: string;
  };
}

export interface PortfolioData {
  ui: PortfolioUi;
  profile: Profile;
  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    traits: string[];
  };
  storyMilestones: JourneyMilestone[];
  education: JourneyMilestone[];
  work: JourneyMilestone[];
  skills: SkillGroup[];
  projects: Project[];
  contacts: Contact[];
}

const commonContacts = {
  email: {
    label: 'Email',
    value: 'matteo.mazzari17@gmail.com',
    href: 'mailto:matteo.mazzari17@gmail.com',
  },
  phoneIt: {
    label: 'Telefono',
    value: '+39 333 842 9217',
    href: 'tel:+393338429217',
  },
  phoneEn: {
    label: 'Phone',
    value: '+39 333 842 9217',
    href: 'tel:+393338429217',
  },
};

export const portfolioContent: Record<Language, PortfolioData> = {
  it: {
    ui: {
      skipLink: 'Salta al contenuto',
      languageLabel: 'Lingua del sito',
      languages: { it: 'IT', en: 'EN' },
      hero: {
        actionsLabel: 'Azioni principali',
        primaryCta: 'Contatti e CV',
        projectsCta: 'Vedi progetti',
        noteLabel: 'Disponibilita',
        scrollLabel: 'Vai al percorso',
      },
      sections: {
        about: {
          eyebrow: 'Capitolo I',
          description: 'Chi sono, cosa sto costruendo e come si è evoluto il mio percorso.',
          traitsLabel: 'Tratti distintivi',
        },
        road: {
          eyebrow: 'La strada',
          title: 'Il filo conduttore del viaggio',
          description: 'Una mappa compatta delle tappe principali: studio, pratica, lavoro e crescita tecnica.',
          mapLabel: 'Mappa del percorso professionale',
          svgTitle: 'Percorso professionale',
          svgDescription: 'Una strada curva collega le tappe del percorso di Matteo Mazzari.',
        },
        education: {
          eyebrow: 'Capitolo II',
          title: 'Studi',
          description: 'Le fondamenta del percorso: metodo, teoria e primi strumenti per costruire software con criterio.',
          technologiesLabel: 'Tecnologie studiate',
        },
        work: {
          eyebrow: 'Capitolo III',
          title: 'Esperienza lavorativa',
          description: 'Ogni ruolo come una tappa: problemi concreti, responsabilita crescenti e strumenti scelti con pragmatismo.',
          technologiesLabel: 'Tecnologie usate',
        },
        skills: {
          eyebrow: 'Capitolo IV',
          title: 'Competenze',
          description: 'Una costellazione di strumenti tecnici e qualità trasversali che uso per dare forma ai prodotti.',
        },
        projects: {
          eyebrow: 'Capitolo V',
          title: 'Progetti',
          description: 'Scene concrete del viaggio: prodotti, prototipi e case study collegati al mio percorso reale.',
          stackLabel: 'Stack del progetto',
        },
        contact: {
          eyebrow: 'Epilogo',
          title: 'Costruiamo la prossima tappa',
        },
      },
      footer: {
        text: 'Portfolio narrativo realizzato in Angular.',
        backToTop: 'Torna all’inizio',
      },
    },
    profile: {
      name: 'Matteo Mazzari',
      role: 'Software Developer · Frontend & Mobile',
      headline: 'Sviluppo applicazioni web e mobile con un focus concreto su frontend, Angular ed esperienze digitali solide.',
      intro:
        'Il mio percorso unisce studio universitario in informatica, diploma tecnico e lavoro sul campo: da applicazioni enterprise web e mobile a siti pubblici curati dall’analisi iniziale al rilascio online.',
      location: 'Genova, Italia',
      availability: 'Sviluppatore software presso CIMA Research Foundation, orientato a frontend, web app e mobile app.',
      resumeUrl: '#contact',
    },
    about: {
      eyebrow: 'Prologo',
      title: 'Dal diploma tecnico alle applicazioni web e mobile',
      paragraphs: [
        'Sono uno sviluppatore software orientato al front-end. Dopo il diploma presso l’I.I.S. Calvino nell’indirizzo Informatica e Telecomunicazioni, articolazione Informatica, ho proseguito il percorso con la Laurea Triennale in Scienze e Tecnologie Informatiche all’Università di Genova.',
        'Dal 2022 lavoro su applicazioni web e mobile, usando tecnologie come Angular, Ionic, React, React Native, TypeScript e Swift. Ho maturato esperienza su versionamento Git, repository condivisi, pubblicazione mobile e sviluppo di interfacce pensate per utenti reali.',
        'Accanto alle esperienze aziendali, ho realizzato il sito dell’Istituto di Moda Genova seguendo l’intero processo: analisi delle esigenze, progettazione grafica, sviluppo, hosting, rilascio online, ottimizzazione mobile e SEO di base.',
      ],
      traits: ['Frontend development', 'Mobile app', 'Git workflow', 'Approccio end-to-end'],
    },
    storyMilestones: [
      {
        period: '20/07/2017',
        title: 'Diploma in Informatica e Telecomunicazioni',
        place: 'I.I.S. Calvino',
        location: 'Italia',
        description: 'Diploma in Informatica e Telecomunicazioni, articolazione Informatica.',
        highlights: ['Perito Informatico'],
        technologies: ['Programmazione', 'Reti'],
      },
      {
        period: '23/11/2018',
        title: 'Inglese B1',
        place: 'Cambridge Assessment English',
        location: 'Genova, Italia',
        description: 'Certificazione di lingua inglese conseguita nel primo anno universitario.',
        highlights: ['B1', 'Cambridge'],
        technologies: ['English B1'],
      },
      {
        period: '01/10/2018 - in corso',
        title: 'Scienze e Tecnologie Informatiche',
        place: 'Università degli Studi di Genova',
        location: 'Genova, Italia',
        description: 'Laurea Triennale in Scienze e Tecnologie Informatiche.',
        highlights: ['Scienze informatiche'],
        technologies: ['Software development'],
      },
      {
        period: '02/10/2022 - 02/04/2025',
        title: 'Sviluppatore software',
        place: 'Liguria Consulting Solutions',
        location: 'Genova, Italia',
        description: 'Sviluppo software su applicazioni web e mobile.',
        highlights: ['Mobile app', 'Web app'],
        technologies: ['Angular', 'Ionic', 'React Native'],
      },
      {
        period: '01/12/2023 - 01/02/2024',
        title: 'Istituto di Moda Genova',
        place: 'Progetto web end-to-end',
        location: 'Genova, Italia',
        description: 'Realizzazione del sito dall’analisi delle esigenze al rilascio online.',
        highlights: ['Frontend', 'Hosting', 'SEO base'],
        technologies: ['Responsive design'],
      },
      {
        period: '03/04/2025 - attuale',
        title: 'Sviluppatore software',
        place: 'CIMA Research Foundation',
        location: 'Savona, Italia',
        description: 'Sviluppo applicazioni web e mobile in contesto tecnico e di ricerca.',
        highlights: ['Angular', 'Ionic', 'Git workflow'],
        technologies: ['Angular', 'Ionic', 'Git'],
      },
    ],
    education: [
      {
        period: '20/07/2017',
        title: 'Diploma in Informatica e Telecomunicazioni',
        place: 'I.I.S. Calvino · articolazione Informatica',
        location: 'Genova, Italia',
        description:
          'Ho conseguito il diploma tecnico con qualifica di Perito Informatico, costruendo le prime basi concrete in programmazione, sistemi informatici e reti.',
        highlights: ['Perito Informatico', 'Informatica', 'Telecomunicazioni', 'Fondamenta tecniche'],
        technologies: ['Programmazione', 'Sistemi informatici', 'Reti'],
      },
      {
        period: '23/11/2018',
        title: 'Qualifica di Lingua Inglese B1',
        place: 'Cambridge Assessment English',
        location: 'Genova, Italia',
        description:
          'Ho conseguito la certificazione B1 di lingua inglese, una competenza utile nel lavoro con documentazione tecnica, strumenti internazionali e team di sviluppo.',
        highlights: ['Inglese B1', 'Cambridge Assessment English', 'Livello EQF 2'],
        technologies: ['English B1'],
      },
      {
        period: '01/10/2018 - in corso',
        title: 'Laurea Triennale in Scienze e Tecnologie Informatiche',
        place: 'Università degli Studi di Genova',
        location: 'Genova, Italia',
        description:
          'Sto portando avanti un percorso universitario in ambito informatico che rafforza metodo, ragionamento tecnico e capacità di progettazione software.',
        highlights: ['Scienze informatiche', 'Metodo di analisi', 'Progettazione software', 'Percorso universitario in corso'],
        technologies: ['Informatica', 'Software development', 'Problem solving'],
      },
    ],
    work: [
      {
        period: '02/10/2022 - 02/04/2025',
        title: 'Sviluppatore di software',
        place: 'LCS · Liguria Consulting Solutions srl',
        location: 'Genova, Italia',
        description:
          'Ho lavorato su applicazioni mobile e web, usando framework frontend e mobile, linguaggi moderni, strumenti di sviluppo nativi e processi di pubblicazione su store. In questo percorso ho avuto anche occasione di lavorare a contatto con realtà strutturate come Leonardo S.p.A.',
        highlights: [
          'Sviluppo di applicazioni mobile iOS e Android',
          'Sviluppo di applicativi web',
          'Utilizzo di Angular, Ionic, React e React Native',
          'Pubblicazione di applicazioni su App Store e Play Store',
          'Gestione repository e flussi Git collaborativi',
        ],
        technologies: ['Angular', 'Ionic', 'React', 'React Native', 'JavaScript', 'TypeScript', 'Swift', 'Xcode', 'Android Studio', 'Git'],
      },
      {
        period: '03/04/2025 - attuale',
        title: 'Sviluppatore di software',
        place: 'CIMA Research Foundation',
        location: 'Savona, Italia',
        description:
          'Sviluppo applicazioni web e mobile in un contesto tecnico e di ricerca, con attenzione a framework frontend, librerie UI, integrazione di strumenti AI e gestione collaborativa del codice.',
        highlights: [
          'Sviluppo di applicativi web',
          'Utilizzo di Angular e librerie CSS/UI come Angular Material e Bootstrap',
          'Sviluppo di applicazioni Ionic/Angular',
          'Uso di Git con branching, merging, pull request e repository su GitHub, GitLab e Bitbucket',
        ],
        technologies: ['Angular', 'Ionic', 'Angular Material', 'Bootstrap', 'AI tools', 'Git', 'GitHub', 'GitLab', 'Bitbucket'],
      },
    ],
    skills: [
      {
        title: 'Frontend e web',
        summary: 'Tecnologie usate per costruire interfacce web, applicativi frontend e UI responsive.',
        skills: ['Angular', 'TypeScript', 'JavaScript', 'Angular Material', 'Bootstrap', 'CSS', 'Web app', 'Responsive UI'],
      },
      {
        title: 'Mobile e strumenti',
        summary: 'Esperienza su sviluppo mobile cross-platform e strumenti nativi di pubblicazione e sviluppo.',
        skills: ['Ionic', 'Ionic/Angular', 'React Native', 'React', 'Swift', 'iOS', 'Android', 'Xcode', 'Android Studio', 'App Store', 'Play Store'],
      },
      {
        title: 'Workflow e collaborazione',
        summary: 'Strumenti e pratiche per lavorare in team su codice condiviso e progetti evolutivi.',
        skills: ['Git', 'Branching', 'Merging', 'Pull Request', 'GitHub', 'GitLab', 'Bitbucket', 'Repository management'],
      },
      {
        title: 'Intelligenza artificiale',
        summary: 'Utilizzo strumenti AI come supporto al lavoro tecnico, alla produttività e all’analisi di problemi complessi.',
        skills: ['Prompting', 'Supporto allo sviluppo', 'Analisi codice', 'Debug assistito', 'Documentazione tecnica', 'Ottimizzazione workflow'],
      },
      {
        title: 'Competenze trasversali',
        summary: 'Qualità professionali maturate tra lavoro su progetto, delivery e rapporto con esigenze reali.',
        skills: ['Problem solving', 'Autonomia', 'Analisi esigenze cliente', 'Cura del dettaglio', 'Adattabilità', 'Apprendimento continuo'],
      },
    ],
    projects: [
      {
        name: 'Applicazioni mobile e web · LCS',
        description:
          'Esperienza su applicazioni mobile iOS/Android e applicativi web, con framework Angular, Ionic, React, React Native, linguaggi JavaScript, TypeScript e Swift, strumenti Xcode e Android Studio, pubblicazione su store e gestione Git.',
        stack: ['Angular', 'Ionic', 'React', 'React Native', 'TypeScript', 'Swift', 'Xcode', 'Android Studio'],
        status: 'Esperienza professionale',
      },
      {
        name: 'Istituto di Moda Genova',
        description:
          'Sito web realizzato seguendo l’intero processo: analisi delle esigenze del cliente, progettazione grafica, sviluppo del codice, configurazione dell’hosting, rilascio online, ottimizzazione per dispositivi mobili e SEO di base.',
        stack: ['Web design', 'Frontend development', 'Responsive design', 'Hosting', 'SEO base'],
        status: '01/12/2023 - 01/02/2024',
        siteUrl: 'https://www.istitutomodagenova.it/',
        siteLabel: 'Visita il sito',
      },
      {
        name: 'Applicazioni web · CIMA Research Foundation',
        description:
          'Attivita professionale su applicativi web e soluzioni Ionic/Angular, con utilizzo di Angular, librerie UI, strumenti AI e flussi Git collaborativi.',
        stack: ['Angular', 'Ionic', 'Angular Material', 'Bootstrap', 'Git', 'AI tools'],
        status: 'Esperienza professionale',
      },
    ],
    contacts: [
      commonContacts.email,
      commonContacts.phoneIt,
      { label: 'LinkedIn', value: 'matteo-mazzari-840252207', href: 'https://www.linkedin.com/in/matteo-mazzari-840252207' },
      { label: 'GitHub', value: 'Repository disponibili su richiesta', href: '#contact' },
    ],
  },
  en: {
    ui: {
      skipLink: 'Skip to content',
      languageLabel: 'Site language',
      languages: { it: 'IT', en: 'EN' },
      hero: {
        actionsLabel: 'Primary actions',
        primaryCta: 'Contacts and CV',
        projectsCta: 'View projects',
        noteLabel: 'Availability',
        scrollLabel: 'Go to the journey',
      },
      sections: {
        about: {
          eyebrow: 'Chapter I',
          description: 'Who I am, what I’m building, and how my path has evolved.',
          traitsLabel: 'Distinctive traits',
        },
        road: {
          eyebrow: 'The road',
          title: 'The thread running through the journey',
          description: 'A compact map of the main milestones: education, practice, work and technical growth.',
          mapLabel: 'Professional journey map',
          svgTitle: 'Professional journey',
          svgDescription: 'A curved road connects Matteo Mazzari’s career milestones.',
        },
        education: {
          eyebrow: 'Chapter II',
          title: 'Education',
          description: 'The foundations of the journey: method, theory and the first tools for building software with intent.',
          technologiesLabel: 'Studied technologies',
        },
        work: {
          eyebrow: 'Chapter III',
          title: 'Work experience',
          description: 'Every role as a milestone: concrete problems, growing responsibility and pragmatic technical choices.',
          technologiesLabel: 'Technologies used',
        },
        skills: {
          eyebrow: 'Chapter IV',
          title: 'Skills',
          description: 'A constellation of technical tools and transversal qualities I use to shape digital products.',
        },
        projects: {
          eyebrow: 'Chapter V',
          title: 'Projects',
          description: 'Concrete scenes from the journey: products, prototypes and case studies connected to my real experience.',
          stackLabel: 'Project stack',
        },
        contact: {
          eyebrow: 'Epilogue',
          title: 'Let’s build the next milestone',
        },
      },
      footer: {
        text: 'Narrative portfolio built with Angular.',
        backToTop: 'Back to top',
      },
    },
    profile: {
      name: 'Matteo Mazzari',
      role: 'Software Developer · Frontend & Mobile',
      headline: 'I build web and mobile applications with a concrete focus on frontend, Angular and solid digital experiences.',
      intro:
        'My path combines university studies in computer science, a technical diploma and hands-on work: from enterprise web and mobile applications to public websites managed from analysis to release.',
      location: 'Genoa, Italy',
      availability: 'Software Developer at CIMA Research Foundation, focused on frontend, web apps and mobile apps.',
      resumeUrl: '#contact',
    },
    about: {
      eyebrow: 'Prologue',
      title: 'From technical education to web and mobile applications',
      paragraphs: [
        'I am a software developer with a frontend-oriented profile. After graduating from I.I.S. Calvino in Computer Science and Telecommunications, Computer Science track, I continued with a Bachelor’s Degree in Computer Science and Technologies at the University of Genoa.',
        'Since 2022 I have worked on web and mobile applications using technologies such as Angular, Ionic, React, React Native, TypeScript and Swift. I have gained experience with Git versioning, shared repositories, mobile publishing and interfaces designed for real users.',
        'Alongside company work, I built the website for Istituto di Moda Genova, covering the full process: requirements analysis, visual design, development, hosting, online release, mobile optimization and basic SEO.',
      ],
      traits: ['Frontend development', 'Mobile apps', 'Git workflow', 'End-to-end approach'],
    },
    storyMilestones: [
      {
        period: '20/07/2017',
        title: 'Diploma in Computer Science and Telecommunications',
        place: 'I.I.S. Calvino',
        location: 'Italy',
        description: 'Diploma in Computer Science and Telecommunications, Computer Science track.',
        highlights: ['IT technician qualification'],
        technologies: ['Programming', 'Networks'],
      },
      {
        period: '23/11/2018',
        title: 'English B1',
        place: 'Cambridge Assessment English',
        location: 'Genoa, Italy',
        description: 'English language certification completed during the first university year.',
        highlights: ['B1', 'Cambridge'],
        technologies: ['English B1'],
      },
      {
        period: '01/10/2018 - ongoing',
        title: 'Computer Science and Technologies',
        place: 'University of Genoa',
        location: 'Genoa, Italy',
        description: 'Bachelor’s Degree in Computer Science and Technologies.',
        highlights: ['Computer science'],
        technologies: ['Software development'],
      },
      {
        period: '02/10/2022 - 02/04/2025',
        title: 'Software Developer',
        place: 'Liguria Consulting Solutions',
        location: 'Genoa, Italy',
        description: 'Software development on web and mobile applications.',
        highlights: ['Mobile apps', 'Web apps'],
        technologies: ['Angular', 'Ionic', 'React Native'],
      },
      {
        period: '01/12/2023 - 01/02/2024',
        title: 'Istituto di Moda Genova',
        place: 'End-to-end web project',
        location: 'Genoa, Italy',
        description: 'Website delivery from requirements analysis to online release.',
        highlights: ['Frontend', 'Hosting', 'Basic SEO'],
        technologies: ['Responsive design'],
      },
      {
        period: '03/04/2025 - present',
        title: 'Software Developer',
        place: 'CIMA Research Foundation',
        location: 'Savona, Italy',
        description: 'Web and mobile application development in a technical and research context.',
        highlights: ['Angular', 'Ionic', 'Git workflow'],
        technologies: ['Angular', 'Ionic', 'Git'],
      },
    ],
    education: [
      {
        period: '20/07/2017',
        title: 'Diploma in Computer Science and Telecommunications',
        place: 'I.I.S. Calvino · Computer Science track',
        location: 'Genoa, Italy',
        description:
          'I earned a technical diploma with IT technician qualification, building my first concrete foundations in programming, information systems and networks.',
        highlights: ['IT technician qualification', 'Computer science', 'Telecommunications', 'Technical foundations'],
        technologies: ['Programming', 'Information systems', 'Networks'],
      },
      {
        period: '23/11/2018',
        title: 'English Language Qualification B1',
        place: 'Cambridge Assessment English',
        location: 'Genoa, Italy',
        description:
          'I earned a B1 English certification, a useful skill for working with technical documentation, international tools and development teams.',
        highlights: ['English B1', 'Cambridge Assessment English', 'EQF level 2'],
        technologies: ['English B1'],
      },
      {
        period: '01/10/2018 - ongoing',
        title: 'Bachelor’s Degree in Computer Science and Technologies',
        place: 'University of Genoa',
        location: 'Genoa, Italy',
        description:
          'I am continuing a university path in computer science that strengthens method, technical reasoning and software design skills.',
        highlights: ['Computer science', 'Analytical method', 'Software design', 'Ongoing university path'],
        technologies: ['Computer science', 'Software development', 'Problem solving'],
      },
    ],
    work: [
      {
        period: '02/10/2022 - 02/04/2025',
        title: 'Software Developer',
        place: 'LCS · Liguria Consulting Solutions srl',
        location: 'Genoa, Italy',
        description:
          'I worked on mobile and web applications using frontend and mobile frameworks, modern languages, native development tools and store publishing workflows. During this experience I also had the opportunity to work in contact with structured organizations such as Leonardo S.p.A.',
        highlights: [
          'iOS and Android mobile application development',
          'Web application development',
          'Use of Angular, Ionic, React and React Native',
          'Publication of applications on App Store and Play Store',
          'Repository management and collaborative Git workflows',
        ],
        technologies: ['Angular', 'Ionic', 'React', 'React Native', 'JavaScript', 'TypeScript', 'Swift', 'Xcode', 'Android Studio', 'Git'],
      },
      {
        period: '03/04/2025 - present',
        title: 'Software Developer',
        place: 'CIMA Research Foundation',
        location: 'Savona, Italy',
        description:
          'Development of web and mobile applications in a technical and research-oriented context, with attention to frontend frameworks, UI libraries, AI tools and collaborative code management.',
        highlights: [
          'Web application development',
          'Use of Angular and CSS/UI libraries such as Angular Material and Bootstrap',
          'Ionic/Angular application development',
          'Git workflow with branching, merging, pull requests and repositories on GitHub, GitLab and Bitbucket',
        ],
        technologies: ['Angular', 'Ionic', 'Angular Material', 'Bootstrap', 'AI tools', 'Git', 'GitHub', 'GitLab', 'Bitbucket'],
      },
    ],
    skills: [
      {
        title: 'Frontend and web',
        summary: 'Technologies used to build web interfaces, frontend applications and responsive UIs.',
        skills: ['Angular', 'TypeScript', 'JavaScript', 'Angular Material', 'Bootstrap', 'CSS', 'Web app', 'Responsive UI'],
      },
      {
        title: 'Mobile and tools',
        summary: 'Experience with cross-platform mobile development and native development and publishing tools.',
        skills: ['Ionic', 'Ionic/Angular', 'React Native', 'React', 'Swift', 'iOS', 'Android', 'Xcode', 'Android Studio', 'App Store', 'Play Store'],
      },
      {
        title: 'Workflow and collaboration',
        summary: 'Tools and practices for working in teams on shared codebases and evolving projects.',
        skills: ['Git', 'Branching', 'Merging', 'Pull Request', 'GitHub', 'GitLab', 'Bitbucket', 'Repository management'],
      },
      {
        title: 'Artificial intelligence',
        summary: 'I use AI tools as support for technical work, productivity and analysis of complex problems.',
        skills: ['Prompting', 'Development support', 'Code analysis', 'Assisted debugging', 'Technical documentation', 'Workflow optimization'],
      },
      {
        title: 'Transversal skills',
        summary: 'Professional qualities developed through project work, delivery and real requirements.',
        skills: ['Problem solving', 'Autonomy', 'Requirements analysis', 'Attention to detail', 'Adaptability', 'Continuous learning'],
      },
    ],
    projects: [
      {
        name: 'Mobile and web applications · LCS',
        description:
          'Experience on iOS/Android mobile applications and web applications, with Angular, Ionic, React, React Native, JavaScript, TypeScript and Swift, using Xcode and Android Studio, store publishing and Git management.',
        stack: ['Angular', 'Ionic', 'React', 'React Native', 'TypeScript', 'Swift', 'Xcode', 'Android Studio'],
        status: 'Professional experience',
      },
      {
        name: 'Istituto di Moda Genova',
        description:
          'Website built by following the full process: client requirements analysis, visual design, code development, hosting configuration, online release, mobile optimization and basic SEO.',
        stack: ['Web design', 'Frontend development', 'Responsive design', 'Hosting', 'Basic SEO'],
        status: '01/12/2023 - 01/02/2024',
        siteUrl: 'https://www.istitutomodagenova.it/',
        siteLabel: 'Visit website',
      },
      {
        name: 'Web applications · CIMA Research Foundation',
        description:
          'Professional work on web applications and Ionic/Angular solutions, using Angular, UI libraries, AI tools and collaborative Git workflows.',
        stack: ['Angular', 'Ionic', 'Angular Material', 'Bootstrap', 'Git', 'AI tools'],
        status: 'Professional experience',
      },
    ],
    contacts: [
      commonContacts.email,
      commonContacts.phoneEn,
      { label: 'LinkedIn', value: 'matteo-mazzari-840252207', href: 'https://www.linkedin.com/in/matteo-mazzari-840252207' },
      { label: 'GitHub', value: 'Repositories available upon request', href: '#contact' },
    ],
  },
};

export const portfolioData = portfolioContent.it;
