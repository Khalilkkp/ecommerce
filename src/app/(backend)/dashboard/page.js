import "@/app/main.scss"
import DashboardCharts from "@/components/backend/DashboardCharts";
import Heading from "@/components/backend/Heading";
import LargeCards from "@/components/backend/LargeCards";
import SmallCards from "@/components/backend/SmallCards";
export default function Home() {
  return (
    <div >
      <Heading title='Dashboard Overview'/>
      {/* large cards  */}

      <LargeCards />
      {/* small cards  */}
      <SmallCards />
      {/* charts  */}
      <DashboardCharts />
      {/* recent orders  */}

    </div>
  );
}