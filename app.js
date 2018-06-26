$(document).ready(function(){
// 天气情况的弹出框
	var t;
	$(".weather").hover(function(){
		t = setTimeout(function(){
			$(".future_temper_wrap").show();
		},1000);
	},function(){
		clearTimeout(t);
		$(".future_temper_wrap").hide();
	});


// 侧边栏弹出情况
	$("aside").hover(function(){
		$('body').css({'overflow':'hidden'});
	},function(){
		$('body').css({'overflow':'scroll'});
	});


// 浮动搜索框出现，236px
	var showHeight = 236;
	$(window).scroll(function(){
		if($(window).scrollTop() > showHeight){
			$('.search_float_wrap').slideDown();
		}else if($(window).scrollTop() < showHeight){
			$('.search_float_wrap').slideUp(100);
		}
	});


// 标签页切换
	$('.card_selector li').each(function(index){
		$(this).click(function(){
			$(this).addClass('cur_selector').siblings().removeClass('cur_selector');
			$('.main_card>li').eq(index).show().siblings().hide();
		});
	});


// 记忆换肤
	var cur_skin = parseInt(localStorage.skin);
	if(!cur_skin){
		$('#background_img').removeClass().addClass('background_'+1);		
	}else{
		$('#background_img').addClass('background_'+(cur_skin+1));
	}

// 换肤器
	$('#change_skin').click(function(e){
		e.preventDefault();
		$('.skin_panel').slideDown();
		$(document).click(function(){
			$('.skin_panel').slideUp();
		});
		e.stopPropagation();
	});
	$('.skin_panel').click(function(e){
		e.stopPropagation();
	});

	$('.skin_panel li').each(function(index){
		$(this).click(function(){
			$('#background_img').removeClass().addClass('background_'+(index+1));
			localStorage.skin = index;
		});
	});

// 切换列表
	$('.card_selector li').click(function(){
		var type = $(this).html();
		if(type == '推荐' || type == '导航'){
			$('.card_selector li').each(function(){
				$(this).removeClass('cur_selector');
			});
			$(this).addClass('cur_selector');
			if(type == '推荐'){
				$('.recommended').css('display','block');
				$('.guide').css('display','none');
			}else{
				$('.recommended').css('display','none');
				$('.guide').css('display','block');
			}
		}else{
			return false;
		}
	});

// 侧边栏固定
	var showsuspension = 340;
	var left;
	if(($(window).width()-960) > 0){
		left = ($(window).width()-885)/2+620;
	}else{
		left = (960 - 885)/2+620;
	}
	$(window).scroll(function(){
		if($(window).scrollTop() > showsuspension){
			$('.card_suspension').css({'position': 'fixed','top': '104px','left':left});
		}else if($(window).scrollTop() < showsuspension){
			$('.card_suspension').css({'position': 'absolute','top': '0px','left':'625px',});
		}
	});
});

