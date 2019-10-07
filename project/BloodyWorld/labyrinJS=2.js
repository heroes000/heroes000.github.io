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

    if($('.mo4').css('display') ==  'none')
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