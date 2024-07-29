export interface ReplicateResponse {
  completed_at: string;
  created_at: string;
  data_removed: boolean;
  error: string | null;
  id: string;
  input: {
    path: string;
    seed: number;
    steps: number;
    prompt: string;
    n_prompt: string;
    motion_module: string;
    guidance_scale: number;
    [key: string]: any; // 允许其他可能的输入参数
  };
  logs: string;
  metrics: {
    predict_time: number;
    total_time: number;
  };
  output: string;
  started_at: string;
  status: "starting" | "processing" | "succeeded" | "failed" | "canceled";
  urls: {
    get: string;
    cancel: string;
  };
  version: string;
}
