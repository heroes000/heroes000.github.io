var f = document.forms.Form;

f.onchange = function(){
    var n = f.querySelectorAll('[type="checkbox"]'),
        l = f.querySelectorAll('[type="checkbox"]:checked');
    for(var j=0; j<n.length; j++)
        if (l.length >= 1) { // если отметить три и более галочки
            n[j].disabled = true; // все чекбоксы становятся disabled
            for(var i=0; i<l.length; i++)
                l[i].disabled = false; // но disabled убирается с помеченных галочками чекбоксов
        } else {
            n[j].disabled = false; // если выделить менее трёх галочек, то disabled снимается со всех чекбоксов
        }
};
/*================== Для checkbox ======================================================*/
/*- функция - кнопка стает неактивной если выбрана только один переключатель радио
 и становится активной только если включена кнопка на игроке и на cpu-*/
function G(){

    if ($('.radioPlay').is(':checked') && $('.radioCpu').is(':checked')){
        $('.ButImage').attr('disabled', false);
    } else {
        $('.ButImage').attr('disabled', true);
    }
}

/*----------------- Данные Игрока ------------------------------------*/
var Player = {
    Name: '<span class="ColorNamePlayer"><p style="display:inline">Каратель</p></span>',
    HealthPlayer: 180,

    DisplAttack: "3-5",
    DisplPower: "20",

    /*------- Описание ударов под Голема --------------------*/
    AttackHead: '<p style="display:inline">смог пробить подбородок Голема',
    AttackBody: '<p style="display:inline">нанес удар в грудь Голема',
    AttackArmLeft: '<p style="display:inline">пробил твердую левую руку Голема',
    AttackArmRigth: '<p style="display:inline">достал ударом по правой руке Голема',
    AttackLeg: '<p style="display:inline">нанес сильный удар в бедро Голема',

    Blockhed: '<p style="display:inline">заблокировал удар в голову',
    BlockBody: '<p style="display:inline">сумел остановить удар в туловище',
    BlockLeg: '<p style="display:inline">уклонился от удара по ногам',

    KritHead: '<span class="KritAttack">' +
    '<p style="display:inline">' +
    'нанес критический удар в голову</span>',

    KritBody: '<span class="KritAttack">' +
    '<p style="display:inline">' +
    'нанес сокрушительный удар в туловище</span>',

    KritLeg: '<span class="KritAttack">' +
    '<p style="display:inline">' +
    'критический удар по ногам</span>',

    KritRigArm: '<span class="KritAttack">' +
    '<p style="display:inline">' +
    'ответил сильнейшим ударом по правой руке</span>',

    KritLeftArm: '<span class="KritAttack">' +
    '<p style="display:inline">' +
    'нанес критический удар в левую руку</span>'
};
/*-----------------------------------------------------------------------*/
/*----------------Данные СPU Голема---------------------------------------------*/
/*-------- Текст, удары бота ----------*/
var textCp = [
    '<p style="display:inline">ударил рукой по голове',
    '<p style="display:inline">нанес удар кулаком в туловище',
    '<p style="display:inline">достал по ногам рукой'
];
var textCpHead = [

    '<p style="display:inline">нанес рукой удар в туловище',
    '<p style="display:inline">достал рукой по ногам '
];
var textCpBody = [
    '<p style="display:inline">ударил кулаком по голове',

    '<p style="display:inline">достал рукой по ногам'
];
var textCpLeg = [
    '<p style="display:inline">ударил рукой по голове',
    '<p style="display:inline">нанес удар в туловище'

];
/*======================================================================================*/
var Cpu = {
    HealthGolem: 90,
    HealGolem2: 150,
    HealGolem3: 150,
    HealGolem4: 150,
    NameCpu: '<span class="ColorNameCpuAtk"><p style="display:inline">Голем</p></span>',
    NameCpuBlock: '<span class="ColorNameCpuBlock"><p style="display:inline">Голема</p></span>',

    DispAtackCpu: '4-6',

    /*------- Описание блока Голема-----------------*/
    BlockHead: '<p style="display:inline">Не пробил защиту головы',
    BlockBody: '<p style="display:inline">Крепкая защита туловища Голема не пробита',
    BlockLeg: '<p style="display:inline">Жалкий удар не пробил защиту ног Голема',
    BlockArmLeft: '<p style="display:inline">Голем легко отбил удар левой рукой',
    BlockArmRigh: '<p style="display:inline">Не пробил Голема в правую руку'

};
/*------------------------------------------------------------------------*/

/*========================= Дисплей параметров ========================================================================*/
/*- HP -*/
$('.HpPlayer p').html(Player.HealthPlayer );

/*- Характеристики -*/
$('.ATKplay').html('Атака: ' + '7-17' );
$('.KritParam').html('Криический удар: ' + '20%' );
/*-------------------------------------------------------------------*/

/*- Cpu -*/
$('.HpCpu p').html(Cpu.HealthGolem );
$('.HpCpu2 p').html(Cpu.HealGolem2);
$('.HpCpu3 p').html(Cpu.HealGolem3);
$('.HpCpu4 p').html(Cpu.HealGolem4);

/*- Характеристики -*/
$('.ATKcpu').html('Атака: ' + '6-14' );
$('.blockCpu').html('Шанс блока: ' + '50%' );
/*================Функция запускается при нажатии кнопки=========================================================*/

function Battle(c) {

    /*--- Рандомный урон Игрока, Дисплей жизней ---------*/
    var DmgPlayer = damage(7, 17);
    var DmgSkel = damageScelet(6, 14);

    /*----------- Блок -*/
    var BloSke = BlockSkel(1, 6);

    /*----- Критический удар -------*/
    var Krit = damage(1, 10);

    /*-- для условия 1 - это 10% шанса--*/
    var KritAtk = DmgPlayer;
    var Kritdamage = KritAtk * 2;


    /*------ Проверка на отмечена ли кнопка -------------------------*/
    if ($(".radioCpu:checked").size() > 0) {


        /*--------------------- SWITCH -- Выбор, куда бить ----------------------------------------------------------------*/
        var fade = $('.FormCpu input:radio:checked').val();
        switch (fade) {
            /*-- Голова --*/
            case 'head':
                /* Шанс Блока */
                if (BloSke == 1 || BloSke == 2 || BloSke == 3) {
                        $('.displayPlayer').html(Cpu.BlockHead +'<span style="color: blue;">' +' 0'+ '</span>');
                }
                /* Шанс крита */
                else if (Krit == 1 || Krit == 2) { /* Шанс 20% */
                    Cpu.HealthGolem -= Kritdamage;
                    Cpu.HealGolem2-= Kritdamage;
                    Cpu.HealGolem3-= Kritdamage;
                    Cpu.HealGolem4-= Kritdamage;
                    AnimateHPcpu();
                    $('.displayPlayer').html(Player.Name + ' ' + Player.KritHead + ' -' +'<span style="color: darkgoldenrod;">' +Kritdamage+ '</span>');
                    $('.cpuDmgDisplay p').html('- '+ Kritdamage); /* урон под жизнями */

                }
                /* базовая атака */
                else {
                        Cpu.HealthGolem -= DmgPlayer;
                        Cpu.HealGolem2 -= DmgPlayer;
                        Cpu.HealGolem3 -= DmgPlayer;
                        Cpu.HealGolem4 -= DmgPlayer;
                        AnimateHPcpu();
                        $('.displayPlayer').html(Player.Name + ' ' + Player.AttackHead + ' ' + ' -' +'<span style="color: red;">' +DmgPlayer+ '</span>');
                        $('.cpuDmgDisplay p').html('- '+ DmgPlayer ); /* урон под жизнями */
                }
                break;
            /*-- Туловище --*/
            case 'body':
                if (BloSke == 1 || BloSke == 2 || BloSke == 3) {

                        $('.displayPlayer').html(Cpu.BlockBody +'<span style="color: blue;">' +' 0'+ '</span>');
                }
                else if (Krit == 1 || Krit == 2) {
                    Cpu.HealthGolem -= Kritdamage;
                    Cpu.HealGolem2-= Kritdamage;
                    Cpu.HealGolem3-= Kritdamage;
                    Cpu.HealGolem4-= Kritdamage;
                    AnimateHPcpu();
                    $('.displayPlayer').html(Player.Name + ' ' + Player.KritBody + ' -' +'<span style="color: darkgoldenrod;">' +Kritdamage+ '</span>');
                    $('.cpuDmgDisplay p').html('- '+ Kritdamage); /* урон под жизнями */
                }
                else {
                        Cpu.HealthGolem -= DmgPlayer;
                        Cpu.HealGolem2 -= DmgPlayer;
                        Cpu.HealGolem3 -= DmgPlayer;
                        Cpu.HealGolem4 -= DmgPlayer;
                        $('.displayPlayer').html(Player.Name + ' ' + Player.AttackBody + ' -' +'<span style="color: red;">' +DmgPlayer+ '</span>');
                        AnimateHPcpu();
                        $('.cpuDmgDisplay p').html('- '+ DmgPlayer ); /* урон под жизнями */
                }
                break;

            /*-- Ноги --*/
            case 'leg':

                if (BloSke == 1 || BloSke == 2 || BloSke == 3) {
                        $('.displayPlayer').html(Cpu.BlockLeg +'<span style="color: blue;">' +' 0'+ '</span>');
                }
                else if (Krit == 1 || Krit == 2) {
                    Cpu.HealthGolem -= Kritdamage;
                    Cpu.HealGolem2-= Kritdamage;
                    Cpu.HealGolem3-= Kritdamage;
                    Cpu.HealGolem4-= Kritdamage;
                    AnimateHPcpu();
                    $('.displayPlayer').html(Player.Name + ' ' + Player.KritLeg + ' -' +'<span style="color: darkgoldenrod;">' +Kritdamage+ '</span>');
                    $('.cpuDmgDisplay p').html('- '+ Kritdamage); /* урон под жизнями */
                }
                else {
                        Cpu.HealthGolem -= DmgPlayer;
                        Cpu.HealGolem2 -= DmgPlayer;
                        Cpu.HealGolem3 -= DmgPlayer;
                        Cpu.HealGolem4 -= DmgPlayer;
                        AnimateHPcpu();
                        $('.displayPlayer').html(Player.Name + ' ' + Player.AttackLeg + ' -' +'<span style="color: red;">' +DmgPlayer+ '</span>');
                        $('.cpuDmgDisplay p').html('- '+ DmgPlayer ); /* урон под жизнями */
                }
                break;

            /*-- Правая рука --*/
            case 'rigtArm':

                if (BloSke == 1 || BloSke == 2 || BloSke == 3) {
                        $('.displayPlayer').html(Cpu.BlockArmRigh +'<span style="color: blue;">' +' 0'+ '</span>');
                }
                else if (Krit == 1 || Krit == 2) {
                    Cpu.HealthGolem -= Kritdamage;
                    Cpu.HealGolem2-= Kritdamage;
                    Cpu.HealGolem3-= Kritdamage;
                    Cpu.HealGolem4-= Kritdamage;
                    AnimateHPcpu();
                    $('.displayPlayer').html(Player.Name + ' ' + Player.KritRigArm + ' -' +'<span style="color: darkgoldenrod;">' +Kritdamage+ '</span>');
                    $('.cpuDmgDisplay p').html('- '+ Kritdamage); /* урон под жизнями */

                }
                else {
                        Cpu.HealthGolem -= DmgPlayer;
                        Cpu.HealGolem2 -= DmgPlayer;
                        Cpu.HealGolem3 -= DmgPlayer;
                        Cpu.HealGolem4 -= DmgPlayer;
                        AnimateHPcpu();
                        $('.displayPlayer').html(Player.Name + ' ' + Player.AttackArmRigth + ' -' +'<span style="color: red;">' +DmgPlayer+ '</span>');
                        $('.cpuDmgDisplay p').html('- '+ DmgPlayer ); /* урон под жизнями */
                }
                break;

            /*-- Левая рука --*/
            case 'leftArm':

                if (BloSke == 1 || BloSke == 2 || BloSke == 3) {
                        $('.displayPlayer').html(Cpu.BlockArmLeft +'<span style="color: blue;">' +' 0'+ '</span>');
                }
                else if (Krit == 1 || Krit == 2) {
                    Cpu.HealthGolem -= Kritdamage;
                    Cpu.HealGolem2-= Kritdamage;
                    Cpu.HealGolem3-= Kritdamage;
                    Cpu.HealGolem4-= Kritdamage;
                    AnimateHPcpu();
                    $('.displayPlayer').html(Player.Name + ' ' + Player.KritLeftArm + ' -' +'<span style="color: darkgoldenrod;">' +Kritdamage+ '</span>');
                    $('.cpuDmgDisplay p').html('- '+ Kritdamage); /* урон под жизнями */

                }
                else {
                        Cpu.HealthGolem -= DmgPlayer;
                        Cpu.HealGolem2 -= DmgPlayer;
                        Cpu.HealGolem3 -= DmgPlayer;
                        Cpu.HealGolem4 -= DmgPlayer;
                        AnimateHPcpu();
                        $('.displayPlayer').html(Player.Name + ' ' + Player.AttackArmLeft + ' -' +'<span style="color: red;">' +DmgPlayer+ '</span>');
                        $('.cpuDmgDisplay p').html('- '+ DmgPlayer );
                }
                break;
        }
        /*- если не отмечена кнопка -*/
    } else {
        alert("Выберете куда атаковать Скелета");
    }
    /*=================== Конец Switch =====================================================================*/

    var atk = damageScelet(1, 3);
    var RandAtCpuHead = textCpHead[Math.floor(Math.random() * textCpHead.length)];
    var RandAtCpuBody = textCpBody[Math.floor(Math.random() * textCpBody.length)];
    var RandAtCpuLeg = textCpLeg[Math.floor(Math.random() * textCpLeg.length)];
    /*-------------------------------------------------------------------------------------------*/
    /*- Проверка на отмеченость кнопки -*/
    if ($(".radioPlay:checked").size() > 0) {


        var fa = $('.form2 input:radio:checked').val();
        switch (fa) {
            case 'headPla':
                if (atk == 1) {
                    setTimeout(function () {
                        $('.displayCpu').html(Player.Name + ' ' + Player.Blockhed +'<span style="color: blue;">' +' 0'+ '</span>');
                    }, 1800);
                }
                else {
                    setTimeout(function () {
                        Player.HealthPlayer -= DmgSkel;
                        $('.displayCpu').html(Cpu.NameCpu + ' ' + RandAtCpuHead + ' -' +'<span style="color: red;">' +DmgSkel+ '</span>');
                            AnimateHPlayer();
                            $('.playDmgDisplay p').html('- ' + DmgSkel);

                    }, 1800);
                }
                break;

            case 'bodyPla':
                if (atk == 2) {
                    setTimeout(function () {
                        $('.displayCpu').html(Player.Name + ' ' + Player.BlockBody +'<span style="color: blue;">' +' 0'+ '</span>');
                    }, 1800);

                } else {
                    setTimeout(function () {
                        Player.HealthPlayer -= DmgSkel;
                        $('.displayCpu').html(Cpu.NameCpu + ' ' + RandAtCpuBody + ' -' +'<span style="color: red;">' +DmgSkel+ '</span>');
                            AnimateHPlayer();
                            $('.playDmgDisplay p').html('- ' + DmgSkel);

                    }, 1800);

                }
                break;

            case 'legPla':
                if (atk == 3) {
                    setTimeout(function () {
                        $('.displayCpu').html(Player.Name + ' ' + Player.BlockLeg +'<span style="color: blue;">' +' 0'+ '</span>');
                    }, 1800);

                } else {
                    setTimeout(function () {
                        Player.HealthPlayer -= DmgSkel;
                        $('.displayCpu').html(Cpu.NameCpu + ' ' + RandAtCpuLeg + ' -' +'<span style="color: red;">' +DmgSkel+ '</span>');
                            AnimateHPlayer();
                            $('.playDmgDisplay p').html('- ' + DmgSkel);

                    }, 1800);


                }
                break;
        }
        /*- Если кнопка Игроке не отмечена -*/
    } else {
        $('.ButImage').disabled = 'disabled';
        alert("Выберете точку защиты");
    }

    /*- Сброс кнопок после нажатия на кнопку -*/
    $('input:radio').removeAttr('checked');
    $('input[type=checkbox]').attr('checked', false);
    /*-------------------------------- getElementsByClassName ------------------------------------*/

    if (Player.HealthPlayer <= 0) {
        document.getElementById('my_window_lose').style.display = 'block';
    }



    if (Cpu.HealthGolem <= 0) {
        document.getElementById('window_win_gol').style.display = 'block';
    }
    if (Cpu.HealGolem2 <= 0) {
        document.getElementById('window_win_gol2').style.display = 'block';
    }
    if (Cpu.HealGolem3 <= 0) {
        document.getElementById('window_win_gol3').style.display = 'block';
    }
    if (Cpu.HealGolem4 <= 0) {
        document.getElementById('window_win_gol4').style.display = 'block';
    }
}


/*-------- Рандомный урон, блок игрока и бота ----------------------------------*/
function damage(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
/*---- Скелет ----*/
/*- Урон -*/
function damageScelet(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
/*- Блок -*/
function BlockSkel(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

/*============ Скрытие-открытие урона под жизнями ===================================================*/
/*--------- Игрок ---------------*/
$(document).ready(function() {
    $(".ButImage").click(function () {

        $('.displayCpu').html(' ');


        $('.playDmgDisplay').animate(
            {
                top: 180,
                opacity: '0.5'
            },
            3500, function() {
                $(this).removeAttr('style'); /* Сброс анимации*/
                $('.playDmgDisplay p').html(' '); /* что бы после анимации не показывало урон */
            });
    });
});

/*-------------- Скелет ---------------*/
$(document).ready(function() {
    $(".ButImage").click(function () {
        $('.cpuDmgDisplay').animate(
            {
                top: 180,
                opacity: '0.5'
            },
            3500,function() {
                $(this).removeAttr('style'); /* Сброс анимации*/
                $('.cpuDmgDisplay p').html(' '); /* что бы после анимации не показывало урон */
            });
    })
});

/*============ Скрытие-открытие БЛОКА под жизнями ===================================================*/
/*--------- Игрок ---------------*
$(document).ready(function() {
    $(".ButImage").click(function () {
        $('.playBLOCKDisplay').animate(
            {
                opacity: '0.1'
            },
            3000, function() {
                $(this).removeAttr('style');
                $('.playBLOCKDisplay p').html(' ');
            });
    })
});

/*-------------- Скелет ---------------*
$(document).ready(function() {
    $(".ButImage").click(function () {

        $('.cpuBLOCKDisplay').animate(
            {
                opacity: '0.1'
            },
            3000,function() {
                $(this).removeAttr('style');
                $('.cpuBLOCKDisplay p').html(' ');
            });
    })
});
/*-----------------------------------------------------------------------------------------------*/
/*-- Анимация жизней при уроне --*/
function AnimateHPlayer(){
    $('.HpPlayer p').html( Player.HealthPlayer ).css('transition', 'transform .3s' ).css('transform', 'scale(1.4)').css('color', 'red');
    setTimeout(function () {
        $('.HpPlayer p').css('transition', 'transform .5s' ).css('transform', 'scale(1)').css('color', 'white');
    }, 700)
}

function AnimateHPcpu(){

    $('.HpCpu p').html( Cpu.HealthGolem ).css('transition', 'transform .3s' ).css('transform', 'scale(1.4)').css('color', 'red');
    $('.HpCpu2 p').html( Cpu.HealGolem2 ).css('transition', 'transform .3s' ).css('transform', 'scale(1.4)').css('color', 'red');
    $('.HpCpu3 p').html( Cpu.HealGolem3 ).css('transition', 'transform .3s' ).css('transform', 'scale(1.4)').css('color', 'red');
    $('.HpCpu4 p').html( Cpu.HealGolem4 ).css('transition', 'transform .3s' ).css('transform', 'scale(1.4)').css('color', 'red');

    setTimeout(function () {
        $('.HpCpu p').css('transition', 'transform .5s' ).css('transform', 'scale(1)').css('color', 'white');
    }, 700);
    setTimeout(function () {
        $('.HpCpu2 p').css('transition', 'transform .5s' ).css('transform', 'scale(1)').css('color', 'white');
    }, 700);
    setTimeout(function () {
        $('.HpCpu3 p').css('transition', 'transform .5s' ).css('transform', 'scale(1)').css('color', 'white');
    }, 700);
    setTimeout(function () {
        $('.HpCpu4 p').css('transition', 'transform .5s' ).css('transform', 'scale(1)').css('color', 'white');
    }, 700);
}

