import Link from "next/link"

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
          <nav className="hidden items-center space-x-1 md:flex">
            <Link
              href={siteConfig.links.discord}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                })}
              >
                <Icons.discord className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.instagram}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                })}
              >
                <Icons.instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                })}
              >
                <Icons.linkedin className="h-5 w-5" />
                <span className="sr-only">Linkedin</span>
              </div>
            </Link>
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
          <div className="flex items-center space-x-2 md:hidden">
            <ThemeToggle />
            <div>
              <Sheet>
                <SheetTrigger asChild>
                  <Icons.menu className="h-5 w-5 cursor-pointer fill-current" />
                </SheetTrigger>
                <SheetContent side={"left"}>
                  <SheetHeader>
                    <SheetTitle>The Cyber Expert</SheetTitle>
                    <SheetDescription>
                      @TheCyberExpert
                    </SheetDescription>
                  </SheetHeader>
                  <Separator className="my-2" />
                  <div className="flex w-full flex-col items-center justify-center space-y-4 p-4">
                    <Link href={"/"} className="w-full">
                      <SheetClose asChild>
                        <Button className="w-full" variant={"ghost"}>Home</Button>
                      </SheetClose>
                    </Link>
                    <Link href={"/videos"} className="w-full">
                      <SheetClose asChild>
                        <Button className="w-full" variant={"ghost"}>Categories</Button>
                      </SheetClose>
                    </Link>
                    <Link href={"/support"} className="w-full">
                      <SheetClose asChild>
                        <Button className="w-full" variant={"ghost"}>Support</Button>
                      </SheetClose>
                    </Link>
                    <Link href={"/faq"} className="w-full">
                      <SheetClose asChild>
                        <Button className="w-full" variant={"ghost"}>FAQ</Button>
                      </SheetClose>
                    </Link>
                  </div>

                  <SheetFooter className="my-2 mb-4 space-y-4">
                    <Separator className="my-2" />
                    <h1 className="text-center font-semibold">Follow me On</h1>
                    <SheetClose asChild>
                      <Link href={siteConfig.links.youtube} target="_" className="w-full">
                        <Button className="flex-inline w-full gap-2" variant={"ghost"} type="submit">Subscribe on
                          <Icons.youtube className="h-5 w-5" />
                        </Button>
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link href={siteConfig.links.instagram} target="_" className="w-full">
                        <Button className="flex-inline w-full gap-2" variant={"ghost"} type="submit">Follow on
                          <Icons.instagram className="h-5 w-5 " />
                        </Button>
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link href={siteConfig.links.linkedin} target="_" className="w-full">
                        <Button className="flex-inline w-full gap-2" variant={"ghost"} type="submit">Connect on
                          <Icons.linkedin className="h-5 w-5 " />
                        </Button>
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link href={siteConfig.links.twitter} target="_" className="w-full">
                        <Button className="flex-inline w-full gap-2" variant={"ghost"} type="submit">Follow on
                          <Icons.twitter className="h-5 w-5" />
                        </Button>
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link href={siteConfig.links.discord} target="_" className="w-full">
                        <Button className="flex-inline w-full gap-2" type="submit">Join Our
                          <Icons.discord className="h-5 w-5 " />
                        </Button>
                      </Link>
                    </SheetClose>
                  </SheetFooter>
                </SheetContent>
              </Sheet>
            </div>

          </div>
        </div>
      </div>
    </header>
  )
}
