---
layout: post
title: "Python Automated Operations: Using Ansible and SaltStack"
date: 2024-03-21
author: DoubleChen11
categories: [Automated Operations]
tags: [Ops Automation, Python]
---

# Python Automated Operations: Using Ansible and SaltStack

## Introduction
In modern IT operations, automation has become the key to improving efficiency. This article introduces how to use Python together with Ansible and SaltStack to achieve automated operations.

## Ansible Automation

### 1. Basic Configuration
```yaml
# inventory.yml
[webservers]
web1 ansible_host=192.168.1.10
web2 ansible_host=192.168.1.11

[databases]
db1 ansible_host=192.168.1.20
```

### 2. Playbook Example
```yaml
# deploy_web.yml
---
- hosts: webservers
  tasks:
    - name: Install Nginx
      apt:
        name: nginx
        state: present
    
    - name: Start Nginx Service
      service:
        name: nginx
        state: started
        enabled: yes
```

## SaltStack Automation

### 1. State File
```yaml
# /srv/salt/webserver/init.sls
nginx:
  pkg.installed:
    - name: nginx
  
  service.running:
    - name: nginx
    - enable: True
```

### 2. Command Execution
```bash
# Apply state
salt '*' state.apply webserver

# Execute remote command
salt '*' cmd.run 'systemctl status nginx'
```

## Monitoring Systems

### 1. Using Prometheus
```python
from prometheus_client import start_http_server, Gauge
import time

# Create metrics
cpu_usage = Gauge('cpu_usage', 'CPU Usage')
memory_usage = Gauge('memory_usage', 'Memory Usage')

# Start HTTP server
start_http_server(8000)

# Update metrics
while True:
    cpu_usage.set(get_cpu_usage())
    memory_usage.set(get_memory_usage())
    time.sleep(1)
```

### 2. Alert Configuration
```yaml
# alertmanager.yml
groups:
- name: example
  rules:
  - alert: HighCPUUsage
    expr: cpu_usage > 80
    for: 5m
    labels:
      severity: warning
    annotations:
      summary: "High CPU Usage"
      description: "Server {% raw %}{{ $labels.instance }}{% endraw %} CPU usage exceeds 80%"
```

## Automation Scripts

### 1. Log Analysis
```python
import re
from collections import Counter

def analyze_logs(log_file):
    with open(log_file) as f:
        logs = f.readlines()
    
    # Count error types
    errors = Counter()
    for log in logs:
        if 'ERROR' in log:
            error_type = re.search(r'ERROR: (.*)', log)
            if error_type:
                errors[error_type.group(1)] += 1
    
    return errors
```

### 2. System Health Check
```python
def check_system_health():
    checks = {
        'disk_usage': check_disk_usage(),
        'memory_usage': check_memory_usage(),
        'cpu_usage': check_cpu_usage(),
        'service_status': check_services()
    }
    
    return all(checks.values()), checks
```

## Summary
Through this article, you have learned how to use Python with Ansible and SaltStack to achieve automated operations. These tools can help you improve operational efficiency and reduce human error.

## Next Steps
1. Deep dive into advanced features of Ansible
2. Learn SaltStack configuration management
3. Understand containerized operations
4. Master monitoring system setup
5. Learn about automated testing in operations 