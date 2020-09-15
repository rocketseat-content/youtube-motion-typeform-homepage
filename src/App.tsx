import React from 'react'

import { Main, Section, Sticky } from './styles'

import GlobalStyles from './styles/global'
import FirstAndSecond from './components/FirstAndSecond'

function App() {
  React.useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  return (
    <>
      <GlobalStyles />

      <Main style={{ height: '1610vh' }}>
        {/* <Header /> */}

        <Section style={{ height: '65.9%' }}>
          <FirstAndSecond />
        </Section>

        <Section>
          <Sticky className="third" />
        </Section>

        <Section>
          <Sticky className="fourth" />
        </Section>

        {/* <Footer /> */}
      </Main>
    </>
  )
}

export default App
