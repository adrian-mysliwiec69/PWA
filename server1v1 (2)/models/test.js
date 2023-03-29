/* eslint-disable camelcase */
import { query } from '../db/index.js';

const dbTest = async () => {
  const { rows } = await query("SELECT 'It works' as test");
  return rows;
};
const getHours = async () => {
  const { rows } = await query('SELECT * from arbeit');
  return rows;
};
const postWorkshift = async ({ datum, ort, stunden, von_zeit, bis_zeit }) => {
  const { rows } = await query('insert into arbeit values ($1,$2,$3,$4,$5) returning *;', [
    datum,
    ort,
    stunden,
    von_zeit,
    bis_zeit,
  ]);
  return rows;
};

export { dbTest, getHours, postWorkshift };
