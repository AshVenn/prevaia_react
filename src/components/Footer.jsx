export default function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold mb-4">PREVAIA</h3>
            <p className="text-foreground/60 text-sm">AI-powered third-party risk management platform.</p>
          </div>
          {[
            { title: "Product", links: ["Features", "Pricing", "Security"] },
            { title: "Company", links: ["About", "Blog", "Careers"] },
            { title: "Legal", links: ["Privacy", "Terms", "Compliance"] },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-semibold mb-4 text-foreground">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-foreground/60 hover:text-foreground transition text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-border pt-8 flex justify-between items-center text-sm text-foreground/60">
          <p>© 2025 PREVAIA. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-foreground transition">
              Twitter
            </a>
            <a href="#" className="hover:text-foreground transition">
              LinkedIn
            </a>
            <a href="#" className="hover:text-foreground transition">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
