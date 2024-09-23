let balance = 1000; // balance

function donate(cardId) {
  // donation amount and current balance
  const amount = document.getElementById(`amount${cardId}`).value;
  const donation = document.getElementById(`donation${cardId}`);
  
  // Input validation
  if (amount === "" || isNaN(amount) || parseInt(amount) <= 0) {
    alert("Please enter a valid amount.");
    return;
  }
  
  if (parseInt(amount) > balance) {
    alert("Insufficient balance.");
    return;
  }

  // balance and update the donation amount
  balance -= parseInt(amount);
  document.getElementById("balance").innerText = `${balance} BDT`;
  
  donation.innerText = parseInt(donation.innerText) + parseInt(amount) + " BDT";

  // transaction in history
  const historyList = document.getElementById("historyList");
  const li = document.createElement("li");
  li.innerText = `Donated ${amount} BDT to card ${cardId} at ${new Date().toLocaleString()}`;
  historyList.appendChild(li);

  // Show success message 
  alert("Thank you for your donation!");
}

// Donation and History sections
document.getElementById("historyBtn").addEventListener("click", function() {
  document.getElementById("donationSection").classList.add("hidden");
  document.getElementById("historySection").classList.remove("hidden");
});

document.getElementById("donationBtn").addEventListener("click", function() {
  document.getElementById("donationSection").classList.remove("hidden");
  document.getElementById("historySection").classList.add("hidden");
});
