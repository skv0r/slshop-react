import { ChevronRight } from "lucide-react"
import { Button } from "../../components"
import { Link } from "react-router-dom"

const Hero = () => {
    return (
      <div className="mb-16 py-16 rounded-md bg-[#6366F1] ">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6">О нашей компании</h1>
          <p className="text-xl text-white mb-8">
            SL & GROUP - ведущий поставщик высококачественной электроники и бьюти-гаджетов с 2025 года. Мы стремимся
            предоставлять нашим клиентам только лучшие продукты и исключительный сервис.
          </p>
          <Link to="/contact">
            <Button className="mx-auto" variant="secondary" size="lg">
              Связаться с нами <ChevronRight />
            </Button>
          </Link>
        </div>
      </div> 
)
}

export default Hero;