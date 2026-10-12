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
const { precioFinal, aplicarDescuento } = require('./src/precios');

precioFinal(100);          // 121   (IVA general, 21 %)
precioFinal(50, 10);       // 55    (IVA reducido, 10 %)
aplicarDescuento(80, 25);  // 60
```

## Pruebas

```bash
npm test
```
