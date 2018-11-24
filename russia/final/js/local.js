var Local = function () {
    //game obj
    var game;
    //update time
    var tickTime = 500;
    //定时器
    var timer = null;
    //update
    var automove = function () {
        if (!game.down()) {
            game.arrived_bottom();
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
    this.start = start;
}