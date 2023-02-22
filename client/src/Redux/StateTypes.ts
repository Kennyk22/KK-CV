export interface ReactComponent {():JSX.Element}

export interface MainState {
    size: number
    components: ReactComponent[]
}

export interface WholeState {
    Main: MainState
}