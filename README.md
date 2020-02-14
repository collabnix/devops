# An Ultimate DevOps Interview Preparation Series


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


## DevOps Tools & Technique

<summary>What is DevOps and what is DevOps tools?

“In the past, business success was all about size: The large eat the small. Today, business success is all about speed: The fast eat the slow.” - Daniel Burrus

Wikipedia describes DevOps as a “culture, movement or practice that emphasizes the collaboration and communication of both software developers and other information-technology (IT) professionals whilst supporting the practices of automating software delivery and infrastructure changes. It aims at establishing a culture and environment where building, testing and releasing software can happen rapidly, frequently and more reliably.”

The word "DevOps" is a combination of the words "development" and "operation". It is neither an application nor a tool instead is just a culture to promote development and Operation process in a collaborative manner. As a result of DevOps implementation, the speed to deliver application and services is increased. This wordplay already serves to give us a hint of the basic nature of the idea behind DevOps. It is a practice where collaboration between different disciplines of software development is encouraged. While most believe that it’s a technological approach that they should incorporate in their business, it’s more of a cultural approach.

<summary>Is Devops a Product/tool?</summary><br><b>
Is Devops a Product/tool? - DevOps is not a product, or even a particular technology. DevOps is a methodology that unites the often separate functions of software development (Dev) and production and operations (Ops) into a single, integrated, and continuous process.DevOps is about breaking down the barriers between Dev and Ops. It leverages people, processes, and technology to stimulate collaboration and innovation across the entire software development and release process. Dev and Ops must act and feel like they are a single team.

Is DevOps yet another Software Development Method? - Devops is not just another software development methodology. Although it is related to and even influenced by software development methodologies like Agile or XP, and its practices can include software development methods, or features like infrastructure automation and continuous delivery, it is much more than just the sum of these parts. While these concepts are related and may be frequently seen in devops environments, focusing solely on them misses the bigger picture—the cultural and interpersonal aspects that give devops its power.

Devops is a way of thinking and a way of working. It is a framework for sharing stories and developing empathy, enabling people and teams to practice their crafts in effective and lasting ways. It is part of the cultural weave that shapes how we work and why. Many people think about devops as specific tools like Chef or Docker, but tools alone are not devops. What makes tools “devops” is the manner of their use, not fundamental characteristics of the tools themselves.

DevOps ultimately means building digital pipelines that take code from a developer’s laptop all the way to revenue generating prod awesomeness!building a fully automated digital pipeline that takes ideas and turns them into revenue generating pieces of code.

The focus of DevOps is to unite development and operations so the company as a whole is better able to deliver software. Although this is the goal, when you boil it down, DevOps is actually about empathy.

When you take down silos and have operations, development, and network engineers joined in a cross functional team, they get to see first hand how their actions impact each other. If a developer in creates a crappy piece of code and operations is forced to stay up all night fixing it, then the developer involved is able to see how their decisions have a negative impact on other people’s lives first hand. Conversely, if an operations gatekeeper says I’m not going to maintain or manage this code for you, then they have to deal with a worried developer whose
performance and job is at jeopardy if operations won’t push and support his work.


What are DevOps Tools?

As the firms started realizing DevOps potential, the immediate challenge they had is with the implementation. Though they have multiple strategies, there still existed gaps in a full-fledged DevOps implementation. And, DevOps tools appeared as a solution! However, no single tool can be a one-stop solution to a full-fledged DevOps adoption and so, there are a wide variety of DevOps tools for every specific DevOps requirement.
 
DevOps tools facilitate ways for effective sharing and exchange of resources, information and technical know-how of the tasks between the development, operations and security teams for an effective product output.
 
By functionality, DevOps tools can be basically divided into two different categories: 
 
Tools by Functionality & 
Tools by Requirement.
 
DevOps Tools by Functionality

Tools under this category can further be categorized into two: Manual and Automation.
 
 
Manual
 
Two key DevOps manual tool platforms that drew wide attention for their ease in facilitating DevOps implementation include Wikis and ChatOps.
 
Automation

Days are gone where the manual operations were priority. Now, it’s the time for automation! To stay in line with the trend, there are also a good number of DevOps automation tools that can help you in effective software process. Here a few sub-categories where many devops tools fit to achieve the quality code:
 
	SCM(Source Code Management)
	Explain SCM
	
	Below are SCM tools used :
Git
Bitbucket
 
CI/CD Environment
	As the name portrays , its the process that makes the new code integrate with the existing code with multiple test units written to make sure that there should be no code breakages . It's a continuous process where developers pushes chunks of code into existing and everytime the code gets build up , gets tested with the basic functionality and get merged into the base module .
It is also known as build pipeline that automates the software development and delivery process with high quality percentage . The pipeline has three major terminologies listed below 
Continuous Integration - The main idea behind the integration process is to save the time and reduce integration costs , which helps developers to frequently push the new code on the master . This process does not guarantee bug free code as it simply refines the everyday development task integration . To get a clean code , CD(continuous delivery) comes into action .
Below are few CI tools listed :
 
Jenkins 
is a widely used CI tool in the industry with huge user base and acceptance . The trust this tool has developed is all because of its ocean of plugins that integrates with this build server . For example jenkins is not pre-configured to run any specific SCM like git or bitbucket , rather a user can go to the plugins section and can install any SCM plugin which suits the need .
 
Teamcity 
Is a enterprise level product where it can take hundreds of build configurations and concurrent build agents running . Also build process can break up into small procedures or processes where it runs them sequentially or simultaneously .
Continuous Delivery - It is just an extension to integration where test suites comes into play . Many test units are written against the builds to test the code functionality like unit tests , smoke tests . This process result in the confidence that the product is deployable in actual production environment .
Below are build automation tools for Continuous Delivery :
Maven
ANT
 
Continuous Deployment - is an extension of continuous delivery where the build will automatically deploy if it passes all the tests . Continuous deployments helps in delivering the fixes , new features or enhancements to customers quickly and getting user feedback promptly so that teams can focus more on what best is needed .
Below are Continuous Deployment tools enlisted:
AWS CodeDeploy
Is a deployment tool that scales from single lambda function to hundreds of EC2 machines or on-premises instances . It also provides an environment for creating deployment rules to implement monitoring during the deployment process which ultimately helps in reverting the deployments if any issue arises. 
Octopus Deploy
It's an environment where deployment process has strict restrictions and requirements for each and every phase of development , testing staging and deployments and all of them can be  separately tracked and executed . Having an intuitive dashboard and custom scripts integration , this tool serves complex deployments and manage private sensitive information .
 
	Infrastructure Management 
	Infrastructure scaling can never we ignored in any environment , the needs grow and so the infrastructure required to manage it grows along . Technologies are there in the industry that can manage the needs and reduce costs by providing efficiency in resource management and configuration . Below are some technologies discussed as part of infra-management :
Puppet: 
This is a go-to automation tool that automates critical manual tasks while also making them easily understandable for teams beyond operations. It ensures effective team engagement by allowing collaboration between internal and external teams. Puppet makes things simpler by abstracting critical configuration details across different operating systems and technology platforms. It is available for free as an open-source version and can also be found as a paid tool.
Ansible: 
This is also configuration management tool similar to puppet or chef but the main difference comes comes in the plugin ecosystem . Ansible works on push mechanism where is enters into the client through ssh and runs the config whereas puppet works on pull concept . Moreover the ansible playbooks approach is top-bottom which is easy in reading and maintaining .
Docker: 
Beneficial for Dev environments, Docker helps in quicker deployment. Using Docker, one can create own images or modify the existing ones as per the requirements for an effective software environment that is more consistent, quick-to-deploy and repeatable. A Docket-Puppet integration helps build robust images using more than seven million lines of Puppet code. Using this integration, it’s easy to get a Puppet or Docker environment in a minute’s time.
 
 
1.2 Why is DevOps needed?

Before DevOps, there was Development and Operations, each with conflicting priorities. A developer’s job is to create new products, modify existing products and fix defects in the code. They are measured, incentivized and paid based on how often they push code and deliver new value. Operations on the other hand is measured on stability, maximizing predictability and ensuring availability. The onus is on operations to protect uptime and minimize outages – both which become at risk from change. This makes development and operations diametrically opposed and naturally at odds with each other.

Dev is focused on faster innovation and doing new things. The mandate to Ops is about stability, control, and predictability. They often don’t even report to the same places in the organization. It is like they are on two different train tracks. No matter how fast they go, they never meet.Left to themselves, Dev and Ops will often struggle to talk to each other, much less collaborate, and will remain mired in manual processes. The result is employees who don’t work well together, software that doesn’t work reliably,

To stay competitive in 2018 and beyond, enterprise organizations are embracing DevOps methodologies and new technologies to accelerate innovation. Agile development shortens development times by increasing communication between the development team and business stakeholders. But software projects aren’t done when the last line of code is written and the last test case is passed. Applications still need to be packaged for release, deployed into production, monitored for problems, and enhanced with bug fixes and new features.

Below are the list of major reasons why Devops is needed:

1. Shorter Development Cycles, Faster Innovation
2. Reduced Deployment Failures, Rollbacks, and Time to Recover
3. Improved Communication and Collaboration
4. Increased Efficiencies
5. Reduced Costs and IT Headcount

Following below listed reasons are the most considerable ones for DevOps implementation due to which business organizations prefer its implementation:

Before DevOps implementation, operation and development teams worked in an isolated Testing and Deployment activities mostly were performed in an isolated manner after design-build step and they took more time than actual project completion time.

Before DevOps implementation, team members usually spend a large amount of time in deploying, testing, designing, and building the projects.

Human production errors were deployed during manual code conduction.

Operations and coding teams generally had different timelines and do not have proper synchronization that results in further delay.




The most obvious and measurably concrete benefits of DevOps occur in the shorter cycles, which in turn make the longer cycles more efficient. Take care of the pennies, and the pounds will take care of themselves, as the old adage goes.

Here are some examples of when DevOps can benefit Agile cycles:

• Deployment systems, maintained by DevOps engineers, make the deliveries at the end of Scrum cycles faster and more efficient. These can take place with a periodicity of two to four weeks.In organizations where deployments are done mostly by hand, the time to deploy can be several days. Organizations that have these inefficient deployment processes will benefit greatly from a DevOps mindset.

• The Kanban cycle is 24 hours, and it's therefore obvious that the deployment cycle needs to be much faster than that if we are to succeed with Kanban. A well-designed DevOps Continuous Delivery pipeline can deploy code from being committed to the code repository to production in the order of minutes, depending on the size of the change

Some of the other benefits include improvements to the following:

- Velocity of change
- Mean time to resolve
- Improved uptime
- Increased number of deployments
- Cross skilling between teams
- Bringing DevOps to Network Operations
- Removal of the bus factor of one

By implementing a DevOps initiative it promotes repeatability, measurement and automation. Implementing automation naturally improves the velocity of change and increased number of deployments a team can do in any given day. Automation of the deployment process allows teams to push fixes through to production quickly as well as allowing an organisation to push new products and features to market.

A bi-product of automation is that the mean time to resolve will also become quicker, if changes are automated they can be applied much more efficiently than if they were carried out manually. Manual changes depend on the velocity of the engineer implementing the change rather than an automated script that can be measured more accurately.

Implementing DevOps also means measuring and monitoring efficiently too, so having effective monitoring is crucial, as it means the pace in which root-cause analysis can carried out improves. Having effective monitoring helps to facilitate the process of mean time to resolve, so when a production issue occurs, the source of the issue can be found quicker than numerous engineers logging onto consoles and servers trying to debug issues. Instead a well implemented monitoring system can provide a quick notification to localise the source of the issue, silencing any resultant alarms that result from the initial root-cause, allowing the issue to be highlighted and fixed efficiently.

The monitoring then hands over to the repeatable automation which can then push out the localised fix to production. This process provides a highly accurate feedback loop, where processes will improve daily. If alerts are missed they will ideally be built into the monitoring system over time as part of the incident post mortem.

Effective monitoring and automation results in quicker mean time to resolve which makes for
happier customers and results in improved uptime of products. Utilising automation and effective monitoring also means that all members of a team have access to see how processes work and how fixes and new features are pushed out.

This will mean less of a reliance on key individuals removing the bus factor of one where a key engineer needs to do the majority of tasks in the team as he is the most highly skilled individual and has all of the system knowledge stored in his head.

Using a DevOps model means that the very highly skilled engineer can instead use their talents to help cross skill other team members and create effective monitoring that can help any team member carry out the root cause analysis they normally do manually. This builds the talented engineers deep knowledge into the monitoring system, so the monitoring


 
1.3 How to implement DevOps?

Once you understand what DevOps is about and the benefits it can have on your organization, the next question is how do you implement it?

The first reaction for most people is to research the toolsets. Unfortunately, it takes more than purchasing a set of software tools and telling your development and operations teams to collaborate more. DevOps isn’t something you can buy. It has to be incorporated into your organization and grown over time.

The core to DevOps is the CAMS approach. The term CAMS was coined by Damon Edwards and John Philips in Silicon Valley back in the 90s and early 2000s, as a way to define the culture of empathy.

DevOps starts with learning how to work differently. It embraces cross-functional teams with openness, transparency, and respect as pillars. The CAMS mindset is not compartmentalized—a trap many organizations fall into by rewarding individual achievements at the expense of the team. Rather than two goals, one for development and one for operations, there is a unified goal of rapidly deploying code safely and reliably. Achieving this takes a shift in culture, which takes a shift in team structure and process.

In order to fix what goes wrong, or repeat what went right, you need to have systems in place that can be repeated. It should be thought of like an assembly line. Although humans are involved, they shouldn’t be touching the code. The journey from development, through test stage, and into production should be completely handled in an automated way.

With that being said, you need testing and abort paths. If you commit something that fails to meet standards, it should get rejected. If it fails to stage, fails to deploy, then the code should not go any farther.

The most expensive work is rework. Measurement is about monitoring and tracking performance so there is feedback. Errors should be expected, but the goal is to learn once for the organization and not repeat mistakes.

Measurement is also about aligning incentives. When incentives for different team members work against each other, you end up with a lose-lose situation, low productivity, team frustration, and roadblocks. The entire team needs to be aligned to achieve the same outcome.
For example, one team was challenged to write a new software test. The result was that everyone wrote a test, checked the box – but nobody tested anything.

The incentive was tied to writing, not testing, so the strategy failed. Incentives need
to be tied to the right outcome. To understand this better, you can look at game theory and outcomes. John Nash has devised a solution concept known as the Nash Equilibrium.

Using his system, we can determine when we have a Nash Equilibrium or a win-win situation. A broken traffic signal is a good example. Even if there are no police around, two drivers will likely choose to obey the law and stop, so neither driver crashes. One driver must allow the other to go. The other options are they both go, and crash, or no one goes, and they remain stuck. Cooperation is required for the best outcome. Either one driver will decide to allow the other to go, or they will go and expect the other driver to wait 

Sharing requires nurturing a blame-free environment. People are adept at hiding problems when they think they’ll be punished or blamed for their mistakes. Punishment doesn’t help them make fewer mistakes – and, on top of that, you have no idea what’s going on in your environment or how to increase employee productivity. Matt Stratton, Senior Solutions Architect at Chef, had a customer who developed what’s known as the “blameless post-mortem.”

To implement DevOps into your existing organizational structure, you first must look at its current state of readiness.Once the initial assessment is done, business owners need to ask themselves three questions before assessing DevOps readiness:

Is there a Management-Employee Agreement? A successful DevOps process not only relies on collaboration between Development and Operations, but also needs a top-down (management-employee) agreement. Once that’s in place, the company is already halfway through the success road.

Is there a Plan in Place? Many firms just barge into technology like it’s all they need to reach their finish line. Stop! Wait! Think! Owners need to have a detailed strategy, equipped with process tools and goals clearly outlined and best practices chalked out. Once this is done, the culturally different teams need to collaborate and work ways to learn and equip themselves with the technologies and practices of each other’s processes. With all this in place, organizations will be ready to take the DevOps jump.

Is the Organization Ready to Tread the Ocean? Now that the plan is in place, what’s next? Organizations, as mentioned earlier, are in hot pursuit to experiment with what they’ve learnt new. Anything new is fancy, but humbleness is the key! Starting small will set the new cultural shift to completely settle in its new mold. To run the boat in big waters, you first need to test it in small water. Similarly, to test the success of DevOps for a big business project, you first want to test its adaptability to a smaller one. Once you’ve cut off from the harbor, you are all set to wade the ocean.

The DevOps implementation strategy is stacked on six basic factors .

Reliability: DevOps ensure functional, safe and quality output, resulting in a positive end-user experience and ensures the productivity of developers and reliability of operations.
Scale: Infrastructure as a code helps in efficient management of all stages of software product lifecycle.
Speed: A faster innovation and speedy execution is key to customer satisfaction and DevOps model ensures this through a Continuous Delivery
Rapid Delivery: DevOps implementation involves very frequent delivery cycles and minimum recovery time 
Improved Collaboration: The Methodology depends on development and operations working collaboratively and achieving results in less iterations . 
Security: Infrastructure as code and policy as code are two key DevOps practices. DevOps model achieves this factor through configuration management techniques and automated compliance policies. DevSecOps is also in limelight for security related issues.

Below are some devops practices that ensures the effective implementation of Devops 

Continuous Integration: Continuous integration involves merging of code changes into a central repository following which automated builds and testing are performed. Nowadays TDD(Test Driven Development) is gaining lot of attention as it ensures writing effective code with minimal testing , early recovery from failures, quality assurance and a less turnaround time.

Continuous Delivery: As an extension to continuous integration, continuous delivery takes forward all the code changes to testing or production phases, finally resulting in a deployment-ready structure that passed through a standardized testing process.

Microservices: This involves breaking up of a single service into multiple components, each of which run independently while communicating among each other through a well-defined interface like HTTP-based API. Though these services operate independently, they can also be deployed as separate entities or a single large service.

Infrastructure as a Code: This refers to usage and management of infrastructure programmatically through code and development techniques instead of manual set up and physical configuration. Using this practice, DevOps engineers manage with infrastructure and servers through code-based tools, thus ensuring timely updates and versions.

Configuration Management: In DevOps methodology, operating system and host configuration are managed through code. Usage of code for configuration purposes deals away the need of managing operating systems, server software or system applications manually, thus easing the configuration management process.

Policy as a Code: Codification of infrastructure and its relevant configurations with the cloud helps firms monitor, track, validate and reconfigure infrastructure in an automated procedure. In a cloud environment, this allows organizations to control resources while monitoring their security and ensuring compliance with their standards.

2. Major DevOps tool categories (list the different categories and brief them ex: version control, build and deploy, functional and non-functional testing, provisioning and change management etc.)
 

Processes increases the productivity, speed up time to market, reduce risk, and increase quality, but they need to be built on top of robust frameworks. The processes must be properly thought out in order to handle the organizational challenges, but at the same time needs to be very efficient, quick, robust, and accurately repeatable.This is exactly the reason why we always use tools in the devops domain.

Tools and technologies play important role in the DevOps culture. For all parts of application delivery pipeline, different tools, disruptive innovations, open source initiatives, community plugins and so on are required to keep the entire pipeline running to produce effective outcomes.

1. Collaboration Tools are crucial for helping teams work together more easily, regardless of time zones or locations. A rapid action oriented communication designed to share knowledge and save time. (Slack, Campfire)

2. Planning Tools are designed to provide transparency for the stakeholders and participants.Working together, teams can plan towards common goals, and better understanding of dependencies. Bottlenecks and conflicting priorities are more visible. (Clarizen and Asana)

3. Source Control Tools make up the building blocks for the entire process ranging across all key assets. Whether code, configuration, documentation, database, compiled resources and documenting over web pages – you can only gain by managing them in your one true source of truth. From there – everything else can be built when required. (Git, Subversion)

4.  Issue Tracking Tools increase responsiveness and visibility. All teams members use the issue tracking tool, unifying internal issue tracking as well as customer generated ones. (Jira and ZenDesk)

5.  Configuration Management Tools are immensely important, it would be impossible to enforce desired state norms or achieve any sort of consistency at scale. Infrastructure should be treated exactly as code that can be provisioned and configured in a repeatable way. Avoiding configuration drift across environments will save valuable time and difficulties caused by the application working in one environment and not another. (Puppet, Chef, Salt)

6.  Continuous Integration Tools provide an immediate feedback loop by regularly merging code. Teams merge developed code many times a day, getting feedback from automated test tools. (Jenkins, Bamboo, TeamCity)

7.  Automated Testing Tools are tasked with verifying code quality before passing the build. The quicker the feedback loop works – the higher the quality gets, and the quicker you reach the desired "definition of done".(Telerik, QTP, TestComplete)

8.  Deployment Tools in an effective DevOps environment, application deployments are frequent, predictable, and reliable. Deployment tools are essential to checking those boxes. Continuous delivery means that applications can be released to production at any time you want in order to improve time to market, while keeping risk as low as possible. (IBM uDeploy, CA Release Automation, XebiaLabs)

9. Containerization, a new shift in the way infrastructure is managed has led to several new tools and ideologies, most popular among them is containers. Containers help teams easily deploy, test, and manage their code within no time. 

10. Orchestration is the automated arrangement, coordination, and management of computer systems, middleware and services. The goal of orchestration is not just to automatically execute a service, but also to streamline, optimize the processes for even greater gains in deployment velocity. There are several tools in this field like Kubernetes, CoreOS, Apache Mesos, DC/OS.

11. Logging & Monitoring not only helps you keep a track of your software performance, it also helps you debug issues with great accuracy. While monitoring helps you check and make sure everything is up and running. Some of the well known logging and monitoring tools include Logstash, Fluentd, Takipi, Nagios.
 
3. List of DevOps tools (list the top DevOps tools in each type given below and brief them along with their key features, benefits, Tool’s cost etc)
 
Tools and technologies play important role in the DevOps culture however it is not the only part that needs attention. For all parts of application delivery pipeline, different tools, disruptive innovations, open source initiatives, community plugins and so on are required to keep the entire pipeline running to produce effective outcomes. 

1. Nagios
 
Nagios is one of the most popular free and open source DevOps monitoring tools and is a veteran monitoring solution that is highly effective due to its huge plugin ecosystem. 
With Nagios, one can keep records of events, outages, and failures with an eye on trends with the help of Nagios graphs and reports. All this together helps in forecast outages and errors and detect security threats.
 
Nagios provides below open source monitoring solutions:

Nagios Core - is a command line tool, with all the basic functionalities
Nagios Log Server - lets you search log data and set up alerts about potential threats
Nagios Fusion - monitor multiple networks at the same time
Nagios XI - a web-based GUI and monitoring wizard

Besides plugins, there are many tutorials, add-ons, translations and other utilities for free.
 
2. Monit

Monit is a free open source utility for managing and monitoring processes, programs, files, directories, and filesystems on a UNIX system. Its role is to ensure that any given process on a machine is up and running .
For example, a failure occurs in Nginx, Monit will help to restart the Nginx process
Monit also conducts automatic maintenance and repair and can execute actions in error situations.

$ sudo yum install monit

Once Monit is installed, we can configure it to manage our node application by creating a configuration file in /etc/monit.d/ or /etc/monit/conf.d/, depending on Monit installation location:
In case of a crash, Monit will take care of restarting the application.
It also has a web interface running on port 2812

Note: Make sure to keep a check on restarts by Monit in order to surface problems and implement solutions by monitoring Monit’s log files
 
 
3. ELK – Elasticsearch, Logstash, Kibana
 
ELK Stack is the most common log analytics solution nowadays. It collects logs from all services, applications, networks, tools, servers, and more in an environment into a single, centralized location for processing and analysis. We use elk with x-pack for predictions purposes as well .
Another use for this tool is for security and auditing for example change in user permissions. After receiving alerts on these issues, it is easy to act on unauthorized users and activities.
 
4. Consul
 
Consul is an open source implementation of a distributed key-value store and is a great fit for service discovery and configuration that are built from microservices.It helps in providing internal DNS names for services that acts as a kind of broker to help to sign and register names instead of specific machines.
It can run either as the master or as an agent. The master orchestrates the whole network and maintains the registry. A Consul agent acts as a proxy to the master and forwards all requests to the master .
For example, you have a cluster of multiple machines, you can simply register them as a single entity under Consul and access the cluster easily.
 
5. Jenkins
 
Jenkins is the go-to DevOps automation tool for many software development teams. It’s an open source CI/CD server that allows you to automate the different stages of your delivery pipeline. The main reason for Jenkins popularity is its huge plugin ecosystem offering more than 1,000 plugins makes optimization for easy customization. 

Installation of jenkins can be done on windows , linux and docker and setting up and configure Jenkins server can be done through a web interface. Use already existing plugins as per your needs or create one .
 
6. Docker

Docker is the number one container platform in  2018 .Docker has made containerization popular in the tech world, mainly because it makes distributed development possible and automates the deployment of your apps. We use Docker in production for most services. It eases configuration management, control issues, and scaling by allowing containers to be moved from one place to another. It isolates applications into separate containers, so they become portable and more secure. Docker apps are also OS and platform independent. You can use Docker containers instead of virtual machines .

The best thing of docker is no dependency management. You can package all dependencies within the app’s container and ship the whole thing as an independent unit. Then, you can run the app on any machine or platform without a headache.

Docker is also great for cloud computing. In recent years, all major cloud providers such as AWS and Google Cloud added support for Docker.


7. Ansible
 
Ansible is a deployment and  management tool that can operate with zero dependencies. You can use it to configure your infrastructure and automate deployment. Its main selling points compared to other similar DevOps tools are simplicity and ease of use. Ansible follows the same Infrastructure As Code (IAC) approach and uses the super simple YAML syntax .

Agentless architecture is another frequently mentioned feature of Ansible. As no daemons or agents run in the background, Ansible is a secure and lightweight solution for configuration management automation

 
8. Git (GitHub)

Git is most popular DevOps tools,created 10 years ago following the Linux community’s need for SCM across the software industry. It’s a distributed SCM (source code management) tool that could support distributed systems. Git allows you to track the progress of your development work. You can save different versions of your source code and return to a previous version when necessary. Moreover to its great forking and pull request features, GitHub also has plugins that can connect with Jenkins to facilitate integration and deployment.

To integrate Git with your DevOps workflow, you also need to host repositories where your team members can push their work. Currently, the two best online Git repo hosting services are GitHub and Bitbucket . Both GitHub and Bitbucket have fantastic integrations. For example, you can integrate them with Slack, so everyone on your team gets notified whenever someone makes a new commit.

9. Kubernetes

Last and the most widely accepted tool of this year, everyone is talking about Kubernetes. It’s a container orchestration platform that takes containerization to the next level. It works well with Docker or any of its alternatives. It manages containers at scale by making them as logical units .

With Kubernetes, you don’t have to tie your containerized apps to a single machine. Instead, you can deploy it to a cluster of computers. Kubernetes automates the distribution and scheduling of containers across the whole cluster.
A Kubernetes cluster consists of one master and several worker nodes. The master node implements your pre-defined rules and deploys the containers to the worker nodes.



4. Things to keep in mind while choosing the right DevOps tools

In a DevOps organization, everyone on the team is responsible for some level of selecting the right tools of the trade . A developer implements bugs tracking in his software, a sysadmin troubleshoots problems on her hardware, and the QA team spends a great majority of their time first finding problems and then trying to locate the root cause. When everyone on the DevOps team uses the same proven troubleshooting techniques and tools which makes the job easier and  the whole team benefits.

Step-1: Understand the collaboration and shared tools strategy for the Dev, QA, and infrastructure automation teams

DevOps teams need to come up with a common tools strategy that lets them collaborate across development, testing, and deployment (see Figure 1). This does not mean that you should spend days arguing about tooling; it means you work on a common strategy that includes DevOps...
Processes
Communications and collaboration planning
Continuous development tools
Continuous integration tools
Continuous testing tools
Continuous deployment tools
Continuous operations and CloudOps tools
Coming up with a common tools strategy does not drive tool selection — at least not at this point. It means picking a common share strategy that all can agree upon and that is reflective of your business objectives for DevOps.
The tool selection process often drives miscommunication within teams. A common DevOps tools strategy must adhere to a common set of objectives while providing seamless collaboration and integration between tools. The objective is to automate everything: Developers should be able to send new and changed software to deployment and operations without humans getting in the way of the processes. 
Step-2: Use tools to capture every request
No ad hoc work or changes should occur outside of the DevOps process, and DevOps tooling should capture every request for new or changed software. This is different from logging the progress of software as it moves through the processes. DevOps provides the ability to automate the acceptance of change requests that come in either from the business or from other parts of the DevOps teams.
Examples include changing software to accommodate a new tax model for the business, or changing the software to accommodate a request to improve performance of the database access module
Step-3: Use agile Kanban project management for automation and DevOps requests that can be dealt with in the tooling
Kanban is a framework used to implement agile development that matches the amount of work in progress to the team's capacity. It gives teams more flexible planning options, faster output, clear focus, and transparency throughout the development cycle. 
Kanban tools provide the ability to see what you do today, or all the items in context with each other. Also, it limits the amount of work in progress, which helps balance flow-based approaches so that you don’t attempt to do too much at once. Finally, Kanban tools can enhance flow. In Kanban, when one work item is complete, the next highest item from the backlog gets pushed to development.
Step-4: Use tools to log metrics on both manual and automated processes
Select tools that can help you understand the productivity of your DevOps processes, both automated and manual, and to determine if they are working in your favor. You need to do two things with these tools. First, define which metrics are relevant to the DevOps processes, such as speed to deployment versus testing errors found. Second, define automated processes to correct issues without human involvement. An example would be dealing with software scaling problems automatically on cloud-based platforms. 
Step-5: Implement test automation and test data provisioning tooling
Test automation is more than just automated testing; it’s the ability to take code and data and run standard testing routines to ensure the quality of the code, the data, and the overall solution. With DevOps, testing must be continuous. The ability to toss code and data into the process means you need to place the code into a sandbox, assign test data to the application, and run hundreds — or thousands — of tests that, when completed, will automatically promote the code down the DevOps process, or return it back to the developers for rework.
Step 6: Perform acceptance tests for each deployment tooling
Part of the testing process should define the acceptance tests that will be a part of each deployment, including levels of acceptance for the infrastructure, applications, data, and even the test suite that you’ll use. For the tool set selected, those charged with DevOps testing processes should to spend time defining the acceptance tests, and ensuring that the tests meet with the acceptance criteria selected.
These tests may be changed at any time by development or operations. And as applications evolve over time, you'll need to bake new requirements into the software, which in turn should be tested against these new requirements. For example, you might need to test changes to compliance issues associated with protecting certain types of data, or performance issues to ensure that the enterprise meets service-level agreements.
Step -6:  FAVOR PAST SOLUTIONS
The fact of the matter is that most problems happen more than once. One of the reasons that some people have an uncanny ability to isolate an issue quickly is that they have experienced the same thing many times before. You will become a better and faster troubleshooter the more problems you are exposed to.When you are solving a problem you will often see the same symptoms that you’ve seen before. Try to remember what the root cause was the last time and what steps you used to isolate the issue. More often than not, when the symptoms are the same, the root cause will be the same, and if you are able to recognize that, you can solve the problem that much faster. 
Step-7: Ensure continuous feedback between the teams to spot gaps, issues, and inefficiencies
Finally, you'll need feedback loops to automate communication between tests that spot issues, and tests that process needs to be supported by your chosen tool. The right tool must identify the issue using either manual or automated mechanisms, and tag the issue with the artifact so the developers or operators understand what occurred, why it occurred, and where it occurred.
The tool should also help to define a chain of communications with all automated and human players in the loop. This includes an approach to correct the problem in collaboration with everyone on the team, a consensus as to what type of resolution you should apply, and a list of any additional code or technology required. Then comes the push to production, where the tool should help you define tracking to report whether the resolution made it through automated testing, automated deployment, and automated operations.


 
 
 
 
 
 
 
 
.
 
 
 
 
 
 
 
 
 
 
 
 




