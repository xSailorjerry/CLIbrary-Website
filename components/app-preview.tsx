import Image from "next/image"

export function AppPreview() {
  return (
    <section id="preview" className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Beautiful interface,
            <br />
            powerful features
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            A modern desktop experience designed for productivity. Dark mode by default, because that's how developers
            like it.
          </p>
        </div>

        <div className="relative rounded-xl overflow-hidden border border-border shadow-2xl hover:shadow-[0_20px_80px_-15px_rgba(255,255,255,0.1)] transition-shadow duration-500 bg-card">
          <Image
            src="/images/image.png"
            alt="CLIbrary Dashboard"
            width={1600}
            height={900}
            className="w-full h-auto"
            priority
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold">0ms</div>
            <div className="text-sm text-muted-foreground">Install time from local repos</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold">100%</div>
            <div className="text-sm text-muted-foreground">Open source & transparent</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold">∞</div>
            <div className="text-sm text-muted-foreground">CLI applications you can manage</div>
          </div>
        </div>
      </div>
    </section>
  )
}
