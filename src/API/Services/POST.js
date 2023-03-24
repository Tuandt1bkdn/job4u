import http from "../request";

export function AddSavedJob(body) {
  return http.post("/savedjob", body);
}
