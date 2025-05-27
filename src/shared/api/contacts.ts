import { supabase } from "@/shared/lib/supabase"

export interface ContactMessageData {
  firstName: string
  lastName: string
  email: string
  phone?: string
  message: string
}

export interface ContactResult {
  success: boolean
  error?: string
}

export const createContactMessage = async (messageData: ContactMessageData): Promise<ContactResult> => {
  try {
    const { error } = await supabase.from("contact_messages").insert({
      first_name: messageData.firstName,
      last_name: messageData.lastName,
      email: messageData.email,
      phone: messageData.phone,
      message: messageData.message,
      status: "new",
    })

    if (error) {
      throw new Error(`Ошибка отправки сообщения: ${error.message}`)
    }

    return { success: true }
  } catch (error) {
    console.error("Ошибка при отправке сообщения:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Неизвестная ошибка",
    }
  }
}
