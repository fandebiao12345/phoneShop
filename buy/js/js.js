(function(){
	var color=['钻雕金','曜石黑','玫瑰金','钻雕蓝','陶瓷白','草木绿'];
	var $color=$('.color');
	var $style=$('.style:lt(11)');
	var $result=$('#result span');
	var index=1;
	var html='';
	var $active=null;
	var $jia=$('.jia');
	var $jian=$('.jian');
	var $num=$('.num');
	var num=1;
	$color.on('click',function(i,el){
		$color.removeClass('active');
		$(this).addClass('active');
		index=$(this).index();
		html=color[index-1];
		$style.each(function(i,a){
			if(i>3){
				return;
			}
			if($(this).attr('class').indexOf('active')!=-1){
				html+='/'+$(this).html();
			}
		});
		$result.html(html);
	});
	$style.each(function(i,el){
		$(this).on('click',function(){
			if(i==1||i==2){
				$style.eq(1).removeClass('active');
				$style.eq(2).removeClass('active');
			}
			$(this).toggleClass('active');
			console.log(index);
			html=color[index-1];
			$style.each(function(i,a){
				if(i>3){
					return;
				}
				if($(this).attr('class').indexOf('active')!=-1){
					html+='/'+$(this).html();
				}
			});
			$result.html(html);
		});
	});
	$jian.on('click',function(){
		num--;
		num=num<1?1:num;
		$num.html(num);
	});
	$jia.on('click',function(){
		num++;
		$num.html(num);
	});
})();
//https://www.vmall.com/product/205641589.html#
(function(){
	//图片预加载
	var img=new Image();
	var $pic=$('.pic');
	var $img=$('.pic img');
	var $li=$('.tab_wrap li');
	img.onload=function(){
		$pic.css('background','rgba(255,255,255,0)');
		$img.attr('src',img.src);
		$li.eq(0).css('background-image','url(img/phone'+1+'.jpg)');
	}
	img.src='img/phone1.jpg';
	for(var i=1;i<9;i++){
		var img1=new Image();
		img1.onload=function(){
			$li.each(function(i,a){
				if(i==0){
					return;
				}
				$li.eq(i).css('background-image','url(img/phone'+(i+1)+'.jpg)');
			});
		}

		img1.src='img/phone'+(i+1)+'.jpg';
	}
})();
(function(){
	var count=0;
	var $ul=$('.tab_wrap ul')
	var $img=$('.pic img');
	var $next=$('.next');
	var $prev=$('.prev');
	var $w=90;
	var $li=$('.tab_wrap li');
	var $lay=$('.pic .lay');
	var $pic=$('.pic');
	var $big=$('.pic .big');
	$next.on('mousedown',down);
	$next.on('mouseup',up);
	$prev.on('mousedown',down);
	$prev.on('mouseup',up);
	function down(){
		$(this).css('color','#e01d20');
	}
	function up(){
		$(this).css('color','#adadad');
	}
	$next.on('click',function(){
		if(count>=4){
			return;
		}
		count++;
		$ul.animate({left:-count*$w},500);
	});
	$prev.on('click',function(){
		if(count<=0){
			return;
		}
		count--;
		$ul.animate({left:-count*$w},500);
	});

	$li.on('click',function(){
		$li.removeClass('active');
		$(this).addClass('active');
		$img.attr('src','img/phone'+($(this).index()+1)+'.jpg');
		$big.css('background-image','url(img/phone'+($(this).index()+1)+'.jpg)');
	});
	$img.on('mouseenter',enter);
	function enter(e){
		$lay.css('display','block');
		$big.css('display','block');
		$big.animate({opacity:1},100);
		$(document).on('mousemove',move);
	}
	function move(e){
			var x=e.pageX;
			var y=e.pageY;
			var l=x-$lay.outerWidth()/2-$pic.offset().left;
			var t=y-$lay.outerHeight()/2-$pic.offset().top;
			if(l<=30){
				l=30;
			}
			if(l>=270){
				l=270;
			}
			if(t<=125){
				t=125;
			}
			if(t>=365){
				t=365;
			}
			$lay.css('left',l);
			$lay.css('top',t);
			var scaleX=(t-125)/240;
			var scaleY=(l-30)/240;
			var px=-400*scaleX;
			var py=-400*scaleY;
			$big.css('background-position',py+'px '+px+'px');
			console.log(py+' '+px);
			$lay.mouseout(function(){
				$(this).css('display','none');
				$big.css('opacity',0);
				$big.css('display','none');
				$(document).off('mousemove',move);
			});
		}
})();
(function(){
	var $select=$('.price');
	$select.on('click',function(){
		$(this).find('span').toggleClass('selected');
		math();
	});

	function math(){
		var price=3788;
		var $num=$('#number span');
		var num=0;
		var $allPrice=$('#allPrice span');
		$('.price span').each(function(){
			if($(this).attr('class').indexOf('selected')>=0){
				price+=Number($(this).closest('.price').text().substring(1));
				num+=1;
			}
		});
		$allPrice.text(price);
		$num.text(num);
	}
})();