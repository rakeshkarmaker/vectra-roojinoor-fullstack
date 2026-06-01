"use client";

import { useState, useMemo, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, PoundSterling, Clock, Filter, Sparkles, Bookmark, Briefcase, X, Building, CheckCircle2 } from "lucide-react";
import { JobAlertsWidget } from "./JobAlertsWidget";
import { AIMatchWidget } from "./AIMatchWidget";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";

// Generic Filter Lists
const industriesList = ["Engineering", "Data Science", "Product", "Design", "Sales", "Marketing"];
const workModelList = ["Remote", "Hybrid", "On-site"];
const jobTypeList = ["Permanent", "Contract", "Freelance"];
const expLevelsList = ["Junior", "Mid-Level", "Senior", "Director", "Executive"];

const mockJobs = [
  {
    id: 1,
    title: "Optical Systems Engineer",
    company: "VisionTech Solutions",
    location: "Bristol, UK",
    type: "Permanent",
    salary: "£65,000 - £80,000",
    minSalary: 65,
    exp: "Mid-Level",
    industry: "Engineering",
    workModel: "On-site",
    posted: "2 days ago",
    tags: ["Photonics", "Zemax", "Laser Design"],
    match: 92,
    isSaved: true,
    description: "Join our cutting-edge team to design next-generation optical systems. You will lead the prototyping and verification of advanced laser systems used in quantum computing applications. Ideal candidate has 4+ years of hands-on Zemax experience.",
  },
  {
    id: 2,
    title: "Senior Aerospace Software Engineer",
    company: "AeroDynamics Corp",
    location: "Derby, UK",
    type: "Contract",
    salary: "£550 - £700 / day",
    minSalary: 110,
    exp: "Senior",
    industry: "Engineering",
    workModel: "Hybrid",
    posted: "1 day ago",
    tags: ["C++", "DO-178C", "RTOS"],
    match: 88,
    isSaved: false,
    description: "Seeking a senior software engineer for a 12-month contract. You will be responsible for developing safety-critical flight control software adhering to DO-178C standards. C++ and RTOS expertise is mandatory.",
  },
  {
    id: 3,
    title: "Product Manager",
    company: "LightWave Technologies",
    location: "Glasgow, UK",
    type: "Permanent",
    salary: "£70,000 - £85,000",
    minSalary: 70,
    exp: "Mid-Level",
    industry: "Product",
    workModel: "Hybrid",
    posted: "4 days ago",
    tags: ["Roadmap", "Agile", "B2B"],
    match: 85,
    isSaved: false,
    description: "Great opportunity for a mid-level PM to join a rapid-growth startup. You will manage the product lifecycle for our B2B hardware solutions. Mentorship provided by industry veterans.",
  },
  {
    id: 4,
    title: "VP of Engineering",
    company: "DriveAI",
    location: "London, UK",
    type: "Permanent",
    salary: "£140,000 - £180,000",
    minSalary: 140,
    exp: "Executive",
    industry: "Engineering",
    workModel: "On-site",
    posted: "Just now",
    tags: ["Leadership", "Strategy", "Scaling"],
    match: 78,
    isSaved: true,
    description: "Lead the architecture and engineering teams of our level 4 autonomous driving system. You will oversee all engineering operations, scaling the team and ensuring product delivery targets are met.",
  },
  {
    id: 5,
    title: "Data Scientist",
    company: "IoT Innovations",
    location: "Cambridge, UK",
    type: "Permanent",
    salary: "£55,000 - £70,000",
    minSalary: 55,
    exp: "Junior",
    industry: "Data Science",
    workModel: "Remote",
    posted: "1 week ago",
    tags: ["Python", "TensorFlow", "IoT"],
    match: 76,
    isSaved: false,
    description: "Develop ML models for our next generation of smart home devices. You will work closely with hardware engineers to optimize anomaly detection and predictive maintenance algorithms.",
  },
  {
    id: 6,
    title: "Head of Marketing",
    company: "CommTech Global",
    location: "Remote",
    type: "Permanent",
    salary: "£90,000 - £110,000",
    minSalary: 90,
    exp: "Director",
    industry: "Marketing",
    workModel: "Remote",
    posted: "3 days ago",
    tags: ["B2B", "Growth", "GTM"],
    match: 71,
    isSaved: false,
    description: "Remote role for an experienced Marketing leader. Design and execute GTM strategies for sub-6GHz 5G base stations targeting enterprise telecoms. B2B telecom experience required.",
  },
];

export function JobListings() {
  const [activeTab, setActiveTab] = useState("all");
  const [salaryFilter, setSalaryFilter] = useState(30);

  // Generic filter states
  const [expFilters, setExpFilters] = useState<string[]>([]);
  const [industryFilters, setIndustryFilters] = useState<string[]>([]);
  const [workModelFilters, setWorkModelFilters] = useState<string[]>([]);
  const [jobTypeFilters, setJobTypeFilters] = useState<string[]>([]);

  const [sortOption, setSortOption] = useState("match");

  const [isFiltering, setIsFiltering] = useState(false);
  const [selectedJob, setSelectedJob] = useState<typeof mockJobs[0] | null>(null);

  // Toggle filter arrays
  const toggleFilter = (setter: React.Dispatch<React.SetStateAction<string[]>>, value: string) => {
    setter(prev => prev.includes(value) ? prev.filter(i => i !== value) : [...prev, value]);
  };

  // Filter & Sort Logic
  const filteredJobs = useMemo(() => {
    let result = mockJobs.filter(job => {
      // Tab filter
      if (activeTab === "recommended" && job.match < 85) return false;
      if (activeTab === "saved" && !job.isSaved) return false;

      // Salary filter
      if (job.minSalary < salaryFilter) return false;

      // Generic filters
      if (expFilters.length > 0 && !expFilters.includes(job.exp)) return false;
      if (industryFilters.length > 0 && !industryFilters.includes(job.industry)) return false;
      if (workModelFilters.length > 0 && !workModelFilters.includes(job.workModel)) return false;
      if (jobTypeFilters.length > 0 && !jobTypeFilters.includes(job.type)) return false;

      return true;
    });

    // Sort
    result = result.sort((a, b) => {
      if (sortOption === "salary") return b.minSalary - a.minSalary;
      if (sortOption === "recent") return a.id - b.id; // Mock recent sort
      return b.match - a.match; // Default match
    });

    return result;
  }, [activeTab, salaryFilter, expFilters, industryFilters, workModelFilters, jobTypeFilters, sortOption]);

  // Simulate network loading when filters change
  useEffect(() => {
    setIsFiltering(true);
    const timer = setTimeout(() => setIsFiltering(false), 400);
    return () => clearTimeout(timer);
  }, [activeTab, salaryFilter, expFilters, industryFilters, workModelFilters, jobTypeFilters, sortOption]);

  return (
    <div className="w-full flex flex-col lg:flex-row gap-10">

      {/* SIDEBAR FILTERS */}
      <aside className="hidden lg:flex flex-col w-1/4 shrink-0 gap-8">
        <div>
          <div className="flex items-center gap-2 font-semibold text-lg mb-6 border-b border-border/50 pb-4">
            <Filter className="w-5 h-5 text-primary" />
            Filters
          </div>

          <div className="space-y-8">
            {/* Work Model */}
            <div>
              <h4 className="font-medium mb-4 text-sm uppercase tracking-wider text-foreground-muted">Work Model</h4>
              <div className="space-y-3">
                {workModelList.map(model => (
                  <label key={model} className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={workModelFilters.includes(model)}
                      onChange={() => toggleFilter(setWorkModelFilters, model)}
                      className="w-4 h-4 rounded border-border/80 bg-background checked:bg-primary checked:border-primary focus:ring-primary focus:ring-offset-background focus:ring-offset-1 accent-primary transition-colors cursor-pointer"
                    />
                    <span className="text-sm text-foreground-soft group-hover:text-foreground transition-colors">{model}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Job Type */}
            <div>
              <h4 className="font-medium mb-4 text-sm uppercase tracking-wider text-foreground-muted">Job Type</h4>
              <div className="space-y-3">
                {jobTypeList.map(type => (
                  <label key={type} className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={jobTypeFilters.includes(type)}
                      onChange={() => toggleFilter(setJobTypeFilters, type)}
                      className="w-4 h-4 rounded border-border/80 bg-background checked:bg-primary checked:border-primary focus:ring-primary focus:ring-offset-background focus:ring-offset-1 accent-primary transition-colors cursor-pointer"
                    />
                    <span className="text-sm text-foreground-soft group-hover:text-foreground transition-colors">{type}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Experience Level */}
            <div>
              <h4 className="font-medium mb-4 text-sm uppercase tracking-wider text-foreground-muted">Experience Level</h4>
              <div className="space-y-3">
                {expLevelsList.map(level => (
                  <label key={level} className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={expFilters.includes(level)}
                      onChange={() => toggleFilter(setExpFilters, level)}
                      className="w-4 h-4 rounded border-border/80 bg-background checked:bg-primary checked:border-primary focus:ring-primary focus:ring-offset-background focus:ring-offset-1 accent-primary transition-colors cursor-pointer"
                    />
                    <span className="text-sm text-foreground-soft group-hover:text-foreground transition-colors">{level}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Industry / Sector */}
            <div>
              <h4 className="font-medium mb-4 text-sm uppercase tracking-wider text-foreground-muted">Industry</h4>
              <div className="space-y-3 max-h-48 overflow-y-auto no-scrollbar">
                {industriesList.map(industry => (
                  <label key={industry} className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={industryFilters.includes(industry)}
                      onChange={() => toggleFilter(setIndustryFilters, industry)}
                      className="w-4 h-4 rounded border-border/80 bg-background checked:bg-primary checked:border-primary focus:ring-primary focus:ring-offset-background focus:ring-offset-1 accent-primary transition-colors cursor-pointer"
                    />
                    <span className="text-sm text-foreground-soft group-hover:text-foreground transition-colors">{industry}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Salary Range */}
            <div>
              <h4 className="font-medium mb-4 text-sm uppercase tracking-wider text-foreground-muted">Min Salary (£k)</h4>
              <input
                type="range"
                className="w-full accent-primary cursor-pointer"
                min="30" max="150" step="5"
                value={salaryFilter}
                onChange={(e) => setSalaryFilter(Number(e.target.value))}
              />
              <div className="flex justify-between text-xs text-primary font-medium mt-2">
                <span>£{salaryFilter}k+</span>
                <span className="text-foreground-muted">£150k+</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-6">
          <AIMatchWidget />
          <JobAlertsWidget />
        </div>
      </aside>

      {/* MAIN JOB FEED */}
      <main className="flex-1 flex flex-col gap-8">

        {/* Mobile Filter Toggle */}
        <div className="lg:hidden flex items-center justify-between mb-4">
          <Button variant="outline" className="border-border gap-2">
            <Filter className="w-4 h-4" /> Filters
          </Button>
          <span className="text-sm text-foreground-muted">{filteredJobs.length} Roles</span>
        </div>

        {/* Tabs & Sort */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-border/50 pb-4 gap-4">

          <div className="flex items-center gap-6 overflow-x-auto no-scrollbar">
            <button
              onClick={() => setActiveTab("all")}
              className={`flex items-center gap-2 pb-4 -mb-[17px] text-sm font-medium transition-colors border-b-2 whitespace-nowrap ${activeTab === 'all' ? 'border-primary text-foreground' : 'border-transparent text-foreground-muted hover:text-foreground'}`}
            >
              <Briefcase className="w-4 h-4" /> All Roles
            </button>
            <button
              onClick={() => setActiveTab("recommended")}
              className={`flex items-center gap-2 pb-4 -mb-[17px] text-sm font-medium transition-colors border-b-2 whitespace-nowrap ${activeTab === 'recommended' ? 'border-primary text-foreground' : 'border-transparent text-foreground-muted hover:text-foreground'}`}
            >
              <Sparkles className="w-4 h-4" /> Recommended
            </button>
            <button
              onClick={() => setActiveTab("saved")}
              className={`flex items-center gap-2 pb-4 -mb-[17px] text-sm font-medium transition-colors border-b-2 whitespace-nowrap ${activeTab === 'saved' ? 'border-primary text-foreground' : 'border-transparent text-foreground-muted hover:text-foreground'}`}
            >
              <Bookmark className="w-4 h-4" /> Saved Jobs
            </button>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="text-sm text-foreground-muted">Sort by:</span>
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="bg-transparent text-sm font-medium text-foreground outline-none border-none cursor-pointer focus:ring-0"
            >
              <option className="bg-card text-foreground" value="match">Highest AI Match</option>
              <option className="bg-card text-foreground" value="recent">Most Recent</option>
              <option className="bg-card text-foreground" value="salary">Highest Salary</option>
            </select>
          </div>
        </div>

        {/* Job Cards Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 min-h-[400px]">
          {isFiltering ? (
            // Skeleton Loaders
            Array.from({ length: 4 }).map((_, i) => (
              <Card key={i} className="p-6 md:p-7 bg-card border-border flex flex-col gap-6 animate-pulse">
                <div className="h-6 w-3/4 bg-surface-deep-mid rounded-md" />
                <div className="h-4 w-1/2 bg-surface-deep-mid rounded-md" />
                <div className="h-4 w-full bg-surface-deep-mid rounded-md mt-4" />
                <div className="mt-auto h-10 bg-surface-deep-mid rounded-md" />
              </Card>
            ))
          ) : filteredJobs.length === 0 ? (
            <div className="col-span-full flex flex-col items-center justify-center text-center py-20 opacity-50">
              <Filter className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-medium mb-2">No jobs found</h3>
              <p>Try adjusting your filters.</p>
            </div>
          ) : (
            filteredJobs.map((job) => (
              <Card
                key={job.id}
                onClick={() => setSelectedJob(job)}
                className="p-6 md:p-7 bg-card border-border flex flex-col gap-6 hover:border-primary/50 transition-all duration-300 cursor-pointer group shadow-sm hover:shadow-lg hover:-translate-y-1 relative overflow-hidden"
              >
                {/* Highlight best matches */}
                {job.match > 85 && (
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 blur-[40px] pointer-events-none group-hover:bg-primary/20 transition-colors" />
                )}

                <div className="flex justify-between items-start gap-4 z-10">
                  <div>
                    <h3 className="text-lg font-semibold mb-1.5 group-hover:text-primary transition-colors leading-snug">{job.title}</h3>
                    <p className="text-foreground-soft text-sm">{job.company}</p>
                  </div>
                  <span className="shrink-0 px-3 py-1 bg-background border border-border rounded-full text-[11px] font-medium text-foreground-muted uppercase tracking-wider shadow-sm">
                    {job.type}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-foreground-muted z-10">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-primary/70" />
                    {job.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <PoundSterling className="w-4 h-4 text-primary/70" />
                    {job.salary}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-2 z-10">
                  <span className="px-2.5 py-1 bg-background/50 border border-border/50 rounded-md text-xs text-foreground-soft">
                    {job.industry}
                  </span>
                  <span className="px-2.5 py-1 bg-background/50 border border-border/50 rounded-md text-xs text-foreground-soft">
                    {job.workModel}
                  </span>
                  {job.tags.slice(0, 2).map((tag, idx) => (
                    <span key={idx} className="px-2.5 py-1 bg-background/50 border border-border/50 rounded-md text-xs text-foreground-soft">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-5 border-t border-border/50 flex items-center justify-between z-10">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider flex items-center gap-1.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    AI Match: {job.match}%
                  </span>
                  <div className="flex items-center gap-1.5 text-primary font-medium text-sm group-hover:text-primary/80 transition-colors">
                    View Details <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Card>
            ))
          )}
        </div>
      </main>

      {/* JOB DETAILS MODAL */}
      <Dialog open={!!selectedJob} onOpenChange={(open) => !open && setSelectedJob(null)}>
        <DialogContent className="w-full sm:max-w-xl md:max-w-2xl bg-card border border-border p-0 overflow-hidden max-h-[90vh] flex flex-col">
          {selectedJob && (
            <div className="flex flex-col relative overflow-y-auto no-scrollbar">
              {/* Drawer Header Image/Gradient */}
              <div className="h-32 shrink-0 bg-gradient-to-r from-surface-deep-start to-surface-deep-end relative">
                <div className="absolute -bottom-8 left-8 w-16 h-16 bg-background rounded-xl border border-border flex items-center justify-center shadow-lg">
                  <Building className="w-8 h-8 text-primary" />
                </div>
              </div>

              <div className="p-8 pt-12">
                <DialogHeader className="text-left mb-6 p-0">
                  <DialogTitle className="text-2xl font-bold">{selectedJob.title}</DialogTitle>
                  <DialogDescription className="text-base flex flex-col gap-2 mt-2">
                    <span className="text-foreground">{selectedJob.company}</span>
                    <span className="flex items-center gap-1.5 text-foreground-muted">
                      <MapPin className="w-4 h-4" /> {selectedJob.location} • {selectedJob.workModel}
                    </span>
                  </DialogDescription>
                </DialogHeader>

                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="bg-primary/10 border border-primary/20 rounded-lg p-3 px-4 flex flex-col">
                    <span className="text-xs text-foreground-muted mb-1 uppercase tracking-wider font-medium">Salary</span>
                    <span className="font-semibold text-primary">{selectedJob.salary}</span>
                  </div>
                  <div className="bg-surface-deep-mid border border-border rounded-lg p-3 px-4 flex flex-col">
                    <span className="text-xs text-foreground-muted mb-1 uppercase tracking-wider font-medium">Experience</span>
                    <span className="font-semibold">{selectedJob.exp}</span>
                  </div>
                  <div className="bg-surface-deep-mid border border-border rounded-lg p-3 px-4 flex flex-col">
                    <span className="text-xs text-foreground-muted mb-1 uppercase tracking-wider font-medium">Job Type</span>
                    <span className="font-semibold">{selectedJob.type}</span>
                  </div>
                </div>

                <div className="space-y-6">
                  <section>
                    <h3 className="text-lg font-semibold mb-3">About the Role</h3>
                    <p className="text-foreground-soft leading-relaxed">
                      {selectedJob.description}
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold mb-3">Core Focus</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-background border border-border rounded-md text-sm font-medium">
                        {selectedJob.industry}
                      </span>
                      {selectedJob.tags.map((tag, idx) => (
                        <span key={idx} className="px-3 py-1 bg-background border border-border rounded-md text-sm font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </section>

                  <section className="bg-primary/5 border border-primary/20 rounded-xl p-5 mt-8 flex gap-4">
                    <Sparkles className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-primary mb-1">AI Match Analysis ({selectedJob.match}%)</h4>
                      <p className="text-sm text-foreground-soft mb-3">Based on your uploaded CV, our engine has determined you are a highly suitable candidate for this role.</p>
                      <ul className="text-sm space-y-2">
                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Matches your desired salary expectations.</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Work model aligns with your preference for {selectedJob.workModel}.</li>
                      </ul>
                    </div>
                  </section>
                </div>
              </div>

              <DialogFooter className="p-6 border-t border-border bg-background/50 backdrop-blur-md sticky bottom-0 mt-auto">
                <Button className="w-full h-12 text-base font-medium">
                  Apply for this role
                </Button>
              </DialogFooter>
            </div>
          )}
        </DialogContent>
      </Dialog>

    </div>
  );
}
