function show(id) {
	hideAll(id);
	document.getElementById(id).style.display = 'block';
}

function hideAll(visibleId) {
	var ids = ["home", "gallery"];
	for (var i = 0; i < ids.length; i++) {
		if (ids[i] !== visibleId) {
			document.getElementById(ids[i]).style.display = 'none';
		}
	}
}
