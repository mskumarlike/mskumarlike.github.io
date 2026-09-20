# Fomin's Growth Diagrams

Fomin's growth diagrams provide a geometric framework for understanding the **Robinson correspondence** and its generalizations to differential posets. Instead of viewing insertion as an algorithm, one studies local rules on a square grid whose vertices are labelled by elements of a graded poset.

For a graded poset $P$, let $f_\lambda$ denote the number of saturated chains from the minimum element $\hat{0}$ to $\lambda$. One of the fundamental identities is

$$
\sum_{|\lambda|=n} f_\lambda^2 = n!.
$$

A growth diagram consists of a grid whose vertices are labelled by elements of $P$. Adjacent labels satisfy covering relations, and each square obeys a **local rule**.

For example, if three vertices of a square are labelled by $\lambda,\mu,\nu$, then the fourth label $\rho$ is determined uniquely by the local rule whenever the growth is semimodular.

The covering relation is denoted by $\lambda \lessdot \mu$, meaning that $\mu$ covers $\lambda$.

The rank function satisfies

$$
|\mu| = |\lambda| + 1
$$

whenever $\lambda \lessdot \mu$.
