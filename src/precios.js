'use strict';

/**
 * Cálculo de precios con IVA y descuentos.
 * @module precios
 */

/**
 * Tipos de IVA vigentes en España, en porcentaje. El objeto está congelado.
 * @readonly
 * @enum {number}
 */
const TIPOS_IVA = Object.freeze({ general: 21, reducido: 10, superreducido: 4, exento: 0 });

/**
 * Redondea un importe a dos decimales (céntimos).
 * @private
 * @param {number} importe - Importe en euros.
 * @returns {number} Importe redondeado a dos decimales.
 */
function redondear(importe) {
  return Math.round((importe + Number.EPSILON) * 100) / 100;
}

/**
 * Calcula el precio final aplicando el IVA.
 * @param {number} base - Importe sin impuestos, en euros.
 * @param {number} [tipo=21] - Tipo impositivo en porcentaje (ver {@link module:precios~TIPOS_IVA}).
 * @returns {number} Importe total redondeado a dos decimales.
 * @throws {RangeError} Si la base es negativa.
 * @example
 * precioFinal(100);      // 121
 * precioFinal(50, 10);   // 55
 */
function precioFinal(base, tipo = TIPOS_IVA.general) {
  if (base < 0) {
    throw new RangeError('La base no puede ser negativa');
  }
  return redondear(base * (1 + tipo / 100));
}

/**
 * Aplica un descuento porcentual a un precio.
 * @param {number} precio - Precio de partida, en euros.
 * @param {number} porcentaje - Descuento entre 0 y 100.
 * @returns {number} Precio con el descuento aplicado, redondeado a dos decimales.
 * @throws {RangeError} Si el porcentaje está fuera del intervalo [0, 100].
 * @example
 * aplicarDescuento(80, 25); // 60
 */
function aplicarDescuento(precio, porcentaje) {
  if (porcentaje < 0 || porcentaje > 100) {
    throw new RangeError('El descuento debe estar entre 0 y 100');
  }
  return redondear(precio * (1 - porcentaje / 100));
}

/**
 * Resultado del desglose de un importe con IVA.
 * @typedef {Object} Desglose
 * @property {number} base - Base imponible, en euros.
 * @property {number} cuota - Cuota de IVA, en euros.
 */

/**
 * Separa un importe con IVA incluido en base imponible y cuota.
 * @param {number} total - Importe con IVA incluido, en euros.
 * @param {number} [tipo=21] - Tipo impositivo en porcentaje.
 * @returns {Desglose} Base imponible y cuota, ambas redondeadas a dos decimales.
 * @throws {RangeError} Si el total es negativo.
 * @example
 * desglosarIVA(121); // { base: 100, cuota: 21 }
 */
function desglosarIVA(total, tipo = TIPOS_IVA.general) {
  if (total < 0) {
    throw new RangeError('El total no puede ser negativo');
  }
  const base = redondear(total / (1 + tipo / 100));
  return { base, cuota: redondear(total - base) };
}

module.exports = { TIPOS_IVA, precioFinal, aplicarDescuento, desglosarIVA };
