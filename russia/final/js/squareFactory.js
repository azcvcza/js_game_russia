var square1 = function () {
    square.call(this);
    //block

    //旋转数组

    this.rotates = [
        [
            [0, 2, 0, 0],
            [0, 2, 0, 0],
            [0, 2, 0, 0],
            [0, 2, 0, 0],
        ],
        [
            [0, 0, 0, 0],
            [2, 2, 2, 2],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ],
        [
            [0, 2, 0, 0],
            [0, 2, 0, 0],
            [0, 2, 0, 0],
            [0, 2, 0, 0],
        ],
        [
            [0, 0, 0, 0],
            [2, 2, 2, 2],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ],
    ]
}

square1.prototype = square.prototype
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
var square2 = function () {
    //block
    square.call(this);
    // save the rotates index
    //旋转数组
    this.rotates = [
        [
            [0, 2, 0, 0],
            [2, 2, 2, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ],
        [
            [2, 0, 0, 0],
            [2, 2, 0, 0],
            [2, 0, 0, 0],
            [0, 0, 0, 0],
        ],
        [
            [2, 2, 2, 0],
            [0, 2, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ],
        [
            [0, 2, 0, 0],
            [2, 2, 0, 0],
            [0, 2, 0, 0],
            [0, 0, 0, 0],
        ],
    ]
}
square2.prototype = square.prototype;
////////////////////////////////////////////
var square3 = function () {
    //block
    square.call(this);
    // save the rotates index
    //旋转数组
    this.rotates = [
        [
            [2, 2, 2, 0],
            [0, 0, 2, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ],
        [
            [0, 2, 0, 0],
            [0, 2, 0, 0],
            [2, 2, 0, 0],
            [0, 0, 0, 0],
        ],
        [
            [2, 0, 0, 0],
            [2, 2, 2, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ],
        [
            [2, 2, 0, 0],
            [2, 0, 0, 0],
            [2, 0, 0, 0],
            [0, 0, 0, 0],
        ],
    ]
}
square3.prototype = square.prototype;
//////////////44------------------//
var square4 = function () {
    //block
    square.call(this);
    // save the rotates index
    //旋转数组
    this.rotates = [
        [
            [2, 2, 2, 0],
            [2, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ],
        [
            [2, 2, 0, 0],
            [0, 2, 0, 0],
            [0, 2, 0, 0],
            [0, 0, 0, 0],
        ],
        [
            [0, 0, 2, 0],
            [2, 2, 2, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ],
        [
            [2, 0, 0, 0],
            [2, 0, 0, 0],
            [2, 2, 0, 0],
            [0, 0, 0, 0],
        ],
    ]
}
square4.prototype = square.prototype;

// 5
var square5 = function () {
    //block
    square.call(this);
    // save the rotates index
    //旋转数组
    this.rotates = [
        [
            [2, 2, 0, 0],
            [2, 2, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ],
        [
            [2, 2, 0, 0],
            [2, 2, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ],
        [
            [2, 2, 0, 0],
            [2, 2, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ],
        [
            [2, 2, 0, 0],
            [2, 2, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ],
    ]
}
square5.prototype = square.prototype;
//6
var square6 = function () {
    //block
    square.call(this);
    // save the rotates index
    //旋转数组
    this.rotates = [
        [
            [0, 2, 2, 0],
            [2, 2, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ],
        [
            [2, 0, 0, 0],
            [2, 2, 0, 0],
            [0, 2, 0, 0],
            [0, 0, 0, 0],
        ],
        [
            [0, 2, 2, 0],
            [2, 2, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ],
        [
            [2, 0, 0, 0],
            [2, 2, 0, 0],
            [0, 2, 0, 0],
            [0, 0, 0, 0],
        ],
    ]
}
square6.prototype = square.prototype;
var square7 = function () {
    //block
    square.call(this);
    // save the rotates index
    //旋转数组
    this.rotates = [
        [
            [2, 2, 0, 0],
            [0, 2, 2, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ],
        [
            [0, 2, 0, 0],
            [2, 2, 0, 0],
            [2, 0, 0, 0],
            [0, 0, 0, 0],
        ],
        [
            [2, 2, 0, 0],
            [0, 2, 2, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ],
        [
            [0, 2, 0, 0],
            [2, 2, 0, 0],
            [2, 0, 0, 0],
            [0, 0, 0, 0],
        ],
    ]
}
square7.prototype = square.prototype;

var SquareFactory = function () { };
SquareFactory.prototype.make = function (index, direction) {
    var s;
    index = index + 1;
    switch (index) {
        case 1:
            s = new square1();
            break;
        case 2:
            s = new square2();
            break;
        case 3:
            s = new square3();
            break;
        case 4:
            s = new square4();
            break;
        case 5:
            s = new square5();
            break;
        case 6:
            s = new square6();
            break;
        case 7:
            s = new square7();
            break;
        default:
            break;
    }
    //console.log(index,s);
    s.origin.x = 0;
    s.origin.y = 3;
    console.log("make block:",s,index,direction)
    s.rotate(direction);
    return s;
}