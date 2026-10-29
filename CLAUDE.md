<!--
  Plantilla de CLAUDE.md
  Cómo usarla:
  1. Copia este archivo a la raíz del proyecto como CLAUDE.md.
  2. Elige UNA variante de stack (A o B) y borra la otra.
  3. Sustituye todo lo que está entre [CORCHETES].
  4. Borra este comentario.
-->

# Proyecto: Demo Nutricionista (landing)

## Stack

<!-- ===== Variante A: sitio estático ===== -->

- HTML, CSS y JavaScript vanilla. Sin frameworks, sin herramientas de build
  y sin dependencias salvo que yo lo apruebe explícitamente.
- Estructura: index.html, css/styles.css, js/main.js, assets/img/
- Hosting: Vercel / Netlify (es un demo)

## Convenciones

### Comunes

- HTML semántico: header, nav, main, section, footer. Un solo h1 por página.
- CSS mobile-first, con variables en :root para colores, tipografías y espaciados.
- Clases en kebab-case con BEM ligero. Unidades rem. Sin estilos inline.
- JavaScript solo como mejora progresiva: la página debe funcionar sin JS.
- Animaciones sutiles, siempre respetando prefers-reduced-motion.
- Imágenes con alt, width y height; loading="lazy" excepto la del hero.
- Contraste mínimo WCAG AA.

## Forma de trabajar

- Antes de cambios que afecten a más de un archivo, propón un plan y espera mi aprobación.
- Trabaja una sección cada vez.
- No inventes contenido: ni cifras, ni clientes, ni testimonios, ni proyectos.
- Los proyectos conceptuales deben indicarse siempre como tales.
  Si falta algo, usa un marcador [PENDIENTE: descripción].
- Explica brevemente cualquier decisión técnica que no sea obvia.
- No hagas commits: los hago yo.
- Proyecto conceptual: todos los datos (nombre, matrícula, testimonios) son ficticios y la web muestra un aviso visible que lo indica.
- Todo valor visual (colores, tipografías, espaciados, radios) va en tokens, para poder replicar la web con otros profesionales.

## Contexto

- Brief del proyecto: docs/brief.md
- Ideas pendientes: docs/backlog.md
- docs/servicios.md: los servicios que ofrece el/la profecional
