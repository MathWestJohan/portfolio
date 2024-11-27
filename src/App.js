import React, { useState } from 'react';
import './App.css';
import PipelineOverview from './components/PipelineOverview';
import DeploymentStatus from './components/DeploymentStatus';
import CICDStatus from './components/CICDStatus';

function App() {
    const [activeTab, setActiveTab] = useState('overview'); // Track active tab

    return (
        <div className="App">
            <div className="background"></div> {/* Background Image */}
            <div className="modal">
                <h1>Portfolio Pipeline Examination</h1>
                <p>An example of CI/CD pipeline deployment using Kubernetes for the computer engineering IDATA2502 course.</p>
                <p>Authored by: Matias</p>

                {/* Tab Navigation */}
                <div className="tab-navigation">
                    <button
                        className={activeTab === 'overview' ? 'active' : ''}
                        onClick={() => setActiveTab('overview')}
                    >
                        Pipeline Overview
                    </button>
                    <button
                        className={activeTab === 'deployment' ? 'active' : ''}
                        onClick={() => setActiveTab('deployment')}
                    >
                        Deployment Status
                    </button>
                    <button
                        className={activeTab === 'cicd' ? 'active' : ''}
                        onClick={() => setActiveTab('cicd')}
                    >
                        CI/CD Pipeline Status
                    </button>
                </div>

                {/* Tab Content */}
                <div className="tab-content">
                    {activeTab === 'overview' && <PipelineOverview />}
                    {activeTab === 'deployment' && <DeploymentStatus />}
                    {activeTab === 'cicd' && <CICDStatus />}
                </div>
            </div>
        </div>
    );
}

export default App;
