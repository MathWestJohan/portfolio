import React, { useState } from "react";

function CICDStatus() {
    const [] = useState({
        lastBuild: null,
        buildStatus: "Unknown",
        duration: "Unknown",
    });
    return (
        <div>
            <h3>CI/CD Pipeline Status</h3>
            <p>
                <strong>Last Build:</strong> {"Not too sure..."}
            </p>
            <p>
                <strong>Status:</strong> {"All good!"}
            </p>
            <p>
                <strong>Build Duration:</strong> {"Pretty fast"}
            </p>
        </div>
    );
}

export default CICDStatus;
