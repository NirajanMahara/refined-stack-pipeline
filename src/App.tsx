import React, { useState } from 'react';
import { GitBranch, GitMerge, GitPullRequest, Play, Check, X, AlertCircle, Server, BookOpen, Users } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('pipeline');

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gray-800 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <GitBranch className="h-6 w-6" />
            <h1 className="text-xl font-bold">Refined Stack Pipeline</h1>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <button 
                  onClick={() => setActiveTab('pipeline')}
                  className={`${activeTab === 'pipeline' ? 'text-blue-400' : 'text-gray-300'} hover:text-blue-300`}
                >
                  Pipeline
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveTab('docs')}
                  className={`${activeTab === 'docs' ? 'text-blue-400' : 'text-gray-300'} hover:text-blue-300`}
                >
                  Documentation
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveTab('presentation')}
                  className={`${activeTab === 'presentation' ? 'text-blue-400' : 'text-gray-300'} hover:text-blue-300`}
                >
                  Presentation
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto py-8 px-4">
        {activeTab === 'pipeline' && <PipelineView />}
        {activeTab === 'docs' && <DocumentationView />}
        {activeTab === 'presentation' && <PresentationView />}
      </main>

      <footer className="bg-gray-800 text-white p-4 mt-auto">
        <div className="container mx-auto text-center">
          <p>Refined Stack Co. Development Pipeline - MVP Project</p>
        </div>
      </footer>
    </div>
  );
}

function PipelineView() {
  const [selectedBranch, setSelectedBranch] = useState<string | null>(null);

  const branches = [
    { name: 'frontend', type: 'feature', icon: <div className="bg-blue-500 p-2 rounded-full"><GitBranch className="h-5 w-5 text-white" /></div> },
    { name: 'backend', type: 'feature', icon: <div className="bg-green-500 p-2 rounded-full"><GitBranch className="h-5 w-5 text-white" /></div> },
    { name: 'database', type: 'feature', icon: <div className="bg-yellow-500 p-2 rounded-full"><GitBranch className="h-5 w-5 text-white" /></div> },
    { name: 'integration', type: 'collaboration', icon: <div className="bg-purple-500 p-2 rounded-full"><GitMerge className="h-5 w-5 text-white" /></div> },
    { name: 'testing', type: 'collaboration', icon: <div className="bg-orange-500 p-2 rounded-full"><Check className="h-5 w-5 text-white" /></div> },
    { name: 'deployment', type: 'collaboration', icon: <div className="bg-red-500 p-2 rounded-full"><Server className="h-5 w-5 text-white" /></div> },
  ];

  const workflowSteps = {
    'frontend': [
      { name: 'Lint Check', status: 'success', icon: <Check className="h-5 w-5" /> },
      { name: 'Unit Tests', status: 'success', icon: <Check className="h-5 w-5" /> },
      { name: 'PR Review', status: 'pending', icon: <GitPullRequest className="h-5 w-5" /> },
      { name: 'Merge to Integration', status: 'pending', icon: <GitMerge className="h-5 w-5" /> },
    ],
    'backend': [
      { name: 'API Tests', status: 'failed', icon: <X className="h-5 w-5" /> },
      { name: 'Security Scan', status: 'pending', icon: <AlertCircle className="h-5 w-5" /> },
      { name: 'PR Review', status: 'pending', icon: <GitPullRequest className="h-5 w-5" /> },
      { name: 'Merge to Integration', status: 'pending', icon: <GitMerge className="h-5 w-5" /> },
    ],
    'database': [
      { name: 'Migration Validation', status: 'success', icon: <Check className="h-5 w-5" /> },
      { name: 'Schema Tests', status: 'success', icon: <Check className="h-5 w-5" /> },
      { name: 'PR Review', status: 'success', icon: <GitPullRequest className="h-5 w-5" /> },
      { name: 'Merge to Integration', status: 'pending', icon: <GitMerge className="h-5 w-5" /> },
    ],
    'integration': [
      { name: 'Integration Tests', status: 'success', icon: <Check className="h-5 w-5" /> },
      { name: 'Build Check', status: 'success', icon: <Check className="h-5 w-5" /> },
      { name: 'Deploy to Staging', status: 'success', icon: <Server className="h-5 w-5" /> },
      { name: 'Notify Team', status: 'success', icon: <Users className="h-5 w-5" /> },
    ],
    'testing': [
      { name: 'E2E Tests', status: 'pending', icon: <Play className="h-5 w-5" /> },
      { name: 'QA Approval', status: 'pending', icon: <Users className="h-5 w-5" /> },
      { name: 'Performance Tests', status: 'pending', icon: <AlertCircle className="h-5 w-5" /> },
      { name: 'Merge to Deployment', status: 'pending', icon: <GitMerge className="h-5 w-5" /> },
    ],
    'deployment': [
      { name: 'Final Review', status: 'pending', icon: <GitPullRequest className="h-5 w-5" /> },
      { name: 'Production Build', status: 'pending', icon: <Server className="h-5 w-5" /> },
      { name: 'Deploy to Production', status: 'pending', icon: <Server className="h-5 w-5" /> },
      { name: 'Post-Deploy Tests', status: 'pending', icon: <Check className="h-5 w-5" /> },
    ],
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">GitHub Development Pipeline</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Branch Strategy</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-gray-700 mb-2">Feature Branches</h4>
              <ul className="space-y-2">
                {branches.filter(b => b.type === 'feature').map(branch => (
                  <li key={branch.name}>
                    <button 
                      onClick={() => setSelectedBranch(branch.name)}
                      className={`flex items-center space-x-2 p-2 w-full rounded-md ${selectedBranch === branch.name ? 'bg-blue-50 border border-blue-200' : 'hover:bg-gray-50'}`}
                    >
                      {branch.icon}
                      <span className="capitalize">{branch.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-700 mb-2">Collaboration Branches</h4>
              <ul className="space-y-2">
                {branches.filter(b => b.type === 'collaboration').map(branch => (
                  <li key={branch.name}>
                    <button 
                      onClick={() => setSelectedBranch(branch.name)}
                      className={`flex items-center space-x-2 p-2 w-full rounded-md ${selectedBranch === branch.name ? 'bg-blue-50 border border-blue-200' : 'hover:bg-gray-50'}`}
                    >
                      {branch.icon}
                      <span className="capitalize">{branch.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">
            {selectedBranch ? `${selectedBranch.charAt(0).toUpperCase() + selectedBranch.slice(1)} Workflow` : 'Select a branch to view its workflow'}
          </h3>
          
          {selectedBranch ? (
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
                {workflowSteps[selectedBranch as keyof typeof workflowSteps].map((step, index) => (
                  <React.Fragment key={step.name}>
                    <div className={`flex flex-col items-center p-4 rounded-lg ${
                      step.status === 'success' ? 'bg-green-50 border border-green-200' : 
                      step.status === 'failed' ? 'bg-red-50 border border-red-200' : 
                      'bg-gray-50 border border-gray-200'
                    }`}>
                      <div className={`p-2 rounded-full mb-2 ${
                        step.status === 'success' ? 'bg-green-100 text-green-600' : 
                        step.status === 'failed' ? 'bg-red-100 text-red-600' : 
                        'bg-gray-100 text-gray-600'
                      }`}>
                        {step.icon}
                      </div>
                      <span className="text-sm font-medium">{step.name}</span>
                      <span className="text-xs capitalize mt-1">{step.status}</span>
                    </div>
                    
                    {index < workflowSteps[selectedBranch as keyof typeof workflowSteps].length - 1 && (
                      <div className="hidden md:block text-gray-400">
                        <Play className="h-5 w-5 transform rotate-90" />
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h4 className="font-medium mb-2">GitHub Actions Workflow</h4>
                <pre className="bg-gray-800 text-green-400 p-3 rounded text-sm overflow-x-auto">
                  {`name: ${selectedBranch}-workflow
on:
  pull_request:
    branches: [ ${selectedBranch} ]
    
jobs:
  ${selectedBranch}-checks:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      ${selectedBranch === 'frontend' ? '- name: Run ESLint\n        run: npm run lint' : ''}
      ${selectedBranch === 'backend' ? '- name: Run API Tests\n        run: npm run test:api' : ''}
      ${selectedBranch === 'database' ? '- name: Validate Migrations\n        run: npm run db:validate' : ''}
      ${selectedBranch === 'integration' ? '- name: Deploy to Staging\n        run: npm run deploy:staging' : ''}
      ${selectedBranch === 'testing' ? '- name: Run E2E Tests\n        run: npm run test:e2e' : ''}
      ${selectedBranch === 'deployment' ? '- name: Deploy to Production\n        run: npm run deploy:prod' : ''}`}
                </pre>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-64 bg-gray-50 rounded-lg border border-gray-200">
              <div className="text-center text-gray-500">
                <GitBranch className="h-12 w-12 mx-auto mb-2 text-gray-400" />
                <p>Select a branch from the left to view its workflow</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function DocumentationView() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Documentation</h2>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="prose max-w-none">
          <h1>Refined Stack Co. Development Pipeline</h1>
          
          <h2>Branching Strategy</h2>
          <ol>
            <li>
              <strong>Feature Branches:</strong>
              <ul>
                <li><code>frontend</code>, <code>backend</code>, <code>database</code> for team-specific work.</li>
              </ul>
            </li>
            <li>
              <strong>Collaboration Branches:</strong>
              <ul>
                <li><code>integration</code> (merge features), <code>testing</code> (QA), <code>deployment</code> (staging/prod).</li>
              </ul>
            </li>
          </ol>
          
          <h2>Rules & Guidelines</h2>
          <ul>
            <li>
              <strong>PR Requirements:</strong>
              <ul>
                <li>2 approvals needed for merging into <code>integration</code>, <code>testing</code>, or <code>deployment</code>.</li>
                <li>All tests must pass before merging.</li>
              </ul>
            </li>
            <li>
              <strong>Code Standards:</strong>
              <ul>
                <li>Follow ESLint (front-end) and PEP8 (back-end) rules.</li>
              </ul>
            </li>
          </ul>
          
          <h2>Onboarding for New Developers</h2>
          <ol>
            <li>
              <strong>Setup:</strong>
              <ul>
                <li>Clone repo: <code>git clone https://github.com/refined-stack-pipeline.git</code></li>
                <li>Install dependencies: <code>npm install</code> (front-end) / <code>pip install -r requirements.txt</code> (back-end).</li>
              </ul>
            </li>
            <li>
              <strong>Contacts:</strong>
              <ul>
                <li>Front-End Lead: @swetha-macha</li>
                <li>Back-End Lead: @nirajan-mahara</li>
                <li>Database Lead: @muhammed-nihal-kunnath</li>
              </ul>
            </li>
          </ol>
          
          <h2>Key Tools & Implementation</h2>
          <table>
            <thead>
              <tr>
                <th>Tool</th>
                <th>Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>GitHub</strong></td>
                <td>Host repositories, manage branches, and enforce collaboration rules.</td>
              </tr>
              <tr>
                <td><strong>GitHub Actions</strong></td>
                <td>Automate testing, builds, and deployments via YAML workflows.</td>
              </tr>
              <tr>
                <td><strong>Lucidchart</strong></td>
                <td>Design visual diagrams of the development pipeline.</td>
              </tr>
              <tr>
                <td><strong>Slack/Email</strong></td>
                <td>Notify teams of pipeline status updates.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function PresentationView() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Introduction",
      content: "Why automation is critical for team collaboration",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Branch Strategy Demo",
      content: "Showcase branch protections and PR workflows",
      image: "https://images.unsplash.com/photo-1603201667141-5a2d4c673378?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "CI/CD Walkthrough",
      content: "Live demo of GitHub Actions running tests on PRs",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Onboarding & Documentation",
      content: "Highlight README structure and onboarding steps",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Q&A",
      content: "Address questions about scalability and error handling",
      image: "https://images.unsplash.com/photo-1573497491765-dccce02b29df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    }
  ];
  
  const nextSlide = () => {
    setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1));
  };
  
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Presentation</h2>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="relative">
          <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg overflow-hidden">
            <img 
              src={slides[currentSlide].image} 
              alt={slides[currentSlide].title}
              className="object-cover w-full h-96"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white p-8">
              <h3 className="text-3xl font-bold mb-4">{slides[currentSlide].title}</h3>
              <p className="text-xl text-center">{slides[currentSlide].content}</p>
            </div>
          </div>
          
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        <div className="mt-6">
          <div className="flex justify-center space-x-2">
            {slides.map((_, index) => (
              <button 
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-blue-500' : 'bg-gray-300'}`}
              />
            ))}
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-gray-500">Slide {currentSlide + 1} of {slides.length}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;