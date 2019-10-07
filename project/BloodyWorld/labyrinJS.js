


/*---------------------------------------------------------------------------------------------------*/
/*-- Старт - первый блок, переключение между 4мя сторонами (лево, назад, право и передний вид )*/

//---- start_up - название блока, right - нажатие правой кнопки ( left -левой )
$('.start_up > .up').click(function() {  // перед
    //-- закрытие/показ фото лабиринта, закрытие обрат отчета времени, открытие карты, делает активной кнопку вперед
    move_forward(startU, s01u, tim, mps01); //
    block(tim);  //--- показать обратный отчет времени и делает неактивной кнопку ВПЕРЕД ( на 2 сек )
    testTimer (2);  //--- функция которая отображает обратный отчет
    move_arrow_up(arr);

});
$('.start_up > .right').click(function(){
    none(startU);
    block(startR);

    arrow_right(arr);
});
$('.start_up > .left').click(function(){
    none(startU);
    block(startL);
    arrow_left(arr);
});


$('.start_right > .right').click(function(){  // право
    none(startR);
    block(startA);
    arrow_ass(arr);
});
$('.start_right > .left').click(function(){
    none(startR);
    block(startU);
    arrow_up(arr);
});


$('.start_left > .right').click(function(){  // лево
    none(startL);
    block(startU);
    arrow_up(arr);
});
$('.start_left > .left').click(function(){
    none(startL);
    block(startA);
    arrow_ass(arr);
});


$('.start_ass > .right').click(function(){  // зад
    none(startA);
    block(startL);
    arrow_left(arr);
});
$('.start_ass > .left').click(function(){
    none(startA);
    block(startR);
    arrow_right(arr);
});
//=================================================================================================


/*---------------------------------------------------------------------------------------------------*/
/*-- s01   */
//$('.s01_up > .up').click(function(){  // перед
    //none(startU);
   // block(s01u);
//});
$('.s01_up > .right').click(function(){
    none(s01u);
    block(s01r);
    arrow_right(arr);
});
$('.s01_up > .left').click(function(){
    none(s01u);
    block(s01l);
    arrow_left(arr);
});


$('.s01_right > .right').click(function(){  // право
    none(s01r);
    block(s01a);
    arrow_ass(arr);
});
$('.s01_right > .left').click(function(){
    none(s01r);
    block(s01u);
    arrow_up(arr);
});


$('.s01_left > .right').click(function(){  // лево
    none(s01l);
    block(s01u);
    arrow_up(arr);
});
$('.s01_left > .left').click(function(){
    none(s01l);
    block(s01a);
    arrow_ass(arr);
});


$('.s01_ass > .up').click(function(){  // зад
    move_forward(s01a, startA, tim, mpstart);
    block(tim);
    testTimer (2);
    move_arrow_down(arr);
});
$('.s01_ass > .right').click(function(){
    none(s01a);
    block(s01l);
    arrow_left(arr);
});
$('.s01_ass > .left').click(function(){
    none(s01a);
    block(s01r);
    arrow_right(arr);
});
//=================================================================================================


/*---------------------------------------------------------------------------------------------------*/
/*-- s02   */
$('.s01_up > .up').click(function(){  // перед
    move_forward(s01u, s02u, tim, mps02);
    block(tim);
    testTimer (2);
    move_arrow_up(arr);
});
$('.s02_up > .right').click(function(){
    none(s02u);
    block(s02r);
    arrow_right(arr);
});
$('.s02_up > .left').click(function(){
    none(s02u);
    block(s02l);
    arrow_left(arr);
});


$('.s02_right > .right').click(function(){  // право
    none(s02r);
    block(s02a);
    arrow_ass(arr);
});
$('.s02_right > .left').click(function(){
    none(s02r);
    block(s02u);
    arrow_up(arr);
});


$('.s02_left > .right').click(function(){  // лево
    none(s02l);
    block(s02u);
    arrow_up(arr);
});
$('.s02_left > .left').click(function(){
    none(s02l);
    block(s02a);
    arrow_ass(arr);
});


$('.s02_ass > .up').click(function(){  // зад
    move_forward(s02a, s01a, tim );
    block(tim);
    testTimer (2);
    move_arrow_down(arr);
});
$('.s02_ass > .right').click(function(){
    none(s02a);
    block(s02l);
    arrow_left(arr);
});
$('.s02_ass > .left').click(function(){
    none(s02a);
    block(s02r);
    arrow_right(arr);
});
//=================================================================================================


/*---------------------------------------------------------------------------------------------------*/
/*-- s03   */
$('.s02_up > .up').click(function(){  // перед
    move_forward(s02u, s03u, tim, mps03);
    block(tim);
    testTimer (2);
    move_arrow_up(arr);
});
$('.s03_up > .right').click(function(){
    none(s03u);
    block(s03r);
    arrow_right(arr);
});
$('.s03_up > .left').click(function(){
    none(s03u);
    block(s03l);
    arrow_left(arr);
});


$('.s03_right > .up').click(function(){  // перед
    move_forward(s03r, s63r, tim, mps62);
    block(tim);
    testTimer (2);
    move_arrow_right(arr);
});
$('.s03_right > .right').click(function(){  // право
    none(s03r);
    block(s03a);
    arrow_ass(arr);
});
$('.s03_right > .left').click(function(){
    none(s03r);
    block(s03u);
    arrow_up(arr);
});


$('.s03_left > .up').click(function(){  // лево
    move_forward(s03l, s04l, tim, mps04);
    block(tim);
    testTimer (2);
    move_arrow_left(arr);
});
$('.s03_left > .right').click(function(){  // лево
    none(s03l);
    block(s03u);
    arrow_up(arr);
});
$('.s03_left > .left').click(function(){
    none(s03l);
    block(s03a);
    arrow_ass(arr);
});


$('.s03_ass > .up').click(function(){  // зад
    move_forward(s03a, s02a, tim, mps02);
    block(tim);
    testTimer (2);
    move_arrow_down(arr);
});
$('.s03_ass > .right').click(function(){
    none(s03a);
    block(s03l);
    arrow_left(arr);
});
$('.s03_ass > .left').click(function(){
    none(s03a);
    block(s03r);
    arrow_right(arr);
});
//=================================================================================================


/*---------------------------------------------------------------------------------------------------*/
/*-- s04   */
$('.s04_up > .up').click(function(){  // перед
    move_forward(s04u, s05u, tim, mps05);
    block(tim);
    testTimer (2);
    move_arrow_up(arr);
});
$('.s04_up > .right').click(function(){
    none(s04u);
    block(s04r);
    arrow_right(arr);
});
$('.s04_up > .left').click(function(){
    none(s04u);
    block(s04l);
    arrow_left(arr);
});


$('.s04_right > .up').click(function(){  // перед
    move_forward(s04r, s03r, tim);
    block(tim);
    testTimer (2);
    move_arrow_right(arr);
});
$('.s04_right > .right').click(function(){  // право
    none(s04r);
    block(s04a);
    arrow_ass(arr);
});
$('.s04_right > .left').click(function(){
    none(s04r);
    block(s04u);
    arrow_up(arr);
    $('.map-mob').css('visibility', 'visible');
    $('.mob').css('visibility', 'visible');
});


$('.s04_left > .right').click(function(){  // лево
    none(s04l);
    block(s04u);
    arrow_up(arr);
    $('.map-mob').css('visibility', 'visible');
    $('.mob').css('visibility', 'visible');
});
$('.s04_left > .left').click(function(){
    none(s04l);
    block(s04a);
    arrow_ass(arr);
});


$('.s04_ass > .right').click(function(){
    none(s04a);
    block(s04l);
    arrow_left(arr);
});
$('.s04_ass > .left').click(function(){
    none(s04a);
    block(s04r);
    arrow_right(arr);
});
//=================================================================================================


/*---------------------------------------------------------------------------------------------------*/
/*-- s05   */
$('.s05_up > .up').click(function(){  // перед - описан ход в s04_right > .up

    if($('.mob').css('display') ==  'none')
    {
        move_forward(s05u, s06u, tim, mps06, mps006);
        block(tim);
        testTimer (2);
        move_arrow_up(arr);
    }
    else {
        $('.mapCenterBlock').css('visibility', 'hidden');

        $('.golemon').css('display', 'block');
        $('.infoBut').css('display', 'block');

        $('.HpCpu4').css('display', 'none');
        $('.HpCpu3').css('display', 'none');
        $('.HpCpu2').css('display', 'none');
        $('.HpCpu').css('display', 'block');
        Cpu.HealGolem2 = 350;
        Cpu.HealGolem3 = 350;
        Cpu.HealGolem4 = 350;
        Cpu.HealthGolem = 90;
        $('.HpCpu p').html( Cpu.HealthGolem  );

        $('.displayPlayer').html(' ');
        $('.displayCpu').html(' ');
        $('#timer').css('visibility', 'hidden');
    }
});
$('.s05_up > .right').click(function(){
    none(s05u);
    block(s05r);
    arrow_right(arr);
});
$('.s05_up > .left').click(function(){
    none(s05u);
    block(s05l);
    arrow_left(arr);
});


$('.s05_right > .right').click(function(){  // право
    none(s05r);
    block(s05a);
    arrow_ass(arr);
});
$('.s05_right > .left').click(function(){
    none(s05r);
    block(s05u);
    arrow_up(arr);
});


$('.s05_left > .right').click(function(){  // лево
    none(s05l);
    block(s05u);
    arrow_up(arr);
});
$('.s05_left > .left').click(function(){
    none(s05l);
    block(s05a);
    arrow_ass(arr);
});


$('.s05_ass > .up').click(function(){  // зад
    move_forward(s05a, s04a, tim);
    block(tim);
    testTimer (2);
    move_arrow_down(arr);
});
$('.s05_ass > .right').click(function(){
    none(s05a);
    block(s05l);
    arrow_left(arr);
});
$('.s05_ass > .left').click(function(){
    none(s05a);
    block(s05r);
    arrow_right(arr);
});
//=================================================================================================


/*---------------------------------------------------------------------------------------------------*/
/*-- s06   */
$('.s06_up > .up').click(function(){  // перед
    move_forward(s06u, s07u, tim, mps07);
    block(tim);
    testTimer (2);
    move_arrow_up(arr);
});
$('.s06_up > .right').click(function(){
    none(s06u);
    block(s06r);
    arrow_right(arr);
});
$('.s06_up > .left').click(function(){
    none(s06u);
    block(s06l);
    arrow_left(arr);
});


$('.s06_right > .right').click(function(){  // право
    none(s06r);
    block(s06a);
    arrow_ass(arr);
});
$('.s06_right > .left').click(function(){
    none(s06r);
    block(s06u);
    arrow_up(arr);
});


$('.s06_left > .right').click(function(){  // лево
    none(s06l);
    block(s06u);
    arrow_up(arr);
});
$('.s06_left > .left').click(function(){
    none(s06l);
    block(s06a);
    arrow_ass(arr);
});


$('.s06_ass > .up').click(function(){  // зад
    move_forward(s06a, s05a, tim, mps05);
    block(tim);
    testTimer (2);
    move_arrow_down(arr);
});
$('.s06_ass > .right').click(function(){
    none(s06a);
    block(s06l);
    arrow_left(arr);
});
$('.s06_ass > .left').click(function(){
    none(s06a);
    block(s06r);
    arrow_right(arr);
});
//=================================================================================================

/*---------------------------------------------------------------------------------------------------*/
/*-- s07   */
$('.s07_up > .up').click(function(){  // перед
    move_forward(s07u, s08u, tim, mps08, mps09);
    block(tim);
    testTimer (2);
    move_arrow_up(arr);
});
$('.s07_up > .right').click(function(){
    none(s07u);
    block(s07r);
    arrow_right(arr);
});
$('.s07_up > .left').click(function(){
    none(s07u);
    block(s07l);
    arrow_left(arr);
});


$('.s07_right > .right').click(function(){  // право
    none(s07r);
    block(s07a);
    arrow_ass(arr);
});
$('.s07_right > .left').click(function(){
    none(s07r);
    block(s07u);
    arrow_up(arr);
});


$('.s07_left > .right').click(function(){  // лево
    none(s07l);
    block(s07u);
    arrow_up(arr);
});
$('.s07_left > .left').click(function(){
    none(s07l);
    block(s07a);
    arrow_ass(arr);
});


$('.s07_ass > .up').click(function(){  // зад

    if($('.mob').css('display') ==  'none')
    {
        move_forward(s07a, s06a, tim, mps06, mps006);
        block(tim);
        testTimer (2);
        move_arrow_down(arr);
    }
    else {
        $('.mapCenterBlock').css('visibility', 'hidden');

        $('.golemon').css('display', 'block');
        $('.infoBut').css('display', 'block');

        $('.HpCpu4').css('display', 'none');
        $('.HpCpu3').css('display', 'none');
        $('.HpCpu2').css('display', 'none');
        $('.HpCpu').css('display', 'block');
        Cpu.HealGolem2 = 350;
        Cpu.HealGolem3 = 350;
        Cpu.HealGolem4 = 350;
        Cpu.HealthGolem = 9;
        $('.HpCpu p').html( Cpu.HealthGolem  );

        $('.displayPlayer').html(' ');
        $('.displayCpu').html(' ');
        $('#timer').css('visibility', 'hidden');
    }
});
$('.s07_ass > .right').click(function(){
    none(s07a);
    block(s07l);
    arrow_left(arr);
});
$('.s07_ass > .left').click(function(){
    none(s07a);
    block(s07r);
    arrow_right(arr);
});
//=================================================================================================

/*---------------------------------------------------------------------------------------------------*/
/*-- s08   */
$('.s08_up > .up').click(function(){  // перед
    move_forward(s08u, s09u, tim );
    block(tim);
    testTimer (2);
    move_arrow_up(arr);
});
$('.s08_up > .right').click(function(){
    none(s08u);
    block(s08r);
    arrow_right(arr);
});
$('.s08_up > .left').click(function(){
    none(s08u);
    block(s08l);
    arrow_left(arr);
});


$('.s08_right > .right').click(function(){  // право
    none(s08r);
    block(s08a);
    arrow_ass(arr);
});
$('.s08_right > .left').click(function(){
    none(s08r);
    block(s08u);
    arrow_up(arr);
});


$('.s08_left > .right').click(function(){  // лево
    none(s08l);
    block(s08u);
    arrow_up(arr);
});
$('.s08_left > .left').click(function(){
    none(s08l);
    block(s08a);
    arrow_ass(arr);
});


$('.s08_ass > .up').click(function(){  // зад
    move_forward(s08a, s07a, tim, mps07);
    block(tim);
    testTimer (2);
    move_arrow_down(arr);


});
$('.s08_ass > .right').click(function(){
    none(s08a);
    block(s08l);
    arrow_left(arr);
});
$('.s08_ass > .left').click(function(){
    none(s08a);
    block(s08r);
    arrow_right(arr);
});
//=================================================================================================

/*---------------------------------------------------------------------------------------------------*/
/*-- s09   */

 $('.s09_right > .up').click(function(){  // лево

 move_forward(s09r, s46r, tim, mps9_46);
 block(tim);
 testTimer (2);
 move_arrow_right(arr);
 });
$('.s09_up > .right').click(function(){
    none(s09u);
    block(s09r);
    arrow_right(arr);
});
$('.s09_up > .left').click(function(){
    none(s09u);
    block(s09l);
    arrow_left(arr);
});


$('.s09_right > .right').click(function(){  // право
    none(s09r);
    block(s09a);
    arrow_ass(arr);
});
$('.s09_right > .left').click(function(){
    none(s09r);
    block(s09u);
    arrow_up(arr);
});


$('.s09_left > .up').click(function(){  // лево
    move_forward(s09l, s10l, tim, mps10);
    block(tim);
    testTimer (2);
    move_arrow_left(arr);
});
$('.s09_left > .right').click(function(){
    none(s09l);
    block(s09u);
    arrow_up(arr);
});
$('.s09_left > .left').click(function(){
    none(s09l);
    block(s09a);
    arrow_ass(arr);
});


$('.s09_ass > .up').click(function(){  // зад
    move_forward(s09a, s08a, tim, mps08);
    block(tim);
    testTimer (2);
    move_arrow_down(arr);
    setTimeout(function () {
        $('.map-mob').css('visibility', 'visible')
    }, 2100)
});
$('.s09_ass > .right').click(function(){
    none(s09a);
    block(s09l);
    arrow_left(arr);
});
$('.s09_ass > .left').click(function(){
    none(s09a);
    block(s09r);
    arrow_right(arr);
});
//=================================================================================================

/*---------------------------------------------------------------------------------------------------*/
/*-- s10   */

$('.s10_up > .right').click(function(){
    none(s10u);
    block(s10r);
    arrow_right(arr);
});
$('.s10_up > .left').click(function(){
    none(s10u);
    block(s10l);
    arrow_left(arr);
});


$('.s10_right > .up').click(function(){  // лево
    move_forward(s10r, s09r, tim);
    block(tim);
    testTimer (2);
    move_arrow_right(arr);
});
$('.s10_right > .right').click(function(){  // право
    none(s10r);
    block(s10a);
    arrow_ass(arr);
});
$('.s10_right > .left').click(function(){
    none(s10r);
    block(s10u);
    arrow_up(arr);
});


$('.s10_left > .up').click(function(){  // лево
    move_forward(s10l, s11l, tim, mps11);
    block(tim);
    testTimer (2);
    move_arrow_left(arr);
});
$('.s10_left > .right').click(function(){  // лево
    none(s10l);
    block(s10u);
    arrow_up(arr);
});
$('.s10_left > .left').click(function(){
    none(s10l);
    block(s10a);
    arrow_ass(arr);
});


$('.s10_ass > .right').click(function(){ // зад
    none(s10a);
    block(s10l);
    arrow_left(arr);
});
$('.s10_ass > .left').click(function(){
    none(s10a);
    block(s10r);
    arrow_right(arr);
});
//=================================================================================================


/*---------------------------------------------------------------------------------------------------*/
/*-- s11   */

$('.s11_up > .right').click(function(){
    none(s11u);
    block(s11r);
    arrow_right(arr);
});
$('.s11_up > .left').click(function(){
    none(s11u);
    block(s11l);
    arrow_left(arr);
});


$('.s11_right > .up').click(function(){  // лево
    move_forward(s11r, s10r, tim);
    block(tim);
    testTimer (2);
    move_arrow_right(arr);
});
$('.s11_right > .right').click(function(){  // право
    none(s11r);
    block(s11a);
    arrow_ass(arr);
});
$('.s11_right > .left').click(function(){
    none(s11r);
    block(s11u);
    arrow_up(arr);
});


$('.s11_left > .up').click(function(){  // лево
    move_forward(s11l, s12l, tim, mps12, mps13);
    block(tim);
    testTimer (2);
    move_arrow_left(arr);
});
$('.s11_left > .right').click(function(){
    none(s11l);
    block(s11u);
    arrow_up(arr);
});
$('.s11_left > .left').click(function(){
    none(s11l);
    block(s11a);
    arrow_ass(arr);
});


$('.s11_ass > .up').click(function(){  // зад
    move_forward(s11a, s14a, tim, mps14);
    block(tim);
    testTimer (2);
    move_arrow_down(arr);
});
$('.s11_ass > .right').click(function(){
    none(s11a);
    block(s11l);
    arrow_left(arr);
});
$('.s11_ass > .left').click(function(){
    none(s11a);
    block(s11r);
    arrow_right(arr);
});
//=================================================================================================

/*---------------------------------------------------------------------------------------------------*/
/*-- s12   */

$('.s12_up > .right').click(function(){
    none(s12u);
    block(s12r);
    arrow_right(arr);
});
$('.s12_up > .left').click(function(){
    none(s12u);
    block(s12l);
    arrow_left(arr);
});


$('.s12_right > .up').click(function(){  // лево
    move_forward(s12r, s11r, tim);
    block(tim);
    testTimer (2);
    move_arrow_right(arr);
});
$('.s12_right > .right').click(function(){  // право
    none(s12r);
    block(s12a);
    arrow_ass(arr);
});
$('.s12_right > .left').click(function(){
    none(s12r);
    block(s12u);
    arrow_up(arr);
});


$('.s12_left > .up').click(function(){  // лево
    move_forward(s12l, s13l, tim);
    block(tim);
    testTimer (2);
    move_arrow_left(arr);
});
$('.s12_left > .right').click(function(){
    none(s12l);
    block(s12u);
    arrow_up(arr);
});
$('.s12_left > .left').click(function(){
    none(s12l);
    block(s12a);
    arrow_ass(arr);
});


$('.s12_ass > .right').click(function(){
    none(s12a);
    block(s12l);
    arrow_left(arr);
});
$('.s12_ass > .left').click(function(){
    none(s12a);
    block(s12r);
    arrow_right(arr);
});
//=================================================================================================

/*---------------------------------------------------------------------------------------------------*/
/*-- s13   */

$('.s13_up > .up').click(function(){  // лево
    move_forward(s13u, s19u, tim, mps19);
    block(tim);
    testTimer (2);
    move_arrow_up(arr);
});
$('.s13_up > .right').click(function(){
    none(s13u);
    block(s13r);
    arrow_right(arr);
});
$('.s13_up > .left').click(function(){
    none(s13u);
    block(s13l);
    arrow_left(arr);
});


$('.s13_right > .up').click(function(){  // лево
    move_forward(s13r, s12r, tim, mps10);
    block(tim);
    testTimer (2);
    move_arrow_right(arr);
});
$('.s13_right > .right').click(function(){  // право
    none(s13r);
    block(s13a);
    arrow_ass(arr);
});
$('.s13_right > .left').click(function(){
    none(s13r);
    block(s13u);
    arrow_up(arr);
});


$('.s13_left > .right').click(function(){
    none(s13l);
    block(s13u);
    arrow_up(arr);
});
$('.s13_left > .left').click(function(){
    none(s13l);
    block(s13a);
    arrow_ass(arr);
});


$('.s13_ass > .up').click(function(){  // лево
    move_forward(s13a, s18a, tim, mps18);
    block(tim);
    testTimer (2);
    move_arrow_down(arr);
});
$('.s13_ass > .right').click(function(){
    none(s13a);
    block(s13l);
    arrow_left(arr);
});
$('.s13_ass > .left').click(function(){
    none(s13a);
    block(s13r);
    arrow_right(arr);
});
//=================================================================================================

/*---------------------------------------------------------------------------------------------------*/
/*-- s14   */

$('.s14_up > .up').click(function(){  // лево
    move_forward(s14u, s11u, tim);
    block(tim);
    testTimer (2);
    move_arrow_up(arr);
});
$('.s14_up > .right').click(function(){
    none(s14u);
    block(s14r);
    arrow_right(arr);
});
$('.s14_up > .left').click(function(){
    none(s14u);
    block(s14l);
    arrow_left(arr);
});


$('.s14_right > .right').click(function(){  // право
    none(s14r);
    block(s14a);
    arrow_ass(arr);
});
$('.s14_right > .left').click(function(){
    none(s14r);
    block(s14u);
    arrow_up(arr);
});


$('.s14_left > .right').click(function(){
    none(s14l);
    block(s14u);
    arrow_up(arr);
});
$('.s14_left > .left').click(function(){
    none(s14l);
    block(s14a);
    arrow_ass(arr);
});


$('.s14_ass > .up').click(function(){  // лево
    move_forward(s14a, s15a, tim, mps15);
    block(tim);
    testTimer (2);
    move_arrow_down(arr);
});
$('.s14_ass > .right').click(function(){
    none(s14a);
    block(s14l);
    arrow_left(arr);
});
$('.s14_ass > .left').click(function(){
    none(s14a);
    block(s14r);
    arrow_right(arr);
});
//=================================================================================================


/*---------------------------------------------------------------------------------------------------*/
/*-- s15   */

$('.s15_up > .up').click(function(){  // лево
    move_forward(s15u, s14u, tim);
    block(tim);
    testTimer (2);
    move_arrow_up(arr);
});
$('.s15_up > .right').click(function(){
    none(s15u);
    block(s15r);
    arrow_right(arr);
});
$('.s15_up > .left').click(function(){
    none(s15u);
    block(s15l);
    arrow_left(arr);
});


$('.s15_right > .right').click(function(){  // право
    none(s15r);
    block(s15a);
    arrow_ass(arr);
});
$('.s15_right > .left').click(function(){
    none(s15r);
    block(s15u);
    arrow_up(arr);
});


$('.s15_left > .up').click(function(){  // лево
    move_forward(s15l, s16l, tim, mps16);
    block(tim);
    testTimer (2);
    move_arrow_left(arr);
});
$('.s15_left > .right').click(function(){
    none(s15l);
    block(s15u);
    arrow_up(arr);
});
$('.s15_left > .left').click(function(){
    none(s15l);
    block(s15a);
    arrow_ass(arr);
});


$('.s15_ass > .right').click(function(){
    none(s15a);
    block(s15l);
    arrow_left(arr);
});
$('.s15_ass > .left').click(function(){
    none(s15a);
    block(s15r);
    arrow_right(arr);
});
//=================================================================================================

/*---------------------------------------------------------------------------------------------------*/
/*-- s16   */

$('.s16_up > .right').click(function(){
    none(s16u);
    block(s16r);
    arrow_right(arr);
});
$('.s16_up > .left').click(function(){
    none(s16u);
    block(s16l);
    arrow_left(arr);
});


$('.s16_right > .up').click(function(){  // лево
    move_forward(s16r, s15r, tim);
    block(tim);
    testTimer (2);
    move_arrow_right(arr);
});
$('.s16_right > .right').click(function(){  // право
    none(s16r);
    block(s16a);
    arrow_ass(arr);
});
$('.s16_right > .left').click(function(){
    none(s16r);
    block(s16u);
    arrow_up(arr);
});


$('.s16_left > .up').click(function(){  // лево
    move_forward(s16l, s17l, tim, mps17);
    block(tim);
    testTimer (2);
    move_arrow_left(arr);
});
$('.s16_left > .right').click(function(){
    none(s16l);
    block(s16u);
    arrow_up(arr);
});
$('.s16_left > .left').click(function(){
    none(s16l);
    block(s16a);
    arrow_ass(arr);
});


$('.s16_ass > .right').click(function(){
    none(s16a);
    block(s16l);
    arrow_left(arr);
});
$('.s16_ass > .left').click(function(){
    none(s16a);
    block(s16r);
    arrow_right(arr);
});
//=================================================================================================


/*---------------------------------------------------------------------------------------------------*/
/*-- s17   */

$('.s17_up > .up').click(function(){  // лево
    move_forward(s17u, s18u, tim, mps18);
    block(tim);
    testTimer (2);
    move_arrow_up(arr);
});
$('.s17_up > .right').click(function(){
    none(s17u);
    block(s17r);
    arrow_right(arr);
});
$('.s17_up > .left').click(function(){
    none(s17u);
    block(s17l);
    arrow_left(arr);
});


$('.s17_right > .up').click(function(){  // лево
    move_forward(s17r, s16r, tim, mps14);
    mps15.css('visibility', 'visible');
    block(tim);
    testTimer (2);
    move_arrow_right(arr);
});
$('.s17_right > .right').click(function(){  // право
    none(s17r);
    block(s17a);
    arrow_ass(arr);
});
$('.s17_right > .left').click(function(){
    none(s17r);
    block(s17u);
    arrow_up(arr);
});


$('.s17_left > .right').click(function(){
    none(s17l);
    block(s17u);
    arrow_up(arr);
});
$('.s17_left > .left').click(function(){
    none(s17l);
    block(s17a);
    arrow_ass(arr);
});


$('.s17_ass > .right').click(function(){
    none(s17a);
    block(s17l);
    arrow_left(arr);
});
$('.s17_ass > .left').click(function(){
    none(s17a);
    block(s17r);
    arrow_right(arr);
});
//=================================================================================================

/*---------------------------------------------------------------------------------------------------*/
/*-- s18   */

$('.s18_up > .up').click(function(){  // лево
    move_forward(s18u, s13u, tim, mps13);
    mps12.css('visibility', 'visible');
    none(s13u);
    block(tim);
    testTimer (2);
    move_arrow_up(arr);
});
$('.s18_up > .right').click(function(){
    none(s18u);
    block(s18r);
    arrow_right(arr);
});
$('.s18_up > .left').click(function(){
    none(s18u);
    block(s18l);
    arrow_left(arr);
});


$('.s18_right > .right').click(function(){  // право
    none(s18r);
    block(s18a);
    arrow_ass(arr);
});
$('.s18_right > .left').click(function(){
    none(s18r);
    block(s18u);
    arrow_up(arr);
});


$('.s18_left > .right').click(function(){
    none(s18l);
    block(s18u);
    arrow_up(arr);
});
$('.s18_left > .left').click(function(){
    none(s18l);
    block(s18a);
    arrow_ass(arr);
});


$('.s18_ass > .up').click(function(){  // лево
    move_forward(s18a, s17a, tim, mps17);
    mps16.css('visibility', 'visible');

    block(tim);
    testTimer (2);
    move_arrow_down(arr);
});
$('.s18_ass > .right').click(function(){
    none(s18a);
    block(s18l);
    arrow_left(arr);
});
$('.s18_ass > .left').click(function(){
    none(s18a);
    block(s18r);
    arrow_right(arr);
});
//=================================================================================================

/*---------------------------------------------------------------------------------------------------*/
/*-- s19   */
$('.s19_up > .up').click(function(){  // лево
    move_forward(s19u, s20u, tim, mps25);
    block(tim);
    testTimer (2);
    move_arrow_up(arr);
});
$('.s19_up > .right').click(function(){
    none(s19u);
    block(s19r);
    arrow_right(arr);
});
$('.s19_up > .left').click(function(){
    none(s19u);
    block(s19l);
    arrow_left(arr);
});


$('.s19_right > .right').click(function(){  // право
    none(s19r);
    block(s19a);
    arrow_ass(arr);
});
$('.s19_right > .left').click(function(){
    none(s19r);
    block(s19u);
    arrow_up(arr);
});


$('.s19_left > .right').click(function(){
    none(s19l);
    block(s19u);
    arrow_up(arr);
});
$('.s19_left > .left').click(function(){
    none(s19l);
    block(s19a);
    arrow_ass(arr);
});


$('.s19_ass > .up').click(function(){  // лево
    move_forward(s19a, s13a, tim);
    block(tim);
    testTimer (2);
    move_arrow_down(arr);
});
$('.s19_ass > .right').click(function(){
    none(s19a);
    block(s19l);
    arrow_left(arr);
});
$('.s19_ass > .left').click(function(){
    none(s19a);
    block(s19r);
    arrow_right(arr);
});
//=================================================================================================

/*---------------------------------------------------------------------------------------------------*/
/*-- s20   */

$('.s20_up > .up').click(function(){  // лево
    move_forward(s20u, s25u, tim, mps26);
    block(tim);
    testTimer (2);
    move_arrow_up(arr);
});
$('.s20_up > .right').click(function(){
    none(s20u);
    block(s20r);
    arrow_right(arr);
});
$('.s20_up > .left').click(function(){
    none(s20u);
    block(s20l);
    arrow_left(arr);
});


$('.s20_right > .up').click(function(){  // лево
    move_forward(s20r, s21r, tim, mps20);
    block(tim);
    testTimer (2);
    move_arrow_right(arr);
});
$('.s20_right > .right').click(function(){  // право
    none(s20r);
    block(s20a);
    arrow_ass(arr);
});
$('.s20_right > .left').click(function(){
    none(s20r);
    block(s20u);
    arrow_up(arr);
});


$('.s20_left > .right').click(function(){
    none(s20l);
    block(s20u);
    arrow_up(arr);
});
$('.s20_left > .left').click(function(){
    none(s20l);
    block(s20a);
    arrow_ass(arr);
});


$('.s20_ass > .up').click(function(){  // лево
    move_forward(s20a, s19a, tim, mps13, mps12, mps11);
    block(tim);
    testTimer (2);
    move_arrow_down(arr);
});
$('.s20_ass > .right').click(function(){
    none(s20a);
    block(s20l);
    arrow_left(arr);
});
$('.s20_ass > .left').click(function(){
    none(s20a);
    block(s20r);
    arrow_right(arr);
});
//=================================================================================================









/*---------------------------------------------------------------------------------------------------*/
/*-- s21   */

$('.s21_up > .right').click(function(){
    none(s21u);
    block(s21r);
    arrow_right(arr);
});
$('.s21_up > .left').click(function(){
    none(s21u);
    block(s21l);
    arrow_left(arr);
});


$('.s21_right > .up').click(function(){  // лево
    move_forward(s21r, s22r, tim, mps21);
    block(tim);
    testTimer (2);
    move_arrow_right(arr);
    setTimeout(function () {
        $('.map-mob3').css('visibility', 'visible')
    }, 2100)

});
$('.s21_right > .right').click(function(){  // право
    none(s21r);
    block(s21a);
    arrow_ass(arr);
});
$('.s21_right > .left').click(function(){
    none(s21r);
    block(s21u);
    arrow_up(arr);
});


$('.s21_left > .up').click(function(){  // лево
    move_forward(s21l, s20l, tim);
    block(tim);
    testTimer (2);
    move_arrow_left(arr);
});
$('.s21_left > .right').click(function(){
    none(s21l);
    block(s21u);
    arrow_up(arr);
});
$('.s21_left > .left').click(function(){
    none(s21l);
    block(s21a);
    arrow_ass(arr);
});


$('.s21_ass > .right').click(function(){
    none(s21a);
    block(s21l);
    arrow_left(arr);
});
$('.s21_ass > .left').click(function(){
    none(s21a);
    block(s21r);
    arrow_right(arr);
});
//=================================================================================================

/*---------------------------------------------------------------------------------------------------*/
/*-- s22   */

$('.s22_up > .right').click(function(){
    none(s22u);
    block(s22r);
    arrow_right(arr);
});
$('.s22_up > .left').click(function(){
    none(s22u);
    block(s22l);
    arrow_left(arr);
});


$('.s22_right > .up').click(function(){  // лево
    move_forward(s22r, s23r, tim, mps22);
    setTimeout(function () {
        mapshow(mps23);
    }, 2100);
    block(tim);
    testTimer (2);
    move_arrow_right(arr);
});
$('.s22_right > .right').click(function(){  // право
    none(s22r);
    block(s22a);
    arrow_ass(arr);
});
$('.s22_right > .left').click(function(){
    none(s22r);
    block(s22u);
    arrow_up(arr);
});


$('.s22_left > .up').click(function(){  // лево
    move_forward(s22l, s21l, tim);
    block(tim);
    testTimer (2);
    move_arrow_left(arr);
});
$('.s22_left > .right').click(function(){
    none(s22l);
    block(s22u);
    arrow_up(arr);
});
$('.s22_left > .left').click(function(){
    none(s22l);
    block(s22a);
    arrow_ass(arr);
});


$('.s22_ass > .right').click(function(){
    none(s22a);
    block(s22l);
    arrow_left(arr);
});
$('.s22_ass > .left').click(function(){
    none(s22a);
    block(s22r);
    arrow_right(arr);
});
//=================================================================================================

/*---------------------------------------------------------------------------------------------------*/
/*-- s23   */

$('.s23_up > .right').click(function(){
    none(s23u);
    block(s23r);
    arrow_right(arr);
});
$('.s23_up > .left').click(function(){
    none(s23u);
    block(s23l);
    arrow_left(arr);
});


$('.s23_right > .up').click(function(){  // лево

    if($('.mob3').css('display') ==  'none')
    {
        move_forward(s23r, s24r, tim);
        block(tim);
        testTimer (2);
        move_arrow_right(arr);
    }
    else {
        $('.mapCenterBlock').css('visibility', 'hidden');

        $('.golemon').css('display', 'block');
        $('.infoBut').css('display', 'block');

        $('.HpCp2').css('display', 'none');
        $('.HpCpu').css('display', 'none');
        $('.HpCpu3').css('display', 'block');

        Cpu.HealthGolem = 300;
        Cpu.HealGolem2 = 350;
        Cpu.HealGolem3 = 30;
        Cpu.HealGolem4 = 300;
        $('.HpCpu3 p').html( Cpu.HealGolem3  );

        $('.displayPlayer').html(' ');
        $('.displayCpu').html(' ');
        $('#timer').css('visibility', 'hidden');
    }
});
$('.s23_right > .right').click(function(){  // право
    none(s23r);
    block(s23a);
    arrow_ass(arr);
});
$('.s23_right > .left').click(function(){
    none(s23r);
    block(s23u);
    arrow_up(arr);
});


$('.s23_left > .up').click(function(){  // лево
    move_forward(s23l, s22l, tim);
    block(tim);
    testTimer (2);
    move_arrow_left(arr);
});
$('.s23_left > .right').click(function(){
    none(s23l);
    block(s23u);
    arrow_up(arr);
});
$('.s23_left > .left').click(function(){
    none(s23l);
    block(s23a);
    arrow_ass(arr);
});


$('.s23_ass > .right').click(function(){
    none(s23a);
    block(s23l);
    arrow_left(arr);
});
$('.s23_ass > .left').click(function(){
    none(s23a);
    block(s23r);
    arrow_right(arr);
});
//=================================================================================================

/*---------------------------------------------------------------------------------------------------*/
/*-- s24   */

$('.s24_up > .right').click(function(){
    none(s24u);
    block(s24r);
    arrow_right(arr);
});
$('.s24_up > .left').click(function(){
    none(s24u);
    block(s24l);
    arrow_left(arr);
});


$('.s24_right > .right').click(function(){  // право
    none(s24r);
    block(s24a);
    arrow_ass(arr);
});
$('.s24_right > .left').click(function(){
    none(s24r);
    block(s24u);
    arrow_up(arr);
});


$('.s24_left > .up').click(function(){  // лево
    move_forward(s24l, s23l, tim);
    block(tim);
    testTimer (2);
    move_arrow_left(arr);
});
$('.s24_left > .right').click(function(){
    none(s24l);
    block(s24u);
    arrow_up(arr);
});
$('.s24_left > .left').click(function(){
    none(s24l);
    block(s24a);
    arrow_ass(arr);
});


$('.s24_ass > .right').click(function(){
    none(s24a);
    block(s24l);
    arrow_left(arr);
});
$('.s24_ass > .left').click(function(){
    none(s24a);
    block(s24r);
    arrow_right(arr);
});
//=================================================================================================

/*---------------------------------------------------------------------------------------------------*/
/*-- s25   */

$('.s25_up > .up').click(function(){  // лево
    move_forward(s25u, s26u, tim, mps27);
    block(tim);
    testTimer (2);
    move_arrow_up(arr);
});
$('.s25_up > .right').click(function(){
    none(s25u);
    block(s25r);
    arrow_right(arr);
});
$('.s25_up > .left').click(function(){
    none(s25u);
    block(s25l);
    arrow_left(arr);
});


$('.s25_right > .right').click(function(){  // право
    none(s25r);
    block(s25a);
    arrow_ass(arr);
});
$('.s25_right > .left').click(function(){
    none(s25r);
    block(s25u);
    arrow_up(arr);
});


$('.s25_left > .right').click(function(){
    none(s25l);
    block(s25u);
    arrow_up(arr);
});
$('.s25_left > .left').click(function(){
    none(s25l);
    block(s25a);
    arrow_ass(arr);
});


$('.s25_ass > .up').click(function(){  // лево
    move_forward(s25a, s20a, tim, mps19);
    block(tim);
    testTimer (2);
    move_arrow_down(arr);
});
$('.s25_ass > .right').click(function(){
    none(s25a);
    block(s25l);
    arrow_left(arr);
});
$('.s25_ass > .left').click(function(){
    none(s25a);
    block(s25r);
    arrow_right(arr);
});
//=================================================================================================

/*---------------------------------------------------------------------------------------------------*/
/*-- s26   */

$('.s26_up > .up').click(function(){  // лево
    move_forward(s26u, s27u, tim, mps27);
    block(tim);
    testTimer (2);
    move_arrow_up(arr);
});
$('.s26_up > .right').click(function(){
    none(s26u);
    block(s26r);
    arrow_right(arr);
});
$('.s26_up > .left').click(function(){
    none(s26u);
    block(s26l);
    arrow_left(arr);
});


$('.s26_right > .right').click(function(){  // право
    none(s26r);
    block(s26a);
    arrow_ass(arr);
});
$('.s26_right > .left').click(function(){
    none(s26r);
    block(s26u);
    arrow_up(arr);
});


$('.s26_left > .right').click(function(){
    none(s26l);
    block(s26u);
    arrow_up(arr);
});
$('.s26_left > .left').click(function(){
    none(s26l);
    block(s26a);
    arrow_ass(arr);
});


$('.s26_ass > .up').click(function(){  // лево
    move_forward(s26a, s25a, tim, mps19);
    block(tim);
    testTimer (2);
    move_arrow_down(arr);
});
$('.s26_ass > .right').click(function(){
    none(s26a);
    block(s26l);
    arrow_left(arr);
});
$('.s26_ass > .left').click(function(){
    none(s26a);
    block(s26r);
    arrow_right(arr);
});
//=================================================================================================

/*---------------------------------------------------------------------------------------------------*/
/*-- s27   */

$('.s27_up > .right').click(function(){
    none(s27u);
    block(s27r);
    arrow_right(arr);
});
$('.s27_up > .left').click(function(){
    none(s27u);
    block(s27l);
    arrow_left(arr);
});


$('.s27_right > .up').click(function(){  // лево
    move_forward(s27r, s28r, tim, mps28);
    block(tim);
    testTimer (2);
    move_arrow_right(arr);
});
$('.s27_right > .right').click(function(){  // право
    none(s27r);
    block(s27a);
    arrow_ass(arr);
});
$('.s27_right > .left').click(function(){
    none(s27r);
    block(s27u);
    arrow_up(arr);
});


$('.s27_left > .right').click(function(){
    none(s27l);
    block(s27u);
    arrow_up(arr);
});
$('.s27_left > .left').click(function(){
    none(s27l);
    block(s27a);
    arrow_ass(arr);
});


$('.s27_ass > .up').click(function(){  // лево
    move_forward(s27a, s26a, tim, mps26);
    block(tim);
    testTimer (2);
    move_arrow_down(arr);
});
$('.s27_ass > .right').click(function(){
    none(s27a);
    block(s27l);
    arrow_left(arr);
});
$('.s27_ass > .left').click(function(){
    none(s27a);
    block(s27r);
    arrow_right(arr);
});
//=================================================================================================

/*---------------------------------------------------------------------------------------------------*/
/*-- s28   */

$('.s28_up > .right').click(function(){
    none(s28u);
    block(s28r);
    arrow_right(arr);
});
$('.s28_up > .left').click(function(){
    none(s28u);
    block(s28l);
    arrow_left(arr);
});


$('.s28_right > .up').click(function(){  // право
    move_forward(s28r, s29r, tim, mps29);
    block(tim);
    testTimer (2);
    move_arrow_right(arr);
});
$('.s28_right > .right').click(function(){  //
    none(s28r);
    block(s28a);
    arrow_ass(arr);
});
$('.s28_right > .left').click(function(){
    none(s28r);
    block(s28u);
    arrow_up(arr);
});


$('.s28_left > .up').click(function(){  // лево
    move_forward(s28l, s27l, tim);
    block(tim);
    testTimer (2);
    move_arrow_left(arr);
});
$('.s28_left > .right').click(function(){
    none(s28l);
    block(s28u);
    arrow_up(arr);
});
$('.s28_left > .left').click(function(){
    none(s28l);
    block(s28a);
    arrow_ass(arr);
});


$('.s28_ass > .right').click(function(){
    none(s28a);
    block(s28l);
    arrow_left(arr);
});
$('.s28_ass > .left').click(function(){
    none(s28a);
    block(s28r);
    arrow_right(arr);
});
//=================================================================================================

/*---------------------------------------------------------------------------------------------------*/
/*-- s29   */

$('.s29_up > .right').click(function(){
    none(s29u);
    block(s29r);
    arrow_right(arr);
});
$('.s29_up > .left').click(function(){
    none(s29u);
    block(s29l);
    arrow_left(arr);
});


$('.s29_right > .up').click(function(){  // лево
    move_forward(s29r, s30r, tim, mps30, mps30_2);
    block(tim);
    testTimer (2);
    move_arrow_right(arr);
});
$('.s29_right > .right').click(function(){  // право
    none(s29r);
    block(s28a);
    arrow_ass(arr);
});
$('.s29_right > .left').click(function(){
    none(s29r);
    block(s29u);
    arrow_up(arr);
});


$('.s29_left > .up').click(function(){  // лево
    move_forward(s29l, s28l, tim, mps27);
    block(tim);
    testTimer (2);
    move_arrow_left(arr);
});
$('.s29_left > .right').click(function(){
    none(s29l);
    block(s29u);
    arrow_up(arr);
});
$('.s29_left > .left').click(function(){
    none(s29l);
    block(s29a);
    arrow_ass(arr);
});


$('.s29_ass > .right').click(function(){
    none(s29a);
    block(s29l);
    arrow_left(arr);
});
$('.s29_ass > .left').click(function(){
    none(s29a);
    block(s29r);
    arrow_right(arr);
});
//=================================================================================================
/*---------------------------------------------------------------------------------------------------*/
/*-- s30   */

$('.s30_up > .right').click(function(){
    none(s30u);
    block(s30r);
    arrow_right(arr);
});
$('.s30_up > .left').click(function(){
    none(s30u);
    block(s30l);
    arrow_left(arr);
});


$('.s30_right > .up').click(function(){  // лево
    move_forward(s30r, s31r, tim, mps31_up, mps31_down);
    block(tim);
    testTimer (2);
    move_arrow_right(arr);
});
$('.s30_right > .right').click(function(){  // право
    none(s30r);
    block(s30a);
    arrow_ass(arr);
});
$('.s30_right > .left').click(function(){
    none(s30r);
    block(s30u);
    arrow_up(arr);
});


$('.s30_left > .up').click(function(){  // лево
    move_forward(s30l, s29l, tim, mps30_29);
    block(tim);
    testTimer (2);
    move_arrow_left(arr);
});
$('.s30_left > .right').click(function(){
    none(s30l);
    block(s30u);
    arrow_up(arr);
});
$('.s30_left > .left').click(function(){
    none(s30l);
    block(s30a);
    arrow_ass(arr);
});


$('.s30_ass > .right').click(function(){
    none(s30a);
    block(s30l);
    arrow_left(arr);
});
$('.s30_ass > .left').click(function(){
    none(s30a);
    block(s30r);
    arrow_right(arr);
});
//=================================================================================================

/*---------------------------------------------------------------------------------------------------*/
/*-- s31   */
$('.s31_up > .up').click(function(){  // лево
    move_forward(s31u, s32u, tim, mps32);
    block(tim);
    testTimer (2);
    move_arrow_up(arr);
});
$('.s31_up > .right').click(function(){
    none(s31u);
    block(s31r);
    arrow_right(arr);
});
$('.s31_up > .left').click(function(){
    none(s31u);
    block(s31l);
    arrow_left(arr);
});


$('.s31_right > .right').click(function(){  // право
    none(s31r);
    block(s31a);
    arrow_ass(arr);
});
$('.s31_right > .left').click(function(){
    none(s31r);
    block(s31u);
    arrow_up(arr);
});


$('.s31_left > .up').click(function(){  // лево
    move_forward(s31l, s30l, tim, mps28);
    block(tim);
    testTimer (2);
    move_arrow_left(arr);
});
$('.s31_left > .right').click(function(){
    none(s31l);
    block(s31u);
    arrow_up(arr);
});
$('.s31_left > .left').click(function(){
    none(s31l);
    block(s31a);
    arrow_ass(arr);
});


$('.s31_ass > .up').click(function(){  // лево
    move_forward(s31a, s35a, tim, mps35);
    block(tim);
    testTimer (2);
    move_arrow_down(arr);
});
$('.s31_ass > .right').click(function(){
    none(s31a);
    block(s31l);
    arrow_left(arr);
});
$('.s31_ass > .left').click(function(){
    none(s31a);
    block(s31r);
    arrow_right(arr);
});
//=================================================================================================

/*---------------------------------------------------------------------------------------------------*/
/*-- s32   */

$('.s32_up > .right').click(function(){
    none(s32u);
    block(s32r);
    arrow_right(arr);
});
$('.s32_up > .left').click(function(){
    none(s32u);
    block(s32l);
    arrow_left(arr);
});


$('.s32_right > .up').click(function(){  // лево
    move_forward(s32r, s33r, tim, mps33);
    block(tim);
    testTimer (2);
    move_arrow_right(arr);
});
$('.s32_right > .right').click(function(){  // право
    none(s32r);
    block(s32a);
    arrow_ass(arr);
});
$('.s32_right > .left').click(function(){
    none(s32r);
    block(s32u);
    arrow_up(arr);
});


$('.s32_left > .right').click(function(){
    none(s32l);
    block(s32u);
    arrow_up(arr);
});
$('.s32_left > .left').click(function(){
    none(s32l);
    block(s32a);
    arrow_ass(arr);
});


$('.s32_ass > .up').click(function(){  // лево
    move_forward(s32a, s31a, tim);
    block(tim);
    testTimer (2);
    move_arrow_down(arr);
});
$('.s32_ass > .right').click(function(){
    none(s32a);
    block(s32l);
    arrow_left(arr);
});
$('.s32_ass > .left').click(function(){
    none(s32a);
    block(s32r);
    arrow_right(arr);
});
//=================================================================================================

/*---------------------------------------------------------------------------------------------------*/
/*-- s33   */

$('.s33_up > .right').click(function(){
    none(s33u);
    block(s33r);
    arrow_right(arr);
});
$('.s33_up > .left').click(function(){
    none(s33u);
    block(s33l);
    arrow_left(arr);
});


$('.s33_right > .up').click(function(){  // лево
    move_forward(s33r, s34r, tim);
    block(tim);
    testTimer (2);
    move_arrow_right(arr);
});
$('.s33_right > .right').click(function(){  // право
    none(s33r);
    block(s33a);
    arrow_ass(arr);
});
$('.s33_right > .left').click(function(){
    none(s33r);
    block(s33u);
    arrow_up(arr);
});


$('.s33_left > .up').click(function(){  // лево
    move_forward(s33l, s32l, tim);
    block(tim);
    testTimer (2);
    move_arrow_left(arr);
});
$('.s33_left > .right').click(function(){
    none(s33l);
    block(s33u);
    arrow_up(arr);
});
$('.s33_left > .left').click(function(){
    none(s33l);
    block(s33a);
    arrow_ass(arr);
});


$('.s33_ass > .right').click(function(){
    none(s33a);
    block(s33l);
    arrow_left(arr);
});
$('.s33_ass > .left').click(function(){
    none(s33a);
    block(s33r);
    arrow_right(arr);
});
//=================================================================================================

/*---------------------------------------------------------------------------------------------------*/
/*-- s34   */

$('.s34_up > .right').click(function(){
    none(s34u);
    block(s34r);
    arrow_right(arr);
});
$('.s34_up > .left').click(function(){
    none(s34u);
    block(s34l);
    arrow_left(arr);
});


$('.s34_right > .right').click(function(){  // право
    none(s34r);
    block(s34a);
    arrow_ass(arr);
});
$('.s34_right > .left').click(function(){
    none(s34r);
    block(s34u);
    arrow_up(arr);
});


$('.s34_left > .up').click(function(){  // лево
    move_forward(s34l, s33l, tim);
    block(tim);
    testTimer (2);
    move_arrow_left(arr);
});
$('.s34_left > .right').click(function(){
    none(s34l);
    block(s34u);
    arrow_up(arr);
});
$('.s34_left > .left').click(function(){
    none(s34l);
    block(s34a);
    arrow_ass(arr);
});


$('.s34_ass > .right').click(function(){
    none(s34a);
    block(s34l);
    arrow_left(arr);
});
$('.s34_ass > .left').click(function(){
    none(s34a);
    block(s34r);
    arrow_right(arr);
});
//=================================================================================================

/*---------------------------------------------------------------------------------------------------*/
/*-- s35   */

$('.s35_up > .up').click(function(){  // лево
    move_forward(s35u, s31u, tim, mps31_up);
    block(tim);
    testTimer (2);
    move_arrow_up(arr);
});
$('.s35_up > .right').click(function(){
    none(s35u);
    block(s35r);
    arrow_right(arr);
});
$('.s35_up > .left').click(function(){
    none(s35u);
    block(s35l);
    arrow_left(arr);
});


$('.s35_right > .up').click(function(){  // лево
    move_forward(s35r, s36r, tim, mps36);
    block(tim);
    testTimer (2);
    move_arrow_right(arr);
});
$('.s35_right > .right').click(function(){  // право
    none(s35r);
    block(s35a);
    arrow_ass(arr);
});
$('.s35_right > .left').click(function(){
    none(s35r);
    block(s35u);
    arrow_up(arr);
});


$('.s35_left > .right').click(function(){
    none(s35l);
    block(s35u);
    arrow_up(arr);
});
$('.s35_left > .left').click(function(){
    none(s35l);
    block(s35a);
    arrow_ass(arr);
});


$('.s35_ass > .right').click(function(){
    none(s35a);
    block(s35l);
    arrow_left(arr);
});
$('.s35_ass > .left').click(function(){
    none(s35a);
    block(s35r);
    arrow_right(arr);
});
//=================================================================================================

/*---------------------------------------------------------------------------------------------------*/
/*-- s36   */

$('.s36_up > .right').click(function(){
    none(s36u);
    block(s36r);
    arrow_right(arr);
});
$('.s36_up > .left').click(function(){
    none(s36u);
    block(s36l);
    arrow_left(arr);
});


$('.s36_right > .up').click(function(){  // лево
    move_forward(s36r, s37r, tim, mps37);
    block(tim);
    testTimer (2);
    move_arrow_right(arr);
});
$('.s36_right > .right').click(function(){  // право
    none(s36r);
    block(s36a);
    arrow_ass(arr);
});
$('.s36_right > .left').click(function(){
    none(s36r);
    block(s36u);
    arrow_up(arr);
});


$('.s36_left > .up').click(function(){  // лево
    move_forward(s36l, s35l, tim, mps29, mps30);
    block(tim);
    testTimer (2);
    move_arrow_left(arr);
});
$('.s36_left > .right').click(function(){
    none(s36l);
    block(s36u);
    arrow_up(arr);
});
$('.s36_left > .left').click(function(){
    none(s36l);
    block(s36a);
    arrow_ass(arr);
});

$('.s36_ass > .right').click(function(){
    none(s36a);
    block(s36l);
    arrow_left(arr);
});
$('.s36_ass > .left').click(function(){
    none(s36a);
    block(s36r);
    arrow_right(arr);
});
//=================================================================================================

/*---------------------------------------------------------------------------------------------------*/
/*-- s37   */

$('.s37_up > .right').click(function(){
    none(s37u);
    block(s37r);
    arrow_right(arr);
});
$('.s37_up > .left').click(function(){
    none(s37u);
    block(s37l);
    arrow_left(arr);
});


$('.s37_right > .up').click(function(){  // лево
    move_forward(s37r, s38r, tim, mps38);
    block(tim);
    testTimer (2);
    move_arrow_right(arr);
    setTimeout(function () {
        $('.map-mob4').css('visibility', 'visible')
    }, 2100)
});
$('.s37_right > .right').click(function(){  // право
    none(s37r);
    block(s37a);
    arrow_ass(arr);
});
$('.s37_right > .left').click(function(){
    none(s37r);
    block(s37u);
    arrow_up(arr);
});


$('.s37_left > .up').click(function(){  // лево
    move_forward(s37l, s36l, tim, mps37_36);
    block(tim);
    testTimer (2);
    move_arrow_left(arr);
});
$('.s37_left > .right').click(function(){
    none(s37l);
    block(s37u);
    arrow_up(arr);
});
$('.s37_left > .left').click(function(){
    none(s37l);
    block(s37a);
    arrow_ass(arr);
});


$('.s37_ass > .up').click(function(){  // лево
    move_forward(s37a, s42a, tim, mps42);
    block(tim);
    testTimer (2);
    move_arrow_down(arr);
});
$('.s37_ass > .right').click(function(){
    none(s37a);
    block(s37l);
    arrow_left(arr);
});
$('.s37_ass > .left').click(function(){
    none(s37a);
    block(s37r);
    arrow_right(arr);
});
//=================================================================================================

/*---------------------------------------------------------------------------------------------------*/
/*-- s38   */

$('.s38_up > .right').click(function(){
    none(s38u);
    block(s38r);
    arrow_right(arr);
});
$('.s38_up > .left').click(function(){
    none(s38u);
    block(s38l);
    arrow_left(arr);
});


$('.s38_right > .up').click(function(){  // лево
    move_forward(s38r, s39r, tim, mps39);
    block(tim);
    testTimer (2);
    move_arrow_right(arr);

});
$('.s38_right > .right').click(function(){  // право
    none(s38r);
    block(s38a);
    arrow_ass(arr);
});
$('.s38_right > .left').click(function(){
    none(s38r);
    block(s38u);
    arrow_up(arr);
});


$('.s38_left > .up').click(function(){  // лево
    move_forward(s38l, s37l, tim);
    block(tim);
    testTimer (2);
    move_arrow_left(arr);
});
$('.s38_left > .right').click(function(){
    none(s38l);
    block(s38u);
    arrow_up(arr);
});
$('.s38_left > .left').click(function(){
    none(s38l);
    block(s38a);
    arrow_ass(arr);
});


$('.s38_ass > .right').click(function(){
    none(s38a);
    block(s38l);
    arrow_left(arr);
});
$('.s38_ass > .left').click(function(){
    none(s38a);
    block(s38r);
    arrow_right(arr);
});
//=================================================================================================

/*---------------------------------------------------------------------------------------------------*/
/*-- s39   */

$('.s39_up > .right').click(function(){
    none(s39u);
    block(s39r);
    arrow_right(arr);
});
$('.s39_up > .left').click(function(){
    none(s39u);
    block(s39l);
    arrow_left(arr);
});


$('.s39_right > .up').click(function(){  // лево

    if($('.mob4').css('display') ==  'none')
    {
        move_forward(s39r, s40r, tim);
        block(tim);
        testTimer (2);
        move_arrow_right(arr);
    }
    else {
        $('.mapCenterBlock').css('visibility', 'hidden');

        $('.golemon').css('display', 'block');
        $('.infoBut').css('display', 'block');

        $('.HpCpu').css('display', 'none');
        $('.HpCpu3').css('display', 'none');
        $('.HpCpu2').css('display', 'none');
        $('.HpCpu4').css('display', 'block');
        Cpu.HealGolem2 = 350;
        Cpu.HealthGolem = 300;
        Cpu.HealGolem3 = 350;
        Cpu.HealGolem4 = 30;
        $('.HpCpu4 p').html( Cpu.HealGolem4  );

        $('.displayPlayer').html(' ');
        $('.displayCpu').html(' ');
        $('#timer').css('visibility', 'hidden');
    }
});
$('.s39_right > .right').click(function(){  // право
    none(s39r);
    block(s39a);
    arrow_ass(arr);
});
$('.s39_right > .left').click(function(){
    none(s39r);
    block(s39u);
    arrow_up(arr);
});


$('.s39_left > .up').click(function(){  // лево
    move_forward(s39l, s38l, tim);
    block(tim);
    testTimer (2);
    move_arrow_left(arr);
});
$('.s39_left > .right').click(function(){
    none(s39l);
    block(s39u);
    arrow_up(arr);
});
$('.s39_left > .left').click(function(){
    none(s39l);
    block(s39a);
    arrow_ass(arr);
});


$('.s39_ass > .right').click(function(){
    none(s39a);
    block(s39l);
    arrow_left(arr);
});
$('.s39_ass > .left').click(function(){
    none(s39a);
    block(s39r);
    arrow_right(arr);
});
//=================================================================================================

/*---------------------------------------------------------------------------------------------------*/
/*-- s40   */

$('.s40_up > .right').click(function(){
    none(s40u);
    block(s40r);
    arrow_right(arr);
});
$('.s40_up > .left').click(function(){
    none(s40u);
    block(s40l);
    arrow_left(arr);
});


$('.s40_right > .up').click(function(){  // лево


    move_forward(s40r, s40r, tim);
    block(tim);
    testTimer (2);
    move_arrow_right(arr);


});
$('.s40_right > .right').click(function(){  // право
    none(s40r);
    block(s40a);
    arrow_ass(arr);
});
$('.s40_right > .left').click(function(){
    none(s40r);
    block(s40u);
    arrow_up(arr);
});


$('.s40_left > .up').click(function(){  // лево
    move_forward(s40l, s39l, tim);
    block(tim);
    testTimer (2);
    move_arrow_left(arr);
});
$('.s40_left > .right').click(function(){
    none(s40l);
    block(s40u);
    arrow_up(arr);
});
$('.s40_left > .left').click(function(){
    none(s40l);
    block(s40a);
    arrow_ass(arr);
});


$('.s40_ass > .right').click(function(){
    none(s40a);
    block(s40l);
    arrow_left(arr);
});
$('.s40_ass > .left').click(function(){
    none(s40a);
    block(s40r);
    arrow_right(arr);
});
//=================================================================================================




/*-- s42   */
$('.s42_up > .up').click(function(){  // лево
    move_forward(s42u, s37u, tim);
    block(tim);
    testTimer (2);
    move_arrow_up(arr);
});
$('.s42_up > .right').click(function(){
    none(s42u);
    block(s42r);
    arrow_right(arr);
});
$('.s42_up > .left').click(function(){
    none(s42u);
    block(s42l);
    arrow_left(arr);
});


$('.s42_right > .right').click(function(){  // право
    none(s42r);
    block(s42a);
    arrow_ass(arr);
});
$('.s42_right > .left').click(function(){
    none(s42r);
    block(s42u);
    arrow_up(arr);
});


$('.s42_left > .right').click(function(){
    none(s42l);
    block(s42u);
    arrow_up(arr);
});
$('.s42_left > .left').click(function(){
    none(s42l);
    block(s42a);
    arrow_ass(arr);
});


$('.s42_ass > .up').click(function(){  // лево
    move_forward(s42a, s43a, tim, mps43);
    block(tim);
    testTimer (2);
    move_arrow_down(arr);
});
$('.s42_ass > .right').click(function(){
    none(s42a);
    block(s42l);
    arrow_left(arr);
});
$('.s42_ass > .left').click(function(){
    none(s42a);
    block(s42r);
    arrow_right(arr);
});
//=================================================================================================

/*-- s43   */
$('.s43_up > .up').click(function(){  // лево
    move_forward(s43u, s42u, tim, mps35, mps36, mps37);
    block(tim);
    testTimer (2);
    move_arrow_up(arr);
});
$('.s43_up > .right').click(function(){
    none(s43u);
    block(s43r);
    arrow_right(arr);
});
$('.s43_up > .left').click(function(){
    none(s43u);
    block(s43l);
    arrow_left(arr);
});


$('.s43_right > .right').click(function(){  // право
    none(s43r);
    block(s43a);
    arrow_ass(arr);
});
$('.s43_right > .left').click(function(){
    none(s43r);
    block(s43u);
    arrow_up(arr);
});


$('.s43_left > .right').click(function(){
    none(s43l);
    block(s43u);
    arrow_up(arr);
});
$('.s43_left > .left').click(function(){
    none(s43l);
    block(s43a);
    arrow_ass(arr);
});


$('.s43_ass > .up').click(function(){  // лево
    move_forward(s43a, s44a, tim, mps44);
    block(tim);
    testTimer (2);
    move_arrow_down(arr);
});
$('.s43_ass > .right').click(function(){
    none(s43a);
    block(s43l);
    arrow_left(arr);
});
$('.s43_ass > .left').click(function(){
    none(s43a);
    block(s43r);
    arrow_right(arr);
});
//=================================================================================================

/*-- s44   */
$('.s44_up > .up').click(function(){  // лево
    move_forward(s44u, s43u, tim, mps44_43);
    block(tim);
    testTimer (2);
    move_arrow_up(arr);
});
$('.s44_up > .right').click(function(){
    none(s44u);
    block(s44r);
    arrow_right(arr);
});
$('.s44_up > .left').click(function(){
    none(s44u);
    block(s44l);
    arrow_left(arr);
});


$('.s44_right > .right').click(function(){  // право
    none(s44r);
    block(s44a);
    arrow_ass(arr);
});
$('.s44_right > .left').click(function(){
    none(s44r);
    block(s44u);
    arrow_up(arr);
});


$('.s44_left > .right').click(function(){
    none(s44l);
    block(s44u);
    arrow_up(arr);
});
$('.s44_left > .left').click(function(){
    none(s44l);
    block(s44a);
    arrow_ass(arr);
});


$('.s44_ass > .up').click(function(){  // лево
    move_forward(s44a, s45a, tim, mps45);
    block(tim);
    testTimer (2);
    move_arrow_down(arr);
});
$('.s44_ass > .right').click(function(){
    none(s44a);
    block(s44l);
    arrow_left(arr);
});
$('.s44_ass > .left').click(function(){
    none(s44a);
    block(s44r);
    arrow_right(arr);
});
//=================================================================================================

/*-- s45   */
$('.s45_up > .up').click(function(){  // лево
    move_forward(s45u, s44u, tim, mps42);
    block(tim);
    testTimer (2);
    move_arrow_up(arr);
});
$('.s45_up > .right').click(function(){
    none(s45u);
    block(s45r);
    arrow_right(arr);
});
$('.s45_up > .left').click(function(){
    none(s45u);
    block(s45l);
    arrow_left(arr);
});


$('.s45_right > .up').click(function(){  // лево
    move_forward(s45r, s47r, tim, mps47);
    block(tim);
    testTimer (2);
    move_arrow_right(arr);
});
$('.s45_right > .right').click(function(){  // право
    none(s45r);
    block(s45a);
    arrow_ass(arr);
});
$('.s45_right > .left').click(function(){
    none(s45r);
    block(s45u);
    arrow_up(arr);
});


$('.s45_left > .up').click(function(){  // лево
    move_forward(s45l, s46l, tim, mps09);
    block(tim);
    testTimer (2);
    move_arrow_left(arr);
});
$('.s45_left > .right').click(function(){
    none(s45l);
    block(s45u);
    arrow_up(arr);
});
$('.s45_left > .left').click(function(){
    none(s45l);
    block(s45a);
    arrow_ass(arr);
});


$('.s45_ass > .right').click(function(){
    none(s45a);
    block(s45l);
    arrow_left(arr);
});
$('.s45_ass > .left').click(function(){
    none(s45a);
    block(s45r);
    arrow_right(arr);
});
//=================================================================================================

/*-- s46   */
$('.s46_up > .right').click(function(){
    none(s46u);
    block(s46r);
    arrow_right(arr);
});
$('.s46_up > .left').click(function(){
    none(s46u);
    block(s46l);
    arrow_left(arr);
});


$('.s46_right > .up').click(function(){  // лево
    move_forward(s46r, s45r, tim, mps43, mps45);
    block(tim);
    testTimer (2);
    move_arrow_right(arr);
});
$('.s46_right > .right').click(function(){  // право
    none(s46r);
    block(s46a);
    arrow_ass(arr);
});
$('.s46_right > .left').click(function(){
    none(s46r);
    block(s46u);
    arrow_up(arr);
});


$('.s46_left > .up').click(function(){  // лево
    move_forward(s46l, s09l, tim);
    block(tim);
    testTimer (2);
    move_arrow_left(arr);
});
$('.s46_left > .right').click(function(){
    none(s46l);
    block(s46u);
    arrow_up(arr);
});
$('.s46_left > .left').click(function(){
    none(s46l);
    block(s46a);
    arrow_ass(arr);
});


$('.s46_ass > .right').click(function(){
    none(s46a);
    block(s46l);
    arrow_left(arr);
});
$('.s46_ass > .left').click(function(){
    none(s46a);
    block(s46r);
    arrow_right(arr);
});
//=================================================================================================

/*-- s47   */
$('.s47_up > .right').click(function(){
    none(s47u);
    block(s47r);
    arrow_right(arr);
});
$('.s47_up > .left').click(function(){
    none(s47u);
    block(s47l);
    arrow_left(arr);
});


$('.s47_right > .up').click(function(){  // лево
    move_forward(s47r, s48r, tim, mps48);
    block(tim);
    testTimer (2);
    move_arrow_right(arr);
});
$('.s47_right > .right').click(function(){  // право
    none(s47r);
    block(s47a);
    arrow_ass(arr);
});
$('.s47_right > .left').click(function(){
    none(s47r);
    block(s47u);
    arrow_up(arr);
});


$('.s47_left > .up').click(function(){  // лево
    move_forward(s47l, s45l, tim, mps47_45);
    block(tim);
    testTimer (2);
    move_arrow_left(arr);
});
$('.s47_left > .right').click(function(){
    none(s47l);
    block(s47u);
    arrow_up(arr);
});
$('.s47_left > .left').click(function(){
    none(s47l);
    block(s47a);
    arrow_ass(arr);
});


$('.s47_ass > .right').click(function(){
    none(s47a);
    block(s47l);
    arrow_left(arr);
});
$('.s47_ass > .left').click(function(){
    none(s47a);
    block(s47r);
    arrow_right(arr);
});
//=================================================================================================

/*-- s48   */
$('.s48_up > .right').click(function(){
    none(s48u);
    block(s48r);
    arrow_right(arr);
});
$('.s48_up > .left').click(function(){
    none(s48u);
    block(s48l);
    arrow_left(arr);
});


$('.s48_right > .up').click(function(){  // лево
    move_forward(s48r, s49r, tim, mps49);
    block(tim);
    testTimer (2);
    move_arrow_right(arr);
});
$('.s48_right > .right').click(function(){  // право
    none(s48r);
    block(s48a);
    arrow_ass(arr);
});
$('.s48_right > .left').click(function(){
    none(s48r);
    block(s48u);
    arrow_up(arr);
});


$('.s48_left > .up').click(function(){  // лево
    move_forward(s48l, s47l, tim, mps9_46);
    block(tim);
    testTimer (2);
    move_arrow_left(arr);
});
$('.s48_left > .right').click(function(){
    none(s48l);
    block(s48u);
    arrow_up(arr);
});
$('.s48_left > .left').click(function(){
    none(s48l);
    block(s48a);
    arrow_ass(arr);
});


$('.s48_ass > .up').click(function(){  // лево
    move_forward(s48a, s52a, tim, mps52);
    block(tim);
    testTimer (2);
    move_arrow_down(arr);
});
$('.s48_ass > .right').click(function(){
    none(s48a);
    block(s48l);
    arrow_left(arr);
});
$('.s48_ass > .left').click(function(){
    none(s48a);
    block(s48r);
    arrow_right(arr);
});
//=================================================================================================

/*-- s49   */
$('.s49_up > .right').click(function(){
    none(s49u);
    block(s49r);
    arrow_right(arr);
});
$('.s49_up > .left').click(function(){
    none(s49u);
    block(s49l);
    arrow_left(arr);
});


$('.s49_right > .up').click(function(){  // лево
    move_forward(s49r, s50r, tim, mps50);
    block(tim);
    testTimer (2);
    move_arrow_right(arr);
});
$('.s49_right > .right').click(function(){  // право
    none(s49r);
    block(s49a);
    arrow_ass(arr);
});
$('.s49_right > .left').click(function(){
    none(s49r);
    block(s49u);
    arrow_up(arr);
});


$('.s49_left > .up').click(function(){  // лево
    move_forward(s49l, s48l, tim);
    block(tim);
    testTimer (2);
    move_arrow_left(arr);
});
$('.s49_left > .right').click(function(){
    none(s49l);
    block(s49u);
    arrow_up(arr);
});
$('.s49_left > .left').click(function(){
    none(s49l);
    block(s49a);
    arrow_ass(arr);
});


$('.s49_ass > .right').click(function(){
    none(s49a);
    block(s49l);
    arrow_left(arr);
});
$('.s49_ass > .left').click(function(){
    none(s49a);
    block(s49r);
    arrow_right(arr);
});
//=================================================================================================

/*-- s50   */
$('.s50_up > .right').click(function(){
    none(s50u);
    block(s50r);
    arrow_right(arr);
});
$('.s50_up > .left').click(function(){
    none(s50u);
    block(s50l);
    arrow_left(arr);
});


$('.s50_right > .up').click(function(){  // лево
    move_forward(s50r, s51r, tim);
    block(tim);
    testTimer (2);
    move_arrow_right(arr);
});
$('.s50_right > .right').click(function(){  // право
    none(s50r);
    block(s50a);
    arrow_ass(arr);
});
$('.s50_right > .left').click(function(){
    none(s50r);
    block(s50u);
    arrow_up(arr);
});


$('.s50_left > .up').click(function(){  // лево
    move_forward(s50l, s49l, tim);
    block(tim);
    testTimer (2);
    move_arrow_left(arr);
});
$('.s50_left > .right').click(function(){
    none(s50l);
    block(s50u);
    arrow_up(arr);
});
$('.s50_left > .left').click(function(){
    none(s50l);
    block(s50a);
    arrow_ass(arr);
});


$('.s50_ass > .right').click(function(){
    none(s50a);
    block(s50l);
    arrow_left(arr);
});
$('.s50_ass > .left').click(function(){
    none(s50a);
    block(s50r);
    arrow_right(arr);
});
//=================================================================================================

/*-- s51   */
$('.s51_up > .right').click(function(){
    none(s51u);
    block(s51r);
    arrow_right(arr);
});
$('.s51_up > .left').click(function(){
    none(s51u);
    block(s51l);
    arrow_left(arr);
});


$('.s51_right > .right').click(function(){  // право
    none(s51r);
    block(s51a);
    arrow_ass(arr);
});
$('.s51_right > .left').click(function(){
    none(s51r);
    block(s51u);
    arrow_up(arr);
});


$('.s51_left > .up').click(function(){  // лево
    move_forward(s51l, s50l, tim);
    block(tim);
    testTimer (2);
    move_arrow_left(arr);
});
$('.s51_left > .right').click(function(){
    none(s51l);
    block(s51u);
    arrow_up(arr);
});
$('.s51_left > .left').click(function(){
    none(s51l);
    block(s51a);
    arrow_ass(arr);
});


$('.s51_ass > .right').click(function(){
    none(s51a);
    block(s51l);
    arrow_left(arr);
});
$('.s51_ass > .left').click(function(){
    none(s51a);
    block(s51r);
    arrow_right(arr);
});
//=================================================================================================

/*-- s52   */
$('.s52_up > .up').click(function(){  // лево
    move_forward(s52u, s48u, tim);
    block(tim);
    testTimer (2);
    move_arrow_up(arr);
});
$('.s52_up > .right').click(function(){
    none(s52u);
    block(s52r);
    arrow_right(arr);
});
$('.s52_up > .left').click(function(){
    none(s52u);
    block(s52l);
    arrow_left(arr);
});


$('.s52_right > .right').click(function(){  // право
    none(s52r);
    block(s52a);
    arrow_ass(arr);
});
$('.s52_right > .left').click(function(){
    none(s52r);
    block(s52u);
    arrow_up(arr);
});


$('.s52_left > .right').click(function(){
    none(s52l);
    block(s52u);
    arrow_up(arr);
});
$('.s52_left > .left').click(function(){
    none(s52l);
    block(s52a);
    arrow_ass(arr);
});


$('.s52_ass > .up').click(function(){  // лево
    move_forward(s52a, s53a, tim, mps53);
    block(tim);
    testTimer (2);
    move_arrow_down(arr);
});
$('.s52_ass > .right').click(function(){
    none(s52a);
    block(s52l);
    arrow_left(arr);
});
$('.s52_ass > .left').click(function(){
    none(s52a);
    block(s52r);
    arrow_right(arr);
});
//=================================================================================================

/*-- s53   */
$('.s53_up > .up').click(function(){  // лево
    move_forward(s53u, s52u, tim, mps48, mps47, mps45);
    block(tim);
    testTimer (2);
    move_arrow_up(arr);
});
$('.s53_up > .right').click(function(){
    none(s53u);
    block(s53r);
    arrow_right(arr);
});
$('.s53_up > .left').click(function(){
    none(s53u);
    block(s53l);
    arrow_left(arr);
});


$('.s53_right > .right').click(function(){  // право
    none(s53r);
    block(s53a);
    arrow_ass(arr);
});
$('.s53_right > .left').click(function(){
    none(s53r);
    block(s53u);
    arrow_up(arr);
});


$('.s53_left > .right').click(function(){
    none(s53l);
    block(s53u);
    arrow_up(arr);
});
$('.s53_left > .left').click(function(){
    none(s53l);
    block(s53a);
    arrow_ass(arr);
});


$('.s53_ass > .up').click(function(){  // лево
    move_forward(s53a, s54a, tim, mps54);
    block(tim);
    testTimer (2);
    move_arrow_down(arr);
});
$('.s53_ass > .right').click(function(){
    none(s53a);
    block(s53l);
    arrow_left(arr);
});
$('.s53_ass > .left').click(function(){
    none(s53a);
    block(s53r);
    arrow_right(arr);
});
//=================================================================================================

/*-- s54   */
$('.s54_up > .up').click(function(){  // лево
    move_forward(s54u, s53u, tim, mps54_53);
    block(tim);
    testTimer (2);
    move_arrow_up(arr);
});
$('.s54_up > .right').click(function(){
    none(s54u);
    block(s54r);
    arrow_right(arr);
});
$('.s54_up > .left').click(function(){
    none(s54u);
    block(s54l);
    arrow_left(arr);
});


$('.s54_right > .up').click(function(){  // лево
    move_forward(s54r, s55r, tim, mps55);
    block(tim);
    testTimer (2);
    move_arrow_right(arr);
    setTimeout(function () {
        $('.map-mob2').css('visibility', 'visible')
    }, 2100)
});
$('.s54_right > .right').click(function(){  // право
    none(s54r);
    block(s54a);
    arrow_ass(arr);
});
$('.s54_right > .left').click(function(){
    none(s54r);
    block(s54u);
    arrow_up(arr);
});


$('.s54_left > .right').click(function(){
    none(s54l);
    block(s54u);
    arrow_up(arr);
});
$('.s54_left > .left').click(function(){
    none(s54l);
    block(s54a);
    arrow_ass(arr);
});


$('.s54_ass > .right').click(function(){
    none(s54a);
    block(s54l);
    arrow_left(arr);
});
$('.s54_ass > .left').click(function(){
    none(s54a);
    block(s54r);
    arrow_right(arr);
});
//=================================================================================================

/*-- s55   */
$('.s55_up > .right').click(function(){
    none(s55u);
    block(s55r);
    arrow_right(arr);
});
$('.s55_up > .left').click(function(){
    none(s55u);
    block(s55l);
    arrow_left(arr);
});


$('.s55_right > .right').click(function(){  // право
    none(s55r);
    block(s55a);
    arrow_ass(arr);
});
$('.s55_right > .left').click(function(){
    none(s55r);
    block(s55u);
    arrow_up(arr);
});


$('.s55_left > .up').click(function(){  // лево
    move_forward(s55l, s54l, tim, mps52);
    block(tim);
    testTimer (2);
    move_arrow_left(arr);
});
$('.s55_left > .right').click(function(){
    none(s55l);
    block(s55u);
    arrow_up(arr);
});
$('.s55_left > .left').click(function(){
    none(s55l);
    block(s55a);
    arrow_ass(arr);

});


$('.s55_ass > .up').click(function(){
    if($('.mob2').css('display') == 'none')
    {
        move_forward(s55a, s56a, tim, mps56r, mps56d);
        block(tim);
        testTimer (2);
        move_arrow_down(arr);
    }
    else {
        $('.mapCenterBlock').css('visibility', 'hidden');

        $('.golemon').css('display', 'block');
        $('.infoBut').css('display', 'block');

        $('.HpCpu').css('display', 'none');
        $('.HpCpu3').css('display', 'none');
        $('.HpCpu2').css('display', 'block');
        $('.HpCpu4').css('display', 'none');
        Cpu.HealGolem2 = 40;
        Cpu.HealthGolem = 300;
        Cpu.HealGolem3 = 350;
        Cpu.HealGolem4 = 300;
        $('.HpCpu2 p').html( Cpu.HealGolem2  );

        $('.displayPlayer').html(' ');
        $('.displayCpu').html(' ');
        $('#timer').css('visibility', 'hidden');
    }

});
$('.s55_ass > .right').click(function(){
    none(s55a);
    block(s55l);
    arrow_left(arr);
});
$('.s55_ass > .left').click(function(){
    none(s55a);
    block(s55r);
    arrow_right(arr);
});
//=================================================================================================

/*-- s56   */
$('.s56_up > .up').click(function(){  // лево
    move_forward(s56u, s55u, tim, mps53);
    block(tim);
    testTimer (2);
    move_arrow_up(arr);
});
$('.s56_up > .right').click(function(){
    none(s56u);
    block(s56r);
    arrow_right(arr);
});
$('.s56_up > .left').click(function(){
    none(s56u);
    block(s56l);
    arrow_left(arr);
});


$('.s56_right > .up').click(function(){  // лево
    move_forward(s56r, s57r, tim, mps57);
    block(tim);
    testTimer (2);
    move_arrow_right(arr);
});
$('.s56_right > .right').click(function(){  // право
    none(s56r);
    block(s56a);
    arrow_ass(arr);
});
$('.s56_right > .left').click(function(){
    none(s56r);
    block(s56u);
    arrow_up(arr);
});


$('.s56_left > .right').click(function(){
    none(s56l);
    block(s56u);
    arrow_up(arr);
});
$('.s56_left > .left').click(function(){
    none(s56l);
    block(s56a);
    arrow_ass(arr);
});


$('.s56_ass > .up').click(function(){  // лево
    move_forward(s56a, s60a, tim, mps60, mps61);
    block(tim);
    testTimer (2);
    move_arrow_down(arr);
});
$('.s56_ass > .right').click(function(){
    none(s56a);
    block(s56l);
    arrow_left(arr);
});
$('.s56_ass > .left').click(function(){
    none(s56a);
    block(s56r);
    arrow_right(arr);
});
//=================================================================================================

/*-- s57   */
$('.s57_up > .right').click(function(){
    none(s57u);
    block(s57r);
    arrow_right(arr);
});
$('.s57_up > .left').click(function(){
    none(s57u);
    block(s57l);
    arrow_left(arr);
});


$('.s57_right > .up').click(function(){  // лево
    move_forward(s57r, s58r, tim, mps58);
    block(tim);
    testTimer (2);
    move_arrow_right(arr);
});
$('.s57_right > .right').click(function(){  // право
    none(s57r);
    block(s57a);
    arrow_ass(arr);
});
$('.s57_right > .left').click(function(){
    none(s57r);
    block(s57u);
    arrow_up(arr);
});


$('.s57_left > .up').click(function(){  // лево
    move_forward(s57l, s56l, tim);
    block(tim);
    testTimer (2);
    move_arrow_left(arr);
});
$('.s57_left > .right').click(function(){
    none(s57l);
    block(s57u);
    arrow_up(arr);
});
$('.s57_left > .left').click(function(){
    none(s57l);
    block(s57a);
    arrow_ass(arr);
});


$('.s57_ass > .right').click(function(){
    none(s57a);
    block(s57l);
    arrow_left(arr);
});
$('.s57_ass > .left').click(function(){
    none(s57a);
    block(s57r);
    arrow_right(arr);
});
//=================================================================================================

/*-- s58   */
$('.s58_up > .right').click(function(){
    none(s58u);
    block(s58r);
    arrow_right(arr);
});
$('.s58_up > .left').click(function(){
    none(s58u);
    block(s58l);
    arrow_left(arr);
});


$('.s58_right > .up').click(function(){  // лево
    move_forward(s58r, s59r, tim);
    block(tim);
    testTimer (2);
    move_arrow_right(arr);
});
$('.s58_right > .right').click(function(){  // право
    none(s58r);
    block(s58a);
    arrow_ass(arr);
});
$('.s58_right > .left').click(function(){
    none(s58r);
    block(s58u);
    arrow_up(arr);
});


$('.s58_left > .up').click(function(){  // лево
    move_forward(s58l, s57l, tim);
    block(tim);
    testTimer (2);
    move_arrow_left(arr);
});
$('.s58_left > .right').click(function(){
    none(s58l);
    block(s58u);
    arrow_up(arr);
});
$('.s58_left > .left').click(function(){
    none(s58l);
    block(s58a);
    arrow_ass(arr);
});


$('.s58_ass > .right').click(function(){
    none(s58a);
    block(s58l);
    arrow_left(arr);
});
$('.s58_ass > .left').click(function(){
    none(s58a);
    block(s58r);
    arrow_right(arr);
});
//=================================================================================================

/*-- s59   */
$('.s59_up > .right').click(function(){
    none(s59u);
    block(s59r);
    arrow_right(arr);
});
$('.s59_up > .left').click(function(){
    none(s59u);
    block(s59l);
    arrow_left(arr);
});


$('.s59_right > .right').click(function(){  // право
    none(s59r);
    block(s59a);
    arrow_ass(arr);
});
$('.s59_right > .left').click(function(){
    none(s59r);
    block(s59u);
    arrow_up(arr);
});


$('.s59_left > .up').click(function(){  // лево
    move_forward(s59l, s58l, tim);
    block(tim);
    testTimer (2);
    move_arrow_left(arr);
});
$('.s59_left > .right').click(function(){
    none(s59l);
    block(s59u);
    arrow_up(arr);
});
$('.s59_left > .left').click(function(){
    none(s59l);
    block(s59a);
    arrow_ass(arr);
});


$('.s59_ass > .right').click(function(){
    none(s59a);
    block(s59l);
    arrow_left(arr);
});
$('.s59_ass > .left').click(function(){
    none(s59a);
    block(s59r);
    arrow_right(arr);
});
//=================================================================================================

/*-- s60   */
$('.s60_up > .up').click(function(){
    if($('.mob2').css('display') == 'none')
    {
        move_forward(s60u, s56u, tim, mps56r, mps55);
        block(tim);
        testTimer (2);
        move_arrow_up(arr);
    }
    else {
        $('.mapCenterBlock').css('visibility', 'hidden');

        $('.golemon').css('display', 'block');
        $('.infoBut').css('display', 'block');

        $('.HpCpu').css('display', 'none');

        $('.HpCpu2').css('display', 'block');
        //-----------------------------------------------------------------------

        Cpu.HealGolem3 = 350;
        Cpu.HealGolem4 = 350;
        Cpu.HealthGolem = 900;
        Cpu.HealGolem2 = 50;
        $('.HpCpu2 p').html( Cpu.HealGolem2  );
        /*- поскольку отнимает жизни у всех мобов одноврименно, нужно что бы у других неактивных не дошло до 0, им нужно обновлять жизн*/

        $('.displayPlayer').html(' ');
        $('.displayCpu').html(' ');
        $('#timer').css('visibility', 'hidden');
    }

});
$('.s60_up > .right').click(function(){
    none(s60u);
    block(s60r);
    arrow_right(arr);
});
$('.s60_up > .left').click(function(){
    none(s60u);
    block(s60l);
    arrow_left(arr);
});


$('.s60_right > .right').click(function(){  // право
    none(s60r);
    block(s60a);
    arrow_ass(arr);
});
$('.s60_right > .left').click(function(){
    none(s60r);
    block(s60u);
    arrow_up(arr);
});


$('.s60_left > .up').click(function(){  // лево
    move_forward(s60l, s61l, tim, mps62);
    block(tim);
    testTimer (2);
    move_arrow_left(arr);
});
$('.s60_left > .right').click(function(){
    none(s60l);
    block(s60u);
    arrow_up(arr);
});
$('.s60_left > .left').click(function(){
    none(s60l);
    block(s60a);
    arrow_ass(arr);
});


$('.s60_ass > .right').click(function(){
    none(s60a);
    block(s60l);
    arrow_left(arr);
});
$('.s60_ass > .left').click(function(){
    none(s60a);
    block(s60r);
    arrow_right(arr);
});
//=================================================================================================

/*-- s61   */
$('.s61_up > .right').click(function(){
    none(s61u);
    block(s61r);
    arrow_right(arr);
});
$('.s61_up > .left').click(function(){
    none(s61u);
    block(s61l);
    arrow_left(arr);
});


$('.s61_right > .up').click(function(){  // лево
    move_forward(s61r, s60r, tim, mps61_60);
    block(tim);
    testTimer (2);
    move_arrow_right(arr);
    setTimeout(function () {
        $('.map-mob2').css('visibility', 'visible')
    }, 2100)

});
$('.s61_right > .right').click(function(){  // право
    none(s61r);
    block(s61a);
    arrow_ass(arr);
});
$('.s61_right > .left').click(function(){
    none(s61r);
    block(s61u);
    arrow_up(arr);
});


$('.s61_left > .up').click(function(){  // лево
    move_forward(s61l, s62l, tim, mps62);
    block(tim);
    testTimer (2);
    move_arrow_left(arr);
});
$('.s61_left > .right').click(function(){
    none(s61l);
    block(s61u);
    arrow_up(arr);
});
$('.s61_left > .left').click(function(){
    none(s61l);
    block(s61a);
    arrow_ass(arr);
});


$('.s61_ass > .right').click(function(){
    none(s61a);
    block(s61l);
    arrow_left(arr);
});
$('.s61_ass > .left').click(function(){
    none(s61a);
    block(s61r);
    arrow_right(arr);
});
//=================================================================================================

/*-- s62   */
$('.s62_up > .right').click(function(){
    none(s62u);
    block(s62r);
    arrow_right(arr);
});
$('.s62_up > .left').click(function(){
    none(s62u);
    block(s62l);
    arrow_left(arr);
});


$('.s62_right > .up').click(function(){  // лево
    move_forward(s62r, s61r, tim, mps60, mps60d);
    block(tim);
    testTimer (2);
    move_arrow_right(arr);
});
$('.s62_right > .right').click(function(){  // право
    none(s62r);
    block(s62a);
    arrow_ass(arr);
});
$('.s62_right > .left').click(function(){
    none(s62r);
    block(s62u);
    arrow_up(arr);
});


$('.s62_left > .up').click(function(){  // лево
    move_forward(s62l, s63l, tim);
    block(tim);
    testTimer (2);
    move_arrow_left(arr);
});
$('.s62_left > .right').click(function(){
    none(s62l);
    block(s62u);
    arrow_up(arr);
});
$('.s62_left > .left').click(function(){
    none(s62l);
    block(s62a);
    arrow_ass(arr);
});


$('.s62_ass > .right').click(function(){
    none(s62a);
    block(s62l);
    arrow_left(arr);
});
$('.s62_ass > .left').click(function(){
    none(s62a);
    block(s62r);
    arrow_right(arr);
});
//=================================================================================================

/*-- s63   */
$('.s63_up > .right').click(function(){
    none(s63u);
    block(s63r);
    arrow_right(arr);
});
$('.s63_up > .left').click(function(){
    none(s63u);
    block(s63l);
    arrow_left(arr);
});


$('.s63_right > .up').click(function(){  // лево
    move_forward(s63r, s62r, tim, mps61);
    block(tim);
    testTimer (2);
    move_arrow_right(arr);
});
$('.s63_right > .right').click(function(){  // право
    none(s63r);
    block(s63a);
    arrow_ass(arr);
});
$('.s63_right > .left').click(function(){
    none(s63r);
    block(s63u);
    arrow_up(arr);
});


$('.s63_left > .up').click(function(){  // лево
    move_forward(s63l, s03l, tim);
    block(tim);
    testTimer (2);
    move_arrow_left(arr);
});
$('.s63_left > .right').click(function(){
    none(s63l);
    block(s63u);
    arrow_up(arr);
});
$('.s63_left > .left').click(function(){
    none(s63l);
    block(s63a);
    arrow_ass(arr);
});


$('.s63_ass > .right').click(function(){
    none(s63a);
    block(s63l);
    arrow_left(arr);
});
$('.s63_ass > .left').click(function(){
    none(s63a);
    block(s63r);
    arrow_right(arr);
});
//=================================================================================================

