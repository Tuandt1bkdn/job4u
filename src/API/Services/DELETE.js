import http from "../request";

export function DeleteSavedJob(id) {
  return http.delete(`/delete/${id}`);
}
