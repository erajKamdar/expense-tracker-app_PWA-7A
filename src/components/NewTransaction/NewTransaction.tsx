import React, { useContext } from 'react';
// Context
import { GlobalContext } from '../../context/GlobalProvider';
// Styles
import styles from './NewTransaction.module.css';
// Types
import { Transaction } from '../../types';

const NewTransaction: React.FC = () => {
    // Extract the states from the GlobalContext to hold the contents of input boxes.
    const { 
        addTransaction,
        description, setDescription,
        date, setDate,
        time, setTime,
        amount, setAmount,
    } = useContext(GlobalContext)
    
    // This function will run when the 'Add Transaction' button will be pressed.
    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        // Prevents the form element from running its own routine.
        // This allows us to run our own functionality when the form is submitted.
        e.preventDefault();

        // Make a new transaction object from the data given by the user. 
        const newTransaction: Transaction = {
            id: Math.round(Math.random()*10000000),
            description: description,
            amount: +( (+amount).toFixed(2) ),
            date: new Date(date+' '+time)
        };
        addTransaction && addTransaction(newTransaction);
        // Reset the input boxes to empty.
        setDescription && setDescription("");
        setDate && setDate("");
        setTime && setTime("");
        setAmount && setAmount("");
    };


    return (
        <fieldset className={styles.container}>
            <legend><h2>Add New Transaction</h2></legend>
            <form onSubmit={submit}>
                {/* Input box for description of transaction. */}
                <div className={styles.description}>
                    <label htmlFor="description">Description<sup>*</sup></label>
                    <input  id="description" 
                            type="text" 
                            className={styles.input}
                            placeholder="Describe the transaction..."
                            value={description}
                            onChange={(e) => setDescription && setDescription(e.target.value)}
                            required
                    />
                </div>
                
                {/* Input field for Date. */}
                <div className={styles.date}>
                    <label htmlFor="date">Date<sup>*</sup></label>
                    <input  id="date" 
                            type="date"
                            className={styles.input}
                            value={date}
                            onChange={(e) => setDate && setDate(e.target.value)}
                            required
                    />
                </div>

                {/* Input field for Time. */}
                <div className={styles.time}>
                    <label htmlFor="time">Time</label>
                    <input  id="time" 
                            type="time"
                            className={styles.input}
                            value={time}
                            onChange={(e) => setTime && setTime(e.target.value)}
                    />
                </div>

                {/* Input field for Amount. */}
                <div className={styles.amount}>
                    <label htmlFor="amount">Amount<sup>*</sup> ($)<sup>**</sup></label>
                    <input  id="amount" 
                            type="number"
                            className={styles.input}
                            value={amount}
                            onChange={(e) => setAmount && setAmount(e.target.value)}
                            placeholder="$0"
                            required
                    />
                </div>

                {/* Add Transaction Button */}
                <div className={styles.setBtn}>
                <button className={styles.addBtn}>
                    <p className={styles.btnText}>Add Transaction</p>
                </button>
                </div>
            </form>
        </fieldset>
    );
}

export default NewTransaction;