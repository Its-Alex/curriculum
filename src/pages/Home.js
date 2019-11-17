/** @jsx jsx */
import { jsx, css } from '@emotion/core'

import LeftBar from '../components/LeftBar'
import Description from '../components/Description'

const Home = (props) => {
  return (
    <div id='root-container' css={css`
    display: grid;
    grid-template-rows: 100%;
    grid-template-columns: 20% 80%;
  `} >
      <LeftBar id='sidebar' css={css`
        grid-column: 1 / 2;

        padding-right: 10%;
      `} />
      <div id='root-content' css={css`
        grid-column: 2 / 2;

        display: grid;
        place-items: center;
      `} >
        <div>
          <Description />
        </div>
      </div>
    </div>
  )
}

export default Home
