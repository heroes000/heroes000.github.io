/*-- При нажатии на кнопку Как играть, делать видимым первый блок и кнопки  ----*/

$('.infoBut').click(function(){
    $('#infoGame').css('display','block');
    $('.form2 input').css('z-index','1000');
});


/*--- ОТКРЫТИЕ ВТОРОГО  ---*/
$('.infoGameBlock1 button').click(function(){

    $('.infoGameBlock1').css('display','none');
    $('.form2 input').css('z-index','0');


    $('.infoGameBlock2').css('display','block');
    $('.FormCpu input').css('z-index','1000');
});


/*---  ОТКРЫТИЕ ТРЕТЕГО  ---*/
$('.infoGameBlock2 button').click(function(){

    $('.infoGameBlock2').css('display','none');
    $('.FormCpu input').css('z-index','0');


    $('.infoGameBlock3').css('display','block');
    $('.ButImage').css('z-index','1000');
});

/*---  ОТКРЫТИЕ ЧЕТВЕРТОГО  ---*/
$('.infoGameBlock3 button').click(function(){

    $('.infoGameBlock3').css('display','none');
    $('.ButImage').css('z-index','0');


    $('.infoGameBlock4').css('display','block');
    $('.displayPlayer').css('z-index','1000');
    $('.displayCpu').css('z-index','1000');
});

/*---  ОТКРЫТИЕ ПЯТОГО  ---*/
$('.infoGameBlock4 button').click(function(){

    $('.infoGameBlock4').css('display','none');
    $('.displayPlayer').css('z-index','0');
    $('.displayCpu').css('z-index','0');


    $('.infoGameBlock5').css('display','block');
    $('.HpPlayer').css('z-index','1000');
    $('.HpCpu').css('z-index','1000');
});


/*--- ЗАКРЫТИЕ ----*/
$('.infoGameBlock5 button').click(function(){
    $('#infoGame').css('display','none');
    $('.HpPlayer').css('z-index','0');
    $('.HpCpu').css('z-index','0');
});
/*===========================================================================*/










