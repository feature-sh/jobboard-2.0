import FeatureHeader from '@/components/FeatureHeader'
import JobBoard from '@/components/JobBoard'

export default function Home() {
  return (
    <div className="min-h-screen">
      <FeatureHeader />
      <main>
        <JobBoard />
      </main>
    </div>
  );
}
