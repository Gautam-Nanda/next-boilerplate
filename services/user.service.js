import db from '@/lib/prisma'

export async function fetchUser(email) {
    return (db).user.findUnique({
        where: {
            email,
        },
    });
}

export async function createUser(data) {
    return db.user.create({
        data,
    });
}