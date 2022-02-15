import getReleaseDates from './getReleaseDates';

const mockAlbums = [
  {
    releaseDate: ' 2001'
  },
  {
    releaseDate: ' 1921'
  },
  {
    releaseDate: ' 1921'
  },
  {
    releaseDate: ' 2000'
  },
  {
    releaseDate: ' 2000'
  },
  {
    releaseDate: ' 2000'
  },
  {
    releaseDate: ' 2021'
  }
];
test('getReleaseDates works as expected', () => {
  const data = getReleaseDates(mockAlbums);
  expect(data).toEqual([' 2001', ' 1921', ' 2000', ' 2021']);
});
