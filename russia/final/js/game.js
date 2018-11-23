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

        for (var i = 0; i < currentBlock.data.length; i++) {
            for (var j = 0; j < currentBlock.data[0].length; j++) {
                var tempx = currentBlock.origin.x + i;
                var tempy = currentBlock.origin.y + j;

                gameData[tempx][tempy] = currentBlock.data[i][j];

            }
        }
        refreshDiv(gameData, gameDivs);
        refreshDiv(next.data, nextDivs);
    }
    //export
    this.init = init;
}