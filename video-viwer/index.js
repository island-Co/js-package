const Videoviwer = {
    createViwer: function(parent_element, videoURL, imgURL, options) {
        var element = parent_element.insertBefore("img", parent_element.firstChild);
        element.src = imgURL;
        var video = document.body.insertBefore("video", document.body.firstChild);
        video.hidden = true;
        element.id = "ve" + videoId;
        video.id = "vv" + videoId;
        video.onclick = "this.play();";
        video.controls = true;
        element.onclick = "Videoviwer.start(this)";
        video.class = "videodialog";
        videoId++;
    },
    videoId: 0,
    start: function(element) {
        var id = Number(element.id.slice(2));
        var video = document.getElementById("vv" + id);
        video.hidden = false;
    }
};