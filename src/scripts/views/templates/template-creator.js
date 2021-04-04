const transactionHistoryGroupTemplate = (date, total) => `
<div class="card-group">
  <div class="card-group__header">
    <span>${date}</span>
    <span class="total">${total}</span>
  </div>
</div>
`;

const transactionHistoryCardTemplate = (transaction, amount) => `
<div class="card">
  <span class="material-icons icon">check_circle_outline</span>
  <span class="id">${transaction.id}</span>
  <span class="name">${transaction.name}</span>
  <span class="status">${transaction.status}</span>
  <span class="amount">${amount}</span>
</div>
`;

export {
  transactionHistoryGroupTemplate,
  transactionHistoryCardTemplate,
};
