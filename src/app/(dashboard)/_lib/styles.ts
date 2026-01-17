// Shared styles for dashboard floating components

export const floatingPanel = {
    base: 'bg-zinc-100 rounded-2xl shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_8px_24px_rgba(0,0,0,0.15)]',
    small: 'bg-zinc-100 rounded-2xl shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_6px_20px_rgba(0,0,0,0.15)]',
}

export const menuItem = {
    base: 'flex items-center gap-2 rounded-lg px-2.5 py-2 text-sm font-medium transition-all duration-300 ease-in-out',
    active: 'bg-[#002FA7]/10 text-[#002FA7]',
    inactive: 'text-zinc-600 hover:bg-zinc-200 hover:text-zinc-900',
}
