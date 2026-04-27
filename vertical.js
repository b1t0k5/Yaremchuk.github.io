$(document).ready(function () {

    $('#menu li.has-sub > a').click(function (e) {
        e.preventDefault();

        let parent = $(this).parent();

        if (parent.hasClass('open')) {
            parent.removeClass('open');
            parent.find('li').removeClass('open');
        } else {
            parent.addClass('open');
            parent.siblings().removeClass('open');
            parent.siblings().find('li').removeClass('open');
        }
    });

});