import moment from "moment";

const convertJourneyToEvent = journeys => {
  const events = journeys.map((journey, index) => {
    const travelTimeThere = moment.duration(
      moment(journey.there.arrival).diff(moment(journey.there.departure))
    );

    const travelTimeBack = moment.duration(
      moment(journey.back.arrival).diff(moment(journey.back.departure))
    );

    const event = {
      id: index,
      title: `${journey.price} ${travelTimeThere.format(
        "HH:mm"
      )} ${travelTimeBack.format("HH:mm")}`,
      start: moment(journey.there.departure),
      end: moment(journey.back.arrival)
    };
    return event;
  });

  return events;
};

export default convertJourneyToEvent;
