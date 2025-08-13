import DiscordServerWidget from "@/components/widgets/DiscordServerWidget";


export default function Home() {
  return (
    <>
    <div className="page">
      <div className="w-full bg-cover bg-center bg-no-repeat bg-local  h-128 bg-[url(/assets/images/backgrounds/space_02.jpg)]">
      <div className="flex justify-center content-center backdrop-blur-2xl h-full w-full">
        
      </div>
          
      </div>
      
      <div className="h-full flex flex-col justify-center content-center">
        <DiscordServerWidget></DiscordServerWidget>
      </div>
      
       
        
    </div>

    </>
  );
}
