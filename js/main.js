// Bonus:
// Clicchiamo sui pallini e mostriamo l’immagine corrispondente.
// Generiamo i pallini con JS.

$(document).ready(
    function () {

        var previous = $(".prev");
        var next = $(".next");

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
