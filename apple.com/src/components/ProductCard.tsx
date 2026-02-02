import "./ProductCard.css";

interface Props {
  title: string;
  price: string;
  img: string;
}

export default function ProductCard({ title, price, img }: Props) {
  return (
    <div className="card">
      <img src={img} alt={title} />

      <h3>{title}</h3>
      <p>{price}</p>

      <button>Comprar</button>
    </div>
  );
}
