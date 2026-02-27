'use client'

import { ThumbsUp, ThumbsDown } from 'lucide-react'
import { Button } from '../ui/button'
import { useState } from 'react'
import { voteAction } from '@/lib/actions'

interface VotingProps {
    postId: number
    likes: number
    dislikes: number
}

export default function Voting({ postId, likes, dislikes }: VotingProps) {
    const [isLoading, setIsLoading] = useState(false)

    async function handleVote(type: 'like' | 'dislike') {
        if (isLoading) return
        setIsLoading(true)
        try {
            await voteAction(postId, type)
        } catch (err) {
            console.error('Vote failed:', err)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="flex items-center gap-2">
            <Button
                variant="outline"
                size="sm"
                onClick={() => handleVote('like')}
                disabled={isLoading}
            >
                <ThumbsUp className="mr-1 h-4 w-4" />
                {likes}
            </Button>
            <Button
                variant="outline"
                size="sm"
                onClick={() => handleVote('dislike')}
                disabled={isLoading}
            >
                <ThumbsDown className="mr-1 h-4 w-4" />
                {dislikes}
            </Button>
        </div>
    )
}