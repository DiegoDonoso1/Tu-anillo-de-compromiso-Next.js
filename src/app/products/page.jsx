import React from 'react';
import styles from '../page.module.css';
import Card from '../components/card';

export default function page() {
	return (
		<main className={styles.main}>
			<Card />
		</main>
	);
}
