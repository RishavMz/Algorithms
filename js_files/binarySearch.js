$(document).ready(function(){
    var length = (Math.floor(Math.random()*10)+50);
    var array = [];
    for(var i=0;i<length;i++){
        array.push(Math.floor(Math.random()*100));
    }
    

    var key = array[(Math.floor(Math.random()*50))];
    for(var i=0;i<length;i++){
        $("#area").html($("#area").html()+"<span class = 'box' id= 'box"+i+"'>"+array[i]+"</span>");
        if(i%16 == 15){
            $("#area").html($("#area").html()+"<br><br><br>");
        }
    }
    $("#area").html($("#area").html()+"<br><center><br><br><span class='key'>Key = "+key+"<br><br><button id='sort'>Sort</button><button id='search' disabled>Search</button><button id='reset'>Reset</button><span></center>");
    $("#search").click(function(){
        var l=0;
        var r= length-1;
        var found = 0;
        run = function go(){
            mid = parseInt((l+r)/2);

            if(array[mid]==key){
                var loc = "#box"+mid;
                $(loc).removeClass("box");
                $(loc).addClass("fbox");
                found = 1;
            }
            else if(array[mid]<key){
                var loc = "#box"+mid;
                $(loc).removeClass("box");
                $(loc).addClass("nbox");
                for(var i=l;i<=(mid);i++){
                    var loc = "#box"+i;
                    $(loc).removeClass("box");
                    $(loc).addClass("sboxbin");
                }
                l=mid+1;
            }
            else{
                var loc = "#box"+mid;
                $(loc).removeClass("box");
                $(loc).addClass("nbox");
                for(var i=mid+1;i<=r;i++){
                    var loc = "#box"+i;
                    $(loc).removeClass("box");
                    $(loc).addClass("sboxbin");
                }
                r = mid;
            }   
            if(l<r && found === 0)
                setTimeout(run,900);                       
        }
        if(found === 0)
            run();
    });
    $("#reset").click(function(){
        location.reload();
    });
    $("#sort").click(function(){
        for(var i=0;i<length;i++)
        {
            for(var j=i;j<length;j++)
            {
                if(array[j]<array[i])
                {
                    var temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                }
            }
        }
        for(var i=0;i<length;i++)
        {
            var b1 = "#box"+i;
            $(b1).html(array[i]);
        }
        $("#search").prop("disabled",false);
        $("#sort").prop("disabled",true);
    });
});
