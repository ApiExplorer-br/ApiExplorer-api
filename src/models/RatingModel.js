import { connection } from '../db/index.js';


export const getApiRatingById = async (id) => {
    const [rating] = await connection.execute(`SELECT * FROM rating WHERE api_id = ?`, [id]);
    return rating;
};

export const createRatingModel = async (id, api_id, rating, message, userId, name) => {
    const result = await connection.query(
        `INSERT INTO rating (id, api_id, rating, message, userId, user_name) VALUES (?, ?, ?, ?, ?, ?)`,
        [id, api_id, rating, message, userId, name]
    );
    return result;
};
