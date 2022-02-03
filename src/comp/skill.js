import classes from '../App.module.css'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js'

import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend)

export default function skill() {
  const options = {
    indexAxis: 'y',
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
  }

  const languages = {
    labels: ['C/C++', 'Dart', 'Java', 'JavaScript', 'Python'],
    datasets: [
      {
        label: 'Languages',
        data: [70, 40, 60, 65, 70, 100],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  }
  const devtools = {
    labels: ['React.Js', 'Next.Js', 'Flutter', 'Tkinter'],
    datasets: [
      {
        label: 'Frameworks',
        data: [80, 70, 40, 50, 100],
        borderColor: 'rgb(80, 51, 240)',
        backgroundColor: 'rgba(101, 78, 235, 0.5)',
      },
    ],
  }

  return (
    <div className={classes.SkillView} id="SkillView">
      <h1 id="#skills" className={classes.ViewHeading}>
        My Skills
      </h1>
      <div className={classes.SkillCard}>
        <div className={classes.BarChart}>
          <Bar options={options} data={languages} />
        </div>
        <div className={classes.BarChart}>
          <Bar options={options} data={devtools} />
        </div>
      </div>
    </div>
  )
}
