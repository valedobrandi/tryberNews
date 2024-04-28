import React, { useContext } from 'react';
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from '@material-tailwind/react';
import { NewspaperIcon, HeartIcon } from '@heroicons/react/24/solid';
import { NewsContext } from '../Context/NewsContext';
import BlogCard from './BlogCard';
import LoadingBar from './LoadingBar';

export function TabsWithIcon() {
  const { dataNews, error, loading, store } = useContext(NewsContext);

  const dataTab = [
    {
      label: 'News',
      value: 'news',
      icon: NewspaperIcon,
      desc: dataNews,
    },
    {
      label: 'Favorite',
      value: 'Favorite',
      icon: HeartIcon,
      desc: store,
    },
  ];

  return (
    <Tabs value="news">
      <TabsHeader className="max-w-[700px] mx-auto">
        {dataTab.map(({ label, value, icon }) => (
          <Tab key={ value } value={ value }>
            <div className="flex items-center gap-2">
              {React.createElement(icon, { className: 'w-5 h-5' })}
              {label}
            </div>
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {error && <p>{error.message}</p>}
        {loading && !error && <LoadingBar />}
        {dataNews
            && !error
            && !loading
            && dataTab.map(({ desc, value }) => (
              <TabPanel value={ value } key={ value }>
                {desc
                  && desc.map((data, index) => (
                    <BlogCard key={ index } data={ data } />
                  ))}
              </TabPanel>
            ))}
      </TabsBody>
    </Tabs>
  );
}
