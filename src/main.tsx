import { StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '@fontsource-variable/manrope'
import '@fontsource-variable/source-sans-3'
import '@fontsource-variable/source-serif-4'
import '@fontsource-variable/source-serif-4/wght-italic.css'
import '@fontsource/tiro-devanagari-hindi'
import './index.css'
import { Layout } from './components/layout/Layout'
import Home from './pages/Home'

const About = lazy(() => import('./pages/About'))
const Programmes = lazy(() => import('./pages/Programmes'))
const ProgrammeDetail = lazy(() => import('./pages/ProgrammeDetail'))
const Impact = lazy(() => import('./pages/Impact'))
const Stories = lazy(() => import('./pages/Stories'))
const StoryDetail = lazy(() => import('./pages/StoryDetail'))
const GetInvolved = lazy(() => import('./pages/GetInvolved'))
const CsrPartnerships = lazy(() => import('./pages/CsrPartnerships'))
const CorporateLearning = lazy(() => import('./pages/CorporateLearning'))
const Contact = lazy(() => import('./pages/Contact'))
const NotFound = lazy(() => import('./pages/NotFound'))

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Suspense fallback={<div className="min-h-dvh bg-ivory" />}>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="programmes" element={<Programmes />} />
            <Route path="programmes/:slug" element={<ProgrammeDetail />} />
            <Route path="impact" element={<Impact />} />
            <Route path="stories" element={<Stories />} />
            <Route path="stories/:slug" element={<StoryDetail />} />
            <Route path="get-involved" element={<GetInvolved />} />
            <Route path="csr-partnerships" element={<CsrPartnerships />} />
            <Route path="corporate-learning" element={<CorporateLearning />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  </StrictMode>,
)
