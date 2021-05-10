import React from "react";
import { Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import Cards from "./Cards";
import Search from "./Search";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "20vw",
    height: "99vh",
    backgroundColor: "#F0F8FF",
  },
}));

export default function SimplePaper() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Toolbar />
      <Toolbar />
      <Search />
      <Cards
        color="primary"
        name="Sara Smith"
        subtitle="15 Aug 2020"
        url="https://i.guim.co.uk/img/media/e6ff0eaa7c9259d57d1ea173c870f67ed8971121/57_24_2296_1377/master/2296.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=c4f2f9f974f54fbdc4a4e4a991b31e1d"
      />
      <Cards
        color="secondary"
        name="James Johnson"
        subtitle="15 Aug 2020"
        url="https://www.theplace2.ru/archive/james_mcavoy/img/celeber_ru_james_mcavoy_2017_76684_original_53e0f5b5ef.jpg"
      />
      <Cards
        color="secondary"
        name="Patrice Page"
        subtitle="15 Aug 2020"
        url="https://vistapointe.net/images/amber-heard-4.jpg"
      />
      <Cards
        color="primary"
        name="Derek Diamon"
        subtitle="15 Aug 2020"
        url="https://www4.pictures.stylebistro.com/gi/Final+Day+Johnny+Depp+Libel+Trial+NUFzRQUuW4ip.jpg"
      />
      <Cards
        color="primary"
        name="Derek Diamon"
        subtitle="15 Aug 2020"
        url="https://www.wallpapersdsc.net/wp-content/uploads/2016/10/James-McAvoy-High-Quality-Wallpapers.jpg"
      />
    </div>
  );
}
