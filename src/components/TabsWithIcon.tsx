import React, { useContext } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import {
  NewspaperIcon,
  HeartIcon,
} from "@heroicons/react/24/solid";
import { NewsContext } from "../Context/NewsContext";
import BlogCard from "./BlogCard";



export function TabsWithIcon() {
  const { dataNews, error, loading, store } = useContext(NewsContext)

  const data = [
    {
      label: "News",
      value: "News",
      icon: NewspaperIcon,
      desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people
      who are like offended by it, it doesn't matter.`,
    },
    {
      label: "Favorite",
      value: "Favorite",
      icon: HeartIcon,
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
  ];

  if (error) return <p>{error.message}</p>
  return (
    <Tabs value="dashboard">
      <TabsHeader className="w-[600px] mx-auto">
        {data.map(({ label, value, icon }) => (
          <Tab key={value} value={value}>
            <div className="flex items-center gap-2">
              {React.createElement(icon, { className: "w-5 h-5" })}
              {label}
            </div>
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        <TabPanel key={data[0].value} value={data[0].value}>
          {loading && <p>Loading...</p>}
          {(dataNews && !loading) && (
            dataNews.map((data) => (
              <BlogCard key={data.id} data={data} />)
            ))}
        </TabPanel>
        <TabPanel key={data[1].value} value={data[1].value}>
          {(store) && (
            store.map((data) => (
              <BlogCard key={data.id} data={data} />)
            ))}
        </TabPanel>
      </TabsBody>
    </Tabs>
  );
}