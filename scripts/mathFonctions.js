/**
 * @param {array} vec Array with the coordonate x in index 0 and y in index 1
 * @returns 
 */
function norm(vec) {
    return Math.sqrt(vec[0] * vec[0] + vec[1] * vec[1]);
}
  
/**
 * @param {array} vec1 Vector with the coordonate x in index 0 and y in index 1
 * @param {array} vec2 Vector with the coordonate x in index 0 and y in index 1
 * @returns 
 */
function angle(vec1, vec2) {
    return (Math.acos(dot_product(vec1, vec2) / (norm(vec1) * norm(vec2))));
}
  
/**
 * @param {array} vec1 Vector with the coordonate x in index 0 and y in index 1
 * @param {array} vec2 Vector with the coordonate x in index 0 and y in index 1
 * @returns 
 */
function dot_product(vec1, vec2) {
    return (vec1[0] * vec2[0] + vec1[1] * vec2[1]);
}
  
/**
 * @param {array} mat Array 2D. Each index is a row of the matrix
 * @param {array} vec Vector with the coordonate x in index 0 and y in index 1
 * @returns 
 */
function matrix_vec_mult(mat, vec) {
    let result = [];
    for (let i = 0; i < mat.length; i++) {
      result.push(0);
      for (let j = 0; j < vec.length; j++) {
        result[i] += mat[i][j] * vec[j];
        }
    }
    return result;
}

/**
 * Translate a group of point compared to a single point
 * @param {*} tab 
 * @param {*} point 
 */
function translation(tab, point) {
    for (let i = 0; i < tab.length; i++) {
      if (tab[i].code != point.code) {
        tab[i].x -= point.x;
        tab[i].y -= point.y;
      }
    }
    point.x = 0;
    point.y = 0;
}
  
/**
 * Function for rotate all the coordinates of the points with the angle between bottom_left and the y-axis
 * @param {array} topcodes Array of objects(points)
 * @param {object} bottom_left 
 * @param {object} bottom_right 
 */
function rotation_matrix(topcodes, bottom_left, bottom_right) {
    let cos_a;
    let sin_a;
  
    if (bottom_left.y > bottom_right.y) {
      cos_a = Math.cos(angle([bottom_left.x, bottom_left.y], [0, 1]));
      sin_a = Math.sin(angle([bottom_left.x, bottom_left.y], [0, 1]));
    }
    else {
      cos_a = Math.cos(-angle([bottom_left.x, bottom_left.y], [0, 1]));
      sin_a = Math.sin(-angle([bottom_left.x, bottom_left.y], [0, 1]));
    }
  
  
    let matrix = [[cos_a, -sin_a], [sin_a, cos_a]];
    for (let i = 0; i < topcodes.length; i++) {
      let nv = matrix_vec_mult(matrix, [topcodes[i].x, topcodes[i].y]);
      topcodes[i].x = nv[0];
      topcodes[i].y = nv[1];
    }
}

/**
 * @param {array} topcodes Array of objects
 * @param pers 
 */
function perspective(topcodes, pers) {
    topcodes.forEach(e => {
      let srcPt = [e.x, e.y];
      let dstPt = pers.transform(srcPt[0], srcPt[1]);
      e.x = dstPt[0];
      e.y = dstPt[1];
    });
}