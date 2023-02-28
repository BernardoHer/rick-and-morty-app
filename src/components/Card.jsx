import { Rick } from "../data";
export default function Card(props) {
  return (
    <div>
      <button onClick={Rick.onClose}>X</button>
      <h2>{Rick.name}</h2>
      <h2>{Rick.species}</h2>
      <h2>Rick.gender</h2>
      <img src={Rick.image} alt={Rick.name} />
    </div>
  );
}
