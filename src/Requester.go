package src

import (
	"fmt"
	"io"
	"net/http"
  "time"
	"reqquest/src/models"
)

func Requester(url string) models.HttpResponse {

  startTime := time.Now()

	response, error := http.Get(url)

	if error != nil {
		fmt.Println(error)
		latency := time.Since(startTime).Milliseconds()
		return models.HttpResponse{
			StatusCode: 0, 
			Body:       fmt.Sprintf("Error: %v", error),
			Latency:    latency,
		}
	}

	defer response.Body.Close()

	bodyBytes, _ := io.ReadAll(response.Body)

  
  if error != nil {
  		latency := time.Since(startTime).Milliseconds()
  		return models.HttpResponse{
  			StatusCode: response.StatusCode,
  			Body:       "Error reading response body",
  			Latency:    latency,
  		}
  } 
	
	latency := time.Since(startTime).Milliseconds()

  bodyString := string(bodyBytes)


	return models.HttpResponse{
		StatusCode: response.StatusCode,
		Body:       bodyString,
    Latency:    latency,
	}

}
