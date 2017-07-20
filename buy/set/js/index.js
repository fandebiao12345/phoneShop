var $tips=$('#tips');
var $input=$('#input');
var $error=$('#error')
var reEmail=/^\w+@[0-9a-zA-Z]+(\.[a-z]+){1,3}$/;
$tips.on('click',function(){
	$input.focus();
});
$input.on('focus',function(){
	$(document).on('keyup',function(){
		if($input.val()){
			$tips.css('display','none');
		}
	});
	$input.on('blur',function(){
		var val=$input.val()
			if(!val){
				$tips.css('display','block');
				$error.text('电子邮箱不能有空');
				$(this).css('border-color','#ff0000');
				setTimeout(function(){
					$error.css('display','none');
				},3000);
				$error.css('display','block');
			}else{
				if(!reEmail.test(val)){
					$error.text('对不起，您输入的电子邮箱错误');
					setTimeout(function(){
						$error.css('display','none');
					},3000);

					$error.css('display','block');
					$(this).css('border-color','#ff0000');
				}else{
					$error.css('display','none');
					$(this).css('border-color','#999999');
				}
			}
	});
});
var $password1=$('.password1');
var $passTips1=$('.passTips1');
var re1=/[0-9]/;
var re2=/[a-z]/;
var re3=/[A-Z]/;
var $error1=$('.error1');
var $error2=$('.error2');
var $error3=$('.error3');
$passTips1.on('click',function(){
	$(this).next().focus();
});
$password1.on('focus',function(){
	$(this).on('blur',function(){
		var val=$password1.val();
		if(val){
			if(val.length<8){
				$error1.css('display','none');
				$error2.css('display','block');
				$(this).css('border-color','#ff0000');
				setTimeout(function(){
					$error2.css('display','none');
				},3000);
			}else if(!(re1.test(val)&&re2.test(val)&&re3.test(val))){
				$error2.css('display','none');
				$error1.css('display','block');
				$(this).css('border-color','#ff0000');
				setTimeout(function(){
					$error1.css('display','none');
				},3000);
			}else{
				$(this).css('border-color','#999999');
			}
		}else{
			$error3.css('display','block');
			setTimeout(function(){
				$error3.css('display','none');
			},3000);
		}
	});
	var $qiang=$('.qiang');
	var $ruo=$('.ruo');
	var $zhong=$('.zhong');
	$(document).on('keyup',function(){
		var val=$password1.val();
		if(val){
			$passTips1.css('display','none');
		}	
		if(val){
			if(val.length>=8){
				$ruo.css('background','red');
				$ruo.css('color','white');
				$qiang.css('background','#eeeeee');
				$zhong.css('background','#eeeeee');
				$qiang.css('color','#333');
				$zhong.css('color','#333');

				if(re1.test(val)&&re2.test(val)&&re3.test(val)){
					$ruo.css('background','green');
					$qiang.css('background','green');
					$zhong.css('background','green');
					$ruo.css('color','white');
					$qiang.css('color','white');
					$zhong.css('color','white');
				}
			}else if(val.length<8){
				$ruo.css('background','#eeeeee');
				$ruo.css('color','#333');
				$qiang.css('background','#eeeeee');
				$zhong.css('background','#eeeeee');
				$qiang.css('color','#333');
				$zhong.css('color','#333');
			}
		}
	});
});
var $passTips2=$('.passTips2');
var $password2=$('.password2');
var $error4=$('.error4');
$passTips2.on('click',function(){
	$(this).next().focus();
});
$password2.on('focus',function(){
	var val="";
	$(document).on('keyup',function(){
		val=$password2.val();
		if(val){
			$passTips2.css('display','none');
		}
	});
});
$password2.on('blur',function(){
	if($password2.val()&&$password1.val()&&$password2.val()!=$password1.val()){
		$error4.css('display','block');
		setTimeout(function(){
			$error4.css('display','none');
		},3000);
		$(this).css('border-color','#ff0000');
	}else{
		$(this).css('border-color','#999999');
	}
});
