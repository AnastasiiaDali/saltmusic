import getValue from './getValue';
import mockFavSongs from 'assets/mocks/mockFavSongs';

test('getValue get correct value by the key if it exists in obj', () => {
  const data = getValue(mockFavSongs[0], 'releaseDate');
  expect(data).toEqual('1962-10-05');
});

test('getValue get undefined if key does not exist', () => {
  const data = getValue(mockFavSongs[0], 'fake');
  expect(data).toEqual(undefined);
});
