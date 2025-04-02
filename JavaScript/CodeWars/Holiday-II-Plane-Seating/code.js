function planeSeat(a) {
  let seatNumber;
  let seatLiter;

  if (a.length > 2) {
    seatNumber = a.slice(0, 2);
    seatLiter = a.at(-1);
  } else {
    seatNumber = a[0];
    seatLiter = a.at(-1);
  }

  if (seatNumber > 60 || !"ABCDEFGHK".includes(seatLiter)) {
    return "No Seat!!";
  }

  let side = "Left";

  if ("DEF".includes(seatLiter)) side = "Middle";
  else if ("GHK".includes(seatLiter)) side = "Right";

  if (seatNumber <= 20) {
    return `Front-${side}`;
  }
  if (seatNumber > 20 && seatNumber <= 40) {
    return `Middle-${side}`;
  } else {
    return `Back-${side}`;
  }
}
