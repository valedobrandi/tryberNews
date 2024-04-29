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
      desc: store || [],
    },
  ];

  return (
    <Tabs value="news">
      <TabsHeader className="max-w-[700px] mx-auto mb-6">
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
        {error && (
          <>
            <p className="text-center mt-6 text-2xl">{error.message}</p>
            <p className="text-center text-2xl text-red-600">Please Search Again</p>
          </>
        )}
        {loading && !error && <LoadingBar />}
        {dataNews
            && !error
            && !loading
            && dataTab.map(({ value }) => {
              return (
                <TabPanel value={ value } key={ value }>
                  {value === 'news'
                    ? dataNews
                      .map((data) => <BlogCard data={ data } key={ value } />)
                    : store
                      .map((data) => <BlogCard data={ data } key={ value } />)}
                </TabPanel>
              );
            })}
      </TabsBody>
    </Tabs>
  );
}
