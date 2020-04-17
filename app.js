function homePage() {
	location.href = "home.html";
}

function aboutPage() {
    location.href = "about.html";
};

var fullImage = {
	"witchesfamiliar": "https://ericadb-art-website.s3-us-west-2.amazonaws.com/Witchs_Familiar_thumbnail.jpg"
}

function viewImage() {
	// Get the modal
	var modal = document.getElementById("myModal");
	var modalImg = document.getElementById("img01");
	var captionText = document.getElementById("caption");
	modal.style.display = "block";
	modalImg.src = "https://ericadb-art-website.s3-us-west-2.amazonaws.com/Witchs_Familiar_thumbnail.jpg";
	captionText.innerHTML = "Example Caption Text";

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
	  modal.style.display = "none";
	}
}
