export const projects = [
  {
    id: "project-1",
    title: "Auto-RT — RedTrack & ClickUp Campaign Automation",
    titlePt: "Auto-RT — Automação de Campanhas RedTrack & ClickUp",
    description:
      "Personal automation project. Python + Playwright tool that automates the full setup of Direct Response tracking campaigns: creates the tracking domain, duplicates traffic-channel templates, generates pre-landers and landers with standardized naming, and mirrors the campaign in ClickUp with country/device filters. Includes a Flask web interface with real-time logs and campaign history.",
    descriptionPt:
      "Projeto pessoal de automação. Ferramenta em Python + Playwright que automatiza toda a criação de campanhas de rastreamento para Direct Response: cria o domínio de rastreamento, duplica templates de Traffic Channel, gera pré-landers e landers com nomenclatura padronizada, e replica a campanha no ClickUp com filtros de país/dispositivo. Inclui uma interface web em Flask com logs em tempo real e histórico de campanhas.",
    imageUrl: "/image/auto-rt.png",
    year: 2026,
    technologies: ["Python", "Playwright", "Flask", "SQLite"],
  },
  {
    id: "project-2",
    title: "Domain Automation — GoDaddy",
    titlePt: "Automação de Domínios — GoDaddy",
    description:
      "Personal automation project. Modular Python CLI/API tool that automates the domain lifecycle for marketing campaigns: generates domain name ideas, checks availability, registers the domain and configures its DNS directly through the GoDaddy API, and deploys landing pages over FTP. Human confirmation is required for any step involving CAPTCHA or account consent, by design.",
    descriptionPt:
      "Projeto pessoal de automação. Ferramenta modular em Python (CLI/API) que automatiza o ciclo de vida de domínios para campanhas de marketing: gera ideias de nomes de domínio, verifica disponibilidade, registra o domínio e configura o DNS diretamente pela API da GoDaddy, e publica landing pages via FTP. A confirmação humana é exigida em qualquer etapa que envolva CAPTCHA ou consentimento de conta, por design.",
    imageUrl: "/image/domain-automation.png",
    year: 2026,
    technologies: ["Python", "GoDaddy API", "Playwright", "Docker"],
  },
  {
    id: "project-3",
    title: "ARKx Website",
    titlePt: "Site da ARKx",
    description:
      "Development and continuous improvement of the ARKx company website, focused on responsive design, performance and an immersive user experience. Built reusable components integrating React Three Fiber for interactive 3D/WebGL elements, smooth-scroll and motion with GSAP, Framer Motion and Lenis, multi-language support with i18next, and a contact flow powered by an Express backend.",
    descriptionPt:
      "Desenvolvimento e melhoria contínua do site da empresa ARKx, com foco em design responsivo, performance e uma experiência de usuário imersiva. Componentes reutilizáveis construídos com React Three Fiber para elementos 3D/WebGL interativos, scroll suave e animações com GSAP, Framer Motion e Lenis, suporte a múltiplos idiomas com i18next, e um fluxo de contato com backend em Express.",
    imageUrl: "/image/arkx-portfolio.png",
    demoUrl: "https://arkx.cc/",
    year: 2026,
    technologies: [
      "React",
      "Three.js",
      "React Three Fiber",
      "GSAP",
      "Framer Motion",
      "i18next",
      "Express",
      "Vite",
    ],
  },
  {
    id: "project-4",
    title: "Corona Bottle AR Experience",
    titlePt: "Experiência de AR — Garrafa Corona",
    description:
      "Private client project. WebAR prototype built with 8th Wall using Image Target tracking to anchor interactive 3D content to a real-world Corona bottle, creating an augmented reality brand experience directly in the browser, with no app install required.",
    descriptionPt:
      "Projeto privado para cliente. Protótipo de WebAR construído com 8th Wall usando rastreamento de Image Target para ancorar conteúdo 3D interativo em uma garrafa real da Corona, criando uma experiência de realidade aumentada de marca direto no navegador, sem necessidade de instalar app.",
    imageUrl: "/image/corona-bottle.png",
    year: 2026,
    technologies: ["8th Wall", "WebAR", "TypeScript", "Webpack"],
  },
  {
    id: "project-5",
    title: "HBT Candy Game (Aleda)",
    titlePt: "HBT Candy Game (Aleda)",
    description:
      "Private client project. Interactive candy-themed web game developed for Aleda, featuring animated illustrations, swipeable views and a Supabase-powered backend for managing game data and user interactions.",
    descriptionPt:
      "Projeto privado para cliente. Jogo web interativo com tema de doces desenvolvido para a Aleda, com ilustrações animadas, views deslizantes e um backend com Supabase para gerenciar dados do jogo e interações dos usuários.",
    imageUrl: "/image/hbt-candygame.png",
    year: 2026,
    technologies: ["React", "Material UI", "Supabase", "Recoil", "Anime.js", "Vite"],
  },
  {
    id: "project-6",
    title: "Hot Wheels Miniature Generator",
    titlePt: "Gerador de Miniaturas Hot Wheels",
    description:
      "Private client project. Mobile-first tool developed for a Fiat × Hot Wheels campaign that turns a photo of a car into a stylized Hot Wheels package using generative AI, and renders an interactive 3D miniature of the car directly in the browser with Three.js.",
    descriptionPt:
      "Projeto privado para cliente. Ferramenta mobile-first desenvolvida para uma campanha Fiat × Hot Wheels que transforma a foto de um carro em uma embalagem estilizada da Hot Wheels usando IA generativa, e renderiza uma miniatura 3D interativa do carro direto no navegador com Three.js.",
    imageUrl: "/image/hotwheels-miniature.png",
    year: 2026,
    technologies: ["React", "Three.js", "Express", "Generative AI (Gemini)", "Vite"],
  },
  {
    id: "project-7",
    title: "Michelob × USA",
    titlePt: "Michelob × USA",
    description:
      "Private client project. WebAR brand experience for the Michelob × USA 'Part of The Game' campaign, built with 8th Wall for markerless XR tracking and Three.js for real-time 3D rendering, including animated 3D text and camera controls for an immersive mobile experience.",
    descriptionPt:
      "Projeto privado para cliente. Experiência de WebAR para a campanha Michelob × USA 'Part of The Game', construída com 8th Wall para rastreamento XR sem marcadores e Three.js para renderização 3D em tempo real, incluindo texto 3D animado e controles de câmera para uma experiência mobile imersiva.",
    imageUrl: "/image/michelob-usa.png",
    year: 2026,
    technologies: ["Vue.js", "Three.js", "8th Wall", "GSAP"],
  },
  {
    id: "project-8",
    title: "Vista Balsa",
    titlePt: "Vista Balsa",
    description:
      "Private client project. AI-powered fashion catalog generator: users upload a model reference and product photos, and the tool generates styled catalog images, with built-in cropping tools and batch export to a ZIP file.",
    descriptionPt:
      "Projeto privado para cliente. Gerador de catálogo de moda com IA: o usuário envia uma foto de referência do modelo e fotos do produto, e a ferramenta gera imagens de catálogo estilizadas, com ferramentas de recorte integradas e exportação em lote para um arquivo ZIP.",
    imageUrl: "/image/ai-stylist.png",
    year: 2026,
    technologies: ["React", "Express", "TypeScript", "Tailwind", "JSZip"],
  },
  {
    id: "project-9",
    title: "Fiat Pulse Abarth × Stranger Things",
    titlePt: "Fiat Pulse Abarth × Stranger Things",
    description:
      "Private client project. Promotional campaign landing page for the Fiat Pulse Abarth × Stranger Things partnership, built with Next.js and focused on immersive storytelling, animated sections and smooth scroll interactions to showcase the car and the crossover theme.",
    descriptionPt:
      "Projeto privado para cliente. Landing page de campanha promocional para a parceria Fiat Pulse Abarth × Stranger Things, construída com Next.js e focada em storytelling imersivo, seções animadas e interações de scroll suave para apresentar o carro e o tema do crossover.",
    imageUrl: "/image/fiat-abarth-strangerthings.png",
    year: 2025,
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "GSAP",
      "TanStack Query",
      "Formik",
    ],
  },
  {
    id: "project-10",
    title: "Vistori Piracicaba WebSite",
    titlePt: "Site da Vistori Piracicaba",
    description:
      "Development of a responsive and intuitive website for Vistori Piracicaba, focused on the clear presentation of vehicle inspection and placement services, with easy navigation for users.",
    descriptionPt:
      "Desenvolvimento de um site responsivo e intuitivo para a Vistori Piracicaba, focado na apresentação clara dos serviços de vistoria e emplacamento de veículos, com navegação facilitada para os usuários.",
    imageUrl: "/image/vistori.jpeg",
    demoUrl: "https://www.vistoripiracicaba.com.br/",
    githubUrl: "https://github.com/LauraSchiavon/vistoriPiracicabaWebSite",
    year: 2025,
    technologies: ["React", "Vite", "Tailwind", "JavaScript"],
  },
  {
    id: "project-11",
    title: "Vistori Louveira WebSite",
    titlePt: "Site da Vistori Louveira",
    description:
      "Development of a responsive website for Vistori Louveira, focused on the clear presentation of vehicle inspection services, with WhatsApp contact integration and an appointment-scheduling modal connected to a Make.com automation webhook.",
    descriptionPt:
      "Desenvolvimento de um site responsivo para a Vistori Louveira, focado na apresentação clara dos serviços de vistoria veicular, com integração de contato via WhatsApp e um modal de agendamento conectado a uma automação via webhook do Make.com.",
    imageUrl: "/image/vistori-louveira.jpeg",
    year: 2025,
    technologies: ["React", "Vite", "TypeScript", "Tailwind"],
  },
  {
    id: "project-12",
    title: "PlacaNew WebSite",
    titlePt: "Site da PlacaNew",
    description:
      "Development of the Placa New website with a modern and functional design, highlighting the registration and regularization services, with a layout optimized for mobile devices and desktop.",
    descriptionPt:
      "Desenvolvimento do site da Placa New com um design moderno e funcional, destacando os serviços de emplacamento e regularização, com um layout otimizado para dispositivos móveis e desktop.",
    imageUrl: "/image/placanew.jpeg",
    demoUrl: "https://www.placanewpiracicaba.com/",
    githubUrl: "https://github.com/LauraSchiavon/placaNewWebSite",
    year: 2025,
    technologies: ["React", "Vite", "Tailwind", "JavaScript"],
  },
  {
    id: "project-13",
    title: "Organo Alura",
    titlePt: "Organo Alura",
    description:
      "creation of an application from scratch, which manages Alura employees.",
    descriptionPt: "criação de uma aplicação do zero, que gerencia os funcionários da Alura.",
    imageUrl: "/image/organo.png",
    demoUrl: "https://organo-alura-weld.vercel.app/",
    githubUrl: "https://github.com/LauraSchiavon/organo",
    year: 2025,
    technologies: ["React", "JavaScript", "CSS"],
  },
  {
    id: "project-14",
    title: "Sansch WebSite",
    titlePt: "Site da Sansch",
    description:
      "Developed the institutional website for Sansch, a company specializing in digital marketing with a focus on social media and paid traffic. The project features a modern and responsive design, highlighting the company’s services, client testimonials, and a clear call-to-action. The layout was carefully crafted to ensure smooth navigation and optimize lead generation.",
    descriptionPt:
      "Desenvolvimento do site institucional da Sansch, empresa especializada em marketing digital com foco em redes sociais e tráfego pago. O projeto conta com um design moderno e responsivo, destacando os serviços da empresa, depoimentos de clientes e uma chamada para ação clara. O layout foi cuidadosamente pensado para garantir navegação fluida e otimizar a geração de leads.",
    imageUrl: "/image/sansch.png",
    demoUrl: "https://sansch-web-site.vercel.app/",
    githubUrl: "https://github.com/LauraSchiavon/SanschWebSite",
    year: 2025,
    technologies: ["Next.js", "Tailwind"],
  },
  {
    id: "project-15",
    title: "Senno Website",
    titlePt: "Site da Senno",
    description:
      "The project focused on responsiveness, performance and easy content maintenance. Integration with Strapi allows the team to edit texts and images independently, while the front-end in Next.js ensures fast loading and fluid navigation. The clean and objective design reflects professionalism and clarity in the presentation of services.",
    descriptionPt:
      "O projeto teve foco em responsividade, performance e fácil manutenção de conteúdo. A integração com Strapi permite que a equipe edite textos e imagens de forma independente, enquanto o front-end em Next.js garante carregamento rápido e navegação fluida. O design limpo e objetivo reflete profissionalismo e clareza na apresentação dos serviços.",
    imageUrl: "/image/senno.png",
    demoUrl: "https://senno.ai/pt-BR",
    // githubUrl: "https://github.com/LauraSchiavon/Site-ProjetoReger",
    year: 2024,
    technologies: ["Next.js", "Strapi", "TailwindCSS"],
  },
  {
    id: "project-16",
    title: "Abranet WebSite",
    titlePt: "Site da Abranet",
    description:
      "Creation of the Abranet website with a focus on performance and content management. The application was developed to ensure a modern, scalable and easy-to-maintain architecture. The website allows the team to edit content directly in the CMS, with a user-friendly interface and real-time updates. The responsive and organized design provides an excellent browsing experience on any device.",
    descriptionPt:
      "Criação do site da Abranet com foco em performance e gerenciamento de conteúdo. A aplicação foi desenvolvida para garantir uma arquitetura moderna, escalável e de fácil manutenção. O site permite que a equipe edite conteúdo diretamente no CMS, com uma interface amigável e atualizações em tempo real. O design responsivo e organizado proporciona uma excelente experiência de navegação em qualquer dispositivo.",
    imageUrl: "/image/abranet.png",
    demoUrl: "https://www.abranet.org.br/",
    // githubUrl: "https://github.com/LauraSchiavon/Site-ProjetoReger",
    year: 2024,
    technologies: ["Next.js", "Strapi", "TailwindCSS"],
  },
  {
    id: "project-17",
    title: "Reger Project",
    titlePt: "Projeto Reger",
    description:
      "The project aims to reduce waste consumption on campus, thus encouraging proper disposal. Within the project, disposal is done through recyclable, organic, waste, medicine and battery waste, ensuring that they are disposed of properly. To date, we have directly assisted 189 people and indirectly assisted 8,340 people through the project.",
    descriptionPt:
      "O projeto visa reduzir o consumo de resíduos no campus, incentivando o descarte adequado. Dentro do projeto, o descarte é feito por meio de resíduos recicláveis, orgânicos, rejeitos, medicamentos e pilhas/baterias, garantindo o descarte correto. Até o momento, atendemos diretamente 189 pessoas e indiretamente 8.340 pessoas através do projeto.",
    imageUrl:
      "https://unisagrado.edu.br/uploads/2008/2021_materias/dezembro/reger/projeto_reger_abertura.jpg",
    // demoUrl: "https://example.com/demo1",
    githubUrl: "https://github.com/LauraSchiavon/Site-ProjetoReger",
    year: 2022,
    technologies: ["React", "TypeScript", "CSS", "Vite"],
  },
  {
    id: "project-18",
    title: "Intibiome",
    titlePt: "Intibiome",
    description:
      "This project was inspired by Intibiome's visual identity and values, with a focus on a clean, responsive design aligned with good front-end development practices. The goal was to create an intuitive and modern experience, highlighting the presentation of products and information in a clear and attractive way.",
    descriptionPt:
      "Este projeto foi inspirado na identidade visual e nos valores da Intibiome, com foco em um design limpo, responsivo e alinhado às boas práticas de desenvolvimento front-end. O objetivo foi criar uma experiência intuitiva e moderna, destacando a apresentação de produtos e informações de forma clara e atrativa.",
    imageUrl:
      "https://img.hwahae.co.kr/commerce/goods/20230531_155529_thumnail_5.jpg",
    // demoUrl: "https://example.com/demo2",
    githubUrl: "https://github.com/LauraSchiavon/Site-Intibiome",
    year: 2022,
    technologies: ["HTML", "CSS"],
  },
  {
    id: "project-19",
    title: "Games for people with cognitive problems",
    titlePt: "Jogos para pessoas com problemas cognitivos",
    description:
      "Development of a platform with interactive games aimed at cognitive stimulation for the elderly, including Memory Games, Sudoku and Minesweeper. The games were adapted to promote skills such as attention, logical reasoning and decision-making, helping to care for mental health in a fun and accessible way.",
    descriptionPt:
      "Desenvolvimento de uma plataforma com jogos interativos voltados à estimulação cognitiva de idosos, incluindo Jogo da Memória, Sudoku e Campo Minado. Os jogos foram adaptados para promover habilidades como atenção, raciocínio lógico e tomada de decisão, ajudando a cuidar da saúde mental de forma divertida e acessível.",
    imageUrl: "/image/jogo.png",
    // demoUrl: "https://example.com/demo3",
    githubUrl: "https://github.com/LauraSchiavon/IC",
    year: 2022,
    technologies: ["C#", "Unity"],
  },
];
