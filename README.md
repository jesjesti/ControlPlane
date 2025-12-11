# 🚀 ControlPlane

ControlPlane is a learning and experimentation environment built to explore **Kubernetes from scratch to advanced**, using a real-world full-stack application (Spring Boot backend + React frontend). Since our primary goal is to explore Kubernetes features and capabilities, we are not focusing on the application development aspects (server or client). Therefore, we will create a minimal Spring Boot server and a basic React client, without emphasizing design principles, development best practices, or security standards. It acts as a **personal cloud-native playground** for understanding deployments, scaling, load testing, observability, CI/CD, and more — all running locally on **Minikube**.

## 🧭 Table of Contents

- Overview
- Goals
- Architecture
- Tech Stack
- Repository Structure
- Features
- Prerequisites
- Local Development Setup (Without Kubernetes)
- Kubernetes Setup on Minikube
- Deploying to Kubernetes
- Ingress Setup
- Scaling & Load Testing
- Monitoring & Observability
- Future Enhancements
- Contributing
- License

## ✨ Overview

ControlPlane is your hands-on environment to master Kubernetes by deploying and managing a realistic micro-application.

## 🎯 Goals

A complete Kubernetes learning lab from beginner to advanced.

## 🏗 Architecture

```
(Architecture diagram omitted for brevity)
```

## 🧰 Tech Stack

- Spring Boot, React
- Docker, Minikube, Kubernetes
- Prometheus, Grafana, k6

## 📁 Repository Structure

```
ControlPlane/
├── backend/
├── frontend/
└── k8s/
```

## ⭐ Features

- Real-world K8s deployment
- Ingress, autoscaling, volumes
- Monitoring & load testing support

## 🧱 Prerequisites

Install:

```
brew install minikube kubectl docker helm
```

## 🛠 Local Development

Backend:

```
./mvnw spring-boot:run
```

Frontend:

```
npm install && npm run dev
```

## ☸ Kubernetes Setup

```
minikube start --driver=docker
eval $(minikube docker-env)
```

## 📦 Build Docker Images

```
docker build -t controlplane-backend:1.0 backend/
docker build -t controlplane-frontend:1.0 frontend/
```

## 🚀 Deploying to Kubernetes

```
kubectl apply -f k8s/
```

## 🌐 Ingress

```
minikube addons enable ingress
kubectl apply -f k8s/ingress.yaml
```

## 📈 Scaling & Load Test

```
kubectl scale deployment backend --replicas=5
```

## 📊 Monitoring

Install Prometheus & Grafana with Helm.

## 🔮 Future Enhancements

- Service mesh
- CI/CD pipeline
- Helm packaging

## 🤝 Contributing

PRs welcome!

## 📜 License

MIT / Educational Use
