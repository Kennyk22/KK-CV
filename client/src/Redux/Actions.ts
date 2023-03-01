
export const actionSmall = { type:'SMALL' }
export const actionLarge = { type:'LARGE' }

export const actionSize = (size:number) => {
    return {type: 'SIZE', payload: size}
}

export const  actionDrop = (catagory: string, select: string) => {
    const type = catagory.toUpperCase()
    return {type , payload: select}
}

export const actionCompany = (company: string) => {
    return {type: 'COMPANY', payload: company}
}