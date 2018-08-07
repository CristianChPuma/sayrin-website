$(document).ready(function(){

$("#owo").on('load',function(){
  UIkit.scrollspy(".tf-2", function(){
    UIkit.util.on('.tf-2', 'inview', function () {
       $('.tf-2').css(
         {'bottom':'150px',
          'right': '300px',
          'height': 'calc(100vh - 300px)',
          'transition-delay': '0.5s'
         }
       );
    });
  });

  UIkit.scrollspy("#title-heading", function(){
    UIkit.util.on('#title-heading', 'inview', function () {
       $('#title-heading>span:nth-child(1)').css({'padding-top':'0', 'transition-delay': '1.4s'});
       $('#title-heading>span:nth-child(3)').css({'padding-top':'0', 'transition-delay': '1.8s'});
       console.log('in');
    });
  });

  UIkit.scrollspy(".tf-1", function(){
    UIkit.util.on('.tf-1', 'inview', function () {
       $('.tf-1').css({'height' : '300px', 'width' : '300px', 'transition-delay': '2s'});
       $('.tf-1>div').css({'opacity':'1', 'transition-delay': '1.6s'});
       console.log('in-tf1');
    });
  });

  UIkit.scrollspy(".tr-3", function(){
    UIkit.util.on('.tr-3', 'inview', function () {
       $('.tr-3').css({'height' : '300px', 'width' : '300px', 'transition-delay': '2.4s'});
       $('.tr-3>div').css({'opacity':'1', 'transition-delay': '2s'});
       console.log('intr3');
    });
  });

  UIkit.scrollspy(".tr-2", function(){
    UIkit.util.on('.tr-2', 'inview', function () {
       $('.tr-2').css({'height' : '300px', 'width' : '300px', 'transition-delay': '2.8s'});
       $('.tr-2>div').css({'opacity':'1', 'transition-delay': '2.4s'});
    });
  });

  $("#service-item-a").on('load',function(){
  UIkit.scrollspy("#service-item-a", function(){
    UIkit.util.on('#service-item-a', 'inview', function () {
       $('.overlay-show').css({'width' : '0'});
    });
  });
  });


  $("#service-item-b").on('load',function(){
  UIkit.scrollspy("#service-item-b", function(){
    UIkit.util.on('#service-item-b', 'inview', function () {
       $('.overlay-show-b').css({'width' : '0'});
       console.log('trigger b');
    });
  });
  });

  $("#service-item-c").on('load',function(){
  UIkit.scrollspy("#service-item-c", function(){
    UIkit.util.on('#service-item-c', 'inview', function () {
       $('.overlay-show-c').css({'width' : '0'});
    });
  });
  });

  $("#service-item-d").on('load',function(){
  UIkit.scrollspy("#service-item-d", function(){
    UIkit.util.on('#service-item-d', 'inview', function () {
       $('.overlay-show-d').css({'width' : '0'});
    });
  });
  });

});

//Modal navbar

  $(document).ready(function(){

    $('.toggle-nav-modal').click(function(){

       console.log('clicked');

      $('.modal-nav').css({
         'height' : '90vh',
         'transition-delay': '0.4s'
       });

       $('.modal-nav>div').css({'visibility' : 'visible' ,'opacity' : '1','transition-delay': '0.6s' });

    });

    $('.close-nav-modal').click(function(){

       console.log('clicked');

      $('.modal-nav').css({
         'height' : '0',
         'transition-delay': '0.4s'
       });

       $('.modal-nav>div').css({'visibility' : 'collapse' , 'opacity' : '0','transition-delay': '0.4s'});

    });

  });




});
