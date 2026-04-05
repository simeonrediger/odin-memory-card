export default function Card({ name, image, description }) {
  return (
    <div className="card">
      <div>{name}</div>
      <img src={image}></img>
      <div>{description}</div>
    </div>
  );
}
