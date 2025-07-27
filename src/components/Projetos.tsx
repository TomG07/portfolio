import { useEffect, useState } from 'react';

function Projetos() {
    const [repos, setRepos] = useState<{
        name: string;
        description: string;
        url: string;
        languages: string[];
    }[]>([]);

    useEffect(() => {
        async function fetchRepos() {
            const response = await fetch('https://api.github.com/users/TomG07/repos');
            const data = await response.json();

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const reposData = await Promise.all(data.map(async (repo: any) => {
                return {
                    name: repo.name,
                    url: repo.html_url,
                };
            }));

            setRepos(reposData);
        }

        fetchRepos();
    }, []);

    return (
        <section id="projetos">
            <h2>Os meus Projetos</h2>
            <div className="grid-projetos">
                {repos.map((repo, index) => (
                    <div className="card-projeto" key={index}>
                        <a href={repo.url} target="_blank" rel="noopener noreferrer">
                            <img
                                src={`https://github-readme-stats.vercel.app/api/pin/?username=TomG07&repo=${repo.name}`}
                                alt={repo.name}
                                className="projeto-img"
                            />
                        </a>
                    </div>
                ))}
            </div>
        </section>

    );
}

export default Projetos;