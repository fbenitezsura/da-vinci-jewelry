import { Fragment } from 'react'
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import { TriangleDownMini } from "@medusajs/icons"
import clsx from "clsx"

const people = [
    { name: 'Wade Cooper' },
    { name: 'Arlene Mccoy' },
    { name: 'Devon Webb' },
    { name: 'Tom Cook' },
    { name: 'Tanya Fox' },
    { name: 'Hellen Schmidt' },
]

const variants = {
    default: 'relative w-full cursor-default rounded-lg bg-[#E5E5E5] py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm',
    inputPhone: 'w-full min-w-[70px] pt-4 pb-1 h-11 mt-0 text-left pl-3 bg-ui-bg-field border rounded-md focus:outline-none focus:ring-0 focus:shadow-borders-interactive-with-active border-ui-border-base hover:bg-ui-bg-field-hover',
    error: "w-full h-[35px] bg-[#ffffff10] rounded-[10px] pl-[16px] px-[8.5px] pr-[30px] placeholder:text-gray-light placeholder:text-[14px] text-white text-[14px] border-1 border-red",
    none: '',
};

const optionsVariants = {
    default: 'relative w-full cursor-default rounded-lg bg-[#E5E5E5] py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm',
    inputPhone: 'absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm',
    error: "w-full h-[35px] bg-[#ffffff10] rounded-[10px] pl-[16px] px-[8.5px] pr-[30px] placeholder:text-gray-light placeholder:text-[14px] text-white text-[14px] border-1 border-red",
    none: '',
}

export default function Dropdown({
    title,
    items,
    value,
    handleChange,
    className,
    variant = 'default'
}: {
    title: string,
    items: Array<any>
    value: any
    handleChange: (value: string) => void,
    className: string,
    readonly variant?: keyof typeof variants
}) {

    console.log('items',items)

    return (
        <Menu>
            <MenuButton className="inline-flex w-52 items-center gap-3  border-[1px] py-1.5 px-2 text-sm/6 font-semibold text-[#acaaa6] shadow-inner shadow-white/10 focus:outline-none bg-[#ffffff80] data-[focus]:outline-1 data-[focus]:outline-white">
                {value.label}
                <TriangleDownMini className="size-4 fill-white/60" />
            </MenuButton>
            <Transition
                enter="transition ease-out duration-75"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <MenuItems
                    anchor="bottom end"
                    className="w-52 origin-top-right border border-[#acaaa6] bg-[#F5F5F5] text-sm/6 text-white [--anchor-gap:var(--spacing-1)] focus:outline-none"
                >
                    {items.map((item, index) => {
                        return (
                            <MenuItem key={index}>
                                <button
                                    onClick={() => handleChange(item)}
                                    className={clsx(
                                        "group flex w-full items-center gap-2 py-1.5 px-3 text-[#acaaa6] hover:bg-[#ffffff80]",
                                    )}
                                >
                                    {item.label}
                                </button>
                            </MenuItem>
                        )
                    })}
                </MenuItems>
            </Transition>
        </Menu>
    )
}
