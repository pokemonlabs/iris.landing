export const languageList = {
  es: "Español",
  en: "English",
} as const;

export const labels = {
  es: {
    // =========== Navegación =========== //
    "nav.home": "Inicio",
    "nav.guides": "Guías",
    "nav.images": "Imágenes",
    "nav.software": "Software",
    "nav.tools": "Herramientas",

    // =========== Tema =========== //
    "theme.toggle": "Cambiar Tema",

    // =========== Página Principal =========== //
    "download.button": "Comenzar",
    "home.description": "🚀 Plataforma de Automatización con Agentes IA en la Nube",
    "home.ques": "¿Qué es GooseAI?",
    "home.opti": "Automatización con IA",
    "home.desopti": "Ejecuta tareas predefinidas o personalizadas mediante instrucciones en lenguaje natural.",
    "home.dev.des": "Plantillas de código abierto para QA, generación de contenido, extracción web y más.",
    "home.safety": "Infraestructura Segura",
    "home.safe.des": "Contenedores aislados y almacenamiento en la nube con seguridad empresarial.",
    "home.api": "Acceso Programático",
    "home.api.des": "Endpoints REST API, webhooks y SDKs para Python/JavaScript.",
    "home.update": "Espacios de Trabajo",
    "home.update.des": "Entornos personalizables con IA para navegación y completado de código.",
    "home.performance": "Alto Rendimiento",
    "home.performance.des": "Almacenamiento SSD y tiempo de ejecución optimizado para automatización confiable.",
    "home.scheduling": "Programación de Tareas",
    "home.scheduling.des": "Integración con Cron para tareas recurrentes automatizadas.",
    "home.ecosystem": "Código Abierto",
    "home.ecosystem.des": "Repositorio GitHub público con plantillas de agentes de la comunidad.",
    "home.support": "Soporte Empresarial",
    "home.support.des": "Equipo de soporte dedicado y documentación completa para usuarios empresariales.",
    "home.features": "Características Principales",
    "home.automation": "🤖 Automatización IA",
    "home.automation.des": "Automatización de tareas en lenguaje natural con plantillas predefinidas.",
    "home.integration": "🔌 Fácil Integración", 
    "home.integration.des": "APIs REST, webhooks y SDKs para una integración perfecta.",
    "home.security": "🛡️ Seguridad Empresarial",
    "home.security.des": "Contenedores aislados y almacenamiento persistente con cifrado.",
    "home.extensible": "🔧 Plataforma Extensible",
    "home.extensible.des": "Ecosistema de código abierto con plantillas de la comunidad.",
    "home.go": "¿Listo para automatizar?",

    // =========== Sección NTLite =========== //
    "ntlite.ntlite_name": "NTLite",
    "ntlite.aria.forum": "Enlace al foro oficial de guías de NTLite",

    // =========== Footer =========== //
    "footer.description": "Build 24H2 optimizado con mejoras extremas",
    "footer.version": "v1.0.0",
    "footer.download": "Descargar",
    "footer.stable": "Estable",
    "footer.explore": "Explorar",
    "footer.connect": "Conectar",
    "footer.updates": "Actualizaciones",
    "footer.subscribe": "Suscribirse",
    "footer.newsletter": "Recibe noticias sobre nuevas versiones y características",
    "footer.email.placeholder": "Email",
    "footer.copyright": "© 2025 CodeFlow. Todos los derechos reservados.",
    "footer.privacy": "Privacidad",
    "footer.terms": "Términos",

    // =========== Accesibilidad =========== //
    "aria.social.twitter": "Enlace a Twitter de FlowState",
    "aria.social.github": "Enlace al repositorio GitHub de FlowState en https://github.com/pokemonlabs/",
    "aria.social.discord": "Enlace a la comunidad Discord de FlowState en https://discord.gg/jeSKrGEZ",
    "aria.social.linkedin": "Enlace a LinkedIn de FlowState",

    // =========== Guías =========== //
    "guides.title": "Guías de FlowState",
    "guides.description": "🚀 Domina la automatización con IA con nuestras guías completas.",
    "guides.meta_title": "Guías y Tutoriales - FlowState AI",
    "guides.support.title": "¡Únete a nuestra comunidad!",
    "guides.support.description1": "Obtén ayuda y comparte tus automatizaciones. Conéctate con nosotros en",
    "guides.support.emphasis1": "Discord",
    "guides.support.description2": "y",
    "guides.support.emphasis2": "GitHub",
    "guides.support.description3": "para mantenerte actualizado",
    "guides.guide1.title": "Asistente IA Personal",
    "guides.guide1.description": "Configura tu asistente IA para tareas diarias, recordatorios y búsqueda de información.",
    "guides.guide2.title": "Automatización Web",
    "guides.guide2.description": "Automatiza tareas de navegación con IA y extracción de datos.",
    "guides.guide3.title": "Control del Sistema",
    "guides.guide3.description": "Controla tu computadora con comandos en lenguaje natural y flujos automatizados.",
    "guides.guide4.title": "Tareas Programadas",
    "guides.guide4.description": "Crea automatizaciones recurrentes con programación cron y almacenamiento.",
    "guides.view_more": "Ver más",
    "guides.guide5.title": "Generación de Contenido",
    "guides.guide5.description": "Automatiza la creación de contenido y optimización SEO con plantillas IA.",
    "guides.guide6.title": "Extracción Web",
    "guides.guide6.description": "Recopilación segura de datos web con soporte de proxy y límites de velocidad.",
    "guides.guide7.title": "Integración API",
    "guides.guide7.description": "Conecta FlowState con tus aplicaciones usando APIs REST y webhooks.",
    "guides.guide8.title": "Agentes Personalizados",
    "guides.guide8.description": "Construye y despliega tus propios agentes IA especializados con nuestro SDK.",

    // =========== Herramientas =========== //
    "tools.meta_title": "Herramientas de Optimización - FlowStateOS",
    "tools.title": "Personalización Pro",
    "tools.subtitle": "🚀 Herramientas de Optimización - Seguridad - Personalización",
    "tools.opensource.title": "¡Importante!",
    "tools.opensource.description": "La mayoría de herramientas aquí recomendadas son Open Source. Si las encuentras útiles, por favor considera dar una estrella en sus repositorios oficiales para apoyar a los desarrolladores.",
    "tools.opensource.how_to_help": "¿Cómo ayudar?",
    "tools.opensource.step1": "Visita el enlace GitHub de cada herramienta",
    "tools.opensource.step2": 'Haz clic en el botón "⭐ Star" en la esquina superior derecha',
    "tools.opensource.step3": "¡Listo! Estarás contribuyendo al crecimiento del proyecto",
    "tools.category1.title": "🛠 Optimización",
    "tools.category2.title": "🎨 Personalización",
    "tools.category3.title": "🔒 Seguridad",
    "tools.tool1.name": "ChrisTitus WinUtil",
    "tools.tool1.description": "Suite completa de optimización del sistema",
    "tools.tool2.name": "Microsoft PowerToys",
    "tools.tool2.description": "Suite de productividad oficial",
    "tools.tool3.name": "StartAllBack",
    "tools.tool3.description": "Menú Start clásico para Win11",
    "tools.tool4.name": "Windhawk",
    "tools.tool4.description": "Personalización extrema para Windows",
    "tools.tool5.name": "BleachBit",
    "tools.tool5.description": "Limpieza profunda y segura",
    "tools.tool6.name": "O&O ShutUp10",
    "tools.tool6.description": "Control de privacidad",
    "tools.tags.windows": "Windows 10/11",
    "tools.tags.windows11": "Windows 11",
    "tools.tags.windows_all": "Windows 7/8/10/11",
    "tools.tags.opensource": "Open Source",
    "tools.tags.low_risk": "Bajo riesgo",
    "tools.tags.medium_risk": "Riesgo medio",
    "tools.download": "Descargar",

// =========== Software =========== //
    "software.meta_title": "Software Esencial - FlowStateOS",
    "software.title": "Software Recomendado para Todos",
    "software.subtitle": "🚀 Explora software confiable que se ajuste a tus necesidades",
    "software.opensource.title": "Aviso Importante",
    "software.opensource.description": "Ten en cuenta que el software listado aquí se ofrece tal cual.",
    "software.opensource.description2": "Úsalo bajo tu propio riesgo y asegúrate de que sea compatible con tu sistema antes de la instalación.",
    "software.opensource.how_to_help": "¿Cómo sacar el máximo provecho de estas herramientas?",
    "software.opensource.step1": "Revisa los requisitos y la compatibilidad del software",
    "software.opensource.step2": "Asegúrate de que tu sistema cumpla con las especificaciones mínimas",
    "software.opensource.step3": "Instala y usa de acuerdo con las instrucciones del desarrollador. Siempre realiza una copia de seguridad de tus datos antes de hacer cambios.",
    "software.category1.title": "🛠 Drivers y Runtime",
    "software.category2.title": "🎨 Aplicaciones de Producción",
    "software.category3.title": "Software para Windows",
    "software.tool1.name": "Runtime de DirectX",
    "software.tool1.description": "Entorno de ejecución para DirectX 9, 10, 11 y 12",
    "software.tool2.name": "Runtime de VC++",
    "software.tool2.description": "Bibliotecas de ejecución de Visual C++ para Windows",
    "software.tool3.name": "Runtime de escritorio .NET 5.0",
    "software.tool3.description": "Entorno de ejecución para aplicaciones de escritorio .NET 5.0",
    "software.tool4.name": "Runtime de escritorio .NET 6.0",
    "software.tool4.description": "Entorno de ejecución para aplicaciones de escritorio .NET 6.0",
    "software.tool5.name": "Runtime de escritorio .NET 7.0",
    "software.tool5.description": "Entorno de ejecución para aplicaciones de escritorio .NET 7.0",
    "software.tool6.name": "Runtime de escritorio .NET 8.0",
    "software.tool6.description": "Entorno de ejecución para aplicaciones de escritorio .NET 8.0",
    "software.tags.windows": "Windows 10/11",
    "software.tags.opensource": "Microsoft",
    "software.tags.medium_risk": "Requerido",
    "software.download": "Descargar",
    "software.tags.cross_platform": "Multiplataforma",
    "software.tags.stable": "Estable",
    "software.tool7.name": "Runtime de Edge WebView2",
    "software.tool7.description": "Runtime de WebView2 para Microsoft Edge",
    "software.tool8.name": "GIMP",
    "software.tool8.description": "Editor de imágenes gratuito y de código abierto.",
    "software.tool9.name": "Krita",
    "software.tool9.description": "Software de pintura digital para artistas.",
    "software.tool10.name": "Blender",
    "software.tool10.description": "Herramienta 3D para modelado, animación y renderizado.",
    "software.tool11.name": "Inkscape",
    "software.tool11.description": "Editor de gráficos vectoriales gratuito y de código abierto.",
    "software.tool12.name": "Darktable",
    "software.tool12.description": "Software de edición de fotos con flujo de trabajo no destructivo.",
    "software.tool13.name": "Audacity",
    "software.tool13.description": "Editor de audio gratuito y de código abierto.",
    "software.tool14.name": "OBS Studio",
    "software.tool14.description": "Software para grabación y transmisión en vivo.",
    "software.tool15.name": "Notepad++",
    "software.tool15.description": "Editor de texto avanzado para Windows.",
    "software.tool16.name": "7-Zip",
    "software.tool16.description": "Herramienta de compresión y descompresión de archivos.",
    "software.tool17.name": "VLC Media Player",
    "software.tool17.description": "Reproductor multimedia multiplataforma.",
    "software.tool18.name": "LibreOffice",
    "software.tool18.description": "Suite ofimática gratuita y de código abierto.",
    "software.tool19.name": "Paint.NET",
    "software.tool19.description": "Editor de imágenes simple pero potente para Windows.",
    "software.tool20.name": "WinRAR",
    "software.tool20.description": "Herramienta de compresión de archivos popular.",
    "software.tool21.name": "CPU-Z",
    "software.tool21.description": "Herramienta de diagnóstico del sistema.",

    // =========== Descargas =========== //
    "downloads.hero_description": "🚀 ISOs modificadas",
    "downloads.announcement.title": "🛠️ Importante:",
    "downloads.announcement.full_text": "Estas ISOs fueron creadas con NTLite, herramienta que cualquiera puede usar para crear su propia ISO personalizada.",
    "downloads.announcement.security_title": "⚠️ Recomendación de seguridad:",
    "downloads.announcement.recommendation": "Para máxima confiabilidad, te recomendamos crear tu propia versión usando:",
    "downloads.announcement.official_guides": "Guías oficiales de NTLite",
    "downloads.announcement.our_guides": "Nuestras",
    "downloads.announcement.custom_tip": "💡 Una ISO personalizada evita bloatware y se adapta exactamente a tus necesidades",
    "downloads.latest_version.title": "🚀 Última Versión",
    "downloads.latest_version.name": "FlowStateOS 11",
    "downloads.latest_version.build_info": "Build 24H2 optimizado con mejoras extremas",
    "downloads.latest_version.build_info_23H2": "Build 23H2 con nuevas funciones",
    "downloads.11_versions.title": "💿​ FlowStateOS 11",
    "downloads.previous_versions.title": "💿​ Otras Versiones",
    "downloads.version1.name": "FlowStateOS 10",
    "downloads.version1.build_info": "Build 22H2 con soporte Legacy",
    "downloads.version2.name": "FlowStateOS 11",
    "downloads.version2.build_info": "Build 23H2 con nuevas funciones y optimizaciones",
    "downloads.version3.build_info": "Build 22H2 con mejoras extremas",
    "downloads.tags.x64_uefi": "x64 UEFI",
    "downloads.tags.stable": "Estable",
    "downloads.tags.updated": "Actualizado",
    "downloads.tags.limited_support": "Soporte limitado",
    "downloads.download_button": "Descargar",
    "downloads.iso_details": "Detalles de la ISO",
    "downloads.main_features": "Características principales",
    "downloads.features.optimization": "Optimización máxima de rendimiento",
    "downloads.features.telemetry": "Reducción de telemetría",
    "downloads.features.gaming": "Ideal para jugadores y usuarios avanzados",
    "downloads.features.security": "Seguridad mejorada y enfoque oficial",
    "downloads.long_term": "Objetivo a largo plazo",
    "downloads.long_term_desc": "Sistema operativo refinado y optimizado para uso prolongado",
    "downloads.guide_info": "La guía para crear esta ISO proviene de este foro",
    "downloads.guide_link": "Guía de Hellbovine Imagen Optimizada",
    "downloads.features.iso_size": "3.6 GB ISO",
    "downloads.features.installed_size_3gb": "3.8 GB ISO",
    "downloads.features.installed_size_4gb": "4.8 GB ISO",
    "downloads.features.debloated_optimized": "Optimizada desde el inicio",
    "downloads.features.full_updatable_build": "Versión Completa y Actualizable",
    "downloads.features.automatic_updates_paused": "Actualizaciones Automáticas Pausadas Hasta el Año 2029",
    "downloads.features.intel_rst_drivers": "Drivers Intel RST Integrados en la Instalación",
    "downloads.features.extreme_performance": "Rendimiento Extremo para tus Aplicaciones y Juegos",
    "downloads.features.uwp_apps_support": "Soporte Completo para Apps UWP, Xbox, MS Store y mucho más",
    "downloads.features.additional_language_support": "Soporte Completo para Paquetes de Idioma Adicionales, Voz, etc.",
    "downloads.features.optional_features_support": "Soporte Completo para todas las características opcionales, incluyendo WSA y WSL2",
    "downloads.features.improvements_optimizations": "Mejoras y Optimización Adicionales Incluidas",
    "downloads.features.no_preinstalled_uwp_apps": "No tiene Apps UWP Pre-instaladas",
    "downloads.features.ms_store_installer_included": "Instalador de MS Store Incluido",
    "downloads.features.full_featured_updatable_build": "Versión Completa y Actualizable",
    "downloads.features.automatic_updates_paused_3000": "Actualizaciones Automáticas Pausadas Hasta el Año 2029",
    "downloads.features.optional_system_transparency": "Incluye Transparencia del Sistema Opcional",
    "downloads.features.optional_gallery_settings_home": "Incluye 'Galería' y 'Página de Inicio de Configuración' Opcionales",
    "downloads.features.extreme_performance_apps_games": "Rendimiento Extremo para tus Aplicaciones y Juegos",
    "downloads.features.integrates_intel_rst_serial_io": "Integra Drivers Intel RST y Serial IO en la Instalación",
    "downloads.features.full_support_uwp_xbox_ms_store": "Soporte Completo para Apps UWP, Xbox, MS Store y mucho más",
    "downloads.features.full_support_language_packs": "Soporte Completo para Paquetes de Idioma Adicionales, Voz, etc.",
    "downloads.features.full_support_optional_features": "Soporte Completo para todas las características opcionales, incluyendo WSA y WSL2",
    "downloads.features.enabled_rounded_corners_acrylic_mica": "Esquinas Redondeadas, Acrílico y Mica Activados por Defecto (¡Incluso en una VM!)",
    "downloads.features_no_internet": "No requiere conexión a Internet para la instalación",
    "downloads.features_telemetry": "Telemetría y Rastreo Eliminados",
    "downloads.features.additional_improvements_optimizations": "Mejoras y Optimización Adicionales Incluidas",
  },
  en: {
    // =========== Navigation =========== //
    "nav.home": "Home",
    "nav.guides": "Guides",
    "nav.images": "Images",
    "nav.software": "Software",
    "nav.tools": "Tools",

    // =========== Theme =========== //
    "theme.toggle": "Toggle Theme",

    // =========== Home Page =========== //
    "download.button": "Get Started",
    "home.description": "🚀 Cloud-Based AI Agent Automation Platform",
    "home.ques": "What is GooseAI?",
    "home.opti": "AI Task Automation",
    "home.desopti": "Execute predefined or custom tasks via natural language instructions to AI agents.",
    "home.dev.des": "Prebuilt open-source templates for QA, content generation, web scraping and more.",
    "home.safety": "Secure Infrastructure",
    "home.safe.des": "Isolated containers and persistent cloud storage with enterprise-grade security.",
    "home.api": "Programmatic Access",
    "home.api.des": "REST API endpoints, webhooks, and SDKs for Python/JavaScript integration.",
    "home.update": "Browser Workspaces",
    "home.update.des": "Customizable environments with AI co-browsing and code completion.",
    "home.performance": "High Performance",
    "home.performance.des": "SSD-backed storage and optimized container runtime for reliable automation.",
    "home.scheduling": "Task Scheduling",
    "home.scheduling.des": "Cron integration for automated recurring tasks and workflows.",
    "home.ecosystem": "Open Source",
    "home.ecosystem.des": "Public GitHub repo with community-contributed agent templates.",
    "home.support": "Enterprise Support",
    "home.support.des": "Dedicated support team and comprehensive documentation for enterprise users.",
    "home.features": "Key Features",
    "home.automation": "🤖 AI Automation",
    "home.automation.des": "Natural language task automation with prebuilt templates.",
    "home.integration": "🔌 Easy Integration",
    "home.integration.des": "REST APIs, webhooks and language SDKs for seamless integration.",
    "home.security": "🛡️ Enterprise Security",
    "home.security.des": "Isolated containers and persistent storage with encryption.",
    "home.extensible": "🔧 Extensible Platform",
    "home.extensible.des": "Open source ecosystem with community-contributed templates.",
    "home.go": "Ready to automate?",

    // =========== NTLite Section =========== //
    "ntlite.ntlite_name": "NTLite",
    "ntlite.aria.forum": "Link to the official NTLite guide forum",

    // =========== Footer =========== //
    "footer.description": "Build 24H2 optimized with extreme enhancements",
    "footer.version": "v1.0.0",
    "footer.download": "Download",
    "footer.stable": "Stable",
    "footer.explore": "Explore",
    "footer.connect": "Connect",
    "footer.updates": "Updates",
    "footer.subscribe": "Subscribe",
    "footer.newsletter": "Receive news about new versions and features",
    "footer.email.placeholder": "Email",
    "footer.copyright": "© 2025 CodeFlow. All rights reserved.",
    "footer.privacy": "Privacy",
    "footer.terms": "Terms",

    // =========== Accessibility =========== //
    "aria.social.twitter": "Link to FlowState's Twitter",
    "aria.social.github": "Link to FlowState's GitHub repository at https://github.com/pokemonlabs/",
    "aria.social.discord": "Link to FlowState's Discord community at https://discord.gg/jeSKrGEZ",
    "aria.social.linkedin": "Link to FlowState's LinkedIn",

    // =========== Guides ===========  //
    "guides.title": "FlowState Guides",
    "guides.description": "🚀 Master AI automation with our comprehensive guides.",
    "guides.meta_title": "Guides and Tutorials - FlowState AI",
    "guides.support.title": "Join our community!",
    "guides.support.description1": "Get help and share your automations with others. Connect with us on",
    "guides.support.emphasis1": "Discord",
    "guides.support.description2": "and",
    "guides.support.emphasis2": "GitHub",
    "guides.support.description3": "to stay updated",
    "guides.guide1.title": "Personal AI Assistant",
    "guides.guide1.description": "Set up your AI assistant for daily tasks, reminders, and information lookup.",
    "guides.guide2.title": "Browser Automation",
    "guides.guide2.description": "Automate web browsing tasks with AI-powered navigation and data extraction.",
    "guides.guide3.title": "System Automation",
    "guides.guide3.description": "Control your computer with natural language commands and automated workflows.",
    "guides.guide4.title": "Scheduled Tasks",
    "guides.guide4.description": "Create recurring automations with cron scheduling and persistent storage.",
    "guides.view_more": "View more",
    "guides.guide5.title": "Content Generation",
    "guides.guide5.description": "Automate content creation and SEO optimization with AI templates.",
    "guides.guide6.title": "Web Scraping",
    "guides.guide6.description": "Safe and efficient web data collection with proxy support and rate limiting.",
    "guides.guide7.title": "API Integration",
    "guides.guide7.description": "Connect FlowState with your apps using REST APIs and webhooks.",
    "guides.guide8.title": "Custom Agents",
    "guides.guide8.description": "Build and deploy your own specialized AI agents using our SDK.",

    // =========== Tools =========== //
    "tools.meta_title": "Optimization Tools - FlowStateOS",
    "tools.title": "Pro Personalization",
    "tools.subtitle": "🚀 Optimization - Security - Personalization Tools",
    "tools.opensource.title": "Important!",
    "tools.opensource.description": "Most of the tools recommended here are Open Source. If you find them useful, please consider giving a star on their official repositories to support the developers.",
    "tools.opensource.how_to_help": "How to help?",
    "tools.opensource.step1": "Visit the GitHub link of each tool",
    "tools.opensource.step2": 'Click the "⭐ Star" button in the top right corner',
    "tools.opensource.step3": "Done! You will be contributing to the growth of the project",
    "tools.category1.title": "🛠 Optimization",
    "tools.category2.title": "🎨 Personalization",
    "tools.category3.title": "🔒 Security",
    "tools.tool1.name": "ChrisTitus WinUtil",
    "tools.tool1.description": "Complete system optimization suite",
    "tools.tool2.name": "Microsoft PowerToys",
    "tools.tool2.description": "Official productivity suite",
    "tools.tool3.name": "StartAllBack",
    "tools.tool3.description": "Classic Start Menu for Win11",
    "tools.tool4.name": "Windhawk",
    "tools.tool4.description": "Extreme personalization for Windows",
    "tools.tool5.name": "BleachBit",
    "tools.tool5.description": "Deep and secure cleaning",
    "tools.tool6.name": "O&O ShutUp10",
    "tools.tool6.description": "Privacy control",
    "tools.tags.windows": "Windows 10/11",
    "tools.tags.windows11": "Windows 11",
    "tools.tags.windows_all": "Windows 7/8/10/11",
    "tools.tags.opensource": "Open Source",
    "tools.tags.low_risk": "Low risk",
    "tools.tags.medium_risk": "Medium risk",
    "tools.download": "Download",

    // =========== Software =========== //
    "software.meta_title": "Essential Software - FlowStateOS",
    "software.title": "Recommended Software for Everyone",
    "software.subtitle": "🚀 Explore reliable software that fit your needs",
    "software.opensource.title": "Important Disclaimer",
    "software.opensource.description": "Please note that the software listed here is provided as-is.", 
    "software.opensource.description2": "Use at your own risk and ensure compatibility with your system before installation.",
    "software.opensource.how_to_help": "How to Get the Most Out of These Tools?",
    "software.opensource.step1": "Review the software requirements and compatibility",
    "software.opensource.step2": "Ensure your system meets the minimum specifications",
    "software.opensource.step3": "Install and use according to the developer’s instructions. Always back up your data before making changes.",
    "software.category1.title": "🛠 Drivers & Runtime",
    "software.category2.title": "🎨 Aplicaciones de Producción",
    "software.category3.title": "Software para Windows",
    "software.tool1.name": "Runtime de DirectX",
    "software.tool1.description": "Entorno de ejecución para DirectX 9, 10, 11 y 12",
    "software.tool2.name": "Runtime de VC++",
    "software.tool2.description": "Bibliotecas de ejecución de Visual C++ para Windows",
    "software.tool3.name": "Runtime de escritorio .NET 5.0",
    "software.tool3.description": "Entorno de ejecución para aplicaciones de escritorio .NET 5.0",
    "software.tool4.name": "Runtime de escritorio .NET 6.0",
    "software.tool4.description": "Entorno de ejecución para aplicaciones de escritorio .NET 6.0",
    "software.tool5.name": "Runtime de escritorio .NET 7.0",
    "software.tool5.description": "Entorno de ejecución para aplicaciones de escritorio .NET 7.0",
    "software.tool6.name": "Runtime de escritorio .NET 8.0",
    "software.tool6.description": "Entorno de ejecución para aplicaciones de escritorio .NET 8.0",
    "software.tags.windows": "Windows 10/11",
    "software.tags.opensource": "Microsoft",
    "software.tags.medium_risk": "Required",
    "software.download": "Download",
    "software.tags.cross_platform": "Cross-platform",
    "software.tags.stable": "Stable",
    "software.tool7.name": "Runtime de Edge WebView2",
    "software.tool7.description": "Runtime de WebView2 para Microsoft Edge",
    "software.tool8.name": "GIMP",
    "software.tool8.description": "Free and open-source image editor.",
    "software.tool9.name": "Krita",
    "software.tool9.description": "Digital painting software for artists.",
    "software.tool10.name": "Blender",
    "software.tool10.description": "3D tool for modeling, animation, and rendering.",
    "software.tool11.name": "Inkscape",
    "software.tool11.description": "Free and open-source vector graphics editor.",
    "software.tool12.name": "Darktable",
    "software.tool12.description": "Non-destructive photo editing software.",
    "software.tool13.name": "Audacity",
    "software.tool13.description": "Free and open-source audio editor.",
    "software.tool14.name": "OBS Studio",
    "software.tool14.description": "Software for recording and live streaming.",
    "software.tool15.name": "Notepad++",
    "software.tool15.description": "Advanced text editor for Windows.",
    "software.tool16.name": "7-Zip",
    "software.tool16.description": "File compression and decompression tool.",
    "software.tool17.name": "VLC Media Player",
    "software.tool17.description": "Multi-platform media player.",
    "software.tool18.name": "LibreOffice",
    "software.tool18.description": "Free and open-source office suite.",
    "software.tool19.name": "Paint.NET",
    "software.tool19.description": "Editor de imágenes simple pero potente para Windows.",
    "software.tool20.name": "WinRAR",
    "software.tool20.description": "Herramienta de compresión de archivos popular.",
    "software.tool21.name": "CPU-Z",
    "software.tool21.description": "Herramienta de diagnóstico del sistema.",

    // =========== Downloads =========== //
    "downloads.hero_description": "🚀 Modified ISOs",
    "downloads.announcement.title": "🛠️ Important:",
    "downloads.announcement.full_text": "These ISOs were created with NTLite, a tool anyone can use to create their own customized ISO.",
    "downloads.announcement.security_title": "⚠️ Security Recommendation:",
    "downloads.announcement.recommendation": "For maximum reliability, we recommend creating your own version using:",
    "downloads.announcement.official_guides": "NTLite official guides",
    "downloads.announcement.our_guides": "Our",
    "downloads.announcement.custom_tip": "💡 A custom ISO avoids bloatware and adapts exactly to your needs",
    "downloads.latest_version.title": "🚀 Latest Version",
    "downloads.latest_version.name": "FlowStateOS 11",
    "downloads.latest_version.build_info": "Build 24H2 optimized with extreme enhancements",
    "downloads.latest_version.build_info_23H2": "Build 23H2 with new features",
    "downloads.11_versions.title": "💿​ FlowStateOS 11",
    "downloads.previous_versions.title": "💿​ Other Versions",
    "downloads.version1.name": "FlowStateOS 10",
    "downloads.version1.build_info": "Build 22H2 with Legacy support",
    "downloads.version2.name": "FlowStateOS 11",
    "downloads.version2.build_info": "Build 23H2 with new features and optimizations",
    "downloads.version3.build_info": "Build 22H2 with extreme enhancements",
    "downloads.tags.x64_uefi": "x64 UEFI",
    "downloads.tags.stable": "Stable",
    "downloads.tags.updated": "Updated",
    "downloads.tags.limited_support": "Limited support",
    "downloads.download_button": "Download",
    "downloads.iso_details": "ISO Details",
    "downloads.main_features": "Main Features",
    "downloads.features.optimization": "Maximum performance optimization",
    "downloads.features.telemetry": "Reduced telemetry",
    "downloads.features.gaming": "Ideal for gamers and advanced users",
    "downloads.features.security": "Enhanced security and official focus",
    "downloads.long_term": "Long-term goal",
    "downloads.long_term_desc": "Refined and optimized operating system for prolonged use",
    "downloads.guide_info": "The guide to create this ISO comes from this forum",
    "downloads.guide_link": "Hellbovine Optimized Image Guide",
    "downloads.features.iso_size": "3.6 GB ISO",
    "downloads.features.installed_size_3gb": "3.8 GB ISO",
    "downloads.features.installed_size_4gb": "4.8 GB ISO",
    "downloads.features.debloated_optimized": "Optimized from the start",
    "downloads.features.full_updatable_build": "Full and Updatable Version",
    "downloads.features.automatic_updates_paused": "Automatic Updates Paused Until 2029",
    "downloads.features.intel_rst_drivers": "Intel RST Drivers Integrated in Installation",
    "downloads.features.extreme_performance": "Extreme Performance for your Applications and Games",
    "downloads.features.uwp_apps_support": "Full Support for UWP Apps, Xbox, MS Store, and more",
    "downloads.features.additional_language_support": "Full Support for Additional Language Packs, Voice, etc.",
    "downloads.features.optional_features_support": "Full Support for all optional features, including WSA and WSL2",
    "downloads.features.improvements_optimizations": "Additional Improvements and Optimizations Included",
    "downloads.features.no_preinstalled_uwp_apps": "No Pre-installed UWP Apps",
    "downloads.features.ms_store_installer_included": "MS Store Installer Included",
    "downloads.features.full_featured_updatable_build": "Full and Updatable Version",
    "downloads.features.automatic_updates_paused_3000": "Automatic Updates Paused Until 2029",
    "downloads.features.optional_system_transparency": "Includes Optional System Transparency",
    "downloads.features.optional_gallery_settings_home": "Includes Optional 'Gallery' and 'Settings Home Page'",
    "downloads.features.extreme_performance_apps_games": "Extreme Performance for your Applications and Games",
    "downloads.features.integrates_intel_rst_serial_io": "Integrates Intel RST and Serial IO Drivers in Installation",
    "downloads.features.full_support_uwp_xbox_ms_store": "Full Support for UWP Apps, Xbox, MS Store, and more",
    "downloads.features.full_support_language_packs": "Full Support for Additional Language Packs, Voice, etc.",
    "downloads.features.full_support_optional_features": "Full Support for all optional features, including WSA and WSL2",
    "downloads.features.enabled_rounded_corners_acrylic_mica": "Rounded Corners, Acrylic, and Mica Enabled by Default (Even in a VM!)",
    "downloads.features_no_internet": "No Internet connection required for installation",
    "downloads.features_telemetry": "Telemetry and Tracking Removed",
    "downloads.features.additional_improvements_optimizations": "Additional Improvements and Optimizations Included",
  },
};
