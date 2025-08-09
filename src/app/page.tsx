import Image from "next/image";

export default function Home() {
  return (
    <>
    
    <div className="page">
        <div className="absolute left-[50%] bg-radial translate-y-[-45%] translate-x-[-50%] from-blue-600 to-75% to-white/0 rounded-full w-256 h-256"/>
        <h1 className="absolute w-full h-[72px] top-[372px] text-center text-6xl font-bold">Welcome to my site!</h1>
    </div>

    </>
  );
}
