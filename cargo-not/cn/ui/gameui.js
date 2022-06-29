/**
 * @fileoverview The base UI class composed of every game-related UI component.
 *
 * @author joseph@cs.utexas.edu (Joe Tessler)
 */

goog.provide('cn.ui.GameUi');

goog.require('cn.constants');
goog.require('cn.model.Game');
goog.require('cn.ui.AnimatedGameCanvas');
goog.require('cn.ui.ClassComponent');
goog.require('cn.ui.ClassContainer');
goog.require('cn.ui.Controls');
goog.require('cn.ui.GameCanvas');
goog.require('cn.ui.CommandToolbox');
//goog.require('cn.ui.HintButton');
goog.require('cn.ui.HideShow');
goog.require('cn.ui.LevelSelector');
goog.require('cn.ui.ProgramEditor');
goog.require('goog.style');
goog.require('goog.ui.Component');



/**
 * @param {!cn.model.Game} game The game model to render.
 * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
 * @constructor
 * @extends {cn.ui.ClassComponent}
 */
cn.ui.GameUi = function(game, opt_domHelper) {
  goog.base(this, cn.constants.GAME_UI_CLASS_NAME, opt_domHelper);

  this.levelSelector = new cn.ui.LevelSelector(game, this, opt_domHelper);
  //this.hsLevels = new cn.ui.HSLevels(game, this, null, opt_domHelper);
  //this.hsGoal = new cn.ui.HSGoal(game, this, null, opt_domHelper);
  this.goalCanvas = new cn.ui.GameCanvas(
      cn.constants.GOAL_WIDTH, cn.constants.GOAL_HEIGHT, opt_domHelper);
  this.animatedCanvas = new cn.ui.AnimatedGameCanvas(
      cn.constants.GAME_WIDTH, cn.constants.GAME_HEIGHT, opt_domHelper);
  this.controls = new cn.ui.Controls(game, this, opt_domHelper);
  this.commandToolbox = new cn.ui.CommandToolbox(opt_domHelper);
  //this.hintButton = new cn.ui.HintButton(game, this, null, opt_domHelper);
  this.programEditor = new cn.ui.ProgramEditor(game, this, this.commandToolbox, opt_domHelper);

  this.addChild(new cn.ui.ClassComponent(
      cn.constants.GAME_LOGO_CLASS_NAME), true);
  //this.addChild(this.hsLevels, true);
  //this.addChild(this.hsGoal, true);
  this.addChild(new cn.ui.ClassContainer([],
      [
        new cn.ui.ClassContainer(cn.constants.LEVEL_SELECTOR_CONTAINER,
            this.levelSelector, 'CHOIX DU NIVEAU', opt_domHelper),
        
        new cn.ui.ClassContainer(cn.constants.GAME_CANVAS_CONTAINER, 
            this.goalCanvas, 'BUT', opt_domHelper)
      ],
      null, opt_domHelper), true);
  this.addChild(new cn.ui.ClassContainer(cn.constants.ANIMATED_GAME_CANVAS_CLASS_NAME, this.animatedCanvas, 'EXÉCUTION DU PROGRAMME', opt_domHelper), true);
  this.addChild(this.controls, true);
  this.addChild(new cn.ui.ClassContainer(cn.constants.TOOLBOX_CONTAINER,
        new cn.ui.ClassContainer(cn.constants.FULL_TOOLBOX_CLASS_NAME,
            [
                this.commandToolbox,
            ],
            null, opt_domHelper),
            'COMMANDES', opt_domHelper), true);
  this.addChild(this.programEditor, true);
  //this.addChild(this.hintButton, true);
};
goog.inherits(cn.ui.GameUi, cn.ui.ClassComponent);


/**
 * Prevent users from selecting any element of the game UI.
 * @inheritDoc
 */
cn.ui.GameUi.prototype.enterDocument = function() {
  goog.base(this, 'enterDocument');
  goog.style.setUnselectable(this.getElement(), true);
};


/** @type {!cn.ui.LevelSelector} */
cn.ui.GameUi.prototype.levelSelector;


/** @type {!cn.ui.GameCanvas} */
cn.ui.GameUi.prototype.goalCanvas;


/** @type {!cn.ui.AnimatedGameCanvas} */
cn.ui.GameUi.prototype.animatedCanvas;


/** @type {!cn.ui.Controls} */
cn.ui.GameUi.prototype.controls;

/** @type {!cn.ui.Toolbox} */
cn.ui.GameUi.prototype.commandToolbox;

/** @type {!cn.ui.ProgramEditor} */
cn.ui.GameUi.prototype.programEditor;
