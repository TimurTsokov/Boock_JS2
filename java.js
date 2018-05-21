    // $('html').dblclick(function(){
    //     alert('ой');
    // });
    let mes;
    $('a').mouseover(function () {
        mes = '<h3> Вы навели указатель на ссылку </h3>';
        $('.main').append(mes);
    });

    $('#btn').on('click', function () {
        var mes;
        // $('a').off('mouseover');
        $('h3').remove(mes);
        $(this).val("Stop this!");
        // e.stopPropagation();
    });

    $('#btn, #menu').mouseover(function () {
        $(this).css("background", "red");

        $('#btn, #menu').mouseleave(function () {
            $(this).css("background", "");
        });
    });

    $('#menu').hover(
        function () {
            $('#submenu').show();
        },
        function () {
            $('#submenu').hide();
        }
    );
    // $(document).dblclick(function (evt) {
    //     let xPos = evt.pageX;
    //     let yPos = evt.pageY;
    //     alert(`X:${xPos} Y:${yPos}`);
    // });

