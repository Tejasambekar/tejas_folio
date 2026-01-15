import { useQuery } from '@tanstack/react-query';
import type { GitHubRepo } from '@/types/portfolio';

async function fetchGitHubRepos(username: string): Promise<GitHubRepo[]> {
  const response = await fetch(
    `https://api.github.com/users/${username}/repos?sort=updated&per_page=10`
  );
  
  if (!response.ok) {
    throw new Error('Failed to fetch GitHub repos');
  }
  
  return response.json();
}

export function useGitHubRepos(username: string) {
  return useQuery({
    queryKey: ['github-repos', username],
    queryFn: () => fetchGitHubRepos(username),
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 2,
    enabled: !!username
  });
}
