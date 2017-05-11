var database = firebase.database().ref();
var index = 0;
database.on('value', function(snapshot) {
    snapshot.forEach(function(child){
        var experiment = child.val();
        console.log(experiment);
        $("#box").append("<div id = 'pane" + index + "' class='panel panel-default'></div>");
        
            $("#pane" + index).append("<div id='title" + index + "' class='panel-heading'></div>");
                $("#title" + index).append(experiment.name);
        
            $("#pane" + index).append("<div id='body" + index + "' class='panel-body'></div>");
                $("#body" + index).append("<div><b>Time:</b> " + experiment.time.start + " to " + experiment.time.end + "</div>");
                $("#body" + index).append("<div><b>Location:</b> " + experiment.location.words + "</div><br>");
                
                $("#body" + index).append("<div><b>History:</b> " + experiment.description.history + "</div><br>");
                $("#body" + index).append("<div><b>Effects:</b> " + experiment.description.effects + "</div><br>");
                $("#body" + index).append("<div><b>Money Spent:</b> " + experiment.description.money + "</div><br>");
                
                $("#body" + index).append("<div><b>More Links:</b></div>");
                $("#body" + index).append("<ul id='links" + index + "'><ul>");
                    var links = experiment.links.split(",");
                    for(var e = 0; e < links.length; e++) {
                        $("#links" + index).append("<li><a href=" + links[e] + ">" + links[e] + "</a></li>");
                    }
                
                var images = experiment.images.split(",");
                console.log(images);
                for(var f = 0; f < images.length; f++) {
                    $("#body" + index).append("<img src=" + images[f] + "></img>");
                }
                
        index = index + 1;
    });
});