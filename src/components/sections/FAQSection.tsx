import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/faqs";

export function FAQSection({ limit }: { limit?: number }) {
  const list = limit ? faqs.slice(0, limit) : faqs;
  return (
    <section className="py-24 md:py-32">
      <div className="container-prose grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <span className="eyebrow">Common questions</span>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl text-balance">
            Everything you might be wondering.
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
            Not finding your answer? Get in touch and we will reply personally.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {list.map((f, i) => (
            <AccordionItem key={f.question} value={`item-${i}`} className="border-border">
              <AccordionTrigger className="text-left font-display text-lg hover:no-underline">
                {f.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {f.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
