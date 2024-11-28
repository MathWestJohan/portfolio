import React from "react";

const PipelineOverview = () => {
    return (
        <div>
            <h2>Pipeline Overview</h2>
            <p>
                This project demonstrates the use of a CI/CD pipeline for automated
                testing and deployment utilizing Google Kubernetes Engine.
            </p>
            <ul>
                <li><strong>Source Control:</strong> GitHub</li>
                <li><strong>CI/CD Tool:</strong> GitHub Actions</li>
                <li><strong>Containerization:</strong> Docker</li>
                <li><strong>Deployment:</strong> Kubernetes</li>
            </ul>
        </div>
    );
};

export default PipelineOverview;
