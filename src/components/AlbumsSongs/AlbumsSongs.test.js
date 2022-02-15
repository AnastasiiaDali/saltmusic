import { render } from '@testing-library/react';
import AlbumsSongs from './AlbumsSongs';
import { MemoryRouter } from 'react-router-dom';
import mockFavSongs from 'assets/mocks/mockFavSongs';

const spy = jest.spyOn(global.console, 'error');

it('AlbumsSongs should take a snapshot and match with previous working one, console errors should not been called', () => {
  const { asFragment } = render(
    <MemoryRouter>
      <AlbumsSongs songs={mockFavSongs} />
    </MemoryRouter>
  );

  expect(spy).not.toHaveBeenCalled();
  expect(asFragment(<AlbumsSongs />)).toMatchSnapshot();
});
