package models

type HttpResponse struct {
	Status        string              `json:"status"`
	StatusCode    int                 `json:"statusCode"`
	Headers       map[string][]string `json:"headers"`
	Body          string              `json:"body"`
	ContentLength int64               `json:"contentLength"`
	Latency       int64               `json:"latency"`
	Error         string              `json:"error"`
}
