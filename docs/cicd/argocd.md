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
```

```
kubectl get po -n argocd
NAME                                  READY   STATUS              RESTARTS   AGE
argocd-application-controller-0       0/1     ContainerCreating   0          3m9s
argocd-dex-server-65bf5f4fc7-5kjg6    0/1     Init:0/1            0          3m13s
argocd-redis-d486999b7-929q9          0/1     ContainerCreating   0          3m13s
argocd-repo-server-8465d84869-rpr9n   0/1     Init:0/1            0          3m12s
argocd-server-87b47d787-gxwlb         0/1     ContainerCreating   0          3m11s
```


### Step 3. Ensure that all Pods are up and running

kubectl get po -n argocd
NAME                                  READY   STATUS    RESTARTS   AGE
argocd-application-controller-0       1/1     Running   0          5m25s
argocd-dex-server-65bf5f4fc7-5kjg6    1/1     Running   0          5m29s
argocd-redis-d486999b7-929q9          1/1     Running   0          5m29s
argocd-repo-server-8465d84869-rpr9n   1/1     Running   0          5m28s
argocd-server-87b47d787-gxwlb         1/1     Running   0          5m27s
```

### Step 4. Configuring Port Forwarding for Dashboard Access


```
kubectl port-forward svc/argocd-server -n argocd 8080:443
Forwarding from 127.0.0.1:8080 -> 8080
Forwarding from [::1]:8080 -> 8080
Open the browser and type https://localhost:8080 to access the ArgoCD dashboard.
```

To login, you will need admin password. Follow the below steps to get the admin password.


### Step 5. Logging in

```
kubectl -n argocd get secret argocd-initial-admin-secret -o jsonpath="{.data.password}" | base64 -d; echo
```

Once you run the above command, you will get the admin password that you can use to login into the ArgoCD dashboard.


### Step 6. Install argoCD CLI on Mac using Homebrew

```
brew install argocd
```

### Step 7. Access The Argo CD API Server

By default, the Argo CD API server is not exposed with an external IP. To access the API server, choose one of the following techniques to expose the Argo CD API server:

```
kubectl patch svc argocd-server -n argocd -p '{"spec": {"type": "LoadBalancer"}}'
service/argocd-server patched
```

### Step 8. Login to ArgoCD

```
 argocd login localhost      
```

```
WARNING: server certificate had error: x509: certificate signed by unknown authority. Proceed insecurely (y/n)? y
Username: admin
Password: 
'admin:login' logged in successfully
Context 'localhost' updated
```

### Step 9. Update the password

```
% argocd account update-password
*** Enter password of currently logged in user (admin):                       
*** Enter new password for user admin: 
*** Confirm new password for user admin: 
Password updated
Context 'localhost' updated
ajeetraina@Ajeets-MacBook-Pro ~ % 
```

### Step 10. Register A Cluster To Deploy Apps To

As we are running it on Docker Desktop, we will add it accordingly.

```
argocd cluster add docker-desktop
WARNING: This will create a service account `argocd-manager` on the cluster referenced by context `docker-desktop` with full cluster level admin privileges. Do you want to continue [y/N]? y
INFO[0002] ServiceAccount "argocd-manager" created in namespace "kube-system" 
INFO[0002] ClusterRole "argocd-manager-role" created    
INFO[0002] ClusterRoleBinding "argocd-manager-role-binding" created 
Cluster 'https://kubernetes.docker.internal:6443' added`
```

### Step 11. Deploy a Sample Application

[The ArgoCD GitHub repository](https://github.com/argoproj/argocd-example-apps) contains example applications for demoing ArgoCD functionality. You can register this repository to your ArgoCD instance, or fork this repo and push your own commits to explore ArgoCD and GitOps!

Let us pick up Sock shop sample app for our demo purpose. Sock Shop simulates the user-facing part of an e-commerce website that sells socks. It is intended to aid the demonstration and testing of microservice and cloud native technologies.

Sock Shop microservices are designed to have minimal expectations, using DNS to find other services. This means that it is possible to insert load-balancers and service routers, as required or desired. There are pre-built configuration scripts for various platforms that aim to make running the whole application simple. Sock Shop can be used to illustrate microservices architectures, demonstrate platforms at talks and meetups, or as a training and education tool.

### Step 12. Verify the existing app, if any

```
argocd app list                  
NAME  CLUSTER  NAMESPACE  PROJECT  STATUS  HEALTH  SYNCPOLICY  CONDITIONS  REPO  PATH  TARGET
ajeetraina@Ajeets-MacBook-Pro ~ % 
```

Also, you can verify that there are no Sock Shop related microservices are running as shown below:

![image](https://user-images.githubusercontent.com/313480/187715017-40baa920-7c2d-4fee-9de2-3be57ad594ed.png)

### Step 12. Deploy a Sock Shop app

```
argocd app create sockshop --repo https://github.com/argoproj/argocd-example-apps.git  --path sock-shop --dest-server https://kubernetes.default.svc --dest-namespace default

application 'sockshop' created
```

### Step 13. Listing out the sample application

```
argocd app list                  
NAME      CLUSTER                         NAMESPACE  PROJECT  STATUS     HEALTH   SYNCPOLICY  CONDITIONS  REPO                                                 PATH       TARGET
sockshop  https://kubernetes.default.svc  default    default  Running   <none>      <none>      https://github.com/argoproj/argocd-example-apps.git  sock-shop  
ajeetraina@Ajeets-MacBook-Pro ~ % 
 ```
 
Under the Docker Desktop Dashboard UI, you will be able to see the microservice logs. (Please note that Docker Extensions is a new feature that is still in beta phase. You will require the latest Docker Desktop v4.50 release for this to work).
 
 ![image](https://user-images.githubusercontent.com/313480/187715226-a3eee176-0833-4846-998b-570e2cfdd4a0.png)

 
To learn more about the Sock Shop microservice in detail, visit this page.


 
