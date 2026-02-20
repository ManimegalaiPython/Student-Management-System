function viewHistory() {
  window.location.href = "paymenthistory.html";
}

function downloadReceipt() {
  window.print(); // Browser print to PDF
}

function payNow() {
  alert("Redirecting to Payment Gateway...");
  
  // Simulate payment success
  setTimeout(() => {
    alert("Payment Successful!");
    location.reload();
  }, 1500);
}
