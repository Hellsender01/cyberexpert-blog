import Link from "next/link"
import { Categories } from "../data/categories"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Separator } from "./ui/separator"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full  bg-background">
      <div className="container flex h-20 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4 ">
          <nav className="hidden md:flex items-center space-x-1">
            <Link
              href={siteConfig.links.youtube}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                })}
              >
                <Icons.youtube className="h-5 w-5 fill-current" />
                <span className="sr-only">Youtube</span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                })}
              >
                <Icons.gitHub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                })}
              >
                <Icons.twitter className="h-5 w-5 fill-current" />
                <span className="sr-only">Twitter</span>
              </div>
            </Link>

            <ThemeToggle />
          </nav>
          <div className="block md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Icons.menu className="h-5 w-5 fill-current cursor-pointer" />
              </SheetTrigger>
              <SheetContent side={"left"}>
                <SheetHeader>
                  <SheetTitle>The Cyber Expert</SheetTitle>
                  <SheetDescription>
                    @TheCyberExpert
                  </SheetDescription>
                </SheetHeader>
                <Separator className="my-2" />
                <div className="flex flex-col items-center justify-center p-4 w-full space-y-4">
                  <Link  href={"/"} className="w-full">
                    <Button className="w-full" variant={"ghost"}>Home</Button>
                  </Link>
                  <Link  href={"/videos"} className="w-full">
                    <Button className="w-full" variant={"ghost"}>Categories</Button>
                  </Link>
                  <Link  href={"/about"} className="w-full">
                    <Button className="w-full" variant={"ghost"}>About</Button>
                  </Link>
                </div>
                <SheetFooter>
                  <SheetClose asChild>
                    <Button className="flex-inline gap-2" type="submit">Open in 
                    <Icons.youtube />
                    </Button>
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
