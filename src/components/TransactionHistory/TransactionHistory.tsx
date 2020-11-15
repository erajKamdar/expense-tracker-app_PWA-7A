import React, { useContext } from 'react';
// import cx from 'classnames';
// Components
import { TransactionItem } from '../components';
// Context
import { GlobalContext } from '../../context/GlobalProvider';
// Styles
import styles from './TransactionHistory.module.css';

const TransactionHistory: React.FC = () => {
    const { transactions } = useContext(GlobalContext);
    
    return (
        <fieldset className={styles.container}>
            <legend><h2>Transaction History</h2></legend>
            {transactions.length
            ?
                (<ul>
                    {transactions.map( transaction => 
                        <TransactionItem key={transaction.id} transaction={transaction}/>
                    )}
                </ul>)
            :
                (<div className={styles.noTransaction}>
                    <p className={styles.text}>Add transactions to see history.</p>
                </div>)
            }
        </fieldset>
    );
}

export default TransactionHistory;