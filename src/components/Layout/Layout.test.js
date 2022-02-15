import { render } from '@testing-library/react';
import Layout from './Layout';
import { MemoryRouter } from 'react-router-dom';

const spy = jest.spyOn(global.console, 'error');

it('Layout should take a snapshot and match with previous working one, console errors should not been called', () => {
  const { asFragment } = render(
    <MemoryRouter>
      <Layout />
    </MemoryRouter>
  );

  expect(spy).not.toHaveBeenCalled();
  expect(asFragment(<Layout />)).toMatchSnapshot();
});
