import { ArrowDownToLine, ArrowUpToLine, ChevronRight } from "lucide-react";

interface TransactionProps {
  id: string;
  merchant: string;
  date: string;
  amount: string;
  isIncoming?: boolean;
  className?: string;
}

export const Transaction = ({
  merchant,
  date,
  amount,
  isIncoming = false,
  className = "",
}: TransactionProps) => {
  return (
    <article className={`py-3 flex items-center justify-between ${className}`}>
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-md ${isIncoming ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'} flex items-center justify-center`}>
          {isIncoming ? <ArrowDownToLine size={20} /> : <ArrowUpToLine size={20} />}
        </div>
        <div>
          <p className="text-sm font-medium">{merchant}</p>
          <p className="text-xs text-gray-500">{new Date(date).toLocaleDateString("ru-MD", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          })}</p>
        </div>
      </div>
      <div className="flex items-center gap-1">
        <p className={`text-sm font-medium ${isIncoming ? 'text-emerald-700' : 'text-red-700'}`}>
          {isIncoming ? '+' : '-'}{amount}
        </p>
        <ChevronRight size={16} className="text-gray-400" />
      </div>
    </article>
  );
}; 