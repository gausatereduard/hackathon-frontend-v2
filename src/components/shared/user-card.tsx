import { WifiIcon } from "lucide-react";

interface CardProps {
  name: string;
  cardNumber: string;
  balance: string;
  className?: string;
}

export const Card = ({ name, cardNumber, balance, className }: CardProps) => {
  return (
    <div
      className={`bg-[#2B1867] p-5 rounded-xl text-white overflow-hidden relative h-48 ${className}`}
    >
      {/* Background circles for design */}
      <div className={"absolute top-0 right-0 w-48 h-48 bg-[#3C2A85] rounded-full -mr-24 -mt-24 opacity-50"}></div>
      <div className={"absolute bottom-0 left-0 w-32 h-32 bg-[#3C2A85] rounded-full -ml-16 -mb-16 opacity-50"}></div>
      <div className={"absolute top-20 -right-10 w-40 h-40 border border-[#F3A739] rounded-full opacity-50"}></div>

      {/* Card content */}
      <div className={"relative z-10 flex flex-col justify-between h-full"}>
        <div className={"flex justify-between items-start"}>
          <p className={"text-sm font-medium"}>{name}</p>
          <p className={"text-sm font-medium"}>{cardNumber}</p>
        </div>

        <div className={"flex justify-between items-end"}>
          <div>
            <p className={"text-xs text-gray-300"}>Balance</p>
            <p className={"text-2xl font-semibold mt-1"}>{balance}</p>
          </div>
          <WifiIcon className={"text-white rotate-90"} size={20} />
        </div>
      </div>
    </div>
  );
};

interface CardSmallProps {
  cardType: 'visa' | 'mastercard';
  cardNumber: string;
  balance: string;
  isSelected?: boolean;
  onClick?: () => void;
  className?: string;
}

export const CardSmall = ({
  cardType,
  cardNumber,
  balance,
  isSelected = false,
  onClick,
  className
}: CardSmallProps) => {
  return (
    <div
      className={`border border-gray-200 rounded-lg p-4 ${isSelected ? 'border-indigo-700' : ''} ${className}`}
      onClick={onClick}
    >
      <div className={"flex items-center justify-between"}>
        <div className={"flex items-center gap-3"}>
          <div className={"w-12 h-8 rounded bg-[#2B1867] flex items-center justify-center"}>
            {cardType === 'visa' ? (
              <span className="text-white text-xs font-bold">VISA</span>
            ) : (
              <span className="text-white text-xs font-bold">MC</span>
            )}
          </div>
          <div>
            <p className={"text-sm font-medium"}>{cardType === 'visa' ? 'Visa' : 'MasterCard'} •••• {cardNumber.slice(-4)}</p>
            <p className={"text-xs text-gray-500"}>Balance: {balance}</p>
          </div>
        </div>
        <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center border-indigo-700 ${isSelected ? '' : 'border-gray-300'}`}>
          {isSelected && <div className={"w-2 h-2 rounded-full bg-indigo-700"}></div>}
        </div>
      </div>
    </div>
  );
}; 