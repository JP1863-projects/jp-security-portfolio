import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

// A Worker may not reuse a TCP socket from a previous request. Construct a
// request-scoped client and disconnect in the caller's finally block.
export function getDb() {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) throw new Error('DATABASE_URL is not configured');
  const adapter = new PrismaPg({ connectionString, max: 1 });
  return new PrismaClient({ adapter });
}
