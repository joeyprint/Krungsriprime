$(document).ready(function () {
    var video_src = '/video/Firstmillion_banner';
if ($(window).width() <= 576) {
     var video_src = '/video/Firstmillion_banner_Mobile';
}

$('#banner').vide({
        'mp4': video_src,
        //  'webm': '/video/ocean',
        //  'ogv': '/video/ocean',
        //  'poster': '/video/ocean',
    },{
        className : 'bg-video',
        loop: false
    });   

});