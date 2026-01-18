// Shared styles for dashboard floating components

export const floatingPanel = {
    base: 'bg-white rounded-3xl shadow-[0_8px_24px_rgba(0,0,0,0.15)]',
    small: 'bg-white rounded-3xl shadow-[0_6px_20px_rgba(0,0,0,0.15)]',
}

export const menuItem = {
    base: 'flex items-center gap-2 rounded-lg px-2.5 py-2 text-sm font-medium transition-all duration-300 ease-in-out',
    active: 'bg-[#002FA7]/10 text-[#002FA7] font-medium',
    inactive: 'text-zinc-900 font-medium hover:bg-zinc-100',
}

export const card = {
    base: 'rounded-2xl border border-white bg-white shadow-[0_4px_24px_-4px_rgba(0,0,0,0.096),0_12px_48px_-8px_rgba(0,0,0,0.08)]',
}
