import React from 'react';
import { LineChart } from "react-native-chart-kit";

import * as shape from 'd3-shape';
import { Grid, LineChart as LineChart2, XAxis } from 'react-native-svg-charts';
import { G, Line } from 'react-native-svg';

import { BodySemiBold, Page } from 'components/core/';
import { Dimensions, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


const labels = ["MAY 1", "", "", "", "", "", "", "", "", "", "", "", "", "", "15", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "30", "June 1", "", "", "", "", "", "", "", "", "", "", "", "", "", "15", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "30", "July 1", "", "", "", "", "", "", "", "", "", "", "", "", "", "15", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "30"];
const series1 = [10, 15, 16, 55, 0, 0, 0, 18, 20, 60, 60, 60, 55, 15, 0, 0, 0, 60, 60, 16, 30, 36, 35, 60, 20, 0, 0, 0, 20, 10, 10, 15, 16, 55, 0, 0, 0, 18, 20, 60, 60, 60, 55, 15, 0, 0, 0, 60, 60, 16, 30, 36, 35, 60, 20, 0, 0, 0, 20, 10, 10, 15, 16, 55, 0, 0, 0, 18, 20, 60, 60, 60, 55, 15, 0, 0, 0, 60, 60, 16, 30, 36, 35, 60, 20, 0, 0, 0, 20, 10];
const series2 = [10, 15, 16, 55, 0, 0, 0, 18, 20, 60, 60, 60, 55, 15, 0, 0, 0, 60, 60, 16, 30, 36, 35, 60, 20, 0, 0, 0, 20, 10, 10, 15, 16, 55, 0, 0, 0, 18, 20, 60, 60, 60, 55, 15, 0, 0, 0, 60, 60, 16, 30, 36, 35, 60, 20, 0, 0, 0, 20, 10, 10, 15, 16, 55, 0, 0, 0, 18, 20, 60, 60, 60, 55, 15, 0, 0, 0, 60, 60, 16, 30, 36, 35, 60, 20, 0, 0, 0, 20, 10].reverse();

export default function ChartScreen({ navigation }) {
  return (
    <ScrollView>
      <Page>
        <BodySemiBold>Chart kit</BodySemiBold>
        <MultiSeriesChartKit />
        <BodySemiBold>Svg Chart</BodySemiBold>
        <MultiSeriesDottedLineChart />
      </Page>
    </ScrollView>
  );
}

// react-native-svg-charts
class MultiSeriesDottedLineChart extends React.PureComponent {
  render() {
    const data1 = series1;
    const data2 = series2;

    //Array of datasets, following this syntax:
    const data = [{
      data: data1,
      svg: { stroke: 'rgba(47, 128, 237, 1)', strokeWidth: 3 },
    }, {
      data: data2,
      svg: { stroke: 'rgba(3,53,53, 0.55)', strokeDasharray: [8, 8], strokeWidth: 2 },
    },
    ];

    const axesSvg = { fontSize: 12, fill: '#878786' };
    const verticalContentInset = { top: 10, bottom: 10 };
    const xAxisHeight = 30;

    const CustomGrid = ({ x, y, data, ticks }) => (
      <G>
        {
          // Horizontal grid
          ticks.map((tick, index) => {
            if (index % 3 !== 0) return null;
            return (
              <Line
                key={tick}
                x1={'0%'}
                x2={'100%'}
                y1={y(tick)}
                y2={y(tick)}
                stroke={'#ECECEC'}
              />
            )
          })
        }
      </G>
    )

    return (
      <View style={{ flexDirection: 'row', marginTop: 10 }}>
        <View style={{ height: 400, flexShrink: 1, flexGrow: 1, flexBasis: 'auto', width: Dimensions.get("window").width - 30 }}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} decelerationRate={0}
            snapToInterval={Dimensions.get("window").width - 30} //your element width
            snapToAlignment={"center"}>
            <View style={{ height: 290, flexDirection: 'row', backgroundColor: '#ffffff' }}>
              <View style={{ flex: 1 }}>
                <LineChart2
                  style={{ height: 260, width: Dimensions.get("window").width * 3, backgroundColor: '#ffffff' }}
                  data={data}
                  curve={shape.curveMonotoneX}
                  contentInset={verticalContentInset}
                  gridMax={60}
                  gridMin={0}
                >
                  <CustomGrid belowChart={true} />
                </LineChart2>
                <XAxis
                  style={{ marginHorizontal: -10, height: xAxisHeight }}
                  data={data1}
                  formatLabel={(value, index) => labels[index]}
                  contentInset={{ left: 30, right: 10 }}
                  svg={axesSvg}
                />
              </View>
            </View >
          </ScrollView>
        </View>
        <View style={{ height: 260, backgroundColor: '#ffffff', width: 30, paddingTop: 0 }}>
          <DummyRightSide height={59} value={60} />
          <DummyRightSide height={59} value={45} />
          <DummyRightSide height={59} value={30} />
          <DummyRightSide height={59} value={15} />
          <DummyRightSide height={59} value={0} />
        </View>
      </View>
    )
  }
}


// Chart kit

function MultiSeriesChartKit() {
  return (
    <View style={{ flexDirection: 'row', marginTop: 10 }}>
      <View style={{ height: 260, flexShrink: 1, flexGrow: 1, flexBasis: 'auto', width: Dimensions.get("window").width - 30 }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <LineChart
            data={{
              labels: labels,
              datasets: [
                {
                  data: series1,
                  strokeWidth: 3,
                  color: (opacity = 1) => `rgba(47, 128, 237, 1)`,
                },
                {
                  data: series2,
                  strokeWidth: 2,
                  color: (opacity = 1) => `rgba(3,53,53, 0.55)`, // optional
                },
              ]
            }}
            width={Dimensions.get("window").width * 3} // from react-native
            height={260}
            withDots={true}
            withShadow={false}
            withVerticalLines={false}
            withHorizontalLabels={false}
            segments={4} // number of vertical divisions

            chartConfig={{
              barPercentage: 1,
              barRadius: 5,

              backgroundGradientFrom: "#ffffff",
              backgroundGradientFromOpacity: 1,
              backgroundGradientTo: "#ffffff",
              backgroundGradientToOpacity: 1,
              decimalPlaces: 0, // optional, defaults to 2dp

              color: (opacity = 1) => `#2F80ED`,
              labelColor: (opacity = 1) => `#878786`,

              propsForBackgroundLines: {
                strokeDasharray: "", // solid background lines with no dashes
                stroke: `#ECECEC`,
              },

              propsForDots: {
                r: 0,
              }
            }}
            bezier
            style={{ marginLeft: -40 }}
          />
        </ScrollView>
      </View>

      <View style={{ height: 260, backgroundColor: '#ffffff', width: 30, paddingTop: 5 }}>
        <DummyRightSide height={48} value={60} />
        <DummyRightSide height={48} value={45} />
        <DummyRightSide height={48} value={30} />
        <DummyRightSide height={48} value={15} />
        <DummyRightSide height={48} value={0} />
      </View>
    </View>
  )
}

function DummyRightSide({ height, value }) {
  return <Text style={{ height: height, textAlign: "center", color: '#878786' }}>{value}</Text>;
}


class AxesExample extends React.PureComponent {

  render() {

    const data = series1;

    const axesSvg = { fontSize: 10, fill: 'grey' };
    const verticalContentInset = { top: 50, bottom: 50 }
    const xAxisHeight = 0

    // Layout of an x-axis together with a y-axis is a problem that stems from flexbox.
    // All react-native-svg-charts components support full flexbox and therefore all
    // layout problems should be approached with the mindset "how would I layout regular Views with flex in this way".
    // In order for us to align the axes correctly we must know the height of the x-axis or the width of the x-axis
    // and then displace the other axis with just as many pixels. Simple but manual.

    return (
      <View style={{ height: 300, padding: 0, flexDirection: 'row' }}>
        <YAxis
          data={data}
          style={{ marginBottom: xAxisHeight }}
          contentInset={verticalContentInset}
          svg={axesSvg}
        />
        <View style={{ flex: 1, marginLeft: 0 }}>
          <LineChart2
            style={{ height: 300, width: Dimensions.get("window").width * 3, backgroundColor: '#ffffff' }}
            data={data}
            contentInset={verticalContentInset}
            curve={shape.curveMonotoneX}
            svg={{ stroke: 'rgb(134, 65, 244)' }}
          >
            <Grid />
          </LineChart2>
          <XAxis
            style={{ marginHorizontal: -10, height: xAxisHeight }}
            data={data}
            formatLabel={(value, index) => index}
            contentInset={{ left: 10, right: 10 }}
            svg={axesSvg}
          />
        </View>
      </View>
    )
  }
}