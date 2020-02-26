$(document).ready(init);

var galleryName = "Scotland-2014";
var projectedHeight = 200;
//var api = "https://www.pslib.cz/michal.stehlik/ajax/backend/hlasovani.php";
var api = "";

function init() {
    // $.getJSON("getPictures.php",{"room": "Skotsko"},function(data)
    //     {
    //     $.each(data,function(index,item){
    //         $(".thumbnails").append("<figure style=\"flex-basis: "+((item.width / item.height) * 100)+"px\"><a href=\""
    //         + item.path + "/big/" + item.file +"\"><img src=\"" 
    //         + item.url + "\" alt=\"" + item.description + "\"><div><div>"
    //         +item.description+"</div><div><span class=\"stars\">0</span><span class=\"people\">0</span></div></div></a></figure>");
    //     });
    // }).done(function(){
    //     $(".thumbnails a").click(showViewer);
    //     $("#viewer").click(hideViewer);
    //     $(".thumbnails figure").mouseenter(loadNumbers);
    //     $("#viewer .voting-icon").click(doVote);
    // });   
    // document.querySelectorAll('.thumbnails figure').forEach(element => {
    //     element.style.height = projectedHeight+'px';
    //     var imgElmnt = element.querySelector('img');
    //     element.style.flexBasis = (imgElmnt.naturalWidth / imgElmnt.naturalHeight * projectedHeight)+'px';
    // }); 
    // document.querySelectorAll('.thumbnails figure img').forEach(element => {
    //     element.style.flexBasis = 
    //     element.style.minHeight = projectedHeight+'px';
    // });
    $(".thumbnails a").click(showViewer);
    $("#viewer").click(hideViewer);
    $(".thumbnails figure").mouseenter(loadNumbers);
    $("#viewer .voting-icon").click(doVote);
    //
}

function showViewer() {
    $("#viewer").css("display", "flex");
    galleryName = $(this).parent().parent().data("gallery-name");
    loadPicture($(this).prop("href"));
    return false;
}

function hideViewer() {
    $("#viewer").css("display", "none");
    return false;
}

function loadPicture(name) {
    $("#viewer img").prop("src", name);
    loadViewerNumbers(name);
    var picturesInGallery = $('.thumbnails[data-gallery-name="' + galleryName + '"] > figure > a');
    var position = -1;
    $.each(picturesInGallery, function (index, item) {
        if ($(item).prop("href") == name) {
            position = index;
            $("#viewer-info").text($(item).find("img").prop("alt"));
        }
    });
    if (position != -1) {
        $("#go-prev").off("click");
        $("#go-next").off("click");
        if (position == 0) {
            $("#go-prev").css("display", "none");
        }
        else {
            $("#go-prev").css("display", "block");
            $("#go-prev").click(function () { loadPicture($(picturesInGallery[position - 1]).prop("href")); return false; });
        }
        if (position == picturesInGallery.length - 1) {
            $("#go-next").css("display", "none");
        }
        else {
            $("#go-next").css("display", "block");
            $("#go-next").click(function () { loadPicture($(picturesInGallery[position + 1]).prop("href")); return false; });
        }
    }
}

function loadNumbers() {
    var pic = $(this).find("a").prop("href");
    var figure = $(this);
    // $.getJSON(api, { "subject": pic }, function (result) {
    //     var stars = "NA";
    //     var people = "NA";
    //     if (result.valid) {
    //         stars = result.data.average;
    //         people = result.data.votes;
    //     }
    //     figure.find(".stars").html(Math.round(stars));
    //     figure.find(".people").html(people);
    // });
}

function loadViewerNumbers(imageSource) {
    // $.getJSON(api, { "subject": imageSource }, function (result) {
    //     var stars = "NA";
    //     var people = "NA";
    //     var rounded = 0;
    //     if (result.valid) {
    //         stars = result.data.average;
    //         people = result.data.votes;
    //         rounded = Math.round(stars);
    //     }
    //     $("#viewer-voting .stars").text(stars);
    //     $("#viewer-voting .people").text(people);
    //     $.each($("#viewer-voting .voting-icon"), function (index, item) {
    //         if ($(item).data("value") > rounded) {
    //             $(item).addClass("star-empty");
    //             $(item).removeClass("star-full");
    //         }
    //         else {
    //             $(item).addClass("star-full");
    //             $(item).removeClass("star-empty");
    //         }
    //     });
    // });
}

function doVote() {
    var value = $(this).data("value");
    var image = $("#viewer-main img").prop("src");
    // $.getJSON(api, { "subject": image, "mark": value }, function (result) {
    //     if (result.valid && result.vote) {
    //         loadViewerNumbers(image);
    //     }
    //     else {
    //         console.log(image, value);
    //     }
    // });
    return false;
}