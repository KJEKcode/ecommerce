import { useContext } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/Header.module.css'

import AuthContext from '../context/AuthContext'

export default () => {
    const router = useRouter()
    const isHome = router.pathname === "/"
    const goBack = (event) => {
        event.preventDefault()
        router.back()
    }

    const { user } = useContext(AuthContext)

    return (
        <header className={styles.nav}>
            {!isHome && 
                <div className={styles.back}>
                    <a href="#" onClick={goBack}>{"<"}back</a>
                </div>
            }
            <div className={styles.title}>
                <Link href="/">
                    <a>
                        <h1>The eCommerce</h1>
                    </a>
                </Link>
            </div>
            <div className={styles.auth}>
                {user ? (
                    <Link href="/account">
                        <a><img src="/user-icon.png" alt={user.email} /></a>
                    </Link>
                ) : (
                    <Link href="/login">
                        <a>Login</a>
                    </Link>
                )}
            </div>
        </header>
    )
}