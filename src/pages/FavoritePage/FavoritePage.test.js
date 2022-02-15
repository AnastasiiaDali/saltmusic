import { render } from '@testing-library/react';
import FavoritePage from './FavoritePage';
import { MemoryRouter } from 'react-router-dom';

const spy = jest.spyOn(global.console, 'error');

it('FavoritePage should take a snapshot and match with previous working one, console errors should not been called', () => {
  const { asFragment } = render(
    <MemoryRouter>
      <FavoritePage />
    </MemoryRouter>
  );

  expect(asFragment(<FavoritePage />)).toMatchSnapshot();
  expect(spy).not.toHaveBeenCalled();
});
