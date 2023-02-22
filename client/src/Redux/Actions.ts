
export const actionSmall = { type:'SMALL' }
export const actionLarge = { type:'LARGE' }

export const actionSize = (size:number) => {
    return {type: 'SIZE', payload: size}
}
