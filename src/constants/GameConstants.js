var {keyMirror} = require('../utils');

module.exports = keyMirror({
  STATES: ['tile-invalid', 'tile-valid', 'tile-passed', 'tile-start'],
  SQUARE_SIZE: [60, 120],

  NEXT_STATE: 'GAME_NEXT_STATE',
  CLICK: 'GAME_CLICK',

  START: 'GAME_START',
  RESTART: 'GAME_RESTART',
  END: 'GAME_END',

  FAIL: 'GAME_FAIL',
});
