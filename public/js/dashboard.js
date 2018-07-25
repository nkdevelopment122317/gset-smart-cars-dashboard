$(document).ready(function() {
    // fixButtonHeight();
    addEvents();
    adjustButtonPadding();
});

// function fixButtonHeight() {
//     var buttons = document.getElementsByClassName("more-info");
//     var thumbnails = document.getElementsByClassName("thumbnail");
//     var captions = document.getElementsByClassName("caption");

//     for (var i = 0; i < buttons.length; i++) {
//         buttons[i].style.height = thumbnails[i].offsetHeight - captions[i].offsetHeight + "px";
//     }
// }

function addEvents() {
    //for tabs
    $("#profileTab").on("click", function() {
        $(".profile-container").removeClass("no-display");
        $(".content-container").addClass("no-display");
        $("#contentTab").removeClass("clicked");
        $("#profileTab").addClass("clicked");
    });

    $("#contentTab").on("click", function() {
        $(".profile-container").addClass("no-display");
        $(".content-container").removeClass("no-display");
        $("#contentTab").addClass("clicked");
        $("#profileTab").removeClass("clicked");
    });

    $(".favorite").on("click", function() {
        $(this).toggleClass("far");
        $(this).toggleClass("fas");
        $(this).toggleClass("favorited");

        updateStatus($(this).hasClass("favorited"), $(this).attr("data-pres-id"));
    });

    $(".nav-tabs li").on("click", function() {
        $(".nav-tabs li").each(function() {
            if ($(this).hasClass("active")) {
                $(this).removeClass("active");
            }
        });
        $(this).addClass("active");

        var attr = $(this).attr("data-tab");

        if ($(this).attr("data-tab") === attr) {
            $(".tab-content").each(function() {
                if ($(this).attr("data-tab") === attr) {
                    $(this).removeClass("no-display");
                } else {
                    $(this).addClass("no-display");
                }
            });
        }
    });

    // $.ajax({
    //     url: "/api/announcements/get",
    //     type: "GET",
    //     success: function(announcements) {
    //         console.log(announcements);
    //         $(".announcement-container").data("announcements", announcements.length + "");
    //     }
    // });
}

function adjustButtonPadding() {
    var button = $(".see-more");
    var thumbnail = $(".thumbnail");

    button.css("padding-top", (thumbnail.height() - button.height()) / 2);
    button.css("padding-bottom", (thumbnail.height() - button.height()) / 2);
    button.css("padding-right", (thumbnail.width() - button.width()) / 2);
    button.css("padding-left", (thumbnail.width() - button.width()) / 2);
}