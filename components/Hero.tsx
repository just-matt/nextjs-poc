type HeroProps = {
  headline: string;
  intro: string;
  imageUrl: string;
};

export default function Hero({
  headline,
  intro,
  imageUrl,
}: HeroProps) {
  return (
    <section className="m-0">
      <div className="w-full max-w-[1260px] mx-auto px-5">
        <div className="relative flex items-center gap-[60px] min-h-[auto] md:min-h-[580px] bg-black text-white rounded-lg overflow-hidden flex-col md:flex-row md:min-h-[580px] md:gap-[60px]">
          <div className="relative z-10 flex-[0_0_100%] md:flex-[0_0_50%] p-[36px]">
            <h1 className="mb-5 text-white text-[56px] leading-[1.1]">{headline}</h1>
            <p className="text-white text-[20px] leading-[1.6] mb-[13.5px]">{intro}</p>
            <a href="#" className="inline-flex items-center justify-center px-[13.5px] py-[9px] rounded-lg text-[15px] font-semibold no-underline text-white bg-[#00b5d9] hover:opacity-90 transition-opacity">
              Find out more
            </a>
          </div>

          <div
            className="absolute inset-0 z-0 w-full h-full bg-no-repeat"
            style={{
              backgroundImage: `url(${imageUrl})`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}