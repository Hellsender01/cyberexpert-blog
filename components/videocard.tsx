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
  description:string
  thumbnail:string
  youtube: string
}


export function VideoCard({ title, youtube, thumbnail, description }: VideoCardProps) {
  const [complete, setComplete] = React.useState<boolean>(false);
  const handleToggle = () => {
    setComplete((prevComplete) => !prevComplete);
  };

  return (
    <>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5 items-center justify-center">
              <CardDescription>
      
                  <img src={`${thumbnail}`} alt="youtube" />
  
                <TextWrapper text={description} maxLength={50}/>
              </CardDescription>
            </div>
          </div>
        </CardContent>
        <Separator className="my-2" />
        <CardFooter className="flex-col items-center justify-between space-y-4">
          <div className="flex items-center gap-4">
            <Switch id="complete" checked={complete} onClick={handleToggle} />
            {complete ? (
              <Label htmlFor="complete">completed</Label>
            ) : (
              <Label htmlFor="complete">not completed</Label>
            )}
          </div>
          <Link className="w-full" href={youtube} target="_">
            <Button className="flex items-center w-full">
              Open
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </>
  );
}
