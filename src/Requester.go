package src

import (
	"fmt"
	"io"
	"net/http"
	"reqquest/src/models"
	"time"
)

func parseBodyToString(response http.Response) string {

	defer response.Body.Close()

	bodyBytes, err := io.ReadAll(response.Body)

	if err != nil {
		return string(err.Error())
	}

	return string(bodyBytes)

}

func httpGet(url string, headers map[string]string) models.HttpResponse {

	request, error := http.NewRequest("GET", url, nil)

	if error != nil {
		fmt.Println("Error creatingt request:", error.Error())
	}

	addHeadersToRequest(*request, headers)

	client := &http.Client{
		Timeout: 10 * time.Second,
	}

	start := time.Now()
	response, error := client.Do(request)
	duration := time.Since(start).Milliseconds()

	if error != nil {
		fmt.Print("Error while creating the petition: %w", error.Error())
	}

	return models.HttpResponse{
		Status:        response.Status,
		StatusCode:    response.StatusCode,
		Headers:       response.Header,
		Body:          parseBodyToString(*response),
		ContentLength: request.ContentLength,
		Latency:       duration,
	}

}

func httpPost(url string) models.HttpResponse {
	fmt.Print(url)
	return models.HttpResponse{}
}

func addHeadersToRequest(request http.Request, headers map[string]string) {

	if headers != nil {
		for key, value := range headers {
			request.Header.Set(key, value)
		}
	} else {
		fmt.Println("No Headers were provided")
	}

}

func Requester(url string, method string) models.HttpResponse {

	switch method {
	case "GET":
		return httpGet(url, nil)
	case "POST":
		return httpPost(url)
	default:
		return httpGet(url, nil)
	}
}
