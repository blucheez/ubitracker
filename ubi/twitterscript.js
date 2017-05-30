$.get("https://news.google.com/news/section?q=ubi&output=rss", function(data) {
    console.log(data);
    
});

$.get("https://ubitracker.herokuapp.com/twitsearch", function(data) {
    console.log(data);
    var stats = data.statuses;
    for(var i = 0; i < stats.length; i++) {
        var name = stats[i].user.name;
        var text = stats[i].text;
        $("#frame").append("<div style='margin: 0 auto; margin-top: 2em;  width: 70%;' id = 'pane" + i + "' class='mdl-card mdl-shadow--4dp'></div>");
        
        $("#pane" + i).append("<div style='background-color: '#1DA1F2'; color: white;' class='mdl-card__title'><h3 id='title" + i + "' class='mdl-card__title-text'></h3></div>");
            $("#title" + i).append(name + " says...");
        
         $("#pane" + i).append("<div id='body" + i + "' class='mdl-card__supporting-text'></div>");
                $("#body" + i).append(text);
    }
});
