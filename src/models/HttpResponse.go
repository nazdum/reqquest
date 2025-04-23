package models

type HttpResponse struct {
  StatusCode int    `json:"StatusCode"`
  Body       string `json:"Body"`
  Latency    int64  `json:"Latency"` 
}
