
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Calendar, Users, FileText } from "lucide-react";

interface Case {
  id: string;
  title: string;
  client: string;
  status: 'active' | 'pending' | 'closed';
  nextDeadline: string;
  documents: number;
}

export const CaseManager = () => {
  const [cases] = useState<Case[]>([
    {
      id: '1',
      title: 'Contract Dispute - ABC Corp',
      client: 'ABC Corporation',
      status: 'active',
      nextDeadline: '2024-01-15',
      documents: 12
    },
    {
      id: '2',
      title: 'Employment Termination Review',
      client: 'Jane Smith',
      status: 'pending',
      nextDeadline: '2024-01-20',
      documents: 8
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'closed': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Case Management</h3>
        <Button className="bg-[#178ACB] hover:bg-[#0E5A8A]">
          <Plus className="w-4 h-4 mr-2" />
          New Case
        </Button>
      </div>

      <div className="space-y-4">
        {cases.map((case_) => (
          <div key={case_.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h4 className="font-medium text-gray-900 mb-1">{case_.title}</h4>
                <p className="text-sm text-gray-600 flex items-center">
                  <Users className="w-3 h-3 mr-1" />
                  {case_.client}
                </p>
              </div>
              <Badge className={getStatusColor(case_.status)}>
                {case_.status}
              </Badge>
            </div>
            
            <div className="flex items-center justify-between text-sm text-gray-500">
              <span className="flex items-center">
                <Calendar className="w-3 h-3 mr-1" />
                Next deadline: {case_.nextDeadline}
              </span>
              <span className="flex items-center">
                <FileText className="w-3 h-3 mr-1" />
                {case_.documents} documents
              </span>
            </div>
            
            <div className="mt-3 pt-3 border-t border-gray-100">
              <Button variant="outline" size="sm" className="text-[#178ACB] border-[#178ACB] hover:bg-[#178ACB] hover:text-white">
                View Details
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
