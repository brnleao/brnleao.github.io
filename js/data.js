/* Conteúdo do site (PT e EN). Edite aqui para atualizar textos, experiências e projetos. */
window.PORTFOLIO = {
  meta: {
    name: 'Bruno Carneiro Leão',
    shortName: 'Bruno C. Leão',
    email: 'brunocleao99@gmail.com',
    photo: 'assets/foto.png',
    cv: 'assets/Bruno_Carneiro_Leao_CV_EN.pdf',
    links: {
      linkedin: 'https://www.linkedin.com/in/bruno-carneiro-le%C3%A3o-9a6498248/',
      github: 'https://github.com/brnleao'
    }
  },

  /* Cores de destaque disponíveis no painel de configurações */
  accents: [
    { id: 'tangerine', dark: '#FF6A2B', light: '#D9480B', pt: 'Tangerina', en: 'Tangerine' },
    { id: 'cobalt',    dark: '#4C84FF', light: '#1F5EE8', pt: 'Cobalto',   en: 'Cobalt' },
    { id: 'emerald',   dark: '#2BD095', light: '#0A7D54', pt: 'Esmeralda', en: 'Emerald' },
    { id: 'violet',    dark: '#A78BFF', light: '#6D4AE8', pt: 'Violeta',   en: 'Violet' },
    { id: 'rose',      dark: '#FF5C8A', light: '#D11A56', pt: 'Rosa',      en: 'Rose' }
  ],

  i18n: {
    /* ------------------------------------------------------------------ */
    pt: {
      code: 'pt',
      htmlLang: 'pt-BR',
      title: 'Bruno Carneiro Leão — Portfólio',
      description: 'Portfólio de Bruno Carneiro Leão: estagiário de Análise de Dados na Roche e estudante de Engenharia de Software na FIAP. C#, Python, SQL, Java. Inglês C1.',
      skipLink: 'Pular para o conteúdo',
      navLabel: 'Seções',
      nav: {
        about: 'Sobre', experience: 'Experiência', skills: 'Habilidades',
        query: 'Consulta', projects: 'Projetos', education: 'Formação', contact: 'Contato'
      },
      hero: {
        intro: 'Olá, eu sou',
        nameLines: ['Bruno', 'Carneiro', 'Leão'],
        role: 'Estagiário de Análise de Dados na Roche e estudante de Engenharia de Software na FIAP.',
        statement: 'Cuido para que dados sejam confiáveis: mais de 30 regras de validação em SQL, automações com IA e apps mobile publicados em C#.',
        meta: ['São Paulo, SP', 'Inglês C1 certificado', 'Aberto a vagas remotas'],
        ctaProjects: 'Ver projetos',
        ctaCv: 'Baixar currículo (EN)',
        photoAlt: 'Foto de Bruno Carneiro Leão',
        scrollHint: 'Role para explorar'
      },
      about: {
        title: 'Sobre',
        paragraphs: [
          'Sou estudante de Engenharia de Software na FIAP, com conclusão prevista para 2027, e estagiário de Análise de Dados na Roche. Lá construí um painel de monitoramento de qualidade de dados com mais de 30 regras de validação em SQL, desenvolvo e testo automações com ferramentas de IA e mantenho os dados de CRM no Salesforce.',
          'Antes disso, desenvolvi e publiquei aplicativos mobile multiplataforma em C# na Pro4Win. Tenho certificação de inglês C1 (EF SET) e busco uma vaga remota em treinamento de IA e anotação de dados: avaliar, classificar e melhorar textos e códigos gerados por IA com atenção aos detalhes e bom julgamento.'
        ],
        facts: [
          { value: '30+', label: 'regras SQL de validação em produção' },
          { value: 'C1', label: 'inglês avançado, certificado EF SET' },
          { value: '2027', label: 'conclusão prevista da graduação' },
          { value: 'Play', label: 'apps publicados na Google Play Store' }
        ]
      },
      experience: {
        title: 'Experiência',
        items: [
          {
            company: 'Roche',
            role: 'Estagiário de Análise de Dados',
            place: 'São Paulo, Brasil (híbrido)',
            period: 'ago 2025 – atual',
            bullets: [
              'Construí e mantenho um painel de Qualidade de Dados com mais de 30 regras de validação em SQL para detectar, acompanhar e corrigir problemas nos dados do CRM.',
              'Desenvolvo, testo e automatizo processos internos com ferramentas de IA e scripts, substituindo trabalho manual recorrente.',
              'Analiso e mantenho dados de CRM e de engajamento de clientes no Salesforce, Excel, Google Sheets e Airtable, transformando registros em relatórios e insights.',
              'Dou suporte e treinamento a usuários internos em ferramentas de dados, documentando processos em guias passo a passo.'
            ]
          },
          {
            company: 'Pro4Win',
            role: 'Aprendiz de Desenvolvimento Mobile',
            place: 'São Paulo, Brasil',
            period: 'ago 2023 – jun 2024',
            bullets: [
              'Desenvolvi apps mobile multiplataforma com Xamarin.Forms, XAML e C# orientado a objetos, integrando APIs como a do Google Maps.',
              'Manipulei dados da aplicação no Microsoft SQL Server e troquei dados com sistemas de backend por meio de web services SOAP.',
              'Escrevi manuais para usuários finais e publiquei os apps na Google Play Store seguindo as diretrizes da plataforma.'
            ]
          }
        ]
      },
      skills: {
        title: 'Habilidades',
        levelNames: { 1: 'básico', 2: 'intermediário', 3: 'avançado' },
        levelHint: 'Nível',
        groups: [
          { name: 'Programação', items: [
            { name: 'C#', level: 3, note: 'orientado a objetos' },
            { name: 'Python', level: 2 },
            { name: 'Java', level: 2 },
            { name: 'JavaScript e React', level: 2 },
            { name: 'HTML e CSS', level: 2 },
            { name: 'XAML', level: 2 },
            { name: 'C++', level: 1 }
          ]},
          { name: 'Dados e analytics', items: [
            { name: 'Microsoft SQL Server' }, { name: 'SQL' }, { name: 'Excel avançado' },
            { name: 'Google Sheets' }, { name: 'Airtable' },
            { name: 'Qualidade e validação de dados' }, { name: 'Dashboards e relatórios' }
          ]},
          { name: 'IA e anotação de dados', items: [
            { name: 'Avaliação e comparação de respostas de modelos' },
            { name: 'Classificação de precisão e qualidade' },
            { name: 'Aplicação de diretrizes detalhadas' },
            { name: 'Justificativas claras por escrito' },
            { name: 'Checagem de fatos' },
            { name: 'Rotulagem de texto e código' },
            { name: 'Design de chatbots' }
          ]},
          { name: 'Ferramentas', items: [
            { name: 'Salesforce (CRM)' }, { name: 'Google Workspace' }, { name: 'Visual Studio' },
            { name: 'Git e GitHub' }, { name: 'Postman' }, { name: 'Figma' },
            { name: 'Google Play Console' }, { name: 'Netlify' }
          ]},
          { name: 'Idiomas', items: [
            { name: 'Português', note: 'nativo' },
            { name: 'Inglês', note: 'C1 Advanced, EF SET' },
            { name: 'Espanhol', note: 'básico' }
          ]},
          { name: 'Competências', items: [
            { name: 'Atenção aos detalhes' }, { name: 'Escrita técnica' }, { name: 'Adaptabilidade' },
            { name: 'Trabalho remoto autônomo' }, { name: 'Gestão de tempo' }
          ]}
        ]
      },
      query: {
        title: 'Consulta',
        intro: 'No estágio, escrevo regras SQL que verificam dados todos os dias. Aqui o banco sou eu: escolha uma consulta e veja o resultado.',
        running: 'Executando…',
        rows: function (n) { return n === 1 ? '1 linha' : n + ' linhas'; },
        empty: 'Escolha uma consulta acima.',
        presets: [
          { label: 'Linguagens por nível',
            sql: "SELECT linguagem, nivel\nFROM programacao\nORDER BY nivel DESC;",
            columns: ['linguagem', 'nivel'],
            rows: [['C#', 'avançado'], ['Python', 'intermediário'], ['Java', 'intermediário'],
                   ['JavaScript / React', 'intermediário'], ['HTML / CSS', 'intermediário'],
                   ['XAML', 'intermediário'], ['C++', 'básico']] },
          { label: 'Experiência',
            sql: "SELECT empresa, cargo, periodo\nFROM experiencia\nORDER BY inicio DESC;",
            columns: ['empresa', 'cargo', 'periodo'],
            rows: [['Roche', 'Estagiário de Análise de Dados', 'ago 2025 – atual'],
                   ['Pro4Win', 'Aprendiz de Desenvolvimento Mobile', 'ago 2023 – jun 2024']] },
          { label: 'Regras de qualidade',
            sql: "SELECT COUNT(*) AS regras_ativas\nFROM regras_sql\nWHERE status = 'ativa';",
            columns: ['regras_ativas'],
            rows: [['30+']] },
          { label: 'Idiomas',
            sql: "SELECT idioma, nivel\nFROM idiomas;",
            columns: ['idioma', 'nivel'],
            rows: [['Português', 'nativo'], ['Inglês', 'C1 Advanced (EF SET)'], ['Espanhol', 'básico']] },
          { label: 'Certificações recentes',
            sql: "SELECT curso, instituicao, data\nFROM certificacoes\nWHERE ano >= 2025\nORDER BY data DESC;",
            columns: ['curso', 'instituicao', 'data'],
            rows: [['Sistemas Corporativos (120h)', 'FIAP', 'set 2026'],
                   ['Chatbots', 'FIAP', 'jul 2025'],
                   ['Desenvolvimento Java', 'FIAP', 'jul 2025'],
                   ['Análise de Dados com Google Sheets', 'Alura', 'jul 2025']] },
          { label: 'Disponibilidade',
            sql: "SELECT *\nFROM disponibilidade;",
            columns: ['status', 'modelo', 'foco', 'ingles'],
            rows: [['aberto a propostas', 'remoto', 'treinamento de IA e anotação de dados', 'C1']] }
        ]
      },
      projects: {
        title: 'Projetos',
        intro: 'Projetos pessoais e acadêmicos, vários em desenvolvimento. Código em github.com/brnleao.',
        open: 'Abrir no GitHub',
        items: [
          { name: 'Pipeline IoT com ESP32 e FIWARE', stack: ['Python', 'ESP32', 'FIWARE', 'Wokwi', 'Postman'],
            desc: 'Sensor de luminosidade simulado no Wokwi enviando dados a um servidor em nuvem, com health checks validados no Postman e gráficos em tempo real e estáticos.',
            url: 'https://github.com/brnleao' },
          { name: 'Estação meteorológica IoT', stack: ['Python', 'IoT'],
            desc: 'Estação meteorológica conectada: leitura de sensores e envio dos dados para visualização.',
            url: 'https://github.com/brnleao/cp5-estacao-iot' },
          { name: 'Portfólio pessoal (primeira versão)', stack: ['TypeScript', 'React', 'Netlify'],
            desc: 'Primeira versão deste portfólio, construída em React com TypeScript e publicada na Netlify.',
            url: 'https://github.com/brnleao/portfolio-bruno-leao' },
          { name: 'App mobile em JavaScript', stack: ['JavaScript', 'Mobile'],
            desc: 'Aplicativo desenvolvido nas aulas de Mobile Development da FIAP.',
            url: 'https://github.com/brnleao/CP3-MOB-3ANO' },
          { name: 'OceanGuard', stack: ['HTML', 'CSS', 'JavaScript'],
            desc: 'Projeto web do FIAP Global Solution pela equipe Sea Tech Solutions.',
            url: 'https://github.com/brnleao/GS_OceanGuard_SeaTechSolutions' }
        ]
      },
      education: {
        title: 'Formação',
        items: [
          { school: 'FIAP', degree: 'Bacharelado em Engenharia de Software', period: '2024 – 2027 (previsto)' },
          { school: 'Senac São Paulo', degree: 'Ensino médio técnico em Informática', period: '2021 – 2023' }
        ],
        certsTitle: 'Certificações e cursos',
        certs: [
          'EF SET English Certificate, 61/100, C1 Advanced (jun 2024)',
          'FIAP Nano Courses: Sistemas Corporativos, 120h (set 2026); Chatbots (jul 2025); Desenvolvimento Java (jul 2025); Design Thinking (mar 2024)',
          'Alura: Análise de Dados com Google Sheets (jul 2025); Microsoft SQL Server 2022, administração de banco de dados (jul 2024)',
          'Impacta: Python e Lógica de Programação; FGV: 9 cursos online; Senac: Qualificação em Suporte e Manutenção de Computadores (2021)'
        ]
      },
      contact: {
        title: 'Contato',
        heading: 'Vamos conversar?',
        text: 'Estou aberto a vagas remotas de treinamento de IA e anotação de dados, e também a oportunidades em dados e desenvolvimento. Respondo por e-mail ou LinkedIn.',
        copy: 'Copiar e-mail',
        copied: 'E-mail copiado',
        linkedin: 'LinkedIn',
        github: 'GitHub',
        cv: 'Currículo em PDF (EN)'
      },
      footer: {
        rights: '© 2026 Bruno Carneiro Leão',
        stack: 'Feito com HTML, CSS e JavaScript, sem frameworks.',
        top: 'Voltar ao topo'
      },
      settings: {
        open: 'Abrir configurações',
        title: 'Configurações',
        close: 'Fechar',
        language: 'Idioma',
        theme: 'Tema',
        themeToggle: 'Alternar tema claro ou escuro',
        themes: { system: 'Sistema', light: 'Claro', dark: 'Escuro' },
        accent: 'Cor de destaque',
        effects: 'Efeitos',
        field: 'Fundo interativo',
        fieldHint: 'Pontos que reagem ao cursor no topo da página',
        lens: 'Cursor em lente',
        lensHint: 'Destaque que acompanha o mouse (apenas desktop)',
        motion: 'Animações',
        motionHint: 'Transições e revelações ao rolar',
        textSize: 'Tamanho do texto',
        sizes: { s: 'Pequeno', m: 'Normal', l: 'Grande' },
        reset: 'Restaurar padrões',
        saved: 'Suas preferências ficam salvas neste navegador.',
        calmNotice: 'Efeitos desligados por causa da preferência "reduzir movimento" do seu sistema.',
        calmAction: 'Ligar efeitos'
      }
    },

    /* ------------------------------------------------------------------ */
    en: {
      code: 'en',
      htmlLang: 'en',
      title: 'Bruno Carneiro Leão — Portfolio',
      description: 'Portfolio of Bruno Carneiro Leão: Data Analysis Intern at Roche and Software Engineering student at FIAP. C#, Python, SQL, Java. English C1.',
      skipLink: 'Skip to content',
      navLabel: 'Sections',
      nav: {
        about: 'About', experience: 'Experience', skills: 'Skills',
        query: 'Query', projects: 'Projects', education: 'Education', contact: 'Contact'
      },
      hero: {
        intro: 'Hi, I am',
        nameLines: ['Bruno', 'Carneiro', 'Leão'],
        role: 'Data Analysis Intern at Roche and Software Engineering student at FIAP.',
        statement: 'I keep data trustworthy: 30+ SQL validation rules, AI-driven automations and production mobile apps shipped in C#.',
        meta: ['São Paulo, Brazil', 'Certified C1 English', 'Open to remote roles'],
        ctaProjects: 'See projects',
        ctaCv: 'Download resume',
        photoAlt: 'Photo of Bruno Carneiro Leão',
        scrollHint: 'Scroll to explore'
      },
      about: {
        title: 'About',
        paragraphs: [
          'I am a Software Engineering student at FIAP, expected to graduate in 2027, and a Data Analysis Intern at Roche. There I built a data quality monitoring dashboard with 30+ SQL validation rules, I develop and test AI-driven automations, and I maintain CRM data in Salesforce.',
          'Before that, I developed and published cross-platform mobile apps in C# at Pro4Win. I hold a C1 Advanced English certificate (EF SET) and I am seeking a remote AI training or data annotation role: evaluating, rating and improving AI-generated text and code with attention to detail and sound judgment.'
        ],
        facts: [
          { value: '30+', label: 'SQL validation rules in production' },
          { value: 'C1', label: 'advanced English, EF SET certified' },
          { value: '2027', label: 'expected graduation' },
          { value: 'Play', label: 'apps published on Google Play' }
        ]
      },
      experience: {
        title: 'Experience',
        items: [
          {
            company: 'Roche',
            role: 'Data Analysis Intern',
            place: 'São Paulo, Brazil (hybrid)',
            period: 'Aug 2025 – present',
            bullets: [
              'Built and maintain a Data Quality monitoring dashboard with 30+ SQL validation rules to detect, track and fix CRM data issues.',
              'Develop, test and automate internal processes with AI tools and scripts, replacing recurring manual work.',
              'Analyze and maintain CRM and customer-engagement data in Salesforce, Excel, Google Sheets and Airtable, turning records into reports and insights.',
              'Support internal users and training on data tools, documenting processes in clear, step-by-step guides.'
            ]
          },
          {
            company: 'Pro4Win',
            role: 'Mobile Development Apprentice',
            place: 'São Paulo, Brazil',
            period: 'Aug 2023 – Jun 2024',
            bullets: [
              'Developed cross-platform mobile apps with Xamarin.Forms, XAML and OOP C#, integrating APIs such as Google Maps.',
              'Handled application data in Microsoft SQL Server and exchanged data with backend systems through SOAP web services.',
              'Wrote end-user manuals and published the apps to the Google Play Store following platform guidelines.'
            ]
          }
        ]
      },
      skills: {
        title: 'Skills',
        levelNames: { 1: 'basic', 2: 'intermediate', 3: 'advanced' },
        levelHint: 'Level',
        groups: [
          { name: 'Programming', items: [
            { name: 'C#', level: 3, note: 'object-oriented' },
            { name: 'Python', level: 2 },
            { name: 'Java', level: 2 },
            { name: 'JavaScript and React', level: 2 },
            { name: 'HTML and CSS', level: 2 },
            { name: 'XAML', level: 2 },
            { name: 'C++', level: 1 }
          ]},
          { name: 'Data and analytics', items: [
            { name: 'Microsoft SQL Server' }, { name: 'SQL' }, { name: 'Advanced Excel' },
            { name: 'Google Sheets' }, { name: 'Airtable' },
            { name: 'Data quality and validation' }, { name: 'Dashboards and reporting' }
          ]},
          { name: 'AI training and annotation', items: [
            { name: 'Evaluating and comparing model responses' },
            { name: 'Rating accuracy and quality' },
            { name: 'Following detailed guidelines' },
            { name: 'Writing clear rationales' },
            { name: 'Fact-checking' },
            { name: 'Labeling text and code' },
            { name: 'Chatbot design' }
          ]},
          { name: 'Tools', items: [
            { name: 'Salesforce (CRM)' }, { name: 'Google Workspace' }, { name: 'Visual Studio' },
            { name: 'Git and GitHub' }, { name: 'Postman' }, { name: 'Figma' },
            { name: 'Google Play Console' }, { name: 'Netlify' }
          ]},
          { name: 'Languages', items: [
            { name: 'Portuguese', note: 'native' },
            { name: 'English', note: 'C1 Advanced, EF SET' },
            { name: 'Spanish', note: 'basic' }
          ]},
          { name: 'Soft skills', items: [
            { name: 'Attention to detail' }, { name: 'Technical writing' }, { name: 'Adaptability' },
            { name: 'Independent remote work' }, { name: 'Time management' }
          ]}
        ]
      },
      query: {
        title: 'Query',
        intro: 'At work I write SQL rules that check data every day. Here, the database is me: pick a query and see the result.',
        running: 'Running…',
        rows: function (n) { return n === 1 ? '1 row' : n + ' rows'; },
        empty: 'Pick a query above.',
        presets: [
          { label: 'Languages by level',
            sql: "SELECT language, level\nFROM programming\nORDER BY level DESC;",
            columns: ['language', 'level'],
            rows: [['C#', 'advanced'], ['Python', 'intermediate'], ['Java', 'intermediate'],
                   ['JavaScript / React', 'intermediate'], ['HTML / CSS', 'intermediate'],
                   ['XAML', 'intermediate'], ['C++', 'basic']] },
          { label: 'Experience',
            sql: "SELECT company, role, period\nFROM experience\nORDER BY start_date DESC;",
            columns: ['company', 'role', 'period'],
            rows: [['Roche', 'Data Analysis Intern', 'Aug 2025 – present'],
                   ['Pro4Win', 'Mobile Development Apprentice', 'Aug 2023 – Jun 2024']] },
          { label: 'Quality rules',
            sql: "SELECT COUNT(*) AS active_rules\nFROM sql_rules\nWHERE status = 'active';",
            columns: ['active_rules'],
            rows: [['30+']] },
          { label: 'Languages spoken',
            sql: "SELECT language, level\nFROM spoken_languages;",
            columns: ['language', 'level'],
            rows: [['Portuguese', 'native'], ['English', 'C1 Advanced (EF SET)'], ['Spanish', 'basic']] },
          { label: 'Recent certifications',
            sql: "SELECT course, issuer, date\nFROM certifications\nWHERE year >= 2025\nORDER BY date DESC;",
            columns: ['course', 'issuer', 'date'],
            rows: [['Corporate Systems (120h)', 'FIAP', 'Sep 2026'],
                   ['Chatbots', 'FIAP', 'Jul 2025'],
                   ['Java Development', 'FIAP', 'Jul 2025'],
                   ['Data Analysis with Google Sheets', 'Alura', 'Jul 2025']] },
          { label: 'Availability',
            sql: "SELECT *\nFROM availability;",
            columns: ['status', 'mode', 'focus', 'english'],
            rows: [['open to offers', 'remote', 'AI training and data annotation', 'C1']] }
        ]
      },
      projects: {
        title: 'Projects',
        intro: 'Personal and academic projects, several in active development. Code at github.com/brnleao.',
        open: 'Open on GitHub',
        items: [
          { name: 'IoT pipeline with ESP32 and FIWARE', stack: ['Python', 'ESP32', 'FIWARE', 'Wokwi', 'Postman'],
            desc: 'Light sensor simulated in Wokwi sending data to a cloud server, with health checks validated in Postman and real-time and static charts.',
            url: 'https://github.com/brnleao' },
          { name: 'IoT weather station', stack: ['Python', 'IoT'],
            desc: 'Connected weather station: sensor readings sent out for visualization.',
            url: 'https://github.com/brnleao/cp5-estacao-iot' },
          { name: 'Personal portfolio (first version)', stack: ['TypeScript', 'React', 'Netlify'],
            desc: 'First version of this portfolio, built in React with TypeScript and deployed on Netlify.',
            url: 'https://github.com/brnleao/portfolio-bruno-leao' },
          { name: 'JavaScript mobile app', stack: ['JavaScript', 'Mobile'],
            desc: 'App developed during the Mobile Development classes at FIAP.',
            url: 'https://github.com/brnleao/CP3-MOB-3ANO' },
          { name: 'OceanGuard', stack: ['HTML', 'CSS', 'JavaScript'],
            desc: 'Web project for the FIAP Global Solution by the Sea Tech Solutions team.',
            url: 'https://github.com/brnleao/GS_OceanGuard_SeaTechSolutions' }
        ]
      },
      education: {
        title: 'Education',
        items: [
          { school: 'FIAP', degree: 'B.Sc. in Software Engineering', period: '2024 – 2027 (expected)' },
          { school: 'Senac São Paulo', degree: 'Technical High School Diploma in Information Technology', period: '2021 – 2023' }
        ],
        certsTitle: 'Certifications and courses',
        certs: [
          'EF SET English Certificate, 61/100, C1 Advanced (Jun 2024)',
          'FIAP Nano Courses: Corporate Systems, 120h (Sep 2026); Chatbots (Jul 2025); Java Development (Jul 2025); Design Thinking (Mar 2024)',
          'Alura: Data Analysis with Google Sheets (Jul 2025); Microsoft SQL Server 2022, Database Administration (Jul 2024)',
          'Impacta: Python and Programming Logic; FGV: 9 online courses; Senac: Computer Support Qualification (2021)'
        ]
      },
      contact: {
        title: 'Contact',
        heading: 'Shall we talk?',
        text: 'I am open to remote AI training and data annotation roles, as well as opportunities in data and software development. I reply by email or LinkedIn.',
        copy: 'Copy email',
        copied: 'Email copied',
        linkedin: 'LinkedIn',
        github: 'GitHub',
        cv: 'Resume as PDF'
      },
      footer: {
        rights: '© 2026 Bruno Carneiro Leão',
        stack: 'Built with plain HTML, CSS and JavaScript, no frameworks.',
        top: 'Back to top'
      },
      settings: {
        open: 'Open settings',
        title: 'Settings',
        close: 'Close',
        language: 'Language',
        theme: 'Theme',
        themeToggle: 'Toggle light or dark theme',
        themes: { system: 'System', light: 'Light', dark: 'Dark' },
        accent: 'Accent color',
        effects: 'Effects',
        field: 'Interactive background',
        fieldHint: 'Dots that react to the cursor at the top of the page',
        lens: 'Lens cursor',
        lensHint: 'Highlight that follows the mouse (desktop only)',
        motion: 'Animations',
        motionHint: 'Transitions and reveals while scrolling',
        textSize: 'Text size',
        sizes: { s: 'Small', m: 'Normal', l: 'Large' },
        reset: 'Reset to defaults',
        saved: 'Your preferences are saved in this browser.',
        calmNotice: 'Effects are off because your system prefers reduced motion.',
        calmAction: 'Turn effects on'
      }
    }
  }
};
