import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const SKILL_GROUPS = [
  {
    label: 'Languages',
    icon: '{ }',
    color: 'punch',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'C++', level: 75 },
      { name: 'C', level: 70 },
      { name: 'Java', level: 72 },
      { name: 'JavaScript', level: 78 },
      { name: 'TypeScript', level: 75 },
    ],
  },
  {
    label: 'Machine Learning',
    icon: '∿',
    color: 'cerulean',
    skills: [
      { name: 'Linear / SGD Regressor', level: 88 },
      { name: 'Logistic Regression', level: 85 },
      { name: 'Decision Trees & RF', level: 84 },
      { name: 'XGBoost / CatBoost', level: 82 },
      { name: 'AdaBoost / Ensembles', level: 80 },
    ],
  },
  {
    label: 'Deep Learning & Vision',
    icon: '◈',
    color: 'frost',
    skills: [
      { name: 'ANN & CNN Architectures', level: 85 },
      { name: 'RNN / LSTM / GRU / BiRNN', level: 82 },
      { name: 'ResNet & DenseNet', level: 80 },
      { name: 'ConvNeXt', level: 76 },
      { name: 'Transformers', level: 78 },
    ],
  },
  {
    label: 'GenAI & Frameworks',
    icon: '⚙',
    color: 'punch',
    skills: [
      { name: 'LangChain & RAG', level: 84 },
      { name: 'TensorFlow & Keras', level: 82 },
      { name: 'Scikit-learn', level: 85 },
      { name: 'FastAPI', level: 88 },
      { name: 'React', level: 80 },
    ],
  },
  {
    label: 'Data & Libraries',
    icon: '∑',
    color: 'frost',
    skills: [
      { name: 'NumPy & Pandas', level: 90 },
      { name: 'Matplotlib & Seaborn', level: 85 },
      { name: 'SciPy & OpenCV', level: 78 },
      { name: 'Vector DBs / Embeddings', level: 75 },
    ],
  },
  {
    label: 'Tools & Databases',
    icon: '◎',
    color: 'cerulean',
    skills: [
      { name: 'MySQL & PostgreSQL', level: 82 },
      { name: 'MongoDB', level: 80 },
      { name: 'Git & GitHub Actions', level: 88 },
      { name: 'Linux & Docker', level: 74 },
      { name: 'Arduino / ESP32', level: 76 },
    ],
  },
]

const colorMap: Record<string, string> = {
  punch: '#E63946',
  cerulean: '#457B9D',
  frost: '#A8DADC',
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

function SkillBar({
  name,
  level,
  color,
  inView,
}: {
  name: string
  level: number
  color: string
  inView: boolean
}) {
  return (
    <div className="mb-4 last:mb-0">
      <div className="flex justify-between mb-1.5">
        <span className="font-mono text-xs text-honey/80">{name}</span>
        <span className="font-mono text-xs text-frost/40">{level}%</span>
      </div>
      <div className="h-px bg-frost/10 relative overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 h-full"
          style={{ background: colorMap[color] || '#457B9D', opacity: 0.7 }}
          initial={{ width: 0 }}
          animate={{ width: inView ? `${level}%` : 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="skills" ref={ref} className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          custom={0}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="mb-16"
        >
          <p className="section-sub">03 — Skills</p>
          <h2 className="section-heading">Technical Arsenal</h2>
        </motion.div>

        {/* 6-Card Grid: 1 col on mobile, 2 cols on tablet, 3 cols on desktop */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILL_GROUPS.map((group, i) => (
            <motion.div
              key={group.label}
              variants={fadeUp}
              custom={i + 1}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              className="glass-card rounded-sm p-6 hover:border-frost/30 transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-6">
                <span
                  className="font-mono text-lg"
                  style={{ color: colorMap[group.color] }}
                >
                  {group.icon}
                </span>
                <p className="font-mono text-xs tracking-widest uppercase text-frost/60">
                  {group.label}
                </p>
              </div>

              {group.skills.map((skill) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color={group.color}
                  inView={inView}
                />
              ))}
            </motion.div>
          ))}
        </div>

        {/* Bottom tags — full skill cloud */}
        <motion.div
          variants={fadeUp}
          custom={7}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="mt-12 glass-card rounded-sm p-6"
        >
          <p className="font-mono text-xs text-frost/40 tracking-widest uppercase mb-4">
            Also Experienced With
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              'Linear Regression',
              'Logistic Regression',
              'SGD Regressor',
              'Decision Trees',
              'Random Forest',
              'XGBoost',
              'CatBoost',
              'AdaBoost',
              'ANN',
              'CNN',
              'RNN',
              'LSTM',
              'GRU',
              'Bidirectional RNN',
              'Transformers',
              'ResNet',
              'DenseNet',
              'ConvNeXt',
              'LangChain',
              'RAG',
              'Vector DBs',
              'REST APIs',
              'JWT',
              'Pydantic',
              'Postman',
              'Streamlit',
              'Jupyter',
              'MQTT',
              'Render',
              'Netlify',
            ].map((tag) => (
              <span
                key={tag}
                className="tech-badge hover:border-frost/50 transition-colors cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}