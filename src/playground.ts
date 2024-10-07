import { db } from "./server/db";
// https://sa-lived-observation-pierre.trycloudflare.com/api/clerk/webook
await db.user.create({
  data: {
    emailAddress: "test@gmail.com",
    firstName: "art",
    lastName: "smp",
  },
});
