const transactionHistoryGroupTemplate = (date, total) => `
<div class="card-group">
  <div class="card-group__header">
    <span>${date}</span>
    <span class="total">${total}</span>
  </div>
</div>
`;

const transactionHistoryCardTemplate = (transaction, amount) => {
  let status;
  let color;
  switch (transaction.status.toUpperCase()) {
    case 'BATAL':
      status = 'cancel';
      color = '#fd3434';
      break;

    case 'HUTANG':
      status = 'radio_button_unchecked';
      color = '#888888';
      break;

    default:
      status = 'check_circle';
      break;
  }

  return `
<div class="card">
  <span class="material-icons icon" style="color: ${color}">${status}</span>
  <span class="id">${transaction.id}</span>
  <span class="name">${transaction.name}</span>
  <span class="status" style="color: ${color}">${transaction.status}</span>
  <span class="amount">${amount}</span>
</div>
`;
};

export {
  transactionHistoryGroupTemplate,
  transactionHistoryCardTemplate,
};
