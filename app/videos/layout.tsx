"use client"
import { Sidebar } from "@/components/sidebar"
import { ToastProvider } from "@/components/ui/toast"
import { categories } from "@/data/categories"

interface VideoLayoutProps {
    children: React.ReactNode
}

export default function VideoLayout ({ children }: VideoLayoutProps) {
    return (
   
            <div className="container flex w-full">
                <div className="hidden w-[20%] md:block">
                    <Sidebar categories={categories} />
                </div>
                <>
                    {children}
                </>
            </div>
    
    )
}