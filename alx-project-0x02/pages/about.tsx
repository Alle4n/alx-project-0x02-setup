import Button from "@/components/common/Button";
import Header from "@/components/layout/Header";

const About = () => (
  <>
    <Header />
    <div className="p-6 space-x-4">
      <Button title="Small" size="small" shape="rounded-sm" />
      <Button title="Medium" size="medium" shape="rounded-md" />
      <Button title="Large" size="large" shape="rounded-full" />
    </div>
  </>
);

export default About;
