import Image from "next/image"
import "./Hero.css"

export default function Hero() {


    return (
        <div className="hero">
            <div className="hero--text">
                <h3>Hello! My name is</h3>
                <h1>Avinh Huynh.</h1>
                <p>Computer Science Sophmore at SFSU</p>
                <p>(this site is a wip)</p>
            </div>

            <Image
                className="hero--image"
                height={200}
                width={200}
                src="/Avinh_Profile.jpg"
                alt="Picture of Avinh"
            />

        </div>
    )
}