

function checkclickininput(){

    var $win=$(window);
    var $input=$('.js-input_serach');
    var $result=$('.js-search_result')
    var $cover=$('.js-cover')
    

    $win.on('click',function(event){

        if
        (
            $input.is(event.target)
            || $result.has(event.target).length==1
            
        )
           

            {
                $result.addClass('is-active');
                $cover.addClass('is-active');
            }

            else
            {
                $result.removeClass('is-active');
                $cover.removeClass('is-active');
                
            }


    });
};

checkclickininput();



function checkclickindropdown(){

    var $win=$(window);    
    var $login=$('.js-header_btn-user');
    var $dropdown=$('.js-header_user-dropdown')


    $win.on('click',function(event){

        if
        (
            $login.is(event.target)
            
        )
           

            {
                $dropdown.toggleClass('is-active');
               
            }

           


    });
};


checkclickindropdown();




function mainhover(){

    var $li=$(".js-topmenu_list-li");    
    var $li_hover=$('.js-topmenu_list-hover');
    
        $li.hover(function(){
            
            $parent=$(this).parent().parent().parent();
        
            $li_hover.css('width',$(this).width());
            $li_hover.css('right',$parent.width()-($(this).offset().left + $(this).width()) + $parent.offset().left);
            $li_hover.css('transform','scaleX(1)');
            $('.js-cover').addClass('is-active');
            $('.js-header_user-dropdown').removeClass('is-active');
            $('.js-search_result').removeClass('is-active');
            $(this).addClass('show-menu');
            

        },function(){
            
            $li_hover.css('transform','scaleX(0)');
            $('.js-cover').removeClass('is-active');
            $(this).removeClass('show-menu');
        });

};


mainhover();


function main_slideshow()
{

    var slide=document.getElementsByClassName('js-slide');
    var dots=document.getElementsByClassName('js-slider_dots-span');
    var next=document.querySelector('.js-slider_next');
    var prev=document.querySelector('.js-slider_prev');

    function removeClass(){
        for(i=0;i<slide.length;i++)
        {
            slide[i].classList.remove('fadein');
            dots[i].classList.remove('is-active');
        }
    }



    var n=0;

//next

    next.addEventListener('click',function()
    {
        
        n++;
        removeClass();
            if(n>slide.length-1){
                n=0;
            }
        slide[n].classList.add('fadein');
        dots[n].classList.add('is-active');
        clearInterval(interval);
 
    });

//previous    

    prev.addEventListener('click',function()
    {
        
        n--;
        removeClass();
            if(n<0){
                n=slide.length-1;
            }
        slide[n].classList.add('fadein');
        dots[n].classList.add('is-active');
        clearInterval(interval);
    });

// navigator

    $('.js-slider_dots-span').click(function()
    {
        
        var index=$(this).index();
        removeClass();
    
        slide[index].classList.add('fadein');
        dots[index].classList.add('is-active');
        n=index;
        clearInterval(interval);
    });


    var interval=setInterval(function()
    {

        n++;
        removeClass();
            if(n>slide.length-1){
                n=0;
            }
        slide[n].classList.add('fadein');
        dots[n].classList.add('is-active');
 

    },5000);

   

}


main_slideshow();



function discount_slideshow()
{

    var slide=document.getElementsByClassName('js-discount_container');
    var aside=document.getElementsByClassName('js-discount_aside-a');
    var next=document.querySelector('.js-discount_btn-next');
    var prev=document.querySelector('.js-discount_btn-prev');
 
    function removeClass(){
        for(i=0;i<slide.length;i++)
        {
            slide[i].classList.remove('is-active');
            aside[i].classList.remove('is-active');
        }
    }



    var n=0;


//next

                next.addEventListener('click',function()
                {
                    
                    n++;
                    removeClass();
                        if(n>slide.length-1){
                            n=0;
                        }
                    slide[n].classList.add('is-active');
                    aside[n].classList.add('is-active');
                    clearInterval(interval);
                    discount_list_slider(n);

                });

//previous    

prev.addEventListener('click',function()
{
    
    n--;
    removeClass();
        if(n<0){
            n=slide.length-1;
        }
    slide[n].classList.add('is-active');
    aside[n].classList.add('is-active');
    clearInterval(interval);
    discount_list_slider(n);
});

//interval
                                        interval=setInterval(next_slide,4000);
                                            
                                            function next_slide(){
                                                n++;
                                                removeClass();
                                                    if(n>slide.length-1){
                                                        n=0;
                                                    }
                                                slide[n].classList.add('is-active');
                                                aside[n].classList.add('is-active');
                                                discount_list_slider(n);
                                        
                                        
                                        }
    

            
        $('.js-discount_aside-li').click(function(){
            var index=$(this).index()
            removeClass();
    
            slide[index].classList.add('is-active');
            aside[index].classList.add('is-active');
            n=index;
            clearInterval(interval);
            discount_list_slider(n);
           
        });

                    $('.c-discount_box').mouseleave(function(){
                        clearInterval(interval);   
                        interval=setInterval(next_slide,4000);
                    });


   

}




discount_slideshow();


function discount_timer()
{
    var delta;
    var day;
    var hour;
    var minutes;
    var seconds;
    $('.js-counter').each(function(index)
    {   
        var x=$(this);

        var container=document.getElementsByClassName('js-discount_container').item(index);
        var price=container.querySelector('.js-discount_price');
        var price_finish=container.querySelector('.js-discount_price-finish');
        var counter=container.querySelector('.js-discount_counter');
        var counter_finish=container.querySelector('.js-discount_counter-finish');

        var now_date=new Date(x.data('nowdate'));
        var discount_date=new Date(x.data('discountdate'));

        setInterval(function()
        {
           
            if(discount_date>now_date)
            {
                now_date.setSeconds(now_date.getSeconds() + 1);

                delta=(discount_date-now_date)/1000;

                day=Math.floor(delta/86400);
                delta-=day * 86400;

                hour=Math.floor(delta/3600)
                delta-=hour * 3600;

                minutes=Math.floor(delta/60)
                delta-=minutes * 60;

                seconds=Math.floor(delta);

                x.html('<span>'+hour+'</span>:<span>'+minutes+'</span>:<span>'+seconds+'</span>')
                x.persiaNumber();
                
            }

            else
            {
                
                price.classList.add('not-active');
                counter.classList.add('not-active');
                price_finish.classList.add('is-active');
                counter_finish.classList.add('is-active');
                
                
            }

        },1000);
   
    });
}


discount_timer();


function discount_list_slider(n){

    var container=$('.js-discount_aside-container');
    var ul=$('.js-discount_aside-ul');
    var li=document.getElementsByClassName('js-discount_aside-li');
    var array=[];
    var sum_width=0;
    var max_right=container.width()-ul.width();

    $('.js-discount_aside-li').each(function(){

        array.push($(this).width() + 20);
    });
   
    for(i=0;i<=n;i++){
        sum_width+=array[i];
    }
    
    
    var right=container.width()-sum_width;

    var half_width=(container.width() / 2)-((li[n].offsetWidth + 20) / 2);

    if ((right-(container.width() / 2))>0)
    {
        ul.css('right',0);
    }
    else
    {
        if(right-half_width<max_right)
        {
            ul.css('right',max_right);
        }
        else{
            ul.css('right',right-half_width);
        }
        
       
    }
   
   

}



function swiper(){

    var window_width=$(window).width();

    $('.js-swiper_content').each(function(){

        var content=$(this);
        var lg=content.data('count-lg');
        var xl=content.data('count-xl');
        var xxl=content.data('count-xxl');

        var swiper_box=content.find('.js-swiper_box');

        var next=content.find('.js-swiper_btn-next');
        var prev=content.find('.js-swiper_btn-prev');


        var slide=content.find('.js-swiper_slide');

        var slider_width=0;
        var active_item=0;
        var transform=0;
        var max_transform=0;
        var is_max=0;

        var lg_size=1368;
        var xl_size=1680;


        change_width();

        
                                                $(window).on('resize',function(){

                                                    window_width=$(window).width();
                                                    
                                                    change_width();
                                                    change_transform();
                                                

                                                })


        function change_transform(){

            transform=0;

            for(i=0;i<active_item;i++)
                {                    
                    transform+=slider_width;                       
                }
            
            if(window_width<lg_size)
            {
                
            
                
                max_transform = slider_width * (slide.length - lg);

                if(slide.length > lg && transform > 0 )
                {

                    if(transform<max_transform && is_max==0)
                    {
                        swiper_box.css('transform','translateX('+transform+'px)');
                        
                    }
                    else
                    {
                        swiper_box.css('transform','translateX('+max_transform+'px)');
                        active_item=slide.length-Math.ceil(lg);
                        is_max=1;
                        
                    }
                 
                    
                }
                else
                {
                    swiper_box.css('transform','translateX('+0+'px)');
                    active_item=0;
                    
                }

            }


            
            else if(window_width<xl_size)
            {
  
                       

                    max_transform=slider_width * (slide.length - xl);

                    if(slide.length > xl && transform > 0 )
                {

                    if(transform<max_transform && is_max==0)
                    {
                        swiper_box.css('transform','translateX('+transform+'px)');
                        
                    }
                    else
                    {
                        swiper_box.css('transform','translateX('+max_transform+'px)');
                        active_item=slide.length-Math.ceil(xl);
                        is_max=1;
                        
                    }
                  
                    
                }
                else
                {
                    swiper_box.css('transform','translateX('+0+'px)');
                    active_item=0;
                    
                }
            }

            else
            {


                    max_transform=slider_width * (slide.length - xxl);

                if(slide.length > xxl && transform > 0 )
                {

                    if(transform<max_transform && is_max==0)
                    {
                        swiper_box.css('transform','translateX('+transform+'px)');
                        
                    }
                    else
                    {
                        swiper_box.css('transform','translateX('+max_transform+'px)');
                        active_item=slide.length-Math.ceil(xxl);
                        is_max=1;
                        
                    }
                 
                    
                }
                else
                {
                    swiper_box.css('transform','translateX('+0+'px)');
                    active_item=0;
                    
                }
                   
                
            }

           

        }

        next.on('click',function(){

            transform=0;
           

            if(window_width<lg_size){

                active_item+=(Math.floor(lg - 1));
                change_transform();
                check_disable(lg);
            }
            
            
            else if(window_width<xl_size){

                active_item+=(Math.floor(xl - 1));
                change_transform();
                check_disable(xl);
                    
            }
            else
            {
                active_item+=(Math.floor(xxl - 1));
                change_transform();
                check_disable(xxl);
                
                
            }   
            
           
        })

        prev.on('click',function(){

            transform=0;
           

            if(window_width<lg_size){

                active_item-=(Math.floor(lg - 1));
                is_max=0;
                change_transform();
                check_disable(lg);
            }

            
            else if(window_width<xl_size){

                active_item-=(Math.floor(xl - 1));
                is_max=0;
                change_transform();
                check_disable(xl);
                
                    
            }
            else
            {
                active_item-=(Math.floor(xxl - 1));
                is_max=0;
                change_transform();
                check_disable(xxl);
                
                
            }   
            
            

        })

                               
            function check_disable(size){

                if(slide.length<size)
                {
                    next.addClass('disable');
                    prev.addClass('disable');
                }

                else if(transform<=0)
                {
                    next.removeClass('disable');
                    prev.addClass('disable');
                } 
                
                else if(is_max==1)
                {
                    next.addClass('disable');
                    prev.removeClass('disable');
                }

                else
                {
                    next.removeClass('disable');
                    prev.removeClass('disable');
                }
            }



            function change_width(){

                if(window_width<lg_size){

                    slider_width=content.width() / lg;
                    slide.css('width',slider_width);
                    check_disable(lg);
                    

                }
                else if(window_width<xl_size){

                    slider_width=content.width() / xl;
                    slide.css('width',slider_width);
                    check_disable(xl);

                }
                else
                {

                    slider_width=content.width() / xxl;
                    slide.css('width',slider_width);
                    check_disable(xxl);

                }

                
            }

        
    })

    
   

}

swiper();

function single_swiper(){


    var box=$('.js-single_swiper-box');
    var item=box.find('.js-single_swiper-slide');
    var headline=$('.c-single_swiper-headline');

    var transform=0;
    var active_item=1;
    var second=0;



    box_width=box.width();
    item.css('width',Math.ceil(box_width));


    $(window).on('resize',function(){

        box_width=box.width();
        item.css('width',Math.ceil(box_width));
        clearInterval(interval2);
        calc_transform();
        
        

    })


        var interval2 = setInterval(swiper_slideshow,100);

        function swiper_slideshow()
        {
            second+=10;
            if(second>=500)
            {
                headline.removeClass('is-active');
                if(active_item>=item.length)
                {
                    active_item=1;
                }
                else
                {
                    active_item++;
                }
                second=0;
                setTimeout(calc_transform,50);
                clearInterval(interval2);

                
            }
           
    
        }

        function calc_transform()
        {

            transform=0;

            for(i=1;i<active_item;i++)
            {
                transform+=box_width;
            }

           
                box.css('transform','translateX('+transform+'px)');
                headline.addClass('is-active');
                interval2 = setInterval(swiper_slideshow,100);
            
        }

        box.hover(function(){

            headline.addClass('pause');
            clearInterval(interval2);

        },function(){

            headline.removeClass('pause');
            interval2 = setInterval(swiper_slideshow,100);

        })


}

single_swiper();



function jump_top()
{
    $('.js-footer_jump-top_container').on('click',function(){

        $('html,body').animate({scrollTop:0},500);

    })
}

jump_top();