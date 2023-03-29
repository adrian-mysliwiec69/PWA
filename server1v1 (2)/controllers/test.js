import {
  dbTest,
  getHours,
  postWorkshift,
  delKebabstand,
} from '../models/test.js';

const test = async (req, res) => res.status(200).json(await dbTest());
const getHoursController = async (req, res) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  res.status(200).json(await getHours());
const postWorkshiftController = async (req, res) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  res.status(200).json(await postWorkshift(req.body));
const delKebabstandController = async (req, res) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  res.status(200).json(await delKebabstand(req.params.id));

export {
  test,
  getHoursController,
  postWorkshiftController,
  delKebabstandController,
};
