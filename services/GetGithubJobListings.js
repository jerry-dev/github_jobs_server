import childProcess from 'child_process';

export default class GetGithubJobListings {
    async fetch() {
        try {
            const script = `curl --location --request GET 'https://jobs.github.com/positions.json'`;

            const exec_options = {
                cwd: null,
                env: null,
                encoding: 'utf8',
                timeout: 0,
                maxBuffer: 200 * 1024,
                killSignal: 'SIGTERM'
            };

            childProcess.exec(script, exec_options, (error, stdout, stderror) => {
                return stdout;
            });
        } catch (error) {
            console.log(`Error @ services/GetGithubJobListings.js:`, error);
        }
    }
}