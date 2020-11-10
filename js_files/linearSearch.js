
$(document).ready(function(){
    var length = (Math.floor(Math.random()*10)+15);
    var array = [];
    for(var i=0;i<length;i++){
        array.push(Math.floor(Math.random()*100));
    }
    var key = array[(Math.floor(Math.random()*10)+5)];
    for(var i=0;i<length;i++){
        $("#area").html($("#area").html()+"<span class = 'box' id= 'box"+i+"'>"+array[i]+"</span>");
        if(i%16 == 15){
            $("#area").html($("#area").html()+"<br><br><br>");
        }
    }
    $("#area").html($("#area").html()+"<br><center><br><br><span class='key'>Key = "+key+"<br><br><button id='search'>Search</button><button id='reset'>Reset</button><span></center>");
    console.log(array);
    $("#search").click(function(){
        var j=0;
            run =  function go() {
            var loc='#box'+j+'';
            if(array[j]===key){
                $(loc).removeClass("box");
                $(loc).addClass("fbox");
                console.log("found"+loc);    
            }
            else if(j++<=length){
                $(loc).removeClass("box");
                $(loc).addClass("sbox");
                console.log(array[j]+""+loc);
                setTimeout(run,100);                    //The actual thing that is causing a delay
            }
        }
        run();
    });
    $("#reset").click(function(){
        location.reload();
    });
});
