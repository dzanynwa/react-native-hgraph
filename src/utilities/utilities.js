import metrics from "react-native-hgraph/src/data/metrics.json";

const hGraphConvert = (gender, metric, data) => {
  const metricObj = metrics[gender][metric];
  return {
    id: data.id,
    label: data.label || metricObj.label,
    value: data.value,
    healthyMin: data.healthyMin || metricObj.healthyRange[0],
    healthyMax: data.healthyMax || metricObj.healthyRange[1],
    absoluteMin: data.absoluteMin || metricObj.absoluteRange[0],
    absoluteMax: data.absoluteMax || metricObj.absoluteRange[1],
    weight: data.weight || metricObj.weight,
    unitLabel: data.unitLabel || metricObj.unitLabel,
    helpText: data.helpText || "",
  };
};
export { hGraphConvert };
