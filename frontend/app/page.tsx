import Hero from "../components/Hero";
import PostsSection from "../components/PostsSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8">
      <Hero />
      <PostsSection />
    </div>
  );
}
