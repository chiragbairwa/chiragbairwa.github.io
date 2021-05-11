import classes from '../App.module.css';
import {PieChart} from 'react-minimal-pie-chart';

export default function skill(){
    const data1= [
        { title: 'Dart', value: 10, color: 'rgb(126, 116, 219)' },
        { title: 'C/C++', value: 18, color: 'rgb(46, 56, 134)' },
        { title: 'JavaScript', value: 20, color: 'rgb(75, 75, 122)' },
        { title: 'Python', value: 20, color: 'rgb(62, 52, 202)' },
      ];
    const data2= [
    { title: 'Terminal', value: 10, color: 'rgb(62, 52, 202)' },
    { title: 'ReactJs', value: 18, color: 'rgb(75, 75, 122)' },
    { title: 'Flutter', value: 10, color: 'rgb(46, 56, 134)' },
    { title: 'DevOps', value: 15, color: 'rgb(126, 116, 219)' },
    ];
    return(
        <div className={classes.SkillView} id="SkillView">
          <h1 id="#skills" className={classes.ViewHeading}>My Skills</h1>
          <div className={classes.SkillCard}>
            <div className={classes.PieChart}>         
              <PieChart id="PieChart"
                data={data1}
                radius={PieChart.defaultProps.radius - 7}
                segmentsShift={(index) => (index === 2 ? 0 : 1.5)}
                label={({ dataEntry }) => dataEntry.title}
                labelStyle={{
                  fontSize: '6px',
                  fontWeight: '600',
                  color: 'white',
                }}
                // lengthAngle={360} animate
              />
              <PieChart id="PieChart2"
                data={data2}
                radius={PieChart.defaultProps.radius - 7}
                segmentsShift={(index) => (index === 2 ? 0 : 1.5)}
                label={({ dataEntry }) => dataEntry.title}
                labelStyle={{
                  fontSize: '6px',
                  fontWeight: '600',
                  color: 'white',
                }}
                // lengthAngle={360} animate
              />
            </div>
          </div>
        </div>
    );
}