import * as React from "react"
import Image from "next/image"
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

interface VideoCardProps {
  title: string
  youtube: string
}

export function VideoCard({ title, youtube }: VideoCardProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5 items-center justify-center">
              Description
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Switch id="complete" />
        <Label htmlFor="complete">Mark as completed</Label>
        <Link href={youtube} target="_">
          <Button className="flex items-center">
            Open
            <ArrowUpRight className="h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
