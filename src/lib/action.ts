"use server";

import { siteConfig } from "@/config/site";
import { replicate } from "@/lib/replicate";
import { ReplicateConfig } from "@/types/replicate";

const replicateConfig: ReplicateConfig = {
  model: "lucataco/animate-diff",
  version: "beecf59c4aee8d81bf04f0381033dfa10dc16e845b4ae00d281e2fa377e48a9f",
  input: {
    path: "toonyou_beta3.safetensors",
    seed: 255224557,
    steps: 25,
    prompt: "",
    n_prompt: "badhandv4, easynegative, ng_deepnegative_v1_75t, verybadimagenegative_v1.3, bad-artist, bad_prompt_version2-neg, teeth",
    motion_module: "mm_sd_v14",
    guidance_scale: 7.5,
  },
  webhook: `https://${siteConfig.domain}/api/replicate-webhook`,
  webhook_events_filter: ["completed"],
};

export const action = async (prevState: any, formData: FormData) => {
  const prompt = formData.get("prompt") as string;
  if (!prompt || prompt.length < 1) {
    return { message: "Form Action Error", success: false };
  }

  try {
    replicateConfig.input.prompt = prompt;
    await replicate(replicateConfig).create();
    return { success: true, type: "image" };
  } catch (error) {
    console.error(error);
  }
  return { message: "Form Action Error", success: false };
};
