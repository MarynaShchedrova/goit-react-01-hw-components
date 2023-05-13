import { Profile } from './profile/Profile';
import user from '../fileJson/user.json';

import { Statistics } from './statistics/Statistics';
import data from '../fileJson/data.json';

import { FriendList } from './friend-list/FriendList';
import friends from '../fileJson/friends.json';

import { TransactionHistory } from './transaction-history/TransactionHistory';
import transactions from '../fileJson/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
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
    </div>
  );
};
