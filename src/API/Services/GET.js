import http from "../request";

export function GetAllJobs() {
  return http.get("/alljob");
}

export function GetCensorJobs() {
  return http.get("/censorjob");
}

export function GetSavedJobs(username) {
  return http.get(`/savedjob/${username}`);
}

export function GetOfficeJobs() {
  return http.get("/officejob");
}
export function GetMarketingJobs() {
  return http.get("/marketingjob");
}
export function GetCustomerCareJobs() {
  return http.get("/ctmcarejob");
}
export function GetRestaurantJobs() {
  return http.get("/restaurantjob");
}
