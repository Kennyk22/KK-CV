import { combineReducers } from "redux"
import CoverLtr from "../Components/CoverLtr/CoverLtr"
import GPTA from "../Components/Portfolio/GPTA"
import SudoLit from "../Components/Portfolio/SudoLit"
import Swoop from "../Components/Portfolio/Swoop"
import This from "../Components/Portfolio/This"
import { MainState } from "./StateTypes"

const mainState = {
    size: 1,
    components: [CoverLtr, GPTA, SudoLit, Swoop, This]
}

const Main = (state: MainState = mainState, action: {type: string, payload: any}) => {
    switch (action.type) {
        case 'SIZE':
            
            return {...state, size: action.payload}
        
        default:

            return {...state};
    }
}

const Reducer = combineReducers({
    Main
})

export default Reducer