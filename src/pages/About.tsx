import { Hero, Mission, Team, History, Stats } from "@/shared/ui"

const AboutUs = () => {
  return (
    <div className="flex flex-col">
      <Hero/>
      <Mission/>
      <Team/>
      <History/>
      <Stats/>
    </div>
  )
}


export default AboutUs