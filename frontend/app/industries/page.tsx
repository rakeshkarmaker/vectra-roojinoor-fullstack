import { IndustryCard } from "../../components/features/industries/industry-card";
import Image from "next/image";
// Icons are resolved client-side by name to avoid passing non-plain objects

export default function IndustriesPage() {
  const items = [
    {
      title: "Optics & Photonics",
      desc: "Experts in optical design, laser systems, imaging and photonics R&D.",
      iconName: "Camera",
      image: "/industries/optics-photonics.jpg",
    },
    {
      title: "Space & Aerospace",
      desc: "Supporting mission-critical engineering and next-gen space technologies.",
      iconName: "Rocket",
      image: "/industries/space-aerospace.jpg",
    },
    {
      title: "Advanced Engineering",
      desc: "From product design to manufacturing and systems engineering.",
      iconName: "Settings",
      image: "/industries/advanced-engineering.jpg",
    },
    {
      title: "Defence & Emerging Tech",
      desc: "Specialist talent for defence, AI, robotics and emerging technologies.",
      iconName: "ShieldCheck",
      image: "/industries/defence-emerging-tech.jpg",
    },
    {
      title: "Talent Pipelines",
      desc: "Building long-term talent pipelines for critical engineering skills.",
      iconName: "Users",
      image: "/industries/talent-pipelines.jpg",
    },
    {
      title: "Consultancy & Projects",
      desc: "Flexible, expert solutions delivered by industry experienced experts.",
      iconName: "Briefcase",
      image: "/industries/consultancy-projects.jpg",
    },
  ];

  return (
    <main>
      {/* Hero */}
      <section
        className="relative isolate overflow-hidden rounded-b-3xl pt-28"
        style={{ background: "#061015" }}
      >
        <Image
          src="/RaderBG.png"
          alt="Industries"
          fill
          className="z-0 object-cover"
          priority
        />
        <div className="absolute inset-0 z-10 bg-black/70" />
        <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-6">
                Industries
                <br />
                We Specialise In
              </h1>
              <p className="text-3xl text-on-dark-muted max-w-xl font-light">
                We understand the challenges of advanced engineering unique and
                deliver talent that drives innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cards grid */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mt-16 mb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <IndustryCard
              key={it.title}
              title={it.title}
              description={it.desc}
              iconName={it.iconName}
              image={it.image}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
