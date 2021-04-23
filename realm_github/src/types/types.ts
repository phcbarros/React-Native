export interface GithubResponse {
  id: number
  name: string
  full_name: string
  description: string
  stargazers_count: number
  forks_count: number
}

export interface RepositorySchema {
  id: number
  name: string
  fullName: string
  description: string
  stars: number
  forks: number
}
