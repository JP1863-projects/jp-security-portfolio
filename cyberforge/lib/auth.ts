import { auth } from '@clerk/nextjs/server';
import type { PrismaClient } from '@prisma/client';
export async function requireLearner(db: PrismaClient) {
  const { userId } = await auth();
  if (!userId) return null;
  return db.learner.upsert({ where: { clerkId: userId }, create: { clerkId: userId }, update: {} });
}
export async function touchLearner(db: PrismaClient, id: string) {
  const learner = await db.learner.findUniqueOrThrow({ where: { id }, select: { lastActive: true, streak: true } });
  const today = new Date(); const start = Date.UTC(today.getUTCFullYear(),today.getUTCMonth(),today.getUTCDate());
  const last = learner.lastActive ? Date.UTC(learner.lastActive.getUTCFullYear(),learner.lastActive.getUTCMonth(),learner.lastActive.getUTCDate()) : null;
  if (last === start) return;
  await db.learner.update({ where: { id }, data: { lastActive: today, streak: last === start - 86400000 ? { increment: 1 } : 1 } });
}
