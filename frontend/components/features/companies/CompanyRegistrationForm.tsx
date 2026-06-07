"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CompanyRegistrationForm() {
  return (
    <Card className="p-8 md:p-12 bg-card border-border shadow-xl">
      <div className="mb-10">
        <h2 className="text-2xl font-medium mb-3">Create Your Company Account</h2>
        <p className="text-foreground-soft text-sm">
          Register to unlock unique company features and streamline recruitment.
        </p>
      </div>

      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Full Name */}
          <div className="space-y-2.5">
            <label className="text-sm font-medium text-foreground-soft">Full Name</label>
            <input 
              type="text" 
              placeholder="e.g., John Doe"
              className="w-full bg-background border border-border/80 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all placeholder:text-foreground-muted"
            />
          </div>

          {/* Work Email */}
          <div className="space-y-2.5">
            <label className="text-sm font-medium text-foreground-soft">Work Email</label>
            <input 
              type="email" 
              placeholder="e.g., john.doe@acmecorp.com"
              className="w-full bg-background border border-border/80 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all placeholder:text-foreground-muted"
            />
          </div>

          {/* Company Name */}
          <div className="space-y-2.5">
            <label className="text-sm font-medium text-foreground-soft">Company Name</label>
            <input 
              type="text" 
              placeholder="e.g., Acme Corporation"
              className="w-full bg-background border border-border/80 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all placeholder:text-foreground-muted"
            />
          </div>

          {/* Phone Number */}
          <div className="space-y-2.5">
            <label className="text-sm font-medium text-foreground-soft">Phone Number</label>
            <input 
              type="tel" 
              placeholder="e.g., +1 (555) 123-4567"
              className="w-full bg-background border border-border/80 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all placeholder:text-foreground-muted"
            />
          </div>

          {/* Password */}
          <div className="space-y-2.5">
            <label className="text-sm font-medium text-foreground-soft">Password</label>
            <input 
              type="password" 
              placeholder="Enter your password"
              className="w-full bg-background border border-border/80 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all placeholder:text-foreground-muted"
            />
          </div>

          {/* Confirm Password */}
          <div className="space-y-2.5">
            <label className="text-sm font-medium text-foreground-soft">Confirm Password</label>
            <input 
              type="password" 
              placeholder="Confirm your password"
              className="w-full bg-background border border-border/80 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all placeholder:text-foreground-muted"
            />
          </div>

        </div>

        {/* Checkbox */}
        <div className="flex items-center gap-3 pt-4">
          <input 
            type="checkbox" 
            id="terms" 
            className="w-4 h-4 rounded border-border/80 bg-background checked:bg-primary checked:border-primary focus:ring-primary focus:ring-offset-background focus:ring-offset-2 accent-primary cursor-pointer transition-colors"
          />
          <label htmlFor="terms" className="text-sm text-foreground-soft cursor-pointer select-none">
            I agree to the <Link href="#" className="text-primary hover:text-primary/80 transition-colors">Terms & Conditions</Link> and <Link href="#" className="text-primary hover:text-primary/80 transition-colors">Privacy Policy</Link>
          </label>
        </div>

        {/* Submit */}
        <div className="pt-6">
          <Button className="w-full bg-primary/20 hover:bg-primary/30 text-primary border border-primary/30 h-[52px] text-base font-medium rounded-xl transition-all">
            Create Account
          </Button>
        </div>

        <p className="text-center text-sm text-foreground-soft mt-8">
          Already have an account? <Link href="#" className="text-primary hover:text-primary/80 transition-colors font-medium">Sign In</Link>
        </p>
      </form>
    </Card>
  );
}
