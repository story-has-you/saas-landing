import { WebhookEventType } from "replicate";

export interface ReplicateConfig {
  model: string;
  version: string;
  input: any;
  stream: boolean;
  webhook: string;
  webhook_events_filter: WebhookEventType[];
}
