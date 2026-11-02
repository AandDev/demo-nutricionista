## Para retomar en otra conversación

- **Qué es:** demo conceptual de una landing para una nutricionista ficticia (Lic. Carolina Bustos). HTML, CSS y JS vanilla, sin build. Reglas de trabajo en `CLAUDE.md`.
- **Fuentes:** objetivos y decisiones en [brief.md](brief.md); textos aprobados en [contenido.md](contenido.md) (el HTML se arma desde ahí, sin inventar contenido); estilo en la guía aprobada [styleguides/bc-ficha-trazo/](../styleguides/bc-ficha-trazo/).
- **Estado:** demo publicado en Netlify (01/11/2026). Cuatro páginas: `index.html`, `sobre-mi.html`, `preguntas-frecuentes.html` y `404.html`. Revisado en el navegador por el usuario. Quedan pendientes menores que no afectan al demo publicado (ver Pendientes). Datos Open Graph listos (02/11/2026); falta capturar la imagen para compartir.
- **Cómo se trabaja:** una sección por vez, con revisión entre cada una; plan previo si el cambio toca más de un archivo; todo valor visual en tokens de `:root`; los commits los hace el usuario.

## Estado actual

Última actualización: 01/11/2026.

### Archivos

- `index.html`: landing. Secciones: aviso conceptual, header, hero, Para quién es, Cómo trabajo, Sobre mí, Consultas (`#consultas`), Primera consulta (`#primera-consulta`), Testimonios, Preguntas frecuentes (4), Contacto, guía de celiaquía (oculta con `hidden`) y footer.
- `preguntas-frecuentes.html`: las 13 preguntas, en 2 columnas desde 48rem.
- `sobre-mi.html`: hero, bloque con retrato y texto, Formación y cierre. `<main class="pagina--compacta">`: en móvil las secciones llevan 2rem arriba y abajo (en vez de 4rem); desde 56rem, el espacio normal.
- `404.html`: página de error con el mismo aviso, header y footer; título "No encontramos esta página", ilustración "Cartel" y botón a la home. Lleva `noindex`.
- `og-image.html` + `css/og-image.css`: página auxiliar (`noindex`) para capturar la imagen para compartir. No está enlazada desde el sitio. Los dos archivos están en `.gitignore`: quedan solo en local.
- `css/styles.css`: tokens y componentes de la guía, más los agregados de abajo.
- `js/main.js`: menú de móvil y slider de testimonios.
- `assets/img/`: imágenes (`retrato-carolina-bustos.jpg`).
- `README.md`: qué es el proyecto, stack, estructura y cómo verlo.

### Decisiones de la construcción (31/10/2026)

- **Hero de la home sin foto,** con la ilustración "Consulta". La franja lleva título, matrícula y modalidad, sin días.
- **Tipografías desde Google Fonts.**
- **Tarjetas de 4** (Para quién es, Cómo trabajo) en 2 × 2 en escritorio. Tarjetas más bajas (01/11/2026): relleno `--space-5` en todos los anchos (antes `--space-6` desde 36rem), títulos de tarjeta en `--fs-lg` y columnas del bloque 1 : 3 (antes 1 : 2.4). Se descartó dejar fijo (sticky) el título de la columna izquierda. El slider de testimonios y las preguntas frecuentes ocupan toda la columna, alineados con las demás tarjetas; `--ancho-lectura` se aplica solo al texto (`.testimonio__cita`, `.faq__respuesta`).
- **Bandas de fondo:** para que la home no se lea como una sola superficie, tres envoltorios `.banda` (crema `--color-banda`, esquinas redondeadas) agrupan Para quién es, Consultas + Primera consulta y Contacto. El resto queda en hueso.
- **Ilustraciones de trazo:** consulta (hero), recorrido (Cómo trabajo), agenda (Consultas: calendario con martes y jueves marcados), conversación (Primera consulta), pregunta (preguntas frecuentes, en la home y en su página) y libro (sobre mí). Contacto quedó sin ilustración (se sacó la taza el 01/11/2026). En la home van centradas en la columna del título, a `--ilustracion-grande` (11rem).
- **Testimonios en slider:** sin JS se desliza (scroll-snap). Con JS suma Anterior / Siguiente, "1 de 3" y avance automático cada 7 s (`--slider-intervalo`) con botón Pausar (WCAG 2.2.2). Se pausa con mouse o foco encima, se detiene si la persona navega y no arranca con `prefers-reduced-motion`.
- **Preguntas frecuentes:** en la home solo 4 (obra social, cómo se paga, dejar de comer muchas cosas, online desde otro país) y el botón a `preguntas-frecuentes.html`. Las 4 están repetidas: si cambia una respuesta, se cambia en las dos páginas.
- **Mapa:** iframe de Google Maps centrado en barrio Echesortu, sin marcar dirección (la dirección es ficticia). Desde el 01/11/2026 va en una fila propia debajo del título y la ficha (`.contacto__mapa`, a todo el ancho), rectangular: 16:9 en móvil y 3:1 desde 56rem.
- **Instagram** en el footer como texto, sin enlace, para no apuntar a una cuenta ajena.
- **Páginas interiores:** mismo aviso, header y footer que la home. El menú va a `index.html#…`, salvo "Sobre mí" y "Preguntas frecuentes", que van a sus páginas (`aria-current="page"` en la propia). Cabecera `.pagina__cabecera`: título a la izquierda, ilustración a la derecha.
- **Menú en móvil (01/11/2026):** por debajo de 56rem, con JS, la lista se pliega detrás de un botón solo con el ícono de tres líneas, sin borde (`aria-label="Menú"`, `aria-expanded`, área táctil `--area-tactil`). `main.js` agrega `.con-js` al `<html>` solo si el menú existe; sin JS la lista se ve como antes. El panel se abre debajo del header, sobre el contenido, así el header no cambia de alto. Se cierra con Escape (devuelve el foco al botón), al elegir un enlace, con clic fuera o si el foco sale del menú.
- **Navegación con 6 enlaces (01/11/2026):** se sacó "Primera consulta" del menú en las tres páginas. La sección `#primera-consulta` sigue en la home y las preguntas frecuentes siguen enlazando a ella.
- **WhatsApp flotante (01/11/2026):** con JS y por debajo de 60rem (unos 960 px, donde "Escribime" bajaba a una tercera fila del header), el "Escribime" del header se convierte con CSS en un botón circular fijo abajo a la derecha, solo con el ícono de WhatsApp. Este corte es distinto del menú (56rem): entre 56 y 60rem se ve la navegación completa y, a la vez, el botón flotante. Es el mismo enlace (la URL sigue en un solo lugar por página); el texto queda para lectores de pantalla como "Escribime por WhatsApp". Colores de la marca (acento + sobre-acento), porque el verde de WhatsApp con ícono blanco no llega a 3:1. El footer suma abajo el alto del botón para que no tape lo último. Sin JS, y con JS desde 60rem, "Escribime" sigue en el header.
- **Tono:** "comer tranquila" se reservaba para el hero, pero el h2 del bloque con retrato de `sobre-mi.html` también es "Nutrición para que vuelvas a comer tranquila" (pedido el 31/10/2026; falta confirmarlo con la clienta).

### Agregados a la guía

- **Clases:** `.salto`, `.banda`, `.bloque__contenido`, `.lista`, `.slider*`, `.mapa`, `.contacto__datos`, `.retrato`, `.pagina--compacta`, `.contacto__mapa`, `.retrato`, `.retrato`, `.faq--columnas`, `.pagina__cabecera`, `.pagina__ilustracion`, `[hidden]`. Las `sg-*` de estructura pasaron a `.contenedor`, `.seccion`, `.seccion__titulo` y `.seccion__intro`.
- **Clases del menú y WhatsApp:** `.site-header__enlace` (la marca, enlace a la home; `aria-current="page"` en la home), `.site-nav__boton`, `.site-nav__icono`, `.site-header__whatsapp*`, `.visualmente-oculto`, `.con-js` (en `<html>`).
- **Tokens:** `--color-banda`, `--alto-header`, `--alto-header-con-menu`, `--alto-header-escritorio`, `--area-tactil`, `--icono-menu-tamano`, `--icono-menu-grosor`, `--flotante-tamano`, `--flotante-icono`, `--flotante-margen`, `--ilustracion-mediana`, `--ilustracion-grande`, `--foto-ancho-max`, `--seccion-espacio`, `--seccion-espacio-compacto`, `--mapa-proporcion`, `--mapa-proporcion-ancha`, `--opacidad-inactivo`, `--slider-intervalo`.

### Decisiones de la revisión del brief

- **Alcance de demo:** sin métricas, analítica ni posicionamiento. Solo título, descripción y HTML semántico. Desde el 02/11/2026 suma datos Open Graph para compartir el enlace (ver Open Graph en Notas técnicas).
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
- **Header fijo y anclas:** `scroll-padding-top` usa `--alto-header` (12rem en móvil sin JS, 6rem en móvil con menú, 6rem desde 56rem). El corte de 56rem también está en `main.js` (`matchMedia`): si cambia, hay que cambiarlo en los dos archivos. Si cambia la navegación, revisar ese valor.
- **Contraste:** calculado con WCAG 2.x. "Trazo" y "filete" nunca se usan para texto. Sobre la banda crema: texto 12,27:1, secundario 5,76:1, acento 5,25:1.
- **Header y footer repetidos** en las cuatro páginas (home, sobre mí, preguntas frecuentes y 404): si cambia la navegación, el WhatsApp o un dato del footer, hay que editar los cuatro archivos. En `404.html` todas las rutas son absolutas (`/css/styles.css`, `/index.html#…`), porque Vercel y Netlify la muestran en cualquier dirección inexistente, también en subcarpetas; para verla en local hace falta un servidor en la raíz. Las cuatro páginas cargan `js/main.js` (el menú lo necesita).

- **Open Graph (02/11/2026):** `index.html`, `sobre-mi.html` y `preguntas-frecuentes.html` llevan `og:` (tipo, nombre del sitio, idioma, título, descripción, URL, imagen con medidas y texto alternativo) y `twitter:card` = `summary_large_image`. Título y descripción repiten los de cada página: si cambian, hay que cambiarlos en los dos lugares. URL e imagen son absolutas, con `https://demo-nutricionista.netlify.app/`: si cambia el dominio, hay que editarlas en las tres páginas. `404.html` no lleva OG (tiene `noindex`). Las tres comparten `assets/img/og-image.png`, que se captura de `og-image.html` (página auxiliar con `noindex`, marco fijo de 1200 × 630 y estilos en `css/og-image.css`; muestra etiqueta, título del hero, nombre, la ilustración "Consulta" y el aviso "Proyecto conceptual · Datos ficticios", porque la imagen circula fuera de la web).

### Publicación (01/11/2026)

- **Netlify,** como sitio estático, sin build. Sirve `404.html` en cualquier dirección inexistente.
- **CSS sin minificar** (decisión del 01/11/2026): pesa 31,7 KB, pero Netlify lo envía comprimido (unos 8,6 KB); minificado y comprimido serían unos 4,3 KB. Para un demo no compensa sumar una herramienta de build. Si hiciera falta, la opción evaluada era minificar en el deploy con `npx lightningcss-cli` desde `netlify.toml`, sin cambiar el repositorio.

## Pendientes

Ninguno bloquea el demo publicado. Son datos que tiene que dar la clienta y mejoras opcionales.

1. **Imagen para compartir (Open Graph):** las etiquetas ya están (02/11/2026); falta capturar `og-image.html` y guardarla como `assets/img/og-image.png` (1200 × 630). Los pasos están en un comentario dentro de `og-image.html`. Después de publicar, revisar la vista previa al compartir el enlace por WhatsApp (puede tardar en actualizarse por la caché).
2. **`[PENDIENTE]` en el código** (son comentarios, no se ven en la página):
   - PDF de la guía de celiaquía y si será gratuita o paga (la sección está oculta).
   - Enlace real de Instagram (hoy va como texto ficticio).
   - Descripciones de `preguntas-frecuentes.html` y `sobre-mi.html` (tienen un texto provisorio).
   - Lista completa de formación (hoy, datos ficticios).
3. **Confirmar con la clienta:**
   - El título del bloque con retrato de `sobre-mi.html` (ver Tono).
   - El texto de cierre de `preguntas-frecuentes.html` (genérico, escrito con su tono; ver [contenido.md](contenido.md)).
4. **Favicon:** ninguna página tiene. El navegador lo pide igual: en Netlify puede verse un error en la consola y la pestaña muestra un ícono genérico.
5. **Verificar en el sitio publicado:** que `styleguides/` no se haya subido (está en `.gitignore`; solo se sube si el deploy se hizo arrastrando la carpeta) y que la 404 aparezca al entrar a una dirección inexistente.
6. **Opcional:** usar `.banda` en las páginas interiores (por ejemplo, para destacar Formación en `sobre-mi.html`).
