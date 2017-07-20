var newimg=new Image();
	for(var i=1;i<77;i++){
			newimg.src="img/img360/miaov ("+i+").jpg";
			
		}

$(function(){
	var $Elements={
		screen1:['.screen-1__heading','.screen-1__phone','.screen-1__shadow'],
		screen2:['.screen-2__heading','.screen-2__subheading','.screen-2__phone'],
		screen3:['.screen-3__heading','.screen-3__subheading','.screen-3__phone','.screen-3__features'],
		screen4:['.screen-4__heading','.screen-4__subheading','.screen-4__type__item-1','.screen-4__type__item-2','.screen-4__type__item-3','.screen-4__type__item-4'],
		screen5:['.screen-5__heading','.screen-5__subheading','.screen-5__back'],
		screen6:['.screen-6__heading','.screen-6__subheading','.screen-6__360']
	}
	setTimeout(function(){
		action($Elements.screen1,1);
	},500);
	$redline=$('.header__nav-redline');
	$(document).scroll(function(){
		if($(this).scrollTop()>=700&&$(this).scrollTop()<1500){
			action($Elements.screen2,2);
			$redline.stop().animate({left:104},100);
			$('.outline').find('li').removeClass('active');
			$('.outline').find('li').eq(1).addClass('active');
		}
		if($(this).scrollTop()==0){
			$('.header').removeClass('header__done');
			$('.outline').removeClass('outline-done');
			$('.header__nav-item').removeClass('header__nav-item-none');
		}
		if($(this).scrollTop()>0){
			$('.header').addClass('header__done');
			$('.outline').addClass('outline-done');
			$('.header__nav-item').addClass('header__nav-item-none');
		}

		if($(this).scrollTop()>1&&$(this).scrollTop()<700){
			$('.outline').find('li').removeClass('active');
			$('.outline').find('li').eq(0).addClass('active');
			$redline.stop().animate({left:36},100);
		}
		if($(this).scrollTop()>=1500&&$(this).scrollTop()<2300){
			$('.outline').find('li').removeClass('active');
			$('.outline').find('li').eq(2).addClass('active');
			action($Elements.screen3,3);
			$redline.stop().animate({left:172},100);
		}
		if($(this).scrollTop()>=2300&&$(this).scrollTop()<3100){
			$('.outline').find('li').removeClass('active');
			$('.outline').find('li').eq(3).addClass('active');
			action($Elements.screen4,4);
			$redline.stop().animate({left:240},100);
		}
		if($(this).scrollTop()>=3100){

			$('.outline').find('li').removeClass('active');

			$('.outline').find('li').eq(4).addClass('active');

			action($Elements.screen5,5);

			$redline.stop().animate({left:308},100);
		}
		if($(this).scrollTop()>=3900){

			$('.outline').find('li').removeClass('active');

			$('.outline').find('li').eq(5).addClass('active');

			action($Elements.screen6,6);

			$redline.stop().animate({left:374},100);
		}
	})
	//360全景展示
		var newimg=new Image();
		var timer=null;
		var speed=0;
		var lastx=0;
		
		var oimg=document.getElementById("img1");
		document.onmousedown=function(ev){
			if($(document).scrollTop()>=3900){
				var oEvent=ev||event;
				var x=oEvent.clientX;
				var disX=0;

				var n=0;
				document.onmousemove=function(ev){
					var oEvent=ev||event;
					disX=oEvent.clientX-x;
					n=-parseInt(disX/10)%77;
					if(n<0){
						n=(Math.abs(parseInt(n/77))+1)*77+n;
					}
					oimg.src="img/img360/miaov ("+n+").jpg";
					speed=oEvent.clientX-lastx;
					lastx=speed+lastx;
					speed=-parseInt(speed/3);
					return false;
				}
				document.onmouseup=function(){
					
					clearInterval(timer);
					timer=setInterval(function(){
						n+=speed;
						if(n>0){
							n=n%77;
						}
						if(n<0){
							n=(Math.abs(parseInt(n/77))+1)*77+n;
						}

						oimg.src="img/img360/miaov ("+n+").jpg";
						if(speed>10){
							speed=10;
						}
						if(speed<-10){
							speed=-10;
						}
						if(speed>0&&speed<=10){
							speed--;
						}
						if(speed<0&&speed>=-10){
							speed++;
						}

						if(speed==0){
							clearInterval(timer);
						}
						document.title=speed;
					},30)
					document.onmouseup=null;
					document.onmousemove=null;
				}
			}
			return false;
		}
})

function action(screen,i){
	$.each(screen,function(index,ele){
		var reg=/.+__/;
		var $name=ele.replace(reg,'');
		
		$(ele).removeClass('screen-'+i+'__'+$name+'-init');
	})
}
