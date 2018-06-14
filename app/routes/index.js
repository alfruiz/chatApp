import express from 'express';

const Router = express.Router();


/**
 * registerRoutes
 * @param {object} customRoutes an object with 2 levels
 * @param {router} expressRoute object router
 */
const registerRoutes = (customRoutes, expressRoute, method) => {
  const iteration = Object.keys(customRoutes);

  if (iteration.length === 0) return;

  for (let i = 0, len = iteration.length; i < len; i += 1) {
    // Get all single routes
    const routesArray = Object.keys(customRoutes[iteration[i]]);
    if (routesArray.length === 0) {
      if (method !== undefined) expressRoute[method](iteration[i], customRoutes[iteration[i]]);
    } else {
      registerRoutes(customRoutes[iteration[i]], expressRoute, iteration[i]);
    }
  }
};

/**
 * routes
 * Object with verbs (methods) and path with their behaviour
 */
const routes = {
  get: {
    '/': (req, res) => {
      res.render('home', { page: 'welcome page', title: 'Login Page' });
    },
    '/rooms': (req, res) => {
      res.render('home', { page: 'welcome page', title: 'Login Page' });
    },
    '*': (req, res) => {
      res.status(404).render('404');
    },
  },
};

// adding routes
registerRoutes(routes, Router, undefined);

// Exports
export default { Router };
