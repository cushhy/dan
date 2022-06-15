$(document).ready(function () {

    $("#sidebarButton").on({
        mouseenter: function () {
            $('#info').addClass('active');
        },
        mouseleave: function () {
            $('#info').removeClass('active');
        }
    });

    $("#sidebarButton2").on({
        mouseenter: function () {
            $('#info2').addClass('active');
        },
        mouseleave: function () {
            $('#info2').removeClass('active');
        }
    });

    $("#sidebarButton3").on({
        mouseenter: function () {
            $('#info3').addClass('active');
        },
        mouseleave: function () {
            $('#info3').removeClass('active');
        }
    });

    $("#sidebarButtonmob").on('click', function () {
        $('#infomob').toggleClass('active');
    })

    $("#sidebarButton2mob").on('click', function () {
        $('#info2mob').toggleClass('active');
    })

    $("#sidebarButton3mob").on('click', function () {
        $('#info3mob').toggleClass('active');
    })

});