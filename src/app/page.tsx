import Image from "next/image";

export default function Home() {
  return (
    <main className="grid place-items-center min-h-screen bg-[#f4f4f5]">
      {/* <div className="w-10 h-10 relative rounded-full overflow-hidden"><Image fill className="absolute" src={'/profile.png'} alt="profile picture"/></div> */}
      <div className="rounded-full text-sm bg-[#16191b] p-5 text-white">Hello! I'm Junmark, a Software Developer from Philippines.</div>
    </main>
  );
}
