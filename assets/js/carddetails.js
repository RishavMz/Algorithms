var $thisvalue1;
var $prevvalue1;
$card1text1 = '<b>Worked in a team of 2 members to design a web based event organising / broadcasting platform where organisers can upload details about their events, and communicate with students who can register themselves for the events they wish to participate in. There is also an option for admin support UI where the admin can manage the overall functioning of the site. </b>';
$('.card1').hover(
	function() {
		$thisvalue1 = $(".ct1").html();
		if($thisvalue1 != $card1text1){
			$prevvalue1 = $thisvalue1;
		}
		//console.log($thisvalue1,$prevvalue1);
		$(".ct1").html(""+$card1text1+"");
	},
	function() {
		$(".ct1").html(""+$prevvalue1+"");
	}
);

var $thisvalue2;
var $prevvalue2;
$card1text2 = '<b>Worked in a team of 6 members to design a Website for IEEE Student branch for our institute using MERN stack(MongoDB, Express , React, NodeJs).  </b>';
$('.ct2').hover(
	function() {
		$thisvalue2 = $(".ct2").html();
		if($thisvalue2 != $card1text2){
			$prevvalue2 = $thisvalue2;
		}
		//console.log($thisvalue2,$prevvalue2);
		$(".ct2").html(""+$card1text2+"");
	},
	function() {
		$(".ct2").html(""+$prevvalue2+"");
	}
);




var $thisvalue11;
var $prevvalue11;
$card11text1 = '<b>Designed a Web based Winter hoodie shopping portal for college students where they can customise hoodie of their choice and get an invoice. There is also an admin section where the admin can keep a track of all orders and payments</b>';
$('.ct11').hover(
	function() {
		$thisvalue11 = $(".ct11").html();
		if($thisvalue11 != $card11text1){
			$prevvalue11 = $thisvalue11;
		}
		//console.log($thisvalue11,$prevvalue11);
		$(".ct11").html(""+$card11text1+"");
	},
	function() {
		$(".ct11").html(""+$prevvalue11+"");
	}
);

var $thisvalue12;
var $prevvalue12;
$card11text2 = '<b>Designed a GUI based image to PDF converter in python using Tkinter . This application first takes all images from a designed foler and adds them to a docx file(with proper size adjustments). Then it converts this docx file into PDF format.</b></h4>';
$('.ct12').hover(
	function() {
		$thisvalue12 = $(".ct12").html();
		if($thisvalue12 != $card11text2){
			$prevvalue12 = $thisvalue12;
		}
		//console.log($thisvalue12,$prevvalue12);
		$(".ct12").html(""+$card11text2+"");
	},
	function() {
		$(".ct12").html(""+$prevvalue12+"");
	}
);
