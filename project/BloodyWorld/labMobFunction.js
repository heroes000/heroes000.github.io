/**
 * Created by Сергей on 08.03.2017.
 */

// При победе вернуся на назад на блок
//- скелет
$('.butWin').click(function(){
    $('.golemon').css('display', 'none');
    $('.infoBut').css('display', 'none');
    $('#window_win_gol').css('display', 'none');



});
//- голем
$('.butWin2').click(function(){
    $('.golemon').css('display', 'none');
    $('.infoBut').css('display', 'none');
    $('#window_win_gol2').css('display', 'none');



});

$('.butWin3').click(function(){
    $('.golemon').css('display', 'none');
    $('.infoBut').css('display', 'none');
    $('#window_win_gol3').css('display', 'none');
});

$('.butWin4').click(function(){
    $('.golemon').css('display', 'none');
    $('.infoBut').css('display', 'none');
    $('#window_win_gol4').css('display', 'none');
});





//----------------------------------------------------------------------------------



//----- Функции скрыть/показать блок, плюс делает неактивной кнопку ВПЕРЕД ( на 2 сек )

function none(n){
    return  n.css('display','none');
}
function block(e){
     e.css('display','block');
}

function mapshow(e){
    return e.css('visibility', 'visible');
}

//======================================================================================

// -- плавное изчесновение моба после победы
//-- моб 1
$(document).ready(function() {
    $(".butWin").click(function () {
        $('.mapCenterBlock').css('visibility', 'visible');
        $('#timer').css('visibility', 'visible');
        $('.mob').animate(
            {
                opacity: '0'
            },
            1500, function () {
                $('.mob').css('display', 'none');
                $('.map-mob').css('opacity', '0');   
                // $('.map-mob').css('display', 'none');
                button_up.attr('disabled', false);  //-- сделать кнопку 'вперед' активной
                button_r.attr('disabled', false);
                button_l.attr('disabled', false);

                button_up.css('background', 'darkgrey'); //-- вернуть кнопкам изначальный серый цвет
                button_r.css('background', 'darkgrey');
                button_l.css('background', 'darkgrey');
                if ( $('.mob').css('display') == 'none' && $('.mob2').css('display') ==  'none' && $('.mob3').css('display') == 'none' && $('.mob4').css('display') ==  'none' ){
                    $('.window_end').css('display', 'block')
                }
            });
    });
});

//-- моб 2
$(document).ready(function() {
    $(".butWin2").click(function () {
        $('.mapCenterBlock').css('visibility', 'visible');
        $('#timer').css('visibility', 'visible');
        $('.mob2').animate(
            {
                opacity: '0'
            },
            1500, function () {
                $('.mob2').css('display', 'none');
                $('.map-mob2').css('display', 'none');
                button_up.attr('disabled', false);  //-- сделать кнопку 'вперед' активной
                button_r.attr('disabled', false);
                button_l.attr('disabled', false);

                button_up.css('background', 'darkgrey'); //-- вернуть кнопкам изначальный серый цвет
                button_r.css('background', 'darkgrey');
                button_l.css('background', 'darkgrey');
                if ( $('.mob').css('display') == 'none' && $('.mob2').css('display') ==  'none' && $('.mob3').css('display') == 'none' && $('.mob4').css('display') ==  'none') {
                    $('.window_end').css('display', 'block')
                }
            });


    });
});

//-- моб 3
$(document).ready(function() {
    $(".butWin3").click(function () {
        $('.mapCenterBlock').css('visibility', 'visible');
        $('#timer').css('visibility', 'visible');
        $('.mob3').animate(
            {
                opacity: '0'
            },
            1500, function () {
                $('.mob3').css('display', 'none');
                $('.map-mob3').css('display', 'none');
                button_up.attr('disabled', false);  //-- сделать кнопку 'вперед' активной
                button_r.attr('disabled', false);
                button_l.attr('disabled', false);

                button_up.css('background', 'darkgrey'); //-- вернуть кнопкам изначальный серый цвет
                button_r.css('background', 'darkgrey');
                button_l.css('background', 'darkgrey');
                if ( $('.mob').css('display') == 'none' && $('.mob2').css('display') ==  'none' && $('.mob3').css('display') == 'none' && $('.mob4').css('display') ==  'none') {
                    $('.window_end').css('display', 'block')
                }
            });


    });
});

//-- моб 4
$(document).ready(function() {
    $(".butWin4").click(function () {
        $('.mapCenterBlock').css('visibility', 'visible');
        $('#timer').css('visibility', 'visible');
        $('.mob4').animate(
            {
                opacity: '0'
            },
            1500, function () {
                $('.mob4').css('display', 'none');
                $('.map-mob4').css('display', 'none');
                button_up.attr('disabled', false);  //-- сделать кнопку 'вперед' активной
                button_r.attr('disabled', false);
                button_l.attr('disabled', false);

                button_up.css('background', 'darkgrey'); //-- вернуть кнопкам изначальный серый цвет
                button_r.css('background', 'darkgrey');
                button_l.css('background', 'darkgrey');
                if ( $('.mob').css('display') == 'none' && $('.mob2').css('display') ==  'none' && $('.mob3').css('display') == 'none' && $('.mob4').css('display') ==  'none') {
                    $('.window_end').css('display', 'block')
                }
            });


    });
});
//----------------------------------------------------------------------------------------------

// -- Делать наективной кнопку хода 'вперед' после нажатия ( через 2 сек стает активной )
$('.up').click(function(){
    button_up.attr('disabled', true).css('background', 'darkred');
    button_r.attr('disabled', true).css('background', 'darkred');
    button_l.attr('disabled', true).css('background', 'darkred')
});



//****** TIME ************
//----- функция тайминг, выполнять скрытие/открытие блоков через 2 сек и закривает блок с отчетом времени
function move_forward(non, blo, tim, ms, ms2, ms3){
    setTimeout(function () {
        button_up.attr('disabled', false);  //-- сделать кнопку 'вперед' активной
        button_r.attr('disabled', false);
        button_l.attr('disabled', false);

        button_up.css('background', 'darkgrey'); //-- вернуть кнопкам изначальный серый цвет
        button_r.css('background', 'darkgrey');
        button_l.css('background', 'darkgrey');

        none(non);     //-- закрытие блока лабиринта
        block(blo);
        none(tim);    //-- закрытие обратного отсчета
        mapshow(ms);   //-- открытие карты
        mapshow(ms2);  //-- иногда нужно открывать 2 блока карты за раз
        mapshow(ms3);

    }, 2100)
}

/*================================================================================================*/

//-------- Обратный тайминг после хода вперед

var stopTimer;

function testTimer(startTime) {


    var time = startTime;
    var seconds = time; //определим сколько секунд
    if ( seconds < 10 ) seconds = '0'+seconds;
    document.getElementById("time").innerHTML='<span>' +seconds+'</span>';
    startTime--;  //уменьшаем общее время на одну секунду

    if ( startTime  >= 0 ) {  //смотрим время не закончилось
        //если нет то повторяем процедуру заново
        stopTimer  =  setTimeout(function(){testTimer(startTime); }, 1000);
    }

}
//---------------------------------------------------------------------------

//-------- Обратный таймер

function Timer(Time) {

    var time = Time;

    var min = parseInt(time / 60);
    if ( min < 1 ) min = 0;
    time = parseInt(time - min * 60);
    if ( min < 10 ) min = '0'+min;

    var seconds = time; //определим сколько секунд
    if ( seconds < 10 ) seconds = '0'+seconds;
    document.getElementById("timer").innerHTML='<span style="color: red;">'+min+':'+seconds+'</span>';
    Time--;  //уменьшаем общее время на одну секунду

    if ( Time  >= 0 ) {  //смотрим время не закончилось
        //если нет то повторяем процедуру заново
        stopTimer  =  setTimeout(function(){Timer(Time); }, 1000);
    }
}
//---------------------------------------------------------------------------




//------------- стрелка показывающая куда мы смотрим
var arr=$('.arrow');


function arrow_right(e){
       e.css('transform','rotate(90deg)');
}
function arrow_ass(e){
    e.css('transform','rotate(180deg)');
}
function arrow_left(e){
    e.css('transform','rotate(270deg)');
}
function arrow_up(e){
    e.css('transform','rotate(360deg)');
}


//--------- Перемещение стрелки вверх/вниз влево/вправо между блоками
function move_arrow_up(e){
    setTimeout(function () {
        e.css('top', '-=20px');
    }, 2100)
}
function move_arrow_down(e){
    setTimeout(function () {
        e.css('top', '+=20px');
    }, 2100)
}
function move_arrow_left(e){
    setTimeout(function () {
        e.css('left', '-=19px');
    }, 2100)
}
function move_arrow_right(e){
    setTimeout(function () {
        e.css('left', '+=19px');
    }, 2100)
}
//============================================================



//----------------------------------------------------------------------------------------------
//- начало лабиринта Окошко с Рыцарем
$('.btnP').click(function(){
    $('.p1').css('display', 'none');
    $('.p2').css('display', 'block');
});
$('.btnP2').click(function(){
    $('.p2').css('display', 'none');
    $('.p3').css('display', 'block');
});
$('.btnP3').click(function(){
    $('.p3').css('display', 'none');
    $('.p4').css('display', 'block');
});
$('.btnP4').click(function(){
    $('.window_start').css('display', 'none');
    Timer (180);
});

/*  && $('.mob2').css('display') ==  'none' && $('.mob3').css('display') == 'none' && $('.mob4').css('display') ==  'none'  */






