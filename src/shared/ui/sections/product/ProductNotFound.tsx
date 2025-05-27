import { Link } from "react-router-dom"
import { Button } from "@/shared/ui/components"
import { ArrowLeft} from "lucide-react"

const ProductNotFound = ({error}: {error: string}) => {
    return (
        <div className="py-8 px-[52px]">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Товар не найден</h1>
            <p className="text-gray-600 mb-8">{error}</p>
            <Link to="/catalog">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Вернуться в каталог
              </Button>
            </Link>
          </div>
        </div>
      )
}

export default ProductNotFound;