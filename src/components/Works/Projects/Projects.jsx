import s from './Projects.module.scss';
import Project from './Project/Project';

import imgBhromaon from './assets/Bhromaon.png'
import imgMonticello from './assets/Monticello.png'
import imgLeospa from './assets/Leospa.png';

const myProjects = [
  {
    src: imgBhromaon,
    lable: 'Bhromaon',
    technologies: 'HTML, CSS',
    value: 'This is my first project. I wrote it with help HTML and CSS',
    href: ' https://khrystynarolska.github.io/bhromaon/'
  },
  {
    src: imgMonticello,
    lable: 'Monticello',
    technologies: 'HTML, SCSS, JavaScript',
    value: 'This project is implemented with HTML, SCSS and JavaScript (scroll, slow scroll, slider, hamburger menu)',
    href: ' https://khrystynarolska.github.io/monticello/'
  },
  {
    src: imgLeospa,
    lable: 'Leospa',
    technologies: 'Vue js',
    value: 'This is an vue project. This is a Leospa project with well-known components (hamburger menu, scroll to, shapes, tabs, etc.)',
    href: 'https://khrystynarolska.github.io/leospa-vue-project/'
  }
]

const Projects = () => {
  return (
    <div className={s.projects}>
      {myProjects.map((i, idx) => (
          <Project key={idx} src={i.src} label={i.lable} technologies={i.technologies} value={i.value} href={i.href} />
        ))}
    </div>
  )
}

export default Projects