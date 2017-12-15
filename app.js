$(document).ready(function(){
	var number = 0;
	var mess = ["1","2","3","4","5"];

		$('img').click(function(){
			//console.log('click');
				number ++;
			//console.log(number);
		$('.counter').html(number);

			if (number%20 == 0){
		
				alert(mess[Math.floor(Math.random() * (4))]);
			}
		});
});