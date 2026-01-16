'use server'

import { db } from '@/lib/db'
import { withValidation } from '@/utils/validation'
import { bookDemoSchema, BookDemoFormData } from './schema'
import { sendDemoRequestEmail } from './sendDemoRequestEmail'

export async function submitDemoRequest(data: BookDemoFormData) {
    return withValidation(data, bookDemoSchema, async (validatedData) => {
        await db.demoFormSubmission.create({
            data: validatedData,
        })

        await sendDemoRequestEmail(validatedData)

        return { success: true as const }
    })
}
