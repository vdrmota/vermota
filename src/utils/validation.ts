import { string, refine, Struct, assert, StructError } from 'superstruct'

export const nonEmptyString = refine(string(), 'nonEmptyString', value => {
    return value.trim().length > 0 || 'This field is required'
})

export const emailString = refine(string(), 'email', value => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return emailRegex.test(value) || 'Please enter a valid email address'
})

export const phoneString = refine(string(), 'phone', value => {
    return value.trim().length > 0 || 'Phone number is required'
})

export async function withValidation<T, S, R>(
    data: unknown,
    schema: Struct<T, S>,
    handler: (validatedData: T) => Promise<R>
): Promise<R | { success: false; error: string }> {
    try {
        assert(data, schema)
    } catch (err) {
        if (err instanceof StructError) {
            const message = typeof err.refinement === 'string'
                ? `${err.key}: ${err.refinement}`
                : err.type
                    ? `${err.key} must be a ${err.type}`
                    : `${err.key} is invalid`
            return { success: false, error: message }
        }
        return { success: false, error: 'Invalid request' }
    }

    try {
        return await handler(data as T)
    } catch (err) {
        console.error('Server action error:', err)
        return { success: false, error: 'Something went wrong. Please try again.' }
    }
}
