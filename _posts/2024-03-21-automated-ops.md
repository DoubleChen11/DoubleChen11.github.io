---
layout: post
title: "Python自动化运维：使用Ansible和SaltStack"
date: 2024-03-21
author: DoubleChen11
categories: [自动化运维]
tags: [运维自动化, Python]
---

# Python自动化运维：使用Ansible和SaltStack

## 引言
在现代IT运维中，自动化已经成为提高效率的关键。本文将介绍如何使用Python结合Ansible和SaltStack来实现自动化运维。

## Ansible自动化

### 1. 基础配置
```yaml
# inventory.yml
[webservers]
web1 ansible_host=192.168.1.10
web2 ansible_host=192.168.1.11

[databases]
db1 ansible_host=192.168.1.20
```

### 2. Playbook示例
```yaml
# deploy_web.yml
---
- hosts: webservers
  tasks:
    - name: 安装Nginx
      apt:
        name: nginx
        state: present
    
    - name: 启动Nginx服务
      service:
        name: nginx
        state: started
        enabled: yes
```

## SaltStack自动化

### 1. 状态文件
```yaml
# /srv/salt/webserver/init.sls
nginx:
  pkg.installed:
    - name: nginx
  
  service.running:
    - name: nginx
    - enable: True
```

### 2. 执行命令
```bash
# 应用状态
salt '*' state.apply webserver

# 执行远程命令
salt '*' cmd.run 'systemctl status nginx'
```

## 监控系统

### 1. 使用Prometheus
```python
from prometheus_client import start_http_server, Gauge
import time

# 创建指标
cpu_usage = Gauge('cpu_usage', 'CPU使用率')
memory_usage = Gauge('memory_usage', '内存使用率')

# 启动HTTP服务器
start_http_server(8000)

# 更新指标
while True:
    cpu_usage.set(get_cpu_usage())
    memory_usage.set(get_memory_usage())
    time.sleep(1)
```

### 2. 告警配置
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
      summary: "高CPU使用率"
      description: "服务器 {% raw %}{{ $labels.instance }}{% endraw %} CPU使用率超过80%"
```

## 自动化脚本

### 1. 日志分析
```python
import re
from collections import Counter

def analyze_logs(log_file):
    with open(log_file) as f:
        logs = f.readlines()
    
    # 统计错误类型
    errors = Counter()
    for log in logs:
        if 'ERROR' in log:
            error_type = re.search(r'ERROR: (.*)', log)
            if error_type:
                errors[error_type.group(1)] += 1
    
    return errors
```

### 2. 系统健康检查
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

## 总结
通过本文的学习，你已经了解了如何使用Python结合Ansible和SaltStack来实现自动化运维。这些工具可以帮助你提高运维效率，减少人为错误。

## 下一步学习建议
1. 深入学习Ansible的高级特性
2. 学习SaltStack的配置管理
3. 了解容器化运维
4. 掌握监控系统搭建
5. 学习自动化测试在运维中的应用 