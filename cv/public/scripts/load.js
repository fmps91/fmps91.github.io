$(document).ready(async function() {
    rutes=['leftcontent','rigthcontent']
    $(function () {
        $("#leftHtml").load("skeleton/"+rutes[0]+".html");
        $("#rigthHtml").load("skeleton/"+rutes[1]+".html");
        
    });
    
    /* $.getJSON("datos.json", function (data) {
      
        console.log("datos.json: ",data)
    }); */
     /*  var items = [];
        $.each(data, function (key, val) {
            items.push("<li id='" + key + "'>" + val + "</li>");
        });

        $("<ul/>", {
            "class": "my-new-list",
            html: items.join("")
        }).appendTo("body"); */
})
   
    
