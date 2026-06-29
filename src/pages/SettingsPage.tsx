import { useFitnessStore, defaultSettings } from '../store/useFitnessStore'

export function SettingsPage() {
  const settings = useFitnessStore((state) => state.settings)
  const updateSettings = useFitnessStore((state) => state.updateSettings)

  return (
    <section className="card">
      <h3>Goals</h3>
      <label>
        Daily steps
        <input
          type="number"
          value={settings.goalSteps}
          onChange={(event) => updateSettings({ ...settings, goalSteps: Number(event.target.value) })}
        />
      </label>
      <label>
        Daily calories
        <input
          type="number"
          value={settings.goalCalories}
          onChange={(event) => updateSettings({ ...settings, goalCalories: Number(event.target.value) })}
        />
      </label>
      <label>
        Water glasses
        <input
          type="number"
          value={settings.goalWater}
          onChange={(event) => updateSettings({ ...settings, goalWater: Number(event.target.value) })}
        />
      </label>
      <button type="button" onClick={() => updateSettings(defaultSettings)}>
        Reset goals
      </button>
    </section>
  )
}
