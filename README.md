# An Ultimate DevOps Interview Preparation Series


## Kubernetes for Beginners [0-3 years experience]
All the questions in this article are based on asked in interview . 

Divided into following sections :

- Administration
- Compute 
- Storage
- Network 
- Security
- Monitoring
- Logging 


#### Administration

Q: How to do maintenance activity on K8 node?

A: Maintenance activity are inevitable part of administration, you may need to do the patching or apply some security fixes on K8. Mark the node unschedulable and then drain the PODs which are present on K8 node.

 - kubectl cordon <hostname>
 - kubectl drain --ignore-daemonsets <hostname>

It's important to include the `--ignore-daemonsets` for any daemonset running on this node. Just in case if any statefulset is running on this node, and if no more node is available to maintain the count of statesful set then statesfulset POD will be in pending status. 

Q: What is role of a pause container?

A: Pause container servers as the parent container for all the containers in your POD. 

- It serves as the basis of Linux namespace sharing in the POD. 
- PID 1 for each POD to reap the zombie processes. 

https://www.ianlewis.org/en/almighty-pause-container

Q: Why we need service mesh?

A: A service mesh ensures that communication among containerized and often ephemeral application infrastructure services is fast, reliable, and secure. The mesh provides critical capabilities including service discovery, load balancing, encryption, observability, traceability, authentication and authorization, and support for the circuit breaker pattern.

Q: How to control the resource usage of a POD?

A: With requests and limits resource usage of a POD can be control. 

request: the amount of resources being requested for a container. If a container exceeds its request for resources, it may be throttled back down to it’s request.

limit: an upper cap on the resources a container is able to use. If it tries to exceed this limit it may be terminated if Kubernetes decides that another container needs the resources. If you’re sensitive to pod restarts, it makes sense to have the sum of all container resource limits equal or less than the total resource capacity for your cluster.

https://www.noqcks.io/notes/2018/02/03/understanding-kubernetes-resources/

Q: What are the units of CPU and memory in POD definition?

A: CPU is in milicores and memory in bytes. CPU can be easily throttled but not memory. 

Q: Where else we can set a resource limit?

A: You may also set resource limit on a namespace. This is helpful in scenarios where people have habit of not defining the resource limits in POD definition. 

Q: How will you update the version of K8?

A: Before doing the update of K8, it's important to read the release notes to understand the changes introduced in newer version and whether version update will also update the etcd. 

https://kubernetes.io/docs/tasks/administer-cluster/kubeadm/kubeadm-upgrade-1-12/

Q: Difference between helm and K8 operator?

A: An Operator is an application-specific controller that extends the Kubernetes API to create, configure and manage instances of complex stateful applications on behalf of a Kubernetes user. It builds upon the basic Kubernetes resource and controller concepts, but also includes domain or application-specific knowledge to automate common tasks better managed by computers. On the other hand, helm is a package manager like yum or apt-get. 

Q: Explain the role of CRD (Custom Resource Definition) in K8?

A: A custom resource is an extension of the Kubernetes API that is not necessarily available in a default Kubernetes installation. It represents a customization of a particular Kubernetes installation. However, many core Kubernetes functions are now built using custom resources, making Kubernetes more modular.

Q: What are the various K8 related services running on nodes and role of each service?

A: Mainly K8 cluster consists of two type of nodes: master and executor

- master services:

  - kube-apiserver: Master API service which acts like a door to K8 cluster. 
  - kube-scheduler: Schedule PODs according to available resources on executor nodes. 
  - kube-controller-manager: controller is a control loop that watches the shared state of the cluster through the 
    apiserver and makes changes attempting to move the current state towards the desired state

- executor node: (These also runs on master node)

  - kube-proxy: The Kubernetes network proxy runs on each node. This reflects services as defined in the Kubernetes API on 
    each node and can do simple TCP, UDP, and SCTP stream forwarding or round robin TCP, UDP, and SCTP forwarding across a set of backends.
  - kubelet: kubelet takes a set of PodSpecs that are provided through various mechanisms (primarily through the 
    apiserver) and ensures that the containers described in those PodSpecs are running and healthy

Q: Recommended way of managing the access to multiple clusters?

A: kubectl looks for the config file, multiple clusters access information can be specified in this config file. `kubectl config` commands can be used to manage the access to these clusters. 

Q: What is PDB (Pod Disruption Budget)?

A: A PDB specifies the number of replicas that an application can tolerate having, relative to how many it is intended to have. For example, a Deployment which has a .spec.replicas: 5 is supposed to have 5 pods at any given time. If its PDB allows for there to be 4 at a time, then the Eviction API will allow voluntary disruption of one, but not two pods, at a time. This is applicable for voluntary disruptions.

Q: In what situations daemonsets are normally used?

A: Daemonset are used to start the PODs on every node in cluster. It's used generally to run the monitoring or logging agents which are supposed to run on every executor node in cluster. 

Q: When stateful sets are preferred?

A: When you are running the applications which require quorum basically the applications which are not truely stateless for those applications stateful sets are required. 

Q: What's init container and when it can be used?

A: init containers will set a stage for you before running the actual POD. 

- Wait for some time before starting the app Container with a command like sleep 60.
- Clone a git repository into a volume.

Q: What are the application deployment strategies?

A: In this agile world there is continuous demand of upgrading the applciations, we have multiple options for deploying the new version of app:

1) Recreate: Old style, existing application version is destroyed and new version is deployed. Significant amount of downtime. 
2) Rolling update: Gradually bringing down the existing deployment and introducing the new versions. You decide how many instances can be upgraded at single point of time. 
3) Shadow: Traffic going to existing version of application is replicated to new version to see it's working. Istio provide this pattern. 
4) A/B Testing using Istio: Running multiple variants of application together and determines the best one based on user traffic. It's more for managment decisions.
5) Blue/Green : Blue is mainly about switching the traffic from one version of app to another version. 
6) Canary deployment : In which certain percentage of traffic is shifted from one version to another. If things work well we will keep on increasing the traffic shift. It's different from the rolling update in which existing version count is reduced gradually. 

#### Compute

Q: How to troubleshoot if the POD is not getting scheduled? 

A: There are many factors which can led to unstartable POD. Most common one is running out of resources, use the commands like `kubectl desribe <POD> -n <Namespace>` to see the reason why POD is not started. Also, keep an eye on `kubectl get events` to see all events coming from the cluster. 

Q: How to run a POD on particular node?

A: Various methods are available to achieve it. 

- nodeName: specify the node name in POD spec, it will try to run the POD on specific node. 

- nodeSelector : you may assign a specific lable to node which have special resources and use the same label in POD spec so that POD will run only on that node. 

- nodeaffinities: requiredDuringSchedulingIgnoredDuringExecution, preferredDuringSchedulingIgnoredDuringExecution are hard, soft requirements for running the POD on specific nodes. This will be replacing nodeSelector in future. It depends on the node labels. 

Q: How to ensure PODs are colocated to get performance benefits?

A: podAntiAffinity and podAffinity are the affinity concept to not keep and keep the PODs on same node. Key point to note is that it depends on the POD labels. 

Q: What are the taints and toleration?

A: Taints allow a node to repel a set of pods. You can set taints on the node and only the POD which have tolerations matching the taints condition will be able to run on those nodes. This is useful in the case when you allocated node for one user and don't want to run the PODs from other users on that node. 

#### Storage

Q: How to provide persistent storage for POD?

A: Persistent volumes are used for persistent POD storage. They can be provision statically or dynamically. 

Static : A cluster administrator creates a number of PVs. They carry the details of the real storage which is available for use by cluster users. 

Dynamically : Administrator creates a PVC (Persistent volume claim) specifying the existing storage class and volume created dynamically based on PVC.

#### Network

Q: How two containers running in a single POD have single IP address?

A: Kubernetes implements this by creating a special container for each pod whose only purpose is to provide a network interface for the other containers. These is one `pause` container which is responsible for namespace sharing in the POD. Generally, people ignore the existance of this pause container but actually this container is the heart of network and other functionalities of POD. It provides a single virtual interface which is used by all containers running in a POD.  

Q: What are the various ways to provide external world connectivity to K8?

A: By default POD should be able to reach the external world but for vice-versa we need to do some work. Following options are available to connect with POD from outer world. 

- Nodeport (it will expose one port on each node to communicate with it)
- Load balancers (L4 layer of TCP/IP protocol)
- Ingress (L7 layer of TCP/IP Protocol)

One another method is kube-proxy which can be used to expose a service with only cluster IP on local system port. 

$ kubectl proxy --port=8080
$ http://localhost:8080/api/v1/proxy/namespaces/<NAMESPACE>/services/<SERVICE-NAME>:<PORT-NAME>/

https://medium.com/google-cloud/kubernetes-nodeport-vs-loadbalancer-vs-ingress-when-should-i-use-what-922f010849e0

Q: What's the difference between nodeport and load balancer?

A: nodport relies on the IP address of your node. Also, you can use the node ports only from the range 30000–32767, on another hand load balancer will have it's own IP address. All the major cloud providers supports creating the LB for you if you specify LB type while creating the service. On baremetal based clusters, metallb is promising.  

Q: When we need ingress instead of a LB? 

A: For each service you have one LB. You can have single ingress for multiple services. This will allow you do both path based and subdomain based routing to backend services. You can do the SSL termination at ingress. 

Q: How POD to POD communication works?

A: For POD to POD communication, it's always recommended to use the K8 service DNS instead of POD IP because PODs are ephemeral and their IPs can get change after the redeployment. 

If the two PODs are running on a same host then physical interface will not come into the picture. 

- Packet will leave POD1 virtual network interface and go to docker bridge (cbr0).
- Docker bridge will forward the packet to right POD2 which is running on same host.  

If two PODs are running on a different host then physical interface of both host machines will come into the picture. Let's consider a scenario in which CNI is not used. 

POD1 = 192.168.2.10/24 (node1, cbr0 192.168.2.1)
POD2 = 192.168.3.10/24 (node2, cbr1 192.168.3.1)

- POD1 will send the traffic destined for POD2 to it's GW (cbr0) because both are in different subnet. 
- GW doesn't know about 192.168.3.0/24 network hence it will forward the traffic to physical interface of node1. 
- node1 will forward the traffic to it's own physical rourter/gateway.
- That physical router/GW should have the route for 192.168.3.0/24 network to route the traffic to node2.
- Once traffic reaches node2, it pass that traffic to POD2 through cbr1

If the Calico CNI it's responsible for adding the routes for cbr (docker bridge IP address) in all nodes. 

Q: How POD to service communication works?

A: PODs are ephemeral their IP address can change hence to communicate with POD in reliable way service is used as a proxy or load balancer. A service is a type of kubernetes resource that causes a proxy to be configured to forward requests to a set of pods. The set of pods that will receive traffic is determined by the selector, which matches labels assigned to the pods when they were created. K8 provides an internal cluster DNS that resolves the service name. 

Service is using different internal network than POD network. netfilter rules which are injected by kube-proxy are used to redirect the request actually destined for service IP to right POD. 

Q: How does service knows about healthy endpoints?

A: kubelet running on worker node is responsible for detecting the unhealth endpoints, it passes that information to API server then eventually this information is passed to kube-proxy which wil adjust the netfilter rules accordingly. 

I highly recommend reading the following series to get solid understanding about the K8 networking. 

https://medium.com/google-cloud/understanding-kubernetes-networking-pods-7117dd28727

https://medium.com/google-cloud/understanding-kubernetes-networking-services-f0cb48e4cc82

https://medium.com/google-cloud/understanding-kubernetes-networking-ingress-1bc341c84078


#### Security

Q: What are the various things can be done to increase the K8 security?

A: This is a huge topic, I am sharing some thoughts on it.

- By default, POD can communicate with any other POD, we can setup network policies to limit this communication between the PODs.
- RBAC (Role based access control) to narrow down the permissions. 
- Use namespaces to establish security boundaries. 
- Set the admission control policies to avoid running the priviledged containers. 
- Turn on audit logging.

#### Monitoring

Q: How to monitor K8 cluster? 

A: Prometheus is used for K8 monitoring. Prometheus ecosystem consists of multiple components. 

- main Prometheus server which scrapes and stores time series data
- client libraries for instrumenting application code
- a push gateway for supporting short-lived jobs
- special-purpose exporters for services like HAProxy, StatsD, Graphite, etc.
- an alertmanager to handle alerts
- various support tools

Q: How to make prometheus HA?

A: You may run multiple instances of prometheus HA but grafana can use only of them as a datasource. You may put load balancer in front of multiple prometheus instances, use sticky sessions and failover if one of the prometheus instance dies. This make things complicated. Thanos is another project which solve these challenges. 

Q: What are other challenges with prometheus?

A: Desipte of being very good at K8 monitoring, prometheus still have some issues: 

- Prometheus HA support.
- No downsampling is available for collected metrics over the period of time. 
- No support for object storage for long term metric retention.

All of these challenges are again overcome by Thanos.   

Q: What's prometheus operator?

A: The mission of the Prometheus Operator is to make running Prometheus on top of Kubernetes as easy as possible, while preserving configurability as well as making the configuration Kubernetes native.

#### Logging

Q: How to get the central logs from POD?

A: This architecture depends upon application and many other factors. Following are the common logging patters

- Node level logging agent
- Streaming sidecar container
- Sidecar container with logging agent
- Export logs directly from the application

In our setup, filebeat and journalbeat are running as daemonset. Logs collected by these are dumped to kafka topic which are eventually dumped to ELK stack. 

Same can be achieved using EFK stack and fluentd-bit.   




## DevOps for Beginners [0-3 years experience]

<a name="devops-beginner"></a>
####  Beginner

<details>
<summary>What is DevOps?</summary><br><b>

Amazon:

"DevOps is the combination of cultural philosophies, practices, and tools that increases an organization’s ability to deliver applications and services at high velocity: evolving and improving products at a faster pace than organizations using traditional software development and infrastructure management processes. This speed enables organizations to better serve their customers and compete more effectively in the market."

Microsoft:

"DevOps is the union of people, process, and products to enable continuous delivery of value to our end users. The contraction of “Dev” and “Ops” refers to replacing siloed Development and Operations to create multidisciplinary teams that now work together with shared and efficient practices and tools. Essential DevOps practices include agile planning, continuous integration, continuous delivery, and monitoring of applications."

Red Hat:

"DevOps describes approaches to speeding up the processes by which an idea (like a new software feature, a request for enhancement, or a bug fix) goes from development to deployment in a production environment where it can provide value to the user. These approaches require that development teams and operations teams communicate frequently and approach their work with empathy for their teammates. Scalability and flexible provisioning are also necessary. With DevOps, those that need power the most, get it—through self service and automation. Developers, usually coding in a standard development environment, work closely with IT operations to speed software builds, tests, and releases—without sacrificing reliability."

</b></details>

<details>
<summary>What are the benefits of DevOps? What it can help us to achieve?</summary><br><b>

You should mention some or all of the following:

  * Collaboration
  * Improved delivery
  * Security
  * Speed
  * Scale
  * Reliability

Make sure to elaborate :)
</b></details>

<details>
<summary>What are the anti-patterns of DevOps?</summary><br><b>

* Not allowing to push in production on Friday :)
* One specific person is in charge of different tasks. For example there is only one person who is allowed to merge the code of everyone else
* Treating production differently from development environment. For example, not implementing security in development environment
</b></details>

<details>
<summary>What is Continuous Integration?</summary><br><b>

A development practice where developers integrate code into a shared repository frequently. It can range from a couple of changes every day or a week to a couple of changes in one hour in larger scales.

Each piece of code (change/patch) is verified, to make the change is safe to merge. Today, it's a common practice to test the change using an automated build that makes sure the code can integrated. It can be one build which runs several tests in different levels (unit, functional, etc.) or several separate builds that all or some has to pass in order for the change to be merged into the repository.
</b></details>

<details>
<summary>What is Continuous Deployment?</summary><br><b>
</b></details>

<details>
<summary>What is Continuous Delivery?</summary><br><b>
</b></details>

<details>
<summary>What CI/CD best practices are you familiar with? Or what do you consider as CI/CD best practice?</summary><br><b>
</b></details>

<details>
<summary>What systems and/or tools are you using for the following?:

  * CI/CD
  * Provisioning infrastructure
  * Configuration Management
  * Monitoring & alerting
  * Logging
  * Code review
  * Code coverage
  * Tests</summary><br><b>
  * CI/CD - Jenkins, Circle CI, Travis
  * Provisioning infrastructure - Terraform, CloudFormation
  * Configuration Management - Ansible, Puppet, Chef
  * Monitoring & alerting - Prometheus, Nagios
  * Logging - Logstash, Graylog, Fluentd
  * Code review - Gerrit, Review Board
  * Code coverage - Cobertura, Clover, JaCoCo
  * Tests - Robot, Serenity, Gauge
</b></details>

<details>
<summary>What are you taking into consideration when choosing a tool/technology?</summary><br><b>

In your answer you can mention one or more of the following:
  * mature vs. cutting edge
  * community size
  * architecture aspects - agent vs. agentless, master vs. masterless, etc.
</b></details>

<details>
<summary>Explain mutable vs. immutable infrastructure</summary><br><b>

In mutable infrastructure paradigm, changes are applied on top of the existing infrastructure and over time
the infrastructure builds up a history of changes. Ansible, Puppet and Chef are examples of tools which
follow mutable infrastructure paradigm.

In immutable infrastructure paradigm, every change is actually a new infrastructure. So a change
to a server will result in a new server instead of updating it. Terraform is an example of technology
which follows the immutable infrastructure paradigm.
</b></details>

<details>
<summary>What ways are you familiar with to deliver a software? What are the advantages and disadvantages of each method?</summary><br><b>

  * Archive - collect all your app files into one archive (e.g. tar) and deliver it to the user.
  * Package - depends on the OS, you can use your OS package format (e.g. in RHEL/Fefodra it's RPM) to deliver your software with a way to install, uninstall and update it using the standard packager commands
  * Images - Either VM or container images where your package is included with everything it needs in order to run successfully.
</b></details>

<details>
<summary>What is caching? How it works? Why is it important?</summary><br><b>
</b></details>

<details>
<summary>Explain stateless vs. stateful</summary><br><b>

Stateless applications don't store any data in the host which makes it ideal for horizontal scaling and microservices.
Stateful applications depend on the storage to save state and data, typically databases are stateful applications.
</b></details>

<details>
<summary>Describe the workflow of setting up some type of web server (Apache, IIS, Tomcat, ...)</summary><br><b>
</b></details>

<details>
<summary>Explain "Open Source"</summary><br><b>
</b></details>

<details>
<summary>Describe me the architecture of service/app/project/... you designed and/or implemented</summary><br><b>
</b></details>

<details>
<summary>What types of tests are you familiar with?</summary><br><b>

Styling, unit, functional, API, integration, smoke, scenario, ...

You should be able to explain those that you mention.
</b></details>

<details>
<summary>You need to install periodically the same package on different operating systems (Ubuntu, RHEL, ...). How would you do it?</summary><br><b>

It can be as simple as one Ansible (or other CM tool) task that runs periodically with Cron. In more advanced cases, perhaps a CI system.
</b></details>


## DevOps for Intermediate [3-7 years experience]

## DevOps for Advanced [7-10 years experience]




