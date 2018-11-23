var square = function () {
    //block
    this.data = [
        [0, 2, 0, 0],
        [0, 2, 0, 0],
        [0, 2, 0, 0],
        [0, 2, 0, 0],
    ];
    //origin
    this.origin = {
        x: 0,
        y: 0,
    }
    this.direction = 0;// save the rotates index
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
square.prototype.canRotate = function (is_Valid) {
    var direction = this.direction+1;
    if(direction ==4){
       direction=0; 
    }
    var test = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
    ];
    for(var i=0;i<this.data.length;i++){
        for(var j=0;j<this.data[0].length;j++){
            test[i][j] = this.rotates[direction][i][j];
        }
    }
    
    return is_Valid(this.origin, test);
}
square.prototype.rotate = function () {
    this.direction+=1;
    if(this.direction ==4){
        this.direction=0; 
     }
     for(var i=0;i<this.data.length;i++){
         for(var j=0;j<this.data[0].length;j++){
            this.data[i][j] = this.rotates[this.direction][i][j];
         }
     }
}

square.prototype.canDown = function (is_Valid) {
    var test = {};
    test.x = this.origin.x + 1;
    test.y = this.origin.y;
    return is_Valid(test, this.data);
}
square.prototype.down = function () {
    this.origin.x += 1;
}

square.prototype.canLeft = function (is_Valid) {
    var test = {};
    test.x = this.origin.x;
    test.y = this.origin.y - 1;
    return is_Valid(test, this.data);
}
square.prototype.left = function () {
    this.origin.y -= 1;
}

square.prototype.canRight = function (is_Valid) {
    var test = {};
    test.x = this.origin.x;
    test.y = this.origin.y + 1;
    return is_Valid(test, this.data);
}
square.prototype.right = function () {
    this.origin.y += 1;
}