var Local = function(){
    //game obj
    var game;

    //start
    var start = function(){
        var doms = {
            gameDiv:document.getElementById("game"),
            nextDiv:document.getElementById("next")
        }
        game = new russia_game();
        game.init(doms)
    }
    this.start = start;
}