# Checklists: desarrollo web con Claude Code

## Al empezar un proyecto

- [x] Carpeta del proyecto, `git init` y primer commit.
- [x] `CLAUDE.md` a partir de la plantilla: stack, convenciones, forma de trabajar y contexto.
- [x] `docs/brief.md`: objetivo, públicos, tono, secciones, fuera de alcance, diseño, técnico y criterio de éxito.
- [x] `docs/backlog.md` con la sección "Estado actual".
- [x] Revisión crítica del brief (prompt 1.1) y coherencia con `CLAUDE.md` (prompt 1.2).
- [x] Tres direcciones visuales, elegir una y aprobar la guía de estilos antes de construir.

## Después de cada cambio de Claude

- [ ] Repasar el prompt punto por punto contra el diff: ¿se hizo todo y solo eso?
- [ ] Revisar en el navegador a 375 px, 768 px y 1280 px.
- [ ] Recorrer la página solo con Tab: el foco debe ser visible y nada debe quedar inaccesible.
- [ ] Emular `prefers-reduced-motion: reduce` si hay animaciones.
- [ ] Revisar la consola sin errores si hay JavaScript.
- [ ] Si una decisión cambió, actualizar el brief en el mismo commit.
- [ ] Commit con un mensaje descriptivo, un cambio por commit.

## Antes de publicar

- [ ] No quedan `[PENDIENTE]` (prompt 4.1).
- [ ] Permisos resueltos para mostrar contenido de terceros (proyectos, logos, fotos).
- [ ] `<head>` completo: title, description, theme-color, Open Graph y Twitter Card.
- [ ] Imagen para compartir de 1200×630 y favicon (SVG + apple-touch-icon PNG de 180×180).
- [ ] Imágenes en WebP, con `alt`, `width`, `height` y `loading="lazy"` por debajo del hero.
- [ ] Enlaces externos con `target="_blank"` y `rel="noopener"`.
- [ ] Archivos internos excluidos de la publicación (guía de estilos, og-image.html) y con `noindex`.
- [ ] Revisar qué queda visible si el repositorio es público.
- [ ] Enlaces de contacto probados en un móvil real (WhatsApp, email).

## Después de publicar

- [ ] Abrir la web en un móvil real.
- [ ] Comprobar que los archivos internos dan 404.
- [ ] Vista previa al compartir: LinkedIn Post Inspector y opengraph.xyz.
- [ ] Lighthouse en incógnito, en móvil, y clasificar los hallazgos (prompt 4.4).
- [ ] Actualizar `og:url` y `og:image` si cambia el dominio, y añadir canonical.
