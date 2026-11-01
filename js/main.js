/* =========================================================
   Lic. Carolina Bustos · Demo Nutricionista
   Solo mejora progresiva: sin JS la página funciona igual.
   ========================================================= */

/* ---------- Slider ----------
   La pista ya se desliza con CSS (scroll-snap). Acá se suman:
   - los botones Anterior / Siguiente y el "1 de 3";
   - el avance automático, con botón Pausar / Reanudar (WCAG 2.2.2).
     Se pausa con el mouse o el foco en la pista, fuera de pantalla o con
     la pestaña oculta. Se detiene si la persona navega por su cuenta.
     No arranca si pidió reducir el movimiento. */

// Convierte "7s" o "7000ms" (valor de un token CSS) a milisegundos.
const aMilisegundos = (valor, porDefecto) => {
  const numero = parseFloat(valor);
  if (Number.isNaN(numero)) return porDefecto;
  return valor.trim().endsWith("ms") ? numero : numero * 1000;
};

document.querySelectorAll("[data-slider]").forEach((slider) => {
  const pista = slider.querySelector(".slider__pista");
  const controles = slider.querySelector(".slider__controles");
  const anterior = slider.querySelector("[data-slider-anterior]");
  const siguiente = slider.querySelector("[data-slider-siguiente]");
  const pausa = slider.querySelector("[data-slider-pausa]");
  const estado = slider.querySelector("[data-slider-estado]");
  const total = pista.children.length;
  const reducirMovimiento = window.matchMedia("(prefers-reduced-motion: reduce)");
  const intervalo = aMilisegundos(
    getComputedStyle(slider).getPropertyValue("--slider-intervalo"),
    7000
  );

  if (total < 2) return;

  /* --- Navegación --- */

  // Ancho de un paso: una ficha más el espacio entre fichas.
  const paso = () => pista.children[1].offsetLeft - pista.children[0].offsetLeft;

  const actual = () => Math.round(pista.scrollLeft / paso());

  const comportamiento = () => (reducirMovimiento.matches ? "auto" : "smooth");

  const actualizar = () => {
    const indice = actual();
    // aria-disabled en lugar de disabled: así el botón no pierde el foco
    // al llegar al principio o al final.
    anterior.setAttribute("aria-disabled", String(indice <= 0));
    siguiente.setAttribute("aria-disabled", String(indice >= total - 1));
    estado.textContent = `${indice + 1} de ${total}`;
  };

  const ir = (direccion) => {
    pista.scrollBy({ left: direccion * paso(), behavior: comportamiento() });
  };

  /* --- Avance automático --- */

  let detenido = reducirMovimiento.matches;
  let mouseEncima = false;
  let focoDentro = false;
  let visible = false;
  let temporizador;

  const puedeAvanzar = () =>
    !detenido && !mouseEncima && !focoDentro && visible && !document.hidden;

  const avanzar = () => {
    if (actual() >= total - 1) {
      pista.scrollTo({ left: 0, behavior: comportamiento() });
    } else {
      ir(1);
    }
  };

  // Reinicia la cuenta cada vez que cambia algo, así después de una pausa
  // la ficha siempre se queda el intervalo completo.
  const programar = () => {
    clearTimeout(temporizador);
    if (!puedeAvanzar()) return;
    temporizador = setTimeout(() => {
      avanzar();
      programar();
    }, intervalo);
  };

  const mostrarEstadoPausa = () => {
    pausa.textContent = detenido ? "Reanudar" : "Pausar";
    // Mientras avanza solo, el "1 de 3" no se anuncia cada 7 segundos.
    estado.setAttribute("aria-live", detenido ? "polite" : "off");
  };

  const detener = () => {
    detenido = true;
    mostrarEstadoPausa();
    programar();
  };

  /* --- Eventos --- */

  anterior.addEventListener("click", () => {
    detener();
    if (anterior.getAttribute("aria-disabled") !== "true") ir(-1);
  });

  siguiente.addEventListener("click", () => {
    detener();
    if (siguiente.getAttribute("aria-disabled") !== "true") ir(1);
  });

  pausa.addEventListener("click", () => {
    detenido = !detenido;
    mostrarEstadoPausa();
    programar();
  });

  // Si la persona desliza o usa el teclado sobre la pista, manda ella.
  pista.addEventListener("pointerdown", detener);
  pista.addEventListener("touchstart", detener, { passive: true });
  pista.addEventListener(
    "wheel",
    (evento) => {
      if (Math.abs(evento.deltaX) > Math.abs(evento.deltaY)) detener();
    },
    { passive: true }
  );
  pista.addEventListener("keydown", (evento) => {
    if (["ArrowLeft", "ArrowRight", "Home", "End"].includes(evento.key)) detener();
  });

  pista.addEventListener("mouseenter", () => { mouseEncima = true; programar(); });
  pista.addEventListener("mouseleave", () => { mouseEncima = false; programar(); });
  pista.addEventListener("focusin", () => { focoDentro = true; programar(); });
  pista.addEventListener("focusout", () => { focoDentro = false; programar(); });

  new IntersectionObserver(
    ([entrada]) => {
      visible = entrada.isIntersecting;
      programar();
    },
    { threshold: 0.5 }
  ).observe(pista);

  document.addEventListener("visibilitychange", programar);

  reducirMovimiento.addEventListener("change", () => {
    if (reducirMovimiento.matches) {
      pausa.hidden = true;
      detener();
    }
  });

  // El estado se actualiza al terminar de deslizar, no en cada píxel.
  let espera;
  pista.addEventListener(
    "scroll",
    () => {
      clearTimeout(espera);
      espera = setTimeout(actualizar, 100);
    },
    { passive: true }
  );

  window.addEventListener("resize", actualizar);

  /* --- Inicio --- */

  controles.hidden = false;
  pausa.hidden = reducirMovimiento.matches;
  mostrarEstadoPausa();
  actualizar();
});
