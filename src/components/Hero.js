import Image from "next/image"
import "./Hero.css"

export default function Hero() {

    return (
        <div className="hero">
            <div className="hero--text">
                <h3>'Tis is I</h3>
                <h1>Avinh</h1>
                <p>Software Engineer</p>
            </div>

            <Image
                className="hero--image"
                height={200}
                width={200}
                src="/profile.jpg"
                alt="Picture of Avinh"
            />

        </div>
    )
}