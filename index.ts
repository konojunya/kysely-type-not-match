import { db } from "./db";

async function main() {
  const res = await db
    .selectFrom("users")
    .select((eb) => eb.fn.count<number>("id").as("count"))
    .limit(10)
    .executeTakeFirstOrThrow();

  console.log(JSON.stringify(res, null, 2));

  await db.destroy();
}

main();
