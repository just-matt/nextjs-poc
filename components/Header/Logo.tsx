type LogoProps = {
  url: string;
};

export default function Logo({ url }: LogoProps) {
  return (
    <a href="/" className="flex-shrink-0 no-underline">
      <img id="logo" src={url} alt="Logo" className="w-[180px] h-auto" />
    </a>
  );
}