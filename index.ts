const express = require('express');
import { Request, Response } from "express";
const prometheus = require('prom-client');
const app = express();
const port = 3002;

// const collectDefaultMetrics = prometheus.collectDefaultMetrics;
// collectDefaultMetrics();

app.get('/metrics', async (req: Request, res: Response) => {
    const metrics = await prometheus.register.metrics();
    res.set('Content-Type', prometheus.register.contentType);
    res.end(metrics);
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})