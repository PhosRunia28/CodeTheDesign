type offers = {
  offer: string;
  access: boolean;
};

type CardPriceProps = {
  title: string;
  price: string;
  offerPrice: offers[];
};
export default function CardPrice({
  title,
  price,
  offerPrice,
}: CardPriceProps) {
  return (
    <div className="card w-full max-w-xs bg-white text-black">
      <div className="card-body">
        <p className="font-medium text-primary">{title}</p>
        <h2 className="text-4xl">{price}</h2>
        <ul className="my-5 flex flex-col gap-4">
          {offerPrice.map((offer) => {
            return (
              <li className="flex items-center gap-2">
                <img
                  src={offer.access ? "./check.svg" : "./error.svg"}
                  alt="check offer"
                  className="h-5 w-5 bg-cover bg-center"
                />
                {offer.offer}
              </li>
            );
          })}
        </ul>
        <div>
          <button className="btn w-full bg-primary text-white shadow-md hover:bg-white hover:text-black">
            Beli Sekarang
          </button>
        </div>
      </div>
    </div>
  );
}
