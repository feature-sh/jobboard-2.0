# Job Board

A modern job board application for finding and solving GitHub issues to get paid in crypto.

## Features

- **Desktop-optimized design** - Clean, professional interface for desktop browsers
- **GitHub issue integration** - Browse available GitHub issues with bounties
- **Expandable job details** - Click on any job to see more information
- **Status tracking** - Visual indicators for Disputed, Engaged, and Open issues
- **Filtering system** - Filter by status, network, price range, and sort options
- **Pagination** - Navigate through multiple pages of job listings

## Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **React 19** - Latest React features

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
cd /Users/n1c0/dev/jobboard
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
jobboard/
├── app/
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/
│   ├── JobBoardHeader.tsx  # Header component
│   ├── JobBoard.tsx        # Main job board component
│   └── JobRow.tsx          # Individual job row component
├── types/
│   └── job.ts           # TypeScript type definitions
└── public/
    └── logo.svg         # Logo image
```

## Features Implemented

### Job Board Table
- Displays GitHub issues with bounties
- Shows issue title, repository, price, status, and time remaining
- Hover effects for better UX

### Expandable Rows
- Click any job to expand and see additional details:
  - Deposit cost
  - Label/tags
  - Network (Ethereum, Polygon, etc.)
  - End date
  - Arbitration fee
  - Arbitrator information

### Filters Panel
- Status filter (All, Open, Engaged, Disputed)
- Network selection
- Price range filtering
- Sort options (Newest, Price High/Low, Ending Soon)

### Pagination
- Navigate between pages of results
- Visual indication of current page
- Previous/Next navigation buttons

## Customization

### Adding Real Data
Replace the mock data in `components/JobBoard.tsx` with API calls to your backend:

```typescript
// Replace mock data with API call
const fetchJobs = async () => {
  const response = await fetch('/api/jobs');
  const data = await response.json();
  return data;
};
```

### Styling
- Colors and theme can be customized in `app/globals.css`
- Tailwind classes can be modified in component files
- Responsive breakpoints can be added for tablet/mobile support

## Future Enhancements

- [ ] Mobile responsive design
- [ ] Real-time data updates
- [ ] User authentication (NextAuth + GitHub OAuth)
- [ ] Advanced filtering and search
- [ ] Job application functionality
- [ ] Wallet integration for crypto payments
- [ ] Email notifications
- [ ] User profiles and reputation system

## License

MIT
