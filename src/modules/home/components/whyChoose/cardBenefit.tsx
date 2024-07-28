const CardBenefit = ({
    benefit
}) => {
    return (
        <div className="h-[200px] w-[292px] bg-white py-[30px] text-center border-[.5px] border-[#232323]">
            <img className="mx-auto mb-[15px]" src={benefit.imgSrc}></img>
            <h3 className="font-bold text-[15px] text-[#232323] mb-[15px]">{benefit.title}</h3>
            <p className="text-[16px] text-[#666]">{benefit.description}</p>
        </div>
    );
};

export default CardBenefit;