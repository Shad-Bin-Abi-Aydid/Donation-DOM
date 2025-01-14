// Donate for Noakhali
document.getElementById("btnNoak").addEventListener("click", function (event) {
  event.preventDefault();

  const inputDonation = getInputFieldValueById("inputNoak");
  const currentDonation = getTextFieldValueById("amountNoak");
  const totalBalance = getTextFieldValueById("mainBalance");

  if (isNaN(inputDonation) || totalBalance < inputDonation) {
    alert("Invalid Amount! Please provide the correct amount");
  } 
  else {
    const newDonation = inputDonation + currentDonation;
    const newTotalBalance = totalBalance - inputDonation;

    document.getElementById("amountNoak").innerText = newDonation;
    document.getElementById("mainBalance").innerText = newTotalBalance;
  }
});
