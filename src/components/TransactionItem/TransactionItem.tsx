import React, { useContext } from 'react';

// Context
import { GlobalContext } from '../../context/GlobalProvider';
// Styles
import styles from './TransactionItem.module.css';
// Types
import { Transaction } from '../../types';

//Icons
import { MdDeleteForever } from 'react-icons/md';
import { GrEdit } from 'react-icons/gr';


interface Props {
    transaction: Transaction
}

const TransactionItem: React.FC<Props> = ({ transaction }) => {
    const { deleteTransaction, editTransaction } = useContext(GlobalContext);
    const amount_sign = transaction.amount < 0 ? '-' : '+';
    
    return (
        <li 
            key={transaction.id} 
            className={(styles.transactionItem, amount_sign === '+' ? styles.plus : styles.minus)}
            
        >
            <div className={styles.setItems}>
            <span>
                <div className={styles.transDescrip}>
                    {transaction.description}<strong> , </strong>
                </div>
                <div className={styles.transDate}>
                    {transaction.date.toString().slice(0,21)}<strong> , </strong>
                </div>
            

            <div className={styles.transAmount}>
                <span>
                     {`${amount_sign}$${Math.abs(transaction.amount)}`}
                     &nbsp;&nbsp;
                </span>
             </div>
                <button 
                    className={styles.editBtn}
                    onClick={() => editTransaction && editTransaction(transaction.id)}
                >
                    <GrEdit />
                </button>
                <span>&nbsp;</span>
                <button 
                    className={styles.delBtn} 
                    onClick={() => deleteTransaction && deleteTransaction(transaction.id)}
                ><MdDeleteForever/></button>
            </span>
            </div>
        </li>
    )
}

export default TransactionItem;