"use server";

import { replicate } from "@/lib/replicate";
import { getServerUserId } from "@/lib/user";
import { nanoid } from "@/lib/utils";

const options = {
  input: {
    path: "toonyou_beta3.safetensors",
    seed: 255224557,
    steps: 25,
    prompt:
      "masterpiece, best quality, 1girl, solo, cherry blossoms, hanami, pink flower, white flower, spring season, wisteria, petals, flower, plum blossoms, outdoors, falling petals, white hair, black eyes",
    n_prompt: "badhandv4, easynegative, ng_deepnegative_v1_75t, verybadimagenegative_v1.3, bad-artist, bad_prompt_version2-neg, teeth",
    motion_module: "mm_sd_v14",
    guidance_scale: 7.5,
  },
};

export const action = async (prevState: any, formData: FormData) => {
  const prompt = formData.get("prompt") as string;
  if (!prompt || prompt.length < 1) {
    return { message: "Form Action Error" };
  }

  const userId = await getServerUserId();

  const id = nanoid();

  try {
    options.input.prompt = prompt;
    const result = await replicate(options).run() as any;
    console.log(result);
    return { output: result, type: "video" };
  } catch (error) {
    console.error(error);
  }
  return { message: "Form Action Error" };
};
