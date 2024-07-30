"use client"

import { StoreGetProductsParams } from "@medusajs/medusa"
import InfiniteProducts from "@modules/products/components/infinite-products"
import RefinementList from "@modules/store/components/refinement-list"
import { useState } from "react"
import SortProducts, { SortOptions } from "../components/refinement-list/sort-products";
import Image from "next/image"
const StoreTemplate = () => {
  const [params, setParams] = useState<StoreGetProductsParams>({
    order: 'created_at'
  })
  const [sortBy, setSortBy] = useState({
    value: "created_at",
    label: "Ultimos en llegar",
  })

  return (
    <section className="bg-[#FFF]">
      <div className="md:container md:mx-auto">
        <div className="grid-cols-12 flex justify-center">
          <div className="col-span-12 md:col-span-3">
            <RefinementList
              refinementList={params}
              setRefinementList={setParams}
              sortBy={sortBy}
              setSortBy={setSortBy}
            />
            <div className="col-span-12 md:col-span-3">
              <div className="hidden md:block rounded-[10px] mt-[10px]">
                <img className="mr-[60px] bg-cover" height={'100%'} src="/img/store/Left-banner.webp" width={'100%'} />
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-9 grid grid-cols-12">
            <div className="col-span-12 mt-[20px] relative mx-[16px] md:mx-0">
              <img className="md:ml-[15px] md:mr-[15px] max-w-[1110px] min-h-[213px]" width="100%" src="/img/store/banner1.webp" />
            </div>
            <div className="col-span-12 h-auto py-4 mx-[16px] md:mx-0">
              <SortProducts
                refinementList={params}
                setRefinementList={setParams}
                sortBy={sortBy}
                setSortBy={setSortBy}
              />
            </div>
            <div className="col-span-12">
              <InfiniteProducts params={params} sortBy={sortBy} />
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default StoreTemplate
