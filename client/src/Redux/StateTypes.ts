export interface ReactComponent {():JSX.Element}

export interface MainState {
    size: number
    components: ReactComponent[]
}

export interface CoverLetter {
    text: string
    loading: boolean
    Focus: string[]
    FocusSelect: string
    Quality1: string[]
    Quality1Select: string
    Quality2: string[]
    Quality2Select: string
    Company: string
}

export interface WholeState {
    Main: MainState
    Cover: CoverLetter
}