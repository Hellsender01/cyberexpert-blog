import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Button, buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function IndexPage() {
  return (
    <section className="md:container grid items-center gap-6 pb-8 pt-6 md:py-10 max-h-screen">
      <div className="flex max-w-full flex-col items-center justify-center gap-2">
        <h1 className="text-3xl font-bold uppercase leading-tight tracking-tighter text-center md:text-4xl">
          The Cyber Expert
        </h1>
        <div className="w-[90%] md:w-[50%] py-4 items-center">
          <Input search={true} type="text" className="md:h-[60px] dark:bg-gray-700 ring-white dark:hover:bg-gray-700 transition-colors rounded-md focus-visible:outline-none "/>
          {/* <Button variant="default" size="lg">Search</Button> */}
        </div>
      </div>
    </section>
  )
}