import React from "react";

const DeploymentStatus = () => {
    const deployments = [
        { name: "my-app-1", status: "Running", replicas: "2/2" },
        { name: "my-app-2", status: "Running", replicas: "1/1" },
    ];

    return (
        <div>
            <h2>Deployment Status</h2>
            <table>
                <thead>
                <tr>
                    <th>Application</th>
                    <th>Status</th>
                    <th>Replicas</th>
                </tr>
                </thead>
                <tbody>
                {deployments.map((deployment, index) => (
                    <tr key={index}>
                        <td>{deployment.name}</td>
                        <td>{deployment.status}</td>
                        <td>{deployment.replicas}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default DeploymentStatus;
