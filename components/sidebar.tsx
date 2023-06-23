"use client"

import { LayoutGrid } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

import { Categories } from "../data/categories"
import Link from "next/link"
import { useState } from "react"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
    categories: Categories[]
}

export function Sidebar({ className, categories }: SidebarProps) {
    const [menu, setMenu] = useState<Categories>()
    return (
        <div className={cn("pb-12", className)}>
            <div className="space-y-4 py-4">
                <div className="px-4 py-2">
                    <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">
                        Categories
                    </h2>

                    <div className="space-y-4">
                        {categories.map((category, i) => (
                            <Link href={`/videos/${category.link}`} className="space-y-5 gap-3">
                                <Button
                                    key={i}
                                    variant={menu?.active ? "secondary" : "ghost"}
                                    size="sm"
                                    className="w-full justify-start"
                                    onClick={() => setMenu(category)}
                                >
                                    <LayoutGrid className="mr-2 h-4 w-4" />
                                    {category.name}
                                </Button>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}