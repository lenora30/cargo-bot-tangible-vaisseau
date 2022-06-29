/**
 * Enum of difficulty number for each difficulty code.
 * @enum {string}
 */
const DIFFICULTY = { 
    "205": 0,
    "211": 1,
    "213": 2,
    "217": 3,
    "227": 4,
    "229": 5,
    "233": 6,
    "241": 7,
    "271": 8
};

/**
 * Enum of level number for each level code.
 * @enum {string}
 */
const LEVEL = {
    "279": 1,
    "283": 2,
    "285": 3,
    "295": 4,
    "299": 5,
    "301": 6
};

/**
 * Minimal code for a command
 * @type {number} @const 
 */
const CODE_MIN_COMMAND = 103;

/** @type {number} @const */
const CODE_MAX_COMMAND = 179;

/** @type {number} @const */
const CODE_MIN_CONDITION = 157;

/** @type {number} @const */
const CODE_MAX_CONDITION = 181;

/** @type {number} @const */
const CODE_MIN_DIFFICULTY = 205;

/** @type {number} @const */
const DIFFICULTY_FONCTION = 3;

/** @type {number} @const */
const DIFFICULTY_INDEX = 6;

/** @type {number} @const */
const LEVEL_FONCTION = 3;

/** @type {number} @const */
const LEVEL_INDEX = 7;

/**
 * Enum of code for all the corners.
 * @enum {number}
 */
const CORNER = {
    top_left: 59,
    top_right: 55,
    bottom_left: 61,
    bottom_right: 47
};

/**
 * Enum of corners coordinates for the quadrilateral destination for the perspective transformation.
 * @enum {number}
 */
const DST_CORNER  = {
    top_left_x : 0,
    top_left_y : 0,
    top_right_x : 1200,
    top_right_y : 0,
    bottom_right_x : 1200,
    bottom_right_y : 800,
    bottom_left_x : 0,
    bottom_left_y : 800
};

/**
 * Enum of all the levels
 * @enum {string}
 */
const LEVEL_CODE = {
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