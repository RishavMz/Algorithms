
$(document).ready(function(){
    var length = (Math.floor(Math.random()*50));
    var array = [];
    for(var i=0;i<length;i++){
        array.push(Math.floor(Math.random()*100));
    }
    for(var i=0;i<length;i++){
        $("#area").html($("#area").html()+"<span class = 'box' id= 'box"+i+"'>"+array[i]+"</span>");
        if(i%16 == 15){
            $("#area").html($("#area").html()+"<br><br><br>");
        }
    }
    $("#area").html($("#area").html()+"<br><center><br><br><br><button id='search'>Sort</button><button id='reset'>Reset</button><span></center>");
    console.log(array);
    
    $("#search").click(function(){
    var sorted = 0;    
    var j=0;
    var prev1 = 0;
    var prev2 = 0;
    var prev3 = 0;
    run = function go(){
        if(j==length)
            sorted = 1;
        var k=j;
         var loc1 = "#box"+j+"";
         $(prev1).removeClass("sbox");
         $(prev1).addClass("box");
         $(loc1).removeClass("box");
         $(loc1).addClass("sbox");
        prev1 = loc1;
        run2 = function bubble(){
            if(k==0){
                j = j+1;
                setTimeout(run,500);
            }
            else{
                 $(prev2).removeClass("fbox");
                 $(prev2).addClass("box");
                 $(prev3).removeClass("fbox");
                 $(prev3).addClass("box");
                 var loc2 = "#box"+k+"";
                 var loc3 = "#box"+(k-1)+"";
                prev2 = loc2;
                prev3 = loc3;
                 $(loc2).removeClass("box");
                 $(loc2).addClass("fbox");
                 $(loc3).removeClass("box");
                 $(loc3).addClass("fbox");
                if(array[k]<array[k-1]){
                    var temp = array[k];
                    array[k] = array[k-1];
                    array[k-1] = temp;
                     $(loc2).html(array[k]);
                     $(loc3).html(array[k-1]);
                    k = k-1;
                    setTimeout(run2,250);
                }
                else{
                    j = j+1;
                    setTimeout(run,500);
                }
            }
        }
        if(j>0 && sorted === 0){
            if(array[j]<array[j-1])
                setTimeout(run2,250);
            else{
                j = j+1;
                setTimeout(run,500);
            }    
        }
        else if(sorted ===0){
            j = j+1;
            setTimeout(run,500);
        }
    }
    run();
    });
    $("#reset").click(function(){
        location.reload();
    });
});
