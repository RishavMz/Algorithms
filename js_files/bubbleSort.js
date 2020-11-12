
$(document).ready(function(){
    var length = (Math.floor(Math.random()*50)+5);
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
        var j=0;
        var jf = 0;
        sorted = 0;
        var prev1 =0;
        var prev2 = 0;
        var prev3 = 0;
            run =  function go() {
            var k=j+1;
            run2 = function go2(){
                $(prev1).removeClass("sbox");
                $(prev1).addClass("box");
                $(prev2).removeClass("sbox");
                $(prev2).addClass("box");
                $(prev3).removeClass("sbox");
                $(prev3).addClass("fbox");
                var locj='#box'+(k-1)+'';
                var lock='#box'+k+'';
                if(k > (length-jf+1)){
                    jf += 1;
                    if(j>=length){
                        sorted = 1;
                    }
                    else{
                        run();
                    }
                }
                else{
                    $(locj).removeClass("box");
                    $(locj).addClass("sbox");
                    $(lock).removeClass("box");
                    $(lock).addClass("sbox");
                    if(array[k-1]>array[k]){
                        var temp = array[k-1];
                        array[k-1] = array[k];
                        array[k] = temp;
                        $(locj).html(array[k-1]);
                        $(lock).html(array[k]);
                    }
                    k+=1;
                    prev1 = locj;
                    prev2 = lock;
                    prev3 = "#box"+(length-jf)+"";

                    setTimeout(run2,100);
                }
            }
            if(sorted ==0){
                run2();
            }
            
        }
        run();
        
    });
    $("#reset").click(function(){
        location.reload();
    });
});
