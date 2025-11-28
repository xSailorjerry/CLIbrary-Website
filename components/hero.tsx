import { Button } from "@/components/ui/button"
import { Terminal, Download, Github } from "lucide-react"
import Image from "next/image"
import { Spotlight } from "@/components/ui/spotlight"
import { DotPattern } from "@/components/ui/dot-pattern"

export function Hero() {
  return (
    <section className="relative pt-32 pb-16 px-4 overflow-hidden">
      <DotPattern className="opacity-50" />
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />

      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-8">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-white/10 blur-3xl rounded-full scale-150" />
              <Image
                src="/images/clibrary-logo.png"
                alt="CLIbrary Logo"
                width={180}
                height={180}
                className="relative z-10"
                priority
              />
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted text-foreground text-sm font-mono border border-border">
            <Terminal className="h-3 w-3" />
            CLI Application Manager
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance">
            Manage your CLI apps
            <br />
            from one place
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
            Discover, install, and manage command-line applications directly from Git repositories. Your complete
            desktop solution for CLI application management.
          </p>

          <div className="pt-2">
            <p className="text-sm text-muted-foreground">Free to start • Full version $29.99 one-time</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" className="gap-2 h-12 px-8 text-base">
              <Download className="h-5 w-5" />
              Coming Soon for Windows
            </Button>
            <Button size="lg" variant="outline" className="gap-2 h-12 px-8 text-base bg-transparent">
              <Github className="h-5 w-5" />
              View on GitHub
            </Button>
          </div>

          <div className="pt-2 text-sm text-muted-foreground">
            <span>Windows release coming soon • macOS & Linux support planned</span>
          </div>
        </div>
      </div>
    </section>
  )
}
