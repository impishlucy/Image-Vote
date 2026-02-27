'use client'

import Voting from './voting'
import {Card} from "@/components/ui/card";

interface ImageCardProps {
    id: number
    likes: number
    dislikes: number
}

export default function ImageCard({
                                      id,
                                      likes,
                                      dislikes
                                  }: ImageCardProps) {
    return (
        <Card className="rounded-lg border overflow-hidden w-72">
            <img
                src={`/images/${id}.webp`}
                alt={`Image ${id}`}
                className="w-full aspect-square object-cover"
            />
            <div className="p-4">
                <Voting
                    postId={id}
                    likes={likes}
                    dislikes={dislikes}
                />
            </div>
        </Card>
    )
}