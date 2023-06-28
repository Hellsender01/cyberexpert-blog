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
import Image from "next/image"
import TextWrapper from "./text-wrapper"

interface VideoCardProps {
  title: string
  description: string
  thumbnail: string
  youtube: string
  completeBtn: boolean
}


export function VideoCard({ title, youtube, thumbnail, description, completeBtn }: VideoCardProps) {
  const [complete, setComplete] = React.useState<boolean>(false);
  const handleToggle = () => {
    setComplete((prevComplete) => !prevComplete);
  };

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className="break-all">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center space-y-1.5">
            <div className="h-auto w-auto">
              <Image src={`${thumbnail}`} width={340} height={200} className="h-full w-full object-cover" alt="youtube" />
            </div>

            <CardDescription className="space-y-4">
              <TextWrapper text={description} maxLength={70} />
            </CardDescription>
          </div>

        </CardContent>
        <Separator className="my-2" />
        <CardFooter className="flex-col items-center justify-between space-y-4">
          {
            completeBtn && (
              <div className="flex items-center gap-4">
                <Switch id="complete" checked={complete} onClick={handleToggle} />
                {complete ? (
                  <Label htmlFor="complete">completed</Label>
                ) : (
                  <Label htmlFor="complete">not completed</Label>
                )}
              </div>
            )
          }
          <Link className="w-full" href={youtube} target="_">
            <Button className="flex w-full items-center">
              Open
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </>
  );
}
