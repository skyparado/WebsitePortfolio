import CreatePostForm from "./CreatePostForm";
import PostCard from "./PostCard";

const DUMMY_POSTS = [
  { id: 1, title: "Getting started with Next.js", content: "Next.js is a great framework." },
  { id: 2, title: "Styling with Tailwind CSS", content: "Tailwind CSS makes styling fun." },
];

export default function PostsSection() {
  return (
    <div className="w-full max-w-4xl flex flex-col items-center">
      <CreatePostForm />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        {DUMMY_POSTS.map(post => (
          <PostCard key={post.id} title={post.title} content={post.content} />
        ))}
      </div>
    </div>
  );
}
