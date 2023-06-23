"use client"

import { Input } from "@/components/ui/input"
import { VideoCard } from "@/components/videocard";
import { webExploitation } from "@/data/web-exploitation";

const VideoPage = () => {

    return (
        <div className="w-full">
            <div className="flex py-2 items-center pb-10">
                <h1 className="text-2xl font-bold tracking-tighter items-start">Videos</h1>

                <div className="ml-auto">
                    <Input search={true}  type="text"  placeholder="Search" className="w-full placeholder-center dark:bg-transparent transition-colors rounded-md focus-visible:outline-none focus-visible:ring-2"/>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-full gap-4">
                {
                    webExploitation.map((video, i) => (
                        <VideoCard key={i} title={video.title} youtube={video.youtube} />
                    ))
                }
            </div>
        </div>
    )
}

export default VideoPage