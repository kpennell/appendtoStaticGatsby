import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';


const styles = {
  root: {
    flexGrow: 1,
  },
  appbar:{
    backgroundColor:"#AC493A"
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  link:{
    color: `white`,
    textDecoration: `none`,
  }
};

const Header = ({ classes, siteTitle }) => (

  <div className={classes.root}>
  <AppBar position="static" className={classes.appbar}>
    <Toolbar>
    <Link
          to="/"
          className={classes.grow}
          style={{
            color: `white`,
            textDecoration: `none`,
          }}>
      <Typography variant="h6" color="inherit" >
        {siteTitle}
      </Typography>
      </Link>

      <Link
          to="/about"
          className={classes.link}
          >
      <Button color="inherit">About</Button>
      </Link>

      <Link
          to="/blog"
          className={classes.link}
          >
      <Button color="inherit">Blog</Button>
      </Link>

      <Link
          to="/courses"
          className={classes.link}
          >
      <Button color="inherit">Courses</Button>
      </Link>

    </Toolbar>
  </AppBar>
</div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default withStyles(styles)(Header);