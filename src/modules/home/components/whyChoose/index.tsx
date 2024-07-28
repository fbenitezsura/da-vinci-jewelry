import CardBenefit from './cardBenefit';

const WhyChoose = () => {

    const benefits = [
        {
            imgSrc: "https://orfarm-next-js.vercel.app/assets/img/icon/choose-icon1.svg",
            title: "Entrega rapida",
            description: "Disfruta de una entrega rapida."
        },
        {
            imgSrc: "https://orfarm-next-js.vercel.app/assets/img/icon/choose-icon2.svg",
            title: "Soporte 24/7",
            description: "Lo mejores agentes."
        },
        {
            imgSrc: "https://orfarm-next-js.vercel.app/assets/img/icon/choose-icon3.svg",
            title: "Ofertas especiales",
            description: "Siente el placer de comprar."
        },
        {
            imgSrc: "https://orfarm-next-js.vercel.app/assets/img/icon/choose-icon4.svg",
            title: "Productos de calidad",
            description: "Encuentra la mejor calidad certificada."
        }
    ];

    return (
        <section className="pb-[80px]">
            <div className="container mx-auto">
                <div className="flex justify-center my-[30px]">
                    {benefits.map((benefit, index) => (
                        <div className="flex justify-center mb-2 md:mb-0">
                          <CardBenefit benefit={benefit}/>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )

}

export default WhyChoose;