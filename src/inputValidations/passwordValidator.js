export function passwordValidator(password) {
    if (!password) return "This field is required."
    if (password.length < 8 || password.length > 16) return 'Password length must be 8-16 character.'
    return ''
}
