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
    await this.replicate.predictions.create({
      model: this.replicateConfig.model,
      version: this.replicateConfig.version,
      input: this.replicateConfig.input,
      stream: this.replicateConfig.stream,
      webhook: this.replicateConfig.webhook,
      webhook_events_filter: this.replicateConfig.webhook_events_filter,
    });
  };

  public run = async () => {
    const url = `${this.replicateConfig.model}:${this.replicateConfig.version}` as `${string}/${string}:${string}`;
    await this.replicate.run(url, this.replicateConfig);
  };
}

export const replicate = (replicateConfig: ReplicateConfig) => new ReplicateModel(replicateConfig);
