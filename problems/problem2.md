# Description

Consider an array of **n** distinct integers, **arr = [a[0], ..., a[n-1]]**. George can swap any two elements of the array any number of times. An array is beautiful if the sum of **|arr[i] - arr[i-1]|** among **0 < i < n** is minimal.

Given the array **arr**, determine and return the minimum number of swaps that should be performed in order to make the array beautiful.

# Function Description

Complete the lilysHomework function in the editor below. It should return an integer that represents the minimum number of swaps required. 
lilysHomework has the following parameter(s):
arr: an integer array

# Input Format

The first line contains a single integer, **n**, the number of elements in **arr**. The second line contains **n** space-separated integers **arr[i]**.

# Constraints
- 1 <= n <= 100000
- 1 <= arr[i] <= 2 * 1O^9

# Output Format

Return the minimum number of swaps needed to make the array beautiful.

# Example

### Sample Input 1
4
2 5 3 1

### Sample Output 1
2

### Explanation 1

Let's define array **B = [1, 2, 3, 5]** to be the beautiful reordering of **arr**. The sum of the absolute values of differences between its adjacent elements is minimal among all permutations and only two swaps (**1** with **2** and then **2** with **5**) were performed.