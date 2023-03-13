import { combineReducers } from "redux"
import CoverLtr from "../Components/CoverLtr/CoverLtr"
import GPTA from "../Components/Portfolio/GPTA"
import SudoLit from "../Components/Portfolio/SudoLit"
import Swoop from "../Components/Portfolio/Swoop"
import This from "../Components/Portfolio/This"
import { CoverLetter, MainState } from "./StateTypes"

const qualities = ['Hard Worker', 'Fast Learner', 'Punctual', 'Creative', 'Team Player', 'Forward Thinking']

const mainState = {
    size: 1,
    components: [CoverLtr, GPTA, SudoLit, Swoop, This],
}

const coverState = {
    text: `
    Dear Hiring Manager,\n

    I am excited to apply for a Developer position at your company. With over 2 years of experience in full stack software development and a strong focus on backend technologies, I am confident that my skills and experience would be an asset to your team.\n
    
    I have a deep understanding and practical experience with MongoDB, SQL, and Node.js, which I have used in several projects to build scalable and efficient applications. I have worked with complex data structures and optimized queries, ensuring the performance and security of the applications.\n
    
    I also have experience in front end technologies with a focus on single page apps like React and Angular. I have built multiple apps using a variety of libraries such as Material UI and Tailwind, as well as raw CSS to make apps that are pleasant to look at and easy to use.\n
    
    I am passionate about software development, and I am constantly seeking new challenges to enhance my skills and knowledge. I believe that my experience, coupled with my ability to learn quickly and adapt to new technologies, would make me a valuable addition to your team.\n
    
    Thank you for your consideration. I look forward to the opportunity to discuss how I can contribute to your team.\n
    
    Sincerely,\n
    
    Kenny Karter`,
    loading: false,
    Focus: ['Backend', 'Frontend', 'Full Stack'],
    FocusSelect: '',
    Quality1: [...qualities],
    Quality1Select: '',
    Quality2: [...qualities],
    Quality2Select: '',
    Company: ''
}



const Main = (state: MainState = mainState, action: {type: string, payload: any}) => {
    switch (action.type) {
        case 'SIZE':
            
            return {...state, size: action.payload}
        
        default:

            return {...state};
    }
}

const Cover = (state: CoverLetter = coverState, action: {type: string, payload: any}) => {
    switch (action.type) {
        case 'NEW_LETTER':
            
            return {...state, text: action.payload}

        case 'LOADING':
            
            return {...state, loading: !state.loading}

        case 'FOCUS':
            
            return {...state, FocusSelect: action.payload}

        case 'QUALITY1':
            
            return {...state, Quality1Select: action.payload}

        case 'QUALITY2':
            
            return {...state, Quality2Select: action.payload}

        case 'COMPANY':
            
            return {...state, Company: action.payload}
        
        default:

            return {...state};
    }
}

const Reducer = combineReducers({
    Main,
    Cover
})

export default Reducer