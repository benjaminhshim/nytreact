import React from "react";
import { Link } from "react-router-dom";

import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Header from "components/Header/Header.jsx";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import navbarsStyle from "assets/jss/material-kit-react/views/componentsSections/navbarsStyle.jsx";

class Nav extends React {
  render() {
    return (
      <GridItem xs={12} sm={12} md={6}>
              <div className={classes.title}>
                <h3>Menu with Icons</h3>
              </div>
              <Header
                brand="Icons"
                color="info"
                rightLinks={
                  <List className={classes.list}>
                    <ListItem className={classes.listItem}>
                      <Button color="transparent" className={classes.navLink}>
                        <Email className={classes.icons} />
                      </Button>
                    </ListItem>
                    <ListItem className={classes.listItem}>
                      <Button color="transparent" className={classes.navLink}>
                        <Face className={classes.icons} />
                      </Button>
                    </ListItem>
                    <ListItem className={classes.listItem}>
                      <CustomDropdown
                        left
                        hoverColor="info"
                        dropdownHeader="Dropdown Header"
                        buttonIcon={Settings}
                        buttonProps={{
                          className: classes.navLink,
                          color: "transparent"
                        }}
                        dropdownList={[
                          "Action",
                          "Another action",
                          "Something else here",
                          { divider: true },
                          "Separated link",
                          { divider: true },
                          "One more separated link"
                        ]}
                      />
                    </ListItem>
                  </List>
                }
              />
            </GridItem>
    )
  }
}
  // <ul className="">
  //   <li className="">
  //     <Link to="/">
  //       Home
  //     </Link>
  //   </li>
  //   <li className="">
  //     <Link to="/results">
  //       Results
  //     </Link>
  //   </li>
  //   <li className="">
  //     <Link to="/saved">
  //       Saved
  //     </Link>
  //   </li>

  // </ul>
  <GridItem xs={12} sm={12} md={6}>
              <div className={classes.title}>
                <h3>Menu with Icons</h3>
              </div>
              <Header
                brand="Icons"
                color="info"
                rightLinks={
                  <List className={classes.list}>
                    <ListItem className={classes.listItem}>
                      <Button color="transparent" className={classes.navLink}>
                        <Email className={classes.icons} />
                      </Button>
                    </ListItem>
                    <ListItem className={classes.listItem}>
                      <Button color="transparent" className={classes.navLink}>
                        <Face className={classes.icons} />
                      </Button>
                    </ListItem>
                    <ListItem className={classes.listItem}>
                      <CustomDropdown
                        left
                        hoverColor="info"
                        dropdownHeader="Dropdown Header"
                        buttonIcon={Settings}
                        buttonProps={{
                          className: classes.navLink,
                          color: "transparent"
                        }}
                        dropdownList={[
                          "Action",
                          "Another action",
                          "Something else here",
                          { divider: true },
                          "Separated link",
                          { divider: true },
                          "One more separated link"
                        ]}
                      />
                    </ListItem>
                  </List>
                }
              />
            </GridItem>


export default Nav;
