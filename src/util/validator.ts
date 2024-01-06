const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const sriLankanMobileRegex = /^7|0|(?:\ +94)[0-9]{9,10}$/;

export function validateEmail(email: string): boolean {
    return emailRegex.test(email);
}

export function validateLKMobileNumbers(mobile: string): boolean {
    return sriLankanMobileRegex.test(mobile);
}

export function validatePassword(password: string): boolean {
    return password.length>=8;
}