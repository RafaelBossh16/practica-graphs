import { Banner, Footer, ScrollTitle } from "./components";
import { TimeLine } from "./components/TimeLine";

export default function Home() {
  return (
    <div>
      <Banner />
      <ScrollTitle />
      <TimeLine />
      <Footer />
    </div>
  );
}
