/**
 * @fileoverview A button that shows the current level's hint.
 *
 * @author joseph@cs.utexas.edu (Joe Tessler)
 */

goog.provide('cn.ui.HideShow');

goog.require('cn.constants');
goog.require('goog.dom.classes');
goog.require('goog.ui.Button');
goog.require('goog.ui.Component');
goog.require('goog.ui.ControlRenderer');
goog.require('goog.ui.NativeButtonRenderer');


/**
 * @param {!cn.ui.GameUi} ui A pointer to parent game UI.
 * @param {goog.ui.ButtonRenderer=} opt_renderer Renderer used to render or
 *     decorate the button.
 * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
 * @constructor
 * @extends {goog.ui.Button}
 */
cn.ui.HSLevels = function (game, ui, opt_renderer, opt_domHelper) {
  goog.base(this, null,
    opt_renderer,
    opt_domHelper);
  this.game_ = game;
  this.ui_ = ui;
  this.setTooltip('Cacher/Afficher le sélecteur de niveau');
};
goog.inherits(cn.ui.HSLevels, goog.ui.Button);


/**
 * @param {!cn.ui.GameUi} ui A pointer to parent game UI.
 * @param {goog.ui.ButtonRenderer=} opt_renderer Renderer used to render or
 *     decorate the button.
 * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
 * @constructor
 * @extends {goog.ui.Button}
 */
cn.ui.HSGoal = function (game, ui, opt_renderer, opt_domHelper) {
  goog.base(this, null,
    opt_renderer,
    opt_domHelper);
  this.game_ = game;
  this.ui_ = ui;
  this.setTooltip('Cacher/Afficher le but');
};
goog.inherits(cn.ui.HSGoal, goog.ui.Button);


/**
 * @inheritDoc
 */
cn.ui.HSLevels.prototype.enterDocument = function () {
  goog.base(this, 'enterDocument');
  goog.dom.classlist.set(
    this.getElement(), cn.constants.HSLEVELS_CLASS_NAME);

  var LevelSelector;
  LevelSelector = goog.dom.getElementByClass(cn.constants.LEVEL_SELECTOR_CLASS_NAME);
  
  var show = false;

  var EventType = goog.ui.Component.EventType;
  this.getHandler().listen(this, EventType.ACTION, function () {
    if (show) {
      goog.style.setElementShown(LevelSelector, false);
      show = false;
      goog.style.setTransparentBackgroundImage(this.getElement(), 'png/showMore.png');
      goog.dom.getElementByClass(cn.constants.HSGOAL_CLASS_NAME).style.top = "48px";
    } else {
      goog.style.setElementShown(LevelSelector, true);
      show = true;
      goog.style.setTransparentBackgroundImage(this.getElement(), 'png/showLess.png');
      goog.dom.getElementByClass(cn.constants.HSGOAL_CLASS_NAME).style.top = "175px";
    }

  });
};


/**
* @inheritDoc
*/
cn.ui.HSGoal.prototype.enterDocument = function () {
  goog.base(this, 'enterDocument');
  goog.dom.classlist.set(
    this.getElement(), cn.constants.HSGOAL_CLASS_NAME);

  var goalCanvas;
  window.onload = function () {
    goalCanvas = goog.dom.getElementByClass(cn.constants.GOAL_CLASS_NAME);
  }
  var show = true;

  var EventType = goog.ui.Component.EventType;
  this.getHandler().listen(this, EventType.ACTION, function () {
    if (show) {
      goog.style.setElementShown(goalCanvas, false);
      show = false;
      goog.style.setTransparentBackgroundImage(this.getElement(), 'png/showMore.png');
    } else {
      goog.style.setElementShown(goalCanvas, true);
      show = true;
      goog.style.setTransparentBackgroundImage(this.getElement(), 'png/showLess.png');
    }

  });
};



/** @type {!cn.model.Game} @private */
cn.ui.HSLevels.prototype.game_;


/** @type {!cn.ui.GameUi} @private */
cn.ui.HSLevels.prototype.ui_;
