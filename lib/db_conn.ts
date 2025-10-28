import mongoose from "mongoose";

const MONGODB_URI = process.env.DB_URI;

if (!MONGODB_URI) {
  throw new Error(
    "❌ Please define the DB_URI environment variable in .env.local"
  );
}

declare global {
  // eslint-disable-next-line no-var
  var mongooseCache:
    | {
        conn: typeof mongoose | null;
        promise: Promise<typeof mongoose> | null;
      }
    | undefined;
}

let cached = globalThis.mongooseCache;

if (!cached) {
  cached = globalThis.mongooseCache = { conn: null, promise: null };
}

export default async function connectDB() {
  console.log("RUNNING THE DB CONNEXION");

  if (cached?.conn) {
    console.log("✅ Using existing MongoDB connection");
    return cached.conn;
  }

  if (!cached?.promise) {
    cached!.promise = mongoose.connect(MONGODB_URI!, {
      bufferCommands: false,
      serverSelectionTimeoutMS: 30000, // wait 30s before failing
      dbName: "db_eduApp", // optional, ensures correct db
    });

    // attach listeners only once
    mongoose.connection.on("connected", () => {
      console.log("✅ MongoDB connected");
    });

    mongoose.connection.on("error", (err) => {
      console.error("❌ MongoDB connection error:", err);
    });
  }

  try {
    cached!.conn = await cached!.promise;
    return cached!.conn;
  } catch (err) {
    cached!.promise = null; // reset cache on failure
    throw err;
  }
}
