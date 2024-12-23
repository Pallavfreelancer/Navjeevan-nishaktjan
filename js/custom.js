
  $(document).ready(function() {
    $('.game-slider .owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          nav: true
        },
        600: {
          items: 2,
          nav: true
        },
        900: {
          items: 3,
          nav: true
        },
         1100: {
          items: 4,
          nav: true
        },

        1400: {
          items: 5,
          nav: true,
          loop: true,
          margin:5
        }
      }
    })
  })


  $(document).ready(function() {
    $(".banner-slider .owl-carousel").owlCarousel({
    loop: true,
    items: 1,
    nav: true,
  })
  })

    
      $(document).ready(function(){
        

        $(".filter").click(function(){
          $(".filter-dropdown").toggleClass("open");
          $(".filter").toggleClass("open");
           $(".search-container").toggleClass("open");
          
        });

        $('.tab ul li').on('click', function(){
            $('.tab ul li.clicked').removeClass('clicked');
            $(this).addClass('clicked');
        });

      // remove all .active classes when clicked anywhere
      hide = true;
      $('body').on("click", function () {
          if (hide) $('.dropdown').removeClass('active');
          hide = true;
      });

      // add and remove .active
      $('body').on('click', '.dropdown', function () {

          var self = $(this);

          if (self.hasClass('active')) {
              $('.dropdown').removeClass('active');
              return false;
          }

          $('.dropdown').removeClass('active');

          self.toggleClass('active');
          hide = false;
      });


     });



