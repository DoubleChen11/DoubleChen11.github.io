---
layout: default
title: About
---
# Python在自动化办公中的数学公式与统计模型示例

### 1. 线性回归模型

线性回归是分析两个及以上变量间线性关系的统计方法。其表达式为：

$$y = \beta_0 + \beta_1x_1 + \beta_2x_2 + \dots + \beta_nx_n + \epsilon$$

下面是使用Python实现简单线性回归的代码：

```python
import numpy as np
from sklearn.linear_model import LinearRegression

# 示例数据
X = np.array([1, 2, 3, 4, 5]).reshape(-1, 1)
y = np.array([2, 4, 6, 8, 10])

# 创建并拟合模型
model = LinearRegression()
model.fit(X, y)

# 输出系数
print(f"斜率: {model.coef_[0]}")
print(f"截距: {model.intercept_}")
```

### 2. 时间序列预测（移动平均法）

移动平均法可用于平滑时间序列数据，其公式为：

$$MA_t = \frac{y_{t-1} + y_{t-2} + \dots + y_{t-n}}{n}$$

下面是Python实现移动平均的代码：

```python
def moving_average(data, window_size):
    """
    计算移动平均值
    
    参数:
    data (list): 时间序列数据
    window_size (int): 窗口大小
    
    返回:
    list: 移动平均结果
    """
    return [sum(data[i:i+window_size])/window_size for i in range(len(data)-window_size+1)]

# 示例数据
data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
window_size = 3

# 计算移动平均
ma_result = moving_average(data, window_size)
print(f"移动平均结果: {ma_result}")
```

### 3. 数据预处理：Min-Max缩放

Min-Max缩放能把数据缩放到[0, 1]区间，公式如下：

$$X_{norm} = \frac{X - X_{min}}{X_{max} - X_{min}}$$

下面是Python实现Min-Max缩放的代码：

```python
def min_max_scaling(data):
    """
    实现Min-Max缩放
    
    参数:
    data (list): 输入数据
    
    返回:
    list: 缩放后的数据
    """
    min_val = min(data)
    max_val = max(data)
    return [(x - min_val) / (max_val - min_val) for x in data]

# 示例数据
data = [10, 20, 30, 40, 50]

# 进行缩放
scaled_data = min_max_scaling(data)
print(f"缩放后的数据: {scaled_data}")
```

### 4. 决策树核心：信息熵计算

信息熵用于衡量数据的不确定性，公式为：

$$H(X) = -\sum_{i=1}^{n} P(x_i) \log_2 P(x_i)$$

下面是Python计算信息熵的代码：

```python
import numpy as np

def entropy(labels):
    """
    计算信息熵
    
    参数:
    labels (list): 标签列表
    
    返回:
    float: 信息熵值
    """
    _, counts = np.unique(labels, return_counts=True)
    probabilities = counts / len(labels)
    return -np.sum(probabilities * np.log2(probabilities))

# 示例数据
labels = ['是', '是', '否', '否', '否']

# 计算信息熵
entropy_value = entropy(labels)
print(f"信息熵: {entropy_value}")
```

### 5. 投资评估：净现值(NPV)计算

净现值（NPV）可评估投资的盈利能力，公式为：

$$NPV = \sum_{t=0}^{n} \frac{CF_t}{(1+r)^t}$$

下面是Python计算净现值的代码：

```python
def npv(rate, cashflows):
    """
    计算净现值
    
    参数:
    rate (float): 折现率
    cashflows (list): 现金流列表，第一个值通常为初始投资（负数）
    
    返回:
    float: 净现值
    """
    total = 0.0
    for i, cashflow in enumerate(cashflows):
        total += cashflow / (1 + rate) ** i
    return total

# 示例数据
rate = 0.1  # 10% 折现率
cashflows = [-1000, 300, 300, 300, 300]  # 初始投资1000，后续4年每年收入300

# 计算净现值
npv_value = npv(rate, cashflows)
print(f"净现值: {npv_value}")
```
<br>
<p>以上内容展示了Python在数据分析、预测建模和财务分析中的典型应用场景。</p>