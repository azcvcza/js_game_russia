var Local = function () {
    //game obj
    var game;
    //update time
    var tickTime = 500;
    //定时器
    var timer = null;
    //gen block type
    var generateType = function () {
        var result =Math.ceil(Math.random() * 7) - 1
        //console.log(" gen type:",result);
        return result;
    }
    //gen block direction
    var generateDirection = function () {
        var result =Math.ceil(Math.random() * 4) - 1;
        //console.log(" gen direction:",result);
        return result;
    }
    //update
    var automove = function () {
        if (!game.down()) {
            var index = generateType();
            var direction = generateDirection();
           
            //console.log("auto move:",index,direction);
            game.arrived_bottom();
            game.clear_bottom();
            var over =  game.check_game_over();
            if(over){
                stop();
            }
            else{
                game.performNext(index,direction); // next block display
            }
           
        }
    }
    //event bind
    var bindKeyEvent = function () {
        document.onkeydown = function (e) {
            if (e.keyCode == 38) {
                //up transform
                game.rotate();
            } else if (e.keyCode == 39) {
                //right
                game.right();
            } else if (e.keyCode == 40) {
                //down
                game.down();
            }
            else if (e.keyCode == 37) {
                //left
                game.left();
            }
            else if (e.keyCode == 32) {
                //space
                game.fall();
            }
        }
    }
    //start
    var start = function () {
        var doms = {
            gameDiv: document.getElementById("game"),
            nextDiv: document.getElementById("next")
        }
        game = new russia_game();
        bindKeyEvent();
        game.init(doms);
        timer = setInterval(automove, tickTime);
    }
    var stop = function(){
        if(timer){
            clearInterval(timer);
            timer = null;
        }
        document.onkeydown =null;
    }
    this.start = start;
}