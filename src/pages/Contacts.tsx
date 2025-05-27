import { ContactInfo, FAQ, Information, Map, QuestionForm } from "@/shared/ui"

const Contacts = () => {
  return (
    <div className="flex flex-col gap-16">
      <Information />
      <div className="py-16 rounded-md border-brand-secondary border-1 flex justify-center gap-16"> {/* Добавлено flex и justify-center */}
        <ContactInfo />
        <QuestionForm />
      </div>
      <Map />
      <FAQ />
    </div>
  )
}

export default Contacts