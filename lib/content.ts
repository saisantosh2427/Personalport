const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

/**
 * Centralized profile/contact info. Update these values to change LinkedIn,
 * GitHub, email, or the resume file across the entire site in one place.
 * To replace the resume later: drop the new file in `public/resume/` and
 * update `resumeFileName` below (no other code needs to change).
 */
export const profile = {
  name: 'Sai Santosh',
  email: 'santoshsai1212@yahoo.com',
  linkedin: 'https://www.linkedin.com/in/s-santosh-623510103/',
  github: 'https://github.com/saisantosh2427',
  resumeFileName: 'Myresume.DOCX',
  location: 'Sunnyvale, CA',
};

export const links = {
  linkedin: profile.linkedin,
  github: profile.github,
  resume: `${basePath}/resume/${profile.resumeFileName}`,
  email: `mailto:${profile.email}`,
  emailAddress: profile.email,
  location: profile.location,
};

export const roles = [
  'Artificial Intelligence Engineer',
  'Machine Learning Engineer',
  'Generative AI Specialist',
];

export const recruitingInfo = {
  experience: '3+ Years AI/ML Experience',
  specializations: 'Artificial Intelligence / Machine Learning / Generative AI',
  education: 'DBA — Applied Artificial Intelligence, Currently Pursuing',
  workAuthorization: 'Work Authorization: CPT',
  availability: 'Open to Full-Time Opportunities',
};

export const experiences = [
  {
    company: 'U.S. Bank', role: 'Artificial Intelligence Engineer', date: 'March 2025 – Present',
    focus: 'Artificial Intelligence, Generative AI, machine learning, and intelligent financial applications.',
    bullets: ['Design and develop AI and machine learning solutions for financial-services use cases using large transactional and operational datasets.', 'Build and evaluate machine learning models using Python, TensorFlow, PyTorch, and Scikit-learn.', 'Perform data preprocessing, exploratory analysis, transformation, and feature engineering using Pandas, NumPy, SQL, and Apache Spark.', 'Work with Generative AI and Large Language Model technologies including AWS Bedrock, Hugging Face, LangChain, LlamaIndex, RAG, embeddings, and AI agents.', 'Develop and integrate REST-based AI/ML services with existing enterprise applications.', 'Use AWS SageMaker for scalable model training, deployment, and production inference.', 'Use MLflow for experiment tracking, model comparison, reproducibility, and lifecycle management.', 'Containerize AI/ML services with Docker and support deployment automation through GitHub Actions and CI/CD practices.', 'Monitor AI and ML services for model performance, latency, throughput, reliability, and changing data behavior.', 'Work with engineering, analytics, and business teams to move AI solutions from experimentation into reliable production environments.'],
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'AWS SageMaker', 'AWS Bedrock', 'LangChain', 'LlamaIndex', 'MLflow', 'Docker', 'SQL', 'REST APIs'],
  },
  {
    company: 'Optum', role: 'Machine Learning Engineer', date: 'January 2024 – February 2025',
    focus: 'Healthcare AI, predictive analytics, and production machine learning.',
    bullets: ['Developed machine learning solutions supporting healthcare predictive analytics using claims, clinical, and operational datasets.', 'Built, trained, evaluated, and tuned classification and predictive models using Python, TensorFlow, and Scikit-learn.', 'Performed data cleaning, transformation, feature engineering, and quality checks using Pandas and NumPy.', 'Developed end-to-end machine learning pipelines covering preprocessing, training, evaluation, deployment, and production scoring.', 'Deployed machine learning workloads using AWS SageMaker and Docker.', 'Used MLflow for experiment tracking, model comparison, model lifecycle management, and reproducibility.', 'Monitored production models for prediction consistency, latency, throughput, and model behavior.', 'Supported model tuning and retraining based on model and data performance.', 'Worked with engineering, product, analytics, and data teams to move models from experimentation into production.', 'Supported analytical outputs and visualization where appropriate.'],
    technologies: ['Python', 'TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy', 'AWS SageMaker', 'MLflow', 'Docker', 'PostgreSQL', 'SQL', 'Power BI', 'REST APIs'],
  },
  {
    company: 'Cognizant', role: 'Junior Machine Learning Engineer', date: 'July 2021 – August 2022',
    focus: 'Machine learning development, predictive analytics, and foundational MLOps.',
    bullets: ['Supported development of machine learning and predictive analytics solutions across data preparation, model development, evaluation, and deployment activities.', 'Worked with structured datasets using Python, Pandas, NumPy, and SQL.', 'Performed data cleaning, transformation, aggregation, missing-value handling, and exploratory analysis.', 'Developed and evaluated regression and classification models using Scikit-learn.', 'Supported feature engineering to improve model quality and predictive capability.', 'Evaluated models using appropriate metrics such as RMSE, MAE, precision, recall, and F1-score depending on the use case.', 'Supported forecasting and segmentation models.', 'Created analytical visualizations using Power BI and Matplotlib.', 'Assisted with containerizing machine learning applications using Docker.', 'Supported REST API integration for exposing machine-learning predictions to applications.', 'Used Git, GitHub, and JIRA for source control and development collaboration.'],
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'SQL', 'PostgreSQL', 'Docker', 'Power BI', 'Matplotlib', 'Git', 'GitHub', 'REST APIs'],
  },
];

export const projects = [
  { number: '01', name: 'Enterprise RAG Knowledge Assistant', type: 'Generative AI / LLM systems', description: 'A production-oriented Generative AI application that answers questions across enterprise documents with context-aware responses grounded in retrieved source content.', architecture: ['Document ingestion', 'Chunking', 'Embeddings', 'Vector database', 'Semantic retrieval', 'LLM generation', 'Source citations', 'Evaluation'], technologies: ['Python', 'AWS Bedrock', 'LangChain', 'LlamaIndex', 'Hugging Face', 'Vector Database', 'FastAPI', 'Docker'], features: ['Document ingestion', 'Semantic search', 'Retrieval-Augmented Generation', 'Source-aware responses', 'Prompt management', 'LLM evaluation'], accent: 'lime' },
  { number: '02', name: 'Production Machine Learning Pipeline', type: 'MLOps / platform engineering', description: 'An end-to-end MLOps system demonstrating model development, experiment tracking, deployment, monitoring, and automated retraining.', architecture: ['Data ingestion', 'Data preprocessing', 'Feature engineering', 'Training', 'Experiment tracking', 'Model registry', 'Deployment', 'Monitoring', 'Retraining'], technologies: ['Python', 'Scikit-learn', 'MLflow', 'Docker', 'GitHub Actions', 'AWS SageMaker', 'FastAPI'], features: ['Reproducible training', 'Model lifecycle management', 'Automated delivery', 'Production monitoring'], accent: 'orange' },
  { number: '03', name: 'Agentic AI Workflow Automation', type: 'Agents / business automation', description: 'An AI agent that interacts with external APIs, retrieves information, makes tool-based decisions, and automates multi-step business workflows.', architecture: ['Tool calling', 'API integration', 'Database retrieval', 'Workflow automation', 'Context management', 'Structured output', 'Observability'], technologies: ['Python', 'LLMs', 'AWS Bedrock', 'LangChain', 'Tool Calling', 'REST APIs', 'PostgreSQL', 'Docker'], features: ['Tool calling', 'API integration', 'Context management', 'Structured output', 'Observability'], accent: 'blue' },
  { number: '04', name: 'Intelligent Fraud Detection Platform', type: 'Classical ML / financial services', description: 'A machine learning solution for identifying suspicious financial transaction activity using behavioral and transaction-level features.', architecture: ['Feature engineering', 'Imbalanced-data handling', 'Model training', 'Model evaluation', 'Explainability', 'Prediction API'], technologies: ['Python', 'Scikit-learn', 'Apache Spark', 'MLflow', 'AWS SageMaker', 'Docker'], features: ['Behavioral signals', 'Imbalanced learning', 'Explainable predictions', 'Prediction API'], accent: 'pink' },
];

export const skillGroups = [
  ['Artificial Intelligence', 'Artificial Intelligence', 'Machine Learning', 'Generative AI', 'Large Language Models', 'RAG', 'AI Agents', 'Prompt Engineering', 'Deep Learning', 'Natural Language Processing', 'Predictive Modeling'],
  ['Programming', 'Python', 'Java', 'Scala', 'SQL'],
  ['ML Frameworks', 'PyTorch', 'TensorFlow', 'Scikit-learn', 'Hugging Face', 'Apache Spark'],
  ['Generative AI', 'AWS Bedrock', 'LangChain', 'LlamaIndex', 'Hugging Face Transformers', 'Embeddings', 'Vector Search', 'LLM Applications'],
  ['MLOps', 'MLflow', 'Docker', 'GitHub Actions', 'Model Deployment', 'Model Monitoring', 'REST APIs', 'CI/CD', 'Containerized ML Services'],
  ['AWS', 'SageMaker', 'Bedrock', 'S3', 'EC2', 'Lambda', 'Glue', 'Athena', 'Redshift', 'Kinesis', 'ECS'],
  ['Data', 'Pandas', 'NumPy', 'PostgreSQL', 'MySQL', 'MongoDB'],
  ['Visualization', 'Power BI', 'Matplotlib'],
];

export const interests = ['Applied Artificial Intelligence', 'Generative AI', 'Enterprise LLM Applications', 'AI Agents', 'Retrieval-Augmented Generation', 'AI Transformation', 'Responsible AI', 'Machine Learning Operations', 'AI Strategy', 'Human-AI Collaboration'];
