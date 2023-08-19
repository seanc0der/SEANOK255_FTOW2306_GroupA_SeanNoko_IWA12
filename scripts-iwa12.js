const STATUS_MAP = {
	shelf: {
		color: "green",
		canReserve: true,
		canCheckout: true,
		canCheckIn: false,
	},
	reserved: {
		color: "blue",
		canReserve: false,
		canCheckout: true,
		canCheckIn: false,
	},
	overdue: {
		color: "red",
		canReserve: false,
		canCheckout: false,
		canCheckIn: true,
	},
	checkedOut: {
		color: "orange",
		canReserve: false,
		canCheckout: false,
		canCheckIn: true,
	},
};

// Edit below line

const statusElements = document.querySelectorAll(".status");
const checkinButtons = document.querySelectorAll(".checkin");

checkinButtons.forEach((button) => {
	button.style.color = "";
});

statusElements.forEach((statusElement) => {
	let bookElement = statusElement.parentElement.parentElement;
	let statusIndicator = statusElement.textContent;
	toggleButtons(bookElement, statusIndicator);

	switch (statusIndicator) {
		case "shelf":
			statusElement.style.color = STATUS_MAP.shelf.color;
			break;
		case "reserved":
			statusElement.style.color = STATUS_MAP.reserved.color;
			break;
		case "overdue":
			statusElement.style.color = STATUS_MAP.overdue.color;
			break;
		case "checkedOut":
			statusElement.style.color = STATUS_MAP.checkedOut.color;
			break;
	}
});

function toggleButtons(bookElement, statusIndicator) {
	const reserveButton = bookElement.querySelector(".reserve");
	const checkoutButton = bookElement.querySelector(".checkout");
	const checkinButton = bookElement.querySelector(".checkin");

	const reserveToggled = STATUS_MAP[statusIndicator].canReserve;
	const checkoutToggled = STATUS_MAP[statusIndicator].canCheckout;
	const checkinToggled = STATUS_MAP[statusIndicator].canCheckIn;

	reserveButton.disabled = !reserveToggled;
	checkoutButton.disabled = !checkoutToggled;
	checkinButton.disabled = !checkinToggled;
}
