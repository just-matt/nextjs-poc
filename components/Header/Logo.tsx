type LogoProps = {
  url: string;
};

export default function Logo({ url }: LogoProps) {
  return (
    <div className="logo">
      <img id="logo" src={url} alt="Logo" />
    </div>
  );
}