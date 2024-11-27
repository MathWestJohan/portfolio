# Portfolio Project: React App Deployed to Kubernetes with CI/CD

This project demonstrates a React application deployed to Google Kubernetes Engine (GKE), with CI/CD pipelines managed using GitHub Actions. The app is containerized using Docker, and the images are pushed to DockerHub for deployment.
## Features

- React Frontend: A modern web app built using Create React App.

- Kubernetes Deployment: Deployed to Google Cloud Platform's Kubernetes Engine.

- CI/CD Pipeline: Automates the build, test, and deployment processes using GitHub Actions.

- Dockerized Application: Uses Docker for containerization, enabling seamless deployment.

- Google Cloud Integration: Utilizes GKE for scalable hosting and Artifact Registry for Docker image management.

## DevOps Tools and Technologies used
### Containerization:
- Docker: For containerizing the application and creating consistent environments.
### CI/CD:
- GitHub Actions: To automate testing, building, and deploying the application.
- Docker Build-Push Action: For building and pushing Docker images to the Google Artifact Registry.

### Cloud Platform:
#### Google Cloud Platform (GCP):
- Google Kubernetes Engine (GKE): For managing and deploying Kubernetes clusters.
- Google Artifact Registry: For storing Docker images.

### Kubernetes:
- kubectl: For managing Kubernetes clusters.
### Testing:
- Jest: A JavaScript testing framework for unit and integration testing.
- @testing-library/react: For React component testing.