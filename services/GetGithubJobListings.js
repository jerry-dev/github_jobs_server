import https from 'https';

export default class GetGithubJobListingsService {
    async fetchListings() {
        const url = "https://jobs.github.com/positions.json";

        return new Promise(async (resolve, reject) => {
            let output = ``;
            const request = await https.get(url, (response) => {
                response.on('error', (error) => {
                    reject(error);
                });

                response.on('data', (dataChunk) => {
                    output += dataChunk;
                });
    
                response.on('end', () => {
                    resolve(output);
                });
            });

            request.end();
        });
    }
}