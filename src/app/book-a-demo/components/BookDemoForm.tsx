'use client'

import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { superstructResolver } from '@hookform/resolvers/superstruct'
import { ArrowRight } from 'lucide-react'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import { bookDemoSchema, BookDemoFormData } from '../schema'
import { submitDemoRequest } from '../actions'

interface BookDemoFormProps {
    onSuccess: (firstName: string) => void
}

export const BookDemoForm = ({ onSuccess }: BookDemoFormProps) => {
    const [submitError, setSubmitError] = useState<string | null>(null)

    const {
        register,
        control,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<BookDemoFormData>({
        resolver: superstructResolver(bookDemoSchema),
        defaultValues: {
            firstName: '',
            lastName: '',
            company: '',
            phone: '',
            email: '',
            source: '',
        },
    })

    const onSubmit = async (data: BookDemoFormData) => {
        setSubmitError(null)

        const result = await submitDemoRequest(data)

        if (result.success) {
            window.scrollTo({ top: 0, behavior: 'smooth' })
            onSuccess(data.firstName)
        } else {
            setSubmitError(result.error)
        }
    }

    const inputClassName = (error?: boolean) =>
        `mt-2 block w-full rounded-xl border bg-white px-4 py-3 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-1 ${
            error
                ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                : 'border-zinc-200 focus:border-[#002FA7] focus:ring-[#002FA7]'
        }`

    return (
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-xl">
                <div className="text-center">
                    <h1 className="text-3xl font-medium tracking-tight text-zinc-900 sm:text-4xl">Book a demo</h1>
                    <p className="mt-4 text-lg text-zinc-600">
                        We&apos;d love to walk you through setting up your first loyalty program.
                    </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="mt-10 space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="firstName" className="block text-sm font-medium text-zinc-700">
                                First name
                            </label>
                            <input
                                {...register('firstName')}
                                type="text"
                                id="firstName"
                                className={inputClassName(!!errors.firstName)}
                                placeholder="Jane"
                            />
                            {errors.firstName && (
                                <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
                            )}
                        </div>
                        <div>
                            <label htmlFor="lastName" className="block text-sm font-medium text-zinc-700">
                                Last name
                            </label>
                            <input
                                {...register('lastName')}
                                type="text"
                                id="lastName"
                                className={inputClassName(!!errors.lastName)}
                                placeholder="Doe"
                            />
                            {errors.lastName && <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>}
                        </div>
                    </div>

                    <div>
                        <label htmlFor="company" className="block text-sm font-medium text-zinc-700">
                            Company name
                        </label>
                        <input
                            {...register('company')}
                            type="text"
                            id="company"
                            className={inputClassName(!!errors.company)}
                            placeholder="Acme Coffee"
                        />
                        {errors.company && <p className="mt-1 text-sm text-red-600">{errors.company.message}</p>}
                    </div>

                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-zinc-700">
                            Phone number
                        </label>
                        <Controller
                            name="phone"
                            control={control}
                            render={({ field }) => (
                                <PhoneInput
                                    {...field}
                                    international
                                    defaultCountry="US"
                                    flagUrl="https://www.untitledui.com/images/flags/{XX}.svg"
                                    className={`phone-input mt-2 block w-full rounded-xl border bg-white px-4 py-3 text-zinc-900 ${
                                        errors.phone
                                            ? 'border-red-300 focus-within:border-red-500 focus-within:ring-1 focus-within:ring-red-500'
                                            : 'border-zinc-200 focus-within:border-[#002FA7] focus-within:ring-1 focus-within:ring-[#002FA7]'
                                    }`}
                                />
                            )}
                        />
                        {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-zinc-700">
                            Email
                        </label>
                        <input
                            {...register('email')}
                            type="email"
                            id="email"
                            className={inputClassName(!!errors.email)}
                            placeholder="jane@acmecoffee.com"
                        />
                        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
                    </div>

                    <div>
                        <label htmlFor="source" className="block text-sm font-medium text-zinc-700">
                            How did you find out about us?
                        </label>
                        <input
                            {...register('source')}
                            type="text"
                            id="source"
                            className={inputClassName(!!errors.source)}
                            placeholder="Google, referral, social media..."
                        />
                        {errors.source && <p className="mt-1 text-sm text-red-600">{errors.source.message}</p>}
                    </div>

                    {submitError && (
                        <div className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">{submitError}</div>
                    )}

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="mt-4 inline-flex w-full cursor-pointer items-center justify-center rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                        {isSubmitting ? 'Submitting...' : 'Request demo'}
                        {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
                    </button>
                </form>

                <p className="mt-6 text-center text-sm text-zinc-500">
                    We&apos;ll reach out ASAP to schedule your demo.
                </p>
            </div>
        </div>
    )
}
