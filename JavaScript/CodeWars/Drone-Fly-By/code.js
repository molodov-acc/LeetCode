function flyBy(lamps, drone) {
  const res = lamps.split("");
  for (let i = 0; i < drone.length; i++) {
    if (lamps[i]) {
      res[i] = "o";
    }
  }

  return res.join("");
}
