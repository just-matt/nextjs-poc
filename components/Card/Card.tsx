type Badge = {
  text: string;
  style: 'light' | 'dark' | 'petrol';
  displayOn: string[];
} | null;

type CardProps = {
  title: string;
  imageUrl: string;
  description: string;
  slug?: string;
  badge?: Badge;
  pageType?: 'homepage' | 'listing' | 'details';
};

const badgeStyles = {
  light: 'bg-white text-[#333] border-[#333]',
  dark: 'bg-[#333] text-white border-[#333]',
  petrol: 'bg-[#003d4c] text-white border-[#003d4c]',
};

export default function Card({ title, imageUrl, description, slug, badge, pageType = 'listing' }: CardProps) {
  const shouldShowBadge = badge && badge.displayOn.includes(
    pageType === 'homepage' ? 'Homepage' : pageType === 'details' ? 'Product Details' : 'Product Listing'
  );

  const cardContent = (
    <div className="rounded-lg overflow-hidden transition-shadow duration-300 p-2 border border-[#ebf1f2] hover:shadow-lg">
      <div className="relative overflow-hidden bg-[#ebf1f2] p-[27px] rounded-[6px]">
        <img src={imageUrl} alt={title} className="block mx-auto w-auto h-[120px] object-cover" />
        {shouldShowBadge && (
          <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-[12px] font-semibold border ${badgeStyles[badge.style]}`}>
            {badge.text}
          </div>
        )}
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
