# Calculadora de precios con IVA

Pequeña biblioteca en JavaScript para calcular precios finales con IVA y aplicar descuentos.
Proyecto de la Práctica 2 de la UD2 del módulo MP0614 *Despliegue de Aplicaciones Web*.

## Requisitos

- Node.js 22 o superior
- npm 10 o superior

## Instalación

```bash
git clone https://github.com/devlibra-py/mp0614-ud2-precios.git
cd mp0614-ud2-precios
npm ci
```

## Uso

```js
const { precioFinal, aplicarDescuento, desglosarIVA } = require('./src/precios');

precioFinal(100);          // 121   (IVA general, 21 %)
precioFinal(50, 10);       // 55    (IVA reducido, 10 %)
aplicarDescuento(80, 25);  // 60
desglosarIVA(121);         // { base: 100, cuota: 21 }
```

## Tipos de IVA incluidos

| Tipo           | Porcentaje | Ejemplos                         |
| -------------- | ---------- | -------------------------------- |
| general        | 21 %       | La mayoría de bienes y servicios |
| reducido       | 10 %       | Hostelería, transporte           |
| superreducido  | 4 %        | Pan, libros, medicamentos        |

## Pruebas

```bash
npm test
```

## Documentación

```bash
npm run docs   # genera la referencia de la API en docs/api
```

El pipeline de integración continua genera la documentación en cada cambio y la publica como artefacto `documentacion`.

## Integración continua

[![CI](https://github.com/devlibra-py/mp0614-ud2-precios/actions/workflows/ci.yml/badge.svg)](https://github.com/devlibra-py/mp0614-ud2-precios/actions/workflows/ci.yml)

Cada envío a `main` y cada solicitud de incorporación ejecutan: `npm ci`, ESLint, pruebas, `npm audit` y JSDoc.
