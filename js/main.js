/// <reference types="../@types/jquery" />
  



  
$(function(){
    $(window).on('scroll' , function(){
        const scrollTop = $(window).scrollTop()
       // console.log(scrollTop);
    
         const aboutOffset = $('#about').offset().top
        // console.log(aboutOffset);
         
        if (scrollTop>aboutOffset - 70) {
            $('#mainNav').css({'background-color' : 'rgb(0,0,0,.8)' , 'padding-inline' : '60px' })
              
        }else{
            $('#mainNav').css({'background-color' : 'transparent' , 'padding-inline' : '0px'})
        }
        
    })
    
    $('.navbar .nav-link[href^="#"]').on('click' , function({target}){
        const  currentHref = $(target).attr('href')
        const secOffset = $(currentHref).offset().top;
        console.log(secOffset);
        
        $('html , body').animate({scrollTop:secOffset} , 2000 )
    })
    
        const spans = $('.setting span')
    
        spans.eq(0).css('background-color' , 'tomato')
        spans.eq(1).css('background-color' , '#09c')
        spans.eq(2).css('background-color' , 'teal')
        spans.eq(3).css('background-color' , 'yellow')
        spans.eq(4).css('background-color' , 'orange')
    
    
        $('.setting i').on('click' , function () {  
           $('.setting .box-color').animate({width : 'toggle'  } , 1000)
        })
    
        spans.on('click' , function({target}){
           const currentColor = $(target).css('background-color')
           $('.change').css('color' , currentColor)
            
        })
         
         $('.navbar ul li a').on('click' , function({target}){
           $('.navbar ul li a').not(target).removeClass('active')
           $(target).addClass('active')
         })
    
    
       $(function(){
        $('.loader').fadeOut(2000 , function () {  
            $('.loading').slideUp(2000 , function(){
                   $('body').css('overflow' , 'auto')
            })
        })
       })
    // $(".skitter-large").skitter();
    AOS.init();
})
