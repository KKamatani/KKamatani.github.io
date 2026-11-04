/*
 * NOTES ATTACHED TO PAPERS
 * `paperId` must match the `id` of its paper in papers.js.
 * Copy one { ... } block to add another background note or correction.
 */
window.PAPER_NOTES = [
  {
    paperId: "automated-pdmp-2024",
    kind: "Implementation",
    title: "Use JAX 64-bit precision",
    paragraphs: [
      "The JAX implementation should use 64-bit mode to improve numerical stability."
    ],
    code: "jax.config.update(\"jax_enable_x64\", True)"
  },
  {
    paperId: "non-reversible-guided-2023",
    kind: "Background",
    title: "How the project started",
    paragraphs: [
      "This paper extends the directional idea behind Gustafson’s method to multidimensional settings. Haar measure on a locally compact topological group provides a natural direction and leads to a simple class of non-reversible MCMC methods.",
      "The collaboration began around a workshop where we had hoped to meet Persi Diaconis in person. The COVID-19 pandemic moved the meeting online, so that encounter never happened.",
      "Christian Robert later discussed the work on Xi’an’s Og, accompanied by a photograph from Mount Koya."
    ],
    links: [
      { label: "Xi’an’s Og", url: "https://xianblog.fr/2020/06/04/non-reversible-guided-metropolis-hastings/" },
      { label: "Video by Xiaolin Song", url: "https://www.youtube.com/watch?index=10&list=PLidqLPRgLpiMQTWVGogbq1H0pjq6b7D2S&v=o1bwCGa9SE4" },
      { label: "Workshop", url: "https://www.lorentzcenter.nl/non-reversible-markovian-monte-carlo-2021.html" }
    ]
  },
  {
    paperId: "pdmp-scaling-2022",
    kind: "Correction",
    title: "Figure 1 correction",
    paragraphs: [
      "In the right panel of Figure 1, the vertical axis should begin at zero when ρ = 0. Hirofumi Shiba prepared the corrected figure."
    ]
  },
  {
    paperId: "stable-levy-sde-2019",
    kind: "Correction",
    title: "Remark after Algorithm 1",
    paragraphs: [
      "The remark following Algorithm 1 should be disregarded because its proposed joint distribution of V and V* is not exchangeable. Algorithm 1 itself remains valid."
    ]
  }
];
