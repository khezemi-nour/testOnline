# Description

You have two strings, **a** and **b**. Find a string, **s**, such that:

**s** can be expressed as **s = sa + sb** where **sa** is a non-empty substring of **a** and **sb** is a non-empty substring of **b**.
**s** is a palindromic string.
The length of **s** is as long as possible.
For each of the **q** pairs of strings (**ai** and **bi**) received as input, find and print string **si** on a new line. If you're able to form more than one valid string **si**, print whichever one comes first alphabetically. If there is no valid answer, print **-1** instead.

# Input Format

The first line contains a single integer, **q**, denoting the number of queries. The subsequent lines describe each query over two lines:
- The first line contains a single string denoting **a**.
- The second line contains a single string denoting **b**.

# Constraints
**1 <= q <= 10** 
**1 <= |a| <= 100000**
**1 <= |b| <= 100000**
**a** and **b** contain only lowercase English letters.
Sum of |a| over all queries does not exceed **200000**
Sum of |b| over all queries does not exceed **200000**

# Output Format

For each pair of strings (**ai** and **bi**), find some **si** satisfying the conditions above and print it on a new line. If there is no such string, print **-1** instead.

# Example

### Sample Input

3
bac
bac
abc
def
jdfh
fds

### Sample Output

aba
-1
dfhfd