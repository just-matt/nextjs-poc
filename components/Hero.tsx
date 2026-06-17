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
    <section id="hero">
      <div className="wrap">
        <div className="hero__content">
          <h1>{headline}</h1>
          <p>{intro}</p>
          <a href="#" className="c-button c-button--blue">Find out more</a>
        </div>

        <div
          className="hero__image"
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        ></div>
      </div>
    </section>
  );
}