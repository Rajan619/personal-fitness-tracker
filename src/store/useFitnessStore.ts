import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type DailyLog = {
  date: string
  steps: number
  calories: number
  protein: number
  fiber: number
  water: number
  sleep: number
  mood: number
  energy: number
  notes: string
  completed: boolean
}

export type Settings = {
  goalSteps: number
  goalCalories: number
  goalWater: number
  goalProtein: number
  goalSleep: number
}

export const defaultSettings: Settings = {
  goalSteps: 10000,
  goalCalories: 2200,
  goalWater: 8,
  goalProtein: 120,
  goalSleep: 8,
}

type FitnessStore = {
  logs: Record<string, DailyLog>
  selectedDate: string
  settings: Settings
  saveLog: (date: string, values: Partial<DailyLog>) => Promise<void>
  updateSettings: (settings: Settings) => void
}

export const useFitnessStore = create<FitnessStore>()(
  persist(
    (set, get) => ({
      logs: {},
      selectedDate: new Date().toISOString().slice(0, 10),
      settings: defaultSettings,
      saveLog: async (date, values) => {
        const current = get().logs[date] ?? {
          date,
          steps: 0,
          calories: 0,
          protein: 0,
          fiber: 0,
          water: 0,
          sleep: 0,
          mood: 0,
          energy: 0,
          notes: '',
          completed: false,
        }

        set((state) => ({
          logs: {
            ...state.logs,
            [date]: {
              ...current,
              ...values,
            },
          },
        }))
      },
      updateSettings: (settings) => set({ settings }),
    }),
    {
      name: 'fitness-tracker-storage',
      partialize: (state) => ({ logs: state.logs, settings: state.settings, selectedDate: state.selectedDate }),
    },
  ),
)
