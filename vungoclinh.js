function show_part(id){
	if (id<3){
		$('.part3').hide();
		$('.part'+(3-id)).hide();
		$('.part'+id).show();
	}else{
		$('.part1').hide();
		$('.part2').hide();
		$('.part3').show();
		$('.btn').show();
	}
}

function part1(){
	$('#answer2').hide();
	$('#answer1').show();
	var itv = setInterval(function(){random1();},20);
	setTimeout(function(){
		clearInterval(itv);
		var ran = $('#answer1').val();
		var num = $('#number').val();
		console.log(ran + " " +ran%2);
		if (ran%2===0){
			if (ran===num){
				ran--;
			}else {
				ran++;
			}
		}
		$('#answer1').val(ran);


	},1500);


}

function random1(){
	var num = $('#number').val();
	var ran = Math.floor((Math.random() * num) + 1);
	$('#answer1').val(ran);
}

var a = [];
function part2(){
	$('#answer1').hide();
	$('#answer2').show();
	var num = $('#number').val();
	a = [];
	for(var i=0;i<num;i++){
		a.push(i);
	}
	print();
	var itv = setInterval(function(){random2();},13);
	setTimeout(function(){clearInterval(itv);},800);
}

function random2(){
	var num = $('#number').val();
	var i = Math.floor(Math.random() * num);
	var j = Math.floor(Math.random() * num);
	var t = a[i];
	a[i] = a[j];
	a[j] = t;
	print();
}

function print(){
	var num = $('#number').val();
	var s = a[0]+1;
	for(var i=1;i<num;i++){
		s += ","+(a[i]+1);
	}
	$('#answer2').val(s);
}
