import { v4 as uuidv4 } from 'uuid';
import { getLanguages } from '../utils/getLanguages.js';
import { apiGithub } from '../utils/apiGithub.js';

import { AppError } from '../errors/AppError.js';

import {
    getAllFrontModel,
    createFrontModel,
    getFrontByUrl,
    getFrontById,
} from '../models/frontModel.js';

export const getAllFrontService = async () => {
    const fronts = await getAllFrontModel();
    return fronts;
};

export const createFrontService = async (frontData, user_id) => {
    const { url, description, url_deploy, category, api_id } = frontData;
    const userRepo = url.split('.com/')[1];
    const technologies = await getLanguages(userRepo);
    const repoData = await apiGithub.get(`/${userRepo}`);
    if (!technologies.includes('HTML') || !technologies.includes('CSS')) {
        throw new AppError('Este repositório não parece ser um front-end, não encontramos HTML nem CSS.');
    }

    const frontExists = await getFrontByUrl(url);
    if(frontExists.length) throw new AppError('Este front-end já está cadastrado.');

    const filteredData = [repoData.data].map((repo) => ({
        id: uuidv4(),
        name: repo.name,
        url_repo: repo.html_url,
        technologies: JSON.stringify(technologies),
        category,
        description,
        url_deploy: url_deploy || repo.homepage,
        api_id,
        user_id,
    }));
    const values = Object.values(filteredData[0]);
    
    return createFrontModel(...values);
};

export const getFrontByIdService = async (id) => {
    const front = await getFrontById(id);
    if (!front.length) throw new AppError('Front-end não encontrado!');
    return front;
}