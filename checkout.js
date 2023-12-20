document.addEventListener('DOMContentLoaded', function () {

    



    // })



    let cartItems = document.querySelectorAll("#checkout1, #checkout2, #checkout3")

    for (let i = 0; i < cartItems.length ; i++) {
        
        document.getElementById("radioButton" + (i + 1)).addEventListener("click", function () {
            for (let j = 0; j < cartItems.length; j++) {
                let x = document.getElementById("checkout" + (j + 1));
                let a = document.getElementById("radioButton" + (i + 1));
                const div2 = document.getElementById("represent" + (j + 1));
    
                if (j === i && a.checked) {
                     
                    x.style.backgroundColor = "rgba(0, 127, 97, 0.1)";
                    x.style.border = "0.9px solid rgba(0, 127, 97, 1)";
                    x.style.height = "162px";
                    x.style.width = "341px";
                    a.style.paddingTop = "0px";
                    a.style.marginBottom = "89px";
                    div2.style.display = "flex";
                    
                } else {
                    x.style.backgroundColor = "white";
                    x.style.border = "0.9px solid rgba(200, 200, 200, 1)";
                    x.style.height = "74.11px";
                    x.style.width = "340px";
                    a.style.paddingTop = "0px";
                    a.style.marginBottom = "89px";
                    div2.style.display = "none";
                   
    // let resetCheckoutDiv = document.getElementById("checkout" + (j + 1));
    // let resetRepresentDiv = document.getElementById("represent" + (j + 1));

    // resetCheckoutDiv.style.backgroundColor = "white";
    // resetCheckoutDiv.style.border = "0.9px solid rgba(200, 200, 200, 1)";
    // resetCheckoutDiv.style.height = "74.11px";
    // resetCheckoutDiv.style.width = "340px";

    // let resetRadioButton = document.getElementById("radioButton" + (j + 1));
    // resetRadioButton.style.paddingTop = "0px";
    // resetRadioButton.style.marginBottom = "89px";

    // resetRepresentDiv.style.display = "none";
                }
            }
        });
    }
  
    // for (let i = 0; i < cartItems.length ; i++) {
    //     let g = 0;
    //     document.getElementById("radioButton" + (i + 1)).addEventListener("click", function () {
    //         let x = document.getElementById("checkout" + (j + 1));
    //             let a = document.getElementById("radioButton" + (i + 1));
    //             const div2 = document.getElementById("represent" + (j + 1));

    // let cartItems = document.querySelectorAll("#checkout1, #checkout2, #checkout3");

    // for (let i = 0; i < cartItems.length; i++) {
    //     let radioButton = document.getElementById("radioButton" + (i + 1));
    //     let checkoutDiv = document.getElementById("checkout" + (i + 1));
    //     let representDiv = document.getElementById("represent" + (i + 1));
    
    //     radioButton.addEventListener("click", function () {
    //         // Reset all divs to their default state
    //         for (let j = 0; j < i; j++) {
    //             let resetCheckoutDiv = document.getElementById("checkout" + (j + 1));
    //             let resetRepresentDiv = document.getElementById("represent" + (j + 1));
    
               
    
    //             let resetRadioButton = document.getElementById("radioButton" + (i + 1));
    //             resetRadioButton.style.paddingTop = "0px";
    //             resetRadioButton.style.marginBottom = "89px";
    
    //             resetRepresentDiv.style.display = "none";
                
    //             resetCheckoutDiv.style.backgroundColor = "white";
    //             resetCheckoutDiv.style.border = "0.9px solid rgba(200, 200, 200, 1)";
    //             resetCheckoutDiv.style.height = "74.11px";
    //             resetCheckoutDiv.style.width = "340px";
    //             // resetRadioButton.id =  "radioButton" + (j + 1);
    //         }
    
    //         // Set the clicked div to the updated state
    //         checkoutDiv.style.backgroundColor = "rgba(0, 127, 97, 0.1)";
    //         checkoutDiv.style.border = "0.9px solid rgba(0, 127, 97, 1)";
    //         checkoutDiv.style.height = "162px";
    //         checkoutDiv.style.width = "341px";
    //         radioButton.style.paddingTop = "0px";
    //         radioButton.style.marginBottom = "89px";
    //         representDiv.style.display = "flex";
    //     });
    // }


   
    
   







   
    

})