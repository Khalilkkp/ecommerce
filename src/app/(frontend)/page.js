import "@/app/main.scss"
export default function Home() {
  return (
    
    <div className="grid grid-flow-row ">
      <div className="bg-slate-400 h-10 w-full">
        Navbar
      </div>
       {/* main */}
      <div className="container grid grid-cols-2">
        <div className="bg-slate-700 w-60 h-screen text-slate-200">Side bar</div>
        <div>body</div>
      
    </div>
    
    </div>
  );
}
