import { createStore } from 'redux';

const titles = [
  'React Redux Boilerplate',
  'React',
  'Redux',
  'Boilerplate'
];

const NextTitle = (next = 0, action) => {
  if (action.type === '@@redux/INIT') {
    return titles[next];
  };
  next = titles.indexOf(action.state.title) + 1;
  if (next === titles.length) {
    next = 0;
  };
  return titles[next]
};

export default createStore(NextTitle);
