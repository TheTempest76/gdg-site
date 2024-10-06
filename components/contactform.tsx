'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"


export default function Contact() {


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted')  
  }

  return (
    <section id="contact" className="py-20 flex-col flex items-center justify-center">
      <div className="container max-w-2xl ">

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <Input placeholder="Your Name" required />
          <Input type="email" placeholder="Your Email" required />
          <Textarea placeholder="Your Message" required />
          <Button type="submit" className="w-full">Send Message</Button>
        </form>
      </div>
    </section>
  )
}