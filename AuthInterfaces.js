"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isAccessTokenRequest(candidate) {
    if (!candidate)
        return false;
    if (typeof candidate !== "object")
        return false;
    if (candidate.clientPasswordHash && candidate.serverNonceId && candidate.clientNonce) {
        if (typeof candidate.clientPasswordHash !== "string")
            return false;
        if (typeof candidate.serverNonceId !== "string")
            return false;
        if (typeof candidate.clientNonce !== "number")
            return false;
        return true;
    }
    else
        return false;
}
exports.isAccessTokenRequest = isAccessTokenRequest;
