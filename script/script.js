	//웹접근성 본문 바로가기
	$('.skip a').on('focus', function(){
        $(this).stop().animate({"top":0, "opacity":1});
		$(this).addClass('active');
    });
    $('.skip a').on('click', function(){
        $(this).stop().animate({"top":"-70px", "opacity":0});
		$(this).addClass('active');
    });
    $('.skip a').on('focusout', function(){
        $(this).stop().animate({"top":"-70px", "opacity":0});
		$(this).addClass('active');
    });

$("#section02 .tab_title > #ss01").click(function(){
	$(this).addClass('on').parents('.tab_title').siblings().children('#ss02').removeClass('on');
	$("#section02 .tt01").attr('id','on');
	$("#section02 .tt02").removeAttr('id','on');
});

$("#section02 .tab_title > #ss02").click(function(){
	$(this).addClass('on').parents('.tab_title').siblings().children('#ss01').removeClass('on');
	$("#section02 .tt02").attr('id','on');
	$("#section02 .tt01").removeAttr('id','on');
});

/*햄버거 클릭시 (웹접근성 포커스)*/
var $this;

$(".sub_ham a").click(function(){
	$(".sub_navi_box").addClass('on');
	$(".sub_navi_box .sub_navi > ul li:first-child a").focus();
	$this = $(this);
});

$(".sub_navi_box .close").click(function(){
	$(".sub_navi_box").removeClass('on');
	$this.focus();
});



/*검색창*/
var $self;
$(".head_search a").click(function(){
	$(".search_cont_pop").addClass('on');
	$(".search_cont_pop .input .text02").focus();	
	$self = $(this);
});

$(".search_cont_pop .close").click(function(){
	var _focus = $(this);
	_focus.focus();
	$(".search_cont_pop").removeClass('on');
	$(".detail_search_POP").removeClass('on');
	$self.focus();
});



/*scroll*/

$(".s_img01").click(function(){
	var posY = $("#section02").offset().top;
$("html, body").stop().animate({scrollTop:posY},700);
$("#section02 .tab_title > #ss01").addClass('on').siblings('#ss02').removeClass('on');
$("#section02 .tt01").attr('id','on');
$("#section02 .tt02").removeAttr('id','on');
});

$(".s_img02").click(function(){
	var posY = $("#section02").offset().top;
$("html, body").stop().animate({scrollTop:posY},700);
$("#section02 .tab_title > #ss02").addClass('on').siblings('#ss01').removeClass('on');
$("#section02 .tt02").attr('id','on');
$("#section02 .tt01").removeAttr('id','on');
});

$(".s_img03").click(function(){
	var posY = $("#movie").offset().top;
$("html, body").stop().animate({scrollTop:posY},700);
});




/*grid*/
$(function(){
    $(".grid").masonry({
        itemSelector:'.grid-item',
		no_columns:4,
		horizontalOrder: true,
        isAnimated: true,
    });
});

/*sub_data_sec02grid*/
$(function(){
    $(".grid01").masonry({
        itemSelector:'.grid-item01',
		no_columns:3,
		horizontalOrder: true,
        isAnimated: true,
    });
});

/*sub_album_sec02grid*/
$(function(){
    $(".grid02").masonry({
        itemSelector:'.grid-item02',
		no_columns:3,
		horizontalOrder: true,
        isAnimated: true,
    });
});

/*sub_movie_album_sec02grid*/
$(function(){
    $(".grid03").masonry({
        itemSelector:'.grid-item03',
		no_columns:3,
		horizontalOrder: true,
        isAnimated: true,
    });
});

/*result grid*/
$(function(){
    $(".grid04").masonry({
        itemSelector:'.grid-item04',
		no_columns:4,
		horizontalOrder: true,
        isAnimated: true,
		gutter:15
    });
});


/*sub02 delpopup*/
$(".delete_box .bt02").click(function(){
	$(".modalBg").fadeIn('fast');
	$(".del_popup").fadeIn('fast');
});

$(".ok .bt05").click(function(){
	$(".modalBg").fadeOut('fast');
	$(".del_popup").fadeOut('fast');
})

/*sub03 delpopup*/
$(".imgs .delete").click(function(){
	$(".modalBg").fadeIn('fast');
	$(".del_popup").fadeIn('fast');
});

$(".ok .bt05").click(function(){
	$(".modalBg").fadeOut('fast');
	$(".del_popup").fadeOut('fast');
})

/*sub03 modifypopup
$(".img_box > .imgs .modify01").click(function(){
	$(".modalBg").fadeIn('fast');
	$(".modi_popup").fadeIn('fast');
});
$(".modi_popup .delete").click(function(){
	$(".modalBg").fadeOut('fast');
	$(".modi_popup").fadeOut('fast');
});*/


/*index e-mail_popup*/
var $popfocus;
$(".e_mail_cont").click(function(){
	$(".modalBg").fadeIn('fast');
	$(".email_popup").fadeIn('fast');
	$('.email_popup').addClass('focus');
	$popfocus = $(this);
});
$(".email_popup .delete").click(function(){
	$(".modalBg").fadeOut('fast');
	$(".email_popup").fadeOut('fast');
	$popfocus.focus();
});
$('.email_popup .delete').on('focus', function(){
	$('.email_popup').removeClass('focus');
});


/*2019-12-10 수정*/
/*상세검색 팝업*/

var $btn;

$(".search_cont_pop .btn-b input").click(function(){
	$(".detail_search_POP").addClass('on');
	$(".detail_search_POP .select_Box #first-step").focus();	 //상용서버에서는 #first-step 대신 #bbsTyCode_key값을 쓰고 있어 id값이 다름
	$btn = $(this);
});
$(".close_Cont .none").click(function(){
	$(".detail_search_POP").removeClass('on');
	$btn.focus();
});


function appendYear($select){
 
		var date = new Date();
		var year = date.getFullYear();
		var idx = 0;
		for(var i=year-60; i<=year; i++){
			$select.prepend("<option value='"+i+"'>"+i+"년"+"</option>");
			idx++;
		}
		//$select.find("option:eq(0)").prop("selected", true); // 현재년도 선택
	}
	 
	appendYear($("#select"));


/* // 2019-12-10 수정*/

/*사진추가,파일추가* 스크립트*/
	$("#filebox").on('change',function(){
	  var fileName = $("#filebox").val();
	  $(".upload-name").val(fileName);
	});



//사진보도자료,포토앨범 상세페이지 이미지팝업
$('.story .story_img a').on('click', function(){
	alert('focus');
	$('.html .fancybox-wrap').focus();
	$('.html').addClass('active');
});
/*
$('.html .fancybox-wrap .fancybox-image').on('focusout', function(){
	$(this).removeClass('active');
});

$('.html .fancybox-close').on('click'function(){
	$('.fancybox-overlay').hide();
});*/



/*모바일*/

