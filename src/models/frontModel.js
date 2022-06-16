import { connection } from '../db/index.js';

export const getAllFrontModel = async () => {
    const [fronts] = await connection.execute(`SELECT * FROM fronts`);
    return fronts;
};

export const createFrontModel = async (id, name, url_repo, technologies, category, description, url_deploy, api_id, user_id) => {
    // console.log(id, name, url_repo, technologies, category, description, url_deploy, api_id, user_id)
    const front = await connection.execute(`INSERT INTO fronts (id, name, url_repo, technologies, category, description, url_deploy, api_id, user_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`, [id, name, url_repo, technologies, category, description, url_deploy, api_id, user_id]);
    return front;
};

export const getFrontByUrl = async (url) => {
    const [front] = await connection.execute(`SELECT * FROM fronts WHERE url_repo = ?`, [url]);
    return front;
};

export const getFrontById = async (id) => {
    const [front] = await connection.execute(`SELECT * FROM fronts WHERE id = ?`, [id]);
    return front;
};