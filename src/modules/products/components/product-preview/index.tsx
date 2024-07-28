import clsx from "clsx"
import Link from "next/link"
import { ProductPreviewType } from "types/global"
import Thumbnail from "../thumbnail"
import { Text } from "@medusajs/ui"
import ShowNumberFormat from "@modules/common/components/number-format";
import StarRating from "@modules/products/components/start-rating/index";
const ProductPreview = ({
  title,
  handle,
  thumbnail,
  price,
  isFeatured,
  inStock
}: ProductPreviewType & {
  inStock: boolean
}) => {

  const capitalizeText = (text) => {
    return text.toLowerCase().replace(/\b\w/g, char => char.toUpperCase());
  };

  return (
    <Link href={`/products/${handle}`} className="group">
      <div className="relative bg-white">
        {!inStock && (
          <div className="absolute top-2 left-1 w-[86px] h-[20px] rounded-[6px] bg-[#5F5F5F] z-30 flex items-center justify-center px-[5px] py-[4px]">
            <span className="text-white text-[12px]">{inStock ? 'Stock' : 'Sin Stock'}</span>
          </div>
        )}
        <Thumbnail className="" thumbnail={thumbnail} size="square" isFeatured={true} />
        <div className="h-auto min-h-[115px] rounded-b-lg">
          {/*<Text className="text-[13px] text-[#79819c] text-left">{handle}</Text>*/}
          <span className="text-[14px] capitalize text-[#232323] font-normal text-center">{capitalizeText(title)}</span>
          <div className="text-center">
            {price ? (
              <>
                {price.price_type === "sale" && (
                  <Text className="line-through text-ui-fg-muted text-[14px]">
                    {price.original_price}
                  </Text>
                )}
                <Text
                  className={clsx("text-ui-fg-muted", {
                    "text-ui-fg-interactive": price.price_type === "sale",
                  })}
                >
                  <ShowNumberFormat className="text-[14px] text-[#232323] font-normal" value={price.calculated_price} />
                </Text>
              </>
            ) : (
              <div className="w-20 h-6 animate-pulse bg-gray-100"></div>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProductPreview
