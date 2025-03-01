import { PaymentSession } from "@medusajs/medusa"
import Radio from "@modules/common/components/radio"
import React from "react"
import PaymentTest from "../payment-test"
import { Text, Tooltip, clx } from "@medusajs/ui"
import { InformationCircleSolid } from "@medusajs/icons"
import { RadioGroup } from "@headlessui/react"

type PaymentContainerProps = {
  paymentSession: PaymentSession
  selectedPaymentOptionId: string | null
  disabled?: boolean
  paymentInfoMap: Record<string, { title: string; icon: JSX.Element }>
}

const PaymentContainer: React.FC<PaymentContainerProps> = ({
  paymentSession,
  selectedPaymentOptionId,
  paymentInfoMap,
  disabled = false,
}) => {
  const isDevelopment = process.env.NODE_ENV === "development";
  return (
    <>
      <RadioGroup.Option
        key={paymentSession.id}
        value={paymentSession.provider_id}
        disabled={disabled}
        className={clx(
          "flex flex-col gap-y-2 text-small-regular cursor-pointer py-4 border rounded-rounded px-8 mb-2 hover:shadow-borders-interactive-with-active",
          {
            "border-ui-border-interactive":
              selectedPaymentOptionId === paymentSession.provider_id,
          }
        )}
      >
        {paymentSession.provider_id === "manual" && (
          <div className="flex items-center justify-between ">
            <div className="flex items-center gap-x-4">
              <Radio
                checked={selectedPaymentOptionId === paymentSession.provider_id}
              />
              <Text className="text-base-regular">
                {paymentInfoMap[paymentSession.provider_id]?.title ||
                  paymentSession.provider_id}
              </Text>
              {process.env.NODE_ENV === "development" &&
                !Object.hasOwn(paymentInfoMap, paymentSession.provider_id) && (
                  <Tooltip
                    content="You can add a user-friendly name and icon for this payment provider in 'src/modules/checkout/components/payment/index.tsx'"
                    className="min-w-fit"
                  >
                    <InformationCircleSolid color="var(--fg-muted)" />
                  </Tooltip>
                )}
              <div className="flex flex-col text-center">
                <p>Banco: Banco Estado</p>
                <p>Cuenta: 11.111.111-1</p>
                <p>Rut: 11.111.111-1</p>
                <p>Nombre: Huevos</p>
                <p>Email: clientes@davinci.cl</p>
              </div>
            </div>
            <span className="justify-self-end text-gray-700">
              {paymentInfoMap[paymentSession.provider_id]?.icon}
            </span>
          </div>
        )}

        {paymentSession.provider_id === "flow-payment" && (
          <div className="flex items-center w-full">
            <div className="flex items-center gap-x-4 w-full">
              <Radio
                checked={selectedPaymentOptionId === paymentSession.provider_id}
              />
              <Text className="text-base-regular">
                {paymentInfoMap[paymentSession.provider_id]?.title ||
                  paymentSession.provider_id}
              </Text>
              {process.env.NODE_ENV === "development" &&
                !Object.hasOwn(paymentInfoMap, paymentSession.provider_id) && (
                  <Tooltip
                    content="You can add a user-friendly name and icon for this payment provider in 'src/modules/checkout/components/payment/index.tsx'"
                    className="min-w-fit"
                  >
                    <InformationCircleSolid color="var(--fg-muted)" />
                  </Tooltip>
                )}
              <div className="w-full flex justify-center items-center">
                <img className="h-[120px]" src={'/img/payment/flow.jpeg'} />
              </div>
            </div>
          </div>
        )}

        {paymentSession.provider_id === "manual" && isDevelopment && (
          <PaymentTest className="small:hidden text-[10px]" />
        )}
      </RadioGroup.Option>
    </>
  )
}

export default PaymentContainer
