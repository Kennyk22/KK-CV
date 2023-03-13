export const NewLetter = async function(promptVars: {Company: string, Quality1: string, Quality2: string, Focus: string}) {
    return await fetch(`http://localhost:3005/AIPrompt/${promptVars.Company}/${promptVars.Quality1}/${promptVars.Quality2}/${promptVars.Focus}`, {
            headers: {
                'Content-Type' : 'application/json'
            }
        }
    ).then(response => response.json())
    .then(data => data)
    .catch(e => `ERROR IN FETCH ${e}`)
}