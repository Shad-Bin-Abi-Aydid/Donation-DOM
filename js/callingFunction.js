// Donate for Noakhali
document.getElementById("btnNoak").addEventListener("click", function (event) {
  event.preventDefault();
  donation(
    "inputNoak",
    "amountNoak",
    "mainBalance",
    "for Flood at Noakhali, Bangladesh"
  );
});

// For Feni
document.getElementById("btnFeni").addEventListener("click", function (event) {
  event.preventDefault();
  const value = donation(
    "inputFeni",
    "amountFeni",
    "mainBalance",
    "for Flood Relief in Feni,Bangladesh"
  );
});

// For Quota Movement
document.getElementById("btnQuota").addEventListener("click", function (event) {
  event.preventDefault();
  const value = donation(
    "inputQuota",
    "amountQuota",
    "mainBalance",
    "for Injured in the Quota Movement"
  );
});

// Blog Button
document.getElementById("blogBtn").addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "./fqa.html";
});

// Shared Function
function donation(inputValue, amount, mainBalance, place) {
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
    document.getElementById(inputValue).value = "";
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


    // calling the history function to add the donation history
    history(inputDonation, place);
  }
}

// Add transaction in the history
function history(value, place) {
  const p = document.createElement("p");
  p.innerText = `${value} Taka is Donated ${place}
   Date: ${new Date()}`;
  p.classList.add(
    "border",
    "border-gray-200",
    "p-5",
    "rounded-lg",
    "my-10",
    "space-y-10",
    "bg-lime-100"
  );
  document.getElementById("history").appendChild(p);
}
