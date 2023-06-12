import { Sidebar } from "@/components/sidebar"
import { categories } from "@/data/categories"

interface VideoLayoutProps {
    children: React.ReactNode
}

export default function VideoLayout ({ children }: VideoLayoutProps) {
    return (
        <div className="flex w-full container">
            <div className="hidden md:block w-[20%]">
                <Sidebar categories={categories} />
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}