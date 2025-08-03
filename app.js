function homePage() {
	location.href = "home.html";
}

function aboutPage() {
    location.href = "about.html";
};

function viewImage(imageId, orientation) {
	var modal = document.getElementById("myModal");

	if (orientation === "horizontal") {
		var modalImg = document.getElementById("modalImgHorizontal");
		var otherImgOrientation = document.getElementById("modalImgVertical");
	} else if (orientation === "vertical") {
		var modalImg = document.getElementById("modalImgVertical");
		var otherImgOrientation = document.getElementById("modalImgHorizontal");
	}
	modalImg.hidden = false;
	otherImgOrientation.hidden = true;

	var captionText = document.getElementById("caption");
	modal.style.display = "block";
	modalImg.src = fullImage[imageId];
	captionText.innerHTML = caption[imageId];

	var span = document.getElementsByClassName("close")[0];

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
	  modal.style.display = "none";
	}
}

function clickAwayFromImage() {
	var artImageVertical = document.getElementById("modalImgVertical");
	var artImageHorizontal = document.getElementById("modalImgHorizontal");
	var modal = document.getElementById("myModal");

	// When the user clicks anywhere on the page besides the art image, close the modal
	if (!(artImageVertical.contains(event.target) || artImageHorizontal.contains(event.target))) {
		modal.style.display = "none";
	}
}

var fullImage = {
	"desertWizard": "https://ericadb-art-website.s3-us-west-2.amazonaws.com/fullsize/Desert_Wizard.jpg",
	"manaPotion": "https://ericadb-art-website.s3-us-west-2.amazonaws.com/fullsize/Mana_Potion.jpg",
	"witchesFamiliar": "https://ericadb-art-website.s3-us-west-2.amazonaws.com/fullsize/Witchs_Familiar.jpg",
	"knight": "https://ericadb-art-website.s3-us-west-2.amazonaws.com/fullsize/Knight.jpg",
	"arcticRift": "https://ericadb-art-website.s3-us-west-2.amazonaws.com/fullsize/Arctic_Rift.jpg",
	"frozenFalls": "https://ericadb-art-website.s3-us-west-2.amazonaws.com/fullsize/Frozen_Falls.jpg",
	"xena": "https://ericadb-art-website.s3-us-west-2.amazonaws.com/fullsize/Xena.jpg",
	"theGreenFairy": "https://ericadb-art-website.s3-us-west-2.amazonaws.com/fullsize/The_Green_Fairy.jpg",
	"seasideWitch": "https://ericadb-art-website.s3-us-west-2.amazonaws.com/fullsize/Seaside_Witch.jpg",
	"selfPortrait": "https://ericadb-art-website.s3-us-west-2.amazonaws.com/fullsize/Self_Portrait.jpg",
	"lowTide": "https://ericadb-art-website.s3-us-west-2.amazonaws.com/fullsize/Low_Tide.jpg",
	"streamliner": "https://ericadb-art-website.s3.us-west-2.amazonaws.com/fullsize/Streamliner_2024.jpg",
	"precisionRocket": "https://ericadb-art-website.s3.us-west-2.amazonaws.com/fullsize/Precision_Rocket_2024.jpg",
	"generalist": "https://ericadb-art-website.s3.us-west-2.amazonaws.com/fullsize/The_Generalist.jpg"
}

var caption = {
	"desertWizard": "Desert Wizard",
	"manaPotion": "Mana Potion",
	"witchesFamiliar": "Witch's Familiar",
	"knight": "Knight",
	"arcticRift": "Arctic Rift",
	"frozenFalls": "Frozen Falls",
	"xena": "Xena",
	"theGreenFairy": "The Green Fairy",
	"seasideWitch": "Seaside Witch",
	"selfPortrait": "Self Portrait",
	"lowTide": "Low Tide",
	"streamliner": "Streamliner",
	"precisionRocket": "Precision Rocket",
	"generalist": "The Generalist"
}
