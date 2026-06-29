import { beforeEach, describe, expect, it } from 'vitest'
import { useFitnessStore, defaultSettings } from './useFitnessStore'

describe('useFitnessStore', () => {
  beforeEach(() => {
    useFitnessStore.setState({
      logs: {},
      selectedDate: '2026-06-29',
      settings: defaultSettings,
    })
  })

  it('stores a daily log entry for a selected date', async () => {
    await useFitnessStore.getState().saveLog('2026-06-29', {
      steps: 12000,
      calories: 2100,
    })

    const log = useFitnessStore.getState().logs['2026-06-29']
    expect(log?.steps).toBe(12000)
    expect(log?.calories).toBe(2100)
  })
})
