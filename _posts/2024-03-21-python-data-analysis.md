---
layout: post
title: "Python Data Analysis: Data Processing with Pandas and NumPy"
date: 2024-03-21
author: DoubleChen11
categories: [Python Data Analysis]
tags: [Python, Data Analysis]
---

# Python Data Analysis: Data Processing with Pandas and NumPy

## Introduction
In the field of data science, Python is one of the most popular programming languages. This article will introduce how to use Pandas and NumPy, two powerful libraries, for data analysis.

## Data Processing Basics

### 1. NumPy Array Operations
```python
import numpy as np

# Create array
arr = np.array([1, 2, 3, 4, 5])
# Array operations
arr_squared = arr ** 2
# Statistical calculations
mean = np.mean(arr)
std = np.std(arr)
```

### 2. Pandas Data Processing
```python
import pandas as pd

# Create DataFrame
df = pd.DataFrame({
    'name': ['Alice', 'Bob', 'Charlie'],
    'age': [25, 30, 35],
    'salary': [50000, 60000, 70000]
})

# Data filtering
high_salary = df[df['salary'] > 55000]
```

## Data Visualization

### 1. Using Matplotlib
```python
import matplotlib.pyplot as plt

# Create line plot
plt.plot(df['age'], df['salary'], 'o-')
plt.title('Age vs Salary Relationship')
plt.xlabel('Age')
plt.ylabel('Salary')
plt.show()
```

### 2. Using Seaborn
```python
import seaborn as sns

# Create box plot
sns.boxplot(x='age', y='salary', data=df)
plt.show()
```

## Data Analysis Case Studies

### 1. Data Cleaning
```python
# Handle missing values
df_cleaned = df.dropna()
# Handle duplicate values
df_unique = df.drop_duplicates()
```

### 2. Data Aggregation
```python
# Group by age and calculate statistics
age_stats = df.groupby('age').agg({
    'salary': ['mean', 'std', 'count']
})
```

## Advanced Analysis Techniques

### 1. Time Series Analysis
```python
# Create time series data
dates = pd.date_range('2024-01-01', periods=100)
ts = pd.Series(np.random.randn(100), index=dates)
# Calculate moving average
ma = ts.rolling(window=7).mean()
```

### 2. Pivot Tables
```python
# Create pivot table
pivot = pd.pivot_table(df, 
    values='salary',
    index='age',
    columns='name',
    aggfunc='mean'
)
```

## Summary
Through this article, you have learned the basic methods of data analysis using Python. The Pandas and NumPy libraries provide powerful tools for data analysis.

## Next Steps
1. Deep dive into Pandas advanced features
2. Learn data visualization techniques
3. Understand machine learning basics
4. Master data cleaning techniques
5. Learn big data processing technologies 