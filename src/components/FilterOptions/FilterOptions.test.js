import { render } from '@testing-library/react';
import FilterOptions from './FilterOptions';
import { MemoryRouter } from 'react-router-dom';

const title = 'Categories Mock';
const data = [
  'Musicals',
  'Rock',
  'Soundtrack',
  'Alternative',
  'Country',
  'Singer/Songwriter',
  'Pop',
  'Christian',
  'R&B/Soul',
  'Hip-Hop/Rap',
  'Metal',
  'Jazz',
  'Urbano latino'
];
const clickedList = ['Musicals', 'Rock'];
const setClickedList = jest.fn();
const spy = jest.spyOn(global.console, 'error');

it('FilterOptions should take a snapshot and match with previous working one, console errors should not been called', () => {
  const { asFragment } = render(
    <MemoryRouter>
      <FilterOptions
        title={title}
        data={data}
        clickedList={clickedList}
        setClickedList={setClickedList}
      />
    </MemoryRouter>
  );

  expect(spy).not.toHaveBeenCalled();
  expect(asFragment(<FilterOptions />)).toMatchSnapshot();
});
