import { render } from '@testing-library/react';
import BrowsePage from './BrowsePage';
import { MemoryRouter } from 'react-router-dom';

const spy = jest.spyOn(global.console, 'error');

it('BrowsePage should take a snapshot and match with previous working one, console errors should not been called', () => {
  const { asFragment } = render(
    <MemoryRouter>
      <BrowsePage />
    </MemoryRouter>
  );

  expect(asFragment(<BrowsePage />)).toMatchSnapshot();
  expect(spy).not.toHaveBeenCalled();
});
