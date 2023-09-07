import { db } from "./db";

async function main() {
  const res = await db
    .selectFrom("users")
    .select((eb) => eb.fn.count<number>("id").as("count"))
    .limit(10)
    .executeTakeFirst();

  if (res == null) throw new Error("No result found");

  console.log(JSON.stringify(res, null, 2));

  await db.destroy();
}

main();
