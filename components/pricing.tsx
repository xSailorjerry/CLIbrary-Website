import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Pricing() {
  return (
    <section id="pricing" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Simple, transparent pricing</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Start free and upgrade when you need more. One-time payment, yours forever.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Version */}
          <div className="p-8 rounded-lg border border-border bg-muted/50 backdrop-blur-sm shadow-lg hover:shadow-xl hover:shadow-white/5 hover:-translate-y-1 transition-all duration-300 relative before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-br before:from-white/5 before:to-transparent before:pointer-events-none">
            <div className="space-y-6 relative z-10">
              <div>
                <h3 className="text-2xl font-bold mb-2">Free</h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl font-bold">$0</span>
                  <span className="text-muted-foreground">forever</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Get started with essential CLI application management features.
                </p>
              </div>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-foreground mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Up to 5 CLI applications</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-foreground mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Install apps from Git repositories</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-foreground mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Basic library management</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-foreground mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Built-in terminal</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-foreground mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Search and filter</span>
                </li>
              </ul>

              <Button variant="outline" className="w-full h-12 bg-transparent" disabled>
                Coming Soon
              </Button>
            </div>
          </div>

          {/* Full Version */}
          <div className="p-8 rounded-lg border-2 border-foreground bg-muted/50 backdrop-blur-sm relative shadow-xl hover:shadow-2xl hover:shadow-white/10 hover:-translate-y-1 transition-all duration-300 before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-br before:from-white/10 before:to-transparent before:pointer-events-none">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-foreground text-background text-sm font-semibold rounded-full">
              Most Popular
            </div>

            <div className="space-y-6 relative z-10">
              <div>
                <h3 className="text-2xl font-bold mb-2">Full Version</h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl font-bold">$29.99</span>
                  <span className="text-muted-foreground">one-time</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Unlock all features with a single purchase. No subscriptions, ever.
                </p>
              </div>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-foreground mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Everything in Free</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-foreground mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Unlimited CLI applications</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-foreground mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Advanced project management</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-foreground mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Live monitoring & resource tracking</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-foreground mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Custom workspaces</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-foreground mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Priority support</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-foreground mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Lifetime updates</span>
                </li>
              </ul>

              <Button className="w-full h-12" disabled>
                Coming Soon
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>Powered by Polar • Secure checkout • 14-day money-back guarantee</p>
        </div>
      </div>
    </section>
  )
}
