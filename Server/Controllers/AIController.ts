import {OpenAIApi, Configuration} from 'openai'
import { PromptReq } from '../Helpers/types'
import { Response, Request } from 'express'

const AICoverLetter = async (req: Request, res: Response) => {
    try {

        const configuration = new Configuration({
            apiKey: process.env.API_KEY,
        })
        const openai = new OpenAIApi(configuration)

        const aiPrompt = await openai.createCompletion({
            model: "text-davinci-002",
            prompt: `write a cover letter for ${req.params.Focus} position at ${req.params.Company} emphasizing the qualities of ${req.params.Quality1} and ${req.params.Quality1}, signed by Kenny Karter`,
            temperature: 0,
            max_tokens: 500,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        })

        res.status(200)       
        res.send(JSON.stringify(aiPrompt.data.choices[0].text))

    } catch (error) {
        console.log(error)
        res.status(500)
        res.send('failed in controllers')
    }
}

export default {
    AICoverLetter
}