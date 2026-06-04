import { assetPath } from "@/lib/assetPath";

const gameSrc = assetPath(
  "/assets/io1-sentinel/games/io1_gameboy_standalone_v2_package/io1_gameboy_standalone_v2_package/index.html",
);

export default function IO1GamePage() {
  return (
    <main className="io1-game-page" id="main-content">
      <iframe
        allow="autoplay; fullscreen"
        className="io1-game-page__frame"
        src={gameSrc}
        title="I/O1 Sentinel Navigational Sequence"
      />
    </main>
  );
}
