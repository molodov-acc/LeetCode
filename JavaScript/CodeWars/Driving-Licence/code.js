function driver(data) {
  let res = [];
  const months = {
    Jan: "01",
    Feb: "02",
    Mar: "03",
    Apr: "04",
    May: "05",
    Jun: "06",
    Jul: "07",
    Aug: "08",
    Sep: "09",
    Oct: "10",
    Nov: "11",
    Dec: "12",
  };
  const [name, secondName, lastName, year, sex] = data;
  const [date, month, yearb] = year.split("-");

  for (let i = 0; i < 5; i++) {
    const item = lastName[i] || "9";
    res.push(item.toUpperCase());
  }

  const six = Math.floor(yearb / 10) % 10;
  let seventh_eigth = months[month];
  if (sex === "F") {
    seventh_eigth = String(5 + Number(seventh_eigth[0])) + seventh_eigth[1];
  }
  res.push(
    String(six),
    seventh_eigth,
    date,
    yearb[3],
    name[0],
    secondName[0] || "9",
    "9",
    "AA"
  );

  return res.join("");
}
