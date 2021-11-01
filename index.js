
		//THIS IS FOR THE QUIZ PART.
		function submit_yes () {
			var details_1 = document.getElementById("Exp_1");
	details_1.style.visibility = "visible";
	var details_2 = document.getElementById("Exp_2");
	details_2.style.visibility = "visible";
	var details_3 = document.getElementById("Exp_3");
	details_3.style.visibility = "visible";
	var details_4 = document.getElementById("Exp_4");
	details_4.style.visibility = "visible";
	var details_5 = document.getElementById("Exp_5");
	details_5.style.visibility = "visible";
	var details_6 = document.getElementById("Exp_6");
	details_6.style.visibility = "visible";
	var details_7 = document.getElementById("Exp_7");
	details_7.style.visibility = "visible";
	var details_8 = document.getElementById("Exp_8");
	details_8.style.visibility = "visible";
	var details_9 = document.getElementById("Exp_9");
	details_9.style.visibility = "visible";
	var details_10 = document.getElementById("Exp_10");
	details_10.style.visibility = "visible";

	var quiz_1 = parseFloat(document.getElementById("quiz_1").value);
	var quiz_2 = parseInt(document.getElementById("quiz_2").value);
	var quiz_3 = (document.getElementById("quiz_3").value).toLowerCase();
	var quiz_4 = parseFloat(document.getElementById("quiz_4").value);
	var quiz_5 = parseInt(document.getElementById("quiz_5").value);
	var quiz_6 = parseInt(document.getElementById("quiz_6").value);
	var quiz_7 = parseInt(document.getElementById("quiz_7").value);
	var quiz_8 = parseInt(document.getElementById("quiz_8").value);
	var quiz_9 = parseInt(document.getElementById("quiz_9").value);
	var quiz_10 = parseInt(document.getElementById("quiz_10").value);

	var span_1 = document.getElementById("span_1");
	var span_2 = document.getElementById("span_2");
	var span_3 = document.getElementById("span_3");
	var span_4 = document.getElementById("span_4");
	var span_5 = document.getElementById("span_5");
	var span_6 = document.getElementById("span_6");
	var span_7 = document.getElementById("span_7");
	var span_8 = document.getElementById("span_8");
	var span_9 = document.getElementById("span_9");
	var span_10 = document.getElementById("span_10");

	if (quiz_1 == 3.141592654) {
		span_1.innerHTML = " correct";
		span_1.style.color = "green";
	} else{
		span_1.innerHTML = " incorrect. The correct answer is 3.141592654";
		span_1.style.color = "red";
	};
		if (quiz_2 == 4) {
		span_2.innerHTML = " correct";
		span_2.style.color = "green";
	} else{
		span_2.innerHTML = " incorrect. The correct answer is 4";
		span_2.style.color = "red";
	};
		if (quiz_3 == "archimedes") {
		span_3.innerHTML = " correct";
		span_3.style.color = "green";
	} else{
		span_3.innerHTML = " incorrect. The correct answer is Archimedes";
		span_3.style.color = "red";
	};
		if (quiz_4 == 0.8) {
		span_4.innerHTML = " correct";
		span_4.style.color = "green";
	} else{
		span_4.innerHTML = " incorrect. The correct answer is 0.8";
		span_4.style.color = "red";
	};
		if (quiz_5 == 720) {
		span_5.innerHTML = " correct";
		span_5.style.color = "green";
	} else{
		span_5.innerHTML = " incorrect. The correct answer is 720";
		span_5.style.color = "red";
	};
		if (quiz_6 == 3) {
		span_6.innerHTML = " correct";
		span_6.style.color = "green";
	} else{
		span_6.innerHTML = " incorrect. The correct answer is 3";
		span_6.style.color = "red";
	};
		if (quiz_7 == 1) {
		span_7.innerHTML = " correct";
		span_7.style.color = "green";
	} else{
		span_7.innerHTML = " incorrect. The correct answer is 1";
		span_7.style.color = "red";
	};
		if (quiz_8 == 120) {
		span_8.innerHTML = " correct";
		span_8.style.color = "green";
	} else{
		span_8.innerHTML = " incorrect. The correct answer is 120";
		span_8.style.color = "red";
	};
		if (quiz_9 == -59048) {
		span_9.innerHTML = " correct";
		span_9.style.color = "green";
	} else{
		span_9.innerHTML = " incorrect. The correct answer is -59048";
		span_9.style.color = "red";
	};
		if (quiz_10 == 31) {
		span_10.innerHTML = " correct";
		span_10.style.color = "green";
	} else{
		span_10.innerHTML = " incorrect. The correct answer is 31";
		span_10.style.color = "red";
	};
	document.getElementById("quiz_submit").style.visibility = "hidden";
	document.getElementById("cancel_3").style.marginLeft = "0%";
	document.getElementById("submit_confirm").style.visibility = "hidden";

		}
		function submit_no () {
			document.getElementById("submit_confirm").style.visibility = "hidden";
		}
		function submit_confirm_show () {
			document.getElementById("submit_confirm").style.visibility = "visible";
		}
		function exit_yes () {
			var quiz_div = document.getElementById("quiz_div");
	quiz_div.style.visibility = "hidden";
	document.getElementById("Exp_1").style.visibility = "hidden";
	document.getElementById("Exp_2").style.visibility = "hidden";
	document.getElementById("Exp_3").style.visibility = "hidden";
	document.getElementById("Exp_4").style.visibility = "hidden";
	document.getElementById("Exp_5").style.visibility = "hidden";
	document.getElementById("Exp_6").style.visibility = "hidden";
	document.getElementById("Exp_7").style.visibility = "hidden";
	document.getElementById("Exp_8").style.visibility = "hidden";
	document.getElementById("Exp_9").style.visibility = "hidden";
	document.getElementById("Exp_10").style.visibility = "hidden";

	document.getElementById("span_1").innerHTML = "";
	document.getElementById("span_2").innerHTML = "";
	document.getElementById("span_3").innerHTML = "";
	document.getElementById("span_4").innerHTML = "";
	document.getElementById("span_5").innerHTML = "";
	document.getElementById("span_6").innerHTML = "";
	document.getElementById("span_7").innerHTML = "";
	document.getElementById("span_8").innerHTML = "";
	document.getElementById("span_9").innerHTML = "";
	document.getElementById("span_10").innerHTML = "";
	document.getElementById("quiz_submit").style.visibility = "hidden";
	document.getElementById("exit_confirm").style.visibility = "hidden";
		}
		function exit_no () {
			document.getElementById("exit_confirm").style.visibility = "hidden";
		}
		function exit_confirm_show () {
			document.getElementById("exit_confirm").style.visibility = "visible";
		}
function quiz_form_show () {
			var quiz_form = document.getElementById("quiz_form");
			quiz_form.style.visibility = "visible";
}
function quiz_form_hide () {
			var quiz_form = document.getElementById("quiz_form");
			quiz_form.style.visibility = "hidden";
			document.getElementById("form_validation").innerHTML = "";
}
function quiz_show () {
	   		var first_name = document.getElementById("first_name").value;
	   		var last_name = document.getElementById("last_name").value;
	   		var date = document.getElementById("date").value;
	   		if (first_name == "" || last_name == "" || date == "") {
	   		document.getElementById("form_validation").innerHTML = "Please fill in the fields correctly";
	   		document.getElementById("form_validation").style.color = "red";
	   		document.getElementById("cancel_3").style.marginLeft = "20%";
	   		} else{
	   		document.getElementById("form_validation").innerHTML = "";
			var p_date = document.getElementById("p_date");
			p_date.innerHTML = "Test Date: " + date;
			var p_full_name = document.getElementById("p_full_name");
			p_full_name.innerHTML = "Full Name: " + first_name +" "+ last_name;
			var quiz_div = document.getElementById("quiz_div");
			quiz_div.style.visibility = "visible";
			var quiz_form = document.getElementById("quiz_form");
			quiz_form.style.visibility = "hidden";
			document.getElementById("quiz_submit").style.visibility = "visible";
			document.getElementById("cancel_3").style.marginLeft = "10%";
	   		};
}

		//THIS IS FOR THE BACKGROUND CHANGING PART
var window_width = document.width;
var changer = document.getElementById("changer");
changer.marginLeft = window_width/3;

var changer = document.getElementById("changer");
changer.onclick = function() {

var ba_div = document.getElementById("ba_div");
ba_div.style.visibility = "visible";
}
var set_btn = document.getElementById("set_btn");
set_btn.onclick = function(){
	var background_acceptor = document.getElementById("background_acceptor").value;
	var all = document.getElementById("all");
	all.style.background = background_acceptor;
var ba_div = document.getElementById("ba_div");
ba_div.style.visibility = "hidden";
}
		//FOR THE LOADING PART.
function progress_40 () {
	var progress = document.getElementById("progress");
	progress.value = '40';
	var counter = document.getElementById("counter");
	counter.innerHTML = '3';
	counter.style.color = 'magenta';
	var header_title = document.getElementById("header_title");
	header_title.style.color = 'magenta';
}
setTimeout(progress_40, 2000);

function progress_60 () {
	var progress = document.getElementById("progress");
	progress.value = '60';
	var counter = document.getElementById("counter");
	counter.innerHTML = '2<br><span style="margin-left:-200px;">Best calculator <br>ever</span>';
	counter.style.color = 'blue';
	var header_title = document.getElementById("header_title");
	header_title.style.color = 'blue';
}
setTimeout(progress_60, 4000);

function progress_80 () {
	var progress = document.getElementById("progress");
	progress.value = '80';
	var counter = document.getElementById("counter");
	counter.innerHTML = '1';
	counter.style.color = 'yellow';
	var header_title = document.getElementById("header_title");
	header_title.style.color = 'yellow';
	var banner_div = document.getElementById("banner_div");
	banner_div.style.visibility = 'visible';
	banner_div.style.color = 'black';
}
setTimeout(progress_80, 6000);

function progress () {
	var progress = document.getElementById("progress");
	progress.style.visibility = 'hidden';
	var counter = document.getElementById("counter");
	counter.style.visibility = 'hidden';
	var body = document.getElementById("body");
	body.style.visibility = 'visible';
	var all = document.getElementById("all");
	all.style.background = 'blue';
	var banner_div = document.getElementById("banner_div");
	banner_div.style.color = 'red';
}
setTimeout(progress, 8000);

		//THIS IS FOR THE "PLEASE DONT LEAVE FUNCTION".
var hr = document.getElementById("hr");
hr.onmouseover = function(){
	hr.innerHTML = "Please don't leave";
}
hr.onmouseout = function(){
	hr.innerHTML = '';
}

		//THIS FUNCTION MAXIMIZES THE LOGIC DIV.


function simple_calc_open() {
	var logic = document.getElementById("logic");
	logic.style.visibility = 'visible';
	var opener = document.getElementById("opener");
	opener.style.visibility = 'hidden';
}

function decrease () {
	logic.style.height = "50%";
	logic.style.width = "50%";
	logic.style.marginLeft = "0%";
	logic.style.marginTop = "0%";
	var decrease = document.getElementById("decrease");
	decrease.style.visibility = "hidden";
	var increase = document.getElementById("increase");
	increase.style.visibility = "visible";
}
document.write("<br><br><br>");

		//THE FOLLOWING FUNCTIONS ARE FOR THE CANCEL BUTTONS.
function cancel () {
	var customize = document.getElementById("customize");
	customize.style.visibility = "visible";
	var logic_1 = document.getElementById('logic_1');
	logic_1.style.visibility = "hidden";
}
function cancel_2 () {
	var logic = document.getElementById('logic');
	logic.style.visibility = 'hidden';
	var opener = document.getElementById('opener');
	opener.style.visibility = 'visible';
}
function cancel_3 () {
	var about = document.getElementById("about");
	about.style.visibility = "hidden";
}
		//THE FUNCTION BELOW WILL DISPLAY THE CUSTOMIZE BACKGROUND.
function logic_1 () {
	var logic_1 = document.getElementById('logic_1');
	logic_1.style.visibility = "visible";
	var customize = document.getElementById("customize");
	customize.style.visibility = "hidden";
}
		//THESE FUNCTIONS DISPLAY AND CLOSE THE ABOUT DIV.
function about () {
	var about = document.getElementById("about");
	about.style.visibility = "visible";
}
		//THIS IS FOR THE LOGIC PART
	//no_1
function no_1(){
var no_1 = document.getElementById('no_1').value;
var bar = document.getElementById('bar').value;
bar += no_1;
document.getElementById('bar').setAttribute("value", bar);
}
	//no_2
function no_2(){
var no_2 = document.getElementById('no_2').value;
var bar = document.getElementById('bar').value;
bar += no_2;
document.getElementById('bar').setAttribute("value", bar);
}
	//no_3
function no_3(){
var no_3 = document.getElementById('no_3').value;
var bar = document.getElementById('bar').value;
bar += no_3;
document.getElementById('bar').setAttribute("value", bar);
}
	//no_4
function no_4(){
var no_4 = document.getElementById('no_4').value;
var bar = document.getElementById('bar').value;
bar += no_4;
document.getElementById('bar').setAttribute("value", bar);
}
	//no_5
function no_5(){
var no_5 = document.getElementById('no_5').value;
var bar = document.getElementById('bar').value;
bar += no_5;
document.getElementById('bar').setAttribute("value", bar);
}
	//no_6
function no_6(){
var no_6 = document.getElementById('no_6').value;
var bar = document.getElementById('bar').value;
bar += no_6;
document.getElementById('bar').setAttribute("value", bar);
}
	//no_7
function no_7(){
var no_7 = document.getElementById('no_7').value;
var bar = document.getElementById('bar').value;
bar += no_7;
document.getElementById('bar').setAttribute("value", bar);
}
	//no_8
function no_8(){
var no_8 = document.getElementById('no_8').value;
var bar = document.getElementById('bar').value;
bar += no_8;
document.getElementById('bar').setAttribute("value", bar);
}
	//no_9
function no_9(){
var no_9 = document.getElementById('no_9').value;
var bar = document.getElementById('bar').value;
bar += no_9;
document.getElementById('bar').setAttribute("value", bar);
}
	//no_0
function no_0(){
var no_0 = document.getElementById('no_0').value;
var bar = document.getElementById('bar').value;
bar += no_0;
document.getElementById('bar').setAttribute("value", bar);
}

	//add
function add(){
var add = document.getElementById('add').value;
var bar = document.getElementById('bar').value;
bar += add;
document.getElementById('bar').setAttribute("value", bar);
}
	//subtract
function subtract(){
var subtract = document.getElementById('subtract').value;
var bar = document.getElementById('bar').value;
bar += subtract;
document.getElementById('bar').setAttribute("value", bar);
}
	//multiply
function multiply(){
var multiply = "*";
var bar = document.getElementById('bar').value;
bar += multiply;
document.getElementById('bar').setAttribute("value", bar);
}
	//divide
function divide(){
var divide = document.getElementById('divide').value;
var bar = document.getElementById('bar').value;
bar += divide;
document.getElementById('bar').setAttribute("value", bar);
}
	//decimal
function decimal(){
var decimal = document.getElementById('decimal').value;
var bar = document.getElementById('bar').value;
bar += decimal;
document.getElementById('bar').setAttribute("value", bar);
}
	//mod
function mod(){
var mod = "%";
var bar = document.getElementById('bar').value;
bar += mod;
document.getElementById('bar').setAttribute("value", bar);
}
	//sqrt
function sqrt(){
var bar = eval(document.getElementById('bar').value);
var sqrt = Math.sqrt(bar, 2);
document.getElementById('bar').setAttribute("value", sqrt);
}
//factorial
function factorial(){
var bar = eval(document.getElementById('bar').value);
		var fac_array = new Array(1);
		fac_array[0] = bar;
		var fac_changer = bar-1;
		if (bar==0) {
		document.getElementById('bar').setAttribute("value", '1');
		};
		if (bar!==0) {
		while (fac_changer>0){
			fac_array[0] *= fac_changer;
			fac_changer--;
		}
		document.getElementById('bar').setAttribute("value", fac_array[0]);
		};
}
	//equal
function equal(){
var bar = eval(document.getElementById('bar').value);
document.getElementById('bar').setAttribute("value", bar);
}
	//AC
function AC(){
var bar = document.getElementById('bar').value;
document.getElementById('bar').setAttribute("value", "");
}
// 	//del
// 	var prev_array = new Array(1);
// 	prev_array[0] = document.getElementById('bar').value;
// 	var len = 1;
// 	while(len>1 && len){	
// 	var prev = new Array(len); 
// 	len++;
// 	} 
// function del(){
// document.getElementById('bar').setAttribute("value", prev_array[0]);
// }

document.write('<div id="body">');
		 

		//THIS IS FOR THE QUADRATIC EQUATION PART
document.write('<details>');
document.write('<summary style="font-size: 30px; margin-top: 70px; color: yellow;">Quadratic Equation</summary>');
document.write('<div style="background-color: #007;">');
document.write('<details>');
document.write('<summary style="color:yellow;">Find Root(s)</summary><br>');

document.write('<form style="margin-left:15%;" onreset="quad_soln();"><input id="quad_btn" type="reset" value="SOLVE" style="border-radius:5px; margin-left:15%; margin-top:5%;"></form>');
document.write('<br><input id="aq" type="text" placeholder="a" style="border-radius:5px; width:0.5cm; margin-left:10px;"><b>X<sup>2</sup></b>');
document.write('<input id="bq" type="text" placeholder="b" style="border-radius:5px; width:0.5cm; margin-left:10px;"><b>X</b>');
document.write('<input id="cq" type="text" placeholder="c" style="border-radius:5px; width:0.5cm; margin-left:10px;"><b> = 0</b></li><br><br>');
document.write('<details>');
document.write('<summary style="color:yellow;">Show Answer</summary><br>');
document.write('<p id="quad_para" style="color:yellow;"></p><br>');
document.write('<p id="root_analysis" style="color:yellow;"></p><br>');
function quad_soln () {
var aq = parseFloat(document.getElementById("aq").value);
var bq = parseFloat(document.getElementById("bq").value);
var cq = parseFloat(document.getElementById("cq").value);

	var bq_minus = (bq)*-1;
	var quad_sqrt = Math.sqrt((bq*bq)-(4*aq*cq));
	var deno = 2*(aq);
	var quad_plus = (bq_minus + quad_sqrt)/deno;
	var quad_minus = (bq_minus - quad_sqrt)/deno;
	var quad_para = document.getElementById("quad_para");
	var root_analysis = document.getElementById("root_analysis");
	if ((bq*bq) == 4*aq*cq) {	
	quad_para.innerHTML = 'X = ' + quad_plus;
	root_analysis.innerHTML = '<marquee>The equation has coincident or equal or double roots</marquee>';
	};
	if ((bq*bq) < 4*aq*cq) {	
	quad_para.innerHTML = 'The equation has no Solution';
	root_analysis.innerHTML = '<marquee>The equation has complex or imaginary roots</marquee>';
	};
	if ((bq*bq) > 4*aq*cq) {
	quad_para.innerHTML = 'X = ' + quad_plus + ' or ' + quad_minus;	
	root_analysis.innerHTML = '<marquee>The equation has two real distinct roots</marquee>';
	};
}
document.write('</details>');
document.write('</details>');

document.write('<a href="#"><p style="color:yellow;" onclick="eqn_soln();">Find Equation (if coefficient of x<sup>2</sup> is 1)</p></a><br>');
document.write('<p id="eqn_echo"></p><br>');
function eqn_soln () {
var first_root = parseInt(prompt('Enter the first root of the equation'));
var second_root = parseInt(prompt('Enter the second root of the equation'));
var root_add = -1*(first_root+second_root);

if (root_add==0 && (first_root*second_root*-1) > 1) {
document.getElementById('eqn_echo').innerHTML = 'The equation is X<sup>2</sup> ' + first_root*second_root;
};
if (root_add==0 && (first_root*second_root*-1) < 1) {
document.getElementById('eqn_echo').innerHTML = 'The equation is X<sup>2</sup> + ' + first_root*second_root;
};

if (first_root*second_root==0 && (root_add*-1) < 1) {
document.getElementById('eqn_echo').innerHTML = 'The equation is X<sup>2</sup> + ' + root_add + 'X';
};
if (first_root*second_root==0 && (root_add*-1) > 1) {
document.getElementById('eqn_echo').innerHTML = 'The equation is X<sup>2</sup> ' + root_add + 'X';
};

if (root_add!==0 && (root_add*-1) > 1 && first_root*second_root!==0 && (first_root*second_root*-1) > 1) {
document.getElementById('eqn_echo').innerHTML = 'The equation is X<sup>2</sup> ' + root_add + 'X ' + first_root*second_root;
};
if (root_add!==0 && (root_add*-1) < 1 && first_root*second_root!==0 && (first_root*second_root*-1) < 1) {
document.getElementById('eqn_echo').innerHTML = 'The equation is X<sup>2</sup> + ' + root_add + 'X + ' + first_root*second_root;
};
if (root_add!==0 && (root_add*-1) > 1 && first_root*second_root!==0 && (first_root*second_root*-1) < 1) {
document.getElementById('eqn_echo').innerHTML = 'The equation is X<sup>2</sup> ' + root_add + 'X + ' + first_root*second_root;
};
if (root_add!==0 && (root_add*-1) < 1 && first_root*second_root!==0 && (first_root*second_root*-1) > 1) {
document.getElementById('eqn_echo').innerHTML = 'The equation is X<sup>2</sup> + ' + root_add + 'X ' + first_root*second_root;
};
}
document.write('</div>');
document.write('</details><br><br><br>');


		//THIS IS FOR THE MATRIX PART
document.write('<details>');
document.write('<summary style="font-size: 30px; color:yellow;">Matrix</summary><br><br>');
		//THIS IS FOR THE 2 BY 2 MATRIX PART
document.write('<details>');
document.write('<summary style="font-size: 30px; color:#009;">2 by 2 matrix</summary>');
document.write('<div id="all2" style="background-color:#009;">');
document.write('<div class="tall" style="font-size: 80px; height: 100px; width: 20px; margin-top:0px; position: absolute; background-color:transparent;">A=</div>');
document.write('<p><span class="short" style="font-size: 20px; margin-left: 130px; margin-top: 20px; position: absolute; background-color:transparent;">');
document.write('<input id="a" type="text" placeholder="a" style="border-radius:5px; width:0.5cm;">');
document.write('<input id="b" type="text" placeholder="b" style="border-radius:5px; width:0.5cm; margin-left:10px;">');
document.write('<input id="e" type="text" placeholder="e" style="border-radius:5px; width:0.5cm; margin-left:50px;">');
document.write('</span>');
document.write('<span class="shortt" style="font-size: 20px; margin-left: 130px; margin-top: 60px; position: absolute; background-color:transparent;">');
document.write('<input id="c" type="text" placeholder="c" style="border-radius:5px; width:0.5cm;">');
document.write('<input id="d" type="text" placeholder="d" style="border-radius:5px; width:0.5cm; margin-left:10px;">');
document.write('<input id="f" type="text" placeholder="f" style="border-radius:5px; width:0.5cm; margin-left:50px;">');
document.write('<div class="tall" style="font-size: 80px; height: 100px; width: 20px; margin-left:200px; position: absolute; background-color:transparent;"></div>');
document.write('<div class="tall" style="font-size: 80px; height: 100px; width: 20px; margin-left:270px; position: absolute; background-color:transparent;"></div>');

document.write('<form style="margin-left:15%;" onreset="matrix2_soln();"><input id="2matrix_btn" type="reset" value="SOLVE" style="border-radius:5px; margin-left:15%; margin-top:5%;"></form>');

document.write('<div class="talll" style="font-size: 80px; height: 100px; width: 20px; margin-left: 200px; position: absolute; background-color:transparent;"></div><br><br><br><br><br>');
document.write('<details>');
document.write('<summary style="background-color:blue;">Show Answer Only</summary>');
document.write(" <p id='mat2ans'></p>");
document.write('<marquee>');
document.write('Thanks for trying out our page!  Made by Akunne Harrison and Okeke Lotanna(October 11 2019)');
document.write('</marquee>');

document.write('</details><br>');

document.write('<details>');
document.write('<summary style="background-color:blue;">Show Answer and Solution</summary>')

if((b*-1)<0)//This is for when the first coefficient of y is positive
{
if (b==1)//This is for when the first coefficient of y equals 1
{
if (a==1)//This is for when the first coefficient of x equals 1 and b is positive
	{document.write("<div id='all' style='background-color:red; color: yellow; border-radius: 20px;'><p>EQUATIONS<br><ul><li>x + y = " + e + "</li><ul>");};
if (a==-1)//This is for when the first coefficient of x equals -1 and b is positive
{
	document.write("<div id='all' style='background-color:red; color: yellow; border-radius: 20px;'><ul><li>" + "-x + y = " + e);};
if (a!==1 && a!==-1) {
	document.write("<div id='all' style='background-color:red; color: yellow; border-radius: 20px;'><ul><li>" + a + "x + y = " + e + "</li></ul>");};
}else{
if (a==1)//This is for when the first coefficient of x equals 1 and b is negative
	{document.write("<div id='all' style='background-color:red; color: yellow; border-radius: 20px;'><p><ul><li>x " + " + " + b + "y = " + e + "</li></ul><p>");};
if (a==-1)//This is for when the first coefficient of x equals 1 and b is negative
	{document.write("<div id='all' style='background-color:red; color: yellow; border-radius: 20px;'><p><ul><li>-x " + " + " + b + "y = " + e + "</li></ul><p>");};
if (a!==1 && a!==-1) {document.write("<div id='all' style='background-color:red; color: yellow; border-radius: 20px;'><p><ul><li>" + a + "x " + " + " + b + "y = " + e + "</li></ul><p>");};
};
}
if((d*-1)<0)//This is for when the second coefficient of y is positive
{
if (d==1){
if (c==1)//This is for when the second coefficient of x equals 1 and d equals 1
	{document.write("<div id='all' style='background-color:red; color: yellow; border-radius: 20px;'><p><ul><li>x + y = " + f + "</li><ul>");};
if (c==-1)//This is for when the second coefficient of x equals -1 and d equals 1
	{document.write("<div id='all' style='background-color:red; color: yellow; border-radius: 20px;'><ul><li>" + "-x + y = " + f);};
if (c!==1 && c!==-1) {document.write("<div id='all' style='background-color:red; color: yellow; border-radius: 20px;'><ul><li>" + c + "x + y = " + f + "</li></ul>");};
}else{
if (c==1)//This is for when the second coefficient of x equals 1 and d equals -1
	{document.write("<div id='all' style='background-color:red; color: yellow; border-radius: 20px;'><p><ul><li>x " + " + " + d + "y = " + f + "</li></ul><p>");};
if (c==-1)//This is for when the second coefficient of x equals -1 and d equals -1
	{document.write("<div id='all' style='background-color:red; color: yellow; border-radius: 20px;'><p><ul><li>-x " + " + " + d + "y = " + f + "</li></ul><p>");};
if (c!==1 && c!==-1) {document.write("<div id='all' style='background-color:red; color: yellow; border-radius: 20px;'><p><ul><li>" + c + "x " + " + " + d + "y = " + f + "</li></ul><p>");};
};
}
if((b*-1)>0)//This is for when the first coefficient of y is negative
{
if (b==-1) {
if (a==1) {document.write("<div id='all' style='background-color:red; color: yellow; border-radius: 20px;'><p><br>EQUATIONS<br><ul><ul>x - y = " + e + "</ul><ul>");};
if (a==-1) {document.write("<div id='all' style='background-color:red; color: yellow; border-radius: 20px;'><ul><ul>" + "-x - y = " + e);};
if (a!==1 && a!==-1) {document.write("<div id='all' style='background-color:red; color: yellow; border-radius: 20px;'><ul><ul>" + a + "x - y = " + e + "</ul></ul>");};
}else{
if (a==1) {document.write("<div id='all' style='background-color:red; color: yellow; border-radius: 20px;'><p><ul><ul>x " + b + "y = " + e + "</ul></ul><p>");};
if (a==-1) {document.write("<div id='all' style='background-color:red; color: yellow; border-radius: 20px;'><p><ul><ul>-x " + b + "y = " + e + "</ul></ul><p>");};
if (a!==1 && a!==-1) {document.write("<div id='all' style='background-color:red; color: yellow; border-radius: 20px;'><p><ul><ul>" + a + "x " + b + "y = " + e + "</ul></ul><p>");};
};
}
if((d*-1)>0)//This is for when the second coefficient of y is negative
{
if (d==-1)//This is for when the second coefficient of y equals -1
{
if (c==1) {document.write("<div id='all' style='background-color:red; color: yellow; border-radius: 20px;'><p><ul><ul>x - y = " + f + "</ul><ul>");};
if (c==-1) {document.write("<div id='all' style='background-color:red; color: yellow; border-radius: 20px;'><ul><ul>" + "-x - y = " + f);};
if (c!==1 && c!==-1) {document.write("<div id='all' style='background-color:red; color: yellow; border-radius: 20px;'><ul><ul>" + c + "x - y = " + f + "</ul></ul>");};
}else{
if (c==1) {document.write("<div id='all' style='background-color:red; color: yellow; border-radius: 20px;'><p><ul><ul>x " + d + "y = " + f + "</ul></ul><p>");};
if (c==-1) {document.write("<div id='all' style='background-color:red; color: yellow; border-radius: 20px;'><p><ul><ul>-x " + d + "y = " + f + "</ul></ul><p>");};
if (c!==1 && c!==-1) {document.write("<div id='all' style='background-color:red; color: yellow; border-radius: 20px;'><p><ul><ul>" + c + "x " + d + "y = " + f + "</ul></ul><p>");};
};
}

document.write('<div class="tall2" style="font-size: 80px; height: 100px; width: 20px; margin-top:0px; position: absolute; background-color:transparent;">A=</div>');
document.write('<p><span class="short2" style="font-size: 20px; margin-left: 130px; margin-top: 20px; position: absolute; background-color:transparent;">');
document.write("a");
document.write('<span style="color: yellow; margin-left: 30px; background-color:transparent;">b</span>');
document.write('</span>');
document.write('<span class="shortt2" style="font-size: 20px; margin-left: 130px; margin-top: 60px; position: absolute; background-color:transparent;">');
document.write("c");
document.write('<span style="color: yellow; margin-left: 30px; background-color:transparent;">d</span>');
document.write('<div class="talll2" style="font-size: 80px; height: 100px; width: 20px; margin-left: 200px; position: absolute; background-color:transparent;"></div><br><br><br><br><br>');

document.write("<br><div id='all' style='background-color:red; color: yellow; border-radius: 20px;'><hr style='color:red;'><hr style='color:red;'><br><h1><u>Soln</u></h1>");
document.write("<p id='m1'></p><p id='m2'></p><p id='m3'></p>");
document.write("<p id='m4'></p><p id='m5'></p>");
document.write("<p id='m6'></p><p id='m7'></p><p id='m8'></p>");
document.write("<p id='m9'></p>");
document.write("<p id='m10'></p>");
document.write("<p id='m11'></p><marquee id='m12'></marquee></div>");
document.write('</details>');
document.write('</div>');
document.write('</details><br><br>');

function matrix2_soln () {
	//THIS IS THE ANSWER ONLY PART
var a = document.getElementById('a').value;
var b = document.getElementById('b').value;
var c = document.getElementById('c').value;
var d = document.getElementById('d').value;
var e = document.getElementById('e').value;
var f = document.getElementById('f').value;
var r = ((a*d)-(b*c));
var x = ((d*e)-(b*f))/r;
var y = ((a*f)-(c*e))/r;

	//THIS IS THE ANSWER AND SOLUTION PART
var mat2ans = document.getElementById("mat2ans");
mat2ans.innerHTML = "<p id='mat2ans'>X,Y = " + x + "   ,   " + y + "</p>";

var m1 = document.getElementById("m1");
m1.innerHTML = "Where: a = " + a + " | b = " + b;

var m2 = document.getElementById("m2");
m2.innerHTML = " c = " + c + " | d = " + d;

var m3 = document.getElementById("m3");
m3.innerHTML = " e = " + e + " | f = " + f;

var m4 = document.getElementById("m4");
m4.innerHTML = "Using: |A| = ad-bc (determinant)";

var m5 = document.getElementById("m5");
m5.innerHTML = "Therefore, |A| = " + r;

var m6 = document.getElementById("m6");
m6.innerHTML = "Using the formula:";

var m7 = document.getElementById("m7");
m7.innerHTML = "X = (de-bf)/|A|";

var m8 = document.getElementById("m8");
m8.innerHTML = "Y = (af-ce)/|A|";

var m9 = document.getElementById("m9");
m9.innerHTML = "<b>Substituting</b>, we have X = [(" + d + "x" + e + ")-(" + b + "x" + f + ")]/" + r;

var m10 = document.getElementById("m10");
m10.innerHTML = "Y = [(" + a + "x" + f + ")-(" + c + "x" + e + ")]/" + r;

var m11 = document.getElementById("m11");
m11.innerHTML = "Therefore: X,Y = " + x + "," + y;

var m12 = document.getElementById("m11");
m12.innerHTML = "Thanks for trying out our page!  Made by Akunne Harrison and Okeke Lotanna(October 11 2019)";


}
	//THIS IS FOR THE 3 BY 3 MATRIX PART
document.write('<details>');
document.write('<br><br><summary style="font-size: 30px;">3 by 3 matrix</summary>');
document.write('<div style="background-color:black;">');

document.write('<div style="background-color:#006;">');
document.write('<div class="tall" style="background-color:#006; font-size: 80px; height: 100px; width: 20px; margin-top:20px; position: absolute;">A=</div>');

document.write('<p><span class="short" style="font-size: 20px; margin-left: 130px; margin-top: 20px; colour:yellow; position: absolute;" background-color:#006;>');
document.write('<input id="at" type="text" placeholder="a" style="border-radius:5px; width:0.5cm; margin-left:20px;">');
document.write('<input id="bt" type="text" placeholder="b" style="border-radius:5px; width:0.5cm; margin-left:10px;">');
document.write('<input id="ct" type="text" placeholder="c" style="border-radius:5px; width:0.5cm; margin-left:10px;">');
document.write('<input id="Xt" type="text" placeholder="X" style="border-radius:5px; width:0.5cm; margin-left:40px;">');
document.write('</span>');
document.write('<span class="shortt" style="font-size: 20px; margin-left: 130px; margin-top: 40px; position: absolute;">');
document.write('<input id="dt" type="text" placeholder="d" style="border-radius:5px; width:0.5cm; margin-left:20px;">');
document.write('<input id="et" type="text" placeholder="e" style="border-radius:5px; width:0.5cm; margin-left:10px;">');
document.write('<input id="ft" type="text" placeholder="f" style="border-radius:5px; width:0.5cm; margin-left:10px;">');
document.write('<input id="Yt" type="text" placeholder="Y" style="border-radius:5px; width:0.5cm; margin-left:40px;">');
document.write('</span>');
document.write('<span class="shorttt" style="font-size: 20px; margin-left: 130px;margin-top: 60px;position: absolute;">');
document.write('<input id="gt" type="text" placeholder="g" style="border-radius:5px; width:0.5cm; margin-left:20px;">');
document.write('<input id="ht" type="text" placeholder="h" style="border-radius:5px; width:0.5cm; margin-left:10px;">');
document.write('<input id="it" type="text" placeholder="i" style="border-radius:5px; width:0.5cm; margin-left:10px;">');
document.write('<input id="Zt" type="text" placeholder="Z" style="border-radius:5px; width:0.5cm; margin-left:40px;">');
document.write('</span></p>');
document.write('<div class="tall" style="font-size: 80px; height: 100px; width: 20px; margin-left:130px; color: red; position: absolute; background-color:transparent;"></div>');
document.write('<div class="talll" style="color:red; font-size: 80px; height: 100px; width: 20px; margin-left: 250px; position: absolute; background-color:transparent;"></div>');
document.write('<div class="talll" style="color:red; font-size: 80px; height: 100px; width: 20px; margin-left: 320px; position: absolute; background-color:transparent;"></div><br><br><br><br><br>');
document.write('</div><br><br>');

document.write('<form style="margin-left:15%;" onreset="matrix3_soln();"><input id="3matrix_btn" type="reset" value="SOLVE" style="border-radius:5px; margin-left:5%; margin-top:0%;"></form>');


document.write('<details>');
document.write('<summary style="background-color:black;">Show Answer Only</summary>');
document.write("<p id='mt'></p><br><br>");
document.write('</details>');



document.write('<details>');
document.write('<br><summary style="background-color:black;">Show Answer and Solution</summary>');
document.write("<div style='background-color:#006; color:yellow; font-size:20px; border-radius: 20px;'><hr><br><h1><u>Soln</u></h1>");
document.write("<p id='mt1'></p>");

document.write('<div style="background-color:#006;">');
document.write('<div class="tall" style="background-color:#006; font-size: 80px; height: 100px; width: 20px; margin-top:20px; position: absolute;">A=</div>');

document.write('<p><span class="short" style="font-size: 20px; margin-left: 130px; margin-top: 20px; colour:yellow; position: absolute;" background-color:#006;>');
document.write('<span style="color: yellow; margin-left: 30px; background-color:#006;">a</span>');
document.write('<span style="color: yellow; margin-left: 30px; background-color:#006;">b</span>');
document.write('<span style="color: yellow; margin-left: 30px; background-color:#006;">c</span>');
document.write('</span>');
document.write('<span class="shortt" style="font-size: 20px; margin-left: 130px; margin-top: 40px; position: absolute;">');
document.write('<span style="color: yellow; margin-left: 30px; background-color:#006;">d</span>');
document.write('<span style="color: yellow; margin-left: 30px; background-color:#006;">e</span>');
document.write('<span style="color: yellow; margin-left: 30px; background-color:#006;">f</span>');
document.write('</span>');
document.write('<span class="shorttt" style="font-size: 20px; margin-left: 130px;margin-top: 60px;position: absolute;">');
document.write('<span style="color: yellow; margin-left: 30px; background-color:#006;">g</span>');
document.write('<span style="color: yellow; margin-left: 30px; background-color:#006;">h</span>');
document.write('<span style="color: yellow; margin-left: 30px; background-color:#006;">i</span>');
document.write('</span></p>');
document.write('<div class="tall" style="font-size: 80px; height: 100px; width: 20px; margin-left:130px; color: red; position: absolute; background-color:#006;">|</div>');
document.write('<div class="talll" style="color:red; font-size: 80px; height: 100px; width: 20px; margin-left: 250px; position: absolute; background-color:#006;">|</div><br><br><br><br><br>');
document.write('</div>');
document.write('</div>');


document.write("<p><p id='mt2'></p><p id='mt3'></p><p id='mt4'></p><p id='mt5'></p><p id='mt6'></p>");
document.write("<hr><br>Evaluating along column 1");
document.write("<br>Using: |A| = [ a x ((e x i)-(h x f))) - (d x ((b x i)-(c x h))) + (g x ((b x f)-(c x e)) ] [DETERMINANT]<br>");

document.writeln("<p id='mt7'></p><br>");

document.writeln("<h2>Matrix of co-factors</h2>");
document.writeln("<p id='mt8'></p><br>");
document.writeln("<p id='mt9'></p><br>");
document.writeln("<p id='mt10'></p><br>");
document.writeln("<p id='mt11'></p><br>");
document.writeln("<p id='mt12'></p><br>");
document.writeln("<p id='mt13'></p><br>");
document.writeln("<p id='mt14'></p><br>");
document.writeln("<p id='mt15'></p><br>");
document.writeln("<p id='mt16'></p><br></p>");

document.write("<br>Using the formula:<br> ");
document.write("X = ((a11 x soln1)+(a21 x soln2)+(a31 x soln3))/|A|<br>");
document.write("Y = ((a12 x soln1)+(a22 x soln2)+(a32 x soln3))/|A|<br>");
document.write("Z = ((a13 x soln1)+(a23 x soln2)+(a33 x soln3))/|A|<br>");


document.write("<p id='mt17'></p>");

document.write("<p id='mt18'></p>");

document.write("<p id='mt19'></p>");

document.write("<p id='mt20'></p>");

document.write('</details>');
document.write('</div>');
document.write('</details>');

function matrix3_soln () {
var at = document.getElementById('at').value;
var bt = document.getElementById('bt').value;
var ct = document.getElementById('ct').value;
var Xt = document.getElementById('Xt').value;
var dt = document.getElementById('dt').value;
var et = document.getElementById('et').value;
var ft = document.getElementById('ft').value;
var Yt = document.getElementById('Yt').value;
var gt = document.getElementById('gt').value;
var ht = document.getElementById('ht').value;
var it = document.getElementById('it').value;
var Zt = document.getElementById('Zt').value;
var dm = dt * -1;
var r = (at*((et*it)-(ht*ft)))+(dm*((bt*it)-(ct*ht)))+(gt*((bt*ft)-(ct*et)));
var a11 = (et*it)-(ht*ft);
var a12 = -1*((dt*it)-(gt*ft));
var a13 = (dt*ht)-(gt*et);
var a21 = -1*((bt*it)-(ct*ht));
var a22 = (at*it)-(gt*ct);
var a23 = -1*((at*ht)-(gt*bt));
var a31 = (bt*ft)-(ct*et);
var a32 = -1*((at*ft)-(ct*dt));
var a33 = (at*et)-(dt*bt);
var XP = ((a11*Xt)+(a21*Yt)+(a31*Zt))/r;
var YP = ((a12*Xt)+(a22*Yt)+(a32*Zt))/r;
var ZP = ((a13*Xt)+(a23*Yt)+(a33*Zt))/r;

var mt = document.getElementById("mt");
mt.innerHTML = "(X,Y,Z) = (" + XP + ", " + YP + ", " + ZP + ")";

var mt1 = document.getElementById("mt1");
mt1.innerHTML = "Let the matrix be ";

var mt2 = document.getElementById("mt2");
mt2.innerHTML = "Where: a = " + at + " | b = " + bt;

var mt3 = document.getElementById("mt3");
mt3.innerHTML = " c = " + ct + " | d = " + dt;

var mt4 = document.getElementById("mt4");
mt4.innerHTML = " e = " + et + " | f = " + ft;

var mt5 = document.getElementById("mt5");
mt5.innerHTML = " g = " + gt + " | h = " + ht  + " | i = " + it;

var mt6 = document.getElementById("mt6");
mt6.innerHTML = " soln1 = " + Xt  + " |  soln2 = " + Yt  + " |  soln3 = " + Zt;

var mt7 = document.getElementById("mt7");
mt7.innerHTML = "Therefore, |A| = [ " + at + " x ((" + et + "x" + it + ")-(" + ht + "x" + ft + "))) - (" + dt + "x ((" + bt + "x" + it + ")-(" + ct + "x" + ht + "))) + (" + gt + "x ((" + bt + "x" + ft + ")-(" + ct +  "x" + et + ")) ] = " + r;

var mt8 = document.getElementById("mt8");
mt8.innerHTML = "Let <br>a11 = (exi)-(hxf) = " + a11;

var mt9 = document.getElementById("mt9");
mt9.innerHTML = "a12 = -1 x ((d x i) - (g x f)) = " + a12;

var mt10 = document.getElementById("mt10");
mt10.innerHTML = "a13 = (d x h) - (g x e) = " + a13;

var mt11 = document.getElementById("mt11");
mt11.innerHTML = "a21 =  -1 x ((b x i) - (c x h)) = " + a21;

var mt12 = document.getElementById("mt12");
mt12.innerHTML = "a22 = (a x i) - (g x c) = " + a22;

var mt13 = document.getElementById("mt13");
mt13.innerHTML = "a23 =  -1 x ((a x h) - (g x b)) = " + a23;

var mt14 = document.getElementById("mt14");
mt14.innerHTML = "a31 = (b x f) - (c x e) = " + a31;

var mt15 = document.getElementById("mt15");
mt15.innerHTML = "a32 =  -1 x ((a x f) - (c x d)) = " + a32;

var mt16 = document.getElementById("mt16");
mt16.innerHTML = "a33 = (a x e) - (d x b) = " + a33;

var mt17 = document.getElementById("mt17");
mt17.innerHTML = "<b>Substituting, </b>we have X = [(" + a11 + "x" + Xt + ")+(" + a21 + "x" + Yt + ")+(" + a31 + "x" + Zt + ")]/" + r;

var mt18 = document.getElementById("mt18");
mt18.innerHTML = "Y = [(" + a12 + "x" + Xt + ")+(" + a23 + "x" + Yt + ")+(" + a32 + "x" + Zt + ")]/" + r;

var mt19 = document.getElementById("mt19");
mt19.innerHTML = "Z = [(" + a13 + "x" + Xt + ")+(" + a23 + "x" + Yt + ")+(" + a33 + "x" + Zt + ")]/" + r;

var mt20 = document.getElementById("mt20");
mt20.innerHTML = "(X,Y,Z) = (" + XP + ", " + YP + ", " + ZP + ")";

}
document.write('</details>');

document.write('<details>');
document.write('<summary onclick="rank();" style="font-size: 30px; margin-top: 70px; color:yellow;">Correlation</summary>');
// document.write('<a href="#" onclick="spearman();">spearman correlation coefficient</a>');
function rank () {
	var n = parseInt(prompt("Enter n."));
		var itemsx = new Array(n);
		var itemsy = new Array(n);
		for (var x = 0; x < itemsx.length; x++) {
			itemsx[x] = parseInt(prompt(`Please enter value for X${x + 1}`));
		}
		for (var y = 0; y < itemsy.length; y++) {
			itemsy[y] = parseInt(prompt(`Please enter value for Y${y + 1}`));
		}
			document.write("<div id='rank_div' style='background-color: rgba(0, 0, 0, 0.5); height: 100%;  border-radius: 20px;'><br>");
			document.write("<table border = '1' id='R_table' style='margin-left: 20px;'>");
			document.write("<tr style='color:yellow; background-color:#003;'>");
			document.write("<th style='color:; background-color:blue;'>S/N</th>");
			document.write("<th>X</th>");
			document.write("<th>Y</th>");
			document.write("<th>XY</th>");
			document.write("<th>X<sup>2</sup></th>");
			document.write("<th>Y<sup>2</sup></th>");
			document.write("</tr>");

		var xa = 0;
		var ya = 0;
		var total_DS = 0;
		var Ex = 0;
		var Ey = 0;
		var Ex2= 0;
		var Ey2 = 0;
		var Exy = 0;
		while(xa < itemsx.length && ya < itemsy.length){
			document.write("<tr style='color:yellow; background-color:black;'><td style='color:; background-color:blue;'>" + eval(xa+1) + "</td>");
			document.write("<td>" + itemsx[xa] + "</td>");
			document.write("<td>" + itemsy[ya] + "</td>");
			document.write("<td>" + itemsx[xa]*itemsy[ya] + "</td>");
			document.write("<td>" + Math.pow(itemsx[xa], 2) + "</td>");
			document.write("<td>" + Math.pow(itemsy[ya], 2) + "</td>");

			Ex += itemsx[xa];
			Ey += itemsy[ya];
			Ex2 += Math.pow(itemsx[xa], 2);
			Ey2 += Math.pow(itemsy[ya], 2);
			Exy += itemsx[xa]*itemsy[ya];				
			xa++;
			ya++;
		}
		document.write("</tr>");

		var nExy = n*Exy;
		var ExEy = Ex*Ey;
		var Ex_2 = Ex*Ex;
		var Ey_2 = Ey*Ey;
		var Root_x = Math.sqrt((n*Ex2)-Ex_2);
		var Root_y = Math.sqrt((n*Ey2)-Ey_2);
		var num = nExy-ExEy;
		var den = Root_x*Root_y;
		var R = num/den;
		var reg_b = (nExy - ExEy)/((n*Ex2) - Ex_2);
		var reg_a = (Ey/n) - ((reg_b*Ex)/n);

		document.write("<tr style='color:yellow; background-color:blue;'><td>Sum</td>");
			document.write("<td>" + Ex + "</td>");
			document.write("<td>" + Ey + "</td>");
			document.write("<td>" + Exy + "</td>");
			document.write("<td>" + Ex2 + "</td>");
			document.write("<td>" + Ey2 + "</td>");
		document.write("</tr>");
		document.write("</table>");

		if ((reg_a*-1) < 1 && reg_a!==0 && reg_b!==0) { //if reg_a is positive
		document.write("<p style='color:yellow'> The regression equation of Y on X is<br> Y = " + reg_b + "X + " + reg_a + "</p>");	
		};
		if ((reg_a*-1) > 1 && reg_a!==0 && reg_b!==0) { //if reg_a is negative
		document.write("<p style='color:yellow'> The regression equation of Y on X is<br> Y = " + reg_b + "X " + reg_a + "</p>");
		};
		if (reg_a==0 && reg_b==0) {
			document.write("<p style='color:yellow'> The regression equation of Y on X is<br> Y = 0</p>");
		}
		if (reg_a==0  && reg_b!==0) {
			document.write("<p style='color:yellow'> The regression equation of Y on X is<br> Y = " + reg_b + "X </p>");
		};
		if (reg_a!==0  && reg_b==0) {
			document.write("<p style='color:yellow'> The regression equation of Y on X is<br> Y = " + reg_a + " </p>");
		};

		if (R >= -1 && R <= 1) {
		document.write("<p style='color:yellow'> The product moment correlation coefficient of X and Y is " + R + "</p>");
	
		if (R >= 0.5 && R <= 1) {
			document.write("<marquee style='color:yellow'>X and Y are highly positively correlated.</marquee>");
		}
		if (R >= -1 && R <= -0.5) {
			document.write("<marquee style='color:yellow'>X and Y are highly negatively correlated.</marquee>");
		}
		if (R >= -0.5 && R <= 0.5 && R !== 0) {
			document.write("<marquee style='color:yellow'>X and Y are weakly correlated.</marquee>");
		}
		if (R === 0) {
			document.write("<marquee style='color:yellow'>There is no correlation between X and Y.</marquee>");
		}
	}else{
		var R_table = document.getElementById("R_table");
		R_table.style.visibility = "hidden";
		document.write("<marquee style='color: red'>A problem occured. Please try again.</marquee>");
	}
	document.write("<input type='button' value='Return' onclick='history.back();'");
	document.write("</div>");
}

// function spearman () {

// }
document.write('</details>');

document.write('<details>');
document.write('<summary style="font-size: 30px; margin-top: 70px; color:yellow;">Progressions</summary>');
document.write('<details>');-
document.write('<summary style="font-size: 30px; margin-top: 70px; color:yellow;">Arithemetic Progression</summary>');
document.write('<div id="A.P">');
document.write('<input type="text" id="AP_first_term" style="width:10%;" placeholder="first term">');
document.write('<input type="text" id="co_diff" style="width:10%;" placeholder="common difference">');
document.write('<input type="text" id="nth_term" style="width:25%;" placeholder="nth term">');
document.write('<input type="text" id="AP_series" style="width:25%;" placeholder="How many AP_series needed?">');
document.write('<details>');
document.write('<summary>Value of nth term</summary>');
document.write('<p id="val_nth_term"></p>');
document.write('</details>');
document.write('<details>');
document.write('<summary>Sum of nth term</summary>');
document.write('<p id="sum_nth_term"></p>');
document.write('</details>');
document.write('<input id="solver_AP" type="button" value="solve" onclick="solver_AP();">');
document.write('</div>');

function solver_AP () {
	var AP_first_term = parseFloat(document.getElementById('AP_first_term').value);
	var co_diff = parseFloat(document.getElementById('co_diff').value);
	var nth_term = parseFloat(document.getElementById('nth_term').value);
	var val_nth_term = AP_first_term + (nth_term-1)*co_diff;
	var sum_nth_term = (nth_term/2)*(2*AP_first_term + (nth_term-1)*co_diff);
	var p_val_nth_term = document.getElementById('val_nth_term');
	p_val_nth_term.innerHTML = 'The ' + nth_term + 'th of the A.P is ' + val_nth_term;

	var p_sum_nth_term = document.getElementById('sum_nth_term');
	p_sum_nth_term.innerHTML = 'The sum of the first ' + nth_term + ' terms of the A.P is ' + sum_nth_term;	

var nth_series = 1;	
var nth_term_2 = 2;
var AP_series = parseInt(document.getElementById('AP_series').value);
var AP_series_array = new Array(AP_series);
AP_series_array[0] = AP_first_term;
while(nth_series<AP_series){
	AP_series_array[nth_series] = AP_first_term + (nth_term_2-1)*co_diff;
	nth_series++;
	nth_term_2++;
}
alert('The first ' + AP_series + ' terms of the AP are:\n' + AP_series_array);
}
document.write('</details>');

document.write('<details>');
document.write('<summary style="font-size: 30px; margin-top: 70px; color:yellow;">Geometric Progression</summary>');
document.write('<div id="G.P">');
document.write('<input type="text" id="GP_first_term" style="width:10%;" placeholder="first term">');
document.write('<input type="text" id="co_rat" style="width:10%;" placeholder="common ratio">');
document.write('<input type="text" id="G_nth_term" style="width:25%;" placeholder="nth term">');
document.write('<input type="text" id="GP_series" style="width:25%;" placeholder="How many GP_series needed?">');
document.write('<details>');
document.write('<summary>Value of nth term</summary>');
document.write('<p id="G_val_nth_term"></p>');
document.write('</details>');
document.write('<details>');
document.write('<summary>Sum of nth term</summary>');
document.write('<p id="G_sum_nth_term"></p>');
document.write('<p id="infinity_sum"></p>');
document.write('</details>');
document.write('<input id="solver_GP" type="button" value="solve" onclick="solver_GP();">');
document.write('</div>');

function solver_GP () {
	var GP_first_term = parseFloat(document.getElementById('GP_first_term').value);
	var co_rat = parseFloat(document.getElementById('co_rat').value);
	var G_nth_term = parseFloat(document.getElementById('G_nth_term').value);

	var _val_nth_term = GP_first_term * Math.pow(co_rat, (G_nth_term-1));
	var G_val_nth_term = document.getElementById('G_val_nth_term');
	G_val_nth_term.innerHTML = 'The ' + G_nth_term + 'th of the G.P is ' + _val_nth_term;
	
	var _sum_nth_term_less = (GP_first_term*(1-(Math.pow(co_rat, G_nth_term))))/(1-co_rat);
	var _sum_nth_term_more = GP_first_term*((Math.pow(co_rat, G_nth_term))-1)/(co_rat-1);
	var G_sum_nth_term = document.getElementById('G_sum_nth_term');

	 if (co_rat<1) {
	G_sum_nth_term.innerHTML = 'The sum of the first ' + G_nth_term + ' terms of the G.P is ' + _sum_nth_term_less;	
	 };
	 if (co_rat>1) {
	G_sum_nth_term.innerHTML = 'The sum of the first ' + G_nth_term + ' terms of the G.P is ' + _sum_nth_term_more;	
	 };
	var _sum_nth_term_infinity = GP_first_term/(1-co_rat);
	var infinity_sum = document.getElementById('infinity_sum');
	infinity_sum.innerHTML = 'The sum to infinity of the G.P is ' + _sum_nth_term_infinity;	

var GP_nth_series = 1;	
var GP_nth_term_2 = 2;
var GP_series = parseInt(document.getElementById('GP_series').value);
var GP_series_array = new Array(GP_series);
GP_series_array[0] = GP_first_term;
	while(GP_nth_series<GP_series){
	GP_series_array[GP_nth_series] = GP_first_term * Math.pow(co_rat, (GP_nth_term_2-1));
	GP_nth_series++;
	GP_nth_term_2++;
}
alert('The first ' + GP_series + ' terms of the G.P are:\n' + GP_series_array);
}
document.write('</details>');
document.write('</details>');

document.write('<details>');
document.write('<summary style="font-size: 30px; margin-top: 70px; color:yellow;">co-ordinate Geometry</summary>');
document.write('<div id="C_geometry">');
document.write('<input id="c_geometry_btn" type="button" value="proceed" onclick="c_geometry();">');
document.write('<p id="slope"></p>');
document.write('<p id="midpoint"></p>');
document.write('<p id="distance"></p>');
document.write('</div>');
function c_geometry () {
	document.getElementById('c_geometry_btn').value = 'Refresh';
	var x1 = parseInt(prompt('X1'));
	var x2 = parseInt(prompt('x2'));
	var y1 = parseInt(prompt('y1'));
	var y2 = parseInt(prompt('y2'));
	var slope = (y2-y1)/(x2-x1);
	var midpoint_x = (x2+x1)/2;
	var midpoint_y = (y2+y1)/2;
	var distance = Math.sqrt(((x2-x1)*(x2-x1))+((y2-y1)*(y2-y1)));
	document.getElementById('slope').innerHTML = 'The slope is ' + slope;
	document.getElementById('midpoint').innerHTML = 'The midpoint is (' + midpoint_x + ',' + midpoint_y + ')';
	document.getElementById('distance').innerHTML = 'The distance between the two points is ' + distance;
}
document.write('</details>');

document.write('<details>');
document.write('<summary style="font-size: 30px; margin-top: 70px; color:yellow;">Some Important Math Equations</summary>');
document.write('<details>');
document.write('<summary style="font-size: 30px; margin-top: 70px; color:yellow;">Equations Involving Lines and Graphs</summary>');
document.write('<div>');
document.write('<p style="font-size: 30px; margin-top: 10px; color:yellow;">Equations involving straight lines:</p>');
document.write('<p style="font-size: 15px; margin-top: 10px; color:yellow;">Equation of a straight line: Y = MX + C</p>');
document.write('<p style="font-size: 15px; margin-top: 10px; color:yellow;">Where Y is the co-ordinate of the vertical axis <br> X is the co-ordinate of the horizontal axis <br> C is the intercept on the vertical axis <br> and M is the slope/gradient</p>');
document.write('<p style="font-size: 15px; margin-top: 10px; color:yellow;">Slope/Gradient = <sup>dy</sup>/<sub>dx</sub> = <sup>y<sub>2</sub>-y<sub>1</sub></sup>/<sub>x<sub>2</sub>-x<sub>1</sub></sub></p>');
document.write('<p style="font-size: 30px; margin-top: 10px; color:yellow;">Equations involving curves:</p>');
document.write('<p style="font-size: 20px; margin-top: 10px; color:yellow;">Circles:</p>');
document.write('<p style="font-size: 20px; margin-top: 10px; color:yellow;">General equation of circles: (x-a)<sup>2</sup> + (y-b)<sup>2</sup> = r<sup>2</sup></p>');
document.write('<p style="font-size: 15px; margin-top: 10px; color:yellow;">In the equation above, a and b are the x and y co-ordinates of the centre of the circle and r is the radius of the circle.</p>');
document.write('<p style="font-size: 20px; margin-top: 10px; color:yellow;">Parabolas:</p>');
document.write('<p style="font-size: 20px; margin-top: 10px; color:yellow;">General equation of Parabolas: ax<sup>2</sup> + bx + c</p>');
document.write('<p style="font-size: 15px; margin-top: 10px; color:yellow;">vertex = <sup>-b</sup>/<sub>2a</sub></p>');
document.write('</div>');
document.write('</details>');

document.write('<details>');
document.write('<summary style="font-size: 30px; margin-top: 70px; color:yellow;">Areas of plane shapes</summary>');
document.write('<div>');
document.write('<p style="font-size: 15px; margin-top: 10px; color:cyan;">(Let &copy; represent angle.) <br>PI = <sup>22</sup>/<sub>7</sub> = 3.142</p>');
document.write('<p style="font-size: 15px; margin-top: 10px; color:yellow;">Area of a rectangle/square: Length x breadth<br></p>');
document.write('<p style="font-size: 15px; margin-top: 10px; color:yellow;">Area of a triangle: <sup>1</sup>/<sub>2</sub> x base x height<br>or ab Sin c <br> Sine rule:    <sup>a</sup>/<sub>sin A</sub> = <sup>b</sup>/<sub>Sin B</sub> = <sup>c</sup>/<sub>Sin C</sub> <br>Cosine rule: C<sup>2</sup> = a<sup>2</sup> + b<sup>2</sup> - 2ab cos &copy;</p>');

document.write('<p style="font-size: 15px; margin-top: 10px; color:yellow;">Area of a circle: PI x r<sup>2</sup><br></p>');
document.write('<p style="font-size: 15px; margin-top: 10px; color:yellow;">Circumference of a circle: PI x d<br></p>');
document.write('<p style="font-size: 15px; margin-top: 10px; color:yellow;">Area of a sector: <sup>&copy;</sup>/<sub>360</sub> x PI x r<sup>2</sup></p>');
document.write('<p style="font-size: 15px; margin-top: 10px; color:yellow;">Length of arc: <sup>&copy;</sup>/<sub>360</sub> x 2 x PI x r</p>');
document.write('<p style="font-size: 15px; margin-top: 10px; color:yellow;">Length of chord: 2 x r x Sin(<sup>&copy;</sup>/<sub>2</sub>)</p>');
document.write('<p style="font-size: 15px; margin-top: 10px; color:yellow;">Area of a trapezium: <sup>1</sup>/<sub>2</sub> (a+b) x height</p>');
document.write('</div>');
document.write('</details>');

document.write('<details>');
document.write('<summary style="font-size: 30px; margin-top: 70px; color:yellow;">Volumes of Solids</summary>');
document.write('<div>');
document.write('<p style="font-size: 15px; margin-top: 10px; color:yellow;">Volume of Cube/Cuboid: Length x breadth x height</p>');
document.write('<p style="font-size: 15px; margin-top: 10px; color:yellow;">Volume of Prism: Area of base x height</p>');
document.write('<p style="font-size: 15px; margin-top: 10px; color:yellow;">Volume of Pyramid: <sup>1</sup>/<sub>3</sub> x Length x breadth x height</p>');
document.write('<p style="font-size: 15px; margin-top: 10px; color:yellow;">Volume of Cone: <sup>1</sup>/<sub>3</sub> x PI x r<sup>2</sup> x height</p>');
document.write('<p style="font-size: 15px; margin-top: 10px; color:yellow;">Total surface area of a Cone: PI x r x slant height</p>');
document.write('<p style="font-size: 15px; margin-top: 10px; color:yellow;">Volume of Cylinder: PI x r<sup>2</sup> x h<br></p>');
document.write('<p style="font-size: 15px; margin-top: 10px; color:yellow;">Total surface area of an open cylinder: PI x d x h<br></p>');
document.write('<p style="font-size: 15px; margin-top: 10px; color:yellow;">Total surface area of a closed cylinder: (PI x d x h) + (2 x PI x r<sup>2</sup>)<br></p>');
document.write('<p style="font-size: 15px; margin-top: 10px; color:yellow;">Volume of a sphere: <sup>4</sup>/<sub>3</sub> x PI x r<sup>3</sup></p>');


document.write('</div>');
document.write('</details>');

document.write('<details>');
document.write('<summary style="font-size: 30px; margin-top: 70px; color:yellow;">Miscellaneous</summary>');
document.write('<div>');

document.write('<p style="font-size: 15px; margin-top: 10px; color:yellow;">Product moment correlation coefficient: <sup>nExy - ExEy</sup>/<sub>sqrt(nEx<sup>2</sup> - (Ex)<sup>2</sup>) x sqrt(nEy<sup>2</sup> - (Ey)<sup>2</sup>)</sub><br></p>');
document.write("<p><span style='font-size:30px'>spearman correlation coefficient</span> = <span style='font-size:200%'>1 - </span> <sup><sup>6ED<sup>2</sup></sup>/n(n<sup>2</sup>-1)</sup></p>");

document.write('<p style="font-size: 15px; margin-top: 10px; color:yellow;">Quadratic Formula<br></p>');
document.write('<p style="font-size: 15px; margin-top: 10px; color:yellow;"><sup>-b +/- sqrt(b<sup>2</sup> - 4ac)/</sup>2a<sub></sub> </p>');

document.write('<p style="font-size: 15px; margin-top: 10px; color:yellow;">Arithemetic Progression<br></p>');
document.write('<p style="font-size: 15px; margin-top: 10px; color:yellow;">T(n) = a + (n-1)d</p>');
document.write('<p style="font-size: 15px; margin-top: 10px; color:yellow;">Sum of AP: <sup>n</sup>/<sub>2</sub><sup>[2a + (n-1)d]</sup></p>');
document.write('<p style="font-size: 15px; margin-top: 10px; color:yellow;">Geometric Progression<br></p>');
document.write('<p style="font-size: 15px; margin-top: 10px; color:yellow;">T(n) = ar<sup>n-1</sup></p>');
document.write('<p style="font-size: 15px; margin-top: 10px; color:yellow;">Sum of GP: <br>when r < 1: <sup>a(1 - r<sup>n</sup>)</sup>/<sub>1 - r</sub> <br>when r > 1: <sup>a(r<sup>n</sup> - 1)</sup>/<sub>r - 1</sub></p>');
document.write('<p style="font-size: 15px; margin-top: 10px; color:yellow;">Sum to infinity = <sup>a</sup>/<sub>1 - r</sub></p>');

document.write('</div>');
document.write('</details>');

document.write('</div>');
