import GetGithubJobListingsService from '../../services/GetGithubJobListings.js';

const getGithubJobListingsService = new GetGithubJobListingsService();

const githubJobListingsController = {};

githubJobListingsController.getJobListings = async (req, res) => {
    try {
        const listings = await getGithubJobListingsService.fetchListings();
        res.status(200).send(listings);
    } catch (error) {
        console.log(`Error @ controllers/get/index.js:`, error.message);
    }
}

export default githubJobListingsController;