function homePage() {
	location.href = "home.html";
}

function aboutPage() {
    location.href = "about.html";
};

function viewImage() {
	// Get the modal
	var modal = document.getElementById("myModal");
	var modalImg = document.getElementById("img01");
	var captionText = document.getElementById("caption");
	modal.style.display = "block";
	modalImg.src = this.src;
	captionText.innerHTML = "Example Caption Text";

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
	  modal.style.display = "none";
	}
}

var img = document.getElementById("myImg");
img.onclick = viewImage;
