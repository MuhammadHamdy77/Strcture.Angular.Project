export interface ApiresonseVM {
    exception: string[] | any,
    masssage: string
    result: any
    statusCode: boolean,
    typeError: number,
    pageNo?: number,
    totalPages?:number,
    itemsPerPage?:number,
}
