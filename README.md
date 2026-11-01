# Demo Nutricionista

Landing page conceptual para una licenciada en Nutrición especializada en salud digestiva (colon irritable, celiaquía, hinchazón y reflujo), con consultas presenciales en Rosario y online.

> **Proyecto conceptual.** La profesional (Lic. Carolina Bustos), su matrícula, los testimonios, los precios y los datos de contacto son ficticios. La web muestra un aviso visible que lo indica.

## Páginas

- `index.html`: la landing. Para quién es, cómo trabaja, sobre mí, consultas, primera consulta, testimonios, preguntas frecuentes y contacto.
- `sobre-mi.html`: presentación y formación.
- `preguntas-frecuentes.html`: todas las preguntas frecuentes.
- `404.html`: página de error.

## Stack

HTML, CSS y JavaScript vanilla, sin frameworks, sin herramientas de build y sin dependencias. Las tipografías se cargan desde Google Fonts.

- **Mobile-first y accesible:** HTML semántico, contraste WCAG AA, navegación con teclado y respeto de `prefers-reduced-motion`.
- **Mejora progresiva:** la página funciona sin JavaScript. El JS solo suma el menú plegable en móvil y los controles del slider de testimonios.
- **Tokens de diseño:** colores, tipografías, espaciados y radios están en variables de `:root` (`css/styles.css`), para poder adaptar la web a otros profesionales.

## Estructura

```
index.html
sobre-mi.html
preguntas-frecuentes.html
404.html
css/styles.css
js/main.js
assets/img/
docs/            brief, contenidos aprobados, checklists y backlog
```

## Verla en local

Abrir `index.html` en el navegador alcanza para las páginas principales. Para que `404.html` se vea con estilos hace falta un servidor en la raíz del proyecto (por ejemplo, la extensión Live Server de VS Code), porque usa rutas absolutas.

## Publicación

Pensada para Vercel o Netlify como sitio estático, sin configuración: los dos sirven `404.html` en las direcciones que no existen.
