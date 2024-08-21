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