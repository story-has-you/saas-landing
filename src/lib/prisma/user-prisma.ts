import { prisma } from "@/config/prisma";
import { User } from "@prisma/client";

class UserPrisma {
  public selectById = async (userId: string): Promise<User | null> => {
    return await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
  };
}

export const userPrisma = new UserPrisma();