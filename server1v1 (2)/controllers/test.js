import { dbTest, getHours, postWorkshift } from '../models/test.js';

const test = async (req, res) => res.status(200).json(await dbTest());
const getHoursController = async (req, res) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  res.status(200).json(await getHours());
const postWorkshiftController = async (req, res) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  res.status(200).json(await postWorkshift(req.body));

export { test, getHoursController, postWorkshiftController };
