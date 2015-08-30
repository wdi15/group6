$(document).ready(function(){
	var name = prompt("What is your name so we can log you on?");
	var welcome = ["Bonjour", "Welcome back", "Hola", "How are you", "Hi"];
	var num = Math.floor(Math.random() * (welcome.length));
	var addition = num==3 ? "? " : " ";
	$("#change").text(welcome[num] + ", " + name + addition);
});