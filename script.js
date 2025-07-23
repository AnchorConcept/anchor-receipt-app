document.getElementById('receipt-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const customer = document.getElementById('customer').value;
  const address = document.getElementById('address').value;
  const phone = document.getElementById('phone').value;
  const brand = document.getElementById('brand').value;
  const model = document.getElementById('model').value;
  const ram = document.getElementById('ram').value;
  const storage = document.getElementById('storage').value;
  const processor = document.getElementById('processor').value;
  const serial = document.getElementById('serial').value;
  const warranty = document.getElementById('warranty').value;
  const amount = document.getElementById('amount').value;
  const date = new Date().toLocaleString();

  let receiptNum = localStorage.getItem('receiptNum');
  receiptNum = receiptNum ? parseInt(receiptNum) + 1 : 1001;
  localStorage.setItem('receiptNum', receiptNum);

  document.getElementById('r-customer').innerText = customer;
  document.getElementById('r-address').innerText = address;
  document.getElementById('r-phone').innerText = phone;
  document.getElementById('r-brand').innerText = brand;
  document.getElementById('r-model').innerText = model;
  document.getElementById('r-ram').innerText = ram;
  document.getElementById('r-storage').innerText = storage;
  document.getElementById('r-processor').innerText = processor;
  document.getElementById('r-amount').innerText = amount;
  document.getElementById('r-date').innerText = date;
  document.getElementById('receipt-number').innerText = receiptNum;

  // Optional fields
  if (serial.trim() !== "") {
    document.getElementById('r-serial').innerText = serial;
    document.getElementById('serial-line').style.display = 'block';
  } else {
    document.getElementById('serial-line').style.display = 'none';
  }

  if (warranty.trim() !== "") {
    document.getElementById('r-warranty').innerText = warranty;
    document.getElementById('warranty-line').style.display = 'block';
  } else {
    document.getElementById('warranty-line').style.display = 'none';
  }
});

function printReceipt() {
  window.print();
}

function downloadAsImage() {
  const receiptElement = document.getElementById('receipt-area');

  html2canvas(receiptElement).then(canvas => {
    const link = document.createElement('a');
    link.download = 'receipt.png';
    link.href = canvas.toDataURL();
    link.click();
  });
}