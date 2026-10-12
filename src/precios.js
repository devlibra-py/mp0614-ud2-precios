'use strict';

const TIPOS_IVA = { general: 21, reducido: 10, superreducido: 4 };

function redondear(importe) {
  return Math.round((importe + Number.EPSILON) * 100) / 100;
}

function precioFinal(base, tipo = TIPOS_IVA.general) {
  if (base < 0) {
    throw new RangeError('La base no puede ser negativa');
  }
  return redondear(base * (1 + tipo / 100));
}

function aplicarDescuento(precio, porcentaje) {
  if (porcentaje < 0 || porcentaje > 100) {
    throw new RangeError('El descuento debe estar entre 0 y 100');
  }
  return redondear(precio * (1 - porcentaje / 100));
}

module.exports = { TIPOS_IVA, precioFinal, aplicarDescuento };
