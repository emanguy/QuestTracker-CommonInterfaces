
export interface ErrorDescription {
    message: string
}

export interface UnknownErrorDescription extends ErrorDescription {
    unknownErrorMessage: string
}

export interface NewlyCreatedDescription {
    id: string
}