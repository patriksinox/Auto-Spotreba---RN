import moment from "moment";
import "moment/locale/sk";
moment.locale("sk");

export const Timer = (time) => {
  const datum = moment(time).format("l");

  if (datum === "Invalid date") return;

  return datum;
};
