$.get("https://ubitracker.herokuapp.com/twitsearch", function(data) {
    console.log(data);
    var stats = data.statuses;
    for(var i = 0; i < stats.length; i++) {
        var name = stats[i].user.name;
        var text = stats[i].text;
        $("#frame").append("<div id = 'pane" + i + "' class='panel panel-default'></div>");
        
        $("#pane" + i).append("<div id='title" + i + "' class='panel-heading'></div>");
            $("#title" + i).append(name + " says...");
        
         $("#pane" + i).append("<div id='body" + i + "' class='panel-body'></div>");
                $("#body" + i).append(text);
    }
});