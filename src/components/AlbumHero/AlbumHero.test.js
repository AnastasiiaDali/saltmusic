import { render } from '@testing-library/react';
import AlbumHero from './AlbumHero';
import { MemoryRouter } from 'react-router-dom';

const spy = jest.spyOn(global.console, 'error');

it('AlbumHero should take a snapshot and match with previous working one, console errors should not been called', () => {
  const { asFragment } = render(
    <MemoryRouter>
      <AlbumHero />
    </MemoryRouter>
  );

  expect(asFragment(<AlbumHero />)).toMatchSnapshot();
  expect(spy).not.toHaveBeenCalled();
});
