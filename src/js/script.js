
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

    ('._c-head').click(function(){
        $('body,html').animate({
        scrollTop: 0},500);
        return false;

})
});

