// Projects component — grid of clickable project cards linking to GitHub repos
export default function ProjectsSection() {
    return (
        <section className="space-y-5">
            <div className="space-y-1">
                <h2 className="text-2xl font-semibold tracking-tight text-foreground">My Projects</h2>
                <p className="text-sm text-muted">Click on any card to view the repository on GitHub.</p>
            </div>

            {/* The Grid Container to hold multiple cards side-by-side */}
            <div className="grid gap-5 sm:grid-cols-2">

                <a href="https://github.com/PeelyMart/QuickServePos" target="_blank" className="group flex flex-col rounded-2xl border border-border bg-card glass-card p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-accent sm:p-6">
                    <div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-muted-surface text-accent">
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a1.897 1.897 0 0 1-.61-1.276c-.098-.828.35-1.634 1.098-1.972L11.3 3.06a1.5 1.5 0 0 1 1.4 0l7.062 3.041a1.897 1.897 0 0 1 .488 3.248m-14.5 0h14.5" /></svg>
                    </div>
                    <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors">Restaurant Service POS</h3>
                    <p className="text-muted mt-2 text-sm leading-relaxed flex-grow">A Restaurant Service POS that tracks table availability, reservation and generates reports on income, trends and employee hours</p>
                    <span className="mt-4 text-xs font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity">View on GitHub →</span>
                </a>

                <a href="https://github.com/skyparado/CITO-Citation-Tool" target="_blank" className="group flex flex-col rounded-2xl border border-border bg-card glass-card p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-accent sm:p-6">
                    <div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-muted-surface text-accent">
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" /></svg>
                    </div>
                    <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors">CITO: Academic Citation Tool</h3>
                    <p className="text-muted mt-2 text-sm leading-relaxed flex-grow">An academic citation tool that connects to google docs and generates academic research from a DLSU repo and creates citations in APA according to selected key words</p>
                    <span className="mt-4 text-xs font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity">View on GitHub →</span>
                </a>

                <a href="https://github.com/skyparado/WebsitePortfolio" target="_blank" className="group flex flex-col rounded-2xl border border-border bg-card glass-card p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-accent sm:p-6">
                    <div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-muted-surface text-accent">
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A8.966 8.966 0 0 1 3 12c0-1.528.38-2.968 1.05-4.228" /></svg>
                    </div>
                    <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors">Website Portfolio</h3>
                    <p className="text-muted mt-2 text-sm leading-relaxed flex-grow">The code behind this website</p>
                    <span className="mt-4 text-xs font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity">View on GitHub →</span>
                </a>

                <a href="https://github.com/skyparado/Voice-Over-IP-Simulator" target="_blank" className="group flex flex-col rounded-2xl border border-border bg-card glass-card p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-accent sm:p-6">
                    <div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-muted-surface text-accent">
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25z" /></svg>
                    </div>
                    <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors">Voice Over IP Simulator</h3>
                    <p className="text-muted mt-2 text-sm leading-relaxed flex-grow">A simulator that simulates the process of voice over IP in command line</p>
                    <span className="mt-4 text-xs font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity">View on GitHub →</span>
                </a>

                <a href="https://github.com/skyparado/Pokemon-Battle-Simulation" target="_blank" className="group flex flex-col rounded-2xl border border-border bg-card glass-card p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-accent sm:p-6">
                    <div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-muted-surface text-accent">
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.491 48.491 0 0 1-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 0 1-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 0 0-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 0 1-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 0 0 .657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 0 0 5.427-.63 48.05 48.05 0 0 0 .582-4.717.532.532 0 0 0-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 0 0 .658-.663 48.422 48.422 0 0 0-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 0 1-.61-.58v0z" /></svg>
                    </div>
                    <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors">Pokemon Battle Simulation</h3>
                    <p className="text-muted mt-2 text-sm leading-relaxed flex-grow">A simulation of a pokemon battle highlighting networking across different devices</p>
                    <span className="mt-4 text-xs font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity">View on GitHub →</span>
                </a>

            </div>
        </section>
    );
}
