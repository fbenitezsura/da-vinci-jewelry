import { useFeaturedProductsQuery } from "@lib/hooks/use-layout-data"
import { ProductCategory } from "@medusajs/medusa"
import CategoryPreview from "@modules/categories/components/category-preview/index"
import Tabs from '@modules/common/components/tabs/index';
import InteractiveLink from "@modules/common/components/interactive-link"

const ProductRail = ({ collections }: { collections: any }) => {

  return (
    <div className="small:py-12 text-center">
      <p className="font-normal text-[24px] text-[#232323] uppercase leading-[1.4] mb-[.5rem]">Productos en tendencia</p>
      <p className="font-normal text-[#666666] text-[14px] tracking-[-.3px] mb-[20px] leading-[38px] capitalize">Consigue estar a la moda con Joyeria Da Vinci</p>
      <div className="w-full flex justify-center">
        {collections && <Tabs
          type={'collection'}
          collections={collections}
        />}
      </div>
    </div>
  )
}

export default ProductRail
