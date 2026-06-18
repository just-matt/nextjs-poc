type CardProps = {
  title: string;
  imageUrl: string;
  description: string;
  slug?: string;
};

export default function Card({ title, imageUrl, description, slug }: CardProps) {
  const cardContent = (
    <div className="rounded-lg overflow-hidden transition-shadow duration-300 p-2 border border-[#ebf1f2] hover:shadow-lg">
      <div className="overflow-hidden bg-[#ebf1f2] p-[27px] rounded-[6px]">
        <img src={imageUrl} alt={title} className="block mx-auto w-auto h-[120px] object-cover" />
      </div>
      <div className="p-5 bg-white">
        <h3 className="m-0 mb-[10px] text-[18px] font-semibold text-[#003d4c]">{title}</h3>
        <p className="m-0 text-[14px] text-[#666] leading-[1.5]">{description}</p>
      </div>
    </div>
  );

  if (slug) {
    return (
      <a href={`/products/${slug}`} className="no-underline">
        {cardContent}
      </a>
    );
  }

  return cardContent;
}
