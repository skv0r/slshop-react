"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/shared/ui/components"
import { Input } from "@/shared/ui/components"
import { Send, CheckCircle } from "lucide-react"
import { createContactMessage } from "@/shared/api/contacts"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    // Валидация
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      setError("Пожалуйста, заполните все обязательные поля")
      setIsSubmitting(false)
      return
    }

    try {
      const result = await createContactMessage({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      })

      if (result.success) {
        setIsSuccess(true)
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        })
      } else {
        setError(result.error || "Произошла ошибка при отправке сообщения")
      }
    } catch (err) {
      setError("Произошла ошибка при отправке сообщения")
      console.error("Ошибка отправки формы:", err)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-8 border border-brand-secondary">
        <div className="text-center">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4 text-green-600">Сообщение отправлено!</h2>
          <p className="text-gray-600 mb-6">Спасибо за ваше сообщение. Мы свяжемся с вами в ближайшее время.</p>
          <Button onClick={() => setIsSuccess(false)} variant="outline">
            Отправить еще одно сообщение
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-8 border border-brand-secondary">
      <h2 className="text-2xl font-bold mb-6">Напишите нам</h2>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-6">
          <p className="text-red-600">{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="first-name" className="block text-sm font-medium">
              Имя <span className="text-red-500">*</span>
            </label>
            <Input
              id="first-name"
              placeholder="Введите ваше имя"
              value={formData.firstName}
              onChange={(e) => handleInputChange("firstName", e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="last-name" className="block text-sm font-medium">
              Фамилия <span className="text-red-500">*</span>
            </label>
            <Input
              id="last-name"
              placeholder="Введите вашу фамилию"
              value={formData.lastName}
              onChange={(e) => handleInputChange("lastName", e.target.value)}
              required
            />
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium">
            Email <span className="text-red-500">*</span>
          </label>
          <Input
            id="email"
            type="email"
            placeholder="Введите ваш email"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            required
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="block text-sm font-medium">
            Телефон
          </label>
          <Input
            id="phone"
            type="tel"
            placeholder="Введите ваш телефон"
            value={formData.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="message" className="block text-sm font-medium">
            Сообщение <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            rows={5}
            className="w-full min-h-[120px] rounded-md border border-brand-secondary p-3 text-sm focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none"
            placeholder="Введите ваше сообщение"
            value={formData.message}
            onChange={(e) => handleInputChange("message", e.target.value)}
            required
          ></textarea>
        </div>
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? (
            <>Отправляем...</>
          ) : (
            <>
              Отправить сообщение <Send className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
      </form>
    </div>
  )
}

export default ContactForm
