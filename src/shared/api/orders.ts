import { supabase } from "@/shared/lib/supabase"
import type { CartItem } from "@/entities/cart"

export interface CreateOrderData {
  orderNumber: string
  customerName: string
  customerEmail: string
  customerPhone: string
  totalAmount: number
  paymentMethod: string
  transactionId?: string
  items: CartItem[]
}

export interface OrderResult {
  success: boolean
  orderId?: string
  error?: string
}

export const createOrder = async (orderData: CreateOrderData): Promise<OrderResult> => {
  try {
    // Создаем заказ
    const { data: order, error: orderError } = await supabase
      .from("orders")
      .insert({
        order_number: orderData.orderNumber,
        customer_name: orderData.customerName,
        customer_email: orderData.customerEmail,
        customer_phone: orderData.customerPhone,
        total_amount: orderData.totalAmount,
        payment_method: orderData.paymentMethod,
        transaction_id: orderData.transactionId,
        payment_status: "completed",
      })
      .select()
      .single()

    if (orderError) {
      throw new Error(`Ошибка создания заказа: ${orderError.message}`)
    }

    // Создаем позиции заказа
    const orderItems = orderData.items.map((item) => ({
      order_id: order.id,
      product_id: item.productId,
      quantity: item.quantity,
      price: item.product.price,
    }))

    const { error: itemsError } = await supabase.from("order_items").insert(orderItems)

    if (itemsError) {
      throw new Error(`Ошибка создания позиций заказа: ${itemsError.message}`)
    }

    return {
      success: true,
      orderId: order.id,
    }
  } catch (error) {
    console.error("Ошибка при создании заказа:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Неизвестная ошибка",
    }
  }
}
