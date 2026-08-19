export const links = {
  linkedin: '#linkedin-url',
  github: '#github-url',
  resume: '#resume-file',
  email: 'mailto:[ADD EMAIL ADDRESS]',
  location: '[ADD LOCATION]',
};

export const roles = [
  'AI/ML Engineer',
  'Machine Learning Engineer',
  'Generative AI Engineer',
  'Applied AI Engineer',
  'AI Software Engineer',
  'LLM Engineer',
  'MLOps Engineer',
];

export const experiences = [
  {
    company: 'Optum', role: 'Machine Learning Engineer', date: 'September 2023 – Present',
    focus: 'Healthcare AI and predictive analytics.',
    bullets: ['Design and develop machine learning models for predictive healthcare analytics.', 'Work with healthcare claims and clinical datasets to identify patterns associated with high-risk patients.', 'Build classification models using Python and TensorFlow.', 'Develop end-to-end ML pipelines covering preprocessing, training, evaluation, deployment, and production scoring.', 'Deploy models using AWS SageMaker and Docker.', 'Use MLflow for experimentation and lifecycle management.', 'Monitor deployed models for prediction quality, latency, throughput, and performance.', 'Partner with engineering and product teams to move ML solutions into production.'],
    technologies: ['Python', 'TensorFlow', 'Pandas', 'NumPy', 'AWS SageMaker', 'MLflow', 'Docker', 'PostgreSQL', 'Power BI', 'JIRA'],
  },
  {
    company: 'Morgan Stanley', role: 'AI/ML Engineer', date: 'May 2021 – July 2022',
    focus: 'Fraud detection and financial transaction analytics.',
    bullets: ['Developed machine learning solutions for fraud detection and transaction anomaly identification.', 'Worked with large-scale financial transaction datasets containing millions of records.', 'Performed exploratory data analysis, preprocessing, transformation, and feature engineering.', 'Built classification and forecasting models using Scikit-learn and Apache Spark.', 'Addressed highly imbalanced datasets common to fraud detection problems.', 'Used MLflow and GitHub Actions to automate ML experimentation and workflows.', 'Developed REST APIs for model predictions and containerized ML services using Docker.', 'Supported explainable AI requirements for financial models.'],
    technologies: ['Python', 'Scikit-learn', 'Apache Spark', 'Pandas', 'MLflow', 'Docker', 'GitHub Actions', 'AWS SageMaker', 'MySQL', 'JIRA'],
  },
  {
    company: 'Dollar Tree', role: 'Junior Machine Learning Engineer', date: 'February 2020 – April 2021',
    focus: 'Retail forecasting, inventory optimization, and customer analytics.',
    bullets: ['Supported development of machine learning models for retail demand forecasting.', 'Worked with sales, inventory, product, and promotional datasets.', 'Performed data cleaning, transformation, and aggregation using Pandas and NumPy.', 'Developed regression-based forecasting models and customer segmentation models.', 'Created seasonal, promotional, and historical sales features.', 'Evaluated models using RMSE, MAE, and validation metrics.', 'Created Power BI dashboards for communicating trends and predictions.', 'Assisted with deployment and monitoring of models using Docker.'],
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'PostgreSQL', 'Power BI', 'Docker', 'JIRA'],
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
