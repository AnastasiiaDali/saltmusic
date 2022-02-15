import getValue from 'helpers/getValue';

export default function getCategories(data) {
  const arr = [];
  for (const [key] of Object.entries(data)) {
    const val = getValue(data[key], 'category');
    if (!arr.includes(val)) {
      arr.push(val);
    }
  }
  return arr;
}
