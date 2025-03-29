import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface TransactionProps {
  id: string;
  merchant: string;
  date: string;
  amount: string;
  isIncoming?: boolean;
  iconBgColor: string;
  iconPath: string;
  className?: string;
}

export const Transaction = ({
  id,
  merchant,
  date,
  amount,
  isIncoming = false,
  iconBgColor,
  iconPath,
  className = "",
}: TransactionProps) => {
  // const numericAmount = parseFloat(amount.replace(/[^0-9.-]+/g, ""));

  return (
    <Link href={`/e-receipt/${id}`} className={`py-3 flex items-center justify-between ${className}`}>
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-md ${iconBgColor} flex items-center justify-center`}>
          <Image src={iconPath} alt={merchant} width={20} height={20} className="rounded" />
        </div>
        <div>
          <p className="text-sm font-medium">{merchant}</p>
          <p className="text-xs text-gray-500">{date}</p>
        </div>
      </div>
      <div className="flex items-center gap-1">
        <p className={`text-sm font-medium ${isIncoming ? 'text-emerald-700' : 'text-red-700'}`}>
          {isIncoming ? '+' : '-'}{amount}
        </p>
        <ChevronRight size={16} className="text-gray-400" />
      </div>
    </Link>
  );
}; 