import Replicate from "replicate";
import "server-only";

class ReplicateModel {
  private apiKey: string;
  private url: `${string}/${string}` | `${string}/${string}:${string}`;
  private replicate: Replicate;
  private options: any;

  constructor(options: any) {
    this.apiKey = process.env.REPLICATE_API_TOKEN!;
    this.url = process.env.REPLICATE_MODEL_URL! as `${string}/${string}` | `${string}/${string}:${string}`;
    this.replicate = new Replicate({ auth: this.apiKey });
    this.options = options;
  }

  /**
   * Runs the image generation process and returns the result.
   *
   * @returns A promise that resolves to an object containing:
   * - completed_at: ISO timestamp of when the process completed
   * - created_at: ISO timestamp of when the process was created
   * - id: Unique identifier for this prediction
   * - input: Object containing the input parameters (e.g., path, seed, steps, prompt)
   * - output: URL of the generated video
   * - status: Current status of the prediction (e.g., "succeeded")
   * - metrics: Object containing performance metrics (e.g., predict_time, total_time)
   *
   * @example
   * // Example response structure:
   * {
   *   completed_at: "2024-07-29T07:55:59.156087Z",
   *   created_at: "2024-07-29T07:55:05.514000Z",
   *   id: "vwqy59v1n9rj40cgzny975qanc",
   *   input: {
   *     path: "toonyou_beta3.safetensors",
   *     seed: 255224557,
   *     steps: 25,
   *     prompt: "masterpiece, best quality, 1girl, solo, cherry blossoms...",
   *     // ... other input parameters
   *   },
   *   output: "https://replicate.delivery/yhqm/zDFprvnBvvbMFpVHVSZR0dEX5DFDb2mkjnzPPS4RqlrD9TzE/out.mp4",
   *   status: "succeeded",
   *   metrics: {
   *     predict_time: 53.630922444,
   *     total_time: 53.642087
   *   }
   *   // ... other fields
   * }
   */
  public run = async () => {
    return await this.replicate.run(this.url, this.options);
  };
}

export const replicate = (options: any) => new ReplicateModel(options);
