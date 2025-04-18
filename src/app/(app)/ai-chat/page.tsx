'use client';

import { ChevronLeft, SendIcon } from "lucide-react";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { analyzeQuery } from "@/server/actions/ai-analyze";

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

type Analysis = {
  summary: string;
  recommendations: string[];
  key_insights: string[];
  details?: {
    foods_drinks_analysis?: string;
    restaurants_bars_analysis?: string;
    health_analysis?: string;
    automobile_petrol_roads_analysis?: string;
    other_expenses_analysis?: string;
    home_garden_analysis?: string;
    cash_out_analysis?: string;
    income_analysis?: string;
  };
  transaction_stats?: {
    count: number;
    date_range: {
      from: string;
      to: string;
    };
    total_expenses: number;
    total_income: number;
    categories: string[];
  };
};

export default function Page() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Hello! I can help analyze your finances. What would you like to know?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');
  const [analysis, setAnalysis] = useState<Analysis | null>(null);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  // Use React Query mutation for API call
  const { mutate, isPending } = useMutation({
    mutationFn: async (query: string) => {
      return analyzeQuery(query);
    },
    onSuccess: (result) => {
      if (result.success && result.data) {
        // Set analysis data from the server response
        setAnalysis({
          summary: result.data.summary,
          recommendations: result.data.recommendations,
          key_insights: result.data.key_insights,
          details: result.data.details,
          transaction_stats: result.data.data ? {
            count: result.data.data.transaction_count,
            date_range: result.data.data.aggregated?.date_range || { from: '', to: '' },
            total_expenses: result.data.data.aggregated?.total_amount || 0,
            total_income: result.data.transactions?.filter((t: { type: string }) => t.type === 'income')
              .reduce((sum: number, t: { amount: number }) => sum + t.amount, 0) || 0,
            categories: result.data.data.aggregated?.categories || []
          } : undefined
        });
        
        // Add assistant response
        setMessages(prev => [...prev, { 
          role: 'assistant', 
          content: 'Here are the results of your financial analysis:' 
        }]);
      } else {
        // Handle error responses from the server
        const errorMessage = result.error || 'Failed to perform analysis';
        setError(errorMessage);
        setMessages(prev => [...prev, { 
          role: 'assistant', 
          content: `Sorry, an error occurred: ${errorMessage}` 
        }]);
      }
    },
    onError: (error) => {
      console.error('Mutation error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Failed to perform analysis';
      setError(errorMessage);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: `Sorry, an error occurred: ${errorMessage}` 
      }]);
    }
  });

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;
    
    // Add user message to chat
    const userMessage = { role: 'user' as const, content: inputValue };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setError('');
    setAnalysis(null);
    
    // Call the mutation with user's query
    mutate(userMessage.content);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="bg-gradient-to-b from-slate-950 to-blue-950 text-white flex flex-col h-screen">
      {/* Header */}
      <div className="flex items-center p-4 border-b border-slate-800">
        <Link href="/" className="flex items-center gap-2">
          <ChevronLeft size={24} />
          <span className="font-medium">Back</span>
        </Link>
        <div className="flex-1 text-center">
          <h1 className="font-semibold">Financial Assistant</h1>
        </div>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <div className="flex flex-col gap-4">
          {messages.map((message, index) => (
            <div 
              key={index} 
              className={`flex gap-2 ${message.role === 'user' ? 'flex-row-reverse' : ''}`}
            >
              <div 
                className={`${
                  message.role === 'assistant' 
                    ? 'bg-black' 
                    : 'bg-indigo-700'
                } text-white rounded-lg p-3 max-w-[80%]`}
              >
                <p>{message.content}</p>
              </div>
            </div>
          ))}
          
          {/* Analysis Results */}
          {analysis && (
            <div className="flex gap-2">
              <div className="bg-slate-800 text-white rounded-lg p-4 max-w-[90%] w-full">
                {/* Summary */}
                <div className="mb-4">
                  <h3 className="text-blue-400 font-medium mb-2">Summary</h3>
                  <p>{analysis.summary}</p>
                </div>
                
                {/* Transaction Statistics */}
                {analysis.transaction_stats && (
                  <div className="mb-4">
                    <h3 className="text-blue-400 font-medium mb-2">Transaction Statistics</h3>
                    <div className="grid grid-cols-2 gap-2 text-sm mb-2">
                      <div className="bg-slate-700 p-2 rounded">
                        <p className="text-blue-300">Total Transactions</p>
                        <p className="text-xl font-bold">{analysis.transaction_stats.count}</p>
                      </div>
                      <div className="bg-slate-700 p-2 rounded">
                        <p className="text-blue-300">Date Range</p>
                        <p className="text-sm">{new Date(analysis.transaction_stats.date_range.from).toLocaleDateString()} - {new Date(analysis.transaction_stats.date_range.to).toLocaleDateString()}</p>
                      </div>
                      <div className="bg-slate-700 p-2 rounded">
                        <p className="text-blue-300">Total Expenses</p>
                        <p className="text-xl font-bold text-red-400">{analysis.transaction_stats.total_expenses.toFixed(2)}</p>
                      </div>
                      <div className="bg-slate-700 p-2 rounded">
                        <p className="text-blue-300">Total Income</p>
                        <p className="text-xl font-bold text-green-400">{analysis.transaction_stats.total_income.toFixed(2)}</p>
                      </div>
                    </div>
                    <div className="bg-slate-700 p-2 rounded">
                      <p className="text-blue-300">Categories</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {analysis.transaction_stats.categories.map((category, idx) => (
                          <span key={idx} className="bg-slate-600 text-xs px-2 py-1 rounded-full">{category || "Uncategorized"}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Key Insights */}
                <div className="mb-4">
                  <h3 className="text-blue-400 font-medium mb-2">Key Insights</h3>
                  <ul className="list-disc list-inside space-y-1">
                    {analysis.key_insights.map((insight, idx) => (
                      <li key={idx}>{insight}</li>
                    ))}
                  </ul>
                </div>
                
                {/* Recommendations */}
                <div className="mb-4">
                  <h3 className="text-blue-400 font-medium mb-2">Recommendations</h3>
                  <ul className="list-disc list-inside space-y-1">
                    {analysis.recommendations.map((rec, idx) => (
                      <li key={idx}>{rec}</li>
                    ))}
                  </ul>
                </div>

                {/* Details - if available */}
                {analysis.details && (
                  <div>
                    <h3 className="text-blue-400 font-medium mb-2">Details</h3>
                    <div className="space-y-2 text-sm">
                      {analysis.details.foods_drinks_analysis && (
                        <div className="bg-slate-700 p-3 rounded">
                          <h4 className="text-blue-300">Food & Drinks</h4>
                          <p>{analysis.details.foods_drinks_analysis}</p>
                        </div>
                      )}
                      {analysis.details.restaurants_bars_analysis && (
                        <div className="bg-slate-700 p-3 rounded">
                          <h4 className="text-blue-300">Restaurants & Bars</h4>
                          <p>{analysis.details.restaurants_bars_analysis}</p>
                        </div>
                      )}
                      {analysis.details.health_analysis && (
                        <div className="bg-slate-700 p-3 rounded">
                          <h4 className="text-blue-300">Health</h4>
                          <p>{analysis.details.health_analysis}</p>
                        </div>
                      )}
                      {analysis.details.automobile_petrol_roads_analysis && (
                        <div className="bg-slate-700 p-3 rounded">
                          <h4 className="text-blue-300">Automobile/Fuel</h4>
                          <p>{analysis.details.automobile_petrol_roads_analysis}</p>
                        </div>
                      )}
                      {analysis.details.other_expenses_analysis && (
                        <div className="bg-slate-700 p-3 rounded">
                          <h4 className="text-blue-300">Other Expenses</h4>
                          <p>{analysis.details.other_expenses_analysis}</p>
                        </div>
                      )}
                      {analysis.details.home_garden_analysis && (
                        <div className="bg-slate-700 p-3 rounded">
                          <h4 className="text-blue-300">Home & Garden</h4>
                          <p>{analysis.details.home_garden_analysis}</p>
                        </div>
                      )}
                      {analysis.details.cash_out_analysis && (
                        <div className="bg-slate-700 p-3 rounded">
                          <h4 className="text-blue-300">Cash Withdrawals</h4>
                          <p>{analysis.details.cash_out_analysis}</p>
                        </div>
                      )}
                      {analysis.details.income_analysis && (
                        <div className="bg-slate-700 p-3 rounded">
                          <h4 className="text-blue-300">Income</h4>
                          <p>{analysis.details.income_analysis}</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
          
          {/* Error Message */}
          {error && (
            <div className="flex gap-2">
              <div className="bg-red-900 text-white rounded-lg p-3 max-w-[80%]">
                <p className="text-red-300 font-medium">Error</p>
                <p>{error}</p>
              </div>
            </div>
          )}
          
          {/* Loading Indicator */}
          {isPending && (
            <div className="flex gap-2">
              <div className="bg-slate-800 text-white rounded-lg p-3 max-w-[80%]">
                <div className="flex gap-2 items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-150"></div>
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-300"></div>
                  <p className="ml-2">Analyzing...</p>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <div className="bg-slate-950 p-4">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Ask about your finances..."
            className="flex-1 rounded-full px-4 py-2 text-sm focus:outline-none bg-slate-800 text-white"
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={isPending}
          />
          <button 
            className={`${
              isPending || !inputValue.trim() 
                ? 'bg-gray-500' 
                : 'bg-blue-500'
            } text-white rounded-full w-10 h-10 flex items-center justify-center`}
            onClick={handleSendMessage}
            disabled={isPending || !inputValue.trim()}
          >
            <SendIcon size={18} />
          </button>
        </div>
      </div>
    </div>
  );
} 