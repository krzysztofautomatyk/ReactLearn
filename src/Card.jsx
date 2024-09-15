import imagePng from './assets/image.png';

function Card() {
  return (
    <div className="card">
        <img className="card-image" src={imagePng} alt="placeholder" width={150} />
        <h2 className="card-title">Card</h2>
        <p className='card-text'>Card content for demo and show something in this page</p>
    </div>
  );
}

export default Card;