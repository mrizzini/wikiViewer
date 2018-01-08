/*global $ */

$(document).ready(function() {
    
    $("#wikiSearch").click(function() {       
    console.log("wikiSearch clicked");   
    document.getElementById('articleSection').innerHTML = "";
    var searchValue = $( "#searchValue").val();
    console.log(searchValue);
  //  var URL = "https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&list=random&rnlimit=5";
    
    $.ajax({
        type: 'GET',
        // url: 'https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&list=random&rnlimit=1',
        url: 'https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&format=json&search=' + searchValue,

          success: function(data) {
            console.log(data);
          	for (var i = 0; i < data[1].length; i++) {
            var articles = document.createElement("LI");
            var description = document.createElement("P");
            var anchor = document.createElement("A");
            var descriptionText = data[2][i];
            anchor.setAttribute('href', data[3][i]);
            anchor.setAttribute('target', '_blank');
            anchor.innerHTML = data[1][i];
            // articles.innerHTML = data[1][i];
            articles.setAttribute('id', "articles" + i);
            description.innerHTML = "-" + descriptionText;
         //   $("#listOfArticles").html(data[1][i]);
            document.getElementById("articleSection").appendChild(articles);
            document.getElementById("articles" + i).appendChild(anchor);
		    document.getElementById("articleSection").appendChild(description);

           }
          }
    }); // this line ends ajax call for customize search
    }); // this line ends custom search button click 
    
     $("#randomSearch").click(function() {  
         console.log('random button clicked');
         
    $.ajax({
        type: 'GET',
        url: 'https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&list=random&rnlimit=1',

        success: function(data) {
           console.log(data); 
        }
    }); // this line ends ajax call for random search
     }); // this line ends random search button click
    

}); // this line ends document reaady function