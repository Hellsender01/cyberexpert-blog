"use client"

import { Input } from "@/components/ui/input"
import { VideoCard } from "@/components/videocard";
import { webExploitation } from "@/data/web-exploitation";
import { Categories, categories } from "@/data/categories";
import CategoryCard from "@/components/categorycard";

const VideoPage = () => {

    return (
        <div className="w-full">
            <div className="flex py-2 items-center pb-10">
                <h1 className="text-2xl font-bold tracking-tighter items-start">Categories</h1>

                <div className="ml-auto">
                    <Input search={true}  type="text"  placeholder="Search..." className="hidden md:block w-full placeholder-center dark:bg-transparent transition-colors rounded-md focus-visible:outline-none focus-visible:ring-2"/>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 h-full gap-4">
                {
                    categories.map((category, index) => (
                        <CategoryCard key={index} title={category.name} link={category.link} />
                    ))
                }
            </div>
        </div>
    )
}

export default VideoPage