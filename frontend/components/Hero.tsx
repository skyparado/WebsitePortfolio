// Hero component — the big introduction banner at the top of the homepage
type HeroProps = {
    name: string;
    role: string;
    bio: string;
};

export function Hero({ name, role, bio }: HeroProps) {
    return (
        <section className="relative overflow-hidden rounded-3xl border border-border bg-card glass-card p-8 shadow-md sm:p-10">
            {/* Subtle gradient overlay for depth */}
            <div
                className="pointer-events-none absolute inset-0 opacity-40"
                aria-hidden="true"
                style={{
                    background:
                        "linear-gradient(135deg, rgba(130,130,99,0.12) 0%, rgba(221,186,174,0.08) 50%, transparent 100%)",
                }}
            />
            <div className="relative space-y-5">
                <div className="inline-flex items-center rounded-full border border-border bg-muted-surface px-3 py-1 text-xs font-medium uppercase tracking-[0.15em] text-muted">
                    {role}
                </div>
                <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                    {name}
                </h1>
                <p className="max-w-2xl text-base leading-7 text-muted sm:text-lg">{bio}</p>
            </div>
        </section>
    );
}