import '@testing-library/jest-dom';

const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch
}));

jest.mock('react-query', () => ({
  useQuery: () => mockDispatch
}));

window.HTMLMediaElement.prototype.load = () => null;
window.HTMLMediaElement.prototype.play = () => null;
window.HTMLMediaElement.prototype.pause = () => null;
window.HTMLMediaElement.prototype.addTextTrack = () => null;
