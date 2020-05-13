function homePage() {
	location.href = "home.html";
}

function aboutPage() {
    location.href = "about.html";
};

var fullImage = {
	"witchesFamiliar": "https://ericadb-art-website.s3-us-west-2.amazonaws.com/fullsize/Witchs_Familiar.jpg",
	"knight": "https://ericadb-art-website.s3-us-west-2.amazonaws.com/fullsize/Knight.jpg",
	"arcticRift": "https://ericadb-art-website.s3-us-west-2.amazonaws.com/fullsize/Arctic_Rift.jpg",
	"frozenFalls": "https://ericadb-art-website.s3-us-west-2.amazonaws.com/fullsize/Frozen_Falls.jpg",
	"xena": "https://ericadb-art-website.s3-us-west-2.amazonaws.com/fullsize/Xena.jpg",
	"theGreenFairy": "https://ericadb-art-website.s3-us-west-2.amazonaws.com/fullsize/The_Green_Fairy.jpg",
	"seasideWitch": "https://ericadb-art-website.s3-us-west-2.amazonaws.com/fullsize/Seaside_Witch.jpg",
	"selfPortrait": "https://ericadb-art-website.s3-us-west-2.amazonaws.com/fullsize/Self_Portrait.jpg"
}

function viewImage(imageId) {
	var modal = document.getElementById("myModal");
	var modalImg = document.getElementById("modalImg");
	var captionText = document.getElementById("caption");
	modal.style.display = "block";
	modalImg.src = fullImage[imageId];
	captionText.innerHTML = "Example Caption Text";

	var span = document.getElementsByClassName("close")[0];

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
	  modal.style.display = "none";
	}
}
