//calls the components ++ base configuration
import { CreatePostForm } from "@/components/CreatePostForm";
import { Hero } from "@/components/Hero";
import { PostsSection } from "@/components/PostsSection";
import ProjectsSection from "@/components/projects";
import SocialLinks from "@/components/SocialLinks";

export default async function Home() {
    return (
        <div className="mx-auto w-full max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
            <main className="space-y-10 sm:space-y-12">
                <Hero
                    name="Sky Hannah Parado"
                    role="Student at De La Salle University"
                    bio="BS Computer Science major in Network and Information Security"
                />

                <SocialLinks />
                <ProjectsSection />
                <CreatePostForm />
                <PostsSection />
            </main>

            {/* Footer */}
            <footer className="mt-16 border-t border-border pt-8 text-center text-sm text-muted">
                <p>© 2026 Sky Hannah Parado · Built with Next.js</p>
            </footer>
        </div>
    );
}