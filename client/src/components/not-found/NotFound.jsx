import styles from './NotFound.module.css'

export default function NotFound() {
    return (
        <>
            <div className={styles.container}>
                <h1>Not Found</h1>
                <h2>404</h2>
                <p>I'm sorry, the page you're looking for does not exist</p>
            </div>
        </>
    )
}