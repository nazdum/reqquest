package src

import (
	"fmt"
	"io"
	"net/http"
	"reqquest/src/models"
)

func Requester(url string) models.HttpResponse {

	response, error := http.Get(url)

	if error != nil {
		fmt.Println(error)
	}

	defer response.Body.Close()

	bodyBytes, _ := io.ReadAll(response.Body)

	bodyString := string(bodyBytes)

	return models.HttpResponse{
		StatusCode: response.StatusCode,
		Body:       bodyString,
	}

}
