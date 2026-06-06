import Image from "next/image";

type HeaderGifBlockProps = {
  gif: {
    src: string;
    alt: string;
    caption: string;
  };
};

export function HeaderGifBlock({ gif }: HeaderGifBlockProps) {
  const isVideo = /\.(mp4|webm|mov)$/i.test(gif.src);

  return (
    <figure className="header-gif-block">
      <div className="header-gif-block__frame">
        {isVideo ? (
          <video
            aria-label={gif.alt}
            autoPlay
            className="header-gif-block__media"
            loop
            muted
            playsInline
            preload="metadata"
            src={gif.src}
          />
        ) : (
          <Image
            alt={gif.alt}
            className="header-gif-block__media"
            height={540}
            priority={false}
            src={gif.src}
            unoptimized
            width={960}
          />
        )}
      </div>
      <figcaption>{gif.caption}</figcaption>
    </figure>
  );
}
