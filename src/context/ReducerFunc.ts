// types
import { State, Actions } from '../types';
// Utility functions
import { sortTransactions } from '../Utils/utils';

export const reducerFunc = (state: State, action: Actions): State => {
    switch (action.type) {
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: sortTransactions([action.payload, ...state.transactions]),
                previousBalance: state.currentBalance,
                previousIncome: state.totalIncome,
                previousExpense: state.totalExpense,
                currentBalance: state.currentBalance + action.payload.amount,
                totalIncome: state.totalIncome + (action.payload.amount>0 ? action.payload.amount : 0),
                totalExpense: state.totalExpense + (action.payload.amount<0 ? action.payload.amount : 0),
            }
        case 'DELETE_TRANSACTION':
            const transactionToDelete = state.transactions.filter(transaction => transaction.id === action.payload)
            return {
                ...state,
                // Copy all the transactions except the one with a particular id.
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload),
                previousBalance: state.currentBalance,
                previousIncome: state.totalIncome,
                previousExpense: state.totalExpense,
                currentBalance: state.currentBalance - transactionToDelete[0].amount,
                totalIncome: state.totalIncome - (transactionToDelete[0].amount>0 ? transactionToDelete[0].amount : 0),
                totalExpense: state.totalExpense - (transactionToDelete[0].amount<0 ? transactionToDelete[0].amount : 0),
            }
        case 'EDIT_TRANSACTION':
            const transactionToEdit = state.transactions.filter(transaction => transaction.id === action.payload);
            const date = transactionToEdit[0].date.toLocaleDateString().split("/");
            let dateString =  date[2] + '-';
            dateString += (+date[0] < 10) ? ('0'+date[0]) : (date[0]);
            dateString += '-' + ((parseInt(date[1])<10) ? ('0'+date[1]) : (date[1]));
            return {
                ...state,
                // Copy all the transactions except the one with a particular id.
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload),
                previousBalance: state.currentBalance,
                previousIncome: state.totalIncome,
                previousExpense: state.totalExpense,
                currentBalance: state.currentBalance - transactionToEdit[0].amount,
                totalIncome: state.totalIncome - (transactionToEdit[0].amount>0 ? transactionToEdit[0].amount : 0),
                totalExpense: state.totalExpense - (transactionToEdit[0].amount<0 ? transactionToEdit[0].amount : 0),
                description: transactionToEdit[0].description,
                date: dateString,
                time: transactionToEdit[0].date.toTimeString().slice(0,8),
                amount: transactionToEdit[0].amount.toString(),
            }
       
        case 'SET_DESCRIPTION':
            return {
                ...state,
                description: action.payload,
            }
        case 'SET_DATE':
            return {
                ...state,
                date: action.payload,
            }
        case 'SET_TIME':
            return {
                ...state,
                time: action.payload,
            }
        case 'SET_AMOUNT':
            return {
                ...state,
                amount: action.payload,
            }
       
        default:
            return state;
    }
}