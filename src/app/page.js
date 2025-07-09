"use client"

import CardMatrix from "@/components/cardMatrix"
import Hero from "@/components/Hero"
import Experience from "@/components/Experience"

export default function Home() {

  return (
    <div className="flex flex-col">
      <Hero />

      {/* <CardMatrix /> */}

      <Experience />

    </div>
  )
}
