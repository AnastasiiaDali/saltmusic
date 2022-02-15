import { render } from '@testing-library/react';
import PlayerButton from './PlayerButton';
import { MemoryRouter } from 'react-router-dom';

const spy = jest.spyOn(global.console, 'error');
const url =
  'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/ae/49/83/ae498370-826e-16a4-3c2a-bb282ea32302/mzaf_17334919957723709223.plus.aac.p.m4a';

it('PlayerButton should take a snapshot and match with previous working one, console errors should not been called', () => {
  const { asFragment } = render(
    <MemoryRouter>
      <PlayerButton url={url} />
    </MemoryRouter>
  );

  expect(spy).not.toHaveBeenCalled();
  expect(asFragment(<PlayerButton />)).toMatchSnapshot();
});
