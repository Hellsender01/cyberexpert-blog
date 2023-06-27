import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


const FAQPage = () => {
    return (
        <section className="container mx-auto mb-6">
            <h1 className="mb-4 py-4 text-3xl font-bold leading-tight tracking-tighter">FAQ</h1>

            <div className="space-y-8">
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>How Do I Get Started With Hacking?</AccordionTrigger>
                        <AccordionContent>
                        You can start by Learning Programming, Networking, and Operating Systems. Also, you can start with my Network Penetration Testing Playlist.
                        https://www.youtube.com/watch?v=MspUTBYKrkM
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>

                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Are academic degrees required for the cyber security industry?</AccordionTrigger>
                        <AccordionContent>
                        You can start by Learning Programming, Networking, and Operating Systems. Also, you can start with my Network Penetration Testing Playlist.
                        https://www.youtube.com/watch?v=MspUTBYKrkM
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Are certifications important for a job?</AccordionTrigger>
                        <AccordionContent>
                        You can start by Learning Programming, Networking, and Operating Systems. Also, you can start with my Network Penetration Testing Playlist.
                        https://www.youtube.com/watch?v=MspUTBYKrkM
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>What is the roadmap to hacking?</AccordionTrigger>
                        <AccordionContent>
                        You can start by Learning Programming, Networking, and Operating Systems. Also, you can start with my Network Penetration Testing Playlist.
                        https://www.youtube.com/watch?v=MspUTBYKrkM
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>What are the typical career paths and job opportunities for ethical hackers?</AccordionTrigger>
                        <AccordionContent>
                        You can start by Learning Programming, Networking, and Operating Systems. Also, you can start with my Network Penetration Testing Playlist.
                        https://www.youtube.com/watch?v=MspUTBYKrkM
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Is programming required in cybersecurity?</AccordionTrigger>
                        <AccordionContent>
                        You can start by Learning Programming, Networking, and Operating Systems. Also, you can start with my Network Penetration Testing Playlist.
                        https://www.youtube.com/watch?v=MspUTBYKrkM
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>What are capture-the-flag competitions?</AccordionTrigger>
                        <AccordionContent>
                        You can start by Learning Programming, Networking, and Operating Systems. Also, you can start with my Network Penetration Testing Playlist.
                        https://www.youtube.com/watch?v=MspUTBYKrkM
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>How do I create my videos?</AccordionTrigger>
                        <AccordionContent>
                        You can start by Learning Programming, Networking, and Operating Systems. Also, you can start with my Network Penetration Testing Playlist.
                        https://www.youtube.com/watch?v=MspUTBYKrkM
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>If your question is missing or you are not satisfied with the answer, join the Discord server and ask your question.</AccordionTrigger>
                        <AccordionContent>
                        You can start by Learning Programming, Networking, and Operating Systems. Also, you can start with my Network Penetration Testing Playlist.
                        https://www.youtube.com/watch?v=MspUTBYKrkM
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>

        </section>
    )
}

export default FAQPage