var russia_game = function () {
    //dom select
    var gameDiv;
    var nextDiv;

    //data matrix
    var nextData = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ];

    var gameData = [

        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];
    //current elem
    var currentBlock;
    //next elem
    var nextBlock;
    //divs
    var nextDivs = [];
    var gameDivs = [];
    //初始化div
    var initDiv = function (container, data, global_arr) {
        for (var i = 0; i < data.length; i++) {
            var Div = [];
            for (var j = 0; j < data[0].length; j++) {
                var newNode = document.createElement('div');
                newNode.className = 'none';
                newNode.style.top = (i * 20) + 'px';
                newNode.style.left = (j * 20) + 'px';
                container.appendChild(newNode);
                Div.push(newNode);
            }
            global_arr.push(Div);
        }
    }
    //刷新DIV
    var refreshDiv = function (data, divs) {
        for (var i = 0; i < data.length; i++) {
            for (var j = 0; j < data[0].length; j++) {
                if (data[i][j] === 0) {
                    divs[i][j].className = 'none';
                }
                else if (data[i][j] === 1) {
                    divs[i][j].className = 'done';
                }
                else if (data[i][j] === 2) {
                    divs[i][j].className = 'current';
                }
            }
        }
    }
    //data validation
    var check = function (pos, x, y) {
        //console.log("check",pos,x,y)
        if (pos.x + x < 0) {
            //上方边界
            return false;
        } else if (pos.x + x >= gameData.length) {
            //下方边界
            return false;
        } else if (pos.y + y < 0) {
            //left
            return false;
        }
        else if (pos.y + y >= gameData[0].length) {
            //right
            return false;
        }
        else if (gameData[pos.x + x][pos.y + y] === 1) {
            //duprecate
            return false;
        } else {
            return true;
        }
    }
    //check bottom         cur.origin,blockmodel
    var isValid = function (pos, data) {
        //console.log("invalid",data)
        for (var i = 0; i < data.length; i++) {
            for (var j = 0; j < data[0].length; j++) {
                if (data[i][j] != 0) {
                    if (!check(pos, i, j)) {
                        return false;
                    }
                }
            }
        }
        return true;
    }
    //set data
    var setData = function () {
        for (var i = 0; i < currentBlock.data.length; i++) {
            for (var j = 0; j < currentBlock.data[0].length; j++) {
                if (check(currentBlock.origin, i, j)) {
                    var tempx = currentBlock.origin.x + i;
                    var tempy = currentBlock.origin.y + j;
                    gameData[tempx][tempy] = currentBlock.data[i][j];
                }

            }
        }
    }
    //clear global data
    var clearData = function () {
        for (var i = 0; i < gameData.length; i++) {
            for (var j = 0; j < gameData[0].length; j++) {
                if (check(currentBlock.origin, i, j)) {
                    var tempx = currentBlock.origin.x + i;
                    var tempy = currentBlock.origin.y + j;
                    gameData[tempx][tempy] = 0
                }
            }
        }
    }
    // game.down()
    var down = function () {
        //console.log("down",currentBlock,currentBlock.canDown())
        if (currentBlock.canDown(isValid)) {
            clearData();
            currentBlock.down();
            setData();
            refreshDiv(gameData, gameDivs)
            return true
        } else {
            return false;
        }

    }
    // game.left()
    var left = function () {
        if (currentBlock.canLeft(isValid)) {
            clearData();
            currentBlock.left();
            setData();
            refreshDiv(gameData, gameDivs)
        };
    }
    //game .right()
    var right = function () {
        if (currentBlock.canRight(isValid)) {
            clearData();
            currentBlock.right();
            setData();
            refreshDiv(gameData, gameDivs)
        };
    }
    //game.rotate()
    var rotate = function () {
        if (currentBlock.canRotate(isValid)) {
            clearData();
            currentBlock.rotate();
            setData();
            refreshDiv(gameData, gameDivs)
        };
    }
    //block arrived bottom
    var arrived_bottom = function () {
        for (var i = 0; i < currentBlock.data.length; i++) {
            for (var j = 0; j < currentBlock.data[0].length; j++) {
                if (check(currentBlock.origin, i, j)) {
                    if (gameData[currentBlock.origin.x + i][currentBlock.origin.y + j] === 2) {
                        gameData[currentBlock.origin.x + i][currentBlock.origin.y + j] = 1;
                    }
                }
            }
        }
        refreshDiv(gameData, gameDivs)
    }
    //draw next block
    var performNext = function (type, direction) {
        currentBlock = next;
        //console.log("performnext:", currentBlock, next,nextBlock,nextData);
        setData();
        next = SquareFactory.prototype.make(type, direction)
        refreshDiv(gameData, gameDivs);
        refreshDiv(next.data, nextDivs);
    }
    // clear bottom
    var clear_bottom = function(){
        for(var i = gameData.length-1;i>=0;i--){
            var clear = true;
            for(var j=0;j<gameData[0].length;j++){
                if(gameData[i][j] !=1){
                    clear = false;
                    break;
                }
            }
            if(clear){
                for(var m =i;m>=0;m--){
                    for(var n=0;n<gameData[0].length;n++){
                       // console.log(gameData,m,n)
                        gameData[m][n] = gameData[m-1][n];
                        
                    }
                }
                for(var n=0;n<gameData[0].length;n++){
                    gameData[0][n] = 0;
                }
                i++;
            }
        }
        refreshDiv(gameData,gameDivs)
    }
    //check game over
    var check_game_over = function(){
        var gameOver = false;
        for(var i=0;i<gameData[0].length;i++){
            if(gameData[1][i] == 1){
                gameOver = true;
            }
        }
        return gameOver;
    }
    //init cur block
    var init = function (doms) {
        gameDiv = doms.gameDiv;
        nextDiv = doms.nextDiv;
        currentBlock = SquareFactory.prototype.make(2, 2);
        next = SquareFactory.prototype.make(3, 3);
        initDiv(gameDiv, gameData, gameDivs);
        initDiv(nextDiv, next.data, nextDivs);
        //不知道哪出问题了，初始化竟然要 -1；原因是square里边放在第二列了
        setData();
        refreshDiv(gameData, gameDivs);
        refreshDiv(next.data, nextDivs);
    }
    //export
    this.init = init;
    this.down = down;
    this.left = left;
    this.right = right;
    this.rotate = rotate;
    this.fall = function () { while (down()) { } }
    this.arrived_bottom = arrived_bottom;
    this.performNext = performNext;
    this.clear_bottom = clear_bottom;
    this.check_game_over = check_game_over;
}