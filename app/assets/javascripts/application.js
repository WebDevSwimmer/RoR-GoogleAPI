// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .
//= require jquery

var key = "AIzaSyCpFtClp-NL5Q3oZQtJ4HMjXxQsJiaoizc";                // API KEY

var number = 0;

function hndlr(response) {

	var imgArr = document.getElementsByClassName('square');
	var optRadio;
	var items= response.items.length;
	//console.log(response);
	switch(number) {
	  case 0:
	  	optRadio = document.getElementsByName('optQues');
	    imgArr[0].style.backgroundImage = optRadio[0].value = "url(" + response.items[Math.floor(Math.random() * items)].link + ")";
	    imgArr[1].style.backgroundImage = optRadio[1].value = "url(" + response.items[Math.floor(Math.random() * items)].link + ")";
	    imgArr[2].style.backgroundImage = optRadio[2].value = "url(" + response.items[Math.floor(Math.random() * items)].link + ")";
	    break;
	  case 1:
	  	optRadio = document.getElementsByName('optAnswer1');
		  imgArr[3].style.backgroundImage = optRadio[0].value = "url(" + response.items[Math.floor(Math.random() * items)].link + ")";
		  imgArr[4].style.backgroundImage = optRadio[1].value = "url(" + response.items[Math.floor(Math.random() * items)].link + ")";
	    break;
	  case 2:
	  	optRadio = document.getElementsByName('optAnswer2');
		  imgArr[5].style.backgroundImage = optRadio[0].value = "url(" + response.items[Math.floor(Math.random() * items)].link + ")";
		  imgArr[6].style.backgroundImage = optRadio[1].value = "url(" + response.items[Math.floor(Math.random() * items)].link + ")";
	    break;
	  case 3:
	  	optRadio = document.getElementsByName('optAnswer3');
		  imgArr[7].style.backgroundImage = optRadio[0].value = "url(" + response.items[Math.floor(Math.random() * items)].link + ")";
		  imgArr[8].style.backgroundImage = optRadio[1].value = "url(" + response.items[Math.floor(Math.random() * items)].link + ")";
	    break;
	  case 4:
	  	optRadio = document.getElementsByName('optAnswer4');
		  imgArr[9].style.backgroundImage = optRadio[0].value = "url(" + response.items[Math.floor(Math.random() * items)].link + ")";
		  imgArr[10].style.backgroundImage = optRadio[1].value = "url(" + response.items[Math.floor(Math.random() * items)].link + ")";
		  break;
		}     													 // a way to see your results
}

function itemImageSearch(query){
	//empty blank test	
	var JSElement = document.createElement('script');
	var id = "002810620316672423783:5jwwbxslllk"; 											// CSE ID
  JSElement.src = `https://www.googleapis.com/customsearch/v1?key=${key}&cx=${id}&q=`+query+'&safe=active&searchType=image&imgSize=medium&callback=hndlr';
  document.getElementsByTagName('head')[0].appendChild(JSElement);
}

function imageSearch(){
	var query = [];
	query.push(document.getElementById('quiz').value.trim());
	query.push(document.getElementById('answer1').value.trim());
	if (document.getElementById('answer2'))
		query.push(document.getElementById('answer2').value.trim());
	if (document.getElementById('answer3'))
		query.push(document.getElementById('answer3').value.trim());
	if (document.getElementById('answer4'))	
		query.push(document.getElementById('answer4').value.trim());
	
	var i = 0;
	do {
	  number = i;
		var JSElement = document.createElement('script');
		itemImageSearch(query[i]);
		i++;
	}	while (i < query.length && query[i] != "");
}

$(document).ready(function() {
	$('button').click(function(event){
		if($(this).text().trim()==="Edit"){
			$(this).addClass('hidden');
			$(this).prev().addClass('hidden');
			obj = $(this).prev();
			obj.prev().removeClass('hidden');
			obj = obj.prev();
			obj.prev().removeClass('hidden');
		}
		else if ($(this).text().trim()==="Generate") {
			$(this).addClass('hidden');
			$(this).prev().addClass('hidden');
			obj = $(this).prev();
			obj.prev().removeClass('hidden');
			obj = obj.prev();
			obj.prev().removeAttr('disabled')
			obj.prev().removeClass('hidden');
		}
		else if ($(this).text().trim()==="Find more images") {
			if ($(this).parent().attr('class')=="col-lg-3 col-md-3 col-sm-12"){
				query = $('#quiz').val();
				number = 0;
			}
			else {
				id = $(this).parent().parent().attr('id');
				query = $('#answer'+ id).val();			
				number = parseInt(id);
			}
			//empty
			itemImageSearch(query);
		}
		event.preventDefault(); 
	});
});

$( window ).on( "load", function() {
	//simageSearch();
});
