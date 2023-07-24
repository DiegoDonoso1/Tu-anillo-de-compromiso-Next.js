'use client';
import React, { useState } from 'react';
import styles from './navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useAppContext } from '../statewrapper';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/dist/server/api-utils';
import { useRouter } from 'next/navigation';

export default function Navbar() {
	const cart = useAppContext();
	const [activo, setActivo] = useState(false);
	const router = useRouter();

	const session = useSession();

	const handleButtonClick = () => {
		setActivo(!activo);
	};

	return (
		<>
			<header>
				<div className={styles.container}>
					<div className={styles.barra_envio}>
						<div className={styles.flex_left}>
							<ul className={`${styles.nav} ${styles.nav_left}`}>
								<li>
									<Link className={styles.link} href="#">
										<Image
											className={styles.phone_icon}
											src="/img/phone.svg"
											alt="phone-icon"
											width={16}
											height={16}
										/>
										<span className={styles.phone}>+56 9 4536 6752</span>
									</Link>
								</li>
							</ul>
						</div>
						<div className={styles.flex_right}>
							<ul className={`${styles.nav} ${styles.nav_right}`}>
								<li className={styles.icon_li}>
									<Link href="#">
										<Image
											className={styles.icon}
											src="/img/ig-icon.svg"
											alt="icono-instagram"
											width={20}
											height={20}
										/>
									</Link>
								</li>
								<li className={styles.icon_li}>
									<Link href="#">
										<Image
											className={styles.icon}
											src="/img/fb.svg"
											alt="icono-facebook"
											width={20}
											height={20}
										/>
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className={styles.contenedor_superior}>
					<div className={styles.contenedor_titulo}>
						<Link href="/">
							<Image
								src="/img/logo.png.svg"
								alt="logo-pagina"
								width={100}
								height={100}
							/>
						</Link>
						<button className={styles.button} onClick={handleButtonClick}>
							<Image
								className={styles.svg}
								src="/img/hamburguesa.svg"
								alt="menu-hamburguesa"
								width={70}
								height={70}
							/>
						</button>
					</div>
					<nav
						className={`${styles.navbar} ${activo ? `${styles.activo}` : ''}`}
					>
						<ul className={styles.lista}>
							<li className={styles.item}>
								<Link className={styles.link_nav} href="/products">
									Anillos
								</Link>
							</li>
							<li className={styles.item}>
								<Link href="/about">Nosotros</Link>
							</li>
							<li className={styles.item}>
								<Link href="#">Contactanos</Link>
							</li>
							{session.status == 'authenticated' && (
								<li className={styles.item}>
									<Link href="/dashboard">Administrar</Link>
								</li>
							)}
						</ul>
					</nav>
					<div className={styles.contenedor_utilidades}>
						<form>
							<input
								className={styles.buscador}
								type="text"
								placeholder="Buscar"
							/>
						</form>
						<Link key={cart.getNumberOfItems()} href="/shoppingcart">
							<Image
								src="/img/carrito_compra.svg"
								alt="icono-carrito-compra"
								width={25}
								height={25}
							/>
							({cart.getNumberOfItems()})
						</Link>
					</div>
				</div>
			</header>
		</>
	);
}
