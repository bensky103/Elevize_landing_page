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
      projects: 'פרויקטים',
      contact: 'צור קשר',
      cta: 'בואו נדבר',
      ctaMobile: 'דברו איתנו בוואטסאפ',
    },
    hero: {
      badge: 'פתרונות תוכנה',
      headlineWords: ['בנו', 'מה', 'שאחרים', 'לא יכולים.'],
      subline:
        'אנחנו הופכים רעיונות שאפתניים למציאות ברמת פרודקשן — אוטומציות מותאמות, סוכני AI ותוכנה שנבנית בדיוק לצרכים שלכם.',
      subwords: ['אוטומציות', '·', 'סוכני AI', '·', 'תוכנה מותאמת', '·', 'כל דבר'],
      ctaStart: 'התחל פרויקט',
      ctaWork: 'צפה בעבודות',
    },
    services: {
      tag: '01 / שירותים',
      heading: 'מה אנחנו בונים',
      subline:
        'אנחנו לא עושים עבודה שבלונית. כל התקשרות מתחילה בהבנת הבעיה שלך ומסתיימת בפתרון שעובד באמת.',
      items: [
        {
          label: 'אוטומציות מותאמות אישית',
          description:
            'אוטומציה של תהליכי עבודה מקצה לקצה שמבטלת את הידני. עוצמה ברמת Zapier ללא המגבלות, נבנית ספציפית לתהליכים שלכם.',
        },
        {
          label: 'פיתוח סוכני AI',
          description:
            'סוכנים חכמים שחושבים, מחליטים ופועלים. ממוקדי לקוח ועד סוכני פנים-ארגוניים שמטפלים בתהליכי עבודה מורכבים.',
        },
        {
          label: 'תוכנה מותאמת אישית',
          description:
            'אפליקציות פול-סטאק לפי המפרט המדויק שלכם. דשבורדים, כלים פנימיים, מוצרי SaaS, אינטגרציות — קוד נקי, ברמת פרודקשן.',
        },
        {
          label: 'כל רעיון שיש לך',
          description:
            'אם אפשר לבנות את זה בתוכנה, אנחנו נבנה את זה. הביאו את הרעיון הכי אמיץ שלכם ואנחנו נתכנן ונשלח אותו באותה רמת דיוק.',
        },
      ],
    },
    projects: {
      tag: '02 / פרויקטים',
      heading: 'מה שיצרנו',
      subline: 'דוגמה ממה שבנינו. כל פרויקט שונה — האיכות אף פעם לא.',
      liveStatus: 'חי',
      nextStatus: 'הבא?',
      items: [
        {
          title: 'מנוע אוטומציה לידים',
          description:
            'מערכת לכידה ונתוב לידים מקצה לקצה המשלבת טפסי ווב, לוחות Monday.com והתראות SMS של Twilio — ללא התערבות ידנית.',
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
            'יש לך בעיה שתוכנה יכולה לפתור? נהפוך אותה למערכת פרודקשן שעובדת — בדיוק כפי שאתה צריך.',
        },
      ],
    },
    contact: {
      tag: '03 / צור קשר',
      heading1: 'מוכנים לבנות',
      heading2: 'משהו אמיתי?',
      subline:
        'ספרו לנו על מה אתם עובדים. נחזור אליכם תוך 24 שעות עם תשובה ישירה — ללא שטויות, ללא פיץ׳ מכירות.',
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
      send: 'שלח הודעה',
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
      tag: '// אודות',
      heading: 'מפתחים שבונים דברים שעובדים',
      body: 'אנחנו צוות קטן של מהנדסי תוכנה ומומחי AI. לא חברת ייעוץ, לא סוכנות דיגיטל — מפתחים שמעדיפים קוד נקי על שקפים יפים.',
      stat1Value: '3+',
      stat1Label: 'שנות ניסיון',
      stat2Value: '20+',
      stat2Label: 'פרויקטים שנמסרו',
      stat3Value: '24h',
      stat3Label: 'זמן תגובה',
    },
    process: {
      tag: '// תהליך',
      heading: 'איך אנחנו עובדים',
      subline: 'ללא בירוקרטיה, ללא הפתעות. שלבים ברורים מהרעיון לפרודקשן.',
      steps: [
        { num: '01', title: 'גילוי', desc: 'שיחה אחת. מבינים את הבעיה, הצוות, והמטרה — לפני שמתחילים לבנות.' },
        { num: '02', title: 'תכנון', desc: 'ארכיטקטורה, היקף, וציר זמן — לפני שנגענו בשורת קוד אחת.' },
        { num: '03', title: 'בנייה', desc: 'פיתוח מהיר ושקוף. עדכונים שבועים, גישה ישירה לצוות, אפס הפתעות.' },
        { num: '04', title: 'שחרור', desc: 'פריסה, בדיקות, ומסירה. מוודאים שהכל עובד לפני שסוגרים.' },
      ],
    },
    testimonials: {
      tag: '// לקוחות',
      heading: 'מה אומרים עלינו',
      note: '* חוות הדעת תורגמו לעברית',
      items: [
        { name: 'דניאל לוי', role: 'מנכ״ל, חברת נדל״ן', quote: 'Elevize בנו לנו מערכת ניהול לידים תוך שבועיים. מה שלקח שעות של עבודה ידנית — עכשיו קורה אוטומטית. החיסכון בזמן הוא עצום.' },
        { name: 'מיכל כהן', role: 'מנהלת שיווק, סטארטאפ SaaS', quote: 'ביקשנו סוכן AI לתמיכת לקוחות. קיבלנו מערכת שפותרת 80% מהפניות לבד. הצוות שלנו סוף סוף יכול להתמקד בדברים שחשובים.' },
        { name: 'רועי שמואלי', role: 'יזם, מסחר אלקטרוני', quote: 'הדשבורד שבנו חיבר לראשונה את כל הנתונים שלי — מלאי, הזמנות, תזמון — לתצוגה אחת. פשוט חסך לי עובד שלם.' },
      ],
    },
    faq: {
      tag: '// שאלות',
      heading: 'שאלות נפוצות',
      items: [
        { q: 'כמה זמן לוקח פרויקט טיפוסי?', a: 'תלוי בהיקף — אבל רוב הפרויקטים נמסרים תוך 2–6 שבועות. אוטומציות פשוטות יכולות להיות מוכנות תוך שבוע. תמיד נגדיר ציר זמן ברור לפני שנתחיל.' },
        { q: 'האם אתם עובדים מרחוק?', a: 'כן, לחלוטין. עובדים עם לקוחות בכל הארץ ומחוצה לה. כל התקשורת, הדמואים, והאישורים מתנהלים אונליין.' },
        { q: 'מה קורה אחרי שהפרויקט נמסר?', a: 'מספקים אחריות ותמיכה לאחר פריסה. לרוב הפרויקטים מוצעות גם חבילות תחזוקה שוטפת.' },
        { q: 'האם אתם עובדים עם עסקים קטנים?', a: 'כן. חלק גדול מהלקוחות שלנו הם עסקים קטנים ובינוניים. אנחנו מאמינים שיכולות טכנולוגיות מתקדמות לא צריכות להיות בלעדיות לחברות ענק.' },
        { q: 'האם אתם בונים גם דברים שלא נמצאים ברשימה?', a: 'בהחלט. אם זה יכול להיבנות בתוכנה — אנחנו יכולים לבנות את זה. הביאו לנו את הרעיון הכי אמיץ שלכם.' },
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
      projects: 'Projects',
      contact: 'Contact',
      cta: "Let's Talk",
      ctaMobile: "Let's Talk on WhatsApp",
    },
    hero: {
      badge: 'Software Solutions',
      headlineWords: ['Build', 'What', 'Others', "Can't."],
      subline:
        'We turn ambitious ideas into production-grade reality — custom automations, AI agents, and software built exactly to your needs.',
      subwords: ['Automations', '·', 'AI Agents', '·', 'Custom Software', '·', 'Anything'],
      ctaStart: 'Start a Project',
      ctaWork: 'View Our Work',
    },
    services: {
      tag: '01 / Services',
      heading: 'What We Build',
      subline:
        "We don't do cookie-cutter. Every engagement starts with understanding your problem and ends with a solution that actually works.",
      items: [
        {
          label: 'Custom Automations',
          description:
            'End-to-end workflow automation that eliminates the manual. Zapier-level power with none of the limits, built specifically for your processes.',
        },
        {
          label: 'AI Agent Development',
          description:
            'Intelligent agents that reason, decide, and act. From customer-facing chatbots to internal ops agents that handle complex multi-step workflows.',
        },
        {
          label: 'Custom Software',
          description:
            'Full-stack applications built to your exact spec. Dashboards, internal tools, SaaS products, integrations - clean code, production-grade.',
        },
        {
          label: 'Anything You Can Dream',
          description:
            'If it can be built with software, we can build it. Bring your wildest idea and we will architect and ship it with the same precision as everything else.',
        },
      ],
    },
    projects: {
      tag: '02 / Projects',
      heading: "What We've Shipped",
      subline: "A sample of what we've built. Every project is different — the quality never is.",
      liveStatus: 'Live',
      nextStatus: 'Next?',
      items: [
        {
          title: 'Lead Automation Engine',
          description:
            'End-to-end lead capture and routing system integrating web forms, Monday.com boards, and Twilio SMS notifications — zero manual intervention.',
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
            "Got a problem that software can solve? We'll turn it into a production system that actually works — precisely the way you need it.",
        },
      ],
    },
    contact: {
      tag: '03 / Contact',
      heading1: 'Ready to build',
      heading2: 'something real?',
      subline:
        "Tell us what you're working on. We'll respond within 24 hours with a straight answer — no fluff, no sales pitch.",
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
      send: 'Send Message',
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
      tag: '// About',
      heading: 'Developers who build things that work',
      body: "We're a small team of software engineers and AI specialists. Not a consultancy, not a digital agency — developers who prefer clean code over pretty slides.",
      stat1Value: '3+',
      stat1Label: 'Years Experience',
      stat2Value: '20+',
      stat2Label: 'Projects Delivered',
      stat3Value: '24h',
      stat3Label: 'Response Time',
    },
    process: {
      tag: '// Process',
      heading: 'How We Work',
      subline: 'No bureaucracy, no surprises. Clear steps from idea to production.',
      steps: [
        { num: '01', title: 'Discover', desc: 'One conversation. We understand the problem, the team, and the goal — before we start building.' },
        { num: '02', title: 'Plan', desc: 'Architecture, scope, and timeline — before we touch a single line of code.' },
        { num: '03', title: 'Build', desc: 'Fast, transparent development. Weekly updates, direct access to the team, zero surprises.' },
        { num: '04', title: 'Ship', desc: 'Deploy, test, and hand off. We make sure everything works before we close.' },
      ],
    },
    testimonials: {
      tag: '// Clients',
      heading: 'What They Say',
      note: '* Reviews translated from Hebrew',
      items: [
        { name: 'Daniel Levi', role: 'CEO, Real Estate Firm', quote: 'Elevize built our lead management system in two weeks. What used to take hours of manual work now happens automatically. The time savings are enormous.' },
        { name: 'Michal Cohen', role: 'Marketing Manager, SaaS Startup', quote: 'We asked for an AI customer support agent. We got a system that resolves 80% of requests on its own. Our team can finally focus on what actually matters.' },
        { name: 'Roee Shmueli', role: 'Entrepreneur, E-commerce', quote: 'The dashboard they built connected all my data — inventory, orders, scheduling — into one view for the first time. It simply replaced a full-time employee.' },
      ],
    },
    faq: {
      tag: '// FAQ',
      heading: 'Frequently Asked Questions',
      items: [
        { q: 'How long does a typical project take?', a: "Depends on scope — but most projects are delivered within 2–6 weeks. Simple automations can be ready in a week. We always define a clear timeline before we start." },
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
      projects: 'Проекты',
      contact: 'Контакты',
      cta: 'Напишите нам',
      ctaMobile: 'Напишите нам в WhatsApp',
    },
    hero: {
      badge: 'Программные решения',
      headlineWords: ['Строим', 'то,', 'что', 'другие не могут.'],
      subline:
        'Мы превращаем амбициозные идеи в продакшн-решения — кастомные автоматизации, AI-агенты и ПО под ваши задачи.',
      subwords: ['Автоматизации', '·', 'AI-агенты', '·', 'Кастомный софт', '·', 'Что угодно'],
      ctaStart: 'Начать проект',
      ctaWork: 'Наши работы',
    },
    services: {
      tag: '01 / Услуги',
      heading: 'Что мы строим',
      subline:
        'Мы не работаем по шаблону. Каждый проект начинается с понимания вашей задачи и заканчивается решением, которое реально работает.',
      items: [
        {
          label: 'Кастомные автоматизации',
          description:
            'Сквозная автоматизация рабочих процессов, устраняющая ручной труд. Мощность уровня Zapier без ограничений, созданная под ваши процессы.',
        },
        {
          label: 'Разработка AI-агентов',
          description:
            'Интеллектуальные агенты, которые рассуждают, принимают решения и действуют. От чат-ботов для клиентов до внутренних операционных агентов.',
        },
        {
          label: 'Кастомное ПО',
          description:
            'Full-stack приложения по вашему точному ТЗ. Дашборды, внутренние инструменты, SaaS-продукты, интеграции — чистый код, продакшн-уровень.',
        },
        {
          label: 'Что угодно',
          description:
            'Если это можно сделать с помощью ПО, мы это сделаем. Приносите самую смелую идею — спроектируем и реализуем с той же точностью.',
        },
      ],
    },
    projects: {
      tag: '02 / Проекты',
      heading: 'Что мы сделали',
      subline: 'Примеры нашей работы. Каждый проект уникален — качество неизменно.',
      liveStatus: 'Запущен',
      nextStatus: 'Далее?',
      items: [
        {
          title: 'Движок автоматизации лидов',
          description:
            'Сквозная система захвата и маршрутизации лидов, интегрирующая веб-формы, доски Monday.com и SMS-уведомления Twilio — без ручного вмешательства.',
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
      tag: '03 / Контакты',
      heading1: 'Готовы создать',
      heading2: 'что-то реальное?',
      subline:
        'Расскажите, над чем работаете. Ответим в течение 24 часов — без воды и продажного питча.',
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
      send: 'Отправить',
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
      tag: '// О нас',
      heading: 'Разработчики, которые создают то, что работает',
      body: 'Мы небольшая команда инженеров и AI-специалистов. Не консалтинг, не агентство — разработчики, которые предпочитают чистый код красивым презентациям.',
      stat1Value: '3+',
      stat1Label: 'Лет опыта',
      stat2Value: '20+',
      stat2Label: 'Проектов сдано',
      stat3Value: '24h',
      stat3Label: 'Время ответа',
    },
    process: {
      tag: '// Процесс',
      heading: 'Как мы работаем',
      subline: 'Без бюрократии, без сюрпризов. Чёткие шаги от идеи до продакшна.',
      steps: [
        { num: '01', title: 'Изучение', desc: 'Один звонок. Понимаем задачу, команду и цель — до того, как начнём строить.' },
        { num: '02', title: 'Планирование', desc: 'Архитектура, объём и сроки — до того, как написана первая строка кода.' },
        { num: '03', title: 'Разработка', desc: 'Быстрая и прозрачная разработка. Еженедельные обновления, прямой доступ к команде, ноль сюрпризов.' },
        { num: '04', title: 'Запуск', desc: 'Деплой, тестирование и передача. Убеждаемся, что всё работает, прежде чем закрыть задачу.' },
      ],
    },
    testimonials: {
      tag: '// Клиенты',
      heading: 'Отзывы клиентов',
      note: '* Отзывы переведены с иврита',
      items: [
        { name: 'Даниэль Леви', role: 'CEO, риэлторская компания', quote: 'Elevize построили нашу систему управления лидами за две недели. То, что занимало часы ручной работы, теперь происходит автоматически. Экономия времени огромная.' },
        { name: 'Михаль Коэн', role: 'Директор по маркетингу, SaaS-стартап', quote: 'Мы попросили AI-агента для поддержки клиентов. Получили систему, которая решает 80% обращений самостоятельно. Наша команда наконец может сосредоточиться на важном.' },
        { name: 'Рои Шмуэли', role: 'Предприниматель, e-commerce', quote: 'Дашборд, который они построили, впервые объединил все мои данные — склад, заказы, расписание — в одном окне. Он просто заменил одного сотрудника.' },
      ],
    },
    faq: {
      tag: '// FAQ',
      heading: 'Часто задаваемые вопросы',
      items: [
        { q: 'Сколько времени занимает типичный проект?', a: 'Зависит от объёма — но большинство проектов сдаются за 2–6 недель. Простые автоматизации могут быть готовы за неделю. Мы всегда определяем чёткие сроки до начала работы.' },
        { q: 'Вы работаете удалённо?', a: 'Да, полностью. Работаем с клиентами по всему Израилю и за рубежом. Всё общение, демо и согласования проходят онлайн.' },
        { q: 'Что происходит после сдачи проекта?', a: 'Мы предоставляем гарантию и поддержку после деплоя. Для большинства проектов доступны пакеты постоянного обслуживания.' },
        { q: 'Работаете ли вы с малым бизнесом?', a: 'Да. Большая часть наших клиентов — малый и средний бизнес. Мы считаем, что передовые технологии не должны быть доступны только крупным компаниям.' },
        { q: 'Строите ли вы то, чего нет в вашем списке услуг?', a: 'Безусловно. Если это можно построить с помощью ПО — мы это построим. Приносите самую смелую идею.' },
      ],
    },
  },
} satisfies Record<Lang, unknown>;

export type Translations = typeof translations.en;
