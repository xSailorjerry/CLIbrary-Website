import { Library, Download, Terminal, Zap, Shield, Boxes } from "lucide-react"

const features = [
  {
    icon: Library,
    title: "Centralized Library",
    description:
      "View and manage all your CLI applications in one beautiful interface with smart search and filtering.",
  },
  {
    icon: Download,
    title: "Quick Install",
    description:
      "Install applications directly from Git repositories with a single click. Supports GitHub, GitLab, and more.",
  },
  {
    icon: Terminal,
    title: "Integrated Terminal",
    description: "Built-in terminal to run and test your CLI applications without leaving the app.",
  },
  {
    icon: Zap,
    title: "Live Monitoring",
    description: "Monitor running processes, track resource usage, and manage your CLI applications in real-time.",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "All operations run locally on your machine. No data collection, no cloud dependencies.",
  },
  {
    icon: Boxes,
    title: "Project Management",
    description: "Organize applications by projects, create custom workspaces, and switch contexts effortlessly.",
  },
]

export function Features() {
  return (
    <section id="features" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Everything you need to manage CLI apps</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Built by developers, for developers. Every feature designed to streamline your command-line workflow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-border bg-muted/50 backdrop-blur-sm hover:bg-muted/70 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-white/5 hover:-translate-y-1 relative before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-br before:from-white/5 before:to-transparent before:pointer-events-none"
            >
              <feature.icon className="h-10 w-10 mb-4 text-foreground relative z-10" />
              <h3 className="text-xl font-semibold mb-2 relative z-10">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed relative z-10">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
