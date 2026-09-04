import { useEffect, useState } from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

// vite-react-ssg reparte los datos de cada ruta en un JSON cuyo nombre
// lleva un hash que cambia en cada build (static-loader-data-manifest-*).
// Si el navegador tiene en caché un index.html de un despliegue anterior,
// ese hash ya no existe en el sitio (el último build lo sobrescribió),
// GitHub Pages responde con su página HTML de "no encontrado" en vez del
// JSON esperado, y el .json() falla con "Unexpected token '<'". Sin este
// límite de error, React Router muestra su pantalla por defecto en inglés
// ("Unexpected Application Error!"). Aquí se detecta ese caso concreto y
// se recarga una sola vez (trae el index.html vigente, con el hash
// correcto) antes de mostrar cualquier mensaje al usuario.
const RELOAD_FLAG = "copper-route-error-reload";

export default function RouteErrorBoundary() {
  const error = useRouteError();
  const [reloaded] = useState(() => {
    try {
      return sessionStorage.getItem(RELOAD_FLAG) === "1";
    } catch {
      return true; // sin sessionStorage, no arriesgamos un bucle: no recargar
    }
  });

  useEffect(() => {
    if (reloaded) return;
    try {
      sessionStorage.setItem(RELOAD_FLAG, "1");
    } catch {
      // si no se puede guardar la marca, mejor no recargar (evita bucle)
      return;
    }
    window.location.reload();
  }, [reloaded]);

  if (!reloaded) return null;

  const message = isRouteErrorResponse(error)
    ? `${error.status} ${error.statusText}`
    : error instanceof Error
      ? error.message
      : "Error desconocido";

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-4 text-center">
      <p className="text-lg font-medium text-[var(--color-ink)]">
        No hemos podido cargar la página correctamente.
      </p>
      <p className="max-w-sm text-sm text-[var(--color-ink)]/60">{message}</p>
      <button
        type="button"
        onClick={() => window.location.reload()}
        className="btn-primary"
      >
        Recargar la página
      </button>
    </div>
  );
}
