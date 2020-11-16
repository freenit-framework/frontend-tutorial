import React from 'react'
import {
  Paper,
  Button,
  Avatar,
} from '@material-ui/core'

import Template from 'templates/default/detail'


class BlogList extends React.Component {
  render() {
    return (
      <Template>
        <h1 style={{ marginLeft: 20 }}>
          Straight from the Hackers' Kitchen
        </h1>
        <div style={{ padding: 20, display: "grid", gridTemplateColumns: "repeat(3, auto)", gridGap: 5 }}>
          <Paper style={{ minHeight: 30, display: "flex" }}>
            <div style={{ height: 120, width: 120, backgroundImage: "url(\"http://4.bp.blogspot.com/-v3JuijKnOrI/UBkuXara48I/AAAAAAAAF6k/sErkKUvi2oo/s1600/Beer_Wallpaper+(49).jpg\")", backgroundSize: "100% 100%", marginRight: 20 }} />
            <div>
              <h2>
                Thursday Night
              </h2>
              <p>
                Read more about something something ...
              </p>
            </div>
          </Paper>
          <Paper style={{ minHeight: 30, display: "flex" }}>
            <div style={{ height: 120, width: 120, backgroundImage: "url(\"http://4.bp.blogspot.com/-v3JuijKnOrI/UBkuXara48I/AAAAAAAAF6k/sErkKUvi2oo/s1600/Beer_Wallpaper+(49).jpg\")", backgroundSize: "100% 100%", marginRight: 20 }} />
            <div>
              <h2>
                Thursday Night
              </h2>
              <p>
                Read more about something something ...
              </p>
            </div>
          </Paper>
          <Paper style={{ minHeight: 30, display: "flex" }}>
            <div style={{ height: 120, width: 120, backgroundImage: "url(\"http://4.bp.blogspot.com/-v3JuijKnOrI/UBkuXara48I/AAAAAAAAF6k/sErkKUvi2oo/s1600/Beer_Wallpaper+(49).jpg\")", backgroundSize: "100% 100%", marginRight: 20 }} />
            <div>
              <h2>
                Thursday Night
              </h2>
              <p>
                Read more about something something ...
              </p>
            </div>
          </Paper>
          <Paper style={{ minHeight: 30, display: "flex" }}>
            <div style={{ height: 120, width: 120, backgroundImage: "url(\"http://4.bp.blogspot.com/-v3JuijKnOrI/UBkuXara48I/AAAAAAAAF6k/sErkKUvi2oo/s1600/Beer_Wallpaper+(49).jpg\")", backgroundSize: "100% 100%", marginRight: 20 }} />
            <div>
              <h2>
                Thursday Night
              </h2>
              <p>
                Read more about something something ...
              </p>
            </div>
          </Paper>
          <Paper style={{ minHeight: 30, display: "flex" }}>
            <div style={{ height: 120, width: 120, backgroundImage: "url(\"http://4.bp.blogspot.com/-v3JuijKnOrI/UBkuXara48I/AAAAAAAAF6k/sErkKUvi2oo/s1600/Beer_Wallpaper+(49).jpg\")", backgroundSize: "100% 100%", marginRight: 20 }} />
            <div>
              <h2>
                Thursday Night
              </h2>
              <p>
                Read more about something something ...
              </p>
            </div>
          </Paper>
          <Paper style={{ minHeight: 30, display: "flex" }}>
            <div style={{ height: 120, width: 120, backgroundImage: "url(\"http://4.bp.blogspot.com/-v3JuijKnOrI/UBkuXara48I/AAAAAAAAF6k/sErkKUvi2oo/s1600/Beer_Wallpaper+(49).jpg\")", backgroundSize: "100% 100%", marginRight: 20 }} />
            <div>
              <h2>
                Thursday Night
              </h2>
              <p>
                Read more about something something ...
              </p>
            </div>
          </Paper>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Button variant="outlined" disabled="true">
            &lt;
          </Button>
          <Avatar style={{ marginLeft: 5, marginRight: 5 }}>
            1
          </Avatar>
          <Button variant="outlined">
            &gt;
          </Button>
        </div>
      </Template>
    )
  }
}


export default BlogList
