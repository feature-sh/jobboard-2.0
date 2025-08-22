'use client'

import { useState } from 'react'
import { Job } from '@/types/job'

interface JobRowProps {
  job: Job
}

const JobRow = ({ job }: JobRowProps) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Disputed':
        return 'text-red-500'
      case 'Engaged':
        return 'text-green-500'
      case 'Open':
        return 'text-blue-500'
      default:
        return 'text-gray-500'
    }
  }

  return (
    <>
      <tr 
        className="hover:bg-gray-50/50 cursor-pointer transition-all border-b border-gray-200"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <td className="py-5 px-6">
          <div className="flex items-start">
            <div className="flex-1">
              <div className="flex items-center flex-wrap gap-x-2">
                <a 
                  href={`https://github.com/${job.repository}`}
                  className="font-medium text-gray-900 underline decoration-gray-300 hover:decoration-gray-500 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {job.title}
                </a>
                <span className="text-gray-500 text-sm">
                  in {job.repository}
                </span>
              </div>
            </div>
          </div>
        </td>
        <td className="py-5 px-6 text-right">
          <div className="flex flex-col items-end">
            <span className="font-semibold text-gray-900">${job.price}</span>
            <span className="text-xs text-gray-500">{job.currency}</span>
          </div>
        </td>
        <td className="py-5 px-6 text-center">
          <span className={`font-medium ${getStatusColor(job.status)}`}>
            {job.status}
          </span>
        </td>
        <td className="py-5 px-6 text-right">
          <span className="text-gray-600 text-sm">{job.timeRemaining}</span>
        </td>
        <td className="py-5 px-6 text-center">
          <svg 
            className={`w-5 h-5 text-gray-400 transform transition-transform ${isExpanded ? 'rotate-180' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </td>
      </tr>
      
      {isExpanded && (
        <tr className="border-b border-gray-200">
          <td colSpan={5} className="px-6 pb-6 pt-2 bg-gray-50/30">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div>
                <h4 className="text-sm font-medium text-gray-500 mb-1">Deposit cost</h4>
                <p className="text-gray-900 font-medium">
                  ${job.depositCost || 500} = {job.depositCurrency || '503 xDAI'}
                </p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-500 mb-1">Label</h4>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  {job.label || 'Tag'}
                </span>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-500 mb-1">Network</h4>
                <p className="text-gray-900 font-medium">{job.network || 'Ethereum'}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-500 mb-1">End date</h4>
                <p className="text-gray-900 font-medium">{job.endDate || 'Dec 11, 2024 at 11:08'}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-500 mb-1">Arbitration fee</h4>
                <p className="text-gray-900 font-medium">${job.arbitrationFee || 303}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-500 mb-1">Arbitrator</h4>
                <p className="text-gray-900 font-medium flex items-center">
                  {job.arbitrator || 'Feaature-Polygon'}
                  <a href="#" className="ml-1 text-blue-500 hover:text-blue-700">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </p>
              </div>
            </div>
          </td>
        </tr>
      )}
    </>
  )
}

export default JobRow
