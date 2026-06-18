type LogoProps = {
  url: string;
};

export default function Logo({ url }: LogoProps) {
  return (
    <div className="flex-shrink-0">
      <img id="logo" src={url} alt="Logo" className="w-[180px] h-auto" />
    </div>
  );
}