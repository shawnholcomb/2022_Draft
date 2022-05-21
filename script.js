$(document).ready(function () {
    
    $(".ht1").on("click", function() {
        var newPic = $(this).attr("src");
        $(".ht1-lg").attr("src", newPic);
    })

    $(".ht2").on("click", function() {
        var newPic = $(this).attr("src");
        $(".ht2-lg").attr("src", newPic);
    })

    $(".ht3").on("click", function() {
        var newPic = $(this).attr("src");
        $(".ht3-lg").attr("src", newPic);
    })

    $(".ht4").on("click", function() {
        var newPic = $(this).attr("src");
        $(".ht4-lg").attr("src", newPic);
    })

    // Why?
    var whyArr = ["No one else can go so high, high, high, high", "He shows up at the job site, Find a spot that’s just right ", "Outriggers are out", "Reach into the sky", "Strong like you can’t believe, Tons of load capacity", "His cable’s in position, Lifting with precision"];
    var randomWhy = whyArr[Math.floor(Math.random() * whyArr.length)];
    $(".why").text(randomWhy);

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
      })

    // var iframe = document.getElementById("google-form");
    // iframe.onload = function(){
    //     iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
    // }
})

// Scroll to top
const backToTopButton = document.querySelector(".top-button");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
    if (window.pageYOffset > 350) {
        if (!backToTopButton.classList.contains("btnEntrance")) {
            backToTopButton.classList.remove("btnExit");
            backToTopButton.classList.add("btnEntrance")
            backToTopButton.style.display = "block";
        }
    } else {
        if (backToTopButton.classList.contains("btnEntrance")) {
            backToTopButton.classList.remove("btnEntrance");
            backToTopButton.classList.add("btnExit")
            backToTopButton.style.display = "none";
        }    }
}

backToTopButton.addEventListener("click", backToTop)

function backToTop() {
    window.scrollTo(0, 0);
}