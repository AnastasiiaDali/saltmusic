export default function getValue(data, path, defaultValue) {
  const value = path
    .split(/[.[\]]/)
    .filter(Boolean)
    .reduce((value, key) => value?.[key], data);

  return value !== undefined ? value : defaultValue;
}
