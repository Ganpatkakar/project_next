import Head from "next/head";
import Layout from "../../comps/layout";
import Galery from "../../comps/galery/galery";
import StepChartComparision from "../../comps/galery/charts/step/step_chart_comparision";

const StepLineChartComparisionPage = () => (
    <div>
    <Head>
        <title>Step Line Chart Comparision, Spline Comparision Chart - GkCharts</title>
        <meta name="keywords" content="Gk-Chart, gkchart, gk-chart, chart library, charts,Step Line Comparison Chart, javascript chart library, javascript chart, javascript library, line chart, bar cahrt, pie chart, meter cahrt, doughnut chart, bar cahrt comparision, line chart comparision"></meta>
        <meta name="author" content="Ganpat Kakar" />
        <meta name="og:Open Source Chart Library : Gk-Chart - spline Comparision Chart" property="og:Open Source Chart Library : Gk-Chart - Line Comparision Chart" content="Open Source Chart Library : Gk-Chart - Line Comparision Chart"></meta>
		<meta name="description" content="Gk-Chart is an open source chart library provides charts as line comparision chart, bar chart , pie chart, line chart comparison, bar and line chart comparison and 20 plus more charts with the business data presentation in chart view, integrate is easy with javascript" />
    </Head>
        <Layout>
            <Galery>
                <h1>JavaScript Step Line Comparison Chart & Graph</h1>
                <p>Step Line Comparison Chart is consrtucted by the two or more points connecting and providing two or more data set.
                    For example with Step Line Comparison chart, it is easy to compare tow or more year's, month wise progress and income.
                    Below is an example of Step Line Comparison chart with HTML and JavaScript source code for intergration. Download our chart library and and use the provided source code.
                    Print the generated chart functionality is provide for the user to print the chart for any hard copy presentation.
                </p>
                <StepChartComparision />
            </Galery>
        </Layout>
    </div>
)

export default StepLineChartComparisionPage;