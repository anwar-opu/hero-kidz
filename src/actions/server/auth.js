
"use server";

import { collections, dbConnect } from "@/lib/dbConnect";
import bcrypt from "bcryptjs";

export const postUser = async (payload) => {
  const { email, password, name } = payload;

  // Check payload
  if (!email || !password || !name) {
    return {
      success: false,
      message: "Name, email and password are required",
    };
  }

  // Check if user already exists
  const isExist = await dbConnect(collections.USERS).findOne({ email });

  if (isExist) {
    return {
      success: false,
      message: "User already exists",
    };
  }

  // Create user
  const newUser = {
    providerId: "credentials",
    name,
    email,
    password: await bcrypt.hash(password, 14),
    role: "user",
  };

  // Insert user
  const result = await dbConnect(collections.USERS).insertOne(newUser);

  if (result.acknowledged) {
    return {
      success: true,
      message: "User created successfully",
      insertedId: result.insertedId.toString(),
    };
  }

  return {
    success: false,
    message: "Failed to create user",
  };
};

