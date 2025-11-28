import { Button } from "@/components/ui/button"
import { Download, ArrowRight } from "lucide-react"
import Image from "next/image"
import { Spotlight } from "@/components/ui/spotlight"

export function CTA() {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="relative rounded-2xl border border-border bg-muted p-12 md:p-16 text-center space-y-8 overflow-hidden">
          <Spotlight className="-top-20 left-0 md:left-40" fill="white" />

          <div className="flex justify-center mb-4">
            <div className="relative">
              <div className="absolute inset-0 bg-white/10 blur-3xl rounded-full scale-150" />
              <Image
                src="/images/clibrary-logo.png"
                alt="CLIbrary Logo"
                width={120}
                height={120}
                className="relative z-10"
              />
            </div>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-balance">
            Ready to streamline your CLI workflow?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Be among the first to experience efficient CLI application management with CLIbrary.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="gap-2 h-12 px-8 text-base">
              <Download className="h-5 w-5" />
              Coming Soon
            </Button>
            <Button size="lg" variant="outline" className="gap-2 h-12 px-8 text-base bg-transparent">
              View Documentation
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
          <div className="pt-4 text-sm text-muted-foreground">
            Start free or unlock everything for $29.99 • Initial Windows release
          </div>
        </div>
      </div>
    </section>
  )
}
