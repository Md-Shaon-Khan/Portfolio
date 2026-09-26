'use client'

import { motion } from 'framer-motion'
import { Cpu, Code2, Database, Layers, BrainCircuit, Sparkles } from 'lucide-react'

const groups = [
  {
    title: 'Languages',
    icon: Code2,
    items: ['Python', 'C++', 'C', 'Java', 'JavaScript', 'HTML5', 'CSS3'],
  },
  {
    title: 'Machine Learning',
    icon: BrainCircuit,
    items: [
    'Linear Regression',
    'Logistic Regression',
    'SGD Regressor',
    'SGD Classifier',
    'K-Nearest Neighbors (KNN)',
    'Naive Bayes',
    'Decision Trees',
    'Random Forest',
    'Support Vector Machine (SVM)',
    'AdaBoost',
    'Gradient Boosting',
    'XGBoost',
    'LightGBM',
    'CatBoost',
    'K-Means Clustering',
    'DBSCAN',
    'Principal Component Analysis (PCA)',
    ],
  },
  {
    title: 'Deep Learning & Vision',
    icon: Cpu,
    items: [
      'ANN & CNN Architectures',
      'RNN / LSTM / GRU',
      'Bidirectional RNN',
      'Transformers',
      'ResNet & DenseNet',
      'ConvNeXt',
    ],
  },
  {
    title: 'Generative AI & LLMs',
    icon: Sparkles,
    items: [
      'LangChain',
      'RAG Architecture',
      'Vector Databases & Embeddings',
      'Hugging Face',
      'Prompt Engineering',
    ],
  },
  {
    title: 'AI / ML Frameworks & Libs',
    icon: Layers,
    items: [
      'TensorFlow',
      'Keras',
      'PyTorch',
      'Scikit-learn',
      'NumPy',
      'Pandas',
      'Matplotlib & Seaborn',
      'SciPy',
    ],
  },
  {
    title: 'Tools & Environments',
    icon: Database,
    items: [
      'FastAPI',
      'Jupyter',
      'MySQL',
      'PostgreSQL',
      'Git & GitHub',
      'Arduino',
      'Streamlit',
    ],
  },
]

export default function TechStackGrid() {
  return (
    <section id="skills" className="relative py-24">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12">
          <span className="section-label">Tech Stack</span>
          <h2 className="section-heading">Modern technical skill grid</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((group, index) => {
            const Icon = group.icon
            return (
              <motion.article
                key={group.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="glass-card flex flex-col rounded-[32px] border border-slate-700/60 bg-slate-900/85 p-6 shadow-glow"
              >
                <div className="mb-6 flex items-center gap-3 text-cyan-300">
                  <Icon size={22} />
                  <h3 className="text-xl font-semibold text-slate-100">{group.title}</h3>
                </div>

                <div className="grid gap-2.5">
                  {group.items.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-slate-700/50 bg-slate-950/80 px-4 py-2.5 text-sm text-slate-200 transition-all hover:-translate-y-0.5 hover:border-cyan-400/30 hover:bg-slate-900/90"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}