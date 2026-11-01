## Para retomar en otra conversación

- **Qué es:** demo conceptual de una landing para una nutricionista ficticia (Lic. Carolina Bustos). HTML, CSS y JS vanilla, sin build. Reglas de trabajo en `CLAUDE.md`.
- **Fuentes:** objetivos y decisiones en [brief.md](brief.md); textos aprobados en [contenido.md](contenido.md) (el HTML se arma desde ahí, sin inventar contenido); estilo en la guía aprobada [styleguides/bc-ficha-trazo/](../styleguides/bc-ficha-trazo/).
- **Estado:** las tres páginas están construidas (`index.html`, `preguntas-frecuentes.html`, `sobre-mi.html`). Falta revisarlas en el navegador con [checklists.md](checklists.md) y resolver los Pendientes de abajo.
- **Cómo se trabaja:** una sección por vez, con revisión entre cada una; plan previo si el cambio toca más de un archivo; todo valor visual en tokens de `:root`; los commits los hace el usuario.

## Estado actual

Última actualización: 31/10/2026.

### Archivos

- `index.html`: landing. Secciones: aviso conceptual, header, hero, Para quién es, Cómo trabajo, Sobre mí, Consultas (`#consultas`), Primera consulta (`#primera-consulta`), Testimonios, Preguntas frecuentes (4), Contacto, guía de celiaquía (oculta con `hidden`) y footer.
- `preguntas-frecuentes.html`: las 13 preguntas, en 2 columnas desde 48rem.
- `sobre-mi.html`: hero, bloque con retrato y texto, Formación y cierre.
- `css/styles.css`: tokens y componentes de la guía, más los agregados de abajo.
- `js/main.js`: solo el slider de testimonios.

### Decisiones de la construcción (31/10/2026)

- **Hero de la home sin foto,** con la ilustración "Consulta". La franja lleva título, matrícula y modalidad, sin días.
- **Tipografías desde Google Fonts.**
- **Tarjetas de 4** (Para quién es, Cómo trabajo) en 2 × 2 en escritorio.
- **Bandas de fondo:** para que la home no se lea como una sola superficie, tres envoltorios `.banda` (crema `--color-banda`, esquinas redondeadas) agrupan Para quién es, Consultas + Primera consulta y Contacto. El resto queda en hueso.
- **Ilustraciones de trazo:** consulta (hero), recorrido (Cómo trabajo), conversación (Primera consulta), taza (Contacto), pregunta (preguntas frecuentes) y libro (sobre mí).
- **Testimonios en slider:** sin JS se desliza (scroll-snap). Con JS suma Anterior / Siguiente, "1 de 3" y avance automático cada 7 s (`--slider-intervalo`) con botón Pausar (WCAG 2.2.2). Se pausa con mouse o foco encima, se detiene si la persona navega y no arranca con `prefers-reduced-motion`.
- **Preguntas frecuentes:** en la home solo 4 (obra social, cómo se paga, dejar de comer muchas cosas, online desde otro país) y el botón a `preguntas-frecuentes.html`. Las 4 están repetidas: si cambia una respuesta, se cambia en las dos páginas.
- **Mapa:** iframe de Google Maps centrado en barrio Echesortu, sin marcar dirección (la dirección es ficticia).
- **Instagram** en el footer como texto, sin enlace, para no apuntar a una cuenta ajena.
- **Páginas interiores:** mismo aviso, header y footer que la home. El menú va a `index.html#…`, salvo "Sobre mí" y "Preguntas frecuentes", que van a sus páginas (`aria-current="page"` en la propia). Cabecera `.pagina__cabecera`: título a la izquierda, ilustración a la derecha.
- **Tono:** "comer tranquila" se reservaba para el hero, pero el h2 del bloque con retrato de `sobre-mi.html` también es "Nutrición para que vuelvas a comer tranquila" (pedido el 31/10/2026; falta confirmarlo con la clienta).

### Agregados a la guía

- **Clases:** `.salto`, `.banda`, `.bloque__contenido`, `.lista`, `.slider*`, `.mapa`, `.contacto__datos`, `.faq--columnas`, `.pagina__cabecera`, `.pagina__ilustracion`, `[hidden]`. Las `sg-*` de estructura pasaron a `.contenedor`, `.seccion`, `.seccion__titulo` y `.seccion__intro`.
- **Tokens:** `--color-banda`, `--alto-header`, `--ilustracion-mediana`, `--mapa-proporcion`, `--opacidad-inactivo`, `--slider-intervalo`.

### Decisiones de la revisión del brief

- **Alcance de demo:** sin métricas, analítica ni posicionamiento. Solo título, descripción y HTML semántico.
- **Precios** solo en Consultas; **"qué traer"** solo en Primera consulta. Las preguntas frecuentes enlazan a esas secciones.
- **WhatsApp** con mensaje precargado como plantilla ("Modalidad: … / Motivo de consulta: …"). Sin plazo de respuesta: "lo antes posible". No se ofrecen llamadas.
- **Mail** solo para profesionales de la salud (ficticio). **Instagram** solo en el footer.
- **Online:** martes y jueves, igual que el presencial. Desde el exterior, USD por PayPal. Se atiende a chicos, con un adulto presente.
- **Tono:** voseo; "panza" en títulos de tarjetas y preguntas frecuentes, "abdomen" en el resto.
- **Imágenes:** nada de ensaladas, bowls, hojas, frutas, cintas métricas ni estetoscopios.
- **Respuestas ficticias:** cancelación con 24 horas de aviso; se le puede escribir entre consultas con dudas puntuales.

### Notas técnicas

- **Animaciones sin JS:** la aparición al entrar en pantalla usa `animation-timeline: view()` (sin soporte en Firefox: se ve sin animación). La altura animada de las preguntas usa `::details-content` + `interpolate-size` (solo Chromium). Todo se desactiva con `prefers-reduced-motion`. Dentro del slider la aparición está desactivada, porque las fichas podían quedar invisibles.
- **Ilustraciones SVG:** `aria-hidden="true"`, `pathLength="1"` en cada trazo, viewBox de 120 (íconos) o 240 (escena del hero). El grosor va en unidades del SVG (`--trazo-grosor`, `--trazo-grosor-escena`).
- **Header fijo y anclas:** `scroll-padding-top` usa `--alto-header` (12rem en móvil, 6rem desde 56rem). Si cambia la navegación, revisar ese valor.
- **Contraste:** calculado con WCAG 2.x. "Trazo" y "filete" nunca se usan para texto. Sobre la banda crema: texto 12,27:1, secundario 5,76:1, acento 5,25:1.
- **Header y footer repetidos** en las tres páginas: si cambia la navegación, el WhatsApp o un dato del footer, hay que editar los tres archivos.

## Pendientes

1. **Menú hamburguesa en móvil.** Hoy los 7 enlaces ocupan unas 3 líneas y el header fijo queda muy alto en 375 px. Tiene que funcionar sin JS (por ejemplo, con `<details>`, o con la navegación visible si no hay JS) y ser accesible: botón con `aria-expanded`, foco visible y cierre con Escape. Al terminar, ajustar `--alto-header` y aplicarlo en las tres páginas.
2. **Revisar las tres páginas** con [checklists.md](checklists.md): 375, 768 y 1280 px; teclado; `prefers-reduced-motion`; consola sin errores; enlace de WhatsApp en un móvil real.
3. **`[PENDIENTE]` en el código:**
   - Retrato de la profesional (home y `sobre-mi.html`).
   - PDF de la guía de celiaquía y si será gratuita o paga.
   - Enlace real de Instagram.
   - Texto de cierre de `preguntas-frecuentes.html`.
   - Descripciones de `preguntas-frecuentes.html` y `sobre-mi.html`.
   - Lista completa de formación.
4. **Confirmar con la clienta** el título del bloque con retrato de `sobre-mi.html` (ver Tono).
5. **Opcional:** usar `.banda` en las páginas interiores (por ejemplo, para destacar Formación en `sobre-mi.html`).
6. **Cuando la web esté lista:** decidir si se borra la guía de estilo o se deja fuera del deploy (tiene `noindex`).
