var a,b,c,str;

function cau_1(a,b){
	if (a!=b) {
		console.log(a+b);
	}
	else{
		console.log(a*3);
	}
}

function cau_2(a){
	if (a<=19) {
		console.log(19-a);
	}
	else 
		console.log((a-19)*3);	
}

//cau_1(a=parseInt(prompt("nhap a")),b=parseInt(prompt("nhap b")));
//cau_2(a=parseInt(prompt("nhap a")));

function cau_3(str){
	for (var i=0;i<=9;i++){
		var repl=parseInt(str.replace("*",i));
		if (repl%3 ==0){
			console.log(repl);
		}
	}
}	
//cau_3(str=prompt("nhap str"));

/*	var repl=str.replace("*",function(i){
		for (var i=0;i<=9;i++){
			if (str%3==0){
				console.log (str);
			}
			
			console.log(repl);
		}
	});
}*/


function cau_4(str){
	for (var i=0;i<=9;i++){
		var repl=parseInt(str.replace("*",i));
		if (repl%3 ==0 & repl%2 ==0){
			console.log(repl);
		}
	}
}	

//cau_4(str=prompt("nhap str"));
