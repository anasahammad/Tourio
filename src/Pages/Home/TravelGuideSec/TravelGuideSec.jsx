import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import Overview from "./Tabs/Overview";
import OurPackages from "./Tabs/OurPackages/OurPackages";
import MeetTourGuide from "./MeetOurTourGuide/MeetTourGuide";

const TravelGuideSec = () => {
    return (
        <div className="my-6">
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
     <MeetTourGuide/>
    </TabPanel>
  </Tabs> 
        </div>
    );
};

export default TravelGuideSec;