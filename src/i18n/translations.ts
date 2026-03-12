export type Lang = 'he' | 'en' | 'ru';

export const translations = {
  he: {
    dir: 'rtl' as const,
    arrow: '←' as const,
    pageTitle: 'Elevize — בנו מה שאחרים לא יכולים',
    pageDescription: 'Elevize — פתרונות תוכנה מותאמים אישית, אוטומציות וסוכני AI.',
    waMessage: 'היי Elevize, אשמח לדון בפרויקט',
    nav: {
      services: 'שירותים',
      process: 'תהליך',
      projects: 'פרויקטים',
      about: 'אודות',
      testimonials: 'לקוחות',
      contact: 'צור קשר',
      faq: 'שאלות',
      cta: 'בואו נדבר',
      ctaMobile: 'דברו איתנו בוואטסאפ',
    },
    hero: {
      badge: 'פתרונות תוכנה',
      headlineWords: ['הפרטנרים שלכם', 'לייעול תהליכי עבודה', 'בעזרת AI.'],
      subline:
        'הזמן להפוך אתגרים תפעוליים ליתרון תחרותי. אנחנו בונים אוטומציות וסוכני AI שלוקחים את העסק שלכם לעידן הבא.',
      subwords: ['אוטומציות', '·', 'סוכני AI', '·', 'תוכנה מותאמת', '·', 'כל דבר'],
      ctaStart: 'לשיחת יעוץ בחינם',
      ctaWork: 'צפה בפרוייקטים',
    },
    services: {
      tag: '01 / שירותים',
      heading: 'הפתרונות שייקחו אתכם לשם',
      subline:
        'מנתחים את הצרכים, מפתחים פתרונות בהתאמה אישית, ומטמיעים אותם אצלכם בעסק.',
      items: [
        {
          label: 'אוטומציות מותאמות אישית',
          description:
            'אוטומציה של תהליכי עבודה מקצה לקצה שמבטלת את הצורך במגע יד אדם. אנחנו בונים זרימת עבודה חכמה שתפורה ספציפית לצרכים ולמערכות שלכם.',
        },
        {
          label: 'פיתוח סוכני AI',
          description:
            'סוכנים חכמים שחושבים, מחליטים ופועלים. ממוקדי לקוח ועד סוכני פנים-ארגוניים שמטפלים בתהליכי עבודה מורכבים.',
        },
        {
          label: 'תוכנה מותאמת אישית',
          description:
            'אפליקציות פול-סטאק לפי המפרט המדויק שלכם. דשבורדים, כלים פנימיים, מוצרי SaaS, אינטגרציות.',
        },
        {
          label: 'כל רעיון שיש לך',
          description:
            'כל עסק עובד אחרת, ולפעמים הכלים הקיימים פשוט לא מספיקים. פיתוח כלי עבודה פנימיים, אינטגרציות מורכבות ומערכות ניהול מאפס, בדיוק לפי המידות והדרישות שלכם.',
        },
      ],
    },
    projects: {
      tag: '03 / פרויקטים',
      heading: 'יצירות המופת שלנו',
      subline: '',
      liveStatus: 'חי',
      nextStatus: 'הבא?',
      items: [
        {
          title: 'מנוע אוטומציה לידים',
          description:
            'מערכת לכידה ונתוב לידים מקצה לקצה המשלבת טפסי ווב, לוחות Monday.com והתראות SMS של Twilio. ללא התערבות ידנית.',
        },
        {
          title: 'סוכן תמיכה AI',
          description:
            'סוכן שיחה רב-סבבי עם RAG על תיעוד מוצרים, המסוגל לפתור 80% מכרטיסי התמיכה באופן אוטונומי לפני הסלמה.',
        },
        {
          title: 'דשבורד תפעולי',
          description:
            'דשבורד תפעולי בזמן אמת המחבר מלאי, תזמון וביצועי צוות לתצוגה מאוחדת אחת עם התראות חיות.',
        },
        {
          title: 'הפרויקט הבא שלך',
          description:
            'יש לך בעיה שתוכנה יכולה לפתור? נהפוך אותה למערכת פרודקשן שעובדת, בדיוק כפי שאתה צריך.',
        },
      ],
    },
    contact: {
      tag: '06 / צור קשר',
      heading1: 'רוצים לשמוע עוד?',
      heading2: '',
      subline:
        'קבעו שיחת התאמה בחינם, ספרו לנו על הבעייות שיש לכם בעסק ונראה ביחד איך נוכל לעזור.',
      chatLabel: 'או שוחחו ישירות',
      wa: 'כתבו לנו בוואטסאפ',
      fields: {
        name: 'שם',
        namePlaceholder: 'השם שלך',
        email: 'אימייל',
        emailPlaceholder: 'האימייל שלך',
        message: 'מה אתם בונים?',
        messagePlaceholder: 'תארו את הפרויקט או הרעיון שלכם...',
      },
      send: 'אני רוצה שיחת התאמה בחינם',
      sending: 'שולח...',
      successTitle: 'ההודעה התקבלה',
      successSub: 'נחזור אליכם תוך 24 שעות. מצפים לשמוע.',
      error: 'משהו השתבש. נסו ליצור קשר בוואטסאפ.',
    },
    footer: {
      tagline: 'בנו מה שאחרים לא יכולים.',
    },
    floating: {
      backToTop: 'חזרה למעלה',
      wa: 'שוחח בוואטסאפ',
    },
    about: {
      tag: '04 / אודות',
      heading: 'השילוב המדויק בין הבנה עסקית לכתיבת קוד',
      body: '',
      stat1Value: '7+',
      stat1Label: 'שנות ניסיון',
      stat2Value: '56',
      stat2Label: 'פרוייקטים שנמסרו',
      stat3Value: '100%',
      stat3Label: 'מחויבות לעסק שלכם',
    },
    process: {
      tag: '02 / תהליך',
      heading: 'אז איך הקסם קורה?',
      subline: '',
      steps: [
        { num: '01', title: 'גילוי', desc: 'מאפיינים את הבעיה' },
        { num: '02', title: 'תכנון', desc: 'מתכננים את הפתרון וקובעים מדדי הצלחה' },
        { num: '03', title: 'בנייה', desc: 'בונים את הפתרון' },
        { num: '04', title: 'שחרור', desc: 'הטמעה בעסק, ועמידה במדדי הצלחה' },
      ],
    },
    testimonials: {
      tag: '05 / לקוחות',
      heading: 'לקוחות מספרים',
      note: '',
      items: [
        { name: 'שירן כונסארי', role: 'בעלת סטודיו לעיצוב גרפי', quote: 'Elevize בנו לנו מערכת ניהול לידים תוך שבועיים. מה שלקח שעות של עבודה ידנית עכשיו קורה אוטומטית. החיסכון בזמן הוא עצום.' },
        { name: 'מיכל שוורץ', role: 'מנהלת שיווק, סטארטאפ SaaS', quote: 'ביקשנו סוכן AI לתמיכת לקוחות. קיבלנו מערכת שפותרת 80% מהפניות לבד. הצוות שלנו סוף סוף יכול להתמקד בדברים שחשובים.' },
        { name: 'אפי זיו', role: 'מנהל מפעל מזון', quote: 'המערכת שגיא ובועז בנו לי חוסכת לעובדת שלי מעל 30 שעות בחודש, חוסכת לי אלפי שקלים בחודש על אוכל שהיה נזרק לפח ועושה לעובדים שלי חיים בהרבה יותר קלים.' },
      ],
    },
    faq: {
      tag: '07 / שאלות',
      heading: 'שאלות נפוצות',
      items: [
        { q: 'כמה זמן לוקח פרויקט טיפוסי?', a: 'תלוי בהיקף, אבל רוב הפרויקטים נמסרים תוך 2–6 שבועות. אוטומציות פשוטות יכולות להיות מוכנות תוך שבוע. תמיד נגדיר ציר זמן ברור לפני שנתחיל.' },
        { q: 'האם אתם עובדים מרחוק?', a: 'כן, לחלוטין. עובדים עם לקוחות בכל הארץ ומחוצה לה. כל התקשורת, הדמואים, והאישורים מתנהלים אונליין.' },
        { q: 'מה קורה אחרי שהפרויקט נמסר?', a: 'מספקים אחריות ותמיכה לאחר פריסה. לרוב הפרויקטים מוצעות גם חבילות תחזוקה שוטפת.' },
        { q: 'האם אתם עובדים עם עסקים קטנים?', a: 'כן. חלק גדול מהלקוחות שלנו הם עסקים קטנים ובינוניים. אנחנו מאמינים שיכולות טכנולוגיות מתקדמות לא צריכות להיות בלעדיות לחברות ענק.' },
        { q: 'האם אתם בונים גם דברים שלא נמצאים ברשימה?', a: 'בהחלט. אם זה יכול להיבנות בתוכנה, אנחנו יכולים לבנות את זה. הביאו לנו את הרעיון הכי אמיץ שלכם.' },
      ],
    },
  },

  en: {
    dir: 'ltr' as const,
    arrow: '→' as const,
    pageTitle: "Elevize — Build What Others Can't",
    pageDescription: 'Elevize — Custom software solutions, automations and AI agents.',
    waMessage: "Hi Elevize, I'd like to discuss a project",
    nav: {
      services: 'Services',
      process: 'Process',
      projects: 'Projects',
      about: 'About',
      testimonials: 'Clients',
      contact: 'Contact',
      faq: 'FAQ',
      cta: "Let's Talk",
      ctaMobile: "Let's Talk on WhatsApp",
    },
    hero: {
      badge: 'Software Solutions',
      headlineWords: ['Your Partners for', 'Streamlining Workflows', 'with AI.'],
      subline:
        'It\'s time to turn operational challenges into competitive advantage. We build automations and AI agents that take your business to the next era.',
      subwords: ['Automations', '·', 'AI Agents', '·', 'Custom Software', '·', 'Anything'],
      ctaStart: 'Free Consultation',
      ctaWork: 'View Projects',
    },
    services: {
      tag: '01 / Services',
      heading: 'The Solutions That Get You There',
      subline:
        'We analyze your needs, develop custom solutions, and implement them in your business.',
      items: [
        {
          label: 'Custom Automations',
          description:
            'End-to-end workflow automation that eliminates the need for human touch. We build smart workflows tailored specifically to your needs and systems.',
        },
        {
          label: 'AI Agent Development',
          description:
            'Intelligent agents that reason, decide, and act. From customer-facing chatbots to internal ops agents that handle complex multi-step workflows.',
        },
        {
          label: 'Custom Software',
          description:
            'Full-stack applications built to your exact spec. Dashboards, internal tools, SaaS products, integrations.',
        },
        {
          label: 'Anything You Can Dream',
          description:
            'Every business works differently, and sometimes existing tools just aren\'t enough. We build internal tools, complex integrations, and management systems from scratch, tailored exactly to your needs.',
        },
      ],
    },
    projects: {
      tag: '03 / Projects',
      heading: 'Our Masterpieces',
      subline: '',
      liveStatus: 'Live',
      nextStatus: 'Next?',
      items: [
        {
          title: 'Lead Automation Engine',
          description:
            'End-to-end lead capture and routing system integrating web forms, Monday.com boards, and Twilio SMS notifications. Zero manual intervention.',
        },
        {
          title: 'AI Support Agent',
          description:
            'Multi-turn conversational agent with RAG over product docs, capable of resolving 80% of support tickets autonomously before escalating.',
        },
        {
          title: 'Operations Dashboard',
          description:
            'Real-time internal ops dashboard connecting inventory, scheduling, and team performance into a single unified view with live alerts.',
        },
        {
          title: 'Your Project Here',
          description:
            "Got a problem that software can solve? We'll turn it into a production system that actually works, precisely the way you need it.",
        },
      ],
    },
    contact: {
      tag: '06 / Contact',
      heading1: 'Want to hear more?',
      heading2: '',
      subline:
        'Schedule a free consultation, tell us about the challenges in your business, and let\'s see how we can help.',
      chatLabel: 'Or chat directly',
      wa: 'WhatsApp Us',
      fields: {
        name: 'Name',
        namePlaceholder: 'Your name',
        email: 'Email',
        emailPlaceholder: 'your@email.com',
        message: 'What are you building?',
        messagePlaceholder: 'Describe your project or idea...',
      },
      send: 'I Want a Free Consultation',
      sending: 'Sending...',
      successTitle: 'Message received',
      successSub: "We'll be in touch within 24 hours. Looking forward to it.",
      error: 'Something went wrong. Try reaching us on WhatsApp instead.',
    },
    footer: {
      tagline: "Build What Others Can't.",
    },
    floating: {
      backToTop: 'Back to top',
      wa: 'Chat on WhatsApp',
    },
    about: {
      tag: '04 / About',
      heading: 'The Perfect Blend of Business Understanding and Code',
      body: '',
      stat1Value: '7+',
      stat1Label: 'Years Experience',
      stat2Value: '56',
      stat2Label: 'Projects Delivered',
      stat3Value: '100%',
      stat3Label: 'Commitment to Your Business',
    },
    process: {
      tag: '02 / Process',
      heading: 'So How Does the Magic Happen?',
      subline: '',
      steps: [
        { num: '01', title: 'Discover', desc: 'Defining the problem' },
        { num: '02', title: 'Plan', desc: 'Planning the solution and setting success metrics' },
        { num: '03', title: 'Build', desc: 'Building the solution' },
        { num: '04', title: 'Ship', desc: 'Implementation in your business and meeting success metrics' },
      ],
    },
    testimonials: {
      tag: '05 / Clients',
      heading: 'Clients Tell Their Story',
      note: '* Reviews translated from Hebrew',
      items: [
        { name: 'Shiran Kunsari', role: 'Graphic Design Studio Owner', quote: 'Elevize built our lead management system in two weeks. What used to take hours of manual work now happens automatically. The time savings are enormous.' },
        { name: 'Michal Schwartz', role: 'Marketing Manager, SaaS Startup', quote: 'We asked for an AI customer support agent. We got a system that resolves 80% of requests on its own. Our team can finally focus on what actually matters.' },
        { name: 'Efi Ziv', role: 'Food Factory Manager', quote: 'The system Guy and Boaz built saves my employee over 30 hours a month, saves me thousands of shekels a month on food that would have been thrown away, and makes my employees\' lives much easier.' },
      ],
    },
    faq: {
      tag: '07 / FAQ',
      heading: 'Frequently Asked Questions',
      items: [
        { q: 'How long does a typical project take?', a: "Depends on scope, but most projects are delivered within 2–6 weeks. Simple automations can be ready in a week. We always define a clear timeline before we start." },
        { q: 'Do you work remotely?', a: "Yes, fully. We work with clients across Israel and internationally. All communication, demos, and approvals happen online." },
        { q: 'What happens after the project is delivered?', a: 'We provide post-deployment warranty and support. Ongoing maintenance packages are available for most projects.' },
        { q: 'Do you work with small businesses?', a: "Yes. A large portion of our clients are SMBs. We believe advanced tech capabilities shouldn't be exclusive to large enterprises." },
        { q: "Do you build things not on your services list?", a: "Absolutely. If it can be built with software, we can build it. Bring us your wildest idea." },
      ],
    },
  },

  ru: {
    dir: 'ltr' as const,
    arrow: '→' as const,
    pageTitle: 'Elevize — Строим то, что другие не могут',
    pageDescription: 'Elevize — Кастомные программные решения, автоматизации и AI-агенты.',
    waMessage: 'Привет Elevize, хочу обсудить проект',
    nav: {
      services: 'Услуги',
      process: 'Процесс',
      projects: 'Проекты',
      about: 'О нас',
      testimonials: 'Клиенты',
      contact: 'Контакты',
      faq: 'FAQ',
      cta: 'Напишите нам',
      ctaMobile: 'Напишите нам в WhatsApp',
    },
    hero: {
      badge: 'Программные решения',
      headlineWords: ['Ваши партнёры', 'по оптимизации процессов', 'с помощью AI.'],
      subline:
        'Пора превратить операционные вызовы в конкурентное преимущество. Мы создаём автоматизации и AI-агентов, которые выведут ваш бизнес на новый уровень.',
      subwords: ['Автоматизации', '·', 'AI-агенты', '·', 'Кастомный софт', '·', 'Что угодно'],
      ctaStart: 'Бесплатная консультация',
      ctaWork: 'Смотреть проекты',
    },
    services: {
      tag: '01 / Услуги',
      heading: 'Решения, которые приведут вас к цели',
      subline:
        'Анализируем потребности, разрабатываем индивидуальные решения и внедряем их в ваш бизнес.',
      items: [
        {
          label: 'Кастомные автоматизации',
          description:
            'Сквозная автоматизация рабочих процессов, устраняющая необходимость ручного вмешательства. Мы создаём умные рабочие потоки, скроенные под ваши потребности и системы.',
        },
        {
          label: 'Разработка AI-агентов',
          description:
            'Интеллектуальные агенты, которые рассуждают, принимают решения и действуют. От чат-ботов для клиентов до внутренних операционных агентов.',
        },
        {
          label: 'Кастомное ПО',
          description:
            'Full-stack приложения по вашему точному ТЗ. Дашборды, внутренние инструменты, SaaS-продукты, интеграции.',
        },
        {
          label: 'Что угодно',
          description:
            'Каждый бизнес работает по-своему, и иногда существующих инструментов просто недостаточно. Разработка внутренних инструментов, сложных интеграций и систем управления с нуля, точно по вашим требованиям.',
        },
      ],
    },
    projects: {
      tag: '03 / Проекты',
      heading: 'Наши шедевры',
      subline: '',
      liveStatus: 'Запущен',
      nextStatus: 'Далее?',
      items: [
        {
          title: 'Движок автоматизации лидов',
          description:
            'Сквозная система захвата и маршрутизации лидов, интегрирующая веб-формы, доски Monday.com и SMS-уведомления Twilio. Без ручного вмешательства.',
        },
        {
          title: 'AI-агент поддержки',
          description:
            'Многоходовой разговорный агент с RAG по документации продукта, способный автономно решить 80% тикетов поддержки до эскалации.',
        },
        {
          title: 'Операционный дашборд',
          description:
            'Дашборд реального времени, объединяющий склад, расписание и производительность команды в едином представлении с живыми алертами.',
        },
        {
          title: 'Ваш проект здесь',
          description:
            'Есть задача, которую может решить ПО? Мы превратим её в продакшн-систему, которая работает именно так, как вам нужно.',
        },
      ],
    },
    contact: {
      tag: '06 / Контакты',
      heading1: 'Хотите узнать больше?',
      heading2: '',
      subline:
        'Запишитесь на бесплатную консультацию, расскажите о проблемах в вашем бизнесе, и мы вместе найдём решение.',
      chatLabel: 'Или напишите напрямую',
      wa: 'Написать в WhatsApp',
      fields: {
        name: 'Имя',
        namePlaceholder: 'Ваше имя',
        email: 'Email',
        emailPlaceholder: 'ваш@email.com',
        message: 'Что вы строите?',
        messagePlaceholder: 'Опишите проект или идею...',
      },
      send: 'Хочу бесплатную консультацию',
      sending: 'Отправка...',
      successTitle: 'Сообщение получено',
      successSub: 'Свяжемся с вами в течение 24 часов. Ждём с нетерпением.',
      error: 'Что-то пошло не так. Напишите нам в WhatsApp.',
    },
    footer: {
      tagline: 'Строим то, что другие не могут.',
    },
    floating: {
      backToTop: 'Наверх',
      wa: 'Чат в WhatsApp',
    },
    about: {
      tag: '04 / О нас',
      heading: 'Идеальное сочетание бизнес-понимания и кода',
      body: '',
      stat1Value: '7+',
      stat1Label: 'Лет опыта',
      stat2Value: '56',
      stat2Label: 'Проектов сдано',
      stat3Value: '100%',
      stat3Label: 'Преданность вашему бизнесу',
    },
    process: {
      tag: '02 / Процесс',
      heading: 'Как происходит магия?',
      subline: '',
      steps: [
        { num: '01', title: 'Изучение', desc: 'Определяем проблему' },
        { num: '02', title: 'Планирование', desc: 'Планируем решение и устанавливаем метрики успеха' },
        { num: '03', title: 'Разработка', desc: 'Создаём решение' },
        { num: '04', title: 'Запуск', desc: 'Внедрение в бизнес и достижение метрик успеха' },
      ],
    },
    testimonials: {
      tag: '05 / Клиенты',
      heading: 'Клиенты рассказывают',
      note: '* Отзывы переведены с иврита',
      items: [
        { name: 'Ширан Кунсари', role: 'Владелица студии графического дизайна', quote: 'Elevize построили нашу систему управления лидами за две недели. То, что занимало часы ручной работы, теперь происходит автоматически. Экономия времени огромная.' },
        { name: 'Михаль Шварц', role: 'Директор по маркетингу, SaaS-стартап', quote: 'Мы попросили AI-агента для поддержки клиентов. Получили систему, которая решает 80% обращений самостоятельно. Наша команда наконец может сосредоточиться на важном.' },
        { name: 'Эфи Зив', role: 'Управляющий пищевым производством', quote: 'Система, которую Гай и Боаз построили, экономит моей сотруднице более 30 часов в месяц, экономит мне тысячи шекелей в месяц на еде, которая выбрасывалась, и значительно облегчает жизнь моим работникам.' },
      ],
    },
    faq: {
      tag: '07 / FAQ',
      heading: 'Часто задаваемые вопросы',
      items: [
        { q: 'Сколько времени занимает типичный проект?', a: 'Зависит от объёма, но большинство проектов сдаются за 2–6 недель. Простые автоматизации могут быть готовы за неделю. Мы всегда определяем чёткие сроки до начала работы.' },
        { q: 'Вы работаете удалённо?', a: 'Да, полностью. Работаем с клиентами по всему Израилю и за рубежом. Всё общение, демо и согласования проходят онлайн.' },
        { q: 'Что происходит после сдачи проекта?', a: 'Мы предоставляем гарантию и поддержку после деплоя. Для большинства проектов доступны пакеты постоянного обслуживания.' },
        { q: 'Работаете ли вы с малым бизнесом?', a: 'Да. Большая часть наших клиентов — малый и средний бизнес. Мы считаем, что передовые технологии не должны быть доступны только крупным компаниям.' },
        { q: 'Строите ли вы то, чего нет в вашем списке услуг?', a: 'Безусловно. Если это можно построить с помощью ПО, мы это построим. Приносите самую смелую идею.' },
      ],
    },
  },
} satisfies Record<Lang, unknown>;

export type Translations = typeof translations.en;
