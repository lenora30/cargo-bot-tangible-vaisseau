/**
 * @fileoverview All level data, where the vast majority is a clone of
 *     https://github.com/ruilov/CargoBot/blob/master/Levels.lua.
 *
 * @author elynnlee@cs.utexas.edu (Elynn Lee)
 *
 */

goog.provide('cn.LevelData');
goog.provide('cn.LevelData.levelpacks');
goog.provide('cn.LevelData.levels');

goog.require('cn.model.CargoColor');
goog.require('goog.array');



/**
 * @param {number} botPosition The initial bot position.
 * @param {!Array.<number>} functions The lengths of each available function.
 * @param {!Array.<string>} toolbox The available commands and conditionals.
 * @param {!Array.<!Array.<string>>} initial The initial cargo configuration.
 * @param {!Array.<!Array.<string>>} goal The final cargo configuration.
 * @constructor
 */
cn.LevelData = function (
  botPosition, functions, toolbox, initial, goal) {
  /** @type {number} */
  this.botPosition = botPosition - 1;

  /** @type {!Array.<number>} */
  this.functions = functions;

  /** @type {!Array.<string>} */
  this.toolbox = toolbox;

  /** @type {!Array.<!Array.<!cn.model.CargoColor>>} */
  this.initial = cn.LevelData.mapStacks_(initial);

  /** @type {!Array.<!Array.<!cn.model.CargoColor>>} */
  this.goal = cn.LevelData.mapStacks_(goal);

};


/**
 * @param {!Array.<!Array.<string>>} colors Stacks of colors (as implemented
 *     from the aforementioned source).
 * @return {!Array.<!Array.<!cn.model.CargoColor>>} The stack of colors as
 *     implemented in this rendition of Cargo-Bot.
 * @private
 */
cn.LevelData.mapStacks_ = function (colors) {
  return goog.array.map(
    colors,
    function (stack) {
      return goog.array.map(
        stack,
        function (color) {
          switch (color) {
            case 'red': return cn.model.CargoColor.RED;
            case 'blue': return cn.model.CargoColor.BLUE;
            default: throw Error('no cargo implementation for: ' + color);
          }
        });
    });
};


/**
 * @type {Object.<string, !Array.<string>>}
 * @const
 */
cn.LevelData.levelpacks = {
  'Tutorial': [
    'Défi A',
    'Défi B',
    'Défi C'
  ],
  'Easy': [
    'Défi D',
    'Défi E',
    'Défi F'
  ],
  'Medium': [
    'Défi G',
    'Défi H',
    'Défi I'
  ],
  'Hard': [
    'Défi J',
    'Défi K',
    'Défi L'
  ],
  'Crazy': [
    'Défi M',
    'Défi N',
    'Défi O',
    'Défi P'
  ]
};


/**
 * @type {Object.<string, !cn.LevelData>}
 * @const
 */
cn.LevelData.levels = {
  /*** Pos initial, Etoiles, Registres, opérations, départ (de bas en haut), arrivée, hint ***/
  /***
      'Toto': new cn.LevelData(
          2,
          [8, 8, 8, 5],
          ['right', 'pickup', 'left', 'f0', 'f1', 'f2', 'f3', 'red',
          'blue', 'green', 'yellow', 'none', 'any'],
          [[], [], []],
          [[], [], []],
      ),
  ***/

  //Niveau 1
  'Défi A': new cn.LevelData(
    1,
    [8],
    ['pioche_r', 'right', 'down'],
    [['red', 'red', 'red', 'red'], [], [], [], [], ['blue', 'blue', 'blue', 'blue']],
    [['red', 'red', 'red'], ['red'], [], [], [], ['blue', 'blue', 'blue', 'blue']]
  ),
  'Défi B': new cn.LevelData(
    1,
    [8],
    ['pioche_b', 'left', 'left', 'down'],
    [['red', 'red', 'red', 'red'], [], [], [], [], ['blue', 'blue', 'blue', 'blue']],
    [['red', 'red', 'red','red'], [], [], ['blue'], [], ['blue', 'blue', 'blue']]
  ),
  'Défi C': new cn.LevelData(
    1,
    [8],
    ['pioche_r', 'droite', 'droite', 'droite', 'droite', 'down'],
    [['red', 'red', 'red', 'red'], [], [], [], [], ['blue', 'blue', 'blue', 'blue']],
    [['red', 'red', 'red'], [], [], [], ['red'], ['blue', 'blue', 'blue', 'blue']]
  ),
  //Niveau 2
  'Défi D': new cn.LevelData(
    1,
    [8],
    ['pioche_b', 'left', 'lleft', 'down', 'pioche_r', 'rright', 'right', 'down'],
    [['red', 'red', 'red', 'red'], [], [], [], [], ['blue', 'blue', 'blue', 'blue']],
    [['red', 'red', 'red'], [], ['blue'], ['red'], [], ['blue', 'blue', 'blue']]
  ),
  'Défi E': new cn.LevelData(
    1,
    [8],
    ['pioche_b', 'lleft', 'lleft', 'down', 'pioche_r', 'rright', 'rright', 'down'],
    [['red', 'red', 'red', 'red'], [], [], [], [], ['blue', 'blue', 'blue', 'blue']],
    [['red', 'red', 'red'], ['blue'], [], [], ['red'], ['blue', 'blue', 'blue']]
  ),
  'Défi F': new cn.LevelData(
    1,
    [8],
    ['pioche_r', 'right', 'rright', 'down', 'pioche_r', 'rright', 'right', 'down'],
    [['red', 'red', 'red', 'red'], [], [], [], [], ['blue', 'blue', 'blue', 'blue']],
    [['red', 'red'], [], [], ['red','red'], [], ['blue', 'blue', 'blue', 'blue']]
  ),
  //Niveau 3
  'Défi G': new cn.LevelData(
    1,
    [16],
    ['pioche_r', 'rright', 'down', 'pioche_b', 'left', 'lleft', 'down', 'pioche_b', 'lleft',
      'down', 'pioche_r', 'rright', 'right', 'down'],
    [['red', 'red', 'red', 'red'], [], [], [], [], ['blue', 'blue', 'blue', 'blue']],
    [['red', 'red'], [], ['red','blue'], ['blue','red'], [], ['blue', 'blue']]
  ),
  'Défi H': new cn.LevelData(
    1,
    [16],
    ['pioche_r', 'rright', 'down', 'pioche_b', 'left', 'lleft', 'down', 'pioche_r', 'rright',
      'down', 'pioche_b', 'left', 'lleft', 'down'],
    [['red', 'red', 'red', 'red'], [], [], [], [], ['blue', 'blue', 'blue', 'blue']],
    [['red','red'], [], ['red','blue','red','blue'], [], [], ['blue', 'blue']]
  ),
  'Défi I': new cn.LevelData(
    1,
    [16],
    ['pioche_r', 'right', 'down', 'pioche_b', 'left', 'lleft', 'down', 'pioche_r', 'rright',
      'down', 'pioche_r', 'right', 'rright', 'down'],
    [['red', 'red', 'red', 'red'], [], [], [], [], ['blue', 'blue', 'blue', 'blue']],
    [['red'], ['red'], ['blue','red'], ['red'], [], ['blue','blue', 'blue']]
  ),
  //Niveau 4
  'Défi J': new cn.LevelData(
    1,
    [8, 8],
    ['f1', 'f1', 'f1', 'f1', 'pioche_r', 'rright', 'down'],
    [['red', 'red', 'red', 'red'], [], [], [], [], ['blue', 'blue', 'blue', 'blue']],
    [[], [], ['red', 'red', 'red', 'red'], [], [], ['blue', 'blue', 'blue', 'blue']]
  ),
  'Défi K': new cn.LevelData(
    1,
    [8, 8],
    ['f1', 'f1', 'pioche_b', 'left', 'lleft', 'down', 'pioche_r', 'rright', 'down'],
    [['red', 'red', 'red', 'red'], [], [], [], [], ['blue', 'blue', 'blue', 'blue']],
    [['red', 'red'], [], ['blue', 'red', 'blue', 'red'], [], [], ['blue',  'blue']]
  ),
  'Défi L': new cn.LevelData(
    1,
    [8, 8],
    ['f1', 'f1', 'f1', 'f1', 'pioche_r', 'right', 'rright', 'down', 'pioche_b', 'left',
     'lleft', 'down'],
    [['red', 'red', 'red', 'red'], [], [], [], [], ['blue', 'blue', 'blue', 'blue']],
    [[], [], ['blue', 'blue', 'blue', 'blue'], ['red', 'red', 'red', 'red'], [], []]
  ),
  //Niveau 5
  'Défi M': new cn.LevelData(
    1,
    [8, 8],
    [''],
    [['red', 'red', 'red', 'red'], [], [], [], [], ['blue', 'blue', 'blue', 'blue']],
    [[ 'red', 'red', 'red'], ['blue', 'blue'], ['blue','red', 'blue'], [], [], []]
  ),
  'Défi N': new cn.LevelData(
    1,
    [8, 8],
    [''],
    [['red', 'red', 'red', 'red'], [], [], [], [], ['blue', 'blue', 'blue', 'blue']],
    [['red'], ['red'], ['red','red'], ['blue', 'blue', 'blue'], [], ['blue']]
  ),
  'Défi O': new cn.LevelData(
    1,
    [8, 8],
    [''],
    [['red', 'red', 'red', 'red'], [], [], [], [], ['blue', 'blue', 'blue', 'blue']],
    [[ 'red', 'red', 'red', 'red'], ['blue'], ['blue'], ['blue'], ['blue'], []]
  ),
  'Défi P': new cn.LevelData(
    1,
    [8, 8],
    [''],
    [['red', 'red', 'red', 'red'], [], [], [], [], ['blue', 'blue', 'blue', 'blue']],
    [[ 'red'], ['blue', 'blue', 'blue'], ['red'], ['red'], ['red'], ['blue']]
  ),
};
