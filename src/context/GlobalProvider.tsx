import React, { useReducer, createContext } from 'react';
import { reducerFunc } from './ReducerFunc';
// Types
import { State, Transaction, Actions } from '../types';
// Utility functions
import { sortTransactions } from '../Utils/utils';

const transactions: Transaction[] = [
    // Dummy Transactions
    // { id: 1, description: "Flowers", amount: -30, date: new Date("June 11, 2020 13:11") },
    // { id: 2, description: "Salary", amount: 300, date: new Date("June 12, 2020 13:11") },
    // { id: 3, description: "Belt", amount: -50, date: new Date("June 13, 2020 13:11") },
    // { id: 4, description: "Payment", amount: 100, date: new Date("June 14, 2020 13:11") },
    // { id: 5, description: "Flowers", amount: -30, date: new Date("June 11, 2020 13:11") },
    // { id: 6, description: "Salary", amount: 300, date: new Date("June 12, 2020 13:11") },
    // { id: 7, description: "Belt", amount: -50, date: new Date("June 13, 2020 13:11") },
    // { id: 8, description: "Payment", amount: 100, date: new Date("June 14, 2020 13:11") },
    // { id: 9, description: "Belt", amount: -50, date: new Date("June 13, 2020 13:11") },
    // { id: 10, description: "Payment", amount: 100, date: new Date("June 14, 2020 13:11") },
];
const amounts = transactions.map( transaction => transaction.amount );
const total = amounts.reduce( (acc, amount) => acc += amount, 0 );
const income = amounts.filter( item => item>0 ).reduce( (acc, amount) => acc += amount, 0 );
const expense = total - income;

const initialState: State = {
    transactions: sortTransactions(transactions),
    description: '',
    date: '',
    time: '',
    amount: '',
    currentBalance: total,
    totalIncome: income,
    totalExpense: expense,
    previousBalance: 0,
    previousIncome: 0,
    previousExpense: 0,
};


export const GlobalContext = createContext<State>(initialState);

export const GlobalProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer<React.Reducer<State, Actions>>(reducerFunc, initialState);
    
    // Actions
    const addTransaction = (transaction: Transaction) => {
        dispatch({ type: 'ADD_TRANSACTION', payload: transaction })
    }
    const editTransaction = (id: number) => {
        dispatch({ type: 'EDIT_TRANSACTION', payload: id })
    }
    const deleteTransaction = (id: number) => {
        dispatch({ type: 'DELETE_TRANSACTION', payload: id })
    }
    
    const setDescription = (description: string) => {
        dispatch({ type: 'SET_DESCRIPTION', payload: description })
    }
    const setDate = (date: string) => {
        dispatch({ type: 'SET_DATE', payload: date })
    }
    const setTime = (time: string) => {
        dispatch({ type: 'SET_TIME', payload: time })
    }
    const setAmount = (amount: string) => {
        dispatch({ type: 'SET_AMOUNT', payload: amount })
    }
    
    return (
        <GlobalContext.Provider value={{
            ...state,
            addTransaction,
            editTransaction,
            deleteTransaction,
            setDescription,
            setDate,
            setTime,
            setAmount,
        }}>
            {children}
        </GlobalContext.Provider>
    );
}