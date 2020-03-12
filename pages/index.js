import Fetch from "isomorphic-unfetch";
import Layout from "../components/layout.component";
import Prices from "../components/prices/prices.component";

const Index = props => (
  <Layout>
    <div>
      <h1>Welcome to BitzPrice</h1>
      <p>Check current Bitcoin rate</p>
      <Prices bpi={props.bpi} />
    </div>
  </Layout>
);

Index.getInitialProps = async () => {
  const res = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
  const data = await res.json();
  console.log(data.bpi);
  return {
    bpi: data.bpi
  };
};
export default Index;
