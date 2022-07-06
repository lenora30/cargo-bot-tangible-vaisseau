
/**
 * Check if the object is a corner
 * @param {object} obj The object to test
 * @return {boolean}
 */
function isVertices(obj) {
  return (obj.code == CORNER.top_right || obj.code == CORNER.top_left || obj.code == CORNER.bottom_right || obj.code == CORNER.bottom_left);
}

/**
 * Check if the point is between the top and the bottom of the grid
 * @param {object} top_left 
 * @param {object} top_right 
 * @param {object} bottom_right 
 * @param {object} bottom_left 
 * @param {object} e The object to test
 * @return {boolean}
 */
function inFunction(top_left, top_right, bottom_right, bottom_left, e) {
  return (((e.y + 10) > top_left.y || (e.y + 10) > top_right.y) && ((e.y + 10) < bottom_left.y || (e.y + 10) < bottom_right.y));
}

/**
 * Check if the point is between the border left and the right of the grid
 * @param {object} top_right 
 * @param {number} case_width 
 * @param {number} side The left side of the grid
 * @param {object} point The object to test
 * @return {boolean}
 */
function inIndex(top_right, case_width, side, point) {
  return (point.x > side && point.x < (top_right.x - (case_width / 2)));
}

/**
 * Push the code, the function and the index of each instruction into an array
 * @param {array} tab_points Array 2D with objects (points) in the right index according to this function (ex : [[a],[]] => a is in f0)
 * @param {array} tab_instruc Array with [0] in the first index.
 * @param {object} top_right
 * @param {number} case_width 
 * @param {number} side 
 */
function index(tab_points, tab_instruc, top_right, case_width, side) {
  for (let i = 0; i < tab_points.length; i++) {
    for (let j = 0; j < tab_points[i].length; j++) {
      if (inIndex(top_right, case_width, side, tab_points[i][j])) {
        let index = Math.floor((tab_points[i][j].x - side) / case_width);
        tab_instruc.push([tab_points[i][j].code, i, 7 - index]); // push for each instructions and commands : the code, the function number and the index in this function
      }
    }
  }
}

/**
 * Put the codes in the right function : f0, f1, f2, f3. On the array tab_points on the form [[A], [B]] => A is in f0 and B is in f1.
 * @param {array} topcodes The array with all the objects scan
 * @param {number} case_height 
 * @param {object} top_right 
 * @param {object} top_left
 * @param {object} bottom_left 
 * @param {object} bottom_right 
 * @return {array} tab_points
 */
function tri_fonction(topcodes, case_height, top_right, top_left, bottom_left, bottom_right) {
  let tab_points = [[], [], [], []];
  topcodes.forEach(e => {
    let num_fonc;

    if (!(isVertices(e)) && inFunction(top_left, top_right, bottom_right, bottom_left, e)) {
      if (e.code >= CODE_MIN_COMMAND && e.code <= CODE_MAX_COMMAND || e.code >= CODE_MIN_DIFFICULTY) {   // check if the instruction is a command or a level code
        num_fonc = Math.floor(e.y / case_height);

        if (num_fonc == 2 || num_fonc == 1)
        {
          num_fonc--;
        }
        tab_points[num_fonc].push(e);
      } 
    }
  });
  return tab_points;
}


/**
 * Put on the array the number of the level selected
 * (0 if there isn't the card level on the grid)
 */
function levelSelect() {
  var difficulty = 0;
  var level = 0;

  tab_instruc.forEach(e => {
    if (e[1] == DIFFICULTY_FONCTION && e[2] == DIFFICULTY_INDEX) {
      difficulty = DIFFICULTY[e[0]];
    };
    if (e[1] == LEVEL_FONCTION && e[2] == LEVEL_INDEX) {
      level = LEVEL[e[0]];
    };
  });
  tab_instruc[0][0] = difficulty * 6 + level;
}

/**
 * This function check if they are all the corners on the array, (if not, a alert windows pop)
 * and put them on the variable.
 * @param {array} topcodes The array with all the objects scan
 * @returns {boolean}
 */
function checkCorner(topcodes) {
  for (let i = 0; i < topcodes.length; i++) {
    switch (topcodes[i].code) {
      case (CORNER.top_left):
        top_left = topcodes[i];
        break;
      case (CORNER.top_right):
        top_right = topcodes[i];
        break;
      case (CORNER.bottom_left):
        bottom_left = topcodes[i];
        break;
      case (CORNER.bottom_right):
        bottom_right = topcodes[i];
        break;
      default:
        break;
    }
  }

  if (top_right === null || top_left === null || bottom_left === null || bottom_right === null) {
    alert("Les quatre coins n'ont pas été détectés");
    return false;
  } else {
    return true;
  }
}

/**
 * Check if an instruction is a command
 * @param {array} instruc 
 */
function isCommand(instruc) {
  return (instruc[0] >= CODE_MIN_COMMAND && instruc[0] <= CODE_MAX_COMMAND);
}

/**
* Check if an instruction is a condition
* @param {array} instruc
 */
function isCondition(instruc) {
  return (instruc[0] >= CODE_MIN_CONDITION && instruc[0] <= CODE_MAX_CONDITION);
}

/**
 * Check if a command has another command before, return true or false
 * @param {array} c A command (an instruction with a code between CODE_MIN_COMMAND and CODE_MAX_COMMAND) 
 * @param {array} tab_instruc
 */
function commandBefore(c, tab_instruc) {
  var func = c[1];  // the function of c
  var index = c[2]; // the index of c

  var commandBefore = false;

  if (index == 0) {
    commandBefore = true;
  } else { 
    // try to find a command before, if it is found return true
    tab_instruc.forEach(e => {
      if (isCommand(e)) {
        if (e[1] == func && e[2] == index-1) {
          commandBefore = true;
        }
      }
    });
  }

  return commandBefore;
}

/**
 * Check if a command has another command before, return true or false
 * @param {array} c A condition (an instruction with a code between CODE_MIN_CONDITION and CODE_MAX_CONDITION) 
 * @param {array} tab_instruc
 */
function commandUnder(c, tab_instruc) {
  var func = c[1];  // the function of c
  var index = c[2]; // the index of c

  var commandUnder = false;

  // try to find a command under the condition
  tab_instruc.forEach(e => {
    if (isCommand(e)) {
      console.log(e);
      if (e[1] == func && e[2] == index) {
        commandUnder = true;
      }
    }
  });

  return commandUnder;
}

/**
 * Alert the user if the program is sus
 * @param {array} tab_instruc 
 */
function checkProgram(tab_instruc) {
  tab_instruc.forEach(e => {
    if (isCommand(e)) {
      if (!(commandBefore(e, tab_instruc))) {
        warning(e[1], e[2]-1);
      }
    } else if (isCondition(e)) {
      if (!(commandUnder(e, tab_instruc))) {
        warning(e[1], e[2]);
      }
    }
  });
}

function warning(func, index) {
  var modalDialog = document.getElementById("modalDialog");
  document.getElementById("dialogMsg").innerHTML = "ATTENTION<br><br>Il y a possiblement une erreur dans ton programme<br>(Il semble manquer une instruction à l'index " + index +")<br>";
  document.getElementById("dialogYes").onclick = function () {
    window.location.href = "index.html#savoir_regles";
    modalDialog.style.display = "none";
  }
  document.getElementById("dialogNo").onclick = function () {
    modalDialog.style.display = "none";
  }

  modalDialog.style.display = "flex";
}

/**
 * Main function to transform the topcode tab into the instruction tab
 * @param {array} topcodes The array with all the objects scan
 * @param {boolean} sendBool This boolean is for know if the array needs to be sent or not
 */
function scan(topcodes, sendBool) {
  top_right = null;
  top_left = null;
  bottom_right = null;
  bottom_left = null;

  if (checkCorner(topcodes)) {

    // To fix the problem with the sheet rotate relative to the photo
    translation(topcodes, top_left);
    rotation_matrix(topcodes, bottom_left, bottom_right);

    // To fix the problem of perspetive
    var srcCorners = [top_left.x, top_left.y, top_right.x, top_right.y, bottom_right.x, bottom_right.y, bottom_left.x, bottom_left.y];
    var dstCorners = [DST_CORNER.top_left_x, DST_CORNER.top_left_y, DST_CORNER.top_right_x, DST_CORNER.top_right_y, DST_CORNER.bottom_right_x, DST_CORNER.bottom_right_y, DST_CORNER.bottom_left_x, DST_CORNER.bottom_left_y];
    var perspT = PerspT(srcCorners, dstCorners);

    perspective(topcodes, perspT);

    let height = bottom_left.y - top_left.y;
    let width = top_right.x - top_left.x;
    let case_height = (height / 4);               // Because we have 4 functions
    let case_width = (width / 9);                 // Because we have 8 cases for each function + 1 case with the side right and the side left of the grid
    let side_left = top_left.x + (case_width / 2);

    let tab_points = tri_fonction(topcodes, case_height, top_right, top_left, bottom_left, bottom_right);

    tab_instruc = [[0]];

    index(tab_points, tab_instruc, top_right, case_width, side_left);
    levelSelect();

    currentProgram = tab_instruc;

    checkProgram(tab_instruc);

    // Check if the array needs to be sent
    if (sendBool) {
      send(tab_instruc);
    }
  }
}

/**
 * The array with all the objects scan
 * @type {array}
 */
var topcodes = [];

/**
 * The array with the objects scan in the good function 
 * @type {array}
 */
var tab_instruc = [];

// /**
//  * The final array. The array will have this shape : [[level choice], [code of the instruction, function, index in the function], [code of the instruction, function, index in the function]...]
//  * @type {array}
//  */
// var tab_points = [];

// The four vertices of the grid
var top_right;
var top_left;
var bottom_right;
var bottom_left;