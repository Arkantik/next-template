import express from "express"

export interface Context {
	req: express.Request
	res: express.Response
}
