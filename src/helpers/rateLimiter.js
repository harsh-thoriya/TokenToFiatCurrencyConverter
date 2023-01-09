const expressRateLimit = require("express-rate-limit");

const rateLimiter = (windowDuration, limitAt) => {
  return expressRateLimit.rateLimit({
    windowMs: windowDuration,
    max: limitAt,
    message: `You have exceeded the ${limitAt} requests in ${windowDuration} hrs limit!`,
    standardHeaders: true,
    legacyHeaders: false,
  });
};

module.exports = { rateLimiter };
