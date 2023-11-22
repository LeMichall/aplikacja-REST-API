import Joi from "joi";

const contactSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
});

export const validationMiddleware = (req, res, next) => {
  const newContact = req.body;
  const { error } = contactSchema.validate(newContact);
  if (error) return res.status(400).send({ error: error.message });
  return next();
};

const userSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export const userValidationMiddleware = (req, res, next) => {
  const newUser = req.body;
  const { error } = userSchema.validate(newUser);
  if (error) return res.status(400).send({ error: error.message });
  return next();
};
