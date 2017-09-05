import React from 'react';
import ReactDOM from 'react-dom';
import BankListItem from './BankListItem.jsx';

const BankList = ({banks}) => (
  <div>
    <ol>
      {banks.map((bank, i) => {
        return <BankListItem key={i} bank={bank} />
      })}
    </ol>
  </div>
)

export default BankList;