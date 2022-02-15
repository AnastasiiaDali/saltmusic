import { render } from '@testing-library/react';
import FavoriteButton from './FavoriteButton';
import { MemoryRouter } from 'react-router-dom';

const spy = jest.spyOn(global.console, 'error');

it('FavoriteButton should take a snapshot and match with previous working one, console errors should not been called', () => {
  const { asFragment } = render(
    <MemoryRouter>
      <FavoriteButton />
    </MemoryRouter>
  );

  expect(spy).not.toHaveBeenCalled();
  expect(asFragment(<FavoriteButton />)).toMatchSnapshot();
});
