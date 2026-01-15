'use client'

import { useState } from 'react'
import { BookDemoForm } from './components/BookDemoForm'
import { BookDemoSuccess } from './components/BookDemoSuccess'

const BookADemo = () => {
    const [successFirstName, setSuccessFirstName] = useState<string | null>(null)

    return (
        <div className="min-h-screen bg-linear-to-b from-white to-zinc-50">
            {successFirstName ? (
                <BookDemoSuccess firstName={successFirstName} />
            ) : (
                <BookDemoForm onSuccess={setSuccessFirstName} />
            )}
        </div>
    )
}

export default BookADemo
