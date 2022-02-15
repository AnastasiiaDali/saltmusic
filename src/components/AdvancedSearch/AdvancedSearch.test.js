import { render } from '@testing-library/react';
import AdvancedSearch from './AdvancedSearch';
import { MemoryRouter } from 'react-router-dom';

const spy = jest.spyOn(global.console, 'error');

it('AdvancedSearch should take a snapshot and match with previous working one, console errors should not been called', () => {
  const { asFragment } = render(
    <MemoryRouter>
      <AdvancedSearch />
    </MemoryRouter>
  );

  expect(asFragment(<AdvancedSearch />)).toMatchSnapshot();
  expect(spy).not.toHaveBeenCalled();
});
