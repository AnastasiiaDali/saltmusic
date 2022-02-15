import { render } from '@testing-library/react';
import DiscoverPage from './DiscoverPage';
import { MemoryRouter } from 'react-router-dom';

const spy = jest.spyOn(global.console, 'error');

it('DiscoverPage should take a snapshot and match with previous working one, console errors should not been called', () => {
  const { asFragment } = render(
    <MemoryRouter>
      <DiscoverPage />
    </MemoryRouter>
  );

  expect(asFragment(<DiscoverPage />)).toMatchSnapshot();
  expect(spy).not.toHaveBeenCalled();
});
