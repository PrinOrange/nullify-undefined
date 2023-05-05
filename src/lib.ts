/**
 * Replaces undefined values in JavaScript objects with null.
 * @param {any} obj - The JavaScript object to process.
 * @returns {any} - Returns the processed JavaScript object.
 */
export function nullifyUndefined(obj: any) {
  if (typeof obj === "object") {
    if (Array.isArray(obj)) {
      for (let i = 0; i < obj.length; i++) {
        obj[i] = nullifyUndefined(obj[i]);
      }
    } else {
      for (let key in obj) {
        obj[key] = nullifyUndefined(obj[key]);
      }
    }
  } else if (typeof obj === "undefined") {
    obj = null;
  }
  return obj;
}

/**
 * Replaces null values in JavaScript objects with undefined.
 * @param {any} obj - The JavaScript object to process.
 * @returns {any} - Returns the processed JavaScript object.
 */
export function undefineNull(obj: any) {
  if (typeof obj === "object") {
    if (Array.isArray(obj)) {
      for (let i = 0; i < obj.length; i++) {
        obj[i] = undefineNull(obj[i]);
      }
    } else {
      for (let key in obj) {
        obj[key] = undefineNull(obj[key]);
      }
    }
    for (let key in obj) {
      if (obj[key] === null) {
        obj[key] = undefined;
      }
    }
  }
  return obj;
}

/**
 * Replaces all `undefined` values in JavaScript objects.
 * @param {any} obj - The JavaScript object to process.
 * @returns {any} - Returns the processed JavaScript object.
 */
export function removeUndefined(obj: any) {
  if (typeof obj === "object") {
    if (Array.isArray(obj)) {
      for (let i = 0; i < obj.length; i++) {
        obj[i] = removeUndefined(obj[i]);
      }
      obj = obj.filter((item) => item !== undefined);
    } else {
      for (let key in obj) {
        obj[key] = removeUndefined(obj[key]);
      }
      for (let key in obj) {
        if (obj[key] === undefined) {
          delete obj[key];
        }
      }
    }
  }
  return obj;
}

/**
 * Replaces all `null` values in JavaScript objects.
 * @param {any} obj - The JavaScript object to process.
 * @returns {any} - Returns the processed JavaScript object.
 */
export function removeNull(obj: any) {
  if (typeof obj === "object") {
    if (Array.isArray(obj)) {
      for (let i = 0; i < obj.length; i++) {
        obj[i] = removeNull(obj[i]);
      }
      obj = obj.filter((item) => item !== null);
    } else {
      for (let key in obj) {
        obj[key] = removeNull(obj[key]);
      }
      for (let key in obj) {
        if (obj[key] === null) {
          delete obj[key];
        }
      }
    }
  }
  return obj;
}

/**
 * Remove all empty values in JavaScript objects.
 * Contains the `undefined` and `null`.
 * 
 * **Note :** If the null or undefined are passed in, it will return the `undefined` only.
 * @param {any} obj - The JavaScript object to process.
 * @returns {any} - Returns the processed JavaScript object.
 */
export function removeEmptyValues(obj: any) {
  if (typeof obj === "object") {
    if (Array.isArray(obj)) {
      for (let i = 0; i < obj.length; i++) {
        obj[i] = removeEmptyValues(obj[i]);
      }
      obj = obj.filter((item) => item !== null && item !== undefined);
    } else {
      for (let key in obj) {
        obj[key] = removeEmptyValues(obj[key]);
      }
      for (let key in obj) {
        if (obj[key] === null || obj[key] === undefined) {
          delete obj[key];
        }
      }
    }
  }
  return obj;
}
