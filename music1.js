$(document).ready(function () {
  $.ajax({
    url: "songs2.json"
  }).done(function(songList) {

    console.log(songList.songs);
    stuff(songList);
  }); 

  $.ajax({
    url: "songs1.json"
  }).done(function(songList2) {

    console.log("songList2");
    stuff(songList2);
    
  })
  function stuff(newStuff) {
    for (var i = 0; i < newStuff.songs.length; i++) {
      var songs = newStuff.songs[i].artist;
      var title = newStuff.songs[i].title;
      var album = newStuff.songs[i].album;

      $("#abcd").append("<div>" + '<li>' + songs + " " + title + " " + album + '<button>Delete</button>' + '</li>' + "</div>");
      $("button").click(function () {
        $(this).closest("li").remove();
      });
    };
  };
});