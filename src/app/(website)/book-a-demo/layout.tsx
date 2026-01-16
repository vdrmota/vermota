import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Book a Demo',
}

const BookDemoLayout = ({ children }: { children: React.ReactNode }) => {
    return children
}

export default BookDemoLayout
