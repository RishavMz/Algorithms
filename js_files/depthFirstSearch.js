
let grid = [];
for(let i=0;i<10;i++){
    row = []
    for(let j=0;j<40;j++){
        row.push(0);
    }
    grid.push(row);
}
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
        let stack = [];
        let pp = 0;
        stack.push([tempx,tempy]);
        let run = function go(){
            $("#cell_"+prevx+"_"+prevy+"").addClass("cellv");
            $("#cell_"+prevx+"_"+prevy+"").removeClass("cellvis");
            tempx = stack[stack.length -1][0];
            tempy = stack[stack.length -1][1];
            if(pp == 1){
                $("#cell_"+tempx+"_"+tempy+"").addClass("cellvis");
                $("#cell_"+tempx+"_"+tempy+"").removeClass("cellv");
                pp = 0;
            }
            if((tempx === endx && tempy === endy )|| stack.length ===0 ){
                stop = 0;
            }
            else{
                if(tempy< 39 && grid[tempx][tempy+1]<3){
                    movex = 0;
                    movey = 1;
                    grid[tempx][tempy] = 4;
                    tempy = tempy+1;
                    $("#cell_"+tempx+"_"+tempy+"").addClass("cellvis");
                    $("#cell_"+tempx+"_"+tempy+"").removeClass("cell");
                    stack.push([tempx,tempy]);
                
                }
                else if(tempx>0 && grid[tempx-1][tempy]<4){
                    movex = -1;
                    movey = 0;
                    grid[tempx][tempy] = 4;
                    tempx = tempx-1;
                    $("#cell_"+tempx+"_"+tempy+"").addClass("cellvis");
                    $("#cell_"+tempx+"_"+tempy+"").removeClass("cell");
                    stack.push([tempx,tempy]);
                }
                else if(tempy >0 && grid[tempx][tempy-1] <4){
                    movex = 0;
                    movey = -1;
                    grid[tempx][tempy] = 4;
                    tempy = tempy-1;
                    $("#cell_"+tempx+"_"+tempy+"").addClass("cellvis");
                    $("#cell_"+tempx+"_"+tempy+"").removeClass("cell");
                    stack.push([tempx,tempy]);
                }
                else if(tempx< 9 && grid[tempx+1][tempy]<4){
                    movex = 1;
                    movey = 0;
                    grid[tempx][tempy] = 4;
                    tempx = tempx+1;
                    $("#cell_"+tempx+"_"+tempy+"").addClass("cellvis");
                    $("#cell_"+tempx+"_"+tempy+"").removeClass("cell");
                    stack.push([tempx,tempy]);
                }
                else{
                    grid[tempx][tempy] = 4;
                    stack.pop();
                    pp = 1;
                }
                prevx= tempx;
                prevy = tempy;      
            }
            if(stack.length===0){
                stop = 0;
            }
            if(stop === 1){
                setTimeout(run,20);
            }
        }
        run();
    });
    
});
