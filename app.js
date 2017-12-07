$(document).ready(function() {
	let ClickCounter = 0;
$('.col-3').click(function() {
	if(this == $hasValue('.x') || this.hasValue() == $('.o')){
		$alert('Can't Do!'');
	}else if(clickCounter % 2 ==0){
		$("<div class=" + "x" + ">X<div>").appendTo(this);
		clickCounter ++1; 
	}else{
		$("<div class=" + "o" + ">O<div>").appendTo(this);
		clickCounter ++1;
	}
	
});	
});
