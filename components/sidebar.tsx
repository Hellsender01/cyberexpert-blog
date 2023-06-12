"use client"

import { LayoutGrid } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

import { Categories, updateCategory } from "../data/categories"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
    categories: Categories[]
}

export function Sidebar({ className, categories }: SidebarProps) {

    const handleCategoryClick = (category: Categories) => {
        const {name, active} = category
        const newActive = !active
        updateCategory(name, newActive)
    }

    return (
        <div className={cn("pb-12", className)}>
            <div className="space-y-4 py-4">
                <div className="px-4 py-2">
                    <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">
                        Categories
                    </h2>

                    <div className="space-y-1">
                        <div className="space-y-1">
                            {categories.map((category) => (
                                <Button
                                    key={category.name}
                                    variant={category.active ? "secondary" : "ghost"} // Update the variant based on the active property
                                    size="sm"
                                    className="w-full justify-start"
                                    onClick={() => handleCategoryClick(category)} // Add an onClick event handler
                                >
                                    <LayoutGrid className="mr-2 h-4 w-4" />
                                    {category.name}
                                </Button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}