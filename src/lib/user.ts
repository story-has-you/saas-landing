import { auth } from "@/config/auth";
import { userPrisma } from "@/lib/prisma/user-prisma";
import { User } from "@prisma/client";

export const getServerUser = async (): Promise<User | null> => {
  const userId = await getServerUserId();
  return userId ? await userPrisma.selectById(userId) : null;
};

export const getServerUserId = async (): Promise<string | null> => {
  const session = await auth();
  if (!session || !session.user) {
    return null;
  }
  return session.user.id;
};