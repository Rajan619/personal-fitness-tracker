import { useMemo } from 'react'
import { useFitnessStore } from '../store/useFitnessStore'

export function DashboardPage() {
  const logs = useFitnessStore((state) => state.logs)
  const selectedDate = useFitnessStore((state) => state.selectedDate)
  const settings = useFitnessStore((state) => state.settings)
  const saveLog = useFitnessStore((state) => state.saveLog)

  const today = logs[selectedDate] ?? {
    steps: 0,
    calories: 0,
    protein: 0,
    water: 0,
    sleep: 0,
    mood: 0,
    energy: 0,
    notes: '',
    completed: false,
  }

  const completion = useMemo(() => {
    const values = [today.steps >= settings.goalSteps, today.calories >= settings.goalCalories, today.water >= settings.goalWater]
    const met = values.filter(Boolean).length
    return Math.round((met / values.length) * 100)
  }, [today, settings])

  return (
    <section className="page-grid">
      <div className="card hero-card">
        <p className="eyebrow">Today</p>
        <h2>{new Date(selectedDate).toLocaleDateString('en', { weekday: 'long', month: 'short', day: 'numeric' })}</h2>
        <div className="stat-row">
          <div>
            <strong>{completion}%</strong>
            <span>Completion</span>
          </div>
          <div>
            <strong>3</strong>
            <span>Day streak</span>
          </div>
          <div>
            <strong>12</strong>
            <span>Best streak</span>
          </div>
        </div>
      </div>

      <div className="card">
        <h3>Daily check-in</h3>
        <label>
          Steps
          <input
            type="number"
            value={today.steps}
            onChange={(event) => void saveLog(selectedDate, { steps: Number(event.target.value) })}
          />
        </label>
        <label>
          Calories
          <input
            type="number"
            value={today.calories}
            onChange={(event) => void saveLog(selectedDate, { calories: Number(event.target.value) })}
          />
        </label>
        <label>
          Water
          <input
            type="number"
            value={today.water}
            onChange={(event) => void saveLog(selectedDate, { water: Number(event.target.value) })}
          />
        </label>
        <label>
          Notes
          <textarea
            value={today.notes}
            onChange={(event) => void saveLog(selectedDate, { notes: event.target.value })}
          />
        </label>
      </div>

      <div className="card">
        <h3>Goals</h3>
        <ul className="goal-list">
          <li>Steps: {today.steps}/{settings.goalSteps}</li>
          <li>Calories: {today.calories}/{settings.goalCalories}</li>
          <li>Water: {today.water}/{settings.goalWater}</li>
          <li>Protein: {today.protein}/{settings.goalProtein}</li>
        </ul>
      </div>
    </section>
  )
}
