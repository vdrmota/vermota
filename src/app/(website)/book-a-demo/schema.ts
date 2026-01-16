import { object } from 'superstruct'
import { nonEmptyString, emailString } from '@/utils/validation'
import { Infer } from 'superstruct'

export const bookDemoSchema = object({
    firstName: nonEmptyString,
    lastName: nonEmptyString,
    company: nonEmptyString,
    phone: nonEmptyString,
    email: emailString,
    source: nonEmptyString,
})

export type BookDemoFormData = Infer<typeof bookDemoSchema>
