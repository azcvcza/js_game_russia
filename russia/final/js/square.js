var square = function(){
    //block
    this.data = [
        [0,2,0,0],
        [0,2,0,0],
        [0,2,0,0],
        [0,2,0,0],
    ];
    //origin
    this.origin ={
        x:0,
        y:0,
    }
}
square.prototype.canDown = function(is_Valid){
    var test = {};
    test.x = this.origin.x +1;
    test.y = this.origin.y;
    return is_Valid(test,this.data);
}
square.prototype.down = function(){
    this.origin.x +=1;
}