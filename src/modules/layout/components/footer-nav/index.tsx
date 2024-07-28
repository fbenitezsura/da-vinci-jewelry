"use client"

import clsx from "clsx"
import { useCollections, useProductCategories } from "medusa-react"
import { Text } from "@medusajs/ui"
import Link from "next/link";

const FooterNav = () => {
  const { collections } = useCollections()
  const { product_categories } = useProductCategories()

  return (
    <div className="border-t-[1px] bg-[#f2e6e5]">
      <div className="flex flex-col md:px-[100px] px-[16px]">
        <div className="flex flex-col gap-y-6 xsmall:flex-row items-start justify-between py-20">
          <div>
            <Link
              href="/"
              className="text-[#232323] text-[24px] hover:underline uppercase font-great-vibes"
            >
              {process.env.NEXT_PUBLIC_NAME_ECOMMERCE}
            </Link>
          </div>
          <div className="text-small-regular grid grid-cols-3 gap-x-10 md:gap-x-16">
            <div className="flex flex-col gap-y-2">
              <span className="text-[18px] text-[#232323] txt-ui-fg-base uppercase">Nuestra Empresa</span>
              <ul className="grid grid-cols-1 gap-y-2 text-ui-fg-subtle txt-small">
                <li>
                  <span className="text-[#666] text-[14px]">Quienes somos</span>
                </li>
                <Link
                  href="/terms-and-conditions"
                  className=""
                >
                  <li>
                    <span className="text-[#666] text-[14px]">Términos y condiciones</span>
                  </li>
                </Link>
              </ul>
            </div>
            <div className="flex flex-col gap-y-2">
              <span className="text-[18px] text-[#232323] txt-ui-fg-base uppercase">Información de contacto</span>
              <ul className="grid grid-cols-1 gap-y-2 text-ui-fg-subtle txt-small">
                <li>
                  <span className="text-[#666] text-[14px]">Coronel, Octava Región</span>
                </li>
                <li>
                  <p className="font-bold text-[16px] mt-2 text-[#666]">WHATSAPP</p>
                  <span className="text-[#666] text-[14px]">(+569) 89582586</span>
                </li>
              </ul>
            </div>
            {collections && (
              <div className="flex flex-col gap-y-2">
                <span className="text-[18px] uppercase text-[#232323] txt-ui-fg-base">
                  Productos
                </span>
                <ul
                  className={clsx(
                    "grid grid-cols-1 gap-2 text-ui-fg-subtle txt-small",
                    {
                      "grid-cols-2": (collections?.length || 0) > 3,
                    }
                  )}
                >
                  {collections?.slice(0, 6).map((c) => (
                    <li key={c.id}>
                      <Link
                        className="hover:text-ui-fg-base text-[#666] text-[14px]"
                        href={`/collections/${c.handle}`}
                      >
                        {c.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="flex flex-col gap-y-2">
              <div></div>
            </div>
          </div>
        </div>
        <div className="w-full mb-8 text-center text-ui-fg-muted">
          <Text className="txt-compact-small text-[14px] text-[#232323]">
            © {new Date().getFullYear()}. Todo los derechos reservados.
          </Text>
        </div>
      </div>
    </div>
  )
}

export default FooterNav
