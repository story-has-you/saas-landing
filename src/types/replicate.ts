export interface ReplicateConfig {
  model: string;
  version: string;
  input: any;
  webhook: string;
  webhook_events_filter: Array<string>;
}
