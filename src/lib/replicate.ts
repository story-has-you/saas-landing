import { ReplicateConfig } from "@/types/replicate";
import Replicate from "replicate";
import "server-only";

class ReplicateModel {
  private apiKey: string;
  private replicate: Replicate;
  private replicateConfig: ReplicateConfig;

  constructor(replicateConfig: ReplicateConfig) {
    this.apiKey = process.env.REPLICATE_API_TOKEN!;
    this.replicate = new Replicate({ auth: this.apiKey });
    this.replicateConfig = replicateConfig;
  }

  public create = async () => {
    await this.replicate.predictions.create({ ...this.replicateConfig });
  };
}

export const replicate = (replicateConfig: ReplicateConfig) => new ReplicateModel(replicateConfig);
