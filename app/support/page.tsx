import { Card, CardHeader } from "@/components/ui/card";
import { VideoCard } from "@/components/videocard";

export default function SupportPage() {
    return (
        <section className="container mx-auto">
            <h1 className="py-6 text-3xl font-bold leading-tight tracking-tighter">Support</h1>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                <VideoCard title={"Buy Me A Coffee"} description={"Buy me a coffee"} thumbnail={"https://www.buymeacoffee.com/assets/img/guidelines/logo-mark-1.svg"} youtube={"https://www.buymeacoffee.com/TheCyberExpert"} completeBtn={false} />
                <VideoCard title={"Pateron"} description={"Support us through patreon"} thumbnail={"https://cdn.freebiesupply.com/logos/large/2x/patreon-logo-png-transparent.png"} youtube={""} completeBtn={false} />
                <VideoCard title={"UPI"} description={"Support me directly"} thumbnail={"https://iili.io/HiBF7Wv.jpg"} youtube={""} completeBtn={false} />
            </div>
        </section>
    )
}