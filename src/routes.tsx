import { RouteObject } from 'react-router';
import { lazy } from 'react';
import HomePage from './pages/index';
import ClothingPage from './pages/clothing';
import SareesPage from './pages/sarees';
import JewelleryPage from './pages/jewellery';
import AboutPage from './pages/about';
import ContactPage from './pages/contact';
// Eager import so renderToString doesn't hit a Suspense boundary on 404 routes
// and abort to client rendering. The prod 404 page is tiny; the dev-tools
// variant stays lazy because it pulls in dev-only code we don't want in
// production bundles.
import ProdNotFoundPage from './pages/_404';

const NotFoundPage = ProdNotFoundPage;

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/clothing',
    element: <ClothingPage />,
  },
  {
    path: '/sarees',
    element: <SareesPage />,
  },
  {
    path: '/jewellery',
    element: <JewelleryPage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];

export type Path = '/' | '/clothing' | '/sarees' | '/jewellery' | '/about' | '/contact';
export type Params = Record<string, string | undefined>;
