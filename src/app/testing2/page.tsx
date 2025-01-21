// 'use client'

// import LoginForm from '@/components/Forms/LoginForm'
// import { Tabs } from '@/components/ui'
// import { useGetCountriesQuery } from '@/redux/api/fakeApi'

// const tabsData = [
//   {
//     label: 'Tab 1',
//     content: <LoginForm />,
//   },
//   {
//     label: 'Tab 2',
//     content: <p>This is the content for Tab 2.</p>,
//   },
// ]

// const Testing2page = () => {
//   const { data, isLoading, isError } = useGetCountriesQuery({})
//   console.log('data countries', data)

//   if (isLoading) {
//     return <p>Loading ...</p>
//   }

//   if (isError) {
//     return <p>Error....</p>
//   }

//   return (
//     <div>
//       <div className="container mx-auto py-10">
//         <h1 className="text-3xl font-bold mb-6">Dynamic Tabs Example</h1>
//         <Tabs tabs={tabsData} />
//       </div>
//     </div>
//   )
// }

// export default Testing2page

'use client';

import LoginForm from '@/components/Forms/LoginForm';
import { Tabs } from '@/components/ui';
import { useGetCountriesQuery } from '@/redux/api/fakeApi';
import { FiUser, FiSettings } from 'react-icons/fi'; // Example icons

const tabsData = [
  {
    label: 'Tab 1',
    icon: <FiUser />, // Adding an icon
    content: <LoginForm />,
  },
  {
    label: 'Tab 2',
    icon: <FiSettings />, // Adding an icon
    content: <p>This is the content for Tab 2.</p>,
  },
];

const Testing2page = () => {
  const { data, isLoading, isError } = useGetCountriesQuery({});
  console.log('data countries', data);

  if (isLoading) {
    return <p>Loading ...</p>;
  }

  if (isError) {
    return <p>Error....</p>;
  }

  return (
    <div>
      <div className="container mx-auto py-10">
        <h1 className="text-3xl font-bold mb-6">Dynamic Tabs Example</h1>
        <Tabs tabs={tabsData} />
      </div>
    </div>
  );
};

export default Testing2page;
