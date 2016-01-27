/*Grace Vriezen's Module 2 */
function myFunct () {
	var mydiv = document.getElementById ("mydiv");
	mydiv.innerHTML = "Hello World.";
};

window.onload = myFunct ();

// cities table



$ ('#mydiv').html ('Hello World');
// minneapolis 400,070, saint paul 294,873, rochester 110724 Duluth 86128

//initialize function
function initialize () {
	cities ();
};

//create table

var cityPop = [
	{
		city: 'Minneapolis',
		population: 400070
	},
	{
		city: 'Saint Paul',
		population: 294873
	},
	{ 	city:'Rochester',
		population: 110724
	},
	{
		city:'Duluth',
		population: 86128
	}
];

//append table to div

$("#mydiv").append("<table>");
$("table").append("<tr>");
$("tr").append(<th>City</th><th>Population</th>);

//loop

for (var i = 0; i<cityPop.length; i++) {
	var rowHtml = "<tr><td>" + cityPop [i]. city + "</td><td>" + cityPop [i]. population + "</td></tr>"
	$("table").append(rowHtml);

};

};

//initialize

$(document).ready(initialize);






//Debugging Script from LearnUW
function addColumns(cityPop){
    
    $('tr').each(function(i){

    	if (i == 0){

    		$(this).apend('<th>City Size</th>');
    	} else {

    		var citySize;

    		if (cityPop[i-1].population < 100000){
    			citySize = 'Small';

    		} else if (cityPop[i-1].population < 500000){
    			citysize = 'Medium';

    		} else {
    			citySize = 'Large';
    		};

    		$this.append('<td' + citySize + '</td>');
    	};
    });
};

function addEvents(){

	$('#table').mouseover(function(){
		
		var color = "rgb(";

		for (var i=0; i<3; i++){

			var random = Math.round(Math.random() * 255);

			color += "random";

			if (i<2){
				color += ",";
			
			} else {
				color += ")";
		};

		$(this).css('color', color);
	});

	function clickme(){

		alert('Hey, you clicked me!');
	};

	$('table').on('click', clickme);
};