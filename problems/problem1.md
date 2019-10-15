# Description

Lauren has a chart of distinct projected prices for a house over the next several years. She must buy the house in one year and sell it in another, and she must do so at a loss. She wants to minimize her financial loss.

For example, the house is valued at ***price = [5, 10, 3]*** over the next  years. She can purchase the home in any year, but she must resell the house at a loss in one of the following years. Her minimum loss would be incurred by purchasing in year **1** at **price[0] = 5** and reselling in year **3** at **price[2] = 3**.

Find and print the minimum amount of money Lauren must lose if she buys the house and resells it within the next **n** years.

Note: It's guaranteed that a valid answer exists.

# Function Description

Complete the minimumLoss function in the editor below. It should return an integer that represents the minimum loss that can be achieved.
minimumLoss has the following parameter(s): price: an array of integers that represent prices at each year

# Input Format

The first line contains an integer **n**, the number of years of house data.
The second line contains **n** space-separated long integers describing each **price[i]**.

# Constraints
- 2 <= n <= 200000
- 1 <= price[i] <= 1O^16
- All the prices are distinct.
- A valid answer exists.

# Output Format

Print a single integer denoting the minimum amount of money Lauren must lose if she buys and resells the house within the next **n** years.

# Example

### Sample Input 1
5
20 7 8 2 5

### Sample Output 1
2

### Explanation 1

Lauren buys the house in year **2** at **price[1] = 7** and sells it in year **5** at **price[4] = 5** for a minimal loss of **7 - 5 = 2**


### Sample Input 2
5
20 15 8 2 12

### Sample Output 2
3

### Explanation 2

Lauren buys the house in year **2** at **price[1] = 15** and sells it in year **5** at **price[4] = 12** for a minimal loss of **15 - 12 = 3**


### Sample Input 3
3
5 10 3

### Sample Output 3
2

### Explanation 3

Lauren buys the house in year **1** at **price[0] = 5** and sells it in year **3** at **price[2] = 3** for a minimal loss of **5 - 3 = 2**