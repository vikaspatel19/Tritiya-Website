window.addEventListener("resize", function() {
            "use strict"; window.location.reload(); 
          });
         document.addEventListener("DOMContentLoaded", function()
         {
         /////// Prevent closing from click inside dropdown
         document.querySelectorAll('.dropdown-menu').forEach(function(element)
         {
                 element.addEventListener('click', function(e)
                 {
                         e.stopPropagation();
                 });
         })
         // make it as accordion for smaller screens
         if (window.innerWidth < 992)
         {
                 // close all inner dropdowns when parent is closed
                 document.querySelectorAll('.navbar .dropdown').forEach(function(everydropdown)
                 {
                         everydropdown.addEventListener('hidden.bs.dropdown', function()
                         {
                                 // after dropdown is hidden, then find all submenus
                                 this.querySelectorAll('.submenu')
                                         .forEach(function(everysubmenu)
                                         {
                                                 // hide every submenu as well
                                                 everysubmenu
                                                         .style
                                                         .display =
                                                         'none';
                                         });
                         })
                 });
                 document.querySelectorAll('.dropdown-menu a').forEach(function(element)
                 {
                         element.addEventListener('click', function(e)
                         {
                                 let nextEl = this.nextElementSibling;
                                 if (nextEl && nextEl.classList
                                         .contains('submenu'))
                                 {
                                         // prevent opening link if link needs to open dropdown
                                         e.preventDefault();
                                         console.log(nextEl);
                                         if (nextEl.style.display ==
                                                 'block')
                                         {
                                                 nextEl.style.display =
                                                         'none';
                                         }
                                         else
                                         {
                                                 nextEl.style.display =
                                                         'block';
                                         }
                                 }
                         });
                 })
         }
         // end if innerWidth
         });
         // DOMContentLoaded  end




        //  ------------------------Slick Slider------------------------

        $(document).ready(function(){
                $(".customer-speak").slick({
                        dots: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows:true
                });


                $('.product-image-slider').slick({
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        fade: true,
                        asNavFor: '.product-image-thumbnail-slider'
                      });
                      $('.product-image-thumbnail-slider').slick({
                        slidesToShow: 5,
                        slidesToScroll: 1,
                        asNavFor: '.product-image-slider',
                        dots: true,
                        centerMode: false,
                        focusOnSelect: true
                      });
        });




        // -----------------------------Product Image Zoom-----------------------------------------
        $(document).ready(function() {

                // $('.slideshow-thumbnails').hover(function() { changeSlide($(this)); });
              
                $(document).mousemove(function(e) {
                  var x = e.clientX; var y = e.clientY;
                  
                //   var x = e.clientX; var y = e.clientY;
              
                  var imgx1 = $('.product-img.slick-active').offset().left;
                  var imgx2 = $('.product-img.slick-active').outerWidth() + imgx1;
                  var imgy1 = $('.product-img.slick-active').offset().top;
                  var imgy2 = $('.product-img.slick-active').outerHeight() + imgy1;
              
                  if ( x > imgx1 && x < imgx2 && y > imgy1 && y < imgy2 ) {
                    $('#lens').show(); $('#result').show();
                    imageZoom( $('.product-img.slick-active'), $('#result'), $('#lens') );
                  } else {
                    $('#lens').hide(); $('#result').hide();
                  }
              
                });
                
              });
              
              function imageZoom( img, result, lens ) {
              
                result.width( img.innerWidth() ); result.height( img.innerHeight() );
                lens.width( img.innerWidth() / 2 ); lens.height( img.innerHeight() / 2 );
              
                result.offset({ top: img.offset().top, left: img.offset().left + img.outerWidth() + 10 });
              
                var cx = img.innerWidth() / lens.innerWidth(); var cy = img.innerHeight() / lens.innerHeight();
              
                result.css('backgroundImage', 'url(' + img.attr('src') + ')');
                result.css('backgroundSize', img.width() * cx + 'px ' + img.height() * cy + 'px');
              
                lens.mousemove(function(e) { moveLens(e); });
                img.mousemove(function(e) { moveLens(e); });
                lens.on('touchmove', function() { moveLens(); })
                img.on('touchmove', function() { moveLens(); })
              
                function moveLens(e) {
                  var x = e.clientX - lens.outerWidth() / 2;
                  var y = e.clientY - lens.outerHeight() / 2;
                  if ( x > img.outerWidth() + img.offset().left - lens.outerWidth() ) { x = img.outerWidth() + img.offset().left - lens.outerWidth(); }
                  if ( x < img.offset().left ) { x = img.offset().left; }
                  if ( y > img.outerHeight() + img.offset().top - lens.outerHeight() ) { y = img.outerHeight() + img.offset().top - lens.outerHeight(); }
                  if ( y < img.offset().top ) { y = img.offset().top; }
                  lens.offset({ top: y, left: x });
                  result.css('backgroundPosition', '-' + ( x - img.offset().left ) * cx  + 'px -' + ( y - img.offset().top ) * cy + 'px');
                }
              }
              