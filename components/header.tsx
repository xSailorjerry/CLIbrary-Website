import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Terminal, Github } from "lucide-react"

export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src="/images/clibrary-logo.png" alt="CLIbrary" width={120} height={32} className="h-8 w-auto" />
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#preview" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Preview
          </a>
          <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Pricing
          </a>
          <a
            href="https://github.com"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Docs
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Github className="h-5 w-5" />
          </Button>
          <Button className="gap-2">
            <Terminal className="h-4 w-4" />
            Coming Soon
          </Button>
        </div>
      </div>
    </header>
  )
}
