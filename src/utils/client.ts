import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId:"kbgxgxni",
  dataset: "production",
  apiVersion: "2022-03-10",
  useCdn: false,
  token:
    "skZ5TWubLIzdX8kCPgjGZEhII61OIQZrDzndZf1SnxnZKO9o2hVh8A03mbTt1sgATe50vOnfjFNqmZJUq8B6nOyKiraIQUvRjPQb8BjnHoha7gESQZhzX3b3tD0qVmafFLx5J9e5ZaBaz2S73aXPKc67TdtDRKDRvmiukMjmXMp91PiW5aO4",
});
