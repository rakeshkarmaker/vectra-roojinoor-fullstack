"use client";

import { useState, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Mail, MapPin, Phone, UploadCloud } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

export default function ContactPage() {
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
  };

  return (
    <div className="w-full bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative isolate pt-32 lg:pt-40 pb-16 lg:pb-24 overflow-hidden border-b border-border/50">
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 tracking-tight">
              Let&apos;s Build the <br />
              Future Together
            </h1>
            <p className="text-lg md:text-xl text-foreground-soft leading-relaxed max-w-2xl font-light">
              Get in touch with our team to discuss your hiring or career goals. We typically respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left Column: Contact Details */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 tracking-tight">Direct Contact</h2>
              <p className="text-lg text-foreground-soft leading-relaxed">
                Prefer to email or call directly? Our offices are open Monday to Friday, 9am - 6pm (GMT).
              </p>
            </div>

            <div className="space-y-8 text-base text-foreground-soft">
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 rounded-2xl bg-surface-deep-mid border border-border flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-primary/10 group-hover:border-primary/30 transition-all duration-300">
                  <Phone className="h-6 w-6 text-foreground group-hover:text-primary transition-colors" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground-muted mb-1">Call Us</p>
                  <p className="font-semibold text-foreground text-lg">+44 20 1234 5678</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 rounded-2xl bg-surface-deep-mid border border-border flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-primary/10 group-hover:border-primary/30 transition-all duration-300">
                  <Mail className="h-6 w-6 text-foreground group-hover:text-primary transition-colors" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground-muted mb-1">Email</p>
                  <p className="font-semibold text-foreground text-lg">hello@vectratalent.com</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 rounded-2xl bg-surface-deep-mid border border-border flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-primary/10 group-hover:border-primary/30 transition-all duration-300">
                  <MapPin className="h-6 w-6 text-foreground group-hover:text-primary transition-colors" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground-muted mb-1">Office</p>
                  <p className="font-semibold text-foreground text-lg">London, UK</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 rounded-2xl bg-surface-deep-mid border border-border flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-primary/10 group-hover:border-primary/30 transition-all duration-300">
                  <FaLinkedin className="h-6 w-6 text-foreground group-hover:text-primary transition-colors" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground-muted mb-1">Social</p>
                  <p className="font-semibold text-foreground text-lg">LinkedIn</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="relative group">
            {/* Ambient background glow for the card */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-blue-500/30 rounded-[2.5rem] blur-xl opacity-50 group-hover:opacity-70 transition duration-500"></div>

            <Card className="relative p-8 md:p-12 bg-background/40 backdrop-blur-2xl border border-white/10 shadow-2xl rounded-[2rem] overflow-hidden">
              {/* Decorative elements inside card */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>

              <div className="mb-8 relative z-10">
                <h2 className="text-3xl font-semibold mb-3 bg-gradient-to-br from-foreground to-foreground-muted bg-clip-text text-transparent tracking-tight">Send a Message</h2>
                <p className="text-sm text-foreground-soft font-light leading-relaxed">Fill out the form below and our team will get back to you shortly.</p>
              </div>

              <form className="space-y-6 relative z-10" onSubmit={onSubmit}>
                <div className="space-y-2.5">
                  <label className="text-sm font-medium text-foreground-muted">I am a...</label>
                  <select className="w-full bg-white/5 border border-white/10 hover:border-white/20 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-foreground appearance-none cursor-pointer">
                    <option className="bg-background text-foreground">Select an option</option>
                    <option className="bg-background text-foreground">Candidate</option>
                    <option className="bg-background text-foreground">Company</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2.5">
                    <label className="text-sm font-medium text-foreground-muted">Your Name</label>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g., John Doe"
                      className="w-full bg-white/5 border border-white/10 hover:border-white/20 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:bg-white/10 transition-all placeholder:text-foreground-muted/50"
                    />
                  </div>
                  <div className="space-y-2.5">
                    <label className="text-sm font-medium text-foreground-muted">Your Email</label>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g., john@example.com"
                      className="w-full bg-white/5 border border-white/10 hover:border-white/20 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:bg-white/10 transition-all placeholder:text-foreground-muted/50"
                    />
                  </div>
                </div>

                <div className="space-y-2.5">
                  <label className="text-sm font-medium text-foreground-muted">Subject</label>
                  <input
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="How can we help you?"
                    className="w-full bg-white/5 border border-white/10 hover:border-white/20 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:bg-white/10 transition-all placeholder:text-foreground-muted/50"
                  />
                </div>

                <div className="space-y-2.5">
                  <label className="text-sm font-medium text-foreground-muted">Message</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Provide details about your inquiry..."
                    className="w-full bg-white/5 border border-white/10 hover:border-white/20 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:bg-white/10 transition-all placeholder:text-foreground-muted/50 min-h-[140px] resize-y"
                  />
                </div>

                <div className="space-y-2.5">
                  <label className="text-sm font-medium text-foreground-muted">Upload CV or Job Brief (Optional)</label>
                  <div
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={onDrop}
                    className="w-full bg-white/5 border border-dashed border-white/20 hover:border-primary/50 hover:bg-primary/5 rounded-xl p-8 text-center text-sm transition-all group cursor-pointer"
                    onClick={() => fileRef.current?.click()}
                  >
                    <input
                      ref={fileRef}
                      type="file"
                      hidden
                      accept=".pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/pdf"
                      onChange={(e) => onSelectFile(e.target.files?.[0])}
                    />
                    <UploadCloud className="mx-auto mb-4 h-10 w-10 text-foreground-muted/50 group-hover:text-primary transition-all group-hover:scale-110 duration-300" />
                    <div className="text-foreground mb-1 font-medium">
                      Drag & drop file or{" "}
                      <span className="text-primary group-hover:underline">
                        browse
                      </span>
                    </div>
                    <div className="text-xs text-foreground-muted">
                      PDF, DOCX (Max. 10MB)
                    </div>
                    {file && (
                      <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-xs font-medium text-primary border border-primary/30 backdrop-blur-md">
                        {file.name}
                      </div>
                    )}
                    {error && (
                      <div className="mt-3 text-xs text-destructive bg-destructive/10 border border-destructive/20 rounded-lg px-4 py-2.5">
                        {error}
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-4">
                  <div className="flex items-center h-5 mt-0.5">
                    <input
                      id="agree"
                      type="checkbox"
                      className="w-4 h-4 rounded border-white/20 bg-white/5 checked:bg-primary checked:border-primary focus:ring-primary focus:ring-offset-background focus:ring-offset-2 accent-primary cursor-pointer transition-colors"
                    />
                  </div>
                  <label
                    htmlFor="agree"
                    className="text-sm text-foreground-soft cursor-pointer select-none leading-relaxed"
                  >
                    I agree to the Privacy Policy and consent to my data being stored.
                  </label>
                </div>

                <div className="pt-6">
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90 text-white border-0 shadow-lg shadow-primary/25 h-[56px] text-base font-medium rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            </Card>
          </div>

        </div>
      </div>
    </div>
  );
}
