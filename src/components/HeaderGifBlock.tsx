import Image from "next/image";

type HeaderGifBlockProps = {
  gif: {
    src: string;
    alt: string;
    caption: string;
  };
};

export function HeaderGifBlock({ gif }: HeaderGifBlockProps) {
  return (
    <figure className="header-gif-block">
      <div className="header-gif-block__frame">
        <Image
          alt={gif.alt}
          className="header-gif-block__media"
          height={540}
          priority={false}
          src={gif.src}
          unoptimized
          width={960}
        />
      </div>
      <figcaption>{gif.caption}</figcaption>
    </figure>
  );
}
