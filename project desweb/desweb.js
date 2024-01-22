var x =1;
	setInterval(function(){
		$("#gambar" + x).hide();
			x++;
			if(x==6) x=1;
			$("gambar").fadeOut('');
			$("#gambar" +x).fadeIn(2000);
		},5000);
