import { useCallback } from "react"
import { useNavigate } from "react-router-dom"
import useCart from "@/entities/cart/model/useCart"

export const useCartActions = () => {
  const navigate = useNavigate()
  const cart = useCart()

  const goToPayment = useCallback(() => {
    if (cart.cart.totalItems === 0) {
      alert("Корзина пуста")
      return
    }
    navigate("/payment")
  }, [cart.cart.totalItems, navigate])

  const goToCatalog = useCallback(() => {
    navigate("/catalog")
  }, [navigate])

  return {
    ...cart,
    goToPayment,
    goToCatalog,
  }
}
