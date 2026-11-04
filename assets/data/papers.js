/*
 * PAPERS
 * Add a paper by copying one { ... } block inside this list.
 * Give every paper a unique `id`; paper-notes.js uses it to attach notes.
 * The page sorts by date automatically. `venue` and extra `links` are optional.
 */
window.PAPERS = [
  {
    id: "transient-pdmc-2025",
    date: "2025-09-19",
    title: "Transient regime of piecewise deterministic Monte Carlo algorithms",
    url: "https://arxiv.org/abs/2509.16062",
    authors: "Sanket Agrawal, Joris Bierkens, Kengo Kamatani, and Gareth O. Roberts",
    links: [
      { label: "arXiv:2509.16062", url: "https://arxiv.org/abs/2509.16062" }
    ]
  },
  {
    id: "anisotropic-pdmc-2025",
    date: "2025-08-01",
    title: "Scaling of piecewise deterministic Monte Carlo for anisotropic targets",
    url: "https://doi.org/10.3150/24-BEJ1807",
    authors: "Joris Bierkens, Kengo Kamatani, and Gareth O. Roberts",
    venue: "Bernoulli 31(3), 2323–2350",
    links: [
      { label: "DOI", url: "https://doi.org/10.3150/24-BEJ1807" },
      { label: "arXiv", url: "https://arxiv.org/abs/2305.00694" }
    ]
  },
  {
    id: "automated-pdmp-2024",
    date: "2024-08-07",
    title: "Automated techniques for efficient sampling of piecewise-deterministic Markov processes",
    url: "https://arxiv.org/abs/2408.03682",
    authors: "Charly Andral and Kengo Kamatani",
    venue: "Statistics and Computing, Accepted",
    links: [
      { label: "arXiv", url: "https://arxiv.org/abs/2408.03682" },
      { label: "Code", url: "https://github.com/charlyandral/pdmp_jax" }
    ]
  },
  {
    id: "non-reversible-guided-2023",
    date: "2023-09-01",
    title: "Non-reversible guided Metropolis kernel",
    url: "https://doi.org/10.1017/jpr.2022.109",
    authors: "Kengo Kamatani and Xiaolin Song",
    venue: "Journal of Applied Probability 60(3), 955–981",
    links: [
      { label: "DOI", url: "https://doi.org/10.1017/jpr.2022.109" },
      { label: "arXiv", url: "https://arxiv.org/abs/2005.05584" }
    ]
  },
  {
    id: "pdmp-scaling-2022",
    date: "2022-10-01",
    title: "High-dimensional scaling limits of piecewise deterministic sampling algorithms",
    url: "https://doi.org/10.1214/21-AAP1762",
    authors: "Joris Bierkens, Kengo Kamatani, and Gareth O. Roberts",
    venue: "Annals of Applied Probability 32(5), 3361–3407",
    links: [
      { label: "DOI", url: "https://doi.org/10.1214/21-AAP1762" },
      { label: "arXiv", url: "https://arxiv.org/abs/1807.11358" }
    ]
  },
  {
    id: "matrix-spaces-2022",
    date: "2022-09-01",
    title: "MCMC algorithms for posteriors on matrix spaces",
    url: "https://doi.org/10.1080/10618600.2022.2058953",
    authors: "Alexandros Beskos and Kengo Kamatani",
    venue: "Journal of Computational and Graphical Statistics 31(3), 721–738",
    links: [
      { label: "DOI", url: "https://doi.org/10.1080/10618600.2022.2058953" },
      { label: "arXiv", url: "https://arxiv.org/abs/2008.0290" }
    ]
  },
  {
    id: "haar-weave-2022",
    date: "2022-02-21",
    title: "Haar-Weave-Metropolis kernel",
    url: "https://doi.org/10.5109/4755997",
    authors: "Kengo Kamatani and Xiaolin Song",
    venue: "Bulletin of Informatics and Cybernetics 54(1), 1–31",
    links: [
      { label: "DOI", url: "https://doi.org/10.5109/4755997" },
      { label: "arXiv", url: "https://arxiv.org/abs/2111.06148" }
    ]
  },
  {
    id: "boomerang-2020",
    date: "2020-07-13",
    title: "The Boomerang Sampler",
    url: "https://proceedings.mlr.press/v119/bierkens20a.html",
    authors: "Joris Bierkens, Sebastiano Grazzi, Kengo Kamatani, and Gareth O. Roberts",
    venue: "Proceedings of the 37th International Conference on Machine Learning",
    links: [
      { label: "Paper", url: "https://proceedings.mlr.press/v119/bierkens20a.html" },
      { label: "arXiv", url: "https://arxiv.org/abs/2006.13777" },
      { label: "Video", url: "https://icml.cc/virtual/2020/poster/6487" }
    ]
  },
  {
    id: "random-walk-high-dim-2020",
    date: "2020-01-01",
    title: "Random walk Metropolis algorithm in high dimension with non-Gaussian target distributions",
    url: "https://doi.org/10.1016/j.spa.2019.03.002",
    authors: "Kengo Kamatani",
    venue: "Stochastic Processes and their Applications 130(1), 297–327",
    links: [
      { label: "DOI", url: "https://doi.org/10.1016/j.spa.2019.03.002" }
    ]
  },
  {
    id: "stable-levy-sde-2019",
    date: "2019-06-01",
    title: "Bayesian inference for stable Lévy-driven stochastic differential equations with high-frequency data",
    url: "https://doi.org/10.1111/sjos.12362",
    authors: "Ajay Jasra, Kengo Kamatani, and Hiroki Masuda",
    venue: "Scandinavian Journal of Statistics 46(2), 545–574",
    links: [
      { label: "DOI", url: "https://doi.org/10.1111/sjos.12362" }
    ]
  },
  {
    id: "riccati-diffusions-2019",
    date: "2019-04-01",
    title: "On one-dimensional Riccati diffusions",
    url: "https://doi.org/10.1214/18-AAP1431",
    authors: "Adrian N. Bishop, Pierre Del Moral, Kengo Kamatani, and Bruno Rémillard",
    venue: "Annals of Applied Probability 29(2), 1127–1187",
    links: [
      { label: "DOI", url: "https://doi.org/10.1214/18-AAP1431" }
    ]
  },
  {
    id: "heavy-tailed-mcmc-2018",
    date: "2018-11-01",
    title: "An efficient strategy for the Markov chain Monte Carlo in high dimension with a heavy-tailed target probability distribution",
    url: "https://doi.org/10.3150/17-BEJ976",
    authors: "Kengo Kamatani",
    venue: "Bernoulli 24(4B), 3711–3750",
    links: [
      { label: "DOI", url: "https://doi.org/10.3150/17-BEJ976" }
    ]
  }
];
