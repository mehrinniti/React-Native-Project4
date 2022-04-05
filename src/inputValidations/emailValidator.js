export function emailValidator(email) {
    const re = /\S+@\S+\.\S+/
    if (!email) return "This field is required."
    if (!re.test(email)) return 'Invalid Email.'
    return ''
}
