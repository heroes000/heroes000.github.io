$(function() {

    //-- Menu
    $(".toggle-mnu").click(function(){
    	$(this).toggleClass("on");
    	$(".main-mnu").slideToggle();
    });

    $(".main-footer .toggle-mnu").click(function() {
		$("html, body").animate({ scrollTop: $(document).height() }, "slow");
		return false;
	});

    //--- Стрелки вниз - вверх
	$(".top").click(function() {
		$("html, body").animate({ scrollTop: 0 }, "slow");
		return false;
	});

	$(".arrow-bottom").click(function() {
		$("html, body").animate({ scrollTop: $(".main-head").height()+120 }, "slow");
		return false;
	});
    //----- End Menu ----------------------

    //-- Создание колонок одинаковой высоты
	$(".section_1 .section-content .info-item").equalHeights();
	$(".section_3 .section-content .info-item").equalHeights();
	$(".s1-bottom .info-item").equalHeights();
	$(".s2-item").equalHeights();
	$(".s2-item .img-wrap").equalHeights();
	// $(".cards .card").equalHeights();
  
//--- Анимация SVG
	// var waypointsvg = new Waypoint({

	// 	element: $(".section_5"),
	// 	handler: function(dir) {
			
	// 		if (dir === "down") {

	// 			$(".section_5 .tc-item").each(function(index) {
	// 				var ths = $(this);
	// 				setTimeout(function() {

	// 					var myAnimation = new DrawFillSVG({
	// 						elementId: "tc-svg-" + index
	// 					});
	// 					ths.children(".tc-content").addClass("tc-content-on");
	// 				}, 500*index);
	// 			});
	// 		};
	// 		this.destroy();
	// 	},
	// 	offset: '35%'
	// });
  
    //--- Карусель ---
	$(".slider").owlCarousel({
		items : 1,
		nav : true,
		navText : "",
		loop : true,
		autoplay : true,
		autoplayHoverPause : true,
		fluidSpeed : 600,
		autoplaySpeed : 600,
		navSpeed : 600,
		dotsSpeed : 600,
		dragEndSpeed : 600
	});
    //---------------------
    

    //--- Анимация --------

    //--- Анимация всех заголовков Секций
   	$(".section-head h2, .section-head p").animated("fadeIn");	

    //--- Section 1
    $(".info-item-wrap").animated("zoomIn");
 
    //--- Section 2
    $(".section_2").waypoint(function() {
		$(".s2-item-wrap").each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.addClass("on");
			}, 200*index);
		});
	}, {
		offset : "30%"
	});
    
    //--- Анимация карт Section 4, плагин waypoints
	$(".section_4").waypoint(function() {

		// $(".section_4 .card").each(function(index) {
		// 	var ths = $(this);
		// 	setInterval(function() {
				$(".section_4 .card").removeClass("card-off").addClass("card-on");
	// 		}, 200*index);
	// 	});

	// }, {
	// 	offset : "20%"
	});

     //--- Section 5 + Анимация SVG
    $(".section_5").waypoint(function() {

    	$(".section_5 .tc-item").each(function(index) {
    		var ths = $(this);
    	    setTimeout(function() {
    		  var myAnimation = new DrawFillSVG({
				elementId: "tc-svg-" + index
			});
			ths.children(".tc-content").addClass("tc-content-on");
    	}, 300*index); 	
    });
    this.destroy();
});

     //--- Section 6
	$(".section_6").waypoint(function() {

		$(".section_6 .team").each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.removeClass("team-off").addClass("team-on");
			}, 200*index);
		});

	}, {
		offset : "35%"
	});

    //--- Section 7
	$(".slider .slide").animated("fadeIn");

	//--- Section 8
	$(".homesect.section_8 .forms").animated("fadeInRight");
	$(".homesect.section_8 .p").animated("fadeIn");

	$(".section_8").waypoint(function() {
		$(".s8-item").each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.addClass("on");
			}, 200*index);
		});
	}, {
		offset : "30%"
	});

	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("../img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};


    //-- Скрытая форма
	$(".homesect .section-bottom .buttons").click(function() {
		$("#callback h4").html($(this).text());
		// $("#callback input[name=formname]").val($(this).text());
	}).magnificPopup({
		type:"inline",
		mainClass: 'mfp-forms'
	});

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$(".forms").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "/mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});
