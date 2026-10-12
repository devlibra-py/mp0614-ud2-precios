'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { precioFinal, aplicarDescuento } = require('../src/precios');

test('precioFinal aplica el 21 % por defecto', () => {
  assert.equal(precioFinal(100), 121);
});

test('precioFinal admite el tipo reducido', () => {
  assert.equal(precioFinal(50, 10), 55);
});

test('precioFinal redondea a dos decimales', () => {
  assert.equal(precioFinal(19.99), 24.19);
});

test('precioFinal rechaza bases negativas', () => {
  assert.throws(() => precioFinal(-1), RangeError);
});

test('aplicarDescuento resta el porcentaje', () => {
  assert.equal(aplicarDescuento(80, 25), 60);
});

test('aplicarDescuento rechaza porcentajes fuera de rango', () => {
  assert.throws(() => aplicarDescuento(10, 120), RangeError);
});
