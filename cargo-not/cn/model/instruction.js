/**
 * @fileoverview The lists of actions that determine the bot's behavior.
 *
 * @author joseph@cs.utexas.edu (Joe Tessler)
 */

goog.provide('cn.model.Command');
goog.provide('cn.model.Condition');
goog.provide('cn.model.Instruction');


/**
 * Enum for all possible program commands.
 * @enum {string}
 */
cn.model.Command = {
  LEFT: 'left',
  LLEFT: 'lleft',
  RIGHT: 'right',
  RRIGHT: 'rright',
  PIOCHE_N: 'pioche_n',
  PIOCHE_B: 'pioche_b',
  DOWN: 'down',
  F1: 'f1'
};


/**
 * @constructor
 */
cn.model.Instruction = function() {
  this.command = null;
  this.condition = null;
};


/** @type {?cn.model.Command} */
cn.model.Instruction.prototype.command;


/** @return {boolean} True if the instruction has a command. */
cn.model.Instruction.prototype.hasCommand = function() {
  return goog.isDefAndNotNull(this.command);
};


/** @return {boolean} True if the command is F0. */
cn.model.Instruction.prototype.isFunctionCall = function() {
  return this.command == cn.model.Command.F1;
};


/**
 * @return {number} The function number to call or -1 if not a function call.
 */
cn.model.Instruction.prototype.getFunctionCall = function() {
  switch (this.command) {
    case cn.model.Command.F1: return 1;
  }
  return -1;
};
