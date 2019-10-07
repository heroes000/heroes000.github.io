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
    move_forward(s42a, s43a, tim, mps42);
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
        $('.CenterBlock').css('display', 'block');
        $('.infoBut').css('display', 'block');
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
        Cpu.HealGolem2 = 5;
        $('.HpCpu2 p').html( Cpu.HealGolem2  );
        /*- поскольку отнимает жизни у всех мобов одноврименно, нужно что бы у других неактивных не дошло до 0, им нужно обновлять жизн*/

        $('.displayPlayer').html(' ');
        $('.displayCpu').html(' ');
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

