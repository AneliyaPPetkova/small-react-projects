import { Tour } from "./Types"

const TourCard = ({id, name, image, info, price}: Tour) => {
    return (
        <article className="single-tour">
            <img src={image} alt={name} />
            <footer>
                <div className="tour-info">
                    <h4>{name}</h4>
                    <h4 className="tour-price">${price}</h4>
                </div>
                <p>{info}</p>
                <button className="delete-btn">Not interested</button>
            </footer>
        </article>
    )
}

export default TourCard;