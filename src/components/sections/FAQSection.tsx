import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus } from "lucide-react";
import { faqs } from "@/data/faqs";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function FAQSection({ limit }: { limit?: number }) {
  const list = limit ? faqs.slice(0, limit) : faqs;
  const revealRef = useScrollReveal();

  return (
    <section ref={revealRef} className="py-16 md:py-20 bg-gradient-to-b from-muted/20 to-background overflow-hidden">
      <div className="container-prose grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="lg:sticky lg:top-32 lg:self-start reveal-on-scroll text-center lg:text-left flex flex-col items-center lg:items-start">
          <span className="eyebrow">Common questions</span>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl text-balance">
            Everything you might be wondering.
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground mx-auto lg:mx-0">
            Not finding your answer? Get in touch and we will reply personally.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full space-y-4">
          {list.map((f, i) => {
            const delayClass = `reveal-delay-${(i % 5) * 100}`;
            return (
              <AccordionItem
                key={f.question}
                value={`item-${i}`}
                className={`border-none rounded-3xl border border-border/60 bg-card p-1 shadow-soft transition-all duration-300 hover:shadow-elegant reveal-on-scroll ${delayClass}`}
              >
                <AccordionTrigger className="text-left font-display text-xl hover:no-underline px-6 py-5 data-[state=open]:pb-2">
                  <div className="flex items-center justify-between w-full gap-6">
                    <span>{f.question}</span>
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border/70 transition-all duration-300 group-hover:border-[oklch(0.78_0.06_20)] group-data-[state=open]:rotate-45 group-data-[state=open]:bg-gradient-gold group-data-[state=open]:border-transparent">
                      <Plus className="h-4 w-4" />
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground px-6 pb-5">
                  {f.answer}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
}
