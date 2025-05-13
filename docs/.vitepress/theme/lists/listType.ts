export interface ListData {
    url: string
    image: string
    name: string
    bdcolor: string
    bgcolor: string
    stars?: string
}

export interface List {
    title?: string
    items: ListData[]
}
