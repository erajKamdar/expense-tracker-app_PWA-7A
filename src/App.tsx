import React from 'react';
// Components's Imports
import { Header,  AccountSummary, NewTransaction, TransactionHistory, Footer } 
	from './components/components';
// Import Provider for GolbalContext.
import { GlobalProvider } from './context/GlobalProvider';
// Styles
import styles from './App.module.css';

function App() {
	return (
		<div className={styles.shadow}>
		    <Header />
			{/* <div style={{height:'10vh'}}></div> */}
			
				<div className={styles.container}>
				
					<GlobalProvider>
						<div className={styles.rightContainer}>
						
							<AccountSummary />
							<TransactionHistory />
							<NewTransaction />
						</div>
						
					</GlobalProvider>
				</div>
			<Footer />
		</div>
	);
}

export default App;