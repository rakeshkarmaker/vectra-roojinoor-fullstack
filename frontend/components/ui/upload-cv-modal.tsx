"use client";

import { useState, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ArrowRight, Mail, MapPin, Phone, UploadCloud } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function UploadCvModal({ open, onClose }: Props) {
  const [file, setFile] = useState<File | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement | null>(null);

  const onSelectFile = useCallback((f?: File) => {
    setError(null);
    if (!f) return setFile(null);
    const allowed = [
      "application/pdf",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "application/msword",
    ];
    if (!allowed.includes(f.type)) {
      return setError("Only PDF or DOC/DOCX files are allowed.");
    }
    if (f.size > 10 * 1024 * 1024) {
      return setError("File must be smaller than 10MB.");
    }
    setFile(f);
  }, []);

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      onSelectFile(e.dataTransfer.files[0]);
    }
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return setError("Please upload a CV or job brief.");
    console.log({ name, email, subject, message, file });
    alert("Upload simulated — check console. (Implement server upload)");
    onClose();
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(nextOpen) => {
        if (!nextOpen) onClose();
      }}
    >
      <DialogContent
        showCloseButton
        className="w-[calc(100%-2rem)] max-h-[90vh] overflow-y-auto p-0 sm:max-w-5xl! border border-[#1e3b53] bg-[#041226] text-white"
      >
        <DialogTitle className="sr-only">Upload CV</DialogTitle>

        <div className="grid grid-cols-1 md:grid-cols-[0.82fr_1.18fr]">
          <div className="p-8 md:p-10 text-white bg-[#031224] border-r border-[#1a3348]">
            <h3 className="text-[48px] leading-[1.02] font-semibold tracking-tight mb-6">
              Let&apos;s Build the Future Together
            </h3>
            <p className="text-[15px] leading-[1.6] text-on-dark-muted mb-10 max-w-[26ch]">
              Get in touch with our team to discuss your hiring or career goals.
            </p>

            <div className="space-y-6 text-[15px] text-on-dark-subtle">
              <p className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" />
                +44 20 1234 5678
              </p>
              <p className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" />
                hello@vectratalent.com
              </p>
              <p className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-primary" />
                London, UK
              </p>
              <p className="flex items-center gap-3">
                {/* <Linkedin className="h-4 w-4 text-primary" /> */}
                <FaLinkedin className="h-4 w-4 text-primary" />
                LinkedIn
              </p>
            </div>
          </div>

          <form className="p-8 md:p-9 bg-[#041226]" onSubmit={onSubmit}>
            <div className="grid grid-cols-1 gap-4">
              <label className="text-[15px] text-on-dark-subtle">
                I am a...
              </label>
              <select className="h-11 rounded-md border border-[#23425a] bg-[#06182a] px-3 py-2 text-[15px] text-white">
                <option>Select an option</option>
                <option>Candidate</option>
                <option>Company</option>
              </select>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                  className="h-11 rounded-md border border-[#23425a] bg-[#06182a] px-3 py-2 text-[15px] text-white placeholder:text-on-dark-soft"
                />
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email"
                  className="h-11 rounded-md border border-[#23425a] bg-[#06182a] px-3 py-2 text-[15px] text-white placeholder:text-on-dark-soft"
                />
              </div>

              <input
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Subject"
                className="h-11 rounded-md border border-[#23425a] bg-[#06182a] px-3 py-2 text-[15px] text-white placeholder:text-on-dark-soft"
              />

              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your Message"
                className="h-28 rounded-md border border-[#23425a] bg-[#06182a] px-3 py-2 text-[15px] text-white placeholder:text-on-dark-soft"
              />

              <p className="text-[15px] text-on-dark-subtle -mb-1">
                Upload CV or Job Brief (Optional)
              </p>

              <div
                onDragOver={(e) => e.preventDefault()}
                onDrop={onDrop}
                className="rounded-xl border border-dashed border-[#2e4e67] bg-[#06182a] p-7 text-center text-[15px]"
              >
                <input
                  ref={fileRef}
                  type="file"
                  hidden
                  accept=".pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/pdf"
                  onChange={(e) => onSelectFile(e.target.files?.[0])}
                />
                <UploadCloud className="mx-auto mb-3 h-6 w-6 text-primary" />
                <div>
                  Drag & drop file or{" "}
                  <button
                    type="button"
                    onClick={() => fileRef.current?.click()}
                    className="text-primary underline"
                  >
                    browse
                  </button>
                </div>
                <div className="mt-2 text-xs text-on-dark-soft">
                  PDF, DOCX (Max. 10MB)
                </div>
                {file && (
                  <div className="mt-3 text-sm text-on-dark-subtle">
                    Selected: {file.name}
                  </div>
                )}
                {error && (
                  <div className="mt-2 text-sm text-red-400">{error}</div>
                )}
              </div>

              <div className="flex items-center gap-2">
                <input id="agree" type="checkbox" className="h-4 w-4" />
                <label
                  htmlFor="agree"
                  className="text-[15px] text-on-dark-subtle"
                >
                  I agree to the Privacy Policy and consent to my data being
                  stored.
                </label>
              </div>

              <Button
                type="submit"
                className="w-full h-11 brand-gradient text-primary-foreground font-semibold"
              >
                Send Message <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
