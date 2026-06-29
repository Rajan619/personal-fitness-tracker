import { useFitnessStore } from '../store/useFitnessStore'

export function AnalyticsPage() {
  const logs = useFitnessStore((state) => state.logs)
  const entries = Object.values(logs)
  const averageSteps = entries.length
    ? Math.round(entries.reduce((sum, entry) => sum + entry.steps, 0) / entries.length)
    : 0
  const averageWater = entries.length
    ? Math.round(entries.reduce((sum, entry) => sum + entry.water, 0) / entries.length)
    : 0

  return (
    <section className="page-grid">
      <div className="card">
        <h3>Weekly snapshot</h3>
        <p>Average steps: {averageSteps}</p>
        <p>Average water: {averageWater}</p>
      </div>
      <div className="card">
        <h3>Recent entries</h3>
        <ul className="goal-list">
          {entries.slice(0, 5).map((entry) => (
            <li key={entry.date}>{entry.date}: {entry.steps} steps</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
