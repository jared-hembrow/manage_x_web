
// Reducer Action
export type Action<T,P> = {
    type: T,
    payload?: P
}


export type User = {
    email: string
    id: string
    exp: number
}