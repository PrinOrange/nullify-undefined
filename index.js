/**
 * Transform all undefined values into null.
 * @param {any} value Value of any type.
 * @return {any} Return the reference of passed object or value.
 */
function Nullify(value) {
  switch (typeof value) {
    case "undefined":
      return null;
    case "object":
      {
        if (Array.isArray(value)) {
          for (let i = 0; i < value.length; i++) {
            value[i] = Nullify(value[i]);
          }
        }
        for (const key in value) {
          if (Object.prototype.hasOwnProperty.call(value, key)) {
            value[key] = Nullify(value[key]);
          }
        }
      }
      break;
  }
  return value;
}

module.exports = Nullify;
