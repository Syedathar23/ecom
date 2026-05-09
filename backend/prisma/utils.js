import { PrismaClient } from '../prisma/generated/client/index.js';
import { PrismaPg } from '@prisma/adapter-pg';  // For PostgreSQL
import dotenv from 'dotenv';
dotenv.config();

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  throw new Error('DATABASE_URL is required');
}

// Key Fix: Pass as { connectionString: ... } – not raw string!
const adapter = new PrismaPg({ connectionString });

export const prisma = new PrismaClient({ adapter });

