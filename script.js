var rootref = firebase.database().ref().child("Images");

rootref.on("child_added", snap => {
    var image = snap.child("img").val();

    $("#view-div").append("<img id='imgstickers' src=" + image + " height='250px' width='250px'></img>");
});