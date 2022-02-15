import { render } from '@testing-library/react';
import AlbumSlider from './AlbumSlider';
import { MemoryRouter } from 'react-router-dom';

const spy = jest.spyOn(global.console, 'error');

it('AlbumSlider should take a snapshot and match with previous working one, console errors should not been called', () => {
  const { asFragment } = render(
    <MemoryRouter>
      <AlbumSlider />
    </MemoryRouter>
  );

  expect(spy).not.toHaveBeenCalled();
  expect(asFragment(<AlbumSlider />)).toMatchSnapshot();
});
