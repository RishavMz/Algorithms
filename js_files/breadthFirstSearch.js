
let grid = [];
for(let i=0;i<10;i++){
    row = []
    for(let j=0;j<40;j++){
        row.push(0);
    }
    grid.push(row);
}
let dp  = [];
startx = Math.floor(Math.random()*10);
starty = Math.floor(Math.random()*40);
endx = Math.floor(Math.random()*10);
endy = Math.floor(Math.random()*40);
grid[startx][starty] = 2;
grid[endx][endy] = 3;
let st="#cell_"+startx+"_"+starty+"";
let en = "#cell_"+endx+"_"+endy+"";
function blocked(a , b){
    if(grid[a][b]==0){
        grid[a][b] = 10;
        let v = "#cell_"+a+"_"+b+"";
        $(v).addClass("cellb");
        $(v).removeClass("cell");
    }
    else if(grid[a][b]==10){
        grid[a][b] = 0;
        let v = "#cell_"+a+"_"+b+"";
        $(v).addClass("cell");
        $(v).removeClass("cellb");
    }
}

$(document).ready(function(){
    for(let i=0;i<10;i++){
        for(let j=0;j<40;j++){
            $("#area").html($("#area").html()+"<span class = 'cell' id='cell_"+i+"_"+j+"' onmouseover = 'blocked("+i+","+j+")'>  ...  </span>");
        }
        $("#area").html($("#area").html()+"<br><br>");
    }
    $(st).addClass("cellsp");
    $(st).removeClass("cell");
    $(en).addClass("cellsp");
    $(en).removeClass("cell");
    $("#area").html($("#area").html()+"<br><center><br><br><br><button id='trav'>Traverse</button><button id='reset'>Reset</button><span></center>");
    
    $("#reset").click(function(){
        location.reload();
    });
    $("#trav").click(function(){
        let tempx = startx;
        let tempy = starty; 
        let movex = 1;
        let movey = 0;
        let prevx = tempx;
        let prevy = tempy;
        let stop = 1;
        let queue = [];
        let pp = 0;
        var tmx ;
        var tmy;
        var it = 0;
        queue.push([tempx,tempy]);
        let path = function trav(){
            if(it === 0){
                tmx = endx;
                tmy = endy;
                it += 1;
            }
            for(var i=0;i<dp.length;i++){
                if(dp[i][0][0] === tmx && dp[i][0][1] === tmy){
                    $("#cell_"+tmx+"_"+tmy+"").addClass("cellsp2");
                    $("#cell_"+tmx+"_"+tmy+"").removeClass("cellvis");
                    $("#cell_"+tmx+"_"+tmy+"").removeClass("cellv");
                    tmx = dp[i][1][0];
                    tmy = dp[i][1][1];
                    setTimeout(path,100);
                }
            }
        }
        let run = function go(){
            $("#cell_"+prevx+"_"+prevy+"").addClass("cellv");
            $("#cell_"+prevx+"_"+prevy+"").removeClass("cellvis");
            tempx = queue[0][0];
            tempy = queue[0][1];
            if(pp == 1){
                $("#cell_"+tempx+"_"+tempy+"").addClass("cellvis");
                $("#cell_"+tempx+"_"+tempy+"").removeClass("cellv");
                pp = 0;
            }
            if((tempx === endx && tempy === endy )|| queue.length ===0 ){
                stop = 0;
                setTimeout(path,100);
            }
            else{
                if(tempy< 39 && grid[tempx][tempy+1]<3){
                    movex = 0;
                    movey = 1;

                    tempy = tempy+1;
                    dp.push([[tempx,tempy],[tempx,tempy-1]]);
                    grid[tempx][tempy] = 4;
                    $("#cell_"+tempx+"_"+tempy+"").addClass("cellvis");
                    $("#cell_"+tempx+"_"+tempy+"").removeClass("cell");
                    queue.push([tempx,tempy]);
                
                }
                else if(tempx>0 && grid[tempx-1][tempy]<4){
                    movex = -1;
                    movey = 0;
                    tempx = tempx-1;
                    grid[tempx][tempy] = 4;
                    dp.push([[tempx,tempy],[tempx+1,tempy]]);
                    $("#cell_"+tempx+"_"+tempy+"").addClass("cellvis");
                    $("#cell_"+tempx+"_"+tempy+"").removeClass("cell");
                    queue.push([tempx,tempy]);
                }
                else if(tempy >0 && grid[tempx][tempy-1] <4){
                    movex = 0;
                    movey = -1;
                    tempy = tempy-1;
                    grid[tempx][tempy] = 4;
                    dp.push([[tempx,tempy],[tempx,tempy+1]]);
                    $("#cell_"+tempx+"_"+tempy+"").addClass("cellvis");
                    $("#cell_"+tempx+"_"+tempy+"").removeClass("cell");
                    queue.push([tempx,tempy]);
                }
                else if(tempx< 9 && grid[tempx+1][tempy]<4){
                    movex = 1;
                    movey = 0;
                    tempx = tempx+1;
                    grid[tempx][tempy] = 4;
                    dp.push([[tempx,tempy],[tempx-1,tempy]]);
                    $("#cell_"+tempx+"_"+tempy+"").addClass("cellvis");
                    $("#cell_"+tempx+"_"+tempy+"").removeClass("cell");
                    queue.push([tempx,tempy]);
                }
                else{
                    grid[tempx][tempy] = 4;
                    pp = 1;
                    queue.shift();
                }
                prevx= tempx;
                prevy = tempy;      
            }
            if(queue.length===0){
                stop = 0;
            }
            if(stop === 1){
                setTimeout(run,20);
            }
        }
        run();
    });
    
});
