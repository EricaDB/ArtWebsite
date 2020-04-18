function homePage() {
	location.href = "home.html";
}

function aboutPage() {
    location.href = "about.html";
};

var fullImage = {
	"witchesFamiliar": "https://ericadb-art-website.s3-us-west-2.amazonaws.com/Witchs_Familiar.jpg",
	"knight": "https://ericadb-art-website.s3-us-west-2.amazonaws.com/Knight.jpg",
	"arcticRift": "https://ericadb-art-website.s3-us-west-2.amazonaws.com/Arctic_Rift.jpg",
	"frozenFalls": "https://ericadb-art-website.s3-us-west-2.amazonaws.com/Frozen_Falls.jpg",
	"xena": "https://ericadb-art-website.s3-us-west-2.amazonaws.com/Xena.JPG",
	"theGreenFairy": "https://ericadb-art-website.s3-us-west-2.amazonaws.com/The_Green_Fairy.jpg",
	"seasideWitch": "https://ericadb-art-website.s3-us-west-2.amazonaws.com/Seaside_Witch.jpg",
	"selfPortrait": "https://ericadb-art-website.s3-us-west-2.amazonaws.com/Self_Portrait.JPG"
}

function viewImage(imageId) {
	// Get the modal
	var modal = document.getElementById("myModal");
	var modalImg = document.getElementById("img01");
	var captionText = document.getElementById("caption");
	modal.style.display = "block";
	modalImg.src = fullImage[imageId];
	captionText.innerHTML = "Example Caption Text";

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
	  modal.style.display = "none";
	}
}
