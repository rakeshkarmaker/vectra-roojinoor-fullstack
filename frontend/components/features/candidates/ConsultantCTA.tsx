import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ConsultantCTA() {
  return (
    <div className="w-full rounded-2xl bg-card border border-border relative flex flex-col md:flex-row min-h-[160px] mt-24 shadow-2xl">

      {/* Image popping out */}
      <div className="absolute bottom-0 left-4 md:left-12 w-48 md:w-72 h-[180%] z-20 pointer-events-none mix-blend-lighten">
        <Image
          src="/images/consultants_cutout.png"
          alt="Consultants discussing"
          fill
          className="object-contain object-bottom"
        />
      </div>

      {/* Content Side */}
      <div className="flex-1 py-8 px-6 md:py-10 md:pr-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 z-10 ml-[200px] md:ml-[340px] relative">
        <div>
          <h3 className="text-xl font-medium mb-3">Speak to a Consultant</h3>
          <p className="text-sm text-foreground-soft max-w-sm leading-relaxed">
            Our specialist team is here to help you take the next step.
            <br />
            Contact us: <a href="mailto:info@vectratalent.com" className="text-foreground-muted hover:text-primary transition-colors">info@vectratalent.com</a>
          </p>
        </div>

        <Button className="shrink-0 bg-primary/20 text-primary hover:bg-primary/30 border border-primary/30 px-6 h-11 rounded-lg gap-2 transition-all">
          Book a Call
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>

    </div>
  );
}
