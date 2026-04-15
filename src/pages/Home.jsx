import "../styles/Home.css"

export default function Home(){
    return(
        <div className="home-container">
            <div className="title">
                <h1>Prazer, eu me chamo <strong className="portfolio-word">Raul Sousa</strong>!</h1>
            </div>
            <div className="name-logo">
                <div className="bg-photo">
                    <img className="photo" src="/pic.jpeg" alt="" />
                </div>
                <h1>Raul Sousa | Full-Stack Developer</h1>
            </div>
        </div>
    )
}