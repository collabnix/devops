---
sidebar_position: 1
---

# ArgoCD

DevOps is a way for development and operations teams to work together collaboratively. It is basically a cultural change. Organizations adopt DevOps culture in order to be able to produce new applications and services at high velocity. To achieve high velocity and fast innovation, GitOps was born. GitOps gives you tools and a framework to take DevOps practices, like collaboration, CI/CD, and version control, and apply them to infrastructure automation and application deployment.


ℹ️
DevOps Culture may use GitOps, that’s not mandatory!

GitOps is a Continuous Deployment model for cloud-native applications. It is used to automate the process of provisioning infrastructure. GitOps is based-off of a Git-based source code management system. It is not a single product, plugin, or platform.

GitOps basically requires 3 core components:

![image](https://user-images.githubusercontent.com/313480/187713427-1473c996-3907-455f-9f1e-6cd82d2cdf7f.png)


In GitOps, the Git repositories contains the declarative descriptions of the infrastructure. These are considered as the single source of truth for the desired state of the system. One needs to have an automated way to ensure that the deployed state of the system always matches the state defined in the Git repository. All the changes (such as deployment, upgrade and rollback) on the environment are triggered by changes (commits) made on the Git repository. Said that, just having versioned controlled infrastructure as code doesn’t mean GitOps, we also need to have a mechanism in place to keep (try to keep) our deployed state in sync with the state we define in the Git repository.

GitOps is not limited to Kubernetes. In principle, you can use any infrastructure that can be observed and described declaratively, and has Infrastructure as Code tools available. However, currently most operators for pull-based GitOps are implemented with Kubernetes in mind.

Argo CD is a continuous delivery tool that works on the principles of GitOps. It is built specifically for Kubernetes. The product was developed and open-sourced by Intuit and is currently a part of CNCF.

## Components of Argo CD

Argo CD consists of the three main components – API server, Repository Server, and Application Controller.

## API Server ( pod: argcocd-server)

Controls the whole ArgoCD instance, all its operations, authentification, and secrets access which are stored as Kubernetes Secrets, etc

## Repository Server ( pod: argocd-repo-server)

Stores and synchronizes data from configured Git-repositories and generates Kubernetes manifests

## Application Controller ( pod: argocd-application-controller)

Used to monitor applications in a Kubernetes cluster to make them the same as they are described in a repository, and controls PreSync, Sync, PostSync hooks

Argo CD is a tool that will help read your environment configuration from your git repository and apply it to your Kubernetes namespaces.  App definitions, environment, and configurations should be declarative and version controlled. App deployment and lifecycle management should be automated, audible, and easy to understand.Argo CD uses a Git repo to express the desired state of the Kubernetes environment. The basic setup uses one repository to represent one project. Within that repository, each application that makes up the project will be described in its own folder. The repository will also contain a branch for each destination (i.e. cluster and namespace) into which we want to deploy the applications.

## Prerequisite:

### Install Docker Desktop

Visit https://docs.docker.com/desktop/mac/install/ to setup Docker Desktop for Mac or Windows on your local system.

![image](https://user-images.githubusercontent.com/313480/187713909-aaa57c85-0e53-49f3-9ae5-0dad654fe5ad.png)


### Enable Kubernetes

Ensure that the checkbox for Kubernetes is enabled under Desktop Desktop Preference UI.

![image](https://user-images.githubusercontent.com/313480/187713990-2baca093-6fdb-45e0-b6c0-fad54fd7b161.png)


## Getting Started

### Step 1. Create a new namespace

Create a namespace argocd where all ArgoCD resources will be installed

```
 kubectl create namespace argocd
```

### Step 2. Install ArgoCD resources

```
 kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml
 
kubectl get po -n argocd
NAME                                  READY   STATUS              RESTARTS   AGE
argocd-application-controller-0       0/1     ContainerCreating   0          3m9s
argocd-dex-server-65bf5f4fc7-5kjg6    0/1     Init:0/1            0          3m13s
argocd-redis-d486999b7-929q9          0/1     ContainerCreating   0          3m13s
argocd-repo-server-8465d84869-rpr9n   0/1     Init:0/1            0          3m12s
argocd-server-87b47d787-gxwlb         0/1     ContainerCreating   0          3m11s
```


# References

- [Monitoring Multi-Node K3s Cluster running on IoT using Datadog](https://collabnix.com/monitoring-multi-node-k3s-cluster-running-on-iot-using-datadog/)
