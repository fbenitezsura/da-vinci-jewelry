'use client'

import { Tab } from '@headlessui/react';
import ProductPreview from "@modules/products/components/product-preview"
import { useFeaturedProductsQuery } from "@lib/hooks/use-layout-data"
import { useEffect, useState } from 'react';
import Link from "next/link"
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Tabs({
    type,
    collections
}: {
    type: string,
    collections: any
}) {

    const [collectionSelected, setCollectionSelected] = useState(0);

    const { data } = useFeaturedProductsQuery(collections[collectionSelected]?.id);

    return (
        <div className="w-full px-2 py-8 sm:px-0 md:px-[40px]">
            <Tab.Group onChange={setCollectionSelected}>
                <Tab.List className="flex space-x-1 mx-auto w-full md:max-w-[650px] pb-5 overflow-x-auto">
                    {type === 'collection' && collections.map((category) => (
                        <Tab
                            key={category}
                            className={({ selected }) =>
                                classNames(
                                    'w-full md:min-w-auto py-2.5 px-[22px] text-[16px] font-normal leading-5',
                                    'focus:outline-none',
                                    selected
                                        ? 'text-[#232323] bg-[#F2E5E6]'
                                        : 'text-[#4d5574]'
                                )
                            }
                        >
                            {category.title}
                        </Tab>
                    ))}
                </Tab.List>
                <Tab.Panels className="grid grid-cols-12 gap-x-6 gap-y-8 mt-[10px]">
                    {data && data.map((product) => {
                        console.log('product', product)
                        return (
                            <div className="col-span-12 md:col-span-3">
                                <ProductPreview isFeatured {...product} />
                            </div>

                        )
                    })}
                    {data?.length === 0 && (
                        <div className="col-span-12 flex justify-center mt-[80px]">
                            <span>Sin productos disponibles.</span>
                        </div>
                    )}
                </Tab.Panels>
            </Tab.Group>
            <div className="w-full flex justify-center">
                <Link href="/store" className="text-[16px] py-[10px] px-[20px] w-[120px] text-[#232323] bg-[#F2E5E6] flex items-center justify-center">
                    Ver Todo
                </Link>
            </div>

        </div>
    )
}
