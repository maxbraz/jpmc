import React from 'react';
import ReactDOM from 'react-dom';

const BankListItem = ({bank}) => (
  <li>
    {bank.bankName}
  </li>
)

export default BankListItem;
