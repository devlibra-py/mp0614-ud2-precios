# Registro de cambios

Todos los cambios relevantes de este proyecto se documentan en este fichero.

El formato sigue [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/)
y el proyecto usa [Versionado Semántico](https://semver.org/lang/es/).

## [Sin publicar]

## [1.0.0] - 2026-10-12

### Añadido
- `precioFinal(base, tipo)` calcula el precio con IVA (21 % por defecto).
- `aplicarDescuento(precio, porcentaje)` aplica descuentos porcentuales.
- `desglosarIVA(total, tipo)` separa base imponible y cuota de un importe con IVA (#1).
- Tipo de IVA `exento` (0 %) en `TIPOS_IVA` (#2).
- Documentación de la API con JSDoc y script `npm run docs` (#4).
- Integración continua con GitHub Actions: `npm ci`, ESLint, pruebas, `npm audit` y JSDoc como artefacto (#5).
- Plantillas de solicitud de incorporación y de informe de error.

### Cambiado
- `TIPOS_IVA` es inmutable (`Object.freeze`) (#3).

### Corregido
- Se descarta el cambio de `Math.round` por `Math.trunc` en el redondeo: truncaba céntimos
  (19,99 € con IVA daba 24,18 € en lugar de 24,19 €). Detectado por el pipeline de CI (#6).

### Seguridad
- Rama `main` protegida: solicitud de incorporación y check `verificar` obligatorios, sin `push --force` ni borrado.
- Dependabot y análisis de secretos con protección en el envío activados.

[Sin publicar]: https://github.com/devlibra-py/mp0614-ud2-precios/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/devlibra-py/mp0614-ud2-precios/releases/tag/v1.0.0
