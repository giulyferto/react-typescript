//El hecho de que el archivo es d.ts significa que solo toma definicionees y no se pueden definir funciones

export interface Sub {
    nick: string,
    avatar: string
    subMonths: number
    description?:string
}

export type SubsResponseFromApi = Array<{
    nick: string,
    months: number
    profileUrl: string
    description: string
}>