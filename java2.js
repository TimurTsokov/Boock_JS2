// var linkVar = {message:'hello from ssilka'};
// var pVar = {message:'hello from abzats'};
// function showMessage(e) {
//     alert(e.data.message)
// }
// $('a').on('mouseover', linkVar, showMessage);
// $('p').on('click', pVar, showMessage);
//
//
// $(document).on('click keypress', function () {
//     $('.pullquote').hide();
//
// });
// $('div').on('click', 'li', function () {
//     $(this).css('textDecoration', 'line-through');
// });
//---------------------------------------------------ЧАВОООО
// $(document).ready(function () {
//     $('.answer').hide();
//     $('.main h2').click(function () {
//         var $answer = $(this).next('.answer');
//         if($answer.is(':hidden')){
//             $answer.slideDown();
//             $(this).addClass('close');
//         } else{
//             $answer.fadeOut(1000);
//             $(this).removeClass('close');
//         }
//     });
//     $('p').fadeTo('normal', .95);
// ---------------------------------------------- Login
//     // $('#open').click(function (evt) {
//     //     evt.preventDefault();
//     //     $('.form') .slideToggle(300);
//     //     $(this).toggleClass('close');
//     // });
//     $('#open').click(function (evt) {
//         evt.preventDefault();
//         if ($('.form').is(':hidden')){
//             $('.form').fadeIn(300);
//             $(this).addClass('close');
//         } else{
//             $('.form').slideUp(500);
//             $(this).removeClass('close');
//         }
//     });
//     $('.definit').animate({
//         left: '600px',
//         opacity: 0.6,
//         fontSize: '24px'
//     }, 1100);
//     $('.word').click(function () {
//         $(this).animate({
//             left:'+=50px'
//         },1000);
//     });
//     $('#menu').slideUp(1000,'linear');
//
//     // $('#container, #errors').hide();
//     // $('#container').fadeIn(2000, function () {
//     //    $('#errors').fadeIn(1000);
//     // });
//
//     // $('#container').width(0).height(0).css('opacity', 0.2);
//     // $('#errors').hide();
//     // $('#container').animate({
//     //     width:'300px',
//     //     height:'200px',
//     //     opacity:1
//     // },1000, function () {
//     //     $('#errors').fadeIn(1000);
//     // });
//     $('#container').hide();
//     $('#container').animate({
//            left:'+=400px'
//         },1000).fadeOut(3000);
//
//         // function () {
//         //     $('#errors').fadeIn(1000, function () {
//         //        $('#container, #error').fadeOut(1000);
//         //     });
//         // });
//     // $('#container').fadeIn(1000).fadeOut(2000).fadeIn(250);
//
//     $('#container').fadeIn(1000).delay(5000).fadeIn(250);
//
//     $('#container').animate({
//         left: '600px',
//         opacity: 0.9,
//         fontSize: '24px'
//     },1300, 'linear');
//
//     $('#errors').click(function () {
//         $(this).animate({
//             color: '#fff',
//             width: '300px',
//             height: '300px'
//         },1000, 'easeInBounce');
//     });
// });
//--------------------------- Анимирование панели навигации
$(document).ready(function () {
    $('#dashboard').hover(
        function () {
            $(this).stop().animate({
              left:'0px',
              backgroundColor: 'rgb(27,45,94)'
            },500, 'easeInSine');
        },
        function () {
            $(this).stop().animate({
                left:'-92px',
                backgroundColor: 'rgb(35,11,24)'
            },1500, 'easeOutBounce');
        }
    );
// ----------------------jQ и переходы в CSS
    $('img.aaa').click(function () {
        // $(this).addClass('faded');
        $(this).toggleClass('faded');
    });
    $('#btn').click(function () {
        $('img.aaa').css('animation-play-state', 'running');
    });
    var newPhoto = new Image();
    newPhoto.src = 'Логика работы задвижек 2.jpg';
    var oldSrc = $('img.aaa').attr('src');
    $('h1').hover(
       function () {
        $('img.aaa').attr('src', newPhoto.src);
    }, function () {
        $('img.aaa').attr('src', oldSrc);
    });
    // var newPhoto = new Image();
    // newPhoto.src = 'Описание входных сигналов.jpg';
    // var photo = $('img');
    // photo.attr('src',newPhoto.src);
    // photo.attr('width',newPhoto.width);
    // photo.attr('height',newPhoto.height);
    $('#swap').replaceWith('<img src="Описание выходных сигналов.jpg" id="swap">');

    // var newPhoto = new Image();
    // newPhoto.src = 'img/wizlogo.jpg';
    // var preloadImg = ['img/GoogleChromePortable.jpg', 'img/GoogleChromePortable.jpg','img/kotel-2_zps14f4f4d3.jpg'];
    // for (var i=0; i<preloadImg.length; i++){
    //     new Image().src = preloadImg[i];
    //     $('<img>').attr('src', preloadImg[i]);
    // }
//-------------------------Добавление меняющихся изображений
//     $('#gallery img').each(function () {
//         var imgFile = $(this).attr('src');
//         var preloadImage = new Image();
//         var imgExt = /(\.\w{3,4}$)/;
//         preloadImage.src = imgFile.replace(imgExt,'_h$1');
//         $(this).hover(
//             function () {
//                 $(this).attr('src',preloadImage.src);
//             },
//             function () {
//                 $(this).attr('src',imgFile);
//             }
//         )
//     });
//----------------------------Фотогалерея
    $('#gallery a').click(function (evt) {
        evt.preventDefault();
        var imgPath = $(this).attr('href');
        var oldImg = $('#photo img');
        var newImg = $('<img src="' + imgPath +'">');
        newImg.hide();
        $('#photo').prepend(newImg);
        newImg.fadeIn(1000);
        oldImg.fadeOut(1000, function () {
            $(this).remove();
        });
    });
    $('#gallery a:first').click();

// Код который запрещает открывать в новом окне каждую страницу вашего сайта
    var myURL = location.protocol + '//' + location.hostname;
    $('a[href^="http://"], a[href^="https://"]').not(
        '[href^="'+myURL+'"]').attr('target','_blank');

//------ Открыть некоторые ссылки на странице в новом окне площадью 300 квадратных пикселов с полосами прокруткии маркерами масштабирования
    $('.popup').click(function () {
        var winProps = 'height=300, width=300, resizable=yes, scrollbars=yes';
        var newWin = open($(this).attr('href'),'aWin',winProps);
    });
//--------------------Меню навигации
    $('.sm').smartmenus({
       showFunction: function ($ul, complete) {
           $ul.slideDown(250, complete);
       },
        hideFunction: function ($ul, complete) {
            $ul.slideUp(250, complete);
        }
    });
    
});






























