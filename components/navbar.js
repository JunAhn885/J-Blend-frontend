import styles from "./stylesheets/navbar.module.css"
import Image from "next/image"

export default function Navbar(){
    return (
        <div>
            <div></div>
            <div className={styles.middle}>
                <Image
                    src="/logo.svg"
                    width={300}
                    height={183}
                    alt="company logo"
                    
                />
            </div>
            <div></div>
            <h1>hello</h1>
        </div>
    )
}