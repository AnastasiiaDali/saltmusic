import { render } from '@testing-library/react';
import AlbumItem from './AlbumItem';
import { MemoryRouter } from 'react-router-dom';

const album = {
  category: 'Musicals',
  id: '1594677532',
  artist: 'Lin-Manuel Miranda, Germaine Franco, Stephanie Beatriz, Olga Merediz & Jessica Darrow',
  image:
    'https://is4-ssl.mzstatic.com/image/thumb/Music126/v4/94/4d/9a/944d9a8d-0549-f537-5706-5b083bd84a7d/21UM1IM38949.rgb.jpg/170x170bb.png',
  name: 'Encanto (Original Motion Picture Soundtrack)',
  releaseDate: ' 2021',
  title:
    'Encanto (Original Motion Picture Soundtrack) - Lin-Manuel Miranda, Germaine Franco, Stephanie Beatriz, Olga Merediz & Jessica Darrow',
  price: '$11.99'
};
const spy = jest.spyOn(global.console, 'error');

it('AlbumItem should take a snapshot and match with previous working one, console errors should not been called', () => {
  const { asFragment } = render(
    <MemoryRouter>
      <AlbumItem album={album} />
    </MemoryRouter>
  );

  expect(spy).not.toHaveBeenCalled();
  expect(asFragment(<AlbumItem />)).toMatchSnapshot();
});
