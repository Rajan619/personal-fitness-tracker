const workouts = [
  {
    name: 'Strength A',
    description: 'Full-body strength session focused on compound lifts.',
    duration: '35 min',
  },
  {
    name: 'Stretching',
    description: 'Mobility and recovery flow to support flexibility.',
    duration: '15 min',
  },
  {
    name: 'Walking',
    description: 'Low-impact cardio to build consistency and recovery.',
    duration: '25 min',
  },
]

export function WorkoutsPage() {
  return (
    <section className="page-grid">
      {workouts.map((workout) => (
        <article className="card" key={workout.name}>
          <h3>{workout.name}</h3>
          <p>{workout.description}</p>
          <p className="meta">Suggested time: {workout.duration}</p>
        </article>
      ))}
    </section>
  )
}
