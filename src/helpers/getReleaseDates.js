import getValue from 'helpers/getValue';

export default function getReleaseDates(data) {
  const arr = [];
  for (const [key] of Object.entries(data)) {
    const val = getValue(data[key], 'releaseDate');
    if (!arr.includes(val?.substr(val.length - 5))) {
      arr.push(val?.substr(val.length - 5));
    }
  }
  return arr;
}
