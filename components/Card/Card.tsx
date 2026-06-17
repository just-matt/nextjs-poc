type CardProps = {
  title: string;
  imageUrl: string;
  description: string;
};

export default function Card({ title, imageUrl, description }: CardProps) {
  return (
    <div className="card">
      <div className="card__image">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="card__content">
        <h3 className="card__title">{title}</h3>
        <p className="card__description">{description}</p>
      </div>
    </div>
  );
}
