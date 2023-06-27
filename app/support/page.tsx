import { Card, CardHeader } from "@/components/ui/card";
import { VideoCard } from "@/components/videocard";

export default function SupportPage(){
    return (
        <section className="container mx-auto">
            <h1 className="py-6 text-3xl font-bold leading-tight tracking-tighter">Support</h1> 
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                <VideoCard title={"Buy Me A Coffee"} description={""} thumbnail={""} youtube={"https://www.buymeacoffee.com/TheCyberExpert"} completeBtn={false} />
                <VideoCard title={"Pateron"} description={"Support us through patreon"} thumbnail={""} youtube={""} completeBtn={false} />
                <VideoCard title={"Pateron"} description={"Support us through patreon"} thumbnail={""} youtube={""} completeBtn={false} />
            </div>
        </section>
    )
}