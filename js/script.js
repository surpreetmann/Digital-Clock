$(document).ready(function() {

	function getCurrentTime()
	 {
  
 		 let currDate = new Date();
  
 	 	 let currHours = currDate.getHours() == 0 ? 12 : currDate.getHours() > 12 ? currDate.getHours() - 12: currDate.getHours();

  		 let currMinutes = currDate.getMinutes() < 10 ? '0' + currDate.getMinutes() : currDate.getMinutes();

 	 	 let currSeconds = currDate.getSeconds() < 10 ? '0' + currDate.getSeconds() : currDate.getSeconds();

 	 	 let amorpm = currDate.getHours() < 12 ? 'AM' : 'PM';

  		$('.hour').html(currHours);
  	
		$('.minute').html(':' + currMinutes);
  	
		$('.second').html(':' + currSeconds);
  	
		$('.ampm').html(amorpm);

   	 }

	 window.setInterval(getCurrentTime, 1000);


});