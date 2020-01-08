var a, b, c, str;

function cau_1(a, b) {
  if (a != b) {
    return a + b;
  }
  return a * 3;
}

/*var cau1 = document.getElementsByClassName("tag-h4")[0];
	cau1.innerHTML=cau_1(a=parseInt(prompt("nhap a")),b=parseInt(prompt("nhap b")));*/

function cau_2(a) {
  if (a <= 19) {
    return 19 - a;
  }
  return (a - 19) * 3;
}
/*var cau2 = document.getElementsByClassName("tag-h4")[0];
	cau2.innerHTML=cau_2(a=parseInt(prompt("nhap a")));*/

/*function cau_3_cach1(str){
	for (var i=0;i<=9;i++){
		var repl=parseInt(str.replace("*",i));
		if (repl%3 ==0){
			console.log(repl);
		}
	}
}*/

function cau_3(str) {
  var sum = 0,
    kq = "";
  var repl = str.replace("*", "0");
  for (var i = 0; i < str.length; i++) {
    var repl1 = parseInt(repl.charAt(i));
    sum += repl1;
  }
  for (var i = 0; i <= 9; i++) {
    if ((sum + i) % 3 == 0) {
      kq += str.replace("*", i) + ",";
    }
  }
  return kq.replace(/,\s*$/, "");
}
/*var cau3 = document.getElementsByClassName("tag-cau3")[0];
	cau3.innerHTML=cau_3(str=prompt("nhap str"));*/

function cau_4(str) {
  var ar = "";
  var array = cau_3(str).split(",");
  var c = array.length;
  for (var i = 0; i < c; i++) {
    if (array[i] % 2 == 0) {
      ar += array[i] + ",";
    }
  }
  return ar.replace(/,\s*$/, "");
}
var cau4 = document.getElementsByClassName("tag-cau4")[0];
cau4.innerHTML = cau_4(str = prompt("nhap str"));