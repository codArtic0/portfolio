export default function WorkCard({ image, title, description, color }) {
    return (
        <div className="card-work">
            <div className="card-img">
                <img src={image} alt={title} />
            </div>
            <div className={color}>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}
