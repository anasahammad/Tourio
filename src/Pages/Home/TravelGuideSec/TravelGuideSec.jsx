import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import Overview from "./Tabs/Overview";
import OurPackages from "./Tabs/OurPackages/OurPackages";

const TravelGuideSec = () => {
    return (
        <div>
            <Tabs>
    <TabList className="flex  justify-center  border-b-2 border-gray-200 mb-4">
      <Tab >Overview</Tab>
      <Tab>Our Packages</Tab>
      <Tab>Meet Our Tour Guides</Tab>
    </TabList>

    <TabPanel>
      <Overview />
    </TabPanel>
    <TabPanel>
    <OurPackages/>
    </TabPanel>
    <TabPanel>
      <h2>Any content 3</h2>
    </TabPanel>
  </Tabs> 
        </div>
    );
};

export default TravelGuideSec;