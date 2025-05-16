---
layout: default
title: About
---
# Mathematical Formulas and Statistical Models in Python for Office Automation

### 1. Linear Regression Model

Linear regression is a statistical method for analyzing the linear relationship between two or more variables. Its expression is:

$$y = \beta_0 + \beta_1x_1 + \beta_2x_2 + \dots + \beta_nx_n + \epsilon$$

Here's the Python implementation of simple linear regression:

```python
import numpy as np
from sklearn.linear_model import LinearRegression

# Sample data
X = np.array([1, 2, 3, 4, 5]).reshape(-1, 1)
y = np.array([2, 4, 6, 8, 10])

# Create and fit the model
model = LinearRegression()
model.fit(X, y)

# Output coefficients
print(f"Slope: {model.coef_[0]}")
print(f"Intercept: {model.intercept_}")
```

### 2. Time Series Forecasting (Moving Average)

Moving average can be used to smooth time series data. The formula is:

$$MA_t = \frac{y_{t-1} + y_{t-2} + \dots + y_{t-n}}{n}$$

Here's the Python implementation of moving average:

```python
def moving_average(data, window_size):
    """
    Calculate moving average
    
    Parameters:
    data (list): Time series data
    window_size (int): Window size
    
    Returns:
    list: Moving average results
    """
    return [sum(data[i:i+window_size])/window_size for i in range(len(data)-window_size+1)]

# Sample data
data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
window_size = 3

# Calculate moving average
ma_result = moving_average(data, window_size)
print(f"Moving average results: {ma_result}")
```

### 3. Data Preprocessing: Min-Max Scaling

Min-Max scaling can normalize data to the range [0, 1]. The formula is:

$$X_{norm} = \frac{X - X_{min}}{X_{max} - X_{min}}$$

Here's the Python implementation of Min-Max scaling:

```python
def min_max_scaling(data):
    """
    Implement Min-Max scaling
    
    Parameters:
    data (list): Input data
    
    Returns:
    list: Scaled data
    """
    min_val = min(data)
    max_val = max(data)
    return [(x - min_val) / (max_val - min_val) for x in data]

# Sample data
data = [10, 20, 30, 40, 50]

# Perform scaling
scaled_data = min_max_scaling(data)
print(f"Scaled data: {scaled_data}")
```

### 4. Decision Tree Core: Information Entropy Calculation

Information entropy is used to measure data uncertainty. The formula is:

$$H(X) = -\sum_{i=1}^{n} P(x_i) \log_2 P(x_i)$$

Here's the Python code for calculating information entropy:

```python
import numpy as np

def entropy(labels):
    """
    Calculate information entropy
    
    Parameters:
    labels (list): List of labels
    
    Returns:
    float: Information entropy value
    """
    _, counts = np.unique(labels, return_counts=True)
    probabilities = counts / len(labels)
    return -np.sum(probabilities * np.log2(probabilities))

# Sample data
labels = ['Yes', 'Yes', 'No', 'No', 'No']

# Calculate entropy
entropy_value = entropy(labels)
print(f"Entropy: {entropy_value}")
```

### 5. Investment Evaluation: Net Present Value (NPV) Calculation

Net Present Value (NPV) can evaluate investment profitability. The formula is:

$$NPV = \sum_{t=0}^{n} \frac{CF_t}{(1+r)^t}$$

Here's the Python code for calculating NPV:

```python
def npv(rate, cashflows):
    """
    Calculate Net Present Value
    
    Parameters:
    rate (float): Discount rate
    cashflows (list): List of cash flows, first value is usually initial investment (negative)
    
    Returns:
    float: Net Present Value
    """
    total = 0.0
    for i, cashflow in enumerate(cashflows):
        total += cashflow / (1 + rate) ** i
    return total

# Sample data
rate = 0.1  # 10% discount rate
cashflows = [-1000, 300, 300, 300, 300]  # Initial investment 1000, 300 income for next 4 years

# Calculate NPV
npv_value = npv(rate, cashflows)
print(f"Net Present Value: {npv_value}")
```
<br>
<p>The above content demonstrates typical applications of Python in data analysis, predictive modeling, and financial analysis.</p>