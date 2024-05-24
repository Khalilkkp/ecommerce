import "@/app/main.scss"
import Heading from "@/components/backend/Heading";
import LargeCards from "@/components/backend/LargeCards";
export default function Home() {
  return (
    <div >
      <Heading title='Dashboard Overview'/>
      {/* large cards  */}
      <LargeCards />
      {/* small cards  */}
      {/* charts  */}
      {/* recent orders  */}

    </div>
  );
}