import express from "express";
import AIControllers from './Controllers/AIController'

const router = express.Router()

router.get('/AIPrompt/:Company/:Quality1/:Quality2/:Focus', AIControllers.AICoverLetter)


export default router