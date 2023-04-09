function isPcupLight(light) {
  let rpm = $prop('DataCorePlugin.GameData.Rpms');
  let gear = $prop('DataCorePlugin.GameData.Gear');
  let gearIndex, onRpm, offRpm;

  // array containg the rpm that the light should be turned on per gear.
  // last row - redline rpms.
  const perLightRpms = [
    [500, 3900, 4800, 6400, 7300, 99999],
    [1000, 4400, 5200, 6600, 7400, 99999],
    [1500, 4900, 5700, 6800, 7500, 99999],
    [3000, 5400, 6000, 7000, 7600, 99999],
    [4500, 5900, 6400, 7200, 7700, 99999],
    [5350, 6400, 6800, 7400, 7800, 99999],
    [6200, 6900, 7200, 7800, 7900, 99999],
    [7100, 7400, 7600, 7900, 7950, 99999],
    [7800, 7900, 8100, 8120, 8070, 99999]
  ];

  switch (gear) {
    case "R":
    case "N":
    case '1':
      gearIndex = 0;
      break;
    case '2':
      gearIndex = 1;
      break;
    case '3':
      gearIndex = 2;
      break;
    case '4':
      gearIndex = 3;
      break;
    case '5':
      gearIndex = 4;
      break;
    case '6':
      gearIndex = 5;
    default:
      return false;
  }

  // return false if light is out of bounds.
  if (light <= 0 || light > perLightRpms.length) {
    return false;
  } else {
    onRpm = perLightRpms[light - 1][gearIndex];
    offRpm = perLightRpms.at(-1)[gearIndex];
  }

  if (light == perLightRpms.length) {
    return rpm > onRpm;
  }

  return rpm > onRpm && rpm < offRpm;
}
