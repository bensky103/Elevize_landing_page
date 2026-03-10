export type Lang = 'he' | 'en' | 'ru';

export const translations = {
  he: {
    dir: 'rtl' as const,
    arrow: '←' as const,
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
        'ספרו לנו על מה אתם עובדים. נחזור אליכם תוך 24 שעות עם תשובה ישירה — ללא שטויות, ללא מגרש מכירות.',
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
      tagline: 'בנה מה שאחרים לא יכולים.',
    },
    floating: {
      backToTop: 'חזרה למעלה',
      wa: 'שוחח בוואטסאפ',
    },
  },

  en: {
    dir: 'ltr' as const,
    arrow: '→' as const,
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
  },

  ru: {
    dir: 'ltr' as const,
    arrow: '→' as const,
    nav: {
      services: 'Услуги',
      projects: 'Проекты',
      contact: 'Контакт',
      cta: 'Напишите нам',
      ctaMobile: 'Напишите нам в WhatsApp',
    },
    hero: {
      badge: 'Программные решения',
      headlineWords: ['Строим', 'то,', 'что', 'другие нет.'],
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
      tag: '03 / Контакт',
      heading1: 'Готовы создать',
      heading2: 'что-то реальное?',
      subline:
        'Расскажите, над чем работаете. Ответим в течение 24 часов — без воды и продажного питча.',
      chatLabel: 'Или напишите напрямую',
      wa: 'WhatsApp',
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
      successSub: 'Свяжемся с вами в течение 24 часов.',
      error: 'Что-то пошло не так. Напишите нам в WhatsApp.',
    },
    footer: {
      tagline: 'Строим то, что другие не могут.',
    },
    floating: {
      backToTop: 'Наверх',
      wa: 'Чат в WhatsApp',
    },
  },
} satisfies Record<Lang, unknown>;

export type Translations = typeof translations.en;
