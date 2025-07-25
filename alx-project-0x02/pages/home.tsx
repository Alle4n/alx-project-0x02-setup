import Card from "@/components/common/Card";

const Home = () => (
  <div className="p-6 space-y-4">
    <h1 className="text-2xl">Home Page</h1>
    <Card title="Card One" content="This is the first card." />
    <Card title="Card Two" content="This is the second card." />
  </div>
);

export default Home;
