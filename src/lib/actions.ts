'use server'

import { prisma } from './db'
import { revalidatePath } from 'next/cache'

export async function voteAction(postId: number, type: 'like' | 'dislike') {
    if (type !== 'like' && type !== 'dislike') {
        throw new Error('Invalid vote type')
    }

    await prisma.post.update({
        where: { id: postId },
        data: {
            [type === 'like' ? 'likes' : 'dislikes']: { increment: 1 },
        },
    })

    revalidatePath('/')
}