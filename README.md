# EVS Tech Frontend

Portal corporativo moderno y de alto rendimiento para **EVS Tech C.A.** (Mayorista Autorizado Lenovo en Venezuela desde 2014).

Desarrollado en **Astro 5 + Tailwind CSS + Nginx** con arquitectura estática ultra optimizada (Core Web Vitals 100/100, cero JavaScript innecesario en cliente, SEO semántico y metadatos actualizados).

## 🚀 Características Clave
- **Stack:** Astro 5, Tailwind CSS, Lucide Icons, Nginx Alpine.
- **Rendimiento:** Generación estática SSG con tiempos de respuesta sub-10ms.
- **Identidad de Marca:** Preservación integral del catálogo Lenovo (ThinkPad, ThinkCentre, ThinkSystem), servicios corporativos de importación/datacenter/garantías, portafolio de clientes y red de distribución.
- **SEO & Social:** OpenGraph HD (`/og-image.png`), Twitter Cards, Schema.org JSON-LD (`Organization`, `WholesaleStore`, `WebSite`), `sitemap-index.xml`, `robots.txt`, `llms.txt` y `llms-full.txt`.
- **Transición Segura:** Enlaces cruzados hacia la versión histórica preservada en `https://old.evstech.com.ve`.

## 📂 Estructura del Proyecto
```
├── public/
│   ├── favicon.ico, favicon-32x32.png, favicon-16x16.png
│   ├── apple-touch-icon-180x180.png, android-chrome-192x192.png
│   ├── og-image.png              # Banner OpenGraph HD corporativo
│   ├── logo.jpg                  # Logotipo oficial EVS Tech
│   ├── robots.txt, llms.txt, llms-full.txt
│   └── images/                   # Multimedia y fotografía oficial
├── src/
│   ├── components/               # Header y Footer responsivos
│   ├── data/site.ts              # Catálogos, servicios, clientes y metadatos
│   ├── layouts/Layout.astro      # Layout base HTML5 con Schema.org
│   └── pages/
│       ├── index.astro           # Portada interactiva y pilares de valor
│       ├── nosotros.astro        # Historia y mayorista Lenovo desde 2014
│       ├── productos.astro       # Catálogo detallado ThinkPad/Centre/System
│       ├── servicios.astro       # Importación, Data Center, Soporte y Garantías
│       ├── clientes.astro        # Empresas atendidas y red de distribuidores
│       └── contacto.astro        # Formulario B2B y canales de atención
├── Dockerfile                    # Multi-stage Docker build (Node 20 -> Nginx)
└── nginx.conf                    # Configuración optimizada con Gzip y Cache
```

## 🛠️ Comandos Locales
```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Previsualizar build
npm run preview
```

## 🐳 Docker
```bash
docker build -t evstech-frontend .
docker run -p 3000:80 evstech-frontend
```
