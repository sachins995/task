/** @format */

// Get references to the buttons
// const button1 = document.getElementById("checkout1");
// const button2 = document.getElementById("checkout2");
// const button3 = document.getElementById("checkout3");
let cartItems = document.querySelectorAll(".item");
cartItems.forEach(radio => {
    radio.addEventListener('click', handleButtonClick);
  });

// Function to handle button click
function handleButtonClick(event) {
	// Access the ID of the clicked button
	let clickedButtonId = event.target.getAttribute("data-info");
    console.log(event.target)
	// Output the clicked button ID (you can do further actions based on this)
    
	let cartItems = document.querySelectorAll(".item");
    for (let i = 0; i < cartItems.length; i++) {
        console.log("Clicked button:", clickedButtonId);
        console.log(cartItems[i].getAttribute("data-info"))
		// if (clickedButtonId == cartItems[i].getAttribute("data-info")) {
			// document
			// 	.getElementById("radioButton" + (i + 1))
			// 	.addEventListener("click", function () {
			// 		for (let j = 0; j < cartItems.length; j++) {
			// 			let x = document.getElementById("checkout" + (j + 1));
			// 			let a = document.getElementById(
			// 				"radioButton" + (i + 1)
			// 			);
			// 			const div2 = document.getElementById(
			// 				"represent" + (j + 1)
			// 			);

			// 			if (j === i && a.checked) {
			// 				x.style.backgroundColor = "rgba(0, 127, 97, 0.1)";
			// 				x.style.border = "0.9px solid rgba(0, 127, 97, 1)";
			// 				x.style.height = "162px";
			// 				x.style.width = "341px";
			// 				a.style.paddingTop = "0px";
			// 				a.style.marginBottom = "89px";
			// 				div2.style.display = "flex";
			// 			} else {
			// 				x.style.backgroundColor = "white";
			// 				x.style.border =
			// 					"0.9px solid rgba(200, 200, 200, 1)";
			// 				x.style.height = "74.11px";
			// 				x.style.width = "340px";
			// 				a.style.paddingTop = "0px";
			// 				a.style.marginBottom = "89px";
			// 				div2.style.display = "none";
			// 			}
			// 		}
			// 	});
		// }
	}
}

// // Attach click event listeners to each button
// button1.addEventListener("click", handleButtonClick);
// button2.addEventListener("click", handleButtonClick);
// button3.addEventListener("click", handleButtonClick);
