/**
 * @fileoverview All game constants in one file.
 *
 * @author joseph@cs.utexas.edu (Joe Tessler)
 */

goog.provide('cn.constants');


/** @type {number} @const */
cn.constants.GAME_WIDTH = 750;


/** @type {number} @const */
cn.constants.GAME_HEIGHT = 300;

/** @type {number} @const */
cn.constants.SCAN_WIDTH = 1280;


/** @type {number} @const */
cn.constants.SCAN_HEIGHT = 720;

/** @type {number} @const */
cn.constants.GAME_MARGIN = 1;


/** @type {string} @const */
cn.constants.GAME_COLOR = '#464646';


/** @type {number} @const */
cn.constants.GOAL_WIDTH = 375;


/** @type {number} @const */
cn.constants.GOAL_HEIGHT = 113 ;


/** @type {number} @const */
cn.constants.GOAL_MARGIN = 80;


/** @type {string} @const */
cn.constants.BOT_COLOR = '#d1d1d1';


/** @type {number} @const */
cn.constants.BOT_SPEED_MIN = 3;


/** @type {number} @const */
cn.constants.BOT_SPEED_MAX = 20;


/** @type {number} @const */
cn.constants.LEVEL_HEIGHT = 10;


/** @type {string} @const */
cn.constants.LEVEL_COLOR = cn.constants.BOT_COLOR;



/** @type {number} @const */
cn.constants.STACK_WIDTH = 40;


/** @type {number} @const */
cn.constants.STACK_HEIGHT = 10;


/** @type {string} @const */
cn.constants.STACK_COLOR = cn.constants.BOT_COLOR;;


/** @type {number} @const */
cn.constants.CARGO_SIZE = 20;


/** @type {string} @const */
cn.constants.GAME_UI_CLASS_NAME = goog.getCssName('cn-game-ui');


/** @type {string} @const */
cn.constants.GAME_LOGO_CLASS_NAME = goog.getCssName('cn-game-logo');


/** @type {string} @const */
cn.constants.HEADING_CLASS_NAME = goog.getCssName('cn-heading');


/** @type {string} @const */
cn.constants.GAME_CANVAS_CLASS_NAME = goog.getCssName('cn-game-canvas');


/** @type {string} @const */
cn.constants.GAME_CANVAS_CONTAINER =
    goog.getCssName('cn-game-canvas-container');

/** @type {string} @const */
cn.constants.GOAL_CANVAS =
    goog.getCssName('cn-goal-canvas');

/** @type {string} @const */
cn.constants.ANIMATED_GAME_CANVAS_CLASS_NAME =
    goog.getCssName('cn-game-canvas-animated');


/** @type {string} @const */
cn.constants.LEVEL_SELECTOR_CLASS_NAME = goog.getCssName('cn-level-selector');


/** @type {string} @const */
cn.constants.LEVEL_SELECTOR_CONTAINER =
    goog.getCssName('cn-level-selector-container');


/** @type {string} @const */
cn.constants.CONTROLS_CLASS_NAME = goog.getCssName('cn-controls');


/** @type {string} @const */
cn.constants.CONDITION_CLASS_NAME = goog.getCssName('cn-condition');


/** @type {string} @const */
cn.constants.COMMAND_CLASS_NAME = goog.getCssName('cn-command');

/** @type {string} @const */
cn.constants.HSLEVELS_CLASS_NAME = goog.getCssName('cn-hideshow-levels');

/** @type {string} @const */
cn.constants.HSGOAL_CLASS_NAME = goog.getCssName('cn-hideshow-goal');

/** @type {string} @const */
cn.constants.GOAL_CLASS_NAME = goog.getCssName('cn-goal');

/**
 * Enum of CSS class names for all possible program commands.
 * @enum {string}
 */
cn.constants.COMMAND_CLASS_NAMES = {
  LEFT: goog.getCssName('cn-command-left'),
  LLEFT: goog.getCssName('cn-command-lleft'),
  RIGHT: goog.getCssName('cn-command-right'),
  RRIGHT: goog.getCssName('cn-command-rright'),
  PIOCHE_N: goog.getCssName('cn-command-pioche_n'),
  PIOCHE_B: goog.getCssName('cn-command-pioche_b'),
  DOWN: goog.getCssName('cn-command-down'),
  F0: goog.getCssName('cn-command-f0'),
  F1: goog.getCssName('cn-command-f1'),
  //F2: goog.getCssName('cn-command-f2'),
  //F3: goog.getCssName('cn-command-f3')
};


/**
 * Enum of CSS class names for all possible program conditionals.
 * @enum {string}
 */
cn.constants.CONDITION_CLASS_NAMES = {
  NONE: goog.getCssName('cn-condition-none'),
  ANY: goog.getCssName('cn-condition-any'),
  RED: goog.getCssName('cn-condition-red'),
  GREEN: goog.getCssName('cn-condition-green'),
  BLUE: goog.getCssName('cn-condition-blue'),
  YELLOW: goog.getCssName('cn-condition-yellow')
};


/** @type {string} @const */
cn.constants.TOOLBOX_CLASS_NAME = goog.getCssName('cn-toolbox');


/** @type {string} @const */
cn.constants.FULL_TOOLBOX_CLASS_NAME = goog.getCssName('cn-full-toolbox');


/** @type {string} @const */
cn.constants.TOOLBOX_CONTAINER = goog.getCssName('cn-toolbox-container');


/** @type {string} @const */
cn.constants.HINT_BUTTON_CLASS_NAME = goog.getCssName('cn-hint-button');


/** @type {string} @const */
cn.constants.PROGRAM_EDITOR_CLASS_NAME = goog.getCssName('cn-program-editor');


/** @type {string} @const */
cn.constants.FUNCTION_EDITOR_CLASS_NAME = goog.getCssName('cn-function-editor');

/** @type {string} @const */
cn.constants.SCANNER_CLASS_NAME = goog.getCssName('cn-scanner');


/** @type {Array.<string>} @const */
cn.constants.FUNCTION_CLASS_NAMES = [
  goog.getCssName('cn-register-f0'),
  goog.getCssName('cn-register-f1'),
  goog.getCssName('cn-register-f2'),
  goog.getCssName('cn-register-f3')
];


/** @type {string} @const */
cn.constants.REGISTER_CLASS_NAME = goog.getCssName('cn-register');


/** @type {string} @const */
cn.constants.CONDITION_REGISTER_CLASS_NAME =
    goog.getCssName('cn-condition-register');


/** @type {string} @const */
cn.constants.COMMAND_REGISTER_CLASS_NAME =
    goog.getCssName('cn-command-register');


cn.constants.LEVEL_CODE = {
  1: 'Défi A',
  2: 'Défi B',
  3: 'Défi C',
  4: 'Défi D',
  5: 'Défi E',
  6: 'Défi F',
  7: 'Défi G',
  8: 'Défi H',
  9: 'Défi I',
  10: 'Défi J',
  11: 'Défi K',
  12: 'Défi L',
  13: 'Défi M',
  14: 'Défi N',
  15: 'Défi O',
  16: 'Défi P'
}
