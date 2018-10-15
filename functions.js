
var _A = 3.0;
var _B = 2.0;
var _xsin1 = 0;
var _xsin2 = 0;
var _xsin3 = 0;
var _ysin1 = 0;
var _ysin2 = 0;
var _ysin3 = 0;
var _pointcount = 0;
var _x = 0;
var _y = 0;
var _z = 0;
var _xx = 0;

//================================= init
function setup() {
  createCanvas(windowWidth, windowHeight-4)
  smooth();
  restart();
  frameRate(300);
  colorMode(RGB,255,255,255,10);
}

function restart() {
  createCanvas(windowWidth, windowHeight-4)
  clearBackground();
  stroke(255,random(10));
  _A = int(random(8,200)) + 1;
  _B = int(random(8)) + 1;
  _xsin1 = int(random(10,25));
  _xsin2 = int(random(5,25));
  _xsin3 = int(random(5.25));
  _ysin1 = int(random(5));
  _ysin2 = int(random(5));
  _ysin3 = int(random(5));
  //println(_A + " : " + _B);
  //println(_xsin1 + " : " + _xsin2 + " : " + _xsin3);
  //println(_ysin1 + " : " + _ysin2 + " : " + _ysin3);
  _pointcount = 0;
}

function clearBackground() {
  background(random(0,75));
}

function draw() {
  for (var i = 0; i < 800; i++) {
    nextPoint();
    point(_x, _y);
    //line(_x, _y, _x, _y);
    _pointcount++;
  }
  if (_pointcount > 4000) {
    restart();
  }
  
}

function nextPoint() {
  var sinAx = sin(_A * _x);
  var sinAy = sin(_A * _y);
  var sinBx = sin(_B * _x);
  var sinBy = sin(_B * _y);

  var newx = 0;
  var newy = 0;

  if (_xsin1 == 1) {
    newx += sinAx;
  } else if (_xsin1 == 2) {
    newx += sinAy;
  } else if (_xsin1 == 3) {
    newx += sinBx;
  } else if (_xsin1 == 4) {
    newx += sinBy;
  }
  if (_ysin1 == 1) {
    newy += sinAx;
  } else if (_ysin1 == 2) {
    newy += sinAy;
  } else if (_ysin1 == 3) {
    newy += sinBx;
  } else if (_ysin1 == 4) {
    newy += sinBy;
  }

  if (_xsin2 == 1) {
    newx += (sinAx * sinAx);
  } else if (_xsin2 == 2) {
    newx += (sinAy * sinAy);
  } else if (_xsin2 == 3) {
    newx += (sinBx * sinBx);
  } else if (_xsin2 == 4) {
    newx += (sinBy * sinBy);
  }
  if (_ysin2 == 1) {
    newy += (sinAx * sinAx);
  } else if (_ysin2 == 2) {
    newy += (sinAy * sinAy);
  } else if (_ysin2 == 3) {
    newy += (sinBx * sinBx);
  } else if (_ysin2 == 4) {
    newy += (sinBy * sinBy);
  }

  if (_xsin3 == 1) {
    newx += (sinAx * sinAx * sinAx);
  } else if (_xsin3 == 2) {
    newx += (sinAy * sinAy * sinAy);
  } else if (_xsin3 == 3) {
    newx += (sinBx * sinBx * sinBx);
  } else if (_xsin3 == 4) {
    newx += (sinBy * sinBy * sinBy);
  }
  if (_ysin3 == 1) {
    newy += (sinAx * sinAx * sinAx);
  } else if (_ysin3 == 2) {
    newy += (sinAy * sinAy * sinAy);
  } else if (_ysin3 == 3) {
    newy += (sinBx * sinBx * sinBx);
  } else if (_ysin3 == 4) {
    newy += (sinBy * sinBy * sinBy);
  }

  _x = width / 2 + (newx * width/6);
  _y = height / 3 + (newy * height/6);
}
