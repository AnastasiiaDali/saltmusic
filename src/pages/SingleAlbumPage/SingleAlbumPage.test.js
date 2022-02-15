import { render } from '@testing-library/react';
import SingleAlbumPage from './SingleAlbumPage';
import { MemoryRouter } from 'react-router-dom';

const spy = jest.spyOn(global.console, 'error');

it('SingleAlbumPage should take a snapshot and match with previous working one, console errors should not been called', () => {
  const { asFragment } = render(
    <MemoryRouter>
      <SingleAlbumPage />
    </MemoryRouter>
  );

  expect(asFragment(<SingleAlbumPage />)).toMatchSnapshot();
  expect(spy).not.toHaveBeenCalled();
});
