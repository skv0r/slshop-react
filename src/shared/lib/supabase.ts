import { createClient } from "@supabase/supabase-js"

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Missing Supabase environment variables")
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Типы для базы данных
export interface Database {
  public: {
    Tables: {
      categories: {
        Row: {
          id: string
          name: string
          display_name: string
          description: string | null
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          display_name: string
          description?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          display_name?: string
          description?: string | null
          created_at?: string
        }
      }
      products: {
        Row: {
          id: string
          title: string
          description: string | null
          price: number
          category_id: string | null
          image_url: string | null
          rating_rate: number | null
          rating_count: number | null
          in_stock: boolean | null
          created_at: string
        }
        Insert: {
          id?: string
          title: string
          description?: string | null
          price: number
          category_id?: string | null
          image_url?: string | null
          rating_rate?: number | null
          rating_count?: number | null
          in_stock?: boolean | null
          created_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string | null
          price?: number
          category_id?: string | null
          image_url?: string | null
          rating_rate?: number | null
          rating_count?: number | null
          in_stock?: boolean | null
          created_at?: string
        }
      }
      orders: {
        Row: {
          id: string
          order_number: string
          customer_name: string
          customer_email: string
          customer_phone: string
          total_amount: number
          payment_method: string
          payment_status: string | null
          transaction_id: string | null
          created_at: string
        }
        Insert: {
          id?: string
          order_number: string
          customer_name: string
          customer_email: string
          customer_phone: string
          total_amount: number
          payment_method: string
          payment_status?: string | null
          transaction_id?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          order_number?: string
          customer_name?: string
          customer_email?: string
          customer_phone?: string
          total_amount?: number
          payment_method?: string
          payment_status?: string | null
          transaction_id?: string | null
          created_at?: string
        }
      }
      order_items: {
        Row: {
          id: string
          order_id: string
          product_id: string | null
          quantity: number
          price: number
        }
        Insert: {
          id?: string
          order_id: string
          product_id?: string | null
          quantity: number
          price: number
        }
        Update: {
          id?: string
          order_id?: string
          product_id?: string | null
          quantity?: number
          price?: number
        }
      }
      contact_messages: {
        Row: {
          id: string
          first_name: string
          last_name: string
          email: string
          phone: string | null
          message: string
          status: string | null
          created_at: string
        }
        Insert: {
          id?: string
          first_name: string
          last_name: string
          email: string
          phone?: string | null
          message: string
          status?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          first_name?: string
          last_name?: string
          email?: string
          phone?: string | null
          message?: string
          status?: string | null
          created_at?: string
        }
      }
    }
  }
}
