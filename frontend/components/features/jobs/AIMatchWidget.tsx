"use client";

import { useState } from "react";
import { Sparkles, FileText, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import UploadCvModal from "@/components/ui/upload-cv-modal";

export function AIMatchWidget() {
  const [modalOpen, setModalOpen] = useState(false);
  const [hasUploaded, setHasUploaded] = useState(false);

  return (
    <div className="w-full bg-surface-deep-start border border-border rounded-2xl p-6 relative overflow-hidden group shadow-lg">
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 blur-[50px] rounded-full pointer-events-none" />
      
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0 border border-primary/20">
            <Sparkles className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold tracking-tight">AI Match Analysis</h3>
        </div>
        
        {hasUploaded ? (
          <div className="space-y-4 animate-in fade-in zoom-in-95 duration-500">
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium">CV Profile Active</p>
                <p className="text-xs text-foreground-soft mt-1 leading-relaxed">
                  Jobs in this feed are now sorted by how well they match your unique experience.
                </p>
              </div>
            </div>
            <Button variant="outline" className="w-full text-xs h-9 bg-background/50 hover:bg-background" onClick={() => setModalOpen(true)}>
              Update CV
            </Button>
          </div>
        ) : (
          <div className="animate-in fade-in zoom-in-95 duration-500">
            <p className="text-sm text-foreground-soft mb-5 leading-relaxed">
              Upload your CV to let our AI engine analyze your experience and instantly highlight the roles you are most likely to land.
            </p>
            <Button 
              className="w-full bg-linear-to-r from-primary to-cyan-400 hover:from-primary/90 hover:to-cyan-400/90 text-primary-foreground font-semibold flex items-center gap-2 h-11 rounded-lg"
              onClick={() => setModalOpen(true)}
            >
              <FileText className="w-4 h-4" />
              Upload CV for Analysis
            </Button>
          </div>
        )}
      </div>

      <UploadCvModal 
        open={modalOpen} 
        onClose={() => { 
          setModalOpen(false); 
          // Simulate an upload setting the active state
          setHasUploaded(true); 
        }} 
      />
    </div>
  );
}
