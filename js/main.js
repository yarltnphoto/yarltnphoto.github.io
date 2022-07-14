$(document).ready(function(){
    $('.list-item').click(function(){
        const value = $(this).attr('data-filter');
        if(value == 'all'){
            $('.gallary-item').show('1000');
        }
        else{
            $('.gallary-item').not('.'+ value).hide('1000');
            $('.gallary-item').filter('.'+ value).show('1000');
        }
    })
    $('.list-item').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    })

    //burger
    $(".burger-btn").click(function(event){
        $(".burger-btn,.menu,.top__btn,.menu__item").toggleClass("active");
        $("body").toggleClass("lock");
    });
    $(".menu__item").click(function(event){
        $(".burger-btn,.menu,.top__btn").removeClass("active");
        $("body").removeClass("lock");
    });
})

new WOW().init();
