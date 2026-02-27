import { prisma } from './db'

export async function getPost(id: number) {
    return prisma.post.findUniqueOrThrow({
        where: { id },
    })
}

export async function getAllPosts() {
    return prisma.post.findMany({
        orderBy: { id: 'desc' },
    })
}