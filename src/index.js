import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

import { Profile } from 'components/profile/Profile';
import user from './fileJson/user.json';

import { Statistics } from 'components/statistics/Statistics';
import data from './fileJson/data.json';

import { FriendList } from 'components/friend-list/FriendList';
import friends from './fileJson/friends.json';

import { TransactionHistory } from 'components/transaction-history/TransactionHistory';
import transactions from './fileJson/transactions.json';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </App>
  </React.StrictMode>
);
