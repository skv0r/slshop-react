import AboutCard from "./AboutCard";

const About = () => {
    return (
        <div className="border-1 rounded-xl border-[#CBD5E1] px-[52px] py-8">
            <h1 className="mb-7.5 font-bold">О нас</h1>
            <div className="flex justify-between items-center py-5">
                    <AboutCard/>
                    <AboutCard/>
                    <AboutCard/>
            </div>
        </div>
    )
}

export default About;