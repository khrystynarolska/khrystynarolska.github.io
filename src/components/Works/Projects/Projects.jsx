import s from './Projects.module.scss'
import Project from './Project/Project'

import imgLeospa from './assets/Leospa.png'

const myProjects = [
  {
    src: imgLeospa,
    lable: 'Leospa',
    technologies: 'Vue js',
    value: 'This is an vue project. This is a Leospa project with well-known components (hamburger menu, scroll to, shapes, tabs, etc.).',
    href: 'https://khrystynarolska.github.io/leospa-vue-project/'
  },
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