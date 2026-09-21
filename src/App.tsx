import type { ReactElement } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { I18nProvider } from './i18n'
import type { Lang } from './i18n/sv'
import { paths, type PageKey } from './i18n/routes'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { Services } from './pages/Services'
import { Tools } from './pages/Tools'
import { Research } from './pages/Research'
import { NotFound } from './pages/NotFound'

const pageComponents: Record<PageKey, () => ReactElement> = {
  home: Home,
  services: Services,
  tools: Tools,
  research: Research,
}

type RouteDef = { path: string; lang: Lang; page: PageKey }

const routeDefs: RouteDef[] = (Object.keys(paths) as Lang[]).flatMap((lang) =>
  (Object.keys(paths[lang]) as PageKey[]).map((page) => ({
    path: paths[lang][page],
    lang,
    page,
  })),
)

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routeDefs.map(({ path, lang, page }) => {
          const Page = pageComponents[page]
          return (
            <Route
              key={path}
              path={path}
              element={
                <I18nProvider lang={lang} page={page}>
                  <Layout>
                    <Page />
                  </Layout>
                </I18nProvider>
              }
            />
          )
        })}
        <Route
          path="/en/*"
          element={
            <I18nProvider lang="en" page="home">
              <Layout>
                <NotFound />
              </Layout>
            </I18nProvider>
          }
        />
        <Route
          path="*"
          element={
            <I18nProvider lang="sv" page="home">
              <Layout>
                <NotFound />
              </Layout>
            </I18nProvider>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}
