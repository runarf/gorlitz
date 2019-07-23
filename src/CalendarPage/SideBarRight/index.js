import React from "react";
import SelectedJourney from "./SelectedJourney";
import { Drawer } from "@material-ui/core";

const SideBarRight = ({ selectedEvent, style }) => {
  return (
    <Drawer
      variant="permanent"
      anchor="right"
      className={style}
    >
      {Object.entries(selectedEvent).length > 0 && (
        <SelectedJourney selectedEvent={selectedEvent} />
      )}
    </Drawer>
  );
};

export default SideBarRight;
