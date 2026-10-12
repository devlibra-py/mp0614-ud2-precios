'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { TIPOS_IVA, precioFinal, aplicarDescuento, desglosarIVA } = require('../src/precios');

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

test('desglosarIVA separa base y cuota del 21 %', () => {
  assert.deepEqual(desglosarIVA(121), { base: 100, cuota: 21 });
});

test('desglosarIVA funciona con el tipo superreducido', () => {
  assert.deepEqual(desglosarIVA(104, 4), { base: 100, cuota: 4 });
});

test('desglosarIVA rechaza totales negativos', () => {
  assert.throws(() => desglosarIVA(-5), RangeError);
});

test('TIPOS_IVA incluye el tipo exento y no se puede modificar', () => {
  assert.equal(precioFinal(100, TIPOS_IVA.exento), 100);
  assert.ok(Object.isFrozen(TIPOS_IVA));
});
