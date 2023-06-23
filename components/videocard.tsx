"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"

import { Switch } from "./ui/switch"
import { Separator } from "@radix-ui/react-select"

interface VideoCardProps {
  title: string
  youtube: string
}

export function VideoCard({ title, youtube }: VideoCardProps) {

  const [complete, setComplete] = React.useState<boolean>(false);
  const handleToggle = () => {
    complete ? setComplete(false) : setComplete(true)
  };
  return (
    <>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5 items-center justify-center">
                <CardDescription>
                  Description
                </CardDescription>
              </div>
            </div>
          </form>
        </CardContent>
        <Separator className="my-4" />
        <CardFooter className="flex justify-between">
        <Switch id="complete" checked={complete} onClick={handleToggle} />
          {
            complete ?
             
              <Label htmlFor="complete">completed</Label>
              : 
              <Label htmlFor="complete">not completed</Label>
          }
          <Link href={youtube} target="_">
            <Button className="flex items-center">
              Open
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </>
  )
}
