import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


const SupportPage = () => {
    return (
        <section className="container mx-auto">
            <h1 className="text-3xl font-bold tracking-tighte leading-tight">Support</h1>

            <div className="">
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Is it accessible?</AccordionTrigger>
                        <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>

        </section>
    )
}

export default SupportPage