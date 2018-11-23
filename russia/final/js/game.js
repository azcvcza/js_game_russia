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
    //init cur block
    var init = function (doms) {
        gameDiv = doms.gameDiv;
        nextDiv = doms.nextDiv;
        currentBlock = new square();
        next = new square();
        initDiv(gameDiv, gameData, gameDivs);
        initDiv(nextDiv, next.data, nextDivs);
        currentBlock.origin.x = 5;
        currentBlock.origin.y = 0;//不知道哪出问题了，初始化竟然要 -1；原因是square里边放在第二列了

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
    this.fall = function () {while (down()){}}
}