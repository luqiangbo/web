import { postRegister } from 'fetchServe/index';

export default async (req, res) => {
  const { query } = req;
  const [err1, res1] = await postRegister(query);
  if (err1) {
    res.status(200).json(err1);
    return;
  }
  res.status(200).json(res1);
};
