html

<html>
  <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Toggle Options</title>
  <style>
    /* Optional: Add some styles for better appearance */
    .option-container {
      display: inline-block;
      margin-right: 10px;
    }

    .info-div {
      display: none;
      margin-top: 10px;
    }
  </style>
</head>
<body>

<!-- Option 1 -->
<div class="option-container">
  <label>
    <input type="radio" name="options" class="option-radio" data-info="Option 1">
    Option 1
  </label>
  <div class="info-div" data-info="Option 1 Info">
    <p>Additional information for Option 1</p>
    <button class="add-quantity">Add Quantity</button>
  </div>
</div>

<!-- Option 2 -->
<div class="option-container">
  <label>
    <input type="radio" name="options" class="option-radio" data-info="Option 2">
    Option 2
  </label>
  <div class="info-div" data-info="Option 2 Info">
    <p>Additional information for Option 2</p>
    <button class="add-quantity">Add Quantity</button>
  </div>
</div>

<!-- Option 3 -->
<div class="option-container">
  <label>
    <input type="radio" name="options" class="option-radio" data-info="Option 3">
    Option 3
  </label>
  <div class="info-div" data-info="Option 3 Info">
    <p>Additional information for Option 3</p>
    <button class="add-quantity">Add Quantity</button>
  </div>
</div>

<script>
  // Function to handle radio button click
  function handleOptionClick(event) {
    const selectedInfo = event.target.getAttribute('data-info');
    // Hide all info divs
    const infoDivs = document.querySelectorAll('.info-div');
    infoDivs.forEach(div => {
  console.log(selectedInfo)
      console.log(div.getAttribute('data-info'))
      if (div.getAttribute('data-info').includes(selectedInfo)){
      div.style.display = 'block';
      }
      else{
              div.style.display = 'none';
        
      }
        
    });
  }
    // Show the selected info div
  //   console.log(`.info-div[data-info="${selectedInfo}"]`)
  //   const selectedInfoDiv = document.querySelector(`.info-div[data-info="${selectedInfo}"]`);
  //   console.log(selectedInfo)
  //   console.log(selectedInfoDiv)
  //   if (selectedInfoDiv) {
  //     selectedInfoDiv.style.display = 'block';
  //   }
  // }

  // Attach click event listener to each radio button
  const optionRadios = document.querySelectorAll('.option-radio');
  optionRadios.forEach(radio => {
    radio.addEventListener('click', handleOptionClick);
  });
</script>

</body>

<html/>



script 

  // Function to handle radio button click
  function handleOptionClick(event) {
    const selectedInfo = event.target.getAttribute('data-info');

    // Hide all info divs
    const infoDivs = document.querySelectorAll('.info-div');
    infoDivs.forEach(div => {
      div.style.display = 'none';
    });

    // Show the selected info div
    const selectedInfoDiv = document.querySelector(`.info-div[data-info="${selectedInfo}"]`);
    if (selectedInfoDiv) {
      selectedInfoDiv.style.display = 'block';
    }
  }

  // Attach click event listener to each radio button
  const optionRadios = document.querySelectorAll('.option-radio');
  optionRadios.forEach(radio => {
    radio.addEventListener('click', handleOptionClick);
  });