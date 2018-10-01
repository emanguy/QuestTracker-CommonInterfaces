
export interface SavedNonce {
    id: string
    serverNonce: number
}

export interface NonceSaltPair {
    nonce: SavedNonce
    passwordSalt: string
}

export interface User {
    _id?: string
    username: string
    passwordHash: string
    passwordSalt: string
}

export interface AccessTokenRequest {
    clientPasswordHash: string
    serverNonceId: string
    clientNonce: number
}

export interface LoginToken {
    loginToken: string
}

export function isAccessTokenRequest(candidate: any) : candidate is AccessTokenRequest {
    if (!candidate) return false;
    if (typeof candidate !== "object") return false;
    if (candidate.clientPasswordHash && candidate.serverNonceId && candidate.clientNonce) {
        if (typeof candidate.clientPasswordHash !== "string") return false;
        if (typeof candidate.serverNonceId !== "string") return false;
        if (typeof candidate.clientNonce !== "number") return false;
        return true;
    }
    else return false;
}

