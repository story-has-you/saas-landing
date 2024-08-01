import { fail, ok } from "@/lib/request";

export async function POST(request: Request) {
  const prediction = await request.json();
  if (!prediction) {
    return fail("fail");
  }
  console.log("prediction", prediction);
  const output = prediction.output;
  return ok("success");
}
