$(function(){

$(document).load(function(){
    $('.foldmenus').hide();
})
$('.foldmenu1').on('mouseleave',function(){
    $(this).hide();
})
$('.foldmenu2').on('mouseleave',function(){
    $(this).hide();
})
$('.foldmenu3').on('mouseleave',function(){
    $(this).hide();
})
$('.foldmenu4').on('mouseleave',function(){
    $(this).hide();
})
$('.foldmenu5').on('mouseleave',function(){
    $(this).hide();
})
$('.foldmenu6').on('mouseleave',function(){
    $(this).hide();
})


$('.book').on('click',function(){
    $('.foldmenu1').toggle(),
    $('.foldmenu2').hide(),
    $('.foldmenu3').hide(),
    $('.foldmenu4').hide(),
    $('.foldmenu5').hide(),
    $('.foldmenu6').hide();
    
})

$('.manage').on('click',function(){
    $('.foldmenu2').toggle();
    $('.foldmenu1').hide(),
    $('.foldmenu3').hide(),
    $('.foldmenu4').hide(),
    $('.foldmenu5').hide(),
    $('.foldmenu6').hide();
    
})
$('.experience').on('click',function(){
    $('.foldmenu3').toggle(),
    $('.foldmenu1').hide(),
    $('.foldmenu2').hide(),
    $('.foldmenu4').hide(),
    $('.foldmenu5').hide(),
    $('.foldmenu6').hide();
})
$('.destinations').on('click',function(){
    $('.foldmenu4').toggle(),
    $('.foldmenu1').hide(),
    $('.foldmenu2').hide(),
    $('.foldmenu3').hide(),
    $('.foldmenu5').hide(),
    $('.foldmenu6').hide();
})
$('.loyalty').on('click',function(){
    $('.foldmenu5').toggle(),
    $('.foldmenu1').hide(),
    $('.foldmenu2').hide(),
    $('.foldmenu3').hide(),
    $('.foldmenu4').hide(),
    $('.foldmenu6').hide();
})
$('.help').on('click',function(){
    $('.foldmenu6').toggle(),
    $('.foldmenu1').hide(),
    $('.foldmenu2').hide(),
    $('.foldmenu3').hide(),
    $('.foldmenu4').hide(),
    $('.foldmenu5').hide();
})

$('.mobilemenuicon').on('click',function(){
    $('.mobilemenus').slideToggle();
})

$('.closebtn').on('click',function(){
    $('.mobilemenus').hide()
})




});




