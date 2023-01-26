/**
 * Transform all undefined values into null.
 * @param value Value of any type.
 * @returns Return the reference of passed object or value.
 */
export default function Nullify<T, P = any>(value: P): T;
