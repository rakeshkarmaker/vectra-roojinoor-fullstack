import { Card } from "@/components/ui/card";

const roles = [
  {
    title: "Optical Systems Engineer",
    location: "Bristol, UK",
    type: "Permanent",
    match: 85,
  },
  {
    title: "Photonics Design Engineer",
    location: "Glasgow, UK",
    type: "Permanent",
    match: 65,
  },
  {
    title: "Aerospace Systems Engineer",
    location: "Derby, UK",
    type: "Permanent",
    match: 86,
  },
];

export function RecommendedRoles() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {roles.map((r, i) => (
        <Card key={i} className="p-5 flex flex-col gap-6 bg-card border-border hover:border-primary/40 transition-colors cursor-pointer group">
          <div>
            <h4 className="text-base font-medium mb-1 group-hover:text-primary transition-colors">{r.title}</h4>
            <p className="text-sm text-foreground-muted">{r.location}</p>
          </div>
          <div className="flex items-center justify-between text-sm mt-auto">
            <span className="text-foreground-soft">{r.type}</span>
            <span className="text-primary font-medium">{r.match}% Match</span>
          </div>
        </Card>
      ))}
    </div>
  );
}
