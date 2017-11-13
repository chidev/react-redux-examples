export default function(state = null, action) {
  console.log('====================================');
  console.log('s', state);
  console.log('====================================');
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }

  return state;
}