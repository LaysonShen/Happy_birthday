$('#login-button').click(function (event) {
	var userName=document.getElementById("userName").value;  
    var pwd=document.getElementById("pwd").value;
    if(userName=="田淼" &&  pwd=="0710"){
    	$('#h').text("欢迎回来！");
		event.preventDefault();
		$('form').fadeOut(500);
		$('.wrapper').addClass('form-success');
		setTimeout(function(){location.href="counting_the_days.html";},4000);
	}
	else{
		alert("用户名或密码不正确！");
	}
});
