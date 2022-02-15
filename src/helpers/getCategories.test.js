import getCategories from './getCategories';
import mockFavSongs from 'assets/mocks/mockFavSongs';

test('getCategories works as expected', () => {
  const data = getCategories(mockFavSongs);
  expect(data).toEqual(['Rock', 'Pop', 'Alternative']);
});
