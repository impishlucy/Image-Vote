import ImageCard from '@/components/custom/image-card'
import {getAllPosts} from "@/lib/data";

export default async function Gallery() {
    let posts = await getAllPosts();

    return (
        <main className="flex flex-wrap gap-6 p-6 justify-center items-center content-center">
            {posts.map((post) => (
                <ImageCard
                    key={post.id}
                    id={post.id}
                    likes={post.likes}
                    dislikes={post.dislikes}
                />
            ))}
        </main>
    )
}