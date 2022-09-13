---
sidebar_position: 2
---

# Prometheus

[Prometheus](https://prometheus.io/) is a decentralized metrics aggregator and is used to scrape the metrics/activitys which are present on the different endpoints of your application which is maintained by highly mature open source community.Prometheus can be easily pulled as a docker image.

**Features**

- Unlike generic monitoring systems, Prometheus uses pull insted of push method which saves a lot of valueable resouces that can be used by the application.
- Prometheus supports extensibility by letting grafana take advantage of its beautifully crafted visual dashboard.
- Supports multiple client libraries and languages like Node, Python, Go etc.
- Integrated with many exporters ex:Docker,Haproxy for ease of scraping of endpoints.

**Pros**

- Easy to setup.
- Uses yaml files for deployment which makes learning curve very minimal.
- Gentle on resources.
- Cost effective

**Cons**

- Sometimes tends to be a lack of details
- Cannot be used for per-request billing
- Config files can become extremely large when there is an increase of microservices.
