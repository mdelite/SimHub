const rpmsPorscheCup992 = [
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

function isRpmLightLit(light, rpmMatrix) {
  let rpm = $prop('DataCorePlugin.GameData.Rpms');
  let gear = $prop('DataCorePlugin.GameData.Gear');

  if (light <= 0 || light > rpmMatrix.length) {
    return false;
  }

  let gearIndex = parseInt(gear) - 1;
  if (isNaN(gearIndex) || gearIndex < 0) {
    gearIndex = 0;
  }

  if (gearIndex > rpmMatrix[light - 1].length) {
    return false;
  }

  let onRpm = rpmMatrix[light - 1][gearIndex];
  let offRpm = rpmMatrix[rpmMatrix.length - 1][gearIndex];

  if (light == rpmMatrix.length) {
    return rpm > onRpm;
  }

  return rpm > onRpm && rpm < offRpm;
}
