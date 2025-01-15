// Donate for Noakhali
document.getElementById("btnNoak").addEventListener("click", function (event) {
  event.preventDefault();
  donation("inputNoak", "amountNoak", "mainBalance");

});

// For Feni
document.getElementById("btnFeni").addEventListener("click", function (event) {
  event.preventDefault();
  donation("inputFeni", "amountFeni", "mainBalance");
});

// For Quota Movement
document.getElementById("btnQuota").addEventListener("click", function (event) {
  event.preventDefault();
  donation("inputQuota", "amountQuota", "mainBalance");
});

// Shared Function
function donation(inputValue, amount, mainBalance) {
  const inputDonation = getInputFieldValueById(inputValue);
  const currentDonation = getTextFieldValueById(amount);
  const totalBalance = getTextFieldValueById(mainBalance);

  // Check the input value is not less than 0 or a not a number or not more than the main balance
  if (
    isNaN(inputDonation) ||
    totalBalance < inputDonation ||
    inputDonation < 0
  ) {
    alert("Invalid Amount! Please provide the correct amount");
    document.getElementById(inputValue).value = '';
  } 

  // if the input value is okay than the following code will execute
  else {
    const newDonation = inputDonation + currentDonation;
    const newTotalBalance = totalBalance - inputDonation;

    document.getElementById(amount).innerText = newDonation;
    document.getElementById("mainBalance").innerText = newTotalBalance;

    // Give a successful alert and make the input field empty 
    alert('BDT '+inputDonation +' is donated successfully')
    document.getElementById(inputValue).value = '';

    // Add transaction in the history
    const p = document.createElement('p');
    p.innerText = `TK. New Balance is`;
    document.getElementById('').appendChild(p);
  }
}
