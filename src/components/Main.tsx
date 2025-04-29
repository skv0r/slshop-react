import About from "./About"
import Banner from "./Banner"
import PopularProducts from "./PopularProducts"


export default function Main() {
    return (
        <div>
            <Banner/>
            <PopularProducts /> 
            <About/>
        </div>
    )
}