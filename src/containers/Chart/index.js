import React from 'react';
import { LineChart } from "react-native-chart-kit";

import * as shape from 'd3-shape';
import { Grid, LineChart as LineChart2, XAxis } from 'react-native-svg-charts';
import { G, Line } from 'react-native-svg';

import { BodySemiBold, Page } from 'components/core/';
import { Dimensions, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


const labels = ["MAY 1", "15", "29", "JUNE 1", "15", "30", "JULY 1", "15", "29", "AUGUST 1", "15", "30"];
const series1 = [10, 20, 0, 0, 0, 20, 10, 0, 10, 20, 30, 40];
const series2 = [5, 4, 50, 10, 20, 60, 10, 20, 40, 5, 4, 50];

export default function ChartScreen({ navigation }) {
  return (
    <ScrollView>
      <Page>

        <BodySemiBold>Chart control</BodySemiBold>

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
            <Text style={{ height: 48, textAlign: "center", color: '#878786' }}>60</Text>
            <Text style={{ height: 48, textAlign: "center", color: '#878786' }}>45</Text>
            <Text style={{ height: 48, textAlign: "center", color: '#878786' }}>30</Text>
            <Text style={{ height: 48, textAlign: "center", color: '#878786' }}>15</Text>
            <Text style={{ height: 48, textAlign: "center", color: '#878786' }}>0</Text>
          </View>
        </View>

        <View style={{ flexDirection: 'row', marginTop: 10 }}>
          <View style={{ height: 400, flexShrink: 1, flexGrow: 1, flexBasis: 'auto', width: Dimensions.get("window").width - 30 }}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <LineChartExample />
            </ScrollView>
          </View>
          <View style={{ height: 260, backgroundColor: '#ffffff', width: 30, paddingTop: 0 }}>
            <Text style={{ height: 55, textAlign: "center", color: '#878786' }}>60</Text>
            <Text style={{ height: 55, textAlign: "center", color: '#878786' }}>45</Text>
            <Text style={{ height: 55, textAlign: "center", color: '#878786' }}>30</Text>
            <Text style={{ height: 55, textAlign: "center", color: '#878786' }}>15</Text>
            <Text style={{ height: 55, textAlign: "center", color: '#878786' }}>0</Text>
          </View>
        </View>

      </Page>
    </ScrollView>
  );
}

class LineChartExample extends React.PureComponent {

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
    const verticalContentInset = { top: 10, bottom: 30 };
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
      <View style={{ height: 290, flexDirection: 'row', backgroundColor: '#ffffff' }}>
        <View style={{ flex: 1 }}>
          <LineChart2
            style={{ height: 260, width: Dimensions.get("window").width * 3, backgroundColor: '#ffffff' }}
            data={data}
            // curve={shape.curveNatural}
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
    )
  }
}
