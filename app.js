$(document).ready(function() {
	let clickCounter = 0;
	$('.col-3').click(function() {
		//console.log(this);
		//console.log($(this).hasClass('x'));
		if($(this).hasClass('x') || $(this).hasClass('o')){
			alert("Can't Do! Try again");
		}else if(clickCounter % 2 ==0){
			$(this).addClass( "x");
			$("<div class = pieces>X<div>").appendTo(this);
			clickCounter += 1; 
		}else{
			$(this).addClass( "o");
			$("<div class = pieces>O<div>").appendTo(this);
			clickCounter +=1 ;
		}
		console.log($('#r-1-1').hasClass('x') && $('#r-1-2').hasClass('x'));
		checkForWinner();
	});	
	var checkForWinner = function(){
		if ((($('#r-1-1').hasClass('x')) && ($('#r-1-2').hasClass('x')) && ($('#r-1-3').hasClass('x'))) || 
			(($('#r-2-1').hasClass('x')) && ($('#r-2-2').hasClass('x')) && ($('#r-2-3').hasClass('x'))) ||
			(($('#r-3-1').hasClass('x')) && ($('#r-3-2').hasClass('x')) && ($('#r-3-3').hasClass('x'))) ||
			(($('#r-1-1').hasClass('x')) && ($('#r-2-1').hasClass('x')) && ($('#r-3-1').hasClass('x'))) ||
			(($('#r-1-2').hasClass('x')) && ($('#r-2-2').hasClass('x')) && ($('#r-3-2').hasClass('x'))) ||
			(($('#r-1-3').hasClass('x')) && ($('#r-2-3').hasClass('x')) && ($('#r-3-3').hasClass('x'))) ||
			(($('#r-1-1').hasClass('x')) && ($('#r-2-2').hasClass('x')) && ($('#r-3-3').hasClass('x'))) ||
			(($('#r-1-3').hasClass('x')) && ($('#r-2-2').hasClass('x')) && ($('#r-3-1').hasClass('x'))) 
			){
			alert("X has won!");
		}else if ((($('#r-1-1').hasClass('o')) && ($('#r-1-2').hasClass('o')) && ($('#r-1-3').hasClass('o'))) || 
			(($('#r-2-1').hasClass('o')) && ($('#r-2-2').hasClass('o')) && ($('#r-2-3').hasClass('o'))) ||
			(($('#r-3-1').hasClass('o')) && ($('#r-3-2').hasClass('o')) && ($('#r-3-3').hasClass('o'))) ||
			(($('#r-1-1').hasClass('o')) && ($('#r-2-1').hasClass('o')) && ($('#r-3-1').hasClass('o'))) ||
			(($('#r-1-2').hasClass('o')) && ($('#r-2-2').hasClass('o')) && ($('#r-3-2').hasClass('o'))) ||
			(($('#r-1-3').hasClass('o')) && ($('#r-2-3').hasClass('o')) && ($('#r-3-3').hasClass('o'))) ||
			(($('#r-1-1').hasClass('o')) && ($('#r-2-2').hasClass('o')) && ($('#r-3-3').hasClass('o'))) ||
			(($('#r-1-3').hasClass('o')) && ($('#r-2-2').hasClass('o')) && ($('#r-3-1').hasClass('o'))) 
			){
			alert("O has won!");
		}
	};


	$('#restart').click(function(){
		$('div').removeClass("x");
		$('div').removeClass("o");
		$('.pieces').remove();
		clickCounter = 0;
	});
});
