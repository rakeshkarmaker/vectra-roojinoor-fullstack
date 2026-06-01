"use client";

import { UploadCloud } from "lucide-react";
import { Card } from "@/components/ui/card";

export function CvUploadWidget() {
  return (
    <Card className="p-6 md:p-8 bg-card border-border flex flex-col gap-6 w-full max-w-md ml-auto md:ml-0 lg:ml-auto">
      <h3 className="text-xl font-semibold text-center">Upload Your CV</h3>
      <div className="border border-dashed border-border rounded-xl p-8 flex flex-col items-center justify-center text-center gap-4 hover:border-primary/50 transition-colors cursor-pointer group bg-surface-deep-mid/50">
        <UploadCloud className="w-10 h-10 text-foreground-muted group-hover:text-primary transition-colors" />
        <p className="text-foreground-soft text-sm leading-relaxed">
          Drag in, or choose CV from<br />
          <span className="text-primary hover:underline transition-all">your files</span>
        </p>
        <p className="text-xs text-foreground-muted mt-2 tracking-wide uppercase">
          PDF, DOCX. MAX 10MB
        </p>
      </div>
    </Card>
  );
}
