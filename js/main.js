// Bonus:
// Clicchiamo sui pallini e mostriamo l’immagine corrispondente.
// Generiamo i pallini con JS.

$(document).ready(
    function () {

        var previous = $(".prev");
        var next = $(".next");
        var circle = $(".fas.fa-circle");
        var image = $(".images > img");

        previous.click(
            function() {
                previousImage();
            }
        );

        next.click(
            function() {
                nextImage();
            }
        );

        circle.click(
            function () {
                var indexCircleSelected = $(this).index();
                var activeImage = $(".images > .active");

                circle.removeClass("active");
                $(this).addClass("active");

                activeImage.removeClass("active");
                $(image[indexCircleSelected]).addClass("active");
            }
        );

        $(document).keydown(
            function() {
                if (event.which == 37) {
                    previousImage();
                } else if (event.which == 39) {
                    nextImage();
                }
            }
        );

    }
);

//----------------------------------------------------------------------------------------

function nextImage() {
    var activeImage = $(".images > .active");
    var activeCircle = $(".nav > .active");

    activeImage.removeClass("active");
    activeCircle.removeClass("active");

    if (activeImage.hasClass("last")) {
        $(".images > .first").addClass("active");
        $(".nav > .first").addClass("active");
    } else {
        activeImage.next().addClass("active");
        activeCircle.next().addClass("active");
    }
}

function previousImage() {
    var activeImage = $(".images > .active");
    var activeCircle = $(".nav > .active");

    activeImage.removeClass("active");
    activeCircle.removeClass("active");

    if (activeImage.hasClass("first")) {
        $(".images > .last").addClass("active");
        $(".nav > .last").addClass("active");
    } else {
        activeImage.prev().addClass("active");
        activeCircle.prev().addClass("active");
    }
}
