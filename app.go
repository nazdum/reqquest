package main

import (
	"context"
	"reqquest/src"
	"reqquest/src/models"
)

type App struct {
	ctx context.Context
}

func NewApp() *App {
	return &App{}
}

func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

func (a *App) Request(url string, method string) models.HttpResponse {
	return src.Requester(url, method)
}
