## Estado actual

Última actualización: 31/10/2026.

Todavía no hay código del sitio (`index.html`, `css/styles.css`, `js/main.js`). Lo hecho hasta ahora es documentación y la exploración visual.

### Documentación

- **[brief.md](brief.md)** revisado y actualizado con las decisiones de la revisión del brief (ver más abajo).
- **[contenido.md](contenido.md)** con los textos de todas las secciones, ya ajustados a esas decisiones. Es la fuente de los textos: el HTML se arma desde ahí.

### Decisiones tomadas en la revisión del brief

- **Alcance de demo:** no se implementan métricas, analítica ni trabajo de posicionamiento en Google. Solo lo básico: título, descripción y HTML semántico.
- **Orden de secciones:** Header → Hero → Para quién es → Cómo trabajo (nueva) → Sobre mí (breve) → Consultas → Primera consulta → Testimonios → Preguntas frecuentes → Contacto → Footer.
- **Hero:** título, especialidad, matrícula, modalidad y WhatsApp. Nada más.
- **Precios:** solo en Consultas. "Qué traer" solo en Primera consulta. Las preguntas frecuentes remiten con enlaces a `#consultas` y `#primera-consulta`: esas secciones deben llevar esos `id`.
- **WhatsApp:** mensaje precargado como plantilla para completar ("Modalidad: … / Motivo de consulta: …"). Sin plazo de respuesta: "lo antes posible".
- **Mail:** solo para profesionales de la salud (`profesionales@carolinabustos.example`, ficticio). Los pacientes contactan solo por WhatsApp.
- **Instagram:** solo en el footer.
- **Consultorio:** se publican la dirección (ficticia) y el mapa.
- **Online:** martes y jueves, igual que el presencial. Desde el exterior, en USD por PayPal.
- **Niños:** sí se atienden, con un adulto presente.
- **Tono:** "panza" en títulos de tarjetas y preguntas frecuentes; "abdomen" en el resto. "Comer tranquila" solo en el hero; en los textos para celíacos, familias y médicos, versión neutra.
- **Sobre mí:** versión breve en la home. Más adelante, una página `sobre-mi.html` con el texto completo (ya redactado al final de contenido.md). El enlace desde la home se muestra solo cuando esa página exista.
- **Imágenes:** fotos de ejemplo, ilustraciones SVG propias y stock bien seleccionado. Nada de ensaladas, bowls, hojas, frutas, cintas métricas ni estetoscopios.
- **Respuestas inventadas (ficticias):** cancelación con 24 horas de aviso; se le puede escribir entre consultas con dudas puntuales.

### Exploración visual

Se propusieron tres direcciones (A Sobremesa, B Ficha clara, C Trazo explicativo) y se armaron dos guías de estilo para comparar: A y B + C. El 31/10/2026 se eligió y aprobó **B + C · Ficha clara con trazo**, y se eliminó la guía A.

- **Guía aprobada:** [styleguides/bc-ficha-trazo/](../styleguides/bc-ficha-trazo/). Hueso y oliva, Source Serif 4 + Source Sans 3, etiquetas en versalitas, grilla asimétrica, hero sin foto e ilustraciones SVG de una línea terracota.
- Para verla: abrir `styleguide.html` en el navegador (mejor en Chrome o Edge; ver notas técnicas).

Ajustes aplicados antes de aprobarla:

- Estilo más suave: radios más grandes (nuevo `--radius-lg`), botones y navegación en forma de píldora, y una sombra muy leve (`--sombra-ficha`).
- Sin filetes: las secciones se separan con aire y cada elemento pasa a ser una ficha redondeada (clase `.tarjeta`) en Para quién es, Cómo trabajo, Consultas, Primera consulta (con número en círculo oliva), Testimonio (con comilla terracota) y Preguntas frecuentes.
- Header en banda salvia de ancho completo, fijo arriba (`position: sticky`). Footer en banda oscura con las esquinas de arriba redondeadas, con tokens propios (`--color-oscuro-*`) que cumplen AAA.
- Hero en dos columnas: el texto y un panel con la ilustración "Consulta" (boceto SVG de trazo: dos personas en un escritorio, con una taza). Los datos profesionales pasan a una franja debajo. La taza queda sin asignar.
- La ficha pone etiqueta y dato lado a lado según el ancho de su caja (container query), así en tarjetas angostas quedan apilados.

La guía tiene todos sus tokens (color, tipografía, espaciado, radios, sombras, movimiento) en `:root` de `styleguide.css`, con el contraste calculado de cada color.

### Notas técnicas para retomar

- **Animaciones sin JS:** "aparecer al entrar en pantalla" usa animaciones de CSS ligadas al scroll (`animation-timeline: view()`). En Firefox no hay soporte: los bloques se ven sin animación. La altura animada de las preguntas frecuentes usa `::details-content` + `interpolate-size` (solo Chromium). Todo se desactiva con `prefers-reduced-motion`.
- **Ilustraciones SVG:** cada trazo lleva `pathLength="1"` para animarlo con `stroke-dashoffset` de 1 a 0. El grosor va en unidades del SVG, no en rem: `--trazo-grosor` para los íconos (viewBox de 120) y `--trazo-grosor-escena` para la escena del hero (viewBox de 240).
- **Un solo h1:** en la guía de estilo, el título del hero es un párrafo con estilo de h1. En `index.html` debe ser el h1.
- **Tipografías:** la guía de estilo las carga desde Google Fonts. Para la web final, la propuesta es alojarlas en `assets/fonts/` (falta aprobarlo).
- **Contraste:** se calculó con la fórmula WCAG 2.x. Los colores "trazo" y "filete" no se usan nunca para texto.

## Pendientes

1. **Decidir cómo se cargan las tipografías** en la web final: Google Fonts o alojadas en `assets/fonts/`.
2. **Pasar los tokens de la guía B + C a `css/styles.css`** como base del sitio.
3. **Construir `index.html` sección por sección**, en el orden de arriba, con los textos de [contenido.md](contenido.md). Incluir:
   - el aviso visible de proyecto conceptual;
   - los `id` `consultas` y `primera-consulta`;
   - el enlace de WhatsApp con la plantilla precargada;
   - la sección oculta de la guía de celiaquía (que no se vea nada).
4. **Ilustraciones:** terminar de definir cuáles van en cada sección. Hoy hay cuatro: consulta (hero), recorrido (Cómo trabajo), conversación (Primera consulta) y taza (sin asignar).
5. **Más adelante:** página `sobre-mi.html` y, al publicarla, el enlace "Conocé más sobre mí" en la home.
6. **Cuando la web esté lista:** decidir si se borra la guía de estilo o se deja fuera del deploy (tiene `noindex`).
