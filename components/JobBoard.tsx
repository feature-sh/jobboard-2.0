'use client'

import { useState } from 'react'
import Link from 'next/link'
import JobRow from './JobRow'
import { Job } from '@/types/job'

const JobBoard = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [showFilters, setShowFilters] = useState(false)

  // Mock data - In production, this would come from an API
  const mockJobs: Job[] = [
    {
      id: '1',
      title: 'File upload is-fullwidth doesn\'t work without...',
      repository: 'jgthms/bulma',
      price: 200,
      currency: '1.00032 xDAI',
      status: 'Disputed',
      timeRemaining: '17h 49m',
      depositCost: 500,
      depositCurrency: '503 xDAI',
      label: 'Tag',
      network: 'Ethereum',
      endDate: 'Dec 11, 2024 at 11:08',
      arbitrationFee: 303,
      arbitrator: 'Feaature-Polygon'
    },
    {
      id: '2',
      title: 'Fix \'Complex Method\' issue in packages\\core\\...',
      repository: 'mnfst/manifest',
      price: 200,
      currency: '1.00032 xDAI',
      status: 'Engaged',
      timeRemaining: '17h 49m'
    },
    {
      id: '3',
      title: 'Fix \'Complex Method\' issue in packages\\core\\...',
      repository: 'mnfst/manifest',
      price: 200,
      currency: '1.00032 xDAI',
      status: 'Engaged',
      timeRemaining: '17h 49m'
    },
    {
      id: '4',
      title: 'File upload is-fullwidth doesn\'t work without...',
      repository: 'jgthms/bulma',
      price: 200,
      currency: '1.00032 xDAI',
      status: 'Disputed',
      timeRemaining: '17h 49m'
    },
    {
      id: '5',
      title: 'Fix \'Complex Method\' issue in packages\\core\\...',
      repository: 'mnfst/manifest',
      price: 200,
      currency: '1.00032 xDAI',
      status: 'Engaged',
      timeRemaining: '17h 49m'
    },
    {
      id: '6',
      title: 'Fix \'Complex Method\' issue in packages\\core\\...',
      repository: 'mnfst/manifest',
      price: 200,
      currency: '1.00032 xDAI',
      status: 'Engaged',
      timeRemaining: '17h 49m'
    },
    {
      id: '7',
      title: 'Fix \'Complex Method\' issue in packages\\core\\...',
      repository: 'mnfst/manifest',
      price: 200,
      currency: '1.00032 xDAI',
      status: 'Engaged',
      timeRemaining: '17h 49m'
    },
    {
      id: '8',
      title: 'File upload is-fullwidth doesn\'t work without...',
      repository: 'jgthms/bulma',
      price: 200,
      currency: '1.00032 xDAI',
      status: 'Disputed',
      timeRemaining: '17h 49m'
    },
    {
      id: '9',
      title: 'File upload is-fullwidth doesn\'t work without...',
      repository: 'jgthms/bulma',
      price: 200,
      currency: '1.00032 xDAI',
      status: 'Disputed',
      timeRemaining: '17h 49m'
    }
  ]

  const totalPages = 10

  return (
    <div>
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-screen-xl mx-auto">
          {/* Header section with breadcrumb */}
          <div className="mb-8">
            <div className="flex items-center space-x-2 text-sm mb-4">
              <Link href="/docs" className="text-gray-500 hover:text-gray-700">
                Docs
              </Link>
              <span className="text-gray-400">→</span>
              <span className="text-green-600 font-medium">Job board</span>
            </div>
            
            {/* Title and description */}
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-3">Job Board</h1>
                <p className="text-lg text-gray-600 max-w-3xl">
                  Find rewarding GitHub issues, solve them, and get paid in crypto.
                </p>
              </div>
              <button 
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg hover:bg-white transition-colors shadow-sm"
              >
                <span className="text-gray-700 font-medium">Filters</span>
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
              </button>
            </div>

            {/* Filters panel */}
            {showFilters && (
              <div className="mt-6 p-6 bg-white/90 backdrop-blur-sm rounded-lg border border-gray-200 shadow-sm">
                <div className="grid grid-cols-4 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                    <select className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>All</option>
                      <option>Open</option>
                      <option>Engaged</option>
                      <option>Disputed</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Network</label>
                    <select className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>All Networks</option>
                      <option>Ethereum</option>
                      <option>Polygon</option>
                      <option>Arbitrum</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
                    <select className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>Any Price</option>
                      <option>$0 - $100</option>
                      <option>$100 - $500</option>
                      <option>$500+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
                    <select className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>Newest First</option>
                      <option>Price: High to Low</option>
                      <option>Price: Low to High</option>
                      <option>Ending Soon</option>
                    </select>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Jobs Table */}
          <div className="bg-white/90 backdrop-blur-sm rounded-lg border border-gray-200 shadow-sm overflow-hidden">
            <table className="min-w-full">
              <tbody>
                {mockJobs.map((job) => (
                  <JobRow key={job.id} job={job} />
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="mt-8 flex items-center justify-center space-x-1">
            <button 
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              className="p-2 rounded-lg hover:bg-white/80 hover:shadow-sm disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              disabled={currentPage === 1}
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Page numbers */}
            {[1, 2].map(page => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 rounded-lg font-medium transition-all ${
                  currentPage === page 
                    ? 'bg-gray-900 text-white' 
                    : 'hover:bg-white/80 hover:shadow-sm text-gray-700'
                }`}
              >
                {page}
              </button>
            ))}
            
            {totalPages > 5 && (
              <span className="px-3 text-gray-400">...</span>
            )}
            
            {[9, 10].map(page => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 rounded-lg font-medium transition-all ${
                  currentPage === page 
                    ? 'bg-gray-900 text-white' 
                    : 'hover:bg-white/80 hover:shadow-sm text-gray-700'
                }`}
              >
                {page}
              </button>
            ))}

            <button 
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              className="p-2 rounded-lg hover:bg-white/80 hover:shadow-sm disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              disabled={currentPage === totalPages}
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobBoard
