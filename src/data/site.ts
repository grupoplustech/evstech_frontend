export interface NavLink {
  label: string;
  href: string;
}

export const SITE = {
  name: "EVS Tech",
  legalName: "EVS Tech C.A.",
  tagline: "Mayorista Autorizado Lenovo (ISG) y Soluciones Corporativas en Venezuela",
  description: "Mayorista autorizado Lenovo (ISG - Infrastructure Solutions Group) en Venezuela desde 2014. Especialistas en arquitectura de servidores ThinkSystem, almacenamiento y centros de datos. Suministro y comercialización corporativa de laptops ThinkPad y desktops ThinkCentre con respaldo técnico oficial.",
  url: "https://evstech.com.ve",
  phoneDisplay: "0212-5240825 / 0212-5240720",
  phoneLink1: "+582125240825",
  phoneLink2: "+582125240720",
  email: "ventas@evstech.com.ve",
  city: "Caracas",
  country: "Venezuela",
  yearsExperience: 12,
  partnerSince: 2014,
};

export const NAV_LINKS: NavLink[] = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Productos", href: "/productos" },
  { label: "Servicios", href: "/servicios" },
  { label: "Clientes y Aliados", href: "/clientes" },
  { label: "Contacto", href: "/contacto" },
];

export const CLIENTES_CORPORATIVOS = [
  { name: "PepsiCo Venezuela", category: "Alimentos y Bebidas" },
  { name: "Empresas Polar", category: "Consumo Masivo" },
  { name: "Banco Fondo Común (BFC)", category: "Banca y Finanzas" },
  { name: "Coca-Cola FEMSA Servicios", category: "Bebidas y Logística" },
  { name: "ENI Venezuela", category: "Energía y Petróleo" },
  { name: "DirecTV Venezuela", category: "Telecomunicaciones" },
  { name: "Sanofi", category: "Farmacéutica Internacional" },
  { name: "Industrias Iberia", category: "Manufactura y Alimentos" },
  { name: "Laboratorios La Santé", category: "Salud y Farmacia" },
  { name: "Laboratorios Farma", category: "Industria Farmacéutica" },
  { name: "Acumuladores Duncan", category: "Automotriz y Energía" },
];

export const DISTRIBUIDORES = [
  { name: "Corporación Comtec, C.A.", type: "Infraestructura y Soluciones TI" },
  { name: "Cisponet, C.A.", type: "Conectividad y Redes Corporativas" },
  { name: "Grupo Corporativo Marna, S.A.", type: "Integrador Corporativo" },
  { name: "Disofi, C.A.", type: "Soluciones de Oficina y TI" },
  { name: "Total IT Latam Inc", type: "Integración Regional y Data Center" },
  { name: "ESS Solutions, C.A.", type: "Servicios y Soporte TI" },
  { name: "Inversiones Corporativo Rouse, C.A.", type: "Suministro Corporativo" },
  { name: "Grupo Core ITech 2023, C.A.", type: "Infraestructura y Servicios TI" },
  { name: "Setrys, C.A.", type: "Distribución de Equipos" },
  { name: "Microbyte Technology, C.A.", type: "Hardware y Soluciones Tecnológicas" },
];

export const SERVICES = [
  {
    id: "logistica-importacion",
    title: "Logística de Importación",
    shortDesc: "Pedidos especiales y suministro directo de fábrica con disponibilidad inmediata.",
    description: "Además de contar con disponibilidad inmediata de equipos en almacenes de Venezuela, contamos con la logística internacional y el asesoramiento técnico necesario para procesar pedidos especiales directamente con los fabricantes líderes a nivel mundial.",
    iconImg: "/images/img/servicios/serv_icon1.jpg",
    features: [
      "Disponibilidad local inmediata en Caracas y despacho nacional",
      "Canal directo con fábricas Lenovo para configuraciones bajo pedido (CTO)",
      "Gestión integral de aduana y nacionalización de equipos tecnológicos",
      "Tiempos de entrega optimizados para proyectos corporativos y licitaciones"
    ]
  },
  {
    id: "datacenter",
    title: "Servicios Data Center",
    shortDesc: "Ciclo de vida completo de servidores y activos críticos de infraestructura IT.",
    description: "A través de nuestros proveedores y marcas aliadas, ofrecemos una cartera integral de servicios que admite el ciclo de vida completo de servidores y otros activos de TI, brindando asesoría de ingeniería en todas las etapas, desde la planificación hasta el mantenimiento preventivo y correctivo.",
    iconImg: "/images/img/servicios/serv_icon2.jpg",
    features: [
      "Dimensionamiento de servidores rack y torre Lenovo ThinkSystem",
      "Soluciones de almacenamiento SAN/NAS e hiperconvergencia",
      "Consolidación y virtualización con VMware y Microsoft Hyper-V",
      "Mantenimiento programado y monitoreo de salud de hardware"
    ]
  },
  {
    id: "revision-equipos",
    title: "Revisión y Soporte Técnico",
    shortDesc: "Personal capacitado para diagnóstico, mantenimiento y reparación de equipos.",
    description: "Contamos con personal altamente calificado y capacitado en las plataformas corporativas más exigentes, ofreciendo soporte técnico preventivo y correctivo para maximizar la continuidad operativa de sus clientes e instituciones.",
    iconImg: "/images/img/servicios/serv_icon3.jpg",
    features: [
      "Diagnóstico exhaustivo de fallas de hardware en laptops y desktops",
      "Mantenimiento térmico y limpieza de componentes críticos",
      "Actualizaciones de memoria RAM certificada y almacenamiento SSD/NVMe",
      "Configuración y clonación de imágenes corporativas para despliegues masivos"
    ]
  },
  {
    id: "garantias",
    title: "Gestión de Garantías y Extensiones",
    shortDesc: "Protección extendida oficial para prolongar la vida útil de los equipos.",
    description: "Nuestros proveedores cuentan con una amplia variedad de opciones para proteger las inversiones tecnológicas y prolongar su ciclo de vida. Gestionamos mejoras en extensión de tiempo (hasta 5 años) y tipos de cobertura avanzada como protección contra daños accidentales y soporte en sitio (Onsite).",
    iconImg: "/images/img/servicios/serv_icon4.jpg",
    features: [
      "Canal directo para tramitación de garantías oficiales de fábrica",
      "Extensiones de garantía Lenovo Care Pack de 1 a 5 años",
      "Soporte Premier Support con atención técnica prioritaria",
      "Protección contra Daños Accidentales (ADP) para portátiles de alta movilidad"
    ]
  }
];

export const PRODUCT_LINES = [
  {
    id: "datacenter",
    title: "Data Center, Servidores & Racks",
    brand: "Lenovo ThinkSystem (Mayorista ISG)",
    img: "/images/img/index/servidores.jpg",
    tagline: "Arquitectura número uno en confiabilidad x86 a nivel mundial",
    description: "Servidores diseñados para cargas de trabajo críticas: virtualización, bases de datos SQL/Oracle, almacenamiento de archivos corporativos y servicios en la nube privada.",
    series: [
      { name: "ThinkSystem Rack Servers (1U / 2U)", desc: "Máxima densidad de cómputo para centros de datos empresariales e infraestructuras virtuales." },
      { name: "ThinkSystem Tower Servers", desc: "Servidores de torre ultrasilenciosos para sucursales, bancos y oficinas sin cuarto de servidores dedicado." },
      { name: "Almacenamiento & Redes", desc: "Soluciones de almacenamiento híbrido, switches Top-of-Rack y tarjetas de fibra canal." },
    ]
  },
  {
    id: "desktops",
    title: "Desktops, Todo en Uno & Workstations",
    brand: "Lenovo ThinkCentre & ThinkStation",
    img: "/images/img/index/desktops.jpg",
    tagline: "Potencia continua, formato compacto y gestión remota",
    description: "Estaciones de trabajo y computadoras de escritorio construidas para operar de manera silenciosa, eficiente y continua durante jornadas de alta exigencia laboral.",
    series: [
      { name: "ThinkCentre M-Series Tiny (1L)", desc: "Factor de forma minúsculo de un litro con toda la potencia de un equipo de escritorio estándar." },
      { name: "ThinkCentre All-in-One (AIO)", desc: "Diseño elegante todo en uno con pantallas antirreflejo para oficinas y atención al público." },
      { name: "ThinkCentre Tower & SFF", desc: "Torres expandibles con slots PCIe para almacenamiento masivo y tarjetas gráficas dedicadas." },
    ]
  },
  {
    id: "laptops",
    title: "Laptops & Portátiles Corporativas",
    brand: "Lenovo ThinkPad / IdeaPad / V-Series",
    img: "/images/img/index/laptops.jpg",
    tagline: "Rendimiento, durabilidad militar y seguridad empresarial",
    description: "Líneas de portátiles diseñadas para el trabajo exigente, ejecutivos móviles y equipos de alto rendimiento. Equipadas con procesadores Intel Core y AMD Ryzen de última generación, chasis reforzados y certificación militar MIL-STD-810H.",
    series: [
      { name: "ThinkPad Serie X / X1 Carbon", desc: "Ultrabooks premium ultraligeras de fibra de carbono para ejecutivos de alta movilidad." },
      { name: "ThinkPad Serie T / L", desc: "El caballo de batalla corporativo: máxima durabilidad, conectividad y facilidad de administración TI." },
      { name: "Lenovo Serie V / IdeaPad Pro", desc: "Excelente balance entre costo y potencia para pymes, comercios y profesionales independientes." },
    ]
  },
];
