function maskCardNumber() {
  var cardNumberInput = document.getElementById('card-input').value;
  
  if (cardNumberInput.length < 16) {
      alert('Card number should be 16 digits long.');
      return;
    } else if (cardNumberInput.length > 16) {
    alert('Card number should not exceed 16 digits.');
      return;
  }
  
  var maskedNumber = cardNumberInput.substr(0, 4) + ' ' +
      '****'.repeat(3) + ' ' +
      cardNumberInput.substr(12, 4);
  
  document.getElementById('masked-number').textContent = maskedNumber;
}

function unmaskCardNumber() {
  var cardNumberInput = document.getElementById('card-input').value;
  
  if (cardNumberInput.length < 16) {
      alert('Card number should be 16 digits long.');
      return;
    } else if (cardNumberInput.length > 16) {
      alert('Card number should not exceed 16 digits.');
      return;
    }
  
  var unmaskedNumber = cardNumberInput.replace(/(.{4})/g, '$1 ');
  
  document.getElementById('unmasked-number').textContent = unmaskedNumber;
}