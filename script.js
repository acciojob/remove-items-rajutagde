//your JS code here. If required.
let removeBtn = document.querySelector('input[type="button"]');
let colorSelect = document.querySelector('#colorSelect');

removeBtn.addEventListener('click', function() {
  let selectedColor = colorSelect.value;
  let colorOption = colorSelect.querySelector(`[value="${selectedColor}"]`);
  
  if (colorOption) {
    colorSelect.removeChild(colorOption);
  }
});
