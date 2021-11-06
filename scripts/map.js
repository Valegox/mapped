const addExpeditionButton = document.getElementById('add_expedition');

addExpeditionButton.addEventListener('click', addExpedition);

function addExpedition()
{
	let newLocation = location.href.split('/mapped/')[0];

	newLocation += '/mapped/expedition_form.html';
	console.log("New location: ", newLocation);
	location = newLocation;
}