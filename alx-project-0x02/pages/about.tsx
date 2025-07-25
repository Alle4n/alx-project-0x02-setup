import Button from "@/components/common/button";

const About = () => (
  <div className="p-6 space-x-4">
    <h1 className="text-2xl">About Page</h1>
    <Button title="Small" size="small" shape="rounded-sm" />
    <Button title="Medium" size="medium" shape="rounded-md" />
    <Button title="Large" size="large" shape="rounded-full" />
  </div>
);

export default About;
