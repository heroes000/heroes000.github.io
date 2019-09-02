$(document).ready(function() {


    $('.popup').magnificPopup({type:'image'});
	$('.popup_c').magnificPopup();

	$.stellar({
		responsive: true,
		horizontalOffset: 55
	});

    $(".owl-carousel").owlCarousel({
    	loop : true,
    	responsive : {
    		0 : {
    			items : 1,
    			nav : true
    		}
    	},
    	navText : ""
    });
	
	// Делает высоту картинки равной высоты окна
	function wResize(){
       $("header").css("min-height", $(window).height());
	};
	wResize();

	$(window).resize(function(){
		wResize();
	});

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#form").submit(function(e) {
		e.preventDefault;
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				var magnificPopup = $.magnificPopup.instance; 
				// save instance in magnificPopup variable
				magnificPopup.close(); 
				// Close popup that is currently opened
			}, 1000);
		});
	});


    // -- Вкладки
	 
	$(".top_phone .wrapper .tab").click(function() {
		$(".top_phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".top_phone .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");


   $(".footer_phone .wrapper .tab").click(function() {
		$(".footer_phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".footer_phone .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");


    //-- Contacts
    $(".contact-top .tab").click(function() {
	    $(".contact-top .tab").removeClass("active").eq($(this).index()).addClass("active");
	    $(".s_contacts .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");


	$(".tabs_header .wrapper .tab").click(function() {
	    $(".tabs_header .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
	    $(".tabs_header .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	// $(".tab_item").not(":first").hide();
	
	/*
	                        <div class="wrapper">
	 							<div class="tabs">
	 								<span class="tab">Москва</span> / 
	 							    <span class="tab">Караганда</span>
	 							</div>
	 							<div class="tab_content">
		 							<div class="tab_item">Содержимое</div>
		 							<div class="tab_item">содержимое</div>
	 						    </div>
	 						</div>
	CSS
	.wrapper .active { color: red }
	.tab_item { display: none; }
	.tab_item:first-child { display: b;ock; } 						
	*/
	// -- Конец Вкладок
});

$(window).load(function() {

    // --- Animate --
    //-- Обязательно в body ставить overflow-x: hidden

    //-- Header --
    $(".top_header h1").animated("fadeInDown", "fadeOut");
    $(".top_header h2").animated("fadeInUp", "fadeOut");

    $(".tabs_header .wrapper").animated("flipInY", "fadeOut");
    //--End Header

    //-- Section 2
    $(".profi_item").animated("fadeInRight", "fadeOut");
    $(".s_profi form").animated("zoomInRight", "fadeOut");

    //-- Section 4
    $(".s_back h3").animated("fadeInUp", "fadeOut");

    //-- Footer
    $("footer .footer_phone").animated("fadeInLeft", "fadeOut");
});




