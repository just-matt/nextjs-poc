interface PageBodyBlock {
  heading: string;
  content: string;
  imageUrl: string;
  imagePosition: 'Left' | 'Right';
}

interface PageBodyProps {
  blocks: PageBodyBlock[];
}

export default function PageBody({ blocks }: PageBodyProps) {
  return (
    <>
      {blocks.map((block, index) => {
        const isImageRight = block.imagePosition === 'Right';

        const imageElement = (
          <div className="flex items-center justify-center">
            <img
              src={block.imageUrl}
              alt={block.heading}
              className="w-full h-auto object-contain"
            />
          </div>
        );

        const contentElement = (
          <div>
            <h2 className="text-[36px] font-bold text-[#003d4c] mb-4">
              {block.heading}
            </h2>
            <div
              className="text-[16px] text-[#333] leading-[1.8]"
              dangerouslySetInnerHTML={{ __html: block.content }}
            />
          </div>
        );

        return (
          <section key={index} className="py-[60px] px-5">
            <div className="w-full max-w-[1260px] mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] items-center">
                {isImageRight ? (
                  <>
                    {contentElement}
                    {imageElement}
                  </>
                ) : (
                  <>
                    {imageElement}
                    {contentElement}
                  </>
                )}
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
