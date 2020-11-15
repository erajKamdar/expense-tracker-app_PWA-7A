// Types
import { Transaction } from '../types';

// Sorting Transactions
export const sortTransactions = (transactions: Transaction[]) => (
    transactions.sort((a,b) => b.date.getTime() - a.date.getTime())
);

// For calculator screen
export const calculate = (currentContents: string, keyPressed: string) => {
    // If an error has occured clear the screen first
    let result = currentContents === 'error' 
        ? "" 
        // Else if screen has a zero only, remove it.
        : currentContents === '0'
            ? ''
            : currentContents;

    switch (keyPressed) {
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '0':
        case '.':
        case '+':
        case '-':
        case '*':
        case '/':
        case '(':
        case ')':
            // Just append the pressed button.
            result += keyPressed;
            break;
        case 'C':
            // Clear the screen.
            result = '0';
            break;
        case 'CE':
            // Backspace: remove the last character.
            result = currentContents.length > 1
                ? result.slice(0,-1)
                : '0';
            break;
        case '=':
            result = result.includes('--') 
                ? result.replace('--','+')
                : result;

            try {
                // Try to evaluate the expression in temp.
                // eslint-disable-next-line
                result = (eval(result) || "0" ) + "";
            } catch (e) {
                // else display 'error'.
                result = "error";
            }
            break;
        default:
            break;
    }
    return result
}