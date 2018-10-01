export interface SavedNonce {
    id: string;
    serverNonce: number;
}
export interface NonceSaltPair {
    nonce: SavedNonce;
    passwordSalt: string;
}
export interface User {
    _id?: string;
    username: string;
    passwordHash: string;
    passwordSalt: string;
}
export interface AccessTokenRequest {
    clientPasswordHash: string;
    serverNonceId: string;
    clientNonce: number;
}
export interface LoginToken {
    loginToken: string;
}
export declare function isAccessTokenRequest(candidate: any): candidate is AccessTokenRequest;
