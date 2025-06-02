
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, BookOpen, ExternalLink } from "lucide-react";

export const ResearchAssistant = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = async () => {
    if (!query.trim()) return;
    
    setIsSearching(true);
    // Simulate AI search
    setTimeout(() => {
      setResults([
        {
          title: "Smith v. Jones - Contract Dispute Precedent",
          summary: "Landmark case establishing precedent for breach of contract in commercial agreements...",
          citation: "123 F.3d 456 (2023)",
          relevance: 95
        },
        {
          title: "Employment Law Guidelines - Section 4.2",
          summary: "Recent updates to employment termination procedures and required documentation...",
          citation: "29 CFR 1604.2",
          relevance: 87
        }
      ]);
      setIsSearching(false);
    }, 2000);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">AI Research Assistant</h3>
      
      <div className="flex gap-3 mb-6">
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask a legal question or search for precedents..."
          className="flex-1"
          onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
        />
        <Button 
          onClick={handleSearch}
          disabled={isSearching || !query.trim()}
          className="bg-[#178ACB] hover:bg-[#0E5A8A]"
        >
          {isSearching ? (
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white" />
          ) : (
            <Search className="w-4 h-4" />
          )}
        </Button>
      </div>

      {results.length > 0 && (
        <div className="space-y-4">
          <h4 className="font-medium text-gray-900">Research Results</h4>
          {results.map((result, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-2">
                <h5 className="font-medium text-gray-900 flex-1">{result.title}</h5>
                <span className="text-sm text-[#178ACB] font-medium">{result.relevance}% match</span>
              </div>
              <p className="text-gray-600 text-sm mb-3">{result.summary}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500 flex items-center">
                  <BookOpen className="w-3 h-3 mr-1" />
                  {result.citation}
                </span>
                <Button variant="ghost" size="sm" className="text-[#178ACB] hover:text-[#0E5A8A]">
                  View Full Text
                  <ExternalLink className="w-3 h-3 ml-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
