$(function(){
    
    var swiper = new Swiper('.guide-slide', {
      
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        
    });
    swiper.on('reachEnd', function () {
        swiper.disable();
    });
    
/*
    function guideSlide(){

        if ( $('.swiper-pagination-bullet').last().hasClass('swiper-pagination-bullet-active') == true){ 
          $('.swiper-pagination').css('opacity','0');
          swiper.pagination.destroy();

            
        } else{
          swiper = new Swiper('.guide-slide', {
          
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
            
          });
          
        }
    }
    guideSlide();
    */
});