import "./stars.css";
import Star from '../../assets/stars.svg';
import StarRed from '../../assets/star.svg';


export default function Stars({ rating }) {
  const array = [1, 2, 3, 4, 5];
  return (
    <div className="stars">
      {array.map((number) => {
        if (rating >= number) {
          return <img key={`star-${number}`} src={StarRed} alt="etoile rouge"></img>
        }
        return <img src={Star} alt="etoile vide"></img>
      })}
      
    </div>
  );
}
