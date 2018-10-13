//Домашка к уроку 5 js
//1) Напишите if..else, соответствующий следующему switch:

var browser = prompt("Название браузера?");
if ( browser == 'IE'){
	alert('О да у вас IE');
}else
if (browser == 'Chrome' || browser =='Firefox'|| browser == 'Safari' || browser == 'Opera'){

	alert ('Дa эти браузеры мы поддерживает');
} else{
	alert ('Мы надеемся, что и в вашем браузере все Ок.')
}


//2) Перепишите код с использованием одной конструкции switch:
var a = +prompt ('a?', 100)
switch (a)
{
	case (0):alert(0);break;
	case (1):alert (1);break;
	case (2):
	case (3):alert( 2.3);break;
	default:
	alert('ups');
}

//Домашка к уроку 4 js
//variant 1

//var age = prompt ('Cколько Вам лет?', '');
// if (age>=14) {
// 	alert('входите в рамки ');
// }else if (age<=90) {
// 	alert('входите в рамки ');
// }else {
// 	alert('не входите в рамки ');
// }

// variant 2

// if (age<=14) {
// 	alert('входите в рамки ');
// }else if (age>=90) {
// 	alert('входите в рамки ');
// }else {
// 	alert('не входите в рамки ');
// }

// if (age!=14);
// if (age<=13) {
// 	alert('входите в рамки ');
// } else if (age>=90) {
// 	alert('входите в рамки ');
// }else {
// 	alert('не входите в рамки ');
// }


// function prov(){ 
// 	var a=document.forma1.elements[2].value; 
// 	var b=document.forma1.elements[3].value; 
// 	if (a==b){ 
// 	alert ("Вы зарегистрированы!"); } 
// 	else { 
// 	alert ("Введите правильный пароль."); } }


// var a=5, b=10;
// // 1 вариант , проверяет условие если Верно
// if (a==b){
// alert('Да равно!')
// }
// // 2 вариант
// if(a==b){
// alert('Да равно!')	
// }else {
// alert('Heт не равно!')	
// }
// // 3 вариант
// if(a<b){
// alert('А - меньше ')	
// }else if(a==b){
// alert('А равно В ')	
// } else{
// alert('В - меньше ')
// }

// function bigPict() {
// 	var w=document.princ.width;
// 	if (w<300){
// 		document.princ.width=w+10;
// 		document.princ.ыкс="princ.jpg";
// 		setTimeout ("bigPict()", 500)
// 	}
// }



// function maxZ(asd){
// 	var a=1*asd.zn1.value;
// 	var b=1*asd.zn2.value;
// 	var c=1*asd.zn3.value;
// 	var m=a;
// 	if (b>m){ m=b;}
// 	if (c>m) { m=c;}
// 	asd.rez.value=m;
// }

//document.body.style.backgroundColor = "red";
	

// function Vday1(obj){ 
// 	var a = obj.zn.value; 
// 	if (a == "понедельник") 
// 	{obj.res.value="В понедельник будет ветрено, температура воздуха поднимется до +20 градусов";
// } else if (a == "вторник", "втор") {
// obj.res.value="Во вторник будет солнечно, температура воздуха поднимется до +25 градусов";
// } else if (a=="среда") {
// obj.res.value="В среду будет прохладно, температура воздуха опустится до +17 градусов";
// } else if (a=="четверг") {
// obj.res.value="В четверг будет пасмурно, температура воздуха опустится до +10 градусов";
// } else if (a=="пятница") {
// obj.res.value="В пятницу будет облачно, температура воздуха поднимется до +15 градусов";
// } else if (a=="суббота") {
// obj.res.value="В субботу будет ветрено, температура воздуха поднимется до +27 градусов";
// } else if (a=="воскресенье") {
// obj.res.value="В воскресенье будет ясно, температура воздуха поднимется до +30 градусов";
// } else 
// obj.res.value="Укажите правильно день недели"; 
// }

// var arg = + prompt("Введите arg?");
// switch (arg) 
// { 
// 	case '0': 
// 	case '1': 
// 	alert( 'Один или ноль' );
// 	break;
// 	case '2': 
// 	alert( 'Два' ); 
// 	break;
// 	case 3: 
// 	alert( 'Никогда не выполнится' );
// 	default: 
// 	alert('Неизвестное значение: ' + arg)
// }