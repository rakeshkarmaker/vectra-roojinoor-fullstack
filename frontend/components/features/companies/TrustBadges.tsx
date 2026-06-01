import { ShieldCheck, LockKeyhole, Globe } from "lucide-react";
import { Card } from "@/components/ui/card";

export function TrustBadges() {
  return (
    <Card className="p-8 md:p-10 bg-card border-border flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-border/50 gap-8 md:gap-0 shadow-lg">
      
      {/* Security & Compliance */}
      <div className="flex-1 flex flex-col sm:flex-row items-start gap-5 md:px-8 first:pl-0 last:pr-0 pt-6 first:pt-0 md:pt-0">
        <div className="w-12 h-12 shrink-0 rounded-full flex items-center justify-center text-primary/80 mt-0.5">
          <ShieldCheck className="w-8 h-8" strokeWidth={1.5} />
        </div>
        <div>
          <h4 className="text-base font-medium mb-2 text-foreground">Security & Compliance</h4>
          <p className="text-sm text-foreground-soft leading-relaxed">
            Our platform adheres to strict data security standards and compliance protocols.
          </p>
        </div>
      </div>

      {/* Data Privacy */}
      <div className="flex-1 flex flex-col sm:flex-row items-start gap-5 md:px-8 pt-6 md:pt-0">
        <div className="w-12 h-12 shrink-0 rounded-full flex items-center justify-center text-primary/80 mt-0.5">
          <LockKeyhole className="w-8 h-8" strokeWidth={1.5} />
        </div>
        <div>
          <h4 className="text-base font-medium mb-2 text-foreground">Data Privacy</h4>
          <p className="text-sm text-foreground-soft leading-relaxed">
            We prioritize your data privacy with advanced encryption and access controls.
          </p>
        </div>
      </div>

      {/* 24/7 Dedicated Support */}
      <div className="flex-1 flex flex-col sm:flex-row items-start gap-5 md:px-8 pt-6 md:pt-0">
        <div className="w-12 h-12 shrink-0 rounded-full flex items-center justify-center text-primary/80 mt-0.5">
          <Globe className="w-8 h-8" strokeWidth={1.5} />
        </div>
        <div>
          <h4 className="text-base font-medium mb-2 text-foreground">24/7 Dedicated Support</h4>
          <p className="text-sm text-foreground-soft leading-relaxed">
            Our team is available round-the-clock for technical assistance and inquiries.
          </p>
        </div>
      </div>

    </Card>
  );
}
