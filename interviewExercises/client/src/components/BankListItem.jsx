import React from 'react';
import ReactDOM from 'react-dom';

const BankListItem = ({bank}) => (
  <li>
    {`${bank.name} ${bank.street} ${bank.city} ${bank.state} ${bank.zipcode}`}
  </li>
)

export default BankListItem;
