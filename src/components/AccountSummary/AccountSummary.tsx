import React, { useContext } from 'react';
import CountUp from 'react-countup';
// Context
import { GlobalContext } from '../../context/GlobalProvider';
// Styles
import styles from './AccountSummary.module.css';

const AccountSummary: React.FC = () => {
    const { currentBalance, totalIncome, totalExpense, previousBalance, previousIncome, previousExpense } 
        = useContext(GlobalContext);
    
    return (
        <div className={styles.container}>

            <div className={styles.balance}>
                <div className={styles.setBalance}>
                    <h3>Total Balance</h3>
                <h2>$<CountUp start={previousBalance} end={currentBalance} duration={2} separator=','/></h2>
                
                </div>
            </div>

            <div className={styles.income}>
                <h2>INCOME</h2>
                <h3>$<CountUp start={previousIncome} end={totalIncome} duration={2} separator=',' /></h3>
                
            </div>

            <div className={styles.expense}>
                <h2>EXPENSE</h2>
                <h3>$<CountUp start={previousExpense} end={totalExpense} duration={2} separator=',' /></h3>
            </div>

        </div>
    );
}

export default AccountSummary;